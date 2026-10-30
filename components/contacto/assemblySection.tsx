import { ArrowUpRight, CalendarDays, MapPin } from "lucide-react";
import { GOOGLE_MAPS_EMBED_URL } from "@/models/contacto/contact";

export function AssemblySection() {
  return (
    <section className="py-16 md:py-24" id="ubicacion">
      <div className="site-container">
        <div className="mb-10 grid gap-5 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <p className="eyebrow">03 / Vida institucional</p>
          <div>
            <h2 className="max-w-2xl font-display text-3xl font-normal leading-tight sm:text-4xl">
              También nos encontramos en comunidad.
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-muted sm:text-base">
              Nuestra Hermandad mantiene un espacio de encuentro, diálogo y
              participación para continuar caminando juntos en la fe y el
              servicio a San Martín de Porres.
            </p>
          </div>
        </div>
        <div className="grid border border-line lg:grid-cols-[0.85fr_1.15fr]">
          <div className="flex flex-col bg-mist p-7 sm:p-10 lg:p-12">
            <CalendarDays
              aria-hidden="true"
              className="text-clay"
              size={30}
              strokeWidth={1.5}
            />
            <p className="mt-7 text-xs uppercase tracking-[0.12em] text-muted">
              Asamblea general ordinaria
            </p>
            <h3 className="mt-3 max-w-sm font-display text-3xl font-normal leading-tight sm:text-4xl">
              Primer domingo de cada mes
            </h3>
            <p className="mt-4 text-lg font-medium">11:00 a. m.</p>
            <div className="mt-8 border-t border-line pt-7">
              <p className="flex items-center gap-2 text-xs uppercase tracking-[0.12em] text-muted">
                <MapPin aria-hidden="true" size={15} />
                Lugar de reunión
              </p>
              <h3 className="mt-3 font-display text-xl font-normal sm:text-2xl">
                Parroquia La Santa Cruz
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted">
                Santa María, Huaura, Lima, Perú
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Parroquia+La+Santa+Cruz+-+Santa+Mar%C3%ADa"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex min-h-11 items-center gap-5 border-b border-clay text-sm font-semibold transition-colors hover:text-clay-text"
              >
                Cómo llegar <ArrowUpRight aria-hidden="true" size={17} />
              </a>
            </div>
          </div>
          <div className="flex flex-col bg-white/40">
            <iframe
              title="Ubicación de la Parroquia La Santa Cruz - Santa María"
              src={GOOGLE_MAPS_EMBED_URL}
              className="min-h-[320px] w-full flex-1 sm:min-h-[400px] lg:min-h-[480px]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
            <div className="border-t border-line px-6 py-5 sm:px-8">
              <p className="text-sm font-medium">Parroquia La Santa Cruz</p>
              <p className="mt-1 text-xs leading-6 text-muted">
                Lugar de encuentro de nuestra Hermandad.
              </p>
            </div>
          </div>
        </div>
        <p className="mt-6 max-w-2xl text-sm leading-7 text-muted">
          Si deseas participar o conocer más sobre nuestras actividades, te
          invitamos a comunicarte previamente con nosotros.
        </p>
      </div>
    </section>
  );
}
