import { PrimaryImageBackground } from "@/components/shared/primary-image-background";
import { Archive, ArrowUpRight, UsersRound } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";
import { getPageBackground } from "@/models/hermandad/page-presentation";
import { getInstitutionalBreadcrumbs } from "@/models/hermandad/breadcrumbs";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { SectionIndex } from "@/components/shared/section-index";
import { RelatedPages } from "@/components/hermandad/related-pages";
import { ArchiveOverview } from "@/components/archivo/archive-overview";
import { FiestaPage } from "@/components/fiesta/fiesta-page";
import { NewsList } from "@/components/blog/news-list";
import { BrotherhoodHistoryPage } from "@/components/hermandad/brotherhood-history-page";
import { DocumentArchive } from "@/components/archivo/document-archive";
import { PhotoAlbumArchive } from "@/components/archivo/photo-album-archive";
import { SanMartinPage } from "@/components/san-martin/san-martin-page";
import {
  BrotherhoodOverview,
  FoundersArchive,
  PresidentsArchive,
} from "@/components/hermandad/brotherhood-section-content";
import { ArchiveFilter } from "@/components/archivo/archive-filter";
import {
  founders,
  historicalEvents,
  presidents,
} from "@/models/hermandad/institutional-pages";
import type { InstitutionalPage } from "@/models/hermandad/institutional-pages";
import { VideoArchive } from "@/components/archivo/video-archive";
import { BrotherhoodImagePage } from "@/components/hermandad/brotherhood-image-page";

function PageBreadcrumb({
  page,
  inverse = false,
}: {
  page: InstitutionalPage;
  inverse?: boolean;
}) {
  const items = getInstitutionalBreadcrumbs(page)
    .slice(1)
    .map(({ name, path }) => ({ label: name, href: path }));
  return <Breadcrumbs items={items} inverse={inverse} />;
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
            className="font-display text-lg text-clay-text"
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

function PageKindContent({ page }: { page: InstitutionalPage }) {
  if (page.path === "/archivo/fotografias") return <PhotoAlbumArchive />;
  if (page.path === "/archivo") return <ArchiveOverview />;
  if (page.path === "/archivo/documentos") return <DocumentArchive />;
  if (page.path === "/archivo/videos") return <VideoArchive />;
  if (page.kind === "brotherhood") return <BrotherhoodOverview />;
  if (page.kind === "founders") return <FoundersArchive />;
  if (page.kind === "presidents") return <PresidentsArchive />;
  if (page.kind === "history") return <HistoryTimeline />;
  if (page.kind === "archive") return <ArchiveFilter />;
  if (page.kind === "people") return <EmptyPeopleState page={page} />;
  if (page.kind === "news") return <NewsList />;
  return null;
}

export function InstitutionalPageView({ page }: { page: InstitutionalPage }) {
  if (page.path === "/hermandad/historia") {
    return <BrotherhoodHistoryPage />;
  }
  if (page.path === "/hermandad/imagen") {
    return <BrotherhoodImagePage />;
  }
  if (page.path === "/san-martin-de-porres") return <SanMartinPage />;
  if (page.path === "/hermandad/fiesta") return <FiestaPage page={page} />;

  const background = getPageBackground(page.path);
  const relatedPaths = page.path === "/archivo" ? [] : (page.related ?? []);

  return (
    <>
      <header
        className={clsx(
          "relative isolate overflow-hidden border-b py-10 sm:py-14 md:py-20",
          background
            ? "border-line/20 bg-forest-deep text-paper"
            : "border-line bg-mist/50",
        )}
      >
        {background && (
          <>
            <PrimaryImageBackground
              className={clsx("object-cover grayscale", background.position)}
              quality={90}
              src={background.src}
            />
            <div aria-hidden="true" className="absolute inset-0 bg-black/70" />
          </>
        )}
        <div className="site-container relative z-10">
          <div className={background ? "text-white/75" : undefined}>
            <PageBreadcrumb page={page} inverse={Boolean(background)} />
          </div>
          <p
            className={clsx(
              "mt-6 text-xs font-semibold uppercase tracking-[0.16em] sm:mt-8",
              background ? "text-[#d9c28f]" : "text-clay-text",
            )}
          >
            {page.eyebrow}
          </p>
          <h1
            className={clsx(
              "mt-4 max-w-4xl font-display text-4xl font-normal leading-[1.12] sm:text-5xl md:text-6xl",
              background ? "text-white" : "text-ink",
            )}
          >
            {page.title}
          </h1>
          <p
            className={clsx(
              "mt-5 max-w-3xl text-sm leading-7 sm:text-base sm:leading-8",
              background ? "text-white/85" : "text-muted",
            )}
          >
            {page.introduction}
          </p>
        </div>
      </header>
      {page.sections.length > 1 && (
        <SectionIndex
          items={page.sections.map((section, index) => ({
            id: "section-" + (index + 1),
            label: section.title,
          }))}
        />
      )}

      <div
        className={clsx(
          "site-container grid gap-12 py-14 sm:py-20 md:py-24",
          relatedPaths.length > 0 &&
            "lg:grid-cols-[minmax(0,1fr)_14rem] lg:gap-20",
        )}
      >
        <div className="min-w-0 flex flex-col gap-12 sm:gap-14">
          {page.kind && (
            <section aria-label={page.title}>
              <PageKindContent page={page} />
            </section>
          )}
          {page.sections.map((section, index) => (
            <section
              className="border-t border-line pt-8 sm:pt-10"
              id={"section-" + (index + 1)}
              key={section.title}
            >
              <div className="grid gap-6">
                <span
                  aria-hidden="true"
                  className="text-xs font-semibold tracking-[0.16em] text-clay-text"
                >
                  {String(index + 1).padStart(2, "0")} /
                </span>
                <h2 className="font-display text-2xl leading-tight tracking-[-0.025em] sm:text-3xl">
                  {section.title}
                </h2>
                <div>
                  <p className="text-sm leading-7 text-muted sm:text-base sm:leading-8">
                    {section.body}
                  </p>
                  {section.items && (
                    <div className="mt-8 divide-y divide-line border-y border-line">
                      {section.items.map((item) => (
                        <Link
                          className="group flex min-h-20 items-center justify-between gap-5 py-5 transition-colors hover:bg-mist/50 sm:px-3"
                          href={item.href}
                          key={item.label}
                        >
                          <span>
                            <span className="block font-display text-lg group-hover:text-clay-text">
                              {item.label}
                            </span>
                            <span className="mt-1 block text-xs leading-5 text-muted">
                              {item.detail}
                            </span>
                          </span>
                          <ArrowUpRight
                            aria-hidden="true"
                            className="shrink-0 text-clay-text transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
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
          {page.kind === "archive" &&
            page.path !== "/archivo" &&
            page.path !== "/archivo/fotografias" &&
            page.path !== "/archivo/videos" &&
            page.path !== "/archivo/documentos" && (
              <p className="flex items-center gap-2 text-xs leading-6 text-muted">
                <Archive aria-hidden="true" size={15} /> Colección institucional
                en preparación.
              </p>
            )}
        </div>
        <RelatedPages paths={relatedPaths} />
      </div>

      <section className="border-t border-line bg-mist/70 py-12 sm:py-16">
        <div className="site-container flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
          <p className="max-w-xl font-display text-2xl leading-snug tracking-[-0.025em] sm:text-3xl">
            ¡Somos parte de tu historia de amor!
          </p>
          <Link
            className="button-primary inline-flex min-h-12 w-fit items-center gap-5 bg-ink px-6 py-4 text-xs font-semibold text-paper transition-colors hover:bg-forest"
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
