"use client";

import { useCallback, useEffect, useState } from "react";

type CarouselOptions = {
  count: number;
  interval?: number;
  suspended?: boolean;
};

export function useCarousel({
  count,
  interval = 6000,
  suspended = false,
}: CarouselOptions) {
  const [{ activeIndex, previousIndex }, setSlide] = useState<{
    activeIndex: number;
    previousIndex: number | null;
  }>({ activeIndex: 0, previousIndex: null });
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hasFocus, setHasFocus] = useState(false);
  const pauseRotation = isPaused || isHovered || hasFocus || suspended;

  const goTo = useCallback(
    (index: number) => {
      setSlide((current) => ({
        activeIndex: ((index % count) + count) % count,
        previousIndex: current.activeIndex,
      }));
    },
    [count],
  );
  const previous = () =>
    setSlide((current) => ({
      activeIndex: (current.activeIndex - 1 + count) % count,
      previousIndex: current.activeIndex,
    }));
  const next = () =>
    setSlide((current) => ({
      activeIndex: (current.activeIndex + 1) % count,
      previousIndex: current.activeIndex,
    }));

  useEffect(() => {
    if (previousIndex === null) return;
    const timer = window.setTimeout(
      () => setSlide((current) => ({ ...current, previousIndex: null })),
      1000,
    );
    return () => window.clearTimeout(timer);
  }, [activeIndex, previousIndex]);

  useEffect(() => {
    if (pauseRotation || count < 2) return;
    const timer = window.setInterval(() => {
      if (
        document.hidden ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      )
        return;
      setSlide((current) => ({
        activeIndex: (current.activeIndex + 1) % count,
        previousIndex: current.activeIndex,
      }));
    }, interval);
    return () => window.clearInterval(timer);
  }, [count, interval, pauseRotation]);

  return {
    activeIndex,
    previousIndex,
    goTo,
    previous,
    next,
    isPaused,
    setIsPaused,
    setIsHovered,
    setHasFocus,
    pauseRotation,
  };
}
