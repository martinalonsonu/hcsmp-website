import { albums } from "@/models/archivo/archive-content";
import Image from "next/image";
import { ArrowUpRight, Images } from "lucide-react";



export function PhotoAlbumArchive() {
  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {albums.map((album) => (
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
                sizes="(max-width: 640px) 100vw, 50vw"
                src={`/images/facebook-albums/album-${album.id}.jpg`}
              />
            </div>
            <div className="flex min-h-36 flex-col p-5 sm:p-6">
              <Images
                aria-hidden="true"
                className="mb-4 text-clay"
                size={20}
              />
              <span className="flex items-start justify-between gap-3">
                <span className="font-display text-xl leading-snug group-hover:text-clay">
                  {album.title}
                </span>
                <ArrowUpRight
                  aria-hidden="true"
                  className="mt-1 shrink-0 text-forest-link"
                  size={18}
                />
              </span>
              <span className="mt-2 block text-xs leading-5 text-muted">
                {album.detail} · Álbum público de Facebook
              </span>
              <span className="mt-auto pt-4 text-xs font-semibold text-forest-link">
                Ver álbum
              </span>
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
}
