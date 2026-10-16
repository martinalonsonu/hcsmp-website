import { ArrowUpRight, CalendarDays, MapPin } from "lucide-react";
import { GOOGLE_MAPS_EMBED_URL } from "@/models/contacto/contact";
export function AssemblySection() {
  return (
    <section className="border-y border-line bg-mist py-14 md:py-20">
        <div className="mx-auto w-[calc(100%-2rem)] max-w-7xl sm:w-[calc(100%-2.5rem)] md:w-[calc(100%-4rem)]">
          <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-start md:gap-16">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-clay">
                Vida institucional
              </p>

              <h2 className="mt-4 font-display text-3xl font-normal leading-tight sm:text-4xl md:text-5xl">
                También nos encontramos en comunidad.
              </h2>

              <p className="mt-5 text-sm leading-7 text-muted sm:text-base">
                Nuestra Hermandad mantiene un espacio de encuentro, diálogo y
                participación para continuar caminando juntos en la fe y el
                servicio a San Martín de Porres.
              </p>

              <div className="mt-8 border border-line bg-white p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex size-11 shrink-0 items-center justify-center bg-mist text-clay">
                    <CalendarDays size={22} strokeWidth={1.7} />
                  </div>

                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-muted">
                      Asamblea general ordinaria
                    </p>

                    <h3 className="mt-2 font-display text-2xl font-normal sm:text-3xl">
                      Primer domingo de cada mes
                    </h3>

                    <p className="mt-2 text-sm font-bold text-forest sm:text-base">
                      11:00 a. m.
                    </p>
                  </div>
                </div>

                <div className="my-6 border-t border-line" />

                <div className="flex items-start gap-4">
                  <div className="flex size-11 shrink-0 items-center justify-center bg-mist text-clay">
                    <MapPin size={22} strokeWidth={1.7} />
                  </div>

                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-muted">
                      Lugar de reunión
                    </p>

                    <h3 className="mt-2 font-display text-xl font-normal sm:text-2xl">
                      Parroquia La Santa Cruz
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-ink/75">
                      Santa María, Huaura, Lima, Perú
                    </p>
                  </div>
                </div>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Parroquia+La+Santa+Cruz+-+Santa+Mar%C3%ADa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-forest-link transition-colors hover:text-clay"
                >
                  Cómo llegar
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>

            {/* Mapa de Google Maps */}
            <div className="overflow-hidden border border-line bg-white">
              <iframe
                title="Ubicación de la Parroquia La Santa Cruz - Santa María"
                src={GOOGLE_MAPS_EMBED_URL}
                className="h-[320px] w-full sm:h-[400px] md:h-[665px]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />

              <div className="border-t border-line px-5 py-4 sm:px-6">
                <p className="text-sm font-bold text-ink">
                  Parroquia La Santa Cruz
                </p>

                <p className="mt-1 text-xs leading-5 text-muted">
                  Lugar de encuentro de nuestra Hermandad.
                </p>
              </div>
            </div>
          </div>

          <p className="mt-8 max-w-2xl text-xs leading-5 text-muted">
            Si deseas participar o conocer más sobre nuestras actividades, te
            invitamos a comunicarte previamente con nosotros.
          </p>
        </div>
      </section>
  );
}
