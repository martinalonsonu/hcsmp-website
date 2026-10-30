import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function ContactClosingSection() {
  return (
    <section className="bg-forest-deep py-16 text-white md:py-24">
      <div className="site-container grid gap-8 md:grid-cols-[1fr_0.65fr] md:items-end md:gap-20">
        <div>
          <p className="mb-6 text-xs uppercase tracking-[0.2em] text-white/65">
            Fe · Fraternidad · Servicio
          </p>
          <p className="max-w-3xl font-display text-3xl font-normal leading-tight sm:text-4xl lg:text-5xl">
            ¡Sé parte de nuestra Hermandad!
          </p>
        </div>
        <div>
          <p className="text-sm leading-7 text-white/75 sm:text-base">
            Cada nuevo hermano representa una oportunidad para continuar
            creciendo en la fe, la fraternidad y el servicio a ejemplo de San
            Martín de Porres.
          </p>
          <Link
            href="#solicitud-de-ingreso"
            className="mt-6 inline-flex min-h-12 items-center gap-8 border-b border-clay text-sm font-medium transition-colors hover:text-white/70"
          >
            Solicita tu ingreso <ArrowUpRight aria-hidden="true" size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
