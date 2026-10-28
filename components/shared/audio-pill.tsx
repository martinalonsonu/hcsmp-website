"use client";

import clsx from "clsx";
import { LoaderCircle, Pause, Play, Volume2, X } from "lucide-react";
import { useState } from "react";
import { useAudioPlayer } from "@/hooks/use-audio-player";

export function AudioPill({ left = false }: { left?: boolean }) {
  const { audioRef, status, toggle, stop, setStatus } = useAudioPlayer();
  const [isVisible, setIsVisible] = useState(true);
  const isPlaying = status === "playing";

  return (
    <>
      <audio
        loop
        onPause={() => setStatus("idle")}
        onError={() => setStatus("error")}
        preload="none"
        ref={audioRef}
        src="/audio/HIMNO_SMP.mp3"
      />
      {isVisible && (
        <div
          className={clsx(
            "fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] z-20 max-w-[calc(100vw-5.5rem)]",
            left ? "left-4 md:left-6" : "right-5 bottom-20",
          )}
        >
          <div className="flex items-center gap-1 rounded-3xl border border-white/20 bg-forest-deep px-2 py-1.5 text-white shadow-lg">
            <Volume2
              aria-hidden="true"
              className="ml-1 hidden size-4 shrink-0 text-[#d9c28f] sm:block"
            />
            <span className="min-w-0 px-2 text-xs leading-5">
              <span className="sm:hidden">
                {isPlaying ? "Escuchando himno" : "Himno a San Martín"}
              </span>
              <span className="hidden sm:inline">
                {isPlaying
                  ? "Escuchando himno a San Martín de Porres"
                  : "Escucha el himno a San Martín de Porres"}
              </span>
            </span>
            <button
              aria-label={isPlaying ? "Pausar himno" : "Escuchar himno"}
              aria-busy={status === "loading"}
              className="grid size-11 shrink-0 touch-manipulation place-items-center rounded-full bg-[#d9c28f] text-forest-deep transition-colors hover:bg-paper disabled:cursor-wait"
              disabled={status === "loading"}
              onClick={toggle}
              type="button"
            >
              {status === "loading" ? (
                <LoaderCircle
                  aria-hidden="true"
                  className="size-4 animate-spin motion-reduce:animate-none"
                />
              ) : isPlaying ? (
                <Pause aria-hidden="true" size={17} />
              ) : (
                <Play aria-hidden="true" size={17} />
              )}
            </button>
            <button
              aria-label="Cerrar reproductor"
              className="grid size-11 shrink-0 touch-manipulation place-items-center rounded-full text-white/80 hover:bg-white/10 hover:text-white"
              onClick={() => {
                stop();
                setIsVisible(false);
              }}
              type="button"
            >
              <X aria-hidden="true" size={17} />
            </button>
          </div>
          <p
            aria-live="polite"
            className={clsx(
              status === "error"
                ? "mt-2 rounded-lg bg-forest-deep p-3 text-xs leading-5 text-white"
                : "sr-only",
            )}
          >
            {status === "error"
              ? "No se pudo reproducir el himno. Inténtalo de nuevo."
              : status === "loading"
                ? "Cargando himno…"
                : ""}
          </p>
        </div>
      )}
    </>
  );
}
