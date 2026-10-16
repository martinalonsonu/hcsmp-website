import type { MetadataRoute } from "next";
import { institutionalPages } from "@/models/hermandad/institutional-pages";
import { newsArticles } from "@/models/blog/news";
import { getCanonicalUrl } from "@/models/seo/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = new Set([
    "/",
    "/contacto",
    "/vida",
    "/blog",
    ...institutionalPages
      .filter(
        (page) =>
          page.path !== "/san-martin" &&
          !page.path.startsWith("/san-martin/") &&
          page.path !== "/vida-de-hermandad" &&
          !page.path.startsWith("/vida-de-hermandad/") &&
          !page.path.startsWith("/hermandad/pilares/"),
      )
      .map((page) => page.path),
    ...newsArticles.map((article) => `/blog/${article.slug}`),
  ]);

  return Array.from(paths, (path) => ({
      url: getCanonicalUrl(path),
      changeFrequency: path === "/" ? "weekly" : "monthly",
      priority: path === "/" ? 1 : 0.7,
    }));
}
