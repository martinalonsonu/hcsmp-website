import clsx from "clsx";
import Link from "next/link";

export type BreadcrumbItem = { label: string; href?: string };

export function Breadcrumbs({
  items,
  inverse = false,
}: {
  items: readonly BreadcrumbItem[];
  inverse?: boolean;
}) {
  return (
    <nav
      aria-label="Ruta de navegación"
      className={clsx(
        "text-xs leading-6",
        inverse ? "text-white/80" : "text-muted",
      )}
    >
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        <li>
          <Link
            className="inline-flex min-h-11 items-center underline-offset-4 hover:underline"
            href="/"
          >
            Inicio
          </Link>
        </li>
        {items.map((item, index) => (
          <li
            className="flex min-w-0 items-center gap-2"
            key={`${item.href ?? item.label}-${index}`}
          >
            <span aria-hidden="true" className="opacity-60">
              /
            </span>
            {item.href && index < items.length - 1 ? (
              <Link
                className="inline-flex min-h-11 items-center underline-offset-4 hover:underline"
                href={item.href}
              >
                {item.label}
              </Link>
            ) : (
              <span
                aria-current="page"
                className={clsx(inverse ? "text-white" : "text-ink")}
              >
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
