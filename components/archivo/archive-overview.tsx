import { ArrowRight, FileText, Images, Video } from "lucide-react";
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
    <div className="grid gap-4 lg:grid-cols-3">
      {collections.map(({ href, title, detail, count, icon: Icon }) => (
        <Link
          className="group grid grid-cols-[auto_minmax(0,1fr)_auto] items-start gap-4 border border-line bg-white/35 p-5 transition-colors hover:border-clay hover:bg-white/60 sm:gap-6 sm:p-7"
          href={href}
          key={href}
        >
          <Icon aria-hidden="true" className="mt-1 text-clay" size={24} />
          <span>
            <span className="block text-xs font-medium text-muted">
              {count}
            </span>
            <span className="mt-2 block font-display text-2xl group-hover:underline decoration-clay underline-offset-4">
              {title}
            </span>
            <span className="mt-3 block text-sm leading-7 text-muted">
              {detail}
            </span>
            <span className="mt-4 inline-flex min-h-11 items-center text-sm font-semibold">
              Explorar colección
            </span>
          </span>
          <ArrowRight
            aria-hidden="true"
            className="mt-1 size-5 transition-transform group-hover:translate-x-1"
          />
        </Link>
      ))}
    </div>
  );
}
