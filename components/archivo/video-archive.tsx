import { videos } from "@/models/archivo/archive-content";
import { ArrowUpRight, Play, Video } from "lucide-react";

export function VideoArchive() {
  return (
    <ul className="grid gap-5 sm:grid-cols-2">
      {videos.map((video) => (
        <li
          className="overflow-hidden border border-line bg-white/35"
          key={video.id}
        >
          <article className="group h-full transition-colors hover:bg-white/60">
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

            <div className="flex min-h-44 flex-col p-5 sm:p-6">
              <Video
                aria-hidden="true"
                className="mb-4 text-clay-text"
                size={20}
              />

              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-xl leading-snug transition-colors group-hover:text-clay-text">
                  {video.title}
                </h3>
              </div>

              <p className="mt-2 text-sm leading-6 text-muted">
                {video.detail}
              </p>

              <a
                className="mt-auto flex min-h-11 w-fit items-center gap-2 pt-5 text-sm font-semibold text-forest-link underline-offset-4 hover:underline"
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
