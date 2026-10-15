"use client";

import { ArrowUpRight, Play, Video } from "lucide-react";

const videos = [
  {
    id: "2pQa0Ku-dug",
    title: "HCSMP | INTRODUCCIÓN FESTIVIDAD 2021",
    detail: "Video que acompañó nuestras transmisiones oficiales.",
  },
  {
    id: "8W3f5CE-kGM",
    title: "HCSMP | TRAILER FESTIVIDAD 2021",
    detail: "Video preámbulo a nuestra festividad 2021.",
  },
  {
    id: "cdP2_dnuzQ4",
    title: "HCSMP | MISA DE FIESTA - 3 DE NOVIEMBRE 2020",
    detail: "Misa de fiesta en pandemia.",
  },
  {
    id: "O8C7BOFjA74",
    title: "HCSMP - INTRODUCCIÓN FESTIVIDAD 2020",
    detail:
      "Video que acompañó nuestras transmisiones oficiales en el duro año de pandemia.",
  },
  {
    id: "1W8f0C8y1Oc",
    title: "HCSMP- GUARDADA 2014 - RECORRIDO 30 NOV. (PARTE 7)",
    detail: "La devoción martiniana en nuestras calles.",
  },
  {
    id: "YyeJuNkc1fg",
    title: "HCSMP - RECORRIDO 30 NOV. (PARTE 1)",
    detail: "Salida procesional del 2014.",
  },
  {
    id: "Z66aFVWA-Oo",
    title: "HCSMP - Encuentro con el Señor de los Milagros",
    detail: "Histórico evento, en la plaza de armas de Huacho.",
  },
];

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
              <Video aria-hidden="true" className="mb-4 text-clay" size={20} />

              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-xl leading-snug transition-colors group-hover:text-clay">
                  {video.title}
                </h3>

                <ArrowUpRight
                  aria-hidden="true"
                  className="mt-1 shrink-0 text-forest-link"
                  size={18}
                />
              </div>

              <p className="mt-2 text-xs leading-5 text-muted">
                {video.detail}
              </p>

              <p className="mt-auto flex items-center gap-2 pt-5 text-xs font-semibold text-forest-link">
                <Play aria-hidden="true" size={14} />
                Reproducir video
              </p>
            </div>
          </article>
        </li>
      ))}
    </ul>
  );
}
