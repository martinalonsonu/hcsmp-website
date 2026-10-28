import Link from "next/link";
export function ContactClosingSection() {
  return (
    <section className="py-14 md:py-20">
      <div className="site-container ">
        <p className="max-w-3xl font-display text-2xl font-normal leading-relaxed sm:text-3xl md:text-4xl">
          ¡Sé parte de nuestra Hermandad!
        </p>

        <p className="mt-4 max-w-2xl text-sm leading-7 text-muted sm:text-base">
          Cada nuevo hermano representa una oportunidad para continuar creciendo
          en la fe, la fraternidad y el servicio a ejemplo de San Martín de
          Porres.
        </p>

        <Link
          href="#solicitud-de-ingreso"
          className="mt-6 inline-flex min-h-11 items-center gap-3 text-sm font-bold text-forest-link transition-colors hover:text-clay-text"
        >
          Solicita tu ingreso
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
