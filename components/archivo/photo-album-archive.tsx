"use client";

import { albums } from "@/models/archivo/archive-content";
import Image from "next/image";
import { ArrowUpRight, Images, Search, X } from "lucide-react";
import { useCollectionSearch } from "@/hooks/use-collection-search";

export function PhotoAlbumArchive() {
  const { query, setQuery, results } = useCollectionSearch(
    albums,
    (album) => album.title,
  );
  return (
    <div>
      <form
        className="mb-8"
        role="search"
        onSubmit={(event) => event.preventDefault()}
      >
        <label className="block text-sm font-semibold" htmlFor="album-search">
          Buscar en los álbumes
        </label>
        <div className="relative mt-3">
          <Search
            aria-hidden="true"
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted"
            size={18}
          />
          <input
            className="min-h-12 w-full border border-line bg-white/50 py-3 pl-11 pr-14 text-base text-ink placeholder:text-muted focus:border-ink"
            id="album-search"
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Por celebración o año, por ejemplo 2018"
            type="search"
            value={query}
          />
          {query && (
            <button
              aria-label="Limpiar búsqueda"
              className="absolute right-1 top-1/2 grid size-11 -translate-y-1/2 place-items-center text-muted hover:text-ink"
              onClick={() => setQuery("")}
              type="button"
            >
              <X aria-hidden="true" size={18} />
            </button>
          )}
        </div>
        <p
          aria-live="polite"
          aria-atomic="true"
          className="mt-3 text-sm text-muted"
        >
          {results.length} de {albums.length} álbumes
        </p>
      </form>
      {results.length === 0 && (
        <div className="border border-line bg-mist/50 p-6">
          <h2 className="font-display text-xl">No encontramos álbumes</h2>
          <p className="mt-3 text-sm leading-7 text-muted">
            Prueba con otro año o celebración.
          </p>
          <button
            className="mt-4 min-h-11 text-sm font-semibold underline underline-offset-4"
            onClick={() => setQuery("")}
            type="button"
          >
            Ver todos los álbumes
          </button>
        </div>
      )}
      <ul className="grid gap-5 sm:grid-cols-2">
        {results.map((album) => (
          <li
            className="overflow-hidden border border-line bg-white/35"
            key={album.id}
          >
            <a
              className="group block h-full transition-colors hover:bg-white/60"
              href={`https://www.facebook.com/media/set/?set=a.${album.id}&type=3`}
              rel="noreferrer"
              target="_blank"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-mist">
                <Image
                  alt={`Fotografía del álbum ${album.title}`}
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 36vw"
                  src={`/images/facebook-albums/album-${album.id}.jpg`}
                />
              </div>
              <div className="flex min-h-36 flex-col p-5 sm:p-6">
                <Images
                  aria-hidden="true"
                  className="mb-4 text-clay-text"
                  size={20}
                />
                <span className="flex items-start justify-between gap-3">
                  <span className="font-display text-xl leading-snug group-hover:text-clay-text">
                    {album.title}
                  </span>
                  <ArrowUpRight
                    aria-hidden="true"
                    className="mt-1 shrink-0 text-forest-link"
                    size={18}
                  />
                </span>
                <span className="mt-2 block text-sm leading-6 text-muted">
                  {album.detail} · Álbum público de Facebook
                </span>
                <span className="mt-auto pt-4 text-xs font-semibold text-forest-link">
                  Ver álbum en Facebook{" "}
                  <span className="sr-only">(abre en otra pestaña)</span>
                </span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
