import Link from "next/link";

export type SectionIndexItem = { id: string; label: string };

export function SectionIndex({
  items,
  label = "En esta página",
}: {
  items: readonly SectionIndexItem[];
  label?: string;
}) {
  if (items.length === 0) return null;

  return (
    <nav
      aria-label={label}
      className="sticky top-20 z-20 border-b border-line bg-paper/95 backdrop-blur-md md:top-24"
    >
      <div className="site-container">
        <ul className="section-index flex gap-6 overflow-x-auto py-1 sm:gap-8">
          {items.map((item) => (
            <li className="shrink-0" key={item.id}>
              <Link
                className="inline-flex min-h-12 items-center border-b-2 border-transparent py-2 text-sm font-medium text-muted transition-colors hover:border-clay hover:text-ink focus-visible:-outline-offset-2"
                href={`#${item.id}`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
