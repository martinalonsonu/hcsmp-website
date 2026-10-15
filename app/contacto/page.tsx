import Link from "next/link";
import {
  ArrowUpRight,
  CalendarDays,
  FileText,
  Mail,
  MapPin,
  MessageCircleCheck,
} from "lucide-react";

const WHATSAPP_URL = "https://wa.me/51904609195";
const EMAIL = "hermandadcargadoressmp@gmail.com";

const DOCUMENTO_REFERENCIA_URL = "#";

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-line py-16 md:py-24">
        <div className="mx-auto w-[calc(100%-2rem)] max-w-7xl sm:w-[calc(100%-2.5rem)] md:w-[calc(100%-4rem)]">
          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-clay">
            Contacto
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-4xl font-normal leading-[1.12] sm:text-5xl md:mt-5 md:text-6xl">
            Estamos para escucharte y servirte.
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-muted sm:text-base md:mt-6 md:leading-8">
            Si deseas comunicarte con nuestra Hermandad, presentar una solicitud
            o conocer más sobre nuestra vida institucional, ponemos a tu
            disposición nuestros canales de atención.
          </p>
        </div>
      </section>
      <section className="py-14 md:py-24">
        <div className="mx-auto w-[calc(100%-2rem)] max-w-7xl sm:w-[calc(100%-2.5rem)] md:w-[calc(100%-4rem)]">
          <div className="grid gap-6 md:grid-cols-2 md:gap-8">
            <article className="flex flex-col border border-line p-6 sm:p-8 md:p-10">
              <div className="flex size-12 items-center justify-center bg-mist text-clay">
                <FileText size={23} strokeWidth={1.7} />
              </div>
              <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.14em] text-muted">
                Atención institucional
              </p>
              <h2 className="mt-3 font-display text-2xl font-normal sm:text-3xl">
                Mesa de partes
              </h2>
              <p className="mt-4 text-sm leading-7 text-ink/75 sm:text-base">
                Para presentar solicitudes, comunicaciones u otros documentos
                dirigidos a nuestra institución, puedes comunicarte con nuestra
                mesa de partes a través de WhatsApp.
              </p>
              <div className="mt-6 border-l-2 border-clay bg-mist p-4 sm:p-5">
                <p className="text-sm font-bold text-ink">
                  ¿Deseas presentar un documento?
                </p>
                <p className="mt-2 text-sm leading-6 text-ink/75">
                  Tu documento debe estar dirigido al presidente de la Hermandad
                  de Cargadores de San Martín de Porres de Cruz Blanca. Puedes
                  utilizar el siguiente modelo referencial como guía para su
                  elaboración.
                </p>
                {DOCUMENTO_REFERENCIA_URL !== "#" ? (
                  <a
                    href={DOCUMENTO_REFERENCIA_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-forest-link transition-colors hover:text-clay"
                  >
                    Ver documento de referencia
                    <ArrowUpRight size={16} />
                  </a>
                ) : (
                  <p className="mt-4 text-xs leading-5 text-muted">
                    Próximamente: documento de referencia para la presentación
                    de solicitudes.
                  </p>
                )}
              </div>
              <div className="mt-7">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 bg-forest px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-clay"
                >
                  <MessageCircleCheck size={18} />
                  Contactar por WhatsApp
                  <ArrowUpRight size={16} />
                </a>
                <p className="mt-3 text-xs leading-5 text-muted">
                  WhatsApp de mesa de partes: 904 609 195
                </p>
              </div>
            </article>
            <article className="flex flex-col border border-line p-6 sm:p-8 md:p-10">
              <div className="flex size-12 items-center justify-center bg-mist text-clay">
                <Mail size={23} strokeWidth={1.7} />
              </div>
              <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.14em] text-muted">
                Comunicación directa
              </p>
              <h2 className="mt-3 font-display text-2xl font-normal sm:text-3xl">
                Escríbenos
              </h2>
              <p className="mt-4 text-sm leading-7 text-ink/75 sm:text-base">
                Para consultas, coordinaciones o comunicaciones relacionadas con
                nuestras actividades institucionales y devocionales, puedes
                escribirnos a nuestro correo electrónico.
              </p>
              <a
                href={`mailto:${EMAIL}`}
                className="mt-6 inline-flex w-fit max-w-full items-center gap-2 break-all text-sm font-bold text-forest-link transition-colors hover:text-clay sm:text-base"
              >
                {EMAIL}
                <ArrowUpRight size={16} className="shrink-0" />
              </a>
              <div className="mt-auto pt-8">
                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex min-h-12 items-center justify-center gap-2 border border-line px-5 py-3 text-sm font-bold text-ink transition-colors hover:border-clay hover:text-clay"
                >
                  <Mail size={17} />
                  Enviar un correo
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>
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
            <div className="overflow-hidden border border-line bg-white">
              <iframe
                title="Ubicación de la Parroquia La Santa Cruz - Santa María"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.233680438742!2d-77.59715612466736!3d-11.095954024927753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9106df8fdf6ec1e1%3A0xe15f25068f2c5c06!2sParroquia%20La%20Santa%20Cruz%20-%20Santa%20Mar%C3%ADa!5e0!3m2!1ses-419!2spe!4v1792038223295!5m2!1ses-419!2spe"
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
      <section className="py-14 md:py-20">
        <div className="mx-auto w-[calc(100%-2rem)] max-w-7xl sm:w-[calc(100%-2.5rem)] md:w-[calc(100%-4rem)]">
          <p className="max-w-3xl font-display text-2xl font-normal leading-relaxed sm:text-3xl md:text-4xl">
            Seguimos caminando juntos, con fe, fraternidad y espíritu de
            servicio.
          </p>
          <Link
            href="/comunidad"
            className="mt-6 inline-flex min-h-11 items-center gap-3 text-sm font-bold text-forest-link transition-colors hover:text-clay"
          >
            Conoce nuestra comunidad
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
