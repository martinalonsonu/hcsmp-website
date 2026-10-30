"use client";

import { albums } from "@/models/archivo/archive-content";
import Image from "next/image";
import { ArrowUpRight, Search, X } from "lucide-react";
import { useCollectionSearch } from "@/hooks/use-collection-search";

export function PhotoAlbumArchive() {
  const { query, setQuery, results } = useCollectionSearch(
    albums,
    (album) => album.title,
  );
  return (
    <div>
      <form
        className="mb-10 grid gap-4 border-y border-line bg-mist/40 px-5 py-6 sm:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] sm:items-center sm:gap-x-8 sm:px-7"
        role="search"
        onSubmit={(event) => event.preventDefault()}
      >
        <label
          className="font-display text-xl leading-snug"
          htmlFor="album-search"
        >
          Buscar en los álbumes
        </label>
        <div className="relative">
          <Search
            aria-hidden="true"
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted"
            size={18}
          />
          <input
            className="min-h-14 w-full border border-line bg-paper py-3 pl-11 pr-14 text-base text-ink placeholder:text-muted focus:border-ink"
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
          className="text-xs leading-6 text-muted sm:col-start-2"
        >
          {results.length} de {albums.length} álbumes
        </p>
      </form>
      {results.length === 0 && (
        <div className="border-l-2 border-clay bg-mist/50 p-7 sm:p-10">
          <h2 className="font-display text-2xl">No encontramos álbumes</h2>
          <p className="mt-3 text-sm leading-7 text-muted">
            Prueba con otro año o celebración.
          </p>
          <button
            className="button-secondary mt-5"
            onClick={() => setQuery("")}
            type="button"
          >
            Ver todos los álbumes
          </button>
        </div>
      )}
      <ul className="grid gap-x-7 gap-y-10 sm:grid-cols-2 sm:gap-y-12">
        {results.map((album, index) => (
          <li className="min-w-0" key={album.id}>
            <a
              className="group flex h-full flex-col"
              href={`https://www.facebook.com/media/set/?set=a.${album.id}&type=3`}
              rel="noreferrer"
              target="_blank"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-mist">
                <Image
                  alt={`Fotografía del álbum ${album.title}`}
                  className="object-cover transition-transform duration-700 motion-safe:group-hover:scale-[1.04]"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 36vw"
                  src={`/images/facebook-albums/album-${album.id}.jpg`}
                />
              </div>
              <div className="flex flex-1 flex-col border-b border-line pb-5 pt-5 sm:pb-6 sm:pt-6">
                <span className="mb-3 text-[10px] font-medium uppercase tracking-[0.16em] text-muted">
                  <span aria-hidden="true" className="mr-3 text-clay-text">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {album.detail} · Fotografía
                </span>
                <span className="flex items-start justify-between gap-3">
                  <span className="font-display text-xl leading-snug group-hover:underline decoration-clay underline-offset-4 sm:text-2xl">
                    {album.title}
                  </span>
                  <ArrowUpRight
                    aria-hidden="true"
                    className="mt-1 shrink-0 text-forest-link"
                    size={18}
                  />
                </span>
                <span className="mt-3 block text-xs leading-6 text-muted">
                  Álbum público de Facebook
                </span>
                <span className="mt-auto inline-flex min-h-11 items-center pt-4 text-xs font-semibold text-ink">
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
