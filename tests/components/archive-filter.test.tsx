import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ArchiveFilter } from "@/components/archivo/archive-filter";

describe("ArchiveFilter", () => {
  it("starts with Todo selected and shows the preparation message", () => {
    render(<ArchiveFilter />);
    expect(screen.getByRole("button", { name: "Todo" })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
    expect(screen.getByText(/archivo digital est[aá] en preparaci[oó]n/i)).toBeInTheDocument();
  });

  it("selects a category and updates the live message", () => {
    render(<ArchiveFilter />);
    fireEvent.click(screen.getByRole("button", { name: "Fotografías" }));
    expect(screen.getByRole("button", { name: "Fotografías" })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
    expect(screen.getByText(/colecci[oó]n de fotograf[ií]as/i)).toBeInTheDocument();
  });
});
