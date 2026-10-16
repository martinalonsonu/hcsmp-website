export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://hermandadsanmartinhuacho.org"
).replace(/\/+$/, "");

export const SITE_NAME = "Hermandad de Cargadores de San Martín de Porres";

const BASE_PATH =
  process.env.NEXT_PUBLIC_BASE_PATH === "/"
    ? ""
    : (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/+$/, "");

export function getCanonicalUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const canonicalPath =
    normalizedPath === "/" || normalizedPath.endsWith("/")
      ? normalizedPath
      : `${normalizedPath}/`;
  return `${SITE_URL}${BASE_PATH}${canonicalPath}`;
}
