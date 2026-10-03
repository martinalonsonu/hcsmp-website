export type Countdown = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const NOVEMBER_2026_START = new Date("2026-11-01T00:00:00-05:00").getTime();
const DECEMBER_2026_START = new Date("2026-12-01T00:00:00-05:00").getTime();

export function getTimeUntilNovember(
  now = Date.now(),
): Countdown | "celebration" | false {
  if (now >= DECEMBER_2026_START) {
    return false;
  }

  if (now >= NOVEMBER_2026_START) {
    return "celebration";
  }

  const remainingSeconds = Math.floor((NOVEMBER_2026_START - now) / 1000);

  return {
    days: Math.floor(remainingSeconds / 86_400),
    hours: Math.floor((remainingSeconds % 86_400) / 3_600),
    minutes: Math.floor((remainingSeconds % 3_600) / 60),
    seconds: remainingSeconds % 60,
  };
}
