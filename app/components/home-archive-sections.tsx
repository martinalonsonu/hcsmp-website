import Link from "next/link";
import { SectionCta } from "@/app/components/section-cta";
import { MultimediaCarousel } from "@/app/components/multimedia-carousel";
import { boardMembers } from "@/app/data/institutional-pages";
import { newsArticles } from "@/app/data/news";

export function HomeArchiveSections() {
  return (
    <>
      <section className="py-10 sm:py-16 md:py-24" id="multimedia">
        <div className="mx-auto w-[calc(100%-2rem)] max-w-7xl sm:w-[calc(100%-2.5rem)] md:w-[calc(100%-4rem)]">
          <div className="mb-5 flex flex-col justify-between gap-3 sm:mb-10 sm:flex-row sm:items-end sm:gap-4">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-clay">
                Imágenes para recordar
              </p>
              <h2 className="mt-3 font-display text-2xl font-normal sm:mt-4 sm:text-4xl md:text-5xl">
                Multimedia
              </h2>
            </div>
            <p className="max-w-sm text-xs leading-6 text-muted">
              Momentos de la Hermandad que permanecen en nuestra memoria.
            </p>
          </div>
          <MultimediaCarousel />
          <SectionCta href="/memoria/fotografias">
            Explora el archivo fotográfico
          </SectionCta>
        </div>
      </section>

      <section
        className="bg-[#e9e3d8] py-10 text-[#111111] sm:py-16 md:py-24"
        id="noticias"
      >
        <div className="mx-auto w-[calc(100%-2rem)] max-w-7xl sm:w-[calc(100%-2.5rem)] md:w-[calc(100%-4rem)]">
          <div className="mb-5 flex flex-col justify-between gap-3 sm:mb-10 sm:flex-row sm:items-end sm:gap-4">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8d7443]">
                Vida institucional
              </p>
              <h2 className="mt-3 font-display text-2xl font-normal sm:mt-4 sm:text-4xl md:text-5xl">
                Noticias y comunicados
              </h2>
            </div>
            <p className="max-w-sm text-xs leading-6 text-[#625e57]">
              Actualizaciones, convocatorias y memoria de la Hermandad.
            </p>
          </div>
          {newsArticles.length > 0 ? (
            <div className="grid border-t border-[#c9beaa] sm:grid-cols-3 sm:gap-5">
              {newsArticles.slice(0, 3).map((article, index) => (
                <article
                  className="border-b border-[#c9beaa] py-5 sm:border-b-0 sm:py-6"
                  key={article.slug}
                >
                  <p className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.14em] text-[#8d7443]">
                    {article.category}
                    <span>0{index + 1}</span>
                  </p>
                  <h3 className="mt-5 max-w-sm font-display text-xl leading-snug sm:mt-8 sm:text-2xl">
                    {article.title}
                  </h3>
                  <Link
                    className="mt-5 inline-flex min-h-10 items-center gap-3 text-xs font-semibold text-[#2a2a2a] hover:text-[#8d7443]"
                    href={`/noticias/${article.slug}`}
                  >
                    Leer noticia<span aria-hidden="true">→</span>
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <p className="border-t border-[#c9beaa] py-6 text-sm leading-7 text-[#625e57]">
              Los comunicados oficiales se publicarán aquí cuando sean
              confirmados por la Junta Directiva.
            </p>
          )}
          <SectionCta href="/noticias">Ver noticias y comunicados</SectionCta>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24" id="junta-directiva">
        <div className="mx-auto grid w-[calc(100%-2rem)] max-w-7xl gap-7 sm:w-[calc(100%-2.5rem)] md:w-[calc(100%-4rem)] md:grid-cols-[0.8fr_1.2fr] md:gap-20">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-clay">
              Representación institucional
            </p>
            <h2 className="mt-5 font-display text-3xl font-normal leading-tight sm:text-4xl md:text-5xl">
              Junta Directiva
            </h2>
          </div>
          <div className="border-t border-line pt-5 sm:pt-6">
            <p className="max-w-2xl text-sm leading-7 text-muted sm:text-base sm:leading-8">
              La Junta Directiva acompaña la vida y continuidad de la Hermandad
              durante el periodo 2026.
            </p>
            <dl className="mt-5 grid gap-3 border-t border-line pt-4 sm:grid-cols-3">
              {boardMembers.map((member) => (
                <div key={member.id}>
                  <dt className="text-[10px] uppercase tracking-[0.12em] text-muted">
                    {member.role}
                  </dt>
                  <dd className="mt-1 text-xs font-medium">{member.name}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </>
  );
}
