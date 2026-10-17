import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ContactPage from "@/components/contacto/contact-page";
import CommunityLifePage from "@/components/vida/community-life-page";
import { FiestaPage } from "@/components/fiesta/fiesta-page";
import { SanMartinPage } from "@/components/san-martin/san-martin-page";
import { InstitutionalPageView } from "@/components/hermandad/institutional-page-view";
import { institutionalPageByPath } from "@/models/hermandad/institutional-pages";

describe("content pages", () => {
  it("renders the contact journey and its application documents", () => {
    render(<ContactPage />);
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: /descargar formato/i })[0]).toHaveAttribute(
      "href",
      expect.stringContaining("/docs/"),
    );
    expect(screen.getByRole("link", { name: /contactar por whatsapp/i })).toHaveAttribute(
      "href",
      expect.stringContaining("wa.me"),
    );
  });

  it("shows all community practices and links to contact", () => {
    render(<CommunityLifePage />);
    expect(screen.getByRole("heading", { name: /la fe toma forma/i })).toBeInTheDocument();
    for (const label of ["Oración", "Formación", "Encuentro", "Servicio"]) {
      expect(screen.getByRole("heading", { name: label })).toBeInTheDocument();
    }
    expect(screen.getByRole("link", { name: /acércate/i })).toHaveAttribute("href", "/contacto");
  });

  it("renders the institutional home and related section navigation", () => {
    const page = institutionalPageByPath.get("/hermandad")!;
    render(<InstitutionalPageView page={page} />);
    expect(screen.getByRole("heading", { level: 1, name: page.title })).toBeInTheDocument();
    expect(screen.getByRole("navigation", { name: /ruta de navegación/i })).toBeInTheDocument();
    expect(document.querySelector('a[href="/hermandad/historia"]')).toBeInTheDocument();
  });

  it("renders the feast page navigation and event schedule", () => {
    const page = institutionalPageByPath.get("/hermandad/fiesta")!;
    render(<FiestaPage page={page} />);
    expect(screen.getByRole("heading", { level: 1, name: page.title })).toBeInTheDocument();
    expect(screen.getByRole("navigation", { name: /secciones de la fiesta/i })).toBeInTheDocument();
    expect(document.getElementById("recorridos")).toBeInTheDocument();
  });

  it("renders the saint biography, timeline, and virtues", () => {
    render(<SanMartinPage />);
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
    expect(screen.getByText("Nace en Lima")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Humildad" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Caridad" })).toBeInTheDocument();
  });
});
