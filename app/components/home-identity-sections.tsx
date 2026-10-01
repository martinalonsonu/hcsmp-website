import Image from "next/image";
import Link from "next/link";
import { assetUrl } from "@/app/data/assets";
import { HomeClosingSection } from "@/app/components/home-closing-section";
import { SectionCta } from "@/app/components/section-cta";
import {
  fiestaEvents,
  historicalEvents,
  processionalRouteEvents,
} from "@/app/data/institutional-pages";

export function HomeIdentitySections() {
  return (
    <>
      <section
        className="relative isolate overflow-hidden bg-[#111111] py-10 text-[#f4f0e6] sm:py-16 md:py-24"
        id="historia"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-scroll bg-cover bg-position-[center_48%] grayscale"
          style={{ backgroundImage: `url("${assetUrl("smp-cruz.jpg")}")` }}
        />
        <div aria-hidden="true" className="absolute inset-0 bg-[#111111]/80" />
        <div className="relative z-10 mx-auto w-[calc(100%-2rem)] max-w-7xl sm:w-[calc(100%-2.5rem)] md:w-[calc(100%-4rem)]">
          <div className="grid gap-5 sm:gap-7 md:grid-cols-[0.7fr_1.3fr] md:gap-20">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#b89b5e]">
                Cronología histórica
              </p>
              <h2 className="mt-3 font-display text-2xl font-normal leading-tight sm:mt-5 sm:text-4xl md:text-5xl">
                Nuestra historia
              </h2>
              <p className="mt-3 max-w-sm text-xs leading-6 text-white/75 sm:mt-5 sm:text-sm sm:leading-7">
                Hitos reunidos desde antecedentes institucionales y la
                cronología histórica compartida por la Hermandad.
              </p>
              <SectionCta href="/contacto" inverse>
                Sé parte
              </SectionCta>
            </div>
            <ol className="relative ml-1 grid border-l border-[#b89b5e]/70 md:ml-0 md:grid-cols-3 md:gap-y-10 md:border-l-0">
              {historicalEvents.slice(0, 6).map(({ id, year, title }) => (
                <li
                  className="relative border-b border-white/15 pb-4 pl-6 last:border-b-0 last:pb-0 sm:pb-5 md:border-b-0 md:border-t md:border-[#b89b5e]/70 md:px-2 md:pb-0 md:pl-2 md:pt-6"
                  key={id}
                >
                  <span
                    aria-hidden="true"
                    className="absolute -left-[5px] top-1 size-[9px] rounded-full border border-[#b89b5e] bg-[#111111] md:-top-[5px] md:left-2"
                  />
                  <time
                    className="font-display text-xl text-[#b89b5e] sm:text-2xl"
                    dateTime={String(year)}
                  >
                    {year}
                  </time>
                  <h3 className="mt-1 font-display text-sm leading-snug text-[#f4f0e6] sm:mt-2 sm:text-lg">
                    {title}
                  </h3>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-16 md:py-28" id="san-martin">
        <div className="mx-auto grid w-[calc(100%-2rem)] max-w-7xl gap-5 sm:w-[calc(100%-2.5rem)] sm:gap-9 md:w-[calc(100%-4rem)] md:grid-cols-[0.95fr_1.05fr] md:items-center md:gap-20">
          <figure className="relative aspect-[4/3] w-full overflow-hidden bg-[#2a2a2a]">
            <Image
              alt="Imagen de San Martín de Porres en su anda procesional"
              className="object-cover object-[center_32%]"
              fill
              quality={90}
              sizes="(max-width: 768px) 100vw, 48vw"
              src={assetUrl("smp.jpg")}
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/75 to-transparent px-5 pb-5 pt-16 text-xs text-white/85">
              San Martín de Porres · Cruz Blanca
            </figcaption>
          </figure>
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-clay">
              Santo de la caridad y la sencillez
            </p>
            <h2 className="mt-3 font-display text-2xl font-normal leading-tight sm:mt-5 sm:text-4xl md:text-5xl">
              San Martín de Porres
            </h2>
            <p className="mt-3 max-w-xl text-xs leading-6 text-muted sm:mt-5 sm:text-base sm:leading-8">
              Dominico limeño, hizo de la oración y la contemplación una vida de
              servicio. Como hermano donado, puso sus oficios de barbero y
              practicante de medicina al cuidado de personas pobres, enfermas y
              excluidas. Su caridad y humildad siguen inspirando a la Hermandad.
            </p>
            <div className="mt-5 grid grid-cols-2 border-t border-line sm:mt-8">
              {[
                ["9 dic 1579", "Nació en Lima"],
                ["3 nov 1639", "Murió a los 59 años"],
                ["1837", "Beatificado"],
                ["6 may 1962", "Canonizado"],
              ].map(([term, detail]) => (
                <div
                  className="border-b border-line py-3 pr-3 sm:py-5"
                  key={term}
                >
                  <p className="font-display text-base sm:text-lg">{term}</p>
                  <p className="mt-1 text-xs leading-5 text-muted sm:text-sm">
                    {detail}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-5 text-xs leading-6 text-muted">
              Su ejemplo une fe, fraternidad y servicio al prójimo.
            </p>
            <SectionCta href="/san-martin-de-porres">
              Conoce a San Martín de Porres
            </SectionCta>
          </div>
        </div>
      </section>

      <HomeClosingSection />

      <section
        className="border-y border-line bg-white/35 py-10 sm:py-16 md:py-24"
        id="significado"
      >
        <div className="mx-auto grid w-[calc(100%-2rem)] max-w-7xl gap-6 sm:w-[calc(100%-2.5rem)] sm:gap-8 md:w-[calc(100%-4rem)] md:grid-cols-[0.7fr_1.3fr] md:items-center md:gap-12">
          <div>
            <h2 className="font-display text-2xl font-normal leading-tight sm:text-3xl md:text-4xl">
              Síguenos en redes
            </h2>
            <p className="mt-3 max-w-sm text-sm leading-7 text-muted">
              Acompaña las noticias, celebraciones y momentos de nuestra
              Hermandad en sus canales oficiales.
            </p>
            <nav
              aria-label="Redes sociales"
              className="mt-5 flex items-center gap-3"
            >
              <a
                aria-label="Facebook de la Hermandad"
                className="inline-flex size-11 items-center justify-center border border-line text-ink transition-colors hover:border-clay hover:text-clay"
                href="https://web.facebook.com/hcsmpcb"
                rel="noreferrer"
                target="_blank"
              >
                <svg
                  aria-hidden="true"
                  className="size-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.4 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7.2V13H10v8h3.4Z" />
                </svg>
              </a>
              <a
                aria-label="Canal de YouTube de la Hermandad"
                className="inline-flex size-11 items-center justify-center border border-line text-ink transition-colors hover:border-clay hover:text-clay"
                href="https://www.youtube.com/@hermandaddesanmartindeporr4803"
                rel="noreferrer"
                target="_blank"
              >
                <svg
                  aria-hidden="true"
                  className="size-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" />
                </svg>
              </a>
              <a
                aria-label="Instagram de la Hermandad"
                className="inline-flex size-11 items-center justify-center border border-line text-ink transition-colors hover:border-clay hover:text-clay"
                href="https://www.instagram.com/hcsmpcb/"
                rel="noreferrer"
                target="_blank"
              >
                <svg
                  aria-hidden="true"
                  className="size-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  viewBox="0 0 24 24"
                >
                  <rect height="17" rx="5" width="17" x="3.5" y="3.5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle
                    cx="17.6"
                    cy="6.7"
                    fill="currentColor"
                    r="1"
                    stroke="none"
                  />
                </svg>
              </a>
            </nav>
          </div>
          <iframe
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="aspect-video w-full border-0"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            src="https://www.youtube.com/embed/2pQa0Ku-dug?si=epib_tMv5JBJclyK&autoplay=1&mute=1"
            title="YouTube video player"
          />
        </div>
      </section>

      <section
        className="relative isolate overflow-hidden bg-[#111111] py-10 text-[#f4f0e6] sm:py-16 md:py-24"
        id="fiesta"
      >
        <Image
          alt=""
          aria-hidden="true"
          className="object-cover object-[center_38%] grayscale opacity-45"
          fill
          quality={90}
          sizes="100vw"
          src={assetUrl("acuarela.jpg")}
        />
        <div aria-hidden="true" className="absolute inset-0 bg-[#111111]/65" />
        <div className="relative z-10 mx-auto w-[calc(100%-2rem)] max-w-7xl sm:w-[calc(100%-2.5rem)] md:w-[calc(100%-4rem)]">
          <div className="flex flex-col justify-between gap-3 sm:gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#b89b5e]">
                Noviembre · Cruz Blanca
              </p>
              <h2 className="mt-3 font-display text-2xl font-normal leading-tight text-[#f4f0e6] sm:mt-4 sm:text-4xl md:text-5xl">
                Solemne Festividad 2026
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-[#f4f0e6]/80">
              Programa de actividades de la Festividad de San Martín 2026.
            </p>
          </div>
          <ol className="mt-5 grid border-t border-white/25 sm:mt-8 sm:grid-cols-2 md:mt-12 lg:grid-cols-3">
            {fiestaEvents.map(({ id, date, title, detail, time }) => (
              <li
                className="relative border-b border-white/25 py-4 sm:border-l sm:border-white/25 sm:px-5 sm:py-6 lg:min-h-36"
                key={id}
              >
                <span className="text-[10px] font-semibold tracking-[0.14em] text-[#d9c28f]">
                  {date}
                </span>
                <h3 className="mt-2 font-display text-base leading-snug text-[#fffefa] sm:mt-3 sm:text-xl">
                  {title}
                </h3>
                {detail && (
                  <p className="mt-2 text-sm leading-6 text-[#f4f0e6]/80">
                    {detail}
                  </p>
                )}
                {time && (
                  <p className="mt-2 text-xs font-semibold text-[#d9c28f]">
                    {time}
                  </p>
                )}
              </li>
            ))}
          </ol>
          <Link
            className="mt-7 inline-flex min-h-11 items-center gap-4 border-b border-[#b89b5e] pb-1 text-sm font-semibold text-[#fffefa] transition-colors hover:text-[#d9c28f]"
            href="/fiesta/programa"
          >
            Ver programa completo <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section
        className="bg-[#e9e3d8] py-10 text-[#111111] sm:py-16 md:py-24"
        id="recorrido"
      >
        <div className="mx-auto grid w-[calc(100%-2rem)] max-w-7xl gap-5 sm:w-[calc(100%-2.5rem)] sm:gap-8 md:w-[calc(100%-4rem)] md:grid-cols-[0.75fr_1.25fr] md:items-center md:gap-20">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8d7443]">
              #CaminemosConMartin
            </p>
            <h2 className="mt-3 font-display text-2xl font-normal leading-tight sm:mt-5 sm:text-4xl md:text-5xl">
              Recorridos Procesionales
            </h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-[#625e57]">
              A lo largo del año, la comunidad se reúne para recordar, celebrar
              y caminar junto a San Martín.
            </p>
          </div>
          <div className="border-y border-[#c9beaa]">
            <ol className="divide-y divide-[#c9beaa]">
              {processionalRouteEvents.map((event) => (
                <li
                  className="grid gap-1 py-4 sm:grid-cols-[11rem_1fr] sm:gap-5 sm:py-5"
                  key={event.id}
                >
                  <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#8d7443] sm:text-xs">
                    {event.date}
                  </p>
                  <div>
                    <h3 className="font-display text-base leading-snug sm:text-lg">
                      {event.title}
                    </h3>
                    {event.detail && (
                      <p className="mt-1 text-xs leading-5 text-[#625e57] sm:text-sm sm:leading-6">
                        {event.detail}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ol>
            <div className="flex justify-center">
              <SectionCta href="/fiesta/recorridos">
                Consultar recorridos
              </SectionCta>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
