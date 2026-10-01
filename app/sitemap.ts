import type { MetadataRoute } from "next";
import { institutionalPages } from "@/app/data/institutional-pages";
import { newsArticles } from "@/app/data/news";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = (
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
  ).replace(/\/+$/, "");
  const basePath =
    process.env.NEXT_PUBLIC_BASE_PATH === "/"
      ? ""
      : (process.env.NEXT_PUBLIC_BASE_PATH ?? "");
  const paths = [
    "/",
    "/contacto",
    ...institutionalPages.map((page) => page.path),
    ...newsArticles.map((article) => `/noticias/${article.slug}`),
  ];

  return paths.map((path) => {
    const urlPath = path === "/" ? path : `${path}/`;

    return {
      url: `${siteUrl}${basePath}${urlPath}`,
      changeFrequency: path === "/" ? "weekly" : "monthly",
      priority: path === "/" ? 1 : 0.7,
    };
  });
}
