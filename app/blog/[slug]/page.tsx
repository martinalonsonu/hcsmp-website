import type { Metadata } from "next";
import { ArrowLeft, CalendarDays } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArticleContent } from "@/components/blog/article-content";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { getNewsArticle, newsArticles } from "@/models/blog/news";
import {
  createBreadcrumbSchema,
  createSiteGraph,
  createWebPageSchema,
  organizationSchema,
} from "@/models/seo/schemas";
import { SITE_URL, getCanonicalUrl } from "@/models/seo/site";

type NewsPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return newsArticles.length > 0
    ? newsArticles.map((article) => ({ slug: article.slug }))
    : [{ slug: "sin-publicaciones" }];
}

export async function generateMetadata({
  params,
}: NewsPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getNewsArticle(slug);
  if (!article && newsArticles.length === 0 && slug === "sin-publicaciones") {
    return {
      title: "Noticias",
      description: "Aún no hay noticias publicadas.",
      alternates: { canonical: getCanonicalUrl("/blog/sin-publicaciones") },
    };
  }
  if (!article) notFound();

  return {
    title: article.title,
    description: article.summary,
    alternates: { canonical: getCanonicalUrl(`/blog/${article.slug}`) },
    openGraph: {
      title: article.title,
      description: article.summary,
      url: getCanonicalUrl(`/blog/${article.slug}`),
      siteName: "Hermandad de Cargadores de San Martín de Porres",
      type: "article",
      publishedTime: article.publishedAt,
      images: article.image ? [article.image] : undefined,
    },
    twitter: {
      card: article.image ? "summary_large_image" : "summary",
      title: article.title,
      description: article.summary,
      images: article.image ? [article.image] : undefined,
    },
  };
}

export default async function NewsArticlePage({ params }: NewsPageProps) {
  const { slug } = await params;
  const article = getNewsArticle(slug);
  if (!article && newsArticles.length === 0 && slug === "sin-publicaciones") {
    return (
      <article className="mx-auto w-[calc(100%-2rem)] max-w-4xl py-14 sm:w-[calc(100%-2.5rem)] sm:py-20 md:py-28">
        <Link
          className="inline-flex min-h-11 items-center gap-2 text-xs font-semibold text-forest-link hover:text-clay"
          href="/"
        >
          <ArrowLeft aria-hidden="true" size={15} /> Volver al inicio
        </Link>
        <h1 className="mt-10 font-display text-4xl leading-tight sm:text-5xl md:text-6xl">
          Aún no hay noticias publicadas
        </h1>
      </article>
    );
  }
  if (!article) notFound();

  const canonicalUrl = getCanonicalUrl(`/blog/${article.slug}`);
  const articleStructuredData = createSiteGraph(
    createWebPageSchema({
      name: article.title,
      description: article.summary,
      path: `/blog/${article.slug}`,
      type: "WebPage",
    }),
    {
      "@type": "Article",
      "@id": `${canonicalUrl}#article`,
      mainEntityOfPage: canonicalUrl,
      headline: article.title,
      description: article.summary,
      image: article.image ? [article.image] : undefined,
      datePublished: article.publishedAt,
      author: { "@id": `${SITE_URL}/#organization` },
      publisher: organizationSchema,
      inLanguage: "es-PE",
    },
    createBreadcrumbSchema([
      { name: "Inicio", path: "/" },
      { name: "Blog", path: "/blog" },
      { name: article.title, path: `/blog/${article.slug}` },
    ]),
  );

  return (
    <>
      <JsonLd data={articleStructuredData} />
      <article className="mx-auto w-[calc(100%-2rem)] max-w-4xl py-14 sm:w-[calc(100%-2.5rem)] sm:py-20 md:py-28">
        <Link
          className="inline-flex min-h-11 items-center gap-2 text-xs font-semibold text-forest-link hover:text-clay"
          href="/blog"
        >
          <ArrowLeft aria-hidden="true" size={15} /> Volver al blog
        </Link>
        <Breadcrumbs
          items={[{ label: "Blog", href: "/blog" }, { label: article.title }]}
        />
        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.16em] text-clay-text">
          {article.eyebrow ?? article.category}
        </p>
        <h1 className="mt-4 font-display text-4xl leading-tight sm:text-5xl md:text-6xl">
          {article.title}
        </h1>
        <p className="mt-5 flex items-center gap-2 text-xs text-muted">
          <CalendarDays aria-hidden="true" size={14} />{" "}
          {article.publishedAt ? (
            <time dateTime={article.publishedAt}>{article.date}</time>
          ) : (
            <span>{article.date}</span>
          )}
        </p>
        {article.image && (
          <figure className="relative mt-8 overflow-hidden sm:mt-10">
            <Image
              alt={article.title}
              className="h-auto w-full"
              preload
              quality={90}
              width={768}
              height={400}
              sizes="(max-width: 896px) 100vw, 896px"
              src={article.image}
            />
          </figure>
        )}
        <p className="mt-9 border-y border-line py-6 font-display text-xl leading-relaxed sm:text-2xl">
          {article.summary}
        </p>
        <ArticleContent content={article.content} />
        <nav
          aria-label="Continuar leyendo"
          className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6"
        >
          <Link
            className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold underline-offset-4 hover:underline"
            href="/blog"
          >
            <ArrowLeft aria-hidden="true" size={16} /> Ver todas las
            publicaciones
          </Link>
          <Link
            className="inline-flex min-h-11 items-center text-sm font-semibold underline-offset-4 hover:underline"
            href="/contacto"
          >
            Contactar a la Hermandad →
          </Link>
        </nav>
      </article>
    </>
  );
}
