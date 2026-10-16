export type Countdown = {
  year: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const LIMA_UTC_OFFSET_MS = 5 * 60 * 60 * 1000;
const COUNTDOWN_START_MONTH = 9;
const NOVEMBER_START_MONTH = 10;
const DECEMBER_START_MONTH = 11;

function getLimaBoundaries(year: number) {
  return {
    countdownStart: Date.UTC(year, COUNTDOWN_START_MONTH, 1) + LIMA_UTC_OFFSET_MS,
    novemberStart: Date.UTC(year, NOVEMBER_START_MONTH, 1) + LIMA_UTC_OFFSET_MS,
    decemberStart: Date.UTC(year, DECEMBER_START_MONTH, 1) + LIMA_UTC_OFFSET_MS,
  };
}

function getLimaYear(now: number) {
  return new Date(now - LIMA_UTC_OFFSET_MS).getUTCFullYear();
}

export function getTimeUntilNovember(
  now = Date.now(),
): Countdown | "celebration" | false {
  const year = getLimaYear(now);
  const { countdownStart, novemberStart, decemberStart } =
    getLimaBoundaries(year);

  if (now < countdownStart || now >= decemberStart) {
    return false;
  }

  if (now >= novemberStart) {
    return "celebration";
  }

  const remainingSeconds = Math.floor((novemberStart - now) / 1000);

  return {
    year,
    days: Math.floor(remainingSeconds / 86_400),
    hours: Math.floor((remainingSeconds % 86_400) / 3_600),
    minutes: Math.floor((remainingSeconds % 3_600) / 60),
    seconds: remainingSeconds % 60,
  };
}

export function getNextCountdownUpdateDelay(now = Date.now()) {
  const year = getLimaYear(now);
  const { countdownStart, novemberStart, decemberStart } =
    getLimaBoundaries(year);

  if (now < countdownStart) return countdownStart - now;
  if (now < novemberStart) return Math.min(1000, novemberStart - now);
  if (now < decemberStart) return decemberStart - now;

  return getLimaBoundaries(year + 1).countdownStart - now;
}
