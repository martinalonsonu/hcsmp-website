import type { Metadata } from "next";
import { ArrowLeft, CalendarDays } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { getNewsArticle, newsArticles } from "@/app/data/news";

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
    };
  }
  if (!article) notFound();

  return {
    title: article.title,
    description: article.summary,
    openGraph: {
      title: article.title,
      description: article.summary,
      type: "article",
      publishedTime: article.publishedAt,
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

  return (
    <article className="mx-auto w-[calc(100%-2rem)] max-w-4xl py-14 sm:w-[calc(100%-2.5rem)] sm:py-20 md:py-28">
      <Link
        className="inline-flex min-h-10 items-center gap-2 text-xs font-semibold text-forest-link hover:text-clay"
        href="/noticias"
      >
        <ArrowLeft aria-hidden="true" size={15} /> Volver a noticias
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
        <figure className="relative mt-8 aspect-video overflow-hidden bg-mist sm:mt-10">
          <Image
            alt={article.title}
            className="object-cover"
            fill
            priority
            quality={90}
            sizes="(max-width: 768px) 100vw, 768px"
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
  );
}
