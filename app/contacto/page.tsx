import Link from "next/link";
import {
  ArrowDownToLine,
  ArrowUpRight,
  CalendarDays,
  FileText,
  Mail,
  MapPin,
  MessageCircleCheck,
  Users,
} from "lucide-react";

const WHATSAPP_URL = "https://wa.me/51904609195";
const EMAIL = "hermandadcargadoressmp@gmail.com";

const DOCUMENTO_INGRESO_MAYOR = "/docs/SOLICITUD_INGRESO_MAYOR.docx";

const DOCUMENTO_INGRESO_MENOR = "/docs/SOLICITUD_INGRESO_MENOR.docx";

const GOOGLE_MAPS_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.233680438742!2d-77.59715612466736!3d-11.095954024927753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9106df8fdf6ec1e1%3A0xe15f25068f2c5c06!2sParroquia%20La%20Santa%20Cruz%20-%20Santa%20Mar%C3%ADa!5e0!3m2!1ses-419!2spe!4v1792038223295!5m2!1ses-419!2spe";

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
            Si deseas comunicarte con nuestra Hermandad, solicitar tu ingreso o
            conocer más sobre nuestra vida institucional, ponemos a tu
            disposición nuestros canales de atención.
          </p>
        </div>
      </section>
      <section
        id="solicitud-de-ingreso"
        className="border-b border-line py-14 md:py-24"
      >
        <div className="mx-auto w-[calc(100%-2rem)] max-w-7xl sm:w-[calc(100%-2.5rem)] md:w-[calc(100%-4rem)]">
          <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-start md:gap-16">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-clay">
                Forma parte de nuestra familia
              </p>
              <h2 className="mt-4 font-display text-3xl font-normal leading-tight sm:text-4xl md:text-5xl">
                ¿Quieres ingresar a nuestra Hermandad?
              </h2>
              <p className="mt-5 text-sm leading-7 text-muted sm:text-base">
                Si deseas formar parte de la Hermandad de Cargadores de San
                Martín de Porres de Cruz Blanca, el primer paso es presentar un
                documento formal con tu solicitud de ingreso, dirigido al
                presidente de nuestra institución.
              </p>
              <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
                Ponemos a tu disposición dos formatos de referencia. Descarga el
                que corresponda, completa la información solicitada y presenta
                tu documento a través de nuestra mesa de partes.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {/* Formato para mayores de edad */}
              <article className="flex flex-col border border-line p-6 sm:p-7">
                <div className="flex size-12 items-center justify-center bg-mist text-clay">
                  <FileText size={23} strokeWidth={1.7} />
                </div>

                <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.12em] text-muted">
                  Formato de solicitud
                </p>

                <h3 className="mt-2 font-display text-2xl font-normal">
                  Mayor de edad
                </h3>

                <p className="mt-3 flex-1 text-sm leading-7 text-ink/75">
                  Para personas mayores de edad que desean solicitar su
                  incorporación a nuestra Hermandad.
                </p>

                <a
                  href={DOCUMENTO_INGRESO_MAYOR}
                  download
                  className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 bg-forest px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-clay"
                >
                  <ArrowDownToLine size={18} />
                  Descargar formato
                </a>

                <p className="mt-3 text-xs text-muted">
                  Documento Word (.docx)
                </p>
              </article>

              {/* Formato para menores de edad */}
              <article className="flex flex-col border border-line p-6 sm:p-7">
                <div className="flex size-12 items-center justify-center bg-mist text-clay">
                  <Users size={23} strokeWidth={1.7} />
                </div>

                <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.12em] text-muted">
                  Formato de solicitud
                </p>

                <h3 className="mt-2 font-display text-2xl font-normal">
                  Menor de edad
                </h3>

                <p className="mt-3 flex-1 text-sm leading-7 text-ink/75">
                  Para menores de edad, la solicitud deberá ser presentada por
                  su padre, madre, tutor o adulto responsable, según
                  corresponda.
                </p>

                <a
                  href={DOCUMENTO_INGRESO_MENOR}
                  download
                  className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 border border-line px-4 py-3 text-sm font-bold text-ink transition-colors hover:border-clay hover:text-clay"
                >
                  <ArrowDownToLine size={18} />
                  Descargar formato
                </a>

                <p className="mt-3 text-xs text-muted">
                  Documento Word (.docx)
                </p>
              </article>
            </div>
          </div>

          {/* Instrucciones para presentar la solicitud */}
          <div className="mt-8 flex flex-col gap-5 border-l-2 border-clay bg-mist p-5 sm:p-7 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-bold text-ink">
                ¿Ya tienes tu solicitud preparada?
              </p>

              <p className="mt-2 text-sm leading-7 text-ink/75">
                Comunícate con nuestra mesa de partes para coordinar la
                presentación de tu documento dirigido al presidente de la
                Hermandad.
              </p>
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 bg-forest px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-clay"
            >
              <MessageCircleCheck size={18} />
              Mesa de partes
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Canales de contacto */}
      <section className="py-14 md:py-24">
        <div className="mx-auto w-[calc(100%-2rem)] max-w-7xl sm:w-[calc(100%-2.5rem)] md:w-[calc(100%-4rem)]">
          <div className="mb-8 max-w-2xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-clay">
              Estamos a tu disposición
            </p>

            <h2 className="mt-3 font-display text-3xl font-normal sm:text-4xl">
              Ponte en contacto con nosotros.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 md:gap-8">
            {/* Mesa de partes */}
            <article className="flex flex-col border border-line p-6 sm:p-8 md:p-10">
              <div className="flex size-12 items-center justify-center bg-mist text-clay">
                <MessageCircleCheck size={23} strokeWidth={1.7} />
              </div>

              <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.14em] text-muted">
                Atención institucional
              </p>

              <h3 className="mt-3 font-display text-2xl font-normal sm:text-3xl">
                Mesa de partes
              </h3>

              <p className="mt-4 text-sm leading-7 text-ink/75 sm:text-base">
                Para presentar solicitudes, comunicaciones u otros documentos
                dirigidos a nuestra institución, puedes comunicarte con nuestra
                mesa de partes a través de WhatsApp.
              </p>

              <div className="mt-auto pt-7">
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

            {/* Correo institucional */}
            <article className="flex flex-col border border-line p-6 sm:p-8 md:p-10">
              <div className="flex size-12 items-center justify-center bg-mist text-clay">
                <Mail size={23} strokeWidth={1.7} />
              </div>

              <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.14em] text-muted">
                Comunicación directa
              </p>

              <h3 className="mt-3 font-display text-2xl font-normal sm:text-3xl">
                Escríbenos
              </h3>

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

      {/* Asambleas y ubicación */}
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

      {/* Cierre */}
      <section className="py-14 md:py-20">
        <div className="mx-auto w-[calc(100%-2rem)] max-w-7xl sm:w-[calc(100%-2.5rem)] md:w-[calc(100%-4rem)]">
          <p className="max-w-3xl font-display text-2xl font-normal leading-relaxed sm:text-3xl md:text-4xl">
            ¡Sé parte de nuestra Hermandad!
          </p>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-muted sm:text-base">
            Cada nuevo hermano representa una oportunidad para continuar
            creciendo en la fe, la fraternidad y el servicio a ejemplo de San
            Martín de Porres.
          </p>

          <Link
            href="#solicitud-de-ingreso"
            className="mt-6 inline-flex min-h-11 items-center gap-3 text-sm font-bold text-forest-link transition-colors hover:text-clay"
          >
            Solicita tu ingreso
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
