import { act, cleanup, renderHook } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { useNovemberCountdown } from "@/hooks/use-november-countdown";
import { getTimeUntilNovember } from "@/utils/november-countdown";

const limaDate = (year: number, month: number, day: number, hour = 0, minute = 0, second = 0) =>
  Date.UTC(year, month, day, hour, minute, second) + 5 * 60 * 60 * 1000;

describe("useNovemberCountdown", () => {
  beforeEach(() => vi.useFakeTimers());
  afterEach(() => {
    cleanup();
    vi.useRealTimers();
  });

  it("activates the countdown when October begins while the page remains open", () => {
    vi.setSystemTime(limaDate(2026, 8, 30, 23, 59, 59));
    const { result } = renderHook(() =>
      useNovemberCountdown(getTimeUntilNovember()),
    );

    expect(result.current).toBe(false);
    act(() => vi.advanceTimersByTime(1000));
    expect(result.current).toMatchObject({ year: 2026, days: 31 });
  });

  it("ticks each second in October and switches to the celebration", () => {
    vi.setSystemTime(limaDate(2026, 9, 31, 23, 59, 58));
    const { result } = renderHook(() =>
      useNovemberCountdown(getTimeUntilNovember()),
    );

    expect(result.current).toMatchObject({ seconds: 2 });
    act(() => vi.advanceTimersByTime(1000));
    expect(result.current).toMatchObject({ seconds: 1 });
    act(() => vi.advanceTimersByTime(1000));
    expect(result.current).toBe("celebration");
  });

  it("hides the celebration at December and schedules the next October", () => {
    vi.setSystemTime(limaDate(2026, 10, 30, 23, 59, 59));
    const { result } = renderHook(() =>
      useNovemberCountdown(getTimeUntilNovember()),
    );

    expect(result.current).toBe("celebration");
    act(() => vi.advanceTimersByTime(1000));
    expect(result.current).toBe(false);
    expect(vi.getTimerCount()).toBe(1);
  });

  it("keeps long inactive waits within the browser timeout limit", () => {
    vi.setSystemTime(limaDate(2026, 0, 1));
    renderHook(() => useNovemberCountdown(false));

    expect(vi.getTimerCount()).toBe(1);
    act(() => vi.advanceTimersByTime(2_147_000_000));
    expect(vi.getTimerCount()).toBe(1);
  });

  it("clears its scheduled update after unmount", () => {
    vi.setSystemTime(limaDate(2026, 9, 1));
    const { unmount } = renderHook(() =>
      useNovemberCountdown(getTimeUntilNovember()),
    );

    expect(vi.getTimerCount()).toBe(1);
    unmount();
    expect(vi.getTimerCount()).toBe(0);
  });
});
