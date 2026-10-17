import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { BrotherhoodHistoryPage } from "@/components/hermandad/brotherhood-history-page";
import { BrotherhoodImagePage } from "@/components/hermandad/brotherhood-image-page";
import { BrotherhoodOverview, FoundersArchive, PresidentsArchive } from "@/components/hermandad/brotherhood-section-content";
import { historicalEvents } from "@/models/hermandad/institutional-pages";
import { foundingFigures, presidencyReferences } from "@/models/hermandad/brotherhood";

describe("brotherhood pages and archives", () => {
  it("renders the institutional history timeline and chapter navigation", () => {
    const { container } = render(<BrotherhoodHistoryPage />);
    expect(screen.getByRole("heading", { level: 1, name: /nuestra historia/i })).toBeInTheDocument();
    expect(container.querySelectorAll("time")).toHaveLength(historicalEvents.length);
    expect(screen.getByRole("link", { name: /explorar memoria documental/i })).toHaveAttribute("href", "/archivo/documentos");
    expect(container.querySelectorAll("section[id]").length).toBeGreaterThan(0);
  });

  it("shows image provenance facts and its documented milestones", () => {
    const { container } = render(<BrotherhoodImagePage />);
    expect(screen.getByRole("heading", { level: 1, name: /la imagen que guarda nuestra historia/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /una inscripci[oó]n que atraviesa el tiempo/i })).toBeInTheDocument();
    expect(container.querySelectorAll("time").length).toBeGreaterThan(0);
    expect(screen.getByText(/imagen de candelero/i)).toBeInTheDocument();
  });

  it("renders the overview links to the institutional sections", () => {
    const { container } = render(<BrotherhoodOverview />);
    for (const path of ["/hermandad/historia", "/hermandad/fundadores", "/hermandad/presidentes"]) {
      expect(container.querySelector(`a[href="${path}"]`)).toBeInTheDocument();
    }
  });

  it("lists the founding figures and makes the incomplete record clear", () => {
    render(<FoundersArchive />);
    const articles = screen.getAllByRole("article");
    expect(articles).toHaveLength(foundingFigures.length);
    expect(screen.getByText(/no tenemos un referencia completa/i)).toBeInTheDocument();
  });

  it("lists documented presidency references and context", () => {
    render(<PresidentsArchive />);
    const list = screen.getByRole("list");
    expect(within(list).getAllByRole("listitem")).toHaveLength(presidencyReferences.length);
    expect(screen.getByText(/reconocer a quienes dirigieron/i)).toBeInTheDocument();
  });
});
