import { ArrowLeft, CalendarDays, FileText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { firstSisters } from "@/app/data/brotherhood";
import { assetUrl } from "@/app/data/assets";
import { historyChapters } from "@/app/data/history";
import { historicalEvents } from "@/app/data/institutional-pages";
import { PrimaryImageBackground } from "@/app/components/primary-image-background";

export function BrotherhoodHistoryPage() {
  return (
    <>
      <header className="relative isolate overflow-hidden border-b border-[#48443d] bg-[#111111] py-10 text-[#f4f0e6] sm:py-14 md:py-20">
        <PrimaryImageBackground
          alt=""
          className="object-cover object-center grayscale"
          quality={90}
          src={assetUrl("escudo-1.jpg")}
        />
        <div aria-hidden="true" className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 mx-auto w-[calc(100%-2rem)] max-w-7xl sm:w-[calc(100%-2.5rem)] md:w-[calc(100%-4rem)]">
          <nav
            aria-label="Ruta de navegación"
            className="flex items-center gap-2 text-[11px] text-white/75"
          >
            <Link className="hover:text-white" href="/">
              Inicio
            </Link>
            <span aria-hidden="true">/</span>
            <Link className="hover:text-white" href="/hermandad">
              La Hermandad
            </Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page" className="text-white">
              Historia
            </span>
          </nav>
          <p className="mt-8 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#d3b778] sm:mt-11">
            Memoria institucional · Cruz Blanca
          </p>
          <h1 className="mt-3 max-w-5xl font-display text-4xl font-normal leading-[1.08] text-white sm:mt-4 sm:text-5xl md:text-7xl">
            Nuestra historia
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-white/85 sm:mt-6 sm:text-base sm:leading-8">
            Una historia construida por generaciones: entre la devoción popular,
            los documentos conservados y el compromiso de quienes mantuvieron
            viva la Hermandad.
          </p>
          <p className="mt-4 max-w-3xl border-l border-[#d3b778] pl-4 text-xs leading-6 text-white/75 sm:text-sm sm:leading-7">
            Los relatos orales, las fechas de documentos y los recuerdos
            institucionales se distinguen a lo largo de esta página. Cuando las
            fuentes ofrecen fechas diferentes, ambas quedan visibles con su
            contexto.
          </p>
        </div>
      </header>

      <section
        aria-labelledby="history-timeline-title"
        className="bg-[#111111] py-10 text-[#f4f0e6] sm:py-14 md:py-20"
      >
        <div className="mx-auto w-[calc(100%-2rem)] max-w-7xl sm:w-[calc(100%-2.5rem)] md:w-[calc(100%-4rem)]">
          <div className="mb-7 flex flex-col gap-3 sm:mb-10 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#b89b5e]">
                Fechas y acontecimientos
              </p>
              <h2
                className="mt-3 font-display text-2xl sm:text-3xl md:text-4xl"
                id="history-timeline-title"
              >
                Una memoria en el tiempo
              </h2>
            </div>
            <p className="max-w-md text-xs leading-6 text-white/65">
              Cronología referencial de la historia institucional.
            </p>
          </div>
          <ol className="grid gap-0 border-l border-[#b89b5e]/70 pl-5 sm:grid-cols-2 sm:gap-x-6 sm:pl-0 md:grid-cols-3 md:gap-x-8">
            {historicalEvents.map((event) => (
              <li
                className="relative border-b border-white/15 py-4 sm:border-t sm:border-b-0 sm:py-5 sm:pl-5 md:py-6"
                key={event.id}
              >
                <span
                  aria-hidden="true"
                  className="absolute -left-[25px] top-6 size-2 rounded-full border border-[#b89b5e] bg-[#111111] sm:-left-[5px] sm:top-[-5px]"
                />
                <time
                  className="font-display text-lg text-[#b89b5e] sm:text-xl"
                  dateTime={String(event.year)}
                >
                  {event.date}
                </time>
                <h3 className="mt-1 font-display text-sm leading-snug text-[#f4f0e6] sm:text-base">
                  {event.title}
                </h3>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <div className="mx-auto w-[calc(100%-2rem)] max-w-7xl sm:w-[calc(100%-2.5rem)] md:w-[calc(100%-4rem)]">
        {historyChapters.map((chapter) => (
          <Fragment key={chapter.id}>
            <section
              className="grid gap-6 border-b border-line py-10 sm:gap-8 sm:py-14 md:grid-cols-[minmax(12rem,0.7fr)_minmax(0,1.3fr)] md:gap-16 md:py-20"
              id={chapter.id}
            >
              <div className="md:sticky md:top-28 md:self-start">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-clay">
                  {chapter.eyebrow}
                </p>
                <h2 className="mt-3 font-display text-2xl leading-tight sm:text-3xl md:text-4xl">
                  {chapter.title}
                </h2>
              </div>
              <div className="min-w-0">
                {chapter.image && (
                  <figure className="relative mb-5 aspect-[4/3] overflow-hidden bg-mist sm:mb-7 sm:aspect-[16/9]">
                    <Image
                      alt={chapter.image.alt}
                      className="object-cover w-full h-full"
                      width={400}
                      height={300}
                      quality={90}
                      sizes="(max-width: 768px)"
                      src={chapter.image.src}
                      style={{ objectPosition: chapter?.position }}
                    />
                    <figcaption className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/75 to-transparent px-4 pb-3 pt-12 text-[10px] leading-5 text-white/90 sm:px-5 sm:pb-4 sm:text-xs">
                      {chapter.image.caption}
                    </figcaption>
                  </figure>
                )}
                <div className="space-y-4 sm:space-y-5">
                  {chapter.paragraphs.map((paragraph) => (
                    <p
                      className="text-sm leading-7 text-muted sm:text-base sm:leading-8"
                      key={paragraph}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
                {chapter.facts && (
                  <dl className="mt-6 divide-y divide-line border-y border-line sm:mt-8">
                    {chapter.facts.map((fact) => (
                      <div
                        className="grid gap-1 py-4 sm:grid-cols-[10rem_1fr] sm:gap-5 sm:py-5"
                        key={fact.date}
                      >
                        <dt className="flex items-start gap-2 text-xs font-semibold text-clay">
                          <CalendarDays
                            aria-hidden="true"
                            className="mt-0.5 shrink-0"
                            size={14}
                          />
                          {fact.date}
                        </dt>
                        <dd>
                          <span className="font-display text-base sm:text-lg">
                            {fact.title}
                          </span>
                          <span className="mt-1 block text-xs leading-6 text-muted sm:text-sm">
                            {fact.detail}
                          </span>
                        </dd>
                      </div>
                    ))}
                  </dl>
                )}
              </div>
            </section>
          </Fragment>
        ))}
      </div>

      <div className="mx-auto flex w-[calc(100%-2rem)] max-w-7xl flex-col gap-3 py-8 sm:w-[calc(100%-2.5rem)] sm:flex-row sm:items-center sm:justify-between sm:py-10 md:w-[calc(100%-4rem)]">
        <Link
          className="inline-flex min-h-11 items-center gap-2 text-xs font-semibold text-forest-link hover:text-clay"
          href="/hermandad"
        >
          <ArrowLeft aria-hidden="true" size={15} /> Volver a La Hermandad
        </Link>
        <Link
          className="inline-flex min-h-11 items-center gap-2 text-xs font-semibold text-forest-link hover:text-clay"
          href="/memoria/documentos"
        >
          Explorar memoria documental <FileText aria-hidden="true" size={15} />
        </Link>
      </div>
    </>
  );
}
