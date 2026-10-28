import Link from "next/link";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";

export function ContactIntroSection() {
  return (
    <section className="border-b border-line py-16 md:py-24">
      <div className="site-container ">
        <Breadcrumbs items={[{ label: "Contacto" }]} />
        <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.16em] text-clay-text">
          Contacto
        </p>
        <h1 className="mt-4 max-w-4xl font-display text-4xl font-normal leading-[1.12] sm:text-5xl md:mt-5 md:text-6xl">
          Estamos para escucharte y servirte.
        </h1>
        <p className="mt-5 max-w-2xl text-sm leading-7 text-muted sm:text-base md:mt-6 md:leading-8">
          Si deseas comunicarte con nuestra Hermandad, solicitar tu ingreso o
          conocer más sobre nuestra vida institucional, ponemos a tu disposición
          nuestros canales de atención.
        </p>
        <nav
          aria-label="Opciones de contacto"
          className="mt-7 flex flex-wrap gap-3"
        >
          <Link
            className="inline-flex min-h-12 items-center justify-center bg-forest px-5 text-sm font-semibold text-white hover:bg-forest-deep"
            href="#canales-de-contacto"
          >
            Contactar a la Hermandad
          </Link>
          <Link
            className="inline-flex min-h-12 items-center justify-center border border-line px-5 text-sm font-semibold hover:border-ink"
            href="#solicitud-de-ingreso"
          >
            Solicitar mi ingreso
          </Link>
          <Link
            className="inline-flex min-h-12 items-center justify-center px-3 text-sm font-semibold underline underline-offset-4"
            href="#ubicacion"
          >
            Cómo llegar
          </Link>
        </nav>
      </div>
    </section>
  );
}
