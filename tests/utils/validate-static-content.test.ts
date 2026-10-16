import { describe, expect, it } from "vitest";
import {
  assertCanonicalPath,
  assertIsoDate,
  assertRequiredText,
  assertSlug,
  assertUniqueValues,
} from "@/utils/validate-static-content";

describe("static content validation", () => {
  it("accepts unique values and rejects duplicates", () => {
    expect(() => assertUniqueValues(["a", "b"], "slug")).not.toThrow();
    expect(() => assertUniqueValues(["a", "b", "a"], "slug")).toThrow(
      'Duplicate slug: "a".',
    );
  });

  it("accepts lowercase kebab-case slugs and rejects invalid formats", () => {
    expect(() => assertSlug("programa-2026", "blog slug")).not.toThrow();
    for (const invalid of ["Uppercase", "two words", "-leading", "trailing-"]) {
      expect(() => assertSlug(invalid, "blog slug")).toThrow("lowercase kebab-case");
    }
  });

  it("accepts canonical nested paths and rejects each malformed shape", () => {
    expect(() => assertCanonicalPath("/hermandad/historia", "path")).not.toThrow();
    for (const invalid of ["hermandad", "/", "/hermandad/", "/hermandad//historia", "/Mala-ruta"]) {
      expect(() => assertCanonicalPath(invalid, "path")).toThrow("Invalid path");
    }
  });

  it("accepts real ISO dates and rejects format and calendar errors", () => {
    expect(() => assertIsoDate("2026-11-03", "publishedAt")).not.toThrow();
    expect(() => assertIsoDate("03/11/2026", "publishedAt")).toThrow("Use YYYY-MM-DD");
    expect(() => assertIsoDate("2026-02-30", "publishedAt")).toThrow(
      "is not a calendar date",
    );
  });

  it("accepts required text and rejects whitespace-only values", () => {
    expect(() => assertRequiredText("Ready", "title")).not.toThrow();
    expect(() => assertRequiredText(" \n ", "title")).toThrow(
      "Missing required text: title.",
    );
  });
});
