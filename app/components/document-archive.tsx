import { ArrowUpRight, FileText } from "lucide-react";

const documents = [
  {
    href: "/docs/ESTATUTOS_DIOCESIS_HUACHO.pdf",
    title: "Estatutos de la Diócesis de Huacho",
    detail: "Documento institucional en formato PDF.",
  },
  {
    href: "/docs/SOMOS_PARTE_DE_TU_HISTORIA_DE_AMOR.pdf",
    title: "¡Somos parte de tu historia de amor!",
    detail: "Memoria institucional de la Hermandad en formato PDF.",
  },
];

export function DocumentArchive() {
  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {documents.map((document) => (
        <li className="border border-line bg-white/35" key={document.href}>
          <a
            className="group flex min-h-40 h-full flex-col justify-between gap-8 p-5 transition-colors hover:border-clay hover:bg-white/60 sm:p-6"
            href={document.href}
            rel="noreferrer"
            target="_blank"
          >
            <FileText
              aria-hidden="true"
              className="text-clay"
              size={24}
            />
            <span>
              <span className="flex items-start justify-between gap-3">
                <span className="font-display text-xl leading-snug group-hover:text-clay">
                  {document.title}
                </span>
                <ArrowUpRight
                  aria-hidden="true"
                  className="mt-1 shrink-0 text-forest-link transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  size={18}
                />
              </span>
              <span className="mt-2 block text-xs leading-5 text-muted">
                {document.detail}
              </span>
              <span className="mt-4 block text-xs font-semibold text-forest-link">
                Abrir documento
              </span>
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
