import Image from "next/image";
import Link from "next/link";
import {
  processionalRouteEvents,
  type InstitutionalPage,
} from "@/app/data/institutional-pages";

const sectionIds = ["tradicion", "noviembre", "recorridos"];
const sectionLabels = ["Tradición", "Noviembre", "Recorridos"];

export function FiestaPage({ page }: { page: InstitutionalPage }) {
  return (
    <>
      <header className="relative isolate flex aspect-square items-end overflow-hidden rounded-b-3xl bg-forest-deep text-white-warm md:aspect-auto md:min-h-[min(640px,calc(100svh-5rem))]">
        <Image
          alt=""
          className="object-cover object-center"
          fill
          priority
          quality={90}
          sizes="100vw"
          src="https://hcsmpcb.wordpress.com/wp-content/uploads/2026/10/489105222_9402938193087264_7697141976573185879_n.jpg"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-r from-forest-deep/85 via-forest-deep/50 to-transparent"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-t from-forest-deep/80 via-transparent to-forest-deep/15"
        />
        <div className="relative z-10 mx-auto w-[calc(100%-2rem)] max-w-7xl pb-6 pt-4 sm:w-[calc(100%-2.5rem)] sm:pb-12 sm:pt-10 md:w-[calc(100%-4rem)] md:pb-20 md:pt-24">
          <nav
            aria-label="Ruta de navegación"
            className="flex items-center gap-2 text-[11px] text-white/75"
          >
            <Link className="transition-colors hover:text-white" href="/">
              Inicio
            </Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page" className="text-white">
              {page.title}
            </span>
          </nav>
          <div className="mt-10 max-w-4xl sm:mt-28 md:mt-36">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#d9c28f] sm:text-xs">
              {page.eyebrow}
            </p>
            <h1 className="mt-3 font-display text-4xl font-normal leading-[1.02] sm:mt-4 sm:text-6xl md:text-8xl">
              {page.title}
            </h1>
            <p className="mt-4 max-w-2xl text-[13px] leading-5 text-white/85 sm:mt-7 sm:text-lg sm:leading-8">
              {page.introduction}
            </p>
          </div>
        </div>
      </header>

      <nav
        aria-label="Secciones de la fiesta"
        className="sticky top-18.25 z-20 border-b border-line bg-paper md:static md:z-auto"
      >
        <ul className="mx-auto flex w-[calc(100%-2rem)] max-w-7xl flex-nowrap items-center justify-between sm:w-[calc(100%-2.5rem)] md:w-[calc(100%-4rem)] md:justify-start md:gap-x-9">
          {page.sections.map((section, index) => (
            <li className="shrink-0" key={section.title}>
              <Link
                className="inline-flex min-h-12 items-center border-b-2 border-transparent text-[11px] font-semibold text-muted transition-colors hover:border-clay hover:text-ink sm:text-xs"
                href={`#${sectionIds[index]}`}
              >
                {sectionLabels[index]}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {page.sections.map((section, index) => (
        <section
          className={`py-14 sm:py-20 md:py-28 ${index === 1 ? "bg-mist" : ""}`}
          id={sectionIds[index]}
          key={section.title}
        >
          <div className="mx-auto grid w-[calc(100%-2rem)] max-w-7xl gap-7 sm:w-[calc(100%-2.5rem)] sm:gap-10 md:w-[calc(100%-4rem)] md:grid-cols-[0.7fr_1.3fr] md:gap-20">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-clay">
                {sectionLabels[index]} · Cruz Blanca
              </p>
              <h2 className="mt-3 max-w-md font-display text-3xl font-normal leading-tight sm:mt-5 sm:text-4xl md:text-5xl">
                {section.title}
              </h2>
            </div>
            <div className="space-y-5 text-sm leading-7 text-muted sm:text-base sm:leading-8">
              <p>{section.body}</p>
              {index === 2 && (
                <ol className="divide-y divide-line border-y border-line">
                  {processionalRouteEvents.map((event) => (
                    <li
                      className="grid gap-2 py-5 sm:grid-cols-[12rem_1fr] sm:gap-6 sm:py-6"
                      key={event.id}
                    >
                      <p className="text-xs font-semibold text-clay sm:text-sm">
                        {event.date}
                      </p>
                      <div>
                        <h3 className="font-display text-lg leading-snug sm:text-xl">
                          {event.title}
                        </h3>
                        {event.detail && (
                          <p className="mt-2 text-sm leading-6 text-muted">
                            {event.detail}
                          </p>
                        )}
                      </div>
                    </li>
                  ))}
                </ol>
              )}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
