"use client";

import type { Countdown } from "@/utils/november-countdown";
import { useNovemberCountdown } from "@/hooks/use-november-countdown";

export function NovemberCountdownRibbon({
  initialCountdown,
}: {
  initialCountdown: Countdown | "celebration" | false;
}) {
  const countdown = useNovemberCountdown(initialCountdown);

  if (countdown === false) return null;

  return (
    <aside
      aria-label={
        countdown === "celebration"
          ? "¡FELIZ NOVIEMBRE MARTINIANO!"
          : "Cuenta regresiva para noviembre"
      }
      className="flex min-h-10 flex-wrap items-center justify-center gap-x-4 gap-y-1 border-b border-white/10 bg-ink px-4 py-2 text-paper sm:gap-5"
    >
      {countdown === "celebration" ? (
        <p className="font-display text-xs uppercase text-paper sm:text-sm">
          ¡FELIZ NOVIEMBRE MARTINIANO!
        </p>
      ) : (
        <>
          <span className="text-[9px] font-medium uppercase tracking-[0.15em] text-paper sm:text-[10px]">
            Noviembre Martiniano {countdown.year}
          </span>
          <span aria-hidden="true" className="h-3 w-px bg-clay" />
          <p className="flex items-baseline gap-2 font-display text-xs tabular-nums sm:gap-3 sm:text-sm">
            <span>
              <span className="font-bold">{countdown?.days ?? "--"}</span>
              <span className="ml-1 text-[10px] font-sans text-paper/75">
                días
              </span>
            </span>
            <span>
              <span className="font-bold">
                {String(countdown?.hours ?? "--").padStart(2, "0")}
              </span>
              <span className="ml-1 text-[10px] font-sans text-paper/75">
                h
              </span>
            </span>
            <span>
              <span className="font-bold">
                {String(countdown?.minutes ?? "--").padStart(2, "0")}
              </span>
              <span className="ml-1 text-[10px] font-sans text-paper/75">
                min
              </span>
            </span>
            <span className="text-paper">
              <span className="font-bold">
                {String(countdown?.seconds ?? "--").padStart(2, "0")}
              </span>
              <span className="ml-1 text-[10px] font-sans text-paper/75">
                s
              </span>
            </span>
          </p>
        </>
      )}
    </aside>
  );
}
