import { act, fireEvent, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";
import { MultimediaCarousel } from "@/components/home/multimedia-carousel";

function mediaQueryList(matches: boolean): MediaQueryList {
  return {
    matches,
    media: "(prefers-reduced-motion: reduce)",
    onchange: null,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    addListener: vi.fn(),
    removeListener: vi.fn(),
    dispatchEvent: vi.fn(),
  };
}

function mockDialogMethods() {
  Object.defineProperty(HTMLDialogElement.prototype, "showModal", {
    configurable: true,
    value(this: HTMLDialogElement) {
      this.setAttribute("open", "");
    },
  });
  Object.defineProperty(HTMLDialogElement.prototype, "close", {
    configurable: true,
    value(this: HTMLDialogElement) {
      if (!this.open) return;
      this.removeAttribute("open");
      this.dispatchEvent(new Event("close"));
    },
  });
  vi.spyOn(window, "scrollTo").mockImplementation(() => {});
}

afterEach(() => {
  vi.useRealTimers();
  Reflect.deleteProperty(HTMLDialogElement.prototype, "showModal");
  Reflect.deleteProperty(HTMLDialogElement.prototype, "close");
  document.body.style.position = "";
  document.body.style.top = "";
  document.body.style.left = "";
  document.body.style.right = "";
  document.body.style.width = "";
  document.body.style.overflow = "";
  document.body.style.paddingRight = "";
  document.documentElement.style.overflow = "";
  document.documentElement.style.scrollBehavior = "";
});

describe("MultimediaCarousel", () => {
  it("rotates automatically, and pauses while hovered, hidden, reduced-motion, or manually paused", () => {
    const setInterval = vi.spyOn(window, "setInterval");
    const clearInterval = vi.spyOn(window, "clearInterval");
    Object.defineProperty(document, "hidden", { configurable: true, value: false });
    const media = vi.spyOn(window, "matchMedia").mockImplementation(() =>
      mediaQueryList(false),
    );
    const { container } = render(<MultimediaCarousel />);
    expect(document.hidden).toBe(false);
    const slideButtons = screen.getAllByRole("button", { name: /^Mostrar/ });
    const firstSlide = slideButtons[0];
    const secondSlide = slideButtons[1];
    const tick = () => {
      const callback = setInterval.mock.calls.at(-1)?.[0];
      if (typeof callback === "function") act(() => callback());
    };

    expect(firstSlide).toHaveAttribute("aria-current", "true");
    expect(setInterval.mock.calls[0][1]).toBe(5000);
    tick();
    expect(secondSlide).toHaveAttribute("aria-current", "true");

    fireEvent.mouseEnter(container.firstElementChild!);
    expect(clearInterval).toHaveBeenCalled();
    fireEvent.mouseLeave(container.firstElementChild!);

    Object.defineProperty(document, "hidden", { configurable: true, value: true });
    tick();
    expect(secondSlide).toHaveAttribute("aria-current", "true");
    Object.defineProperty(document, "hidden", { configurable: true, value: false });

    media.mockImplementation(() => mediaQueryList(true));
    tick();
    expect(secondSlide).toHaveAttribute("aria-current", "true");

    media.mockImplementation(() => mediaQueryList(false));
    tick();
    expect(slideButtons[2]).toHaveAttribute("aria-current", "true");

    fireEvent.click(screen.getByRole("button", { name: /Pausar carrusel/ }));
    expect(clearInterval).toHaveBeenCalled();
    expect(screen.getByRole("button", { name: /Reanudar carrusel/ })).toBeInTheDocument();
  });

  it("supports manual navigation and wraps at either end", () => {
    render(<MultimediaCarousel />);
    const slideButtons = screen.getAllByRole("button", { name: /^Mostrar/ });

    fireEvent.click(screen.getByRole("button", { name: /Fotograf.*anterior/ }));
    expect(slideButtons.at(-1)).toHaveAttribute("aria-current", "true");

    fireEvent.click(screen.getByRole("button", { name: /Fotograf.*siguiente/ }));
    expect(slideButtons[0]).toHaveAttribute("aria-current", "true");
  });

  it("opens the lightbox, navigates with arrow keys, closes, and restores page scroll", async () => {
    mockDialogMethods();
    const user = userEvent.setup();
    render(<MultimediaCarousel />);
    await user.click(screen.getByRole("button", { name: /Ampliar/ }));

    const dialog = screen.getByRole("dialog");
    expect(dialog).toHaveAttribute("open");
    expect(document.body.style.position).toBe("fixed");
    expect(within(dialog).getByRole("heading", { name: /Paso procesional/ })).toBeInTheDocument();

    fireEvent.keyDown(dialog, { key: "ArrowLeft" });
    expect(within(dialog).getByRole("heading", { name: /Primer recorrido/ })).toBeInTheDocument();
    fireEvent.keyDown(dialog, { key: "ArrowRight" });
    expect(within(dialog).getByRole("heading", { name: /Paso procesional/ })).toBeInTheDocument();

    await user.click(within(dialog).getByRole("button", { name: /Cerrar/ }));
    expect(dialog).not.toHaveAttribute("open");
    expect(document.body.style.position).toBe("");
  });

  it("closes the lightbox when the backdrop is clicked and ignores unrelated keys", async () => {
    mockDialogMethods();
    const user = userEvent.setup();
    render(<MultimediaCarousel />);
    await user.click(screen.getByRole("button", { name: /Ampliar/ }));
    const dialog = screen.getByRole("dialog");

    fireEvent.keyDown(dialog, { key: "Enter" });
    fireEvent.click(within(dialog).getByRole("heading"));
    expect(dialog).toHaveAttribute("open");
    fireEvent.click(dialog);
    expect(dialog).not.toHaveAttribute("open");
  });

  it("cleans up body scroll locking if the carousel unmounts while open", async () => {
    mockDialogMethods();
    const user = userEvent.setup();
    const { unmount } = render(<MultimediaCarousel />);
    await user.click(screen.getByRole("button", { name: /Ampliar/ }));
    expect(document.body.style.position).toBe("fixed");

    unmount();
    expect(document.body.style.position).toBe("");
  });
});

