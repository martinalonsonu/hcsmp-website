import type { MetadataRoute } from "next";
import { institutionalPages } from "@/app/data/institutional-pages";
import { newsArticles } from "@/app/data/news";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  const paths = [
    "/",
    "/contacto",
    ...institutionalPages.map((page) => page.path),
    ...newsArticles.map((article) => `/noticias/${article.slug}`),
  ];

  return paths.map((path) => ({
    url: new URL(path, siteUrl).toString(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
