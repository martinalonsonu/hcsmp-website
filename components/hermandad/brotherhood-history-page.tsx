import { PrimaryImageBackground } from "@/components/shared/primary-image-background";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { SectionIndex } from "@/components/shared/section-index";
import { ArrowLeft, CalendarDays, FileText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { assetUrl } from "@/models/shared/assets";
import { historyChapters } from "@/models/hermandad/history";
import { historicalEvents } from "@/models/hermandad/institutional-pages";

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
        <div className="site-container relative z-10">
          <Breadcrumbs
            inverse
            items={[
              { label: "La Hermandad", href: "/hermandad" },
              { label: "Historia" },
            ]}
          />
          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-[#d3b778] sm:mt-11">
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
            institucionales se distinguen a lo largo de esta página.
          </p>
        </div>
      </header>
      <SectionIndex
        label="Capítulos de esta historia"
        items={historyChapters.map((chapter, index) => ({
          id: chapter.id,
          label: `${String(index + 1).padStart(2, "0")} · ${chapter.title}`,
        }))}
      />

      <section
        aria-labelledby="history-timeline-title"
        className="border-b border-line bg-mist/50 py-14 sm:py-20"
      >
        <div className="site-container ">
          <div className="mb-7 flex flex-col gap-3 sm:mb-10 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-clay-text">
                Fechas y acontecimientos
              </p>
              <h2
                className="mt-4 font-display text-3xl tracking-[-0.035em] sm:text-4xl"
                id="history-timeline-title"
              >
                Una memoria en el tiempo
              </h2>
            </div>
            <p className="max-w-sm text-xs leading-7 text-muted">
              Cronología referencial de la historia institucional.
            </p>
          </div>
          <ol className="grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
            {historicalEvents.map((event, index) => (
              <li
                className="grid grid-cols-[1.5rem_1fr] gap-x-4 border-t border-line py-6 sm:py-8"
                key={event.id}
              >
                <span
                  aria-hidden="true"
                  className="pt-1 text-[10px] font-medium text-clay-text"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <time
                    className="font-display text-xl leading-snug tracking-[-0.02em]"
                    dateTime={String(event.year)}
                  >
                    {event.date}
                  </time>
                  <h3 className="mt-3 text-xs font-normal leading-7 text-muted sm:text-sm">
                    {event.title}
                  </h3>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <div className="site-container ">
        {historyChapters.map((chapter, index) => (
          <Fragment key={chapter.id}>
            <section
              className="grid gap-8 border-b border-line py-14 sm:gap-10 sm:py-20 md:grid-cols-[minmax(12rem,0.7fr)_minmax(0,1.3fr)] md:gap-20 md:py-24"
              id={chapter.id}
            >
              <div className="md:sticky md:top-36 md:self-start">
                <span
                  aria-hidden="true"
                  className="mb-6 block font-display text-5xl leading-none tracking-[-0.04em] text-clay-text"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
                  {chapter.eyebrow}
                </p>
                <h2 className="mt-4 font-display text-2xl leading-tight tracking-[-0.03em] sm:text-3xl md:text-4xl">
                  {chapter.title}
                </h2>
              </div>
              <div className="min-w-0">
                {chapter.image && (
                  <figure className="mb-8 border border-line bg-mist p-2 sm:mb-10 sm:p-3">
                    <div className="relative aspect-[4/3] overflow-hidden sm:aspect-[16/10]">
                      <Image
                        alt={chapter.image.alt}
                        className="h-full w-full object-cover"
                        width={1000}
                        height={625}
                        quality={90}
                        sizes="(max-width: 768px) 100vw, 65vw"
                        src={chapter.image.src}
                        style={{ objectPosition: chapter?.position }}
                      />
                    </div>
                    <figcaption className="px-2 pb-1 pt-4 text-xs leading-6 text-muted">
                      {chapter.image.caption}
                    </figcaption>
                  </figure>
                )}
                <div className="flex flex-col gap-5 sm:gap-6">
                  {chapter.paragraphs.map((paragraph) => (
                    <p
                      className="text-sm leading-8 text-muted sm:text-base sm:leading-8"
                      key={paragraph}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
                {chapter.facts && (
                  <dl className="mt-8 divide-y divide-line border-y border-line sm:mt-10">
                    {chapter.facts.map((fact) => (
                      <div
                        className="grid gap-1 py-4 sm:grid-cols-[10rem_1fr] sm:gap-5 sm:py-5"
                        key={fact.date}
                      >
                        <dt className="flex items-start gap-2 text-xs font-semibold text-clay-text">
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

      <div className="site-container flex flex-col gap-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:py-14">
        <Link
          className="inline-flex min-h-12 items-center gap-3 text-xs font-semibold text-forest-link hover:text-clay-text"
          href="/hermandad"
        >
          <ArrowLeft aria-hidden="true" size={15} /> Volver a La Hermandad
        </Link>
        <Link
          className="button-secondary inline-flex min-h-12 w-fit items-center gap-3 border border-line px-5 text-xs font-semibold text-forest-link transition-colors hover:border-clay hover:text-clay-text"
          href="/archivo/documentos"
        >
          Explorar memoria documental <FileText aria-hidden="true" size={15} />
        </Link>
      </div>
    </>
  );
}
