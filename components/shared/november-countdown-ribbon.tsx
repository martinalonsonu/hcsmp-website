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
      className="flex min-h-10 items-center justify-center gap-3 border-b border-line bg-white px-4 py-2 text-ink sm:gap-5"
    >
      {countdown === "celebration" ? (
        <p className="font-display text-xs font-bold uppercase text-clay sm:text-sm">
          ¡FELIZ NOVIEMBRE MARTINIANO!
        </p>
      ) : (
        <>
          <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-clay sm:text-[10px]">
            Noviembre Martiniano {countdown.year}
          </span>
          <span aria-hidden="true" className="h-4 w-px bg-line" />
          <p className="flex items-baseline gap-2 font-display text-xs tabular-nums sm:gap-3 sm:text-sm">
            <span>
              <span className="font-bold">{countdown?.days ?? "--"}</span>
              <span className="ml-1 text-[9px] font-sans text-muted sm:text-[10px]">
                días
              </span>
            </span>
            <span>
              <span className="font-bold">
                {String(countdown?.hours ?? "--").padStart(2, "0")}
              </span>
              <span className="ml-1 text-[9px] font-sans text-muted sm:text-[10px]">
                h
              </span>
            </span>
            <span>
              <span className="font-bold">
                {String(countdown?.minutes ?? "--").padStart(2, "0")}
              </span>
              <span className="ml-1 text-[9px] font-sans text-muted sm:text-[10px]">
                min
              </span>
            </span>
            <span className="text-clay">
              <span className="font-bold">
                {String(countdown?.seconds ?? "--").padStart(2, "0")}
              </span>
              <span className="ml-1 text-[9px] font-sans text-muted sm:text-[10px]">
                s
              </span>
            </span>
          </p>
        </>
      )}
    </aside>
  );
}
