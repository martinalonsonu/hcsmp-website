"use client";

import { useEffect, useRef, useState } from "react";

type AudioStatus = "idle" | "loading" | "playing" | "error";

export function useAudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const requestId = useRef(0);
  const [status, setStatus] = useState<AudioStatus>("idle");

  useEffect(() => {
    const audio = audioRef.current;
    return () => {
      requestId.current += 1;
      audio?.pause();
    };
  }, []);

  async function toggle() {
    const audio = audioRef.current;
    if (!audio || status === "loading") return;
    if (status === "playing") {
      audio.pause();
      setStatus("idle");
      return;
    }
    const currentRequest = ++requestId.current;
    setStatus("loading");
    try {
      await audio.play();
      if (currentRequest === requestId.current) setStatus("playing");
      else audio.pause();
    } catch {
      if (currentRequest === requestId.current) setStatus("error");
    }
  }

  function stop() {
    requestId.current += 1;
    const audio = audioRef.current;
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
    setStatus("idle");
  }

  return { audioRef, status, toggle, stop, setStatus };
}
