import { act, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { HomeHero } from "@/components/home/home-hero";

describe("HomeHero", () => {
  afterEach(() => vi.useRealTimers());

  it("prepares the next slide, rotates on a timer, and removes the outgoing image after its fade", () => {
    vi.useFakeTimers();
    const { container } = render(<HomeHero />);
    expect(container.querySelectorAll("img")).toHaveLength(2);
    const firstDescription = screen.getByText(/Nuestra imagen titular/);

    act(() => vi.advanceTimersByTime(6000));
    expect(screen.getByText(/Recorrido de Guardada/)).toBeInTheDocument();
    expect(container.querySelectorAll("img")).toHaveLength(3);
    expect(firstDescription).toBeInTheDocument();

    act(() => vi.advanceTimersByTime(1000));
    expect(container.querySelectorAll("img")).toHaveLength(2);
    expect(screen.queryByText(/Nuestra imagen titular/)).not.toBeInTheDocument();
  });
});
