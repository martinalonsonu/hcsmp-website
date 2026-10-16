import type { Metadata } from "next";
import { ArrowLeft, CalendarDays } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
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
          className="inline-flex min-h-10 items-center gap-2 text-xs font-semibold text-forest-link hover:text-clay"
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
        className="inline-flex min-h-10 items-center gap-2 text-xs font-semibold text-forest-link hover:text-clay"
        href="/blog"
      >
        <ArrowLeft aria-hidden="true" size={15} /> Volver al blog
      </Link>
      <p className="mt-10 text-[10px] font-semibold uppercase tracking-[0.16em] text-clay">
        {article.eyebrow ?? article.category}
      </p>
      <h1 className="mt-4 font-display text-4xl leading-tight sm:text-5xl md:text-6xl">
        {article.title}
      </h1>
      <p className="mt-5 flex items-center gap-2 text-xs text-muted">
        <CalendarDays aria-hidden="true" size={14} /> {article.date}
      </p>
      {article.image && (
        <figure className="relative mt-8 overflow-hidden sm:mt-10">
          <Image
            alt={article.title}
            className=" w-full"
            priority
            quality={90}
            width={768}
            height={400}
            sizes="(max-width: 1080px) 100vw, 1080px"
            src={article.image}
          />
        </figure>
      )}
      <p className="mt-9 border-y border-line py-6 font-display text-xl leading-relaxed sm:text-2xl">
        {article.summary}
      </p>
      <div className="prose-news mt-8">
        <ReactMarkdown
          components={{
            h1: ({ children }) => (
              <h2 className="mt-10 font-display text-2xl sm:text-3xl">
                {children}
              </h2>
            ),
            h2: ({ children }) => (
              <h2 className="mt-10 font-display text-2xl sm:text-3xl">
                {children}
              </h2>
            ),
            h3: ({ children }) => (
              <h3 className="mt-8 font-display text-xl sm:text-2xl">
                {children}
              </h3>
            ),
            p: ({ children }) => (
              <p className="mt-5 text-sm leading-8 text-muted sm:text-base">
                {children}
              </p>
            ),
            strong: ({ children }) => (
              <strong className="font-semibold text-ink">{children}</strong>
            ),
            ol: ({ children }) => (
              <ol className="mt-5 list-decimal space-y-2 pl-6 text-sm leading-7 text-muted sm:text-base">
                {children}
              </ol>
            ),
            ul: ({ children }) => (
              <ul className="mt-5 list-disc space-y-2 pl-6 text-sm leading-7 text-muted sm:text-base">
                {children}
              </ul>
            ),
            li: ({ children }) => <li className="pl-1">{children}</li>,
            blockquote: ({ children }) => (
              <blockquote className="mt-8 border-l-2 border-clay pl-5 font-display text-lg leading-relaxed text-ink sm:text-2xl">
                {children}
              </blockquote>
            ),
          }}
        >
          {article.content}
        </ReactMarkdown>
      </div>
    </article>
    </>
  );
}
