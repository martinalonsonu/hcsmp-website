import { console } from "node:console";
import { readdir, readFile, stat } from "node:fs/promises";
import { isAbsolute, relative, resolve } from "node:path";
import process from "node:process";
import { URL } from "node:url";

const outputDirectory = resolve("out");
const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ??
    "https://hermandadsanmartinhuacho.org",
);
const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? "")
  .replace(/\/+$/, "")
  .replace(/^\/+/, "");
const failures = [];

async function collectFiles(directory) {
  const files = [];

  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const fullPath = resolve(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await collectFiles(fullPath)));
    } else if (entry.isFile()) {
      files.push(fullPath);
    }
  }

  return files;
}

function decodeHtml(value) {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&#x27;/gi, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function outputCandidates(pathname) {
  const decodedPath = decodeURIComponent(pathname);
  const segments = decodedPath.split("/").filter(Boolean);
  const baseSegments = basePath.split("/").filter(Boolean);

  if (
    baseSegments.length > 0 &&
    baseSegments.every((segment, index) => segments[index] === segment)
  ) {
    segments.splice(0, baseSegments.length);
  }

  const target = resolve(outputDirectory, ...segments);
  const relativeTarget = relative(outputDirectory, target);
  if (
    relativeTarget.startsWith("..") ||
    isAbsolute(relativeTarget)
  ) {
    throw new Error("La URL escapa del directorio exportado: " + pathname);
  }

  if (segments.length > 0 && /\.[^/]+$/.test(segments.at(-1))) {
    return [target];
  }

  return [target, resolve(target, "index.html"), target + ".html"];
}

async function exists(file) {
  try {
    return (await stat(file)).isFile();
  } catch {
    return false;
  }
}

async function assertUrlExists(url, context) {
  const candidates = outputCandidates(url.pathname);
  for (const candidate of candidates) {
    if (await exists(candidate)) return;
  }

  failures.push(context + " apunta a una ruta o archivo inexistente: " + url.href);
}

async function main() {
  if (!(await exists(resolve(outputDirectory, "index.html")))) {
    throw new Error("No existe out/index.html; ejecuta primero pnpm build.");
  }

  const sitemapPath = resolve(outputDirectory, "sitemap.xml");
  const robotsPath = resolve(outputDirectory, "robots.txt");
  if (!(await exists(sitemapPath))) {
    throw new Error("No existe out/sitemap.xml.");
  }
  if (!(await exists(robotsPath))) {
    throw new Error("No existe out/robots.txt.");
  }

  const sitemap = await readFile(sitemapPath, "utf8");
  const sitemapUrls = Array.from(
    sitemap.matchAll(/<loc>([\s\S]*?)<\/loc>/g),
    ([, location]) => new URL(decodeHtml(location.trim())),
  );
  if (sitemapUrls.length === 0) {
    throw new Error("El sitemap exportado no contiene URLs.");
  }

  const expectedSitemapUrl = new URL(
    (basePath ? "/" + basePath : "") + "/sitemap.xml",
    siteUrl,
  ).href;
  const robots = await readFile(robotsPath, "utf8");
  const robotsSitemaps = Array.from(
    robots.matchAll(/^Sitemap:\s*(\S+)\s*$/gim),
    ([, url]) => url,
  );
  if (!robotsSitemaps.includes(expectedSitemapUrl)) {
    failures.push("robots.txt no referencia " + expectedSitemapUrl);
  }

  for (const url of sitemapUrls) {
    if (url.origin !== siteUrl.origin) {
      failures.push("El sitemap contiene otro dominio: " + url.href);
      continue;
    }
    await assertUrlExists(url, "Sitemap");
  }

  const files = await collectFiles(outputDirectory);
  const htmlFiles = files.filter((file) => file.toLowerCase().endsWith(".html"));
  const attributePattern = /\b(?:href|src)\s*=\s*(["'])(.*?)\1/giu;

  for (const htmlFile of htmlFiles) {
    const html = await readFile(htmlFile, "utf8");
    const relativeHtml = relative(outputDirectory, htmlFile).replace(/\\/g, "/");
    const pagePath = "/" + relativeHtml.replace(/index\.html$/i, "");
    const pageUrl = new URL(pagePath, siteUrl);

    for (const [, , rawValue] of html.matchAll(attributePattern)) {
      const value = decodeHtml(rawValue.trim());
      if (
        value === "" ||
        value.startsWith("#") ||
        /^(?:data:|blob:|mailto:|tel:|javascript:)/i.test(value)
      ) {
        continue;
      }

      let url;
      try {
        url = new URL(value, pageUrl);
      } catch {
        failures.push(
          relativeHtml + " contiene una URL local inválida: " + value,
        );
        continue;
      }

      if (
        (url.protocol === "http:" || url.protocol === "https:") &&
        url.origin === siteUrl.origin
      ) {
        await assertUrlExists(url, relativeHtml);
      }
    }
  }

  if (failures.length > 0) {
    console.error("Falló la validación de la exportación estática:");
    for (const failure of failures.slice(0, 50)) {
      console.error("- " + failure);
    }
    if (failures.length > 50) {
      console.error("- ... y " + (failures.length - 50) + " errores más.");
    }
    process.exitCode = 1;
    return;
  }

  console.log(
    "Exportación válida: " +
      sitemapUrls.length +
      " URLs en sitemap y " +
      htmlFiles.length +
      " páginas HTML revisadas.",
  );
}

await main();
