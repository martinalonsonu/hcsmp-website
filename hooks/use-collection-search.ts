"use client";

import { useState } from "react";

function normalizeSearch(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase("es")
    .trim();
}

export function useCollectionSearch<T>(
  items: readonly T[],
  getSearchText: (item: T) => string,
) {
  const [query, setQuery] = useState("");
  const normalizedQuery = normalizeSearch(query);
  const results = items.filter((item) =>
    normalizeSearch(getSearchText(item)).includes(normalizedQuery),
  );
  return { query, setQuery, results };
}
