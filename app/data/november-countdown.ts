export type Countdown = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const NOVEMBER_2026_START = new Date("2026-11-01T00:00:00-05:00").getTime();

export function getTimeUntilNovember(now = Date.now()): Countdown | false {
  const remainingSeconds = Math.floor((NOVEMBER_2026_START - now) / 1000);

  if (remainingSeconds <= 0) {
    return false;
  }

  return {
    days: Math.floor(remainingSeconds / 86_400),
    hours: Math.floor((remainingSeconds % 86_400) / 3_600),
    minutes: Math.floor((remainingSeconds % 3_600) / 60),
    seconds: remainingSeconds % 60,
  };
}