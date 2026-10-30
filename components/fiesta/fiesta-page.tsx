import clsx from "clsx";
import { MapPin } from "lucide-react";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { SectionIndex } from "@/components/shared/section-index";
import { sectionIds, sectionLabels } from "@/models/fiesta/content";
import Image from "next/image";
import {
  processionalRouteEvents,
  type InstitutionalPage,
} from "@/models/hermandad/institutional-pages";

export function FiestaPage({ page }: { page: InstitutionalPage }) {
  return (
    <>
      <header className="relative isolate flex min-h-[32rem] items-end overflow-hidden rounded-b-3xl bg-forest-deep text-white-warm md:aspect-auto md:min-h-[min(640px,calc(100svh-5rem))]">
        <Image
          alt=""
          className="object-cover object-center"
          fill
          preload
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
        <div className="site-container relative z-10 pb-6 pt-4 sm:pb-12 sm:pt-10 md:pb-20 md:pt-24">
          <Breadcrumbs
            inverse
            items={[
              { label: "La Hermandad", href: "/hermandad" },
              { label: page.title },
            ]}
          />
          <div className="mt-10 max-w-4xl sm:mt-28 md:mt-36">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#d9c28f] sm:text-xs">
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
      <SectionIndex
        label="Secciones de la fiesta"
        items={page.sections.map((section, index) => ({
          id: sectionIds[index],
          label: sectionLabels[index] ?? section.title,
        }))}
      />
      {page.sections.map((section, index) => (
        <section
          className={clsx(
            "py-16 md:py-24",
            index === 1 && "border-y border-line bg-white/40",
          )}
          id={sectionIds[index]}
          key={section.title}
        >
          <div className="site-container grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:gap-16 lg:gap-24">
            <div>
              <p className="eyebrow">
                0{index + 1} / {sectionLabels[index]} · Cruz Blanca
              </p>
              <h2 className="mt-5 max-w-lg font-display text-3xl font-normal leading-tight sm:text-4xl lg:text-5xl">
                {section.title}
              </h2>
              {index === 2 && (
                <p className="mt-7 flex items-center gap-2 border-t border-line pt-5 text-xs uppercase tracking-[0.12em] text-muted">
                  <MapPin aria-hidden="true" size={15} />
                  Fe que recorre nuestras calles
                </p>
              )}
            </div>
            <div>
              <p className="max-w-3xl text-base leading-8 text-muted">
                {section.body}
              </p>
              {index === 2 && (
                <ol className="mt-8 border-t border-ink">
                  {processionalRouteEvents.map((event, eventIndex) => (
                    <li
                      className="grid grid-cols-[2rem_1fr] gap-4 border-b border-line py-7 sm:grid-cols-[3rem_1fr] sm:gap-5 sm:py-8"
                      key={event.id}
                    >
                      <span
                        aria-hidden="true"
                        className="font-display text-2xl text-clay"
                      >
                        {String(eventIndex + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <p className="text-xs font-medium uppercase tracking-[0.1em] text-muted">
                          {event.date}
                        </p>
                        <h3 className="mt-3 font-display text-xl leading-snug text-ink sm:text-2xl">
                          {event.title}
                        </h3>
                        {event.detail && (
                          <p className="mt-3 text-sm leading-7 text-muted">
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
