"use client";

import { useEffect, useState } from "react";
import {
  getTimeUntilNovember,
  type Countdown,
} from "@/utils/november-countdown";

export function useNovemberCountdown(
  initialCountdown: Countdown | "celebration" | false,
) {
  const [countdown, setCountdown] = useState(initialCountdown);

  useEffect(() => {
    const updateCountdown = () => {
      const nextCountdown = getTimeUntilNovember();
      setCountdown(nextCountdown);
      return nextCountdown !== false;
    };

    if (!updateCountdown()) return;

    const intervalId = window.setInterval(() => {
      if (!updateCountdown()) window.clearInterval(intervalId);
    }, 1000);

    return () => window.clearInterval(intervalId);
  }, []);

  return countdown;
}
