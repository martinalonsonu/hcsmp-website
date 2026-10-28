import clsx from "clsx";
import { ArrowRight, CalendarDays } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { newsArticles, type NewsArticle } from "@/models/blog/news";

export function NewsList({
  articles = newsArticles,
}: {
  articles?: readonly NewsArticle[];
}) {
  if (articles.length === 0) {
    return (
      <div className="border border-line bg-mist/50 p-6 sm:p-8">
        <h2 className="font-display text-2xl">
          Aún no hay noticias publicadas
        </h2>
        <p className="mt-4 text-base leading-8 text-muted">
          Los comunicados oficiales se publicarán aquí cuando sean confirmados
          por la Junta Directiva.
        </p>
        <Link
          className="mt-5 inline-flex min-h-11 items-center gap-3 text-sm font-semibold underline underline-offset-4"
          href="/contacto"
        >
          Contactar a la Hermandad <ArrowRight aria-hidden="true" size={16} />
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-6">
      {articles.map((article) => (
        <article
          className="overflow-hidden border border-line bg-white/30"
          key={article.slug}
        >
          <Link
            className={clsx(
              "group grid transition-colors hover:bg-white/50",
              article.image && "sm:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]",
            )}
            href={`/blog/${article.slug}`}
          >
            {article.image && (
              <div className="relative aspect-[4/3] overflow-hidden bg-mist sm:aspect-auto sm:min-h-72">
                <Image
                  alt={article.title}
                  className="object-cover transition-transform duration-500 motion-safe:group-hover:scale-[1.03]"
                  fill
                  quality={90}
                  sizes="(max-width: 640px) 100vw, 35vw"
                  src={article.image}
                />
              </div>
            )}
            <div className="flex flex-col justify-center p-5 sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-clay-text">
                {article.eyebrow ?? article.category}
              </p>
              <h2 className="mt-3 font-display text-2xl leading-snug group-hover:underline decoration-clay underline-offset-4 sm:text-3xl">
                {article.title}
              </h2>
              <p className="mt-4 flex items-center gap-2 text-sm text-muted">
                <CalendarDays aria-hidden="true" size={15} />
                {article.publishedAt ? (
                  <time dateTime={article.publishedAt}>{article.date}</time>
                ) : (
                  <span>{article.date}</span>
                )}
              </p>
              <p className="mt-4 text-sm leading-7 text-muted">
                {article.summary}
              </p>
              <span className="mt-5 inline-flex min-h-11 items-center gap-3 text-sm font-semibold">
                Leer más <ArrowRight aria-hidden="true" size={17} />
              </span>
            </div>
          </Link>
        </article>
      ))}
    </div>
  );
}
