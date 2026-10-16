const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const ISO_DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;

export function assertUniqueValues(values: readonly string[], label: string) {
  const seen = new Set<string>();

  for (const value of values) {
    if (seen.has(value)) {
      throw new Error(`Duplicate ${label}: "${value}".`);
    }
    seen.add(value);
  }
}

export function assertSlug(value: string, label: string) {
  if (!SLUG_PATTERN.test(value)) {
    throw new Error(`Invalid ${label}: "${value}". Use lowercase kebab-case.`);
  }
}

export function assertCanonicalPath(value: string, label: string) {
  if (
    !value.startsWith("/") ||
    value === "/" ||
    value.endsWith("/") ||
    !value.slice(1).split("/").every((segment) => SLUG_PATTERN.test(segment))
  ) {
    throw new Error(`Invalid ${label}: "${value}". Use a path like /section/page.`);
  }
}

export function assertIsoDate(value: string, label: string) {
  if (!ISO_DATE_PATTERN.test(value)) {
    throw new Error(`Invalid ${label}: "${value}". Use YYYY-MM-DD.`);
  }

  const parsed = new Date(`${value}T00:00:00.000Z`);
  if (Number.isNaN(parsed.getTime()) || parsed.toISOString().slice(0, 10) !== value) {
    throw new Error(`Invalid ${label}: "${value}" is not a calendar date.`);
  }
}

export function assertRequiredText(value: string, label: string) {
  if (value.trim().length === 0) {
    throw new Error(`Missing required text: ${label}.`);
  }
}
