import { describe, expect, it, vi } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";

vi.mock("next/font/google", () => ({
  Poppins: () => ({ variable: "font-body-test" }),
  Libre_Baskerville: () => ({ variable: "font-display-test" }),
}));

import RootLayout from "@/app/layout";

describe("RootLayout", () => {
  it("wraps route content in the Spanish site shell and provides the skip link", () => {
    const markup = renderToStaticMarkup(
      RootLayout({
        children: <h1>Contenido de prueba</h1>,
      }),
    );
    const parsed = new DOMParser().parseFromString(markup, "text/html");

    expect(parsed.documentElement.getAttribute("lang")).toBe("es");
    expect(parsed.querySelector('a[href="#contenido"]')?.textContent).toMatch(/saltar al contenido/i);
    expect(parsed.querySelector("main#contenido h1")?.textContent).toBe("Contenido de prueba");
    expect(parsed.querySelector("footer")).not.toBeNull();
  });
});
