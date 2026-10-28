import clsx from "clsx";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

type SectionCtaProps = {
  href: string;
  children: ReactNode;
  inverse?: boolean;
};

export function SectionCta({
  href,
  children,
  inverse = false,
}: SectionCtaProps) {
  return (
    <Link
      className={clsx(
        "mt-6 inline-flex min-h-11 items-center gap-3 border-b border-clay pb-1 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-4",
        inverse
          ? "text-paper hover:text-[#d9c28f]"
          : "text-forest-link hover:text-ink hover:underline",
      )}
      href={href}
    >
      {children}
      <ArrowRight aria-hidden="true" size={16} />
    </Link>
  );
}
