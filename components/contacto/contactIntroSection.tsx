import { ArrowDown, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";

export function ContactIntroSection() {
  return (
    <header className="page-masthead border-b border-line">
      <div className="site-container py-8 md:py-12">
        <Breadcrumbs items={[{ label: "Contacto" }]} />
        <div className="grid gap-10 pb-5 pt-12 md:grid-cols-[1.25fr_0.75fr] md:gap-20 md:pb-12 md:pt-20">
          <div>
            <p className="eyebrow">Contacto · Cruz Blanca, Perú</p>
            <h1 className="mt-6 max-w-3xl font-display text-4xl font-normal leading-[1.16] sm:text-5xl lg:text-6xl">
              Estamos para escucharte y servirte.
            </h1>
          </div>
          <div className="md:pt-9">
            <p className="text-base leading-8 text-muted">
              Si deseas comunicarte con nuestra Hermandad, solicitar tu ingreso o
              conocer más sobre nuestra vida institucional, ponemos a tu
              disposición nuestros canales de atención.
            </p>
            <nav
              aria-label="Opciones de contacto"
              className="mt-8 border-t border-line"
            >
              {[
                ["Contactar a la Hermandad", "#canales-de-contacto"],
                ["Solicitar mi ingreso", "#solicitud-de-ingreso"],
                ["Cómo llegar", "#ubicacion"],
              ].map(([label, href], index) => (
                <Link
                  className="group flex min-h-14 items-center justify-between gap-5 border-b border-line py-3 text-sm font-medium transition-colors hover:text-clay-text"
                  href={href}
                  key={href}
                >
                  <span className="flex items-center gap-4">
                    <span aria-hidden="true" className="text-xs text-muted">
                      0{index + 1}
                    </span>
                    {label}
                  </span>
                  {index === 0 ? (
                    <ArrowDown aria-hidden="true" size={17} />
                  ) : (
                    <ArrowUpRight aria-hidden="true" size={17} />
                  )}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
