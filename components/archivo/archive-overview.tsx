import { ArrowUpRight, FileText, Images, Video } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { albums, documents, videos } from "@/models/archivo/archive-content";

const collections = [
  {
    href: "/archivo/fotografias",
    title: "Fotografías",
    detail: "Procesiones, celebraciones y vida de Hermandad.",
    count: `${albums.length} álbumes`,
    icon: Images,
  },
  {
    href: "/archivo/documentos",
    title: "Documentos",
    detail: "Memoria institucional y documentos para consulta.",
    count: `${documents.length} documentos`,
    icon: FileText,
  },
  {
    href: "/archivo/videos",
    title: "Videos y testimonios",
    detail: "Registros audiovisuales de nuestra historia compartida.",
    count: `${videos.length} videos`,
    icon: Video,
  },
] as const;

export function ArchiveOverview() {
  return (
    <div className="grid gap-6 lg:grid-cols-[1.15fr_1fr]">
      {collections.map(({ href, title, detail, count, icon: Icon }, index) => (
        <Link
          className={`group relative flex min-w-0 flex-col overflow-hidden ${index === 0 ? "bg-ink text-paper lg:row-span-2" : "border-t border-line py-7 transition-colors hover:border-clay sm:py-9"}`}
          href={href}
          key={href}
        >
          {index === 0 && (
            <div className="relative aspect-[16/10] overflow-hidden bg-mist">
              <Image
                alt=""
                className="object-cover transition-transform duration-700 motion-safe:group-hover:scale-[1.04]"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                src={`/images/facebook-albums/album-${albums[0].id}.jpg`}
              />
            </div>
          )}
          <span
            className={`flex h-full flex-col ${index === 0 ? "p-6 sm:p-9" : "px-1"}`}
          >
            <span className="flex items-center justify-between gap-4">
              <span
                className={`text-[11px] font-semibold uppercase tracking-[0.18em] ${index === 0 ? "text-paper/70" : "text-muted"}`}
              >
                <span
                  aria-hidden="true"
                  className={`mr-3 ${index === 0 ? "text-clay" : "text-clay-text"}`}
                >
                  0{index + 1}
                </span>
                {count}
              </span>
              <Icon
                aria-hidden="true"
                className={index === 0 ? "text-clay" : "text-clay-text"}
                size={22}
              />
            </span>
            <span className="mt-6 block font-display text-3xl leading-tight sm:text-4xl">
              {title}
            </span>
            <span
              className={`mt-4 max-w-sm text-sm leading-7 ${index === 0 ? "text-paper/75" : "text-muted"}`}
            >
              {detail}
            </span>
            <span
              className={`mt-7 flex min-h-11 items-center justify-between gap-4 border-t pt-4 text-xs font-semibold ${index === 0 ? "border-paper/20" : "border-line"}`}
            >
              Explorar colección
              <ArrowUpRight
                aria-hidden="true"
                className="size-5 transition-transform motion-safe:group-hover:-translate-y-1 motion-safe:group-hover:translate-x-1"
              />
            </span>
          </span>
        </Link>
      ))}
    </div>
  );
}
