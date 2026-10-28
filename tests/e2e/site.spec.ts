import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const routes = [
  "/",
  "/hermandad",
  "/hermandad/historia",
  "/hermandad/imagen",
  "/hermandad/fundadores",
  "/hermandad/presidentes",
  "/hermandad/pilares",
  "/hermandad/fiesta",
  "/san-martin-de-porres",
  "/archivo",
  "/archivo/fotografias",
  "/archivo/documentos",
  "/archivo/videos",
  "/blog",
  "/blog/programa-festividad-san-martin-2026",
  "/blog/recorrido-principal-san-martin-porres",
  "/contacto",
  "/vida",
  "/fiesta/procesion",
];

for (const route of routes) {
  test(`${route}: landmarks, anchors, responsive layout and accessibility`, async ({
    page,
  }, testInfo) => {
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    const response = await page.goto(route, { waitUntil: "load" });
    expect(response?.status()).toBe(200);
    await expect(
      page.getByRole("main").getByRole("heading", { level: 1 }),
    ).toHaveCount(1);

    for (const width of testInfo.project.name === "mobile"
      ? [320, 390, 768]
      : [1280, 1440]) {
      await page.setViewportSize({ width, height: 1000 });
      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth - window.innerWidth,
      );
      expect(overflow, `Horizontal overflow at ${width}px`).toBeLessThanOrEqual(
        1,
      );
    }

    const missingAnchors = await page
      .locator('a[href^="#"]')
      .evaluateAll((anchors) =>
        anchors.flatMap((anchor) => {
          const href = anchor.getAttribute("href");
          return href &&
            href.length > 1 &&
            !document.getElementById(decodeURIComponent(href.slice(1)))
            ? [href]
            : [];
        }),
      );
    expect(missingAnchors).toEqual([]);

    const duplicateIds = await page.locator("[id]").evaluateAll((elements) => {
      const ids = elements.map((element) => element.id);
      return ids.filter((id, index) => ids.indexOf(id) !== index);
    });
    expect(duplicateIds).toEqual([]);

    for (const frame of await page.locator("iframe").all()) {
      await expect(frame).toHaveAttribute("title", /\S/);
    }
    // Audit our markup; third-party players/maps own their internal controls.
    const accessibility = await new AxeBuilder({ page })
      .exclude("iframe")
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze();
    expect(
      accessibility.violations.map(({ id, nodes }) => ({
        id,
        elements: nodes.map(({ target, failureSummary }) => ({
          target,
          failureSummary,
        })),
      })),
    ).toEqual([]);
    expect(errors).toEqual([]);
  });
}

test("navigation exposes subsections and restores focus", async ({
  page,
}, testInfo) => {
  await page.goto("/hermandad/historia");
  if (testInfo.project.name === "mobile") {
    const toggle = page.getByRole("button", { name: "Abrir menú" });
    await toggle.click();
    const dialog = page.getByRole("dialog", { name: "Navegación" });
    await expect(dialog).toBeVisible();
    await expect(
      dialog.getByRole("button", { name: "Cerrar menú" }),
    ).toBeFocused();
    await page.keyboard.press("Shift+Tab");
    await expect(
      dialog.getByRole("link", { name: "Contáctanos", exact: true }),
    ).toBeFocused();
    await page.keyboard.press("Escape");
    await expect(dialog).not.toBeVisible();
    await expect(toggle).toBeFocused();
    await toggle.click();
    await dialog
      .getByRole("link", { name: "Fotografías", exact: true })
      .click();
    await expect(page).toHaveURL(/\/archivo\/fotografias\/?$/);
    await expect(dialog).not.toBeVisible();
  } else {
    const toggle = page.getByRole("button", {
      name: "Subsecciones de Hermandad",
      exact: true,
    });
    await toggle.click();
    await expect(page.locator("#navigation-hermandad")).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(toggle).toBeFocused();
    await expect(toggle).toHaveAttribute("aria-expanded", "false");
  }
});

test("photo search handles accents, no results and reset", async ({ page }) => {
  await page.goto("/archivo/fotografias");
  const search = page.getByRole("searchbox", { name: "Buscar en los álbumes" });
  await search.fill("2018");
  await expect(
    page.getByRole("main").locator("li a[target='_blank']"),
  ).toHaveCount(3);
  await search.fill("zzzz-no-existe");
  await expect(
    page.getByRole("heading", { name: "No encontramos álbumes" }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Ver todos los álbumes" }).click();
  await expect(search).toHaveValue("");
  await expect(
    page.getByRole("main").locator("li a[target='_blank']"),
  ).toHaveCount(28);
});

test("multimedia dialog traps focus and responds to arrow keys", async ({
  page,
}) => {
  await page.goto("/");
  const open = page.getByRole("button", { name: /^Ampliar fotografía:/ });
  await open.click();
  const dialog = page.getByRole("dialog");
  await expect(dialog).toBeVisible();
  await page.keyboard.press("ArrowRight");
  await expect(dialog.getByRole("heading")).toHaveText(
    "800 años de la Orden Dominica",
  );
  await page.keyboard.press("Escape");
  await expect(dialog).not.toBeVisible();
  await expect(
    page.getByRole("button", { name: /^Ampliar fotografía: 800 años/ }),
  ).toBeFocused();
});
