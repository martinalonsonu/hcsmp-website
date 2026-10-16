"use client";

import { useEffect, useState } from "react";
import {
  getNextCountdownUpdateDelay,
  getTimeUntilNovember,
  type Countdown,
} from "@/utils/november-countdown";

export function useNovemberCountdown(
  initialCountdown: Countdown | "celebration" | false,
) {
  const [countdown, setCountdown] = useState(initialCountdown);

  useEffect(() => {
    let timeoutId: number;

    const updateCountdown = () => {
      const now = Date.now();
      const nextCountdown = getTimeUntilNovember(now);
      const nextUpdateDelay = getNextCountdownUpdateDelay(now);
      setCountdown(nextCountdown);
      timeoutId = window.setTimeout(
        updateCountdown,
        Math.min(nextUpdateDelay, 2_147_000_000),
      );
    };

    updateCountdown();

    return () => window.clearTimeout(timeoutId);
  }, []);

  return countdown;
}
