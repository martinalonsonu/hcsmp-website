"use client";

import clsx from "clsx";
import { Archive } from "lucide-react";

import { categories } from "@/models/archivo/archive-content";
import { useState } from "react";

type ArchiveCategory = (typeof categories)[number];

export function ArchiveFilter() {
  const [category, setCategory] = useState<ArchiveCategory>("Todo");

  return (
    <section aria-label="Filtrar archivo">
      <div className="flex flex-wrap gap-x-5 gap-y-1 border-b border-line sm:gap-x-8">
        {categories.map((item) => (
          <button
            aria-pressed={category === item}
            className={clsx(
              "min-h-12 border-b-2 px-1 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay",
              category === item
                ? "border-clay font-semibold text-ink"
                : "border-transparent text-muted hover:border-ink hover:text-ink",
            )}
            key={item}
            onClick={() => setCategory(item)}
            type="button"
          >
            {item}
          </button>
        ))}
      </div>
      <div className="mt-8 flex flex-col gap-5 border-l-2 border-clay bg-mist/50 p-6 sm:flex-row sm:items-start sm:gap-7 sm:p-8">
        <Archive
          aria-hidden="true"
          className="shrink-0 text-clay-text"
          strokeWidth={1}
          size={30}
        />
        <p
          aria-live="polite"
          className="max-w-2xl text-sm leading-8 text-muted"
        >
          {category === "Todo"
            ? "El archivo digital está en preparación. Se incorporará material propio conforme sea revisado y descrito."
            : `La colección de ${category.toLowerCase()} se incorporará cuando el material institucional esté disponible.`}
        </p>
      </div>
    </section>
  );
}
