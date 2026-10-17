import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { HomeBrotherhoodSection } from "@/components/home/home-brotherhood-section";
import { HomeIdentitySections } from "@/components/home/home-identity-sections";
import { HomeNewsSection, HomeArchiveSections } from "@/components/home/home-archive-sections";
import { HomeClosingSection } from "@/components/home/home-closing-section";
import { newsArticles } from "@/models/blog/news";

describe("home page sections", () => {
  it("lists the community areas and links to the brotherhood pillars", () => {
    render(<HomeBrotherhoodSection />);
    expect(screen.getByRole("heading", { name: "Hermandad" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /nuestro carisma/i })).toHaveAttribute("href", "/hermandad/pilares");
    expect(screen.getAllByRole("heading", { level: 3 }).length).toBeGreaterThan(0);
  });

  it("combines the home identity sections, news, social links, and archive", () => {
    const { container } = render(<HomeIdentitySections />);
    expect(container.querySelector("#historia")).toBeInTheDocument();
    expect(container.querySelector("#san-martin")).toBeInTheDocument();
    expect(container.querySelector("#noticias")).toBeInTheDocument();
    expect(container.querySelector("#cierre")).toBeInTheDocument();
    expect(screen.getByRole("navigation", { name: "Redes sociales" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Facebook de la Hermandad" })).toHaveAttribute("href", "https://web.facebook.com/hcsmpcb");
  });

  it("shows recent news links for published articles", () => {
    render(<HomeNewsSection />);
    expect(screen.getByRole("heading", { name: "Blog" })).toBeInTheDocument();
    for (const article of newsArticles.slice(0, 3)) {
      expect(document.querySelector(`a[href="/blog/${article.slug}"]`)).toBeInTheDocument();
    }
  });

  it("renders multimedia and board member content in the home archive", () => {
    const { container } = render(<HomeArchiveSections />);
    expect(container.querySelector("#multimedia")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Junta Directiva" })).toBeInTheDocument();
    expect(container.querySelectorAll("dl dt").length).toBeGreaterThan(0);
  });

  it("includes a contact route in the closing call to action", () => {
    render(<HomeClosingSection />);
    expect(screen.getByRole("heading", { name: /una historia que comenz/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /s[eé] parte de nuestra hermandad/i })).toHaveAttribute("href", "/contacto");
  });
});
