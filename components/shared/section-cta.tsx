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
      className={`mt-6 inline-flex min-h-11 items-center gap-3 border-b border-clay pb-1 text-sm font-semibold transition-colors hover:text-clay focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-clay ${inverse ? "text-paper" : "text-forest-link"}`}
      href={href}
    >
      {children}
      <ArrowRight aria-hidden="true" size={16} />
    </Link>
  );
}
