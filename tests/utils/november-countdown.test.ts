import { describe, expect, it } from "vitest";
import {
  getNextCountdownUpdateDelay,
  getTimeUntilNovember,
} from "@/utils/november-countdown";

const HOUR = 60 * 60 * 1000;
const LIMA_OFFSET = 5 * HOUR;

function limaDate(
  year: number,
  month: number,
  day: number,
  hour = 0,
  minute = 0,
  second = 0,
) {
  return Date.UTC(year, month, day, hour, minute, second) + LIMA_OFFSET;
}

describe("getTimeUntilNovember", () => {
  it("hides the ribbon before October and after November", () => {
    expect(getTimeUntilNovember(limaDate(2026, 8, 30, 23, 59, 59))).toBe(false);
    expect(getTimeUntilNovember(limaDate(2026, 11, 1))).toBe(false);
    expect(getTimeUntilNovember(limaDate(2027, 1, 1))).toBe(false);
  });

  it("counts down from October 1 using Peru time and carries the year", () => {
    expect(getTimeUntilNovember(limaDate(2026, 9, 1))).toEqual({
      year: 2026,
      days: 31,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  });

  it("breaks remaining time into days, hours, minutes, and seconds", () => {
    expect(getTimeUntilNovember(limaDate(2027, 9, 1, 12, 34, 56))).toEqual({
      year: 2027,
      days: 30,
      hours: 11,
      minutes: 25,
      seconds: 4,
    });
  });

  it("reaches zero at the last second of October, then shows the celebration in November", () => {
    expect(getTimeUntilNovember(limaDate(2026, 9, 31, 23, 59, 59))).toEqual({
      year: 2026,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 1,
    });
    expect(getTimeUntilNovember(limaDate(2026, 10, 1))).toBe("celebration");
    expect(getTimeUntilNovember(limaDate(2026, 10, 30, 23, 59, 59))).toBe(
      "celebration",
    );
  });
});

describe("getNextCountdownUpdateDelay", () => {
  it("schedules the next check for October while hidden", () => {
    const now = limaDate(2026, 8, 30, 23, 30);
    expect(getNextCountdownUpdateDelay(now)).toBe(30 * 60 * 1000);
  });

  it("updates every second during October, or exactly at the November boundary", () => {
    expect(getNextCountdownUpdateDelay(limaDate(2026, 9, 1))).toBe(1000);
    expect(
      getNextCountdownUpdateDelay(limaDate(2026, 9, 31, 23, 59, 59) + 750),
    ).toBe(250);
  });

  it("waits until December during the celebration month", () => {
    const now = limaDate(2026, 10, 15);
    expect(getNextCountdownUpdateDelay(now)).toBe(limaDate(2026, 11, 1) - now);
  });

  it("schedules the next year's October after the current celebration", () => {
    const now = limaDate(2026, 11, 1);
    expect(getNextCountdownUpdateDelay(now)).toBe(limaDate(2027, 9, 1) - now);
  });
});
