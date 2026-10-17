import { render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import HomePage from "@/app/page";
import ContactRoute from "@/app/contacto/page";
import CommunityLifeRoute from "@/app/vida/page";
import robots from "@/app/robots";
import sitemap from "@/app/sitemap";
import NewsArticlePage, { generateMetadata as newsMetadata, generateStaticParams as newsParams } from "@/app/blog/[slug]/page";
import InstitutionalRoute, { generateMetadata as institutionalMetadata, generateStaticParams as institutionalParams } from "@/app/[...slug]/page";
import { newsArticles } from "@/models/blog/news";
import { institutionalPages } from "@/models/hermandad/institutional-pages";

const { notFound, redirect } = vi.hoisted(() => ({
  notFound: vi.fn(),
  redirect: vi.fn((path: string) => { throw new Error(`REDIRECT:${path}`); }),
}));
vi.mock("next/navigation", () => ({
  usePathname: vi.fn(() => "/"),
  useRouter: vi.fn(() => ({ push: vi.fn(), replace: vi.fn(), refresh: vi.fn() })),
  notFound: () => notFound(),
  redirect: (path: string) => redirect(path),
}));

afterEach(() => vi.unstubAllGlobals());

describe("App Router pages", () => {
  it("renders home, contact, and community routes with their page landmarks", () => {
    vi.spyOn(window, "matchMedia").mockImplementation((media) => ({
      matches: false,
      media,
      onchange: null,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      addListener: vi.fn(),
      removeListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }));
    vi.stubGlobal("IntersectionObserver", class {
      observe() {}
      disconnect() {}
      unobserve() {}
    });
    const home = render(<HomePage />);
    expect(home.container.querySelector('script[type="application/ld+json"]')).toBeInTheDocument();
    home.unmount();
    render(<ContactRoute />);
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
    render(<CommunityLifeRoute />);
    expect(screen.getByRole("heading", { name: /la fe toma forma/i })).toBeInTheDocument();
  });

  it("generates route params and canonical metadata for known content", async () => {
    expect(newsParams()).toEqual(newsArticles.map(({ slug }) => ({ slug })));
    expect(institutionalParams()).toContainEqual({ slug: ["hermandad", "historia"] });
    const article = newsArticles[0];
    expect(await newsMetadata({ params: Promise.resolve({ slug: article.slug }) })).toMatchObject({
      title: article.title,
      alternates: { canonical: expect.stringContaining(`/blog/${article.slug}`) },
    });
    const page = institutionalPages[0];
    expect(await institutionalMetadata({ params: Promise.resolve({ slug: page.path.slice(1).split("/") }) })).toMatchObject({
      title: page.title,
      alternates: { canonical: expect.stringContaining(page.path) },
    });
  });

  it("renders a news article with its content and structured data", async () => {
    const article = newsArticles[0];
    render(await NewsArticlePage({ params: Promise.resolve({ slug: article.slug }) }));
    expect(screen.getByRole("heading", { level: 1, name: article.title })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /volver al blog/i })).toHaveAttribute("href", "/blog");
    expect(document.querySelector('script[type="application/ld+json"]')).toBeInTheDocument();
  });

  it("renders an institutional route and follows legacy redirects", async () => {
    const page = institutionalPages.find(({ path }) => path === "/hermandad/historia")!;
    const result = await InstitutionalRoute({ params: Promise.resolve({ slug: ["hermandad", "historia"] }) });
    render(result);
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
    await expect( InstitutionalRoute({ params: Promise.resolve({ slug: ["vida-de-hermandad"] }) })).rejects.toThrow("REDIRECT:/hermandad/pilares");
    expect(redirect).toHaveBeenCalledWith("/hermandad/pilares");
    expect(page.title).toBeTruthy();
  });

  it("exposes robots rules and includes canonical routes in the sitemap", () => {
    expect(robots()).toMatchObject({ rules: { userAgent: "*", allow: "/" }, sitemap: expect.stringContaining("/sitemap.xml") });
    const entries = sitemap();
    expect(entries.find(({ url }) => url.endsWith("/"))).toMatchObject({ priority: 1, changeFrequency: "weekly" });
    expect(entries.some(({ url }) => url.includes("/contacto"))).toBe(true);
    expect(entries.some(({ url }) => url.includes(`/blog/${newsArticles[0].slug}`))).toBe(true);
  });
});
