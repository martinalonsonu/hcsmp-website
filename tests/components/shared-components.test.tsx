import { act, fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";
import { AudioPill } from "@/components/shared/audio-pill";
import { CurrentYear } from "@/components/shared/current-year";
import { NovemberCountdownRibbon } from "@/components/shared/november-countdown-ribbon";
import { PrimaryImageBackground } from "@/components/shared/primary-image-background";
import { ScrollRevealSections } from "@/components/shared/scroll-reveal-sections";
import { ScrollToTopButton } from "@/components/shared/scroll-to-top-button";
import { SectionCta } from "@/components/shared/section-cta";
import { SiteFooter } from "@/components/shared/site-footer";
import { SiteHeader } from "@/components/shared/site-header";
import { JsonLd } from "@/components/seo/json-ld";
import type { Countdown } from "@/utils/november-countdown";
import { usePathname } from "next/navigation";

vi.mock("@/hooks/use-november-countdown", () => ({
  useNovemberCountdown: (initialCountdown: unknown) => initialCountdown,
}));

afterEach(() => {
  vi.useRealTimers();
  document.body.style.overflow = "";
});

describe("shared presentational components", () => {
  it("renders the current year", () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2030-06-15T12:00:00Z"));
    render(<CurrentYear />);
    expect(screen.getByText("2030")).toBeInTheDocument();
  });

  it("renders the CTA with normal and inverse variants", () => {
    const { rerender } = render(
      <SectionCta href="/historia">Historia</SectionCta>,
    );
    expect(screen.getByRole("link", { name: "Historia" })).toHaveAttribute(
      "href",
      "/historia",
    );
    expect(screen.getByRole("link")).toHaveClass("text-forest-link");

    rerender(
      <SectionCta href="/contacto" inverse>
        Contacto
      </SectionCta>,
    );
    expect(screen.getByRole("link")).toHaveClass("text-paper");
  });

  it("sets accessibility attributes for decorative and meaningful backgrounds", () => {
    const { container, rerender } = render(
      <PrimaryImageBackground src="/decorative.jpg" />,
    );
    expect(container.querySelector("img")).toHaveAttribute(
      "aria-hidden",
      "true",
    );
    expect(container.querySelector("img")).toHaveAttribute("alt", "");

    rerender(
      <PrimaryImageBackground
        alt="Imagen de la hermandad"
        className="object-contain"
        quality={90}
        src="/meaningful.jpg"
      />,
    );
    expect(
      screen.getByRole("img", { name: "Imagen de la hermandad" }),
    ).toHaveAttribute("src", "/meaningful.jpg");
  });

  it("renders the site footer navigation and copyright year", () => {
    render(<SiteFooter />);
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
    expect(
      screen.getByRole("navigation", { name: /pie de p[aá]gina/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Todos los derechos reservados/),
    ).toBeInTheDocument();
  });

  it("escapes less-than characters in JSON-LD", () => {
    const { container } = render(<JsonLd data={{ text: "</script><tag>" }} />);
    expect(
      container.querySelector('script[type="application/ld+json"]')
        ?.textContent,
    ).toBe('{"text":"\\u003c/script>\\u003ctag>"}');
  });
});

describe("NovemberCountdownRibbon", () => {
  const countdown: Countdown = {
    year: 2027,
    days: 5,
    hours: 4,
    minutes: 3,
    seconds: 2,
  };

  it("renders nothing when the seasonal ribbon is inactive", () => {
    const { container } = render(
      <NovemberCountdownRibbon initialCountdown={false} />,
    );
    expect(container).toBeEmptyDOMElement();
  });

  it("shows the annual countdown with its year and padded units", () => {
    render(<NovemberCountdownRibbon initialCountdown={countdown} />);
    expect(screen.getByText("Noviembre Martiniano 2027")).toBeInTheDocument();
    expect(screen.getByText("5")).toBeInTheDocument();
    expect(screen.getByText("04")).toBeInTheDocument();
    expect(screen.getByText("03")).toBeInTheDocument();
    expect(screen.getByText("02")).toBeInTheDocument();
  });

  it("uses placeholders when a countdown value is not available yet", () => {
    render(
      <NovemberCountdownRibbon
        initialCountdown={{ year: 2027 } as Countdown}
      />,
    );
    expect(screen.getAllByText("--")).toHaveLength(4);
  });

  it("shows the celebration message during November", () => {
    render(<NovemberCountdownRibbon initialCountdown="celebration" />);
    expect(screen.getByText(/FELIZ NOVIEMBRE MARTINIANO/)).toBeInTheDocument();
  });
});

describe("AudioPill", () => {
  it("plays and pauses the hymn", async () => {
    const play = vi
      .spyOn(HTMLMediaElement.prototype, "play")
      .mockResolvedValue();
    const pause = vi
      .spyOn(HTMLMediaElement.prototype, "pause")
      .mockImplementation(() => {});
    vi.spyOn(HTMLMediaElement.prototype, "load").mockImplementation(() => {});
    const { user } = renderWithUser(<AudioPill left />);

    await user.click(screen.getByRole("button", { name: "Escuchar himno" }));
    expect(play).toHaveBeenCalledOnce();
    expect(
      screen.getByRole("button", { name: "Pausar himno" }),
    ).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Pausar himno" }));
    expect(pause).toHaveBeenCalledOnce();
    expect(
      screen.getByRole("button", { name: "Escuchar himno" }),
    ).toBeInTheDocument();
  });

  it("keeps playback stopped if the browser rejects play", async () => {
    vi.spyOn(HTMLMediaElement.prototype, "play").mockRejectedValue(
      new Error("blocked"),
    );
    vi.spyOn(HTMLMediaElement.prototype, "load").mockImplementation(() => {});
    const { user } = renderWithUser(<AudioPill />);

    await user.click(screen.getByRole("button", { name: "Escuchar himno" }));
    expect(
      screen.getByRole("button", { name: "Escuchar himno" }),
    ).toBeInTheDocument();
  });

  it("closes the control and resets the audio", async () => {
    const pause = vi
      .spyOn(HTMLMediaElement.prototype, "pause")
      .mockImplementation(() => {});
    const { user, container } = renderWithUser(<AudioPill />);
    const audio = container.querySelector("audio")!;
    Object.defineProperty(audio, "currentTime", {
      configurable: true,
      writable: true,
      value: 12,
    });

    await user.click(
      screen.getByRole("button", { name: "Cerrar reproductor" }),
    );
    expect(pause).toHaveBeenCalled();
    expect(audio.currentTime).toBe(0);
    expect(
      screen.queryByRole("button", { name: "Cerrar reproductor" }),
    ).not.toBeInTheDocument();
  });
});

describe("ScrollToTopButton", () => {
  function setScrollY(value: number) {
    Object.defineProperty(window, "scrollY", { configurable: true, value });
  }

  it("appears after scrolling and respects reduced motion when clicked", async () => {
    setScrollY(0);
    const scrollTo = vi.spyOn(window, "scrollTo").mockImplementation(() => {});
    const matchMedia = vi.spyOn(window, "matchMedia").mockReturnValue({
      matches: true,
      media: "(prefers-reduced-motion: reduce)",
      onchange: null,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      addListener: vi.fn(),
      removeListener: vi.fn(),
      dispatchEvent: vi.fn(),
    });
    const user = userEvent.setup();
    render(<ScrollToTopButton />);

    expect(
      screen.queryByRole("button", { name: "Volver arriba" }),
    ).not.toBeInTheDocument();
    setScrollY(321);
    fireEvent.scroll(window);
    const button = screen.getByRole("button", { name: "Volver arriba" });
    await user.click(button);

    expect(matchMedia).toHaveBeenCalledWith("(prefers-reduced-motion: reduce)");
    expect(scrollTo).toHaveBeenCalledWith(0, 0);
  });

  it("uses smooth scrolling when motion is allowed and removes its listener", async () => {
    setScrollY(500);
    const scrollTo = vi.spyOn(window, "scrollTo").mockImplementation(() => {});
    vi.spyOn(window, "matchMedia").mockReturnValue({
      matches: false,
      media: "(prefers-reduced-motion: reduce)",
      onchange: null,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      addListener: vi.fn(),
      removeListener: vi.fn(),
      dispatchEvent: vi.fn(),
    });
    const remove = vi.spyOn(window, "removeEventListener");
    const { user, unmount } = renderWithUser(<ScrollToTopButton />);
    await user.click(screen.getByRole("button", { name: "Volver arriba" }));
    expect(scrollTo).toHaveBeenCalledWith({ top: 0, behavior: "smooth" });
    unmount();
    expect(remove).toHaveBeenCalledWith("scroll", expect.any(Function));
  });
});

describe("ScrollRevealSections", () => {
  it("observes hidden sections, reveals intersecting items, and responds to viewport changes", () => {
    const observers: Array<{
      callback: IntersectionObserverCallback;
      observed: Element[];
      disconnect: ReturnType<typeof vi.fn>;
      unobserve: ReturnType<typeof vi.fn>;
    }> = [];
    class ObserverMock {
      observed: Element[] = [];
      disconnect = vi.fn();
      unobserve = vi.fn();
      constructor(public callback: IntersectionObserverCallback) {
        observers.push(this);
      }
      observe = (element: Element) => this.observed.push(element);
    }
    vi.stubGlobal("IntersectionObserver", ObserverMock);
    let onChange: (() => void) | undefined;
    const removeListener = vi.fn();
    vi.spyOn(window, "matchMedia").mockReturnValue({
      matches: true,
      media: "(max-width: 767px)",
      onchange: null,
      addEventListener: (
        _event: string,
        callback: EventListenerOrEventListenerObject,
      ) => {
        onChange = callback as () => void;
      },
      removeEventListener: removeListener,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      dispatchEvent: vi.fn(),
    });
    const { container, unmount } = render(
      <ScrollRevealSections>
        <section>
          <div>Primero</div>
          <div aria-hidden="true">Decoración</div>
          <div>Segundo</div>
        </section>
      </ScrollRevealSections>,
    );
    const content = container.querySelectorAll(
      "section > div:not([aria-hidden='true'])",
    );
    expect(observers[0].observed).toEqual(Array.from(content));
    expect(content[0]).toHaveClass("scroll-reveal");

    act(() =>
      observers[0].callback(
        [
          {
            isIntersecting: true,
            target: content[0],
          } as IntersectionObserverEntry,
        ],
        observers[0] as unknown as IntersectionObserver,
      ),
    );
    expect(content[0]).toHaveClass("scroll-reveal-visible");
    expect(observers[0].unobserve).toHaveBeenCalledWith(content[0]);

    act(() => onChange?.());
    expect(observers[0].disconnect).toHaveBeenCalled();
    expect(observers[1].observed).toEqual([content[1]]);
    unmount();
    expect(removeListener).toHaveBeenCalledWith("change", expect.any(Function));
    expect(observers[1].disconnect).toHaveBeenCalled();
  });
});

describe("SiteHeader", () => {
  it("marks the current desktop route and toggles scrolled styling", () => {
    vi.mocked(usePathname).mockReturnValue("/archivo/documentos");
    Object.defineProperty(window, "scrollY", { configurable: true, value: 0 });
    const { container } = render(<SiteHeader />);
    expect(
      container.querySelector('#desktop-navigation a[aria-current="page"]'),
    ).toHaveAttribute("href", "/archivo/documentos");
    Object.defineProperty(window, "scrollY", { configurable: true, value: 13 });
    fireEvent.scroll(window);
    expect(container.querySelector("header")).toHaveClass("bg-paper/95");
  });

  it("opens a native modal menu and restores focus after closing", async () => {
    vi.mocked(usePathname).mockReturnValue("/hermandad/historia");
    vi.spyOn(HTMLElement.prototype, "getClientRects").mockReturnValue([
      new DOMRect(),
    ] as unknown as DOMRectList);
    const { user } = renderWithUser(<SiteHeader />);
    const toggle = screen.getByRole("button", { name: "Abrir menú" });
    await user.click(toggle);

    expect(toggle).toHaveAttribute("aria-expanded", "true");
    expect(document.body.style.overflow).toBe("hidden");
    const mobileNavigation = screen.getByRole("navigation", {
      name: "Navegación móvil",
    });
    expect(
      mobileNavigation.querySelector('a[aria-current="page"]'),
    ).toHaveAttribute("href", "/hermandad/historia");

    const dialog = screen.getByRole("dialog", { name: "Navegación" });
    expect(dialog).toHaveAttribute("open");
    expect(screen.getByRole("button", { name: "Cerrar menú" })).toHaveFocus();
    fireEvent(dialog, new Event("cancel"));
    act(() =>
      dialog instanceof HTMLDialogElement ? dialog.close() : undefined,
    );
    expect(toggle).toHaveAttribute("aria-expanded", "false");
    expect(document.body.style.overflow).toBe("");
    expect(toggle).toHaveFocus();
  });

  it("closes the mobile menu from its backdrop and navigation links", async () => {
    vi.spyOn(HTMLElement.prototype, "getClientRects").mockReturnValue([
      new DOMRect(),
    ] as unknown as DOMRectList);
    const { user } = renderWithUser(<SiteHeader />);
    await user.click(screen.getByRole("button", { name: "Abrir menú" }));
    await user.click(screen.getByRole("dialog", { name: "Navegación" }));
    expect(screen.getByRole("button", { name: "Abrir menú" })).toHaveAttribute(
      "aria-expanded",
      "false",
    );

    await user.click(screen.getByRole("button", { name: "Abrir menú" }));
    const mobileNav = screen.getByRole("navigation", {
      name: "Navegación móvil",
    });
    await user.click(mobileNav.querySelector("a[href='/hermandad']")!);
    expect(screen.getByRole("button", { name: "Abrir menú" })).toHaveAttribute(
      "aria-expanded",
      "false",
    );
  });
});

function renderWithUser(ui: React.ReactElement) {
  const user = userEvent.setup();
  return { ...render(ui), user };
}
