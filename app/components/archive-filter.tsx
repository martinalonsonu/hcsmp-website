"use client";

import { useState } from "react";

const categories = [
  "Todo",
  "Fotografías",
  "Documentos",
  "Videos",
  "Programas",
] as const;
type ArchiveCategory = (typeof categories)[number];

export function ArchiveFilter() {
  const [category, setCategory] = useState<ArchiveCategory>("Todo");

  return (
    <section aria-label="Filtrar archivo" className="border-y border-line py-5">
      <div className="flex flex-wrap gap-2">
        {categories.map((item) => (
          <button
            aria-pressed={category === item}
            className={`min-h-10 border px-4 text-xs transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay ${category === item ? "border-ink bg-ink text-paper" : "border-line text-muted hover:border-ink hover:text-ink"}`}
            key={item}
            onClick={() => setCategory(item)}
            type="button"
          >
            {item}
          </button>
        ))}
      </div>
      <p aria-live="polite" className="mt-6 text-sm leading-7 text-muted">
        {category === "Todo"
          ? "El archivo digital está en preparación. Se incorporará material propio conforme sea revisado y descrito."
          : `La colección de ${category.toLowerCase()} se incorporará cuando el material institucional esté disponible.`}
      </p>
    </section>
  );
}
