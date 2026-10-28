import { act, fireEvent, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";
import { usePathname } from "next/navigation";
import NotFound from "@/app/not-found";
import { InstitutionalPageView } from "@/components/hermandad/institutional-page-view";
import { RelatedPages } from "@/components/hermandad/related-pages";
import { PhotoAlbumArchive } from "@/components/archivo/photo-album-archive";
import { ArticleContent } from "@/components/blog/article-content";
import { NewsList } from "@/components/blog/news-list";
import { newsArticles } from "@/models/blog/news";
import { HomeHero } from "@/components/home/home-hero";
import { SiteHeader } from "@/components/shared/site-header";
import { AudioPill } from "@/components/shared/audio-pill";
import { SectionIndex } from "@/components/shared/section-index";
import { albums } from "@/models/archivo/archive-content";
import { institutionalPageByPath } from "@/models/hermandad/institutional-pages";

afterEach(() => vi.useRealTimers());

function renderPage(path: string) {
  const page = institutionalPageByPath.get(path);
  if (!page) throw new Error(`Missing page: ${path}`);
  return render(<InstitutionalPageView page={page} />);
}

describe("archive and reading journeys", () => {
  it("links the procession breadcrumb to the published feast page", () => {
    renderPage("/fiesta/procesion");
    const breadcrumbs = screen.getByRole("navigation", {
      name: "Ruta de navegación",
    });
    expect(
      within(breadcrumbs).getByRole("link", { name: "Fiesta de San Martín" }),
    ).toHaveAttribute("href", "/hermandad/fiesta");
  });
  it("offers all three archive collections from the archive landing page", () => {
    renderPage("/archivo");
    for (const path of ["fotografias", "documentos", "videos"]) {
      expect(
        document.querySelector(`a[href="/archivo/${path}"]`),
      ).toBeInTheDocument();
    }
    expect(
      screen.getAllByRole("link", { name: /explorar colección/i }),
    ).toHaveLength(3);
  });

  it("finds photo albums without requiring accents and restores the collection after no results", async () => {
    const user = userEvent.setup();
    render(<PhotoAlbumArchive />);
    const search = screen.getByRole("searchbox");
    await user.type(search, "procesion");
    expect(screen.getAllByRole("link").length).toBeGreaterThan(0);
    expect(screen.getAllByRole("link").length).toBeLessThan(albums.length);
    await user.clear(search);
    await user.type(search, "ninguna-coincidencia");
    expect(
      screen.getByRole("heading", { name: "No encontramos álbumes" }),
    ).toBeInTheDocument();
    await user.click(
      screen.getByRole("button", { name: "Ver todos los álbumes" }),
    );
    expect(screen.getAllByRole("link")).toHaveLength(albums.length);
    await user.type(search, "2018");
    await user.click(screen.getByRole("button", { name: "Limpiar búsqueda" }));
    expect(search).toHaveValue("");
  });

  it("provides article links and the original editorial date on the blog landing page", () => {
    renderPage("/blog");
    expect(screen.getByText(newsArticles[0].date)).toBeInTheDocument();
    expect(
      screen.getAllByRole("link", { name: /leer más/i }).length,
    ).toBeGreaterThan(0);
  });

  it("supports articles without images and provides a useful empty state", () => {
    const article = {
      ...newsArticles[0],
      image: undefined,
      eyebrow: undefined,
      publishedAt: "2026-10-01",
    };
    const { rerender } = render(<NewsList articles={[article]} />);
    expect(document.querySelector("time")).toHaveAttribute(
      "datetime",
      "2026-10-01",
    );
    expect(screen.queryByRole("img")).not.toBeInTheDocument();
    rerender(<NewsList articles={[]} />);
    expect(
      screen.getByRole("heading", { name: "Aún no hay noticias publicadas" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /contactar/i })).toHaveAttribute(
      "href",
      "/contacto",
    );
  });

  it("uses the feast schedule on its published route", () => {
    renderPage("/hermandad/fiesta");
    expect(
      screen.getByRole("navigation", { name: "Secciones de la fiesta" }),
    ).toBeInTheDocument();
    expect(document.getElementById("recorridos")).toBeInTheDocument();
  });

  it.each([
    "/hermandad/fundadores",
    "/hermandad/presidentes",
    "/hermandad/pilares",
    "/archivo/documentos",
    "/archivo/videos",
  ])("keeps contextual navigation available on %s", (path) => {
    renderPage(path);
    expect(
      screen.getByRole("navigation", { name: "Secciones relacionadas" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  });

  it("preserves Markdown links, lists and heading hierarchy", () => {
    render(
      <ArticleContent
        content={
          "# Sección\n\nTexto con [archivo](/archivo).\n\n### Detalle\n\n1. Primero\n\n> Memoria compartida\n"
        }
      />,
    );
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      "Sección",
    );
    expect(screen.getByRole("link", { name: "archivo" })).toHaveAttribute(
      "href",
      "/archivo",
    );
    expect(screen.getByRole("list")).toBeInTheDocument();
  });

  it("offers recovery actions on a missing page and omits empty navigation", () => {
    render(
      <>
        <NotFound />
        <RelatedPages paths={["/missing"]} />
        <SectionIndex items={[]} />
      </>,
    );
    expect(
      screen.getByRole("link", { name: "Volver al inicio" }),
    ).toHaveAttribute("href", "/");
    expect(
      screen.getByRole("link", { name: "Explorar el archivo" }),
    ).toHaveAttribute("href", "/archivo");
    expect(screen.queryByRole("navigation")).not.toBeInTheDocument();
  });
});

describe("keyboard and media controls", () => {
  it("opens desktop subsections, closes on Escape or outside click, and preserves exact current-page semantics", async () => {
    vi.mocked(usePathname).mockReturnValue("/hermandad/historia/");
    const user = userEvent.setup();
    render(<SiteHeader />);
    const toggle = screen.getByRole("button", {
      name: "Subsecciones de Hermandad",
    });
    await user.click(toggle);
    expect(toggle).toHaveAttribute("aria-expanded", "true");
    expect(
      within(document.getElementById("desktop-navigation")!).getByRole("link", {
        name: "Historia",
      }),
    ).toHaveAttribute("aria-current", "page");
    fireEvent.keyDown(document, { key: "Escape" });
    expect(toggle).toHaveFocus();
    expect(toggle).toHaveAttribute("aria-expanded", "false");
    await user.click(toggle);
    fireEvent.pointerDown(document.body);
    expect(toggle).toHaveAttribute("aria-expanded", "false");
    await user.click(toggle);
    await user.click(
      within(document.getElementById("desktop-navigation")!).getByRole("link", {
        name: "Fundadores",
      }),
    );
    expect(toggle).toHaveAttribute("aria-expanded", "false");
  });

  it("wraps keyboard focus inside the mobile dialog", async () => {
    vi.spyOn(HTMLElement.prototype, "getClientRects").mockReturnValue([
      new DOMRect(),
    ] as unknown as DOMRectList);
    const user = userEvent.setup();
    render(<SiteHeader />);
    await user.click(screen.getByRole("button", { name: "Abrir menú" }));
    const dialog = screen.getByRole("dialog");
    const close = within(dialog).getByRole("button", { name: "Cerrar menú" });
    const contact = within(dialog).getByRole("link", { name: "Contáctanos" });
    close.focus();
    fireEvent.keyDown(close, { key: "Tab", shiftKey: true });
    expect(contact).toHaveFocus();
    fireEvent.keyDown(contact, { key: "Tab" });
    expect(close).toHaveFocus();
  });

  it("allows manual hero navigation, pause and resume", async () => {
    const user = userEvent.setup();
    render(<HomeHero />);
    await user.click(
      screen.getByRole("button", { name: "Imagen siguiente de portada" }),
    );
    expect(screen.getByText(/Recorrido de Guardada/)).toBeInTheDocument();
    await user.click(
      screen.getByRole("button", { name: "Imagen anterior de portada" }),
    );
    expect(screen.getByText(/Nuestra imagen titular/)).toBeInTheDocument();
    await user.click(
      screen.getByRole("button", { name: "Pausar portada automática" }),
    );
    expect(
      screen.getByRole("button", { name: "Reanudar portada automática" }),
    ).toHaveAttribute("aria-pressed", "true");
  });

  it("does not resume a pending audio request after the player is closed", async () => {
    let finishPlayback: (() => void) | undefined;
    vi.spyOn(HTMLMediaElement.prototype, "play").mockImplementation(
      () =>
        new Promise<void>((resolve) => {
          finishPlayback = resolve;
        }),
    );
    const user = userEvent.setup();
    render(<AudioPill />);
    await user.click(screen.getByRole("button", { name: "Escuchar himno" }));
    expect(
      screen.getByRole("button", { name: "Escuchar himno" }),
    ).toBeDisabled();
    await user.click(
      screen.getByRole("button", { name: "Cerrar reproductor" }),
    );
    await act(async () => finishPlayback?.());
    expect(
      screen.queryByRole("button", { name: "Pausar himno" }),
    ).not.toBeInTheDocument();
  });
});
