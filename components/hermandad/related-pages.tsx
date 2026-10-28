import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { institutionalPageByPath } from "@/models/hermandad/institutional-pages";

export function RelatedPages({ paths }: { paths: readonly string[] }) {
  const pages = paths.flatMap((path) => {
    const page = institutionalPageByPath.get(path.split("#")[0]);
    return page ? [{ href: path, title: page.title }] : [];
  });
  if (pages.length === 0) return null;

  return (
    <aside className="min-w-0 lg:sticky lg:top-28 lg:self-start">
      <h2 className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
        En esta sección
      </h2>
      <nav aria-label="Secciones relacionadas" className="mt-4">
        <ul className="grid grid-cols-1 gap-x-6 sm:grid-cols-2 lg:grid-cols-1">
          {pages.map((page) => (
            <li className="border-b border-line" key={page.href}>
              <Link
                className="group flex min-h-12 items-center justify-between gap-3 py-3 text-sm text-forest-link underline-offset-4 hover:underline"
                href={page.href}
              >
                {page.title}
                <ArrowRight
                  aria-hidden="true"
                  className="size-4 shrink-0 transition-transform group-hover:translate-x-1"
                />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
