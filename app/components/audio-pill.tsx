"use client";

import { Pause, Play, Volume2, X } from "lucide-react";
import { useRef, useState } from "react";

interface AudioPillProps {
  left?: boolean;
}

export const AudioPill = ({ left = false }: AudioPillProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showAudioPill, setShowAudioPill] = useState(true);

  const toggleAudio = async () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      return;
    }

    try {
      await audioRef.current.play();
      setIsPlaying(true);
    } catch (error) {
      console.error("No se pudo reproducir el himno:", error);
    }
  };

  if (!showAudioPill) {
    return (
      <audio ref={audioRef} loop preload="none" src="/audio/HIMNO_SMP.mp3" />
    );
  }

  return (
    <>
      <audio ref={audioRef} loop preload="none" src="/audio/HIMNO_SMP.mp3" />

      <div
        className={`fixed z-[9999] pointer-events-auto ${
          left ? "bottom-7 left-6" : "bottom-20 right-6"
        }`}
      >
        <div className="flex items-center gap-2 rounded-full border border-white/15 bg-forest-deep/95 px-3 py-2 text-white shadow-xl backdrop-blur-md">
          <Volume2
            aria-hidden="true"
            className="size-4 shrink-0 text-[#d9c28f]"
          />

          <span className="text-xs font-medium">
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
            type="button"
            onClick={toggleAudio}
            className="pointer-events-auto flex size-8 shrink-0 touch-manipulation items-center justify-center rounded-full bg-[#d9c28f] text-forest-deep transition-transform hover:scale-105"
            aria-label={isPlaying ? "Pausar himno" : "Escuchar himno"}
          >
            {isPlaying ? (
              <Pause aria-hidden="true" className="size-4" />
            ) : (
              <Play aria-hidden="true" className="ml-0.5 size-4" />
            )}
          </button>

          <button
            type="button"
            onClick={() => setShowAudioPill(false)}
            className="pointer-events-auto flex size-6 shrink-0 touch-manipulation items-center justify-center rounded-full text-white/50 transition-colors hover:text-white"
            aria-label="Cerrar reproductor"
          >
            <X aria-hidden="true" className="size-3.5" />
          </button>
        </div>
      </div>
    </>
  );
};
