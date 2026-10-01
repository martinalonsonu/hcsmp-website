import { Archive, ArrowUpRight, CalendarDays, UsersRound } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { assetUrl } from "@/app/data/assets";
import { newsArticles } from "@/app/data/news";
import { PrimaryImageBackground } from "@/app/components/primary-image-background";
import { BrotherhoodHistoryPage } from "@/app/components/brotherhood-history-page";
import { SanMartinPage } from "@/app/components/san-martin-page";
import {
  BrotherhoodOverview,
  FoundersArchive,
  PresidentsArchive,
} from "@/app/components/brotherhood-section-content";
import { ArchiveFilter } from "@/app/components/archive-filter";
import {
  fiestaEvents,
  founders,
  historicalEvents,
  institutionalPageByPath,
  processionalRouteEvents,
  presidents,
} from "@/app/data/institutional-pages";
import type { InstitutionalPage } from "@/app/data/institutional-pages";

function PageBreadcrumb({
  page,
  inverse = false,
}: {
  page: InstitutionalPage;
  inverse?: boolean;
}) {
  const parts = page.path.split("/").filter(Boolean);
  const currentPath = parts.reduce<string[]>((accumulator, part) => {
    accumulator.push(`${accumulator.at(-1) ?? ""}/${part}`);
    return accumulator;
  }, []);

  return (
    <nav
      aria-label="Ruta de navegación"
      className={`flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] ${inverse ? "text-white/75" : "text-muted"}`}
    >
      <Link
        className={`transition-colors ${inverse ? "hover:text-white" : "hover:text-ink"}`}
        href="/"
      >
        Inicio
      </Link>
      {currentPath.map((path, index) => {
        const isCurrent = index === currentPath.length - 1;
        const crumb = institutionalPageByPath.get(path);
        const label = crumb?.title ?? parts[index].replaceAll("-", " ");
        return (
          <span className="flex items-center gap-2" key={path}>
            <span aria-hidden="true">/</span>
            {isCurrent ? (
              <span
                aria-current="page"
                className={inverse ? "text-white" : "text-ink"}
              >
                {label}
              </span>
            ) : (
              <Link
                className={`capitalize transition-colors ${inverse ? "hover:text-white" : "hover:text-ink"}`}
                href={path}
              >
                {label}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}

function HistoryTimeline() {
  return (
    <ol className="relative grid border-l border-line md:grid-cols-3 md:gap-x-6 md:gap-y-10 md:border-l-0">
      {historicalEvents.map((event) => (
        <li
          className="relative grid gap-3 border-b border-line pb-7 pl-6 last:border-b-0 last:pb-0 sm:grid-cols-[10rem_1fr] sm:gap-8 sm:pl-8 md:block md:border-b-0 md:border-t md:pb-0 md:pl-3 md:pt-6"
          key={event.id}
        >
          <span
            aria-hidden="true"
            className="absolute -left-[5px] top-1 size-[9px] rounded-full bg-clay ring-4 ring-paper md:-top-[5px] md:left-3"
          />
          <time
            className="font-display text-lg text-clay"
            dateTime={String(event.year)}
          >
            {event.date}
          </time>
          <h2 className="font-display text-lg leading-snug sm:text-xl">
            {event.title}
          </h2>
        </li>
      ))}
    </ol>
  );
}

function FeastSchedule() {
  return (
    <ol className="grid border-t border-line sm:grid-cols-2 lg:grid-cols-3">
      {fiestaEvents.map((event) => (
        <li
          className="border-b border-line py-5 sm:border-l sm:px-5 sm:py-6 lg:min-h-40"
          key={event.id}
        >
          <p className="flex items-center gap-2 text-[10px] font-semibold tracking-[0.14em] text-clay">
            <CalendarDays aria-hidden="true" size={14} /> {event.date}
          </p>
          <h2 className="mt-4 font-display text-lg leading-snug sm:text-xl">
            {event.title}
          </h2>
          {event.detail && (
            <p className="mt-3 text-xs leading-5 text-muted">{event.detail}</p>
          )}
          {event.time && (
            <p className="mt-3 text-xs font-semibold text-forest-link">
              {event.time}
            </p>
          )}
        </li>
      ))}
    </ol>
  );
}

function RouteGuide() {
  return (
    <ol className="divide-y divide-line border-y border-line">
      {processionalRouteEvents.map((event) => (
        <li
          className="grid gap-2 py-5 sm:grid-cols-[12rem_1fr] sm:gap-6 sm:py-6"
          key={event.id}
        >
          <p className="flex items-start gap-2 text-xs font-semibold text-clay sm:text-sm">
            <CalendarDays
              aria-hidden="true"
              className="mt-0.5 shrink-0"
              size={15}
            />
            <span>{event.date}</span>
          </p>
          <div>
            <h2 className="font-display text-lg leading-snug sm:text-xl">
              {event.title}
            </h2>
            {event.detail && (
              <p className="mt-2 text-sm leading-6 text-muted">
                {event.detail}
              </p>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}

function EmptyPeopleState({ page }: { page: InstitutionalPage }) {
  const records = page.path.endsWith("fundadores") ? founders : presidents;
  if (records.length > 0) return null;

  return (
    <div className="flex gap-4 border-y border-line py-6 sm:gap-5 sm:py-8">
      <UsersRound
        aria-hidden="true"
        className="mt-1 shrink-0 text-clay"
        size={20}
      />
      <div>
        <h2 className="font-display text-xl">Registro por documentar</h2>
        <p className="mt-2 max-w-2xl text-sm leading-7 text-muted">
          No se publican nombres, fotografías ni periodos hasta contrastarlos
          con las actas y la memoria de la Hermandad.
        </p>
      </div>
    </div>
  );
}

function NewsList() {
  return (
    <div className="space-y-5">
      {newsArticles.map((article) => (
        <article
          className="overflow-hidden border border-line"
          key={article.slug}
        >
          <Link
            className="group grid sm:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]"
            href={`/noticias/${article.slug}`}
          >
            {article.image && (
              <div className="relative aspect-16/10 overflow-hidden bg-mist sm:aspect-auto sm:min-h-64">
                <Image
                  alt={article.title}
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  fill
                  quality={90}
                  sizes="(max-width: 640px) 100vw, 40vw"
                  src={article.image}
                />
              </div>
            )}
            <div className="flex flex-col justify-center p-5 sm:p-7 md:p-9">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-clay">
                {article.eyebrow ?? article.category}
              </p>
              <h2 className="mt-3 font-display text-2xl leading-tight group-hover:text-clay sm:text-3xl">
                {article.title}
              </h2>
              <p className="mt-4 flex items-center gap-2 text-xs text-muted">
                <CalendarDays aria-hidden="true" size={14} /> {article.date}
              </p>
              <p className="mt-4 text-sm leading-7 text-muted">
                {article.summary}
              </p>
              <span className="mt-5 inline-flex min-h-10 items-center gap-2 text-xs font-semibold text-forest-link">
                Leer boletín <ArrowUpRight aria-hidden="true" size={15} />
              </span>
            </div>
          </Link>
        </article>
      ))}
    </div>
  );
}

function PageKindContent({ page }: { page: InstitutionalPage }) {
  if (page.kind === "brotherhood") return <BrotherhoodOverview />;
  if (page.kind === "founders") return <FoundersArchive />;
  if (page.kind === "presidents") return <PresidentsArchive />;
  if (page.kind === "history") return <HistoryTimeline />;
  if (page.kind === "feast") return <FeastSchedule />;
  if (page.kind === "route") return <RouteGuide />;
  if (page.kind === "archive") return <ArchiveFilter />;
  if (page.kind === "people") return <EmptyPeopleState page={page} />;
  if (page.kind === "news") return <NewsList />;
  return null;
}

export function InstitutionalPageView({ page }: { page: InstitutionalPage }) {
  if (page.path === "/hermandad/historia") {
    return <BrotherhoodHistoryPage />;
  }
  if (page.path === "/san-martin-de-porres") return <SanMartinPage />;

  const hasBrotherhoodBackground = page.path === "/hermandad";
  const hasPresidentsBackground = page.path === "/hermandad/presidentes";
  const hasFoundersBackground = page.path === "/hermandad/fundadores";
  const hasLifeBackground = page.path === "/hermandad/vida";
  const hasFiestaBackground = page.path === "/fiesta";
  const hasImageBackground =
    hasBrotherhoodBackground ||
    hasPresidentsBackground ||
    hasFoundersBackground ||
    hasLifeBackground ||
    hasFiestaBackground;

  return (
    <>
      <header
        className={`relative isolate overflow-hidden border-b py-12 sm:py-16 md:py-20 ${hasPresidentsBackground || hasFoundersBackground || hasLifeBackground || hasFiestaBackground ? "min-h-[340px] border-[#48443d] bg-[#111111] text-[#f4f0e6] sm:min-h-[380px] md:min-h-[420px]" : hasBrotherhoodBackground ? "border-[#48443d] bg-[#111111] text-[#f4f0e6]" : "border-line bg-mist/50"}`}
      >
        {hasImageBackground && (
          <>
            <PrimaryImageBackground
              alt=""
              className={`object-cover grayscale ${hasPresidentsBackground ? "object-[center_48%]" : hasFoundersBackground ? "object-[center_55%]" : hasLifeBackground ? "object-[center_48%] md:object-[center_35%]" : "object-center"}`}
              quality={90}
              src={
                hasPresidentsBackground
                  ? assetUrl("presidentes.jpg")
                  : hasFoundersBackground
                    ? assetUrl("primeros-pasos.jpg")
                    : hasLifeBackground
                      ? "https://hcsmpcb.wordpress.com/wp-content/uploads/2026/10/70595698_2344695052244982_6646925837222281216_n.jpg"
                      : hasFiestaBackground
                        ? "https://hcsmpcb.wordpress.com/wp-content/uploads/2026/10/489105222_9402938193087264_7697141976573185879_n.jpg"
                        : assetUrl("estandarte-1.jpg")
              }
            />
            <div
              aria-hidden="true"
              className={`absolute inset-0 ${hasPresidentsBackground ? "bg-black/45" : "bg-black/65"}`}
            />
          </>
        )}
        <div className="relative z-10 mx-auto w-[calc(100%-2rem)] max-w-7xl sm:w-[calc(100%-2.5rem)] md:w-[calc(100%-4rem)]">
          <div className={hasImageBackground ? "text-white/75" : undefined}>
            <PageBreadcrumb page={page} inverse={hasImageBackground} />
          </div>
          <p className="mt-9 text-[10px] font-semibold uppercase tracking-[0.18em] text-clay sm:mt-12">
            {page.eyebrow}
          </p>
          <h1
            className={`mt-4 max-w-4xl font-display text-4xl font-normal leading-[1.12] sm:text-5xl md:text-6xl ${hasImageBackground ? "text-white" : "text-ink"}`}
          >
            {page.title}
          </h1>
          <p
            className={`mt-5 max-w-3xl text-sm leading-7 sm:text-base sm:leading-8 ${hasImageBackground ? "text-white/85" : "text-muted"}`}
          >
            {page.introduction}
          </p>
        </div>
      </header>

      <div className="mx-auto grid w-[calc(100%-2rem)] max-w-7xl gap-12 py-12 sm:w-[calc(100%-2.5rem)] sm:py-16 md:w-[calc(100%-4rem)] md:grid-cols-[minmax(12rem,0.65fr)_minmax(0,1.35fr)] md:gap-20 md:py-20">
        <aside className="hidden md:sticky md:top-24 md:block md:self-start">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">
            En esta sección
          </p>
          <nav
            aria-label="Secciones relacionadas"
            className="mt-4 flex flex-wrap gap-x-4 gap-y-2 md:flex-col md:gap-0"
          >
            {page.related?.map((path) => {
              const relatedPage = institutionalPageByPath.get(path);
              if (!relatedPage) return null;
              return (
                <Link
                  className="py-1 text-xs text-forest-link transition-colors hover:text-clay md:border-b md:border-line md:py-3"
                  href={path}
                  key={path}
                >
                  {relatedPage.title}
                  <span aria-hidden="true" className="ml-2">
                    ↗
                  </span>
                </Link>
              );
            })}
          </nav>
        </aside>

        <div className="min-w-0 space-y-12 sm:space-y-14">
          {page.kind && (
            <section aria-label={page.title}>
              <PageKindContent page={page} />
            </section>
          )}
          {page.sections.map((section) => (
            <section
              className="border-t border-line pt-6 sm:pt-8"
              key={section.title}
            >
              <div className="grid gap-4 sm:grid-cols-[minmax(10rem,0.6fr)_minmax(0,1.4fr)] sm:gap-8">
                <h2 className="font-display text-2xl leading-tight sm:text-3xl">
                  {section.title}
                </h2>
                <div>
                  <p className="text-sm leading-7 text-muted sm:text-base sm:leading-8">
                    {section.body}
                  </p>
                  {section.items && (
                    <div className="mt-6 divide-y divide-line border-y border-line">
                      {section.items.map((item) => (
                        <Link
                          className="group flex min-h-16 items-center justify-between gap-4 py-4"
                          href={item.href ?? "#"}
                          key={item.label}
                        >
                          <span>
                            <span className="block font-display text-lg group-hover:text-clay">
                              {item.label}
                            </span>
                            <span className="mt-1 block text-xs leading-5 text-muted">
                              {item.detail}
                            </span>
                          </span>
                          <ArrowUpRight
                            aria-hidden="true"
                            className="shrink-0 text-clay transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            size={18}
                          />
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </section>
          ))}
          {page.kind === "archive" && (
            <p className="flex items-center gap-2 text-xs leading-6 text-muted">
              <Archive aria-hidden="true" size={15} /> Colección institucional
              en preparación.
            </p>
          )}
        </div>
      </div>

      <section className="border-t border-line bg-mist/50 py-10 sm:py-12">
        <div className="mx-auto flex w-[calc(100%-2rem)] max-w-7xl flex-col gap-3 sm:w-[calc(100%-2.5rem)] md:w-[calc(100%-4rem)] md:flex-row md:items-center md:justify-between">
          <p className="font-display text-lg">
            ¡Somos parte de tu historia de amor!
          </p>
          <Link
            className="inline-flex min-h-11 items-center gap-3 text-xs font-semibold text-forest-link hover:text-clay"
            href="/contacto"
          >
            Contactar a la Hermandad{" "}
            <ArrowUpRight aria-hidden="true" size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
