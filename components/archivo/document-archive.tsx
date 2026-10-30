import { documents } from "@/models/archivo/archive-content";
import { ArrowUpRight, FileText } from "lucide-react";

export function DocumentArchive() {
  return (
    <ul className="divide-y divide-line border-y border-line">
      {documents.map((document, index) => (
        <li key={document.href}>
          <a
            className="group grid gap-6 py-8 transition-colors hover:bg-mist/40 sm:grid-cols-[5rem_minmax(0,1fr)_auto] sm:items-center sm:gap-8 sm:px-5 sm:py-10"
            href={document.href}
            rel="noreferrer"
            target="_blank"
          >
            <span
              aria-hidden="true"
              className="flex size-20 items-center justify-center border border-line bg-mist/50 text-clay-text"
            >
              <FileText strokeWidth={1} size={34} />
            </span>
            <span>
              <span className="mb-3 block text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
                <span aria-hidden="true">0{index + 1} · </span>Documento PDF
              </span>
              <span className="block font-display text-xl leading-snug group-hover:underline decoration-clay underline-offset-4 sm:text-2xl">
                {document.title}
              </span>
              <span className="mt-3 block text-sm leading-7 text-muted">
                {document.detail}
              </span>
            </span>
            <span className="inline-flex min-h-11 items-center gap-4 text-xs font-semibold text-ink">
              Abrir PDF{" "}
              <ArrowUpRight
                aria-hidden="true"
                className="transition-transform motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:translate-x-0.5"
                size={20}
              />
              <span className="sr-only">(abre en otra pestaña)</span>
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
