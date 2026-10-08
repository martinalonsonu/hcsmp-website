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
    const audio = audioRef.current;

    if (!audio) {
      alert("❌ No se encontró el elemento de audio.");
      return;
    }

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      return;
    }

    try {
      // Forzamos a Safari a cargar el recurso.
      audio.load();

      await audio.play();

      setIsPlaying(true);
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);

      console.error("❌ Error reproduciendo audio:", error);

      alert(
        `❌ ERROR DE AUDIO

Mensaje:
${message}

URL:
${audio.currentSrc || audio.src}

ReadyState:
${audio.readyState}

NetworkState:
${audio.networkState}

MediaError:
${audio.error?.message ?? "sin error"}

MediaError code:
${audio.error?.code ?? "sin código"}`,
      );
    }
  };

  const handleAudioError = () => {
    const audio = audioRef.current;

    if (!audio) return;

    console.error("❌ Error nativo del elemento audio:", {
      src: audio.currentSrc,
      error: audio.error,
      readyState: audio.readyState,
      networkState: audio.networkState,
    });
  };

  const handleCanPlay = () => {
    console.log("✅ Safari puede reproducir el audio");
  };

  const closeAudioPill = () => {
    const audio = audioRef.current;

    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }

    setIsPlaying(false);
    setShowAudioPill(false);
  };

  if (!showAudioPill) {
    return (
      <audio
        ref={audioRef}
        loop
        preload="metadata"
        src="/audio/HIMNO_SMP.m4a"
        onError={handleAudioError}
        onCanPlay={handleCanPlay}
      />
    );
  }

  return (
    <>
      <audio
        ref={audioRef}
        loop
        preload="metadata"
        src="/audio/HIMNO_SMP.m4a"
        onError={handleAudioError}
        onCanPlay={handleCanPlay}
      />

      <div
        className={`pointer-events-auto fixed z-[9999] ${
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
            onClick={closeAudioPill}
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
