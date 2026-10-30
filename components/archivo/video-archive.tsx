import { videos } from "@/models/archivo/archive-content";
import clsx from "clsx";
import { ArrowUpRight, Play } from "lucide-react";

export function VideoArchive() {
  return (
    <ul className="grid gap-x-7 gap-y-10 sm:grid-cols-2 sm:gap-y-12">
      {videos.map((video, index) => (
        <li
          className={clsx("min-w-0", index === 0 && "sm:col-span-2")}
          key={video.id}
        >
          <article
            className={clsx(
              "group h-full",
              index === 0 ? "bg-ink text-paper" : "border-b border-line",
            )}
          >
            <div className="relative aspect-video overflow-hidden bg-mist">
              <iframe
                className="absolute inset-0 size-full"
                src={`https://www.youtube-nocookie.com/embed/${video.id}`}
                title={video.title}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allow="encrypted-media; picture-in-picture; fullscreen"
                allowFullScreen
              />
            </div>

            <div
              className={clsx(
                "flex flex-col",
                index === 0 ? "p-6 sm:p-9" : "pb-5 pt-5 sm:pb-6 sm:pt-6",
              )}
            >
              <p
                className={clsx(
                  "mb-4 text-[10px] font-semibold uppercase tracking-[0.18em]",
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
                Archivo audiovisual
              </p>

              <div className="flex items-start justify-between gap-3">
                <h3
                  className={clsx(
                    "font-display leading-snug",
                    index === 0 ? "text-2xl sm:text-3xl" : "text-xl",
                  )}
                >
                  {video.title}
                </h3>
              </div>

              <p
                className={clsx(
                  "mt-3 text-sm leading-7",
                  index === 0 ? "text-paper/75" : "text-muted",
                )}
              >
                {video.detail}
              </p>

              <a
                className={clsx(
                  "mt-5 flex min-h-11 w-fit items-center gap-3 text-xs font-semibold underline-offset-4 hover:underline",
                  index === 0 ? "text-paper" : "text-ink",
                )}
                href={`https://www.youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noreferrer"
              >
                <Play aria-hidden="true" size={14} />
                Ver en YouTube <ArrowUpRight aria-hidden="true" size={16} />
                <span className="sr-only">(abre en otra pestaña)</span>
              </a>
            </div>
          </article>
        </li>
      ))}
    </ul>
  );
}
