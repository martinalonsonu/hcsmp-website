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
      <div className="border-l-2 border-clay bg-mist/50 p-7 sm:p-10">
        <h2 className="font-display text-2xl sm:text-3xl">
          Aún no hay noticias publicadas
        </h2>
        <p className="mt-4 text-base leading-8 text-muted">
          Los comunicados oficiales se publicarán aquí cuando sean confirmados
          por la Junta Directiva.
        </p>
        <Link className="button-secondary mt-6" href="/contacto">
          Contactar a la Hermandad <ArrowRight aria-hidden="true" size={16} />
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-10 sm:gap-14">
      {articles.map((article, index) => (
        <article
          className={clsx(
            "min-w-0",
            index === 0
              ? "overflow-hidden bg-ink text-paper"
              : "border-b border-line pb-8 sm:pb-10",
          )}
          key={article.slug}
        >
          <Link
            className={clsx(
              "group grid",
              article.image &&
                (index === 0
                  ? "xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]"
                  : "sm:grid-cols-[minmax(0,0.65fr)_minmax(0,1fr)] sm:gap-8"),
            )}
            href={`/blog/${article.slug}`}
          >
            {article.image && (
              <div
                className={clsx(
                  "relative overflow-hidden bg-mist",
                  index === 0
                    ? "aspect-[16/11] xl:aspect-auto xl:min-h-[28rem]"
                    : "aspect-[4/3] sm:aspect-auto sm:min-h-72",
                )}
              >
                <Image
                  alt={article.title}
                  className="object-cover transition-transform duration-700 motion-safe:group-hover:scale-[1.04]"
                  fill
                  quality={90}
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 70vw, 35vw"
                  src={article.image}
                />
              </div>
            )}
            <div
              className={clsx(
                "flex flex-col justify-center",
                index === 0 ? "p-6 sm:p-9" : "pt-6 sm:py-2",
              )}
            >
              <p
                className={clsx(
                  "text-[10px] font-semibold uppercase tracking-[0.18em]",
                  index === 0 ? "text-paper/70" : "text-muted",
                )}
              >
                <span
                  aria-hidden="true"
                  className={clsx(
                    "mr-3",
                    index === 0 ? "text-clay" : "text-clay-text",
                  )}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                {article.eyebrow ?? article.category}
              </p>
              <h2
                className={clsx(
                  "mt-5 font-display leading-snug group-hover:underline decoration-clay underline-offset-4",
                  index === 0 ? "text-3xl sm:text-4xl" : "text-2xl sm:text-3xl",
                )}
              >
                {article.title}
              </h2>
              <p
                className={clsx(
                  "mt-5 flex items-center gap-2 text-xs",
                  index === 0 ? "text-paper/70" : "text-muted",
                )}
              >
                <CalendarDays aria-hidden="true" size={15} />
                {article.publishedAt ? (
                  <time dateTime={article.publishedAt}>{article.date}</time>
                ) : (
                  <span>{article.date}</span>
                )}
              </p>
              <p
                className={clsx(
                  "mt-5 text-sm leading-8",
                  index === 0 ? "text-paper/80" : "text-muted",
                )}
              >
                {article.summary}
              </p>
              <span
                className={clsx(
                  "mt-7 inline-flex min-h-11 items-center justify-between gap-6 border-t pt-5 text-xs font-semibold",
                  index === 0 ? "border-paper/20" : "border-line",
                )}
              >
                Leer más{" "}
                <ArrowRight
                  aria-hidden="true"
                  className="transition-transform motion-safe:group-hover:translate-x-1"
                  size={19}
                />
              </span>
            </div>
          </Link>
        </article>
      ))}
    </div>
  );
}
