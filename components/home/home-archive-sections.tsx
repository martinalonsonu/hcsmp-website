import Link from "next/link";
import { SectionCta } from "@/components/shared/section-cta";
import { MultimediaCarousel } from "@/components/home/multimedia-carousel";
import { boardMembers } from "@/models/hermandad/institutional-pages";
import { newsArticles } from "@/models/blog/news";

export function HomeNewsSection() {
  return (
    <section
      className="bg-[#e9e3d8] py-10 text-[#111111] sm:py-16 md:py-24"
      id="noticias"
    >
      <div className="site-container ">
        <div className="mb-5 flex flex-col justify-between gap-3 sm:mb-10 sm:flex-row sm:items-end sm:gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-clay-text">
              Noticias y actualidad institucional
            </p>
            <h2 className="mt-3 font-display text-2xl font-normal sm:mt-4 sm:text-4xl md:text-5xl">
              Blog
            </h2>
          </div>
          <p className="max-w-sm text-xs leading-6 text-[#625e57]">
            Actualizaciones y convocatorias de la Hermandad.
          </p>
        </div>
        {newsArticles.length > 0 ? (
          <div className="grid border-t border-[#c9beaa] sm:grid-cols-3 sm:gap-5">
            {newsArticles.slice(0, 3).map((article, index) => (
              <article
                className="border-b border-[#c9beaa] py-5 sm:border-b-0 sm:py-6"
                key={article.slug}
              >
                <p className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.14em] text-clay-text">
                  {article.category}
                  <span>0{index + 1}</span>
                </p>
                <p className="mt-3 text-xs text-muted">
                  {article.publishedAt ? (
                    <time dateTime={article.publishedAt}>{article.date}</time>
                  ) : (
                    <span>{article.date}</span>
                  )}
                </p>
                <h3 className="mt-5 max-w-sm font-display text-xl leading-snug sm:mt-8 sm:text-2xl">
                  <Link
                    className="underline-offset-4 hover:underline decoration-clay"
                    href={`/blog/${article.slug}`}
                  >
                    {article.title}
                  </Link>
                </h3>
                <Link
                  className="mt-5 inline-flex min-h-11 items-center gap-3 text-xs font-semibold text-[#2a2a2a] hover:text-clay-text"
                  href={`/blog/${article.slug}`}
                >
                  Leer nota<span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <p className="border-t border-[#c9beaa] py-6 text-sm leading-7 text-[#625e57]">
            Los comunicados oficiales se publicarán aquí cuando sean confirmados
            por la Junta Directiva.
          </p>
        )}
        <SectionCta href="/blog">Ver blog</SectionCta>
      </div>
    </section>
  );
}

export function HomeArchiveSections() {
  return (
    <>
      <section className="py-16 sm:py-20 md:py-28" id="multimedia">
        <div className="site-container">
          <div className="mb-9 flex flex-col justify-between gap-5 sm:mb-12 sm:flex-row sm:items-end sm:gap-8">
            <div>
              <p className="eyebrow">Imágenes para recordar</p>
              <h2 className="section-heading mt-4">Multimedia</h2>
            </div>
            <p className="max-w-xs text-sm leading-7 text-muted">
              Momentos de la Hermandad que permanecen en nuestra memoria.
            </p>
          </div>
          <MultimediaCarousel />
          <SectionCta href="/archivo/fotografias">
            Explora el archivo fotográfico
          </SectionCta>
        </div>
      </section>

      <section
        className="border-t border-line bg-mist/40 py-16 sm:py-20 md:py-28"
        id="junta-directiva"
      >
        <div className="site-container grid items-start gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div>
            <p className="eyebrow">Representación institucional</p>
            <h2 className="section-heading mt-5">Junta Directiva</h2>
            <p className="mt-6 max-w-sm text-sm leading-8 text-muted">
              La Junta Directiva acompaña la vida y continuidad de la Hermandad
              durante el periodo 2026.
            </p>
            <p
              aria-hidden="true"
              className="mt-8 font-display text-6xl text-clay-text sm:text-7xl"
            >
              2026
            </p>
          </div>
          <div className="min-w-0">
            <dl className="divide-y divide-line border-y border-line">
              {boardMembers.map((member) => (
                <div
                  className="grid gap-2 py-5 sm:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] sm:items-baseline sm:gap-7"
                  key={member.id}
                >
                  <dt className="text-[11px] font-medium uppercase leading-6 tracking-[0.1em] text-muted">
                    {member.role}
                  </dt>
                  <dd className="text-sm font-medium leading-7">
                    {member.name}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </>
  );
}
