import { ArrowUpRight, Mail, MessageCircleCheck } from "lucide-react";
import { EMAIL, WHATSAPP_URL } from "@/models/contacto/contact";
export function ContactChannelsSection() {
  return (
    <section className="py-14 md:py-24" id="canales-de-contacto">
      <div className="site-container ">
        <div className="mb-8 max-w-2xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-clay-text">
            Estamos a tu disposición
          </p>

          <h2 className="mt-3 font-display text-3xl font-normal sm:text-4xl">
            Ponte en contacto con nosotros.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {/* Mesa de partes */}
          <article className="flex flex-col border border-line p-6 sm:p-8 md:p-10">
            <div className="flex size-12 items-center justify-center bg-mist text-clay-text">
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
                className="inline-flex min-h-12 items-center justify-center gap-2 bg-forest px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-forest-deep"
              >
                <MessageCircleCheck size={18} />
                Contactar por WhatsApp
                <ArrowUpRight size={16} />
              </a>

              <p className="mt-3 text-sm leading-6 text-muted">
                WhatsApp de mesa de partes: 904 609 195
              </p>
            </div>
          </article>

          {/* Correo institucional */}
          <article className="flex flex-col border border-line p-6 sm:p-8 md:p-10">
            <div className="flex size-12 items-center justify-center bg-mist text-clay-text">
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
              className="mt-6 inline-flex w-fit max-w-full items-center gap-2 break-all text-sm font-bold text-forest-link transition-colors hover:text-clay-text sm:text-base"
            >
              {EMAIL}
              <ArrowUpRight size={16} className="shrink-0" />
            </a>

            <div className="mt-auto pt-8">
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex min-h-12 items-center justify-center gap-2 border border-line px-5 py-3 text-sm font-bold text-ink transition-colors hover:border-clay hover:text-clay-text"
              >
                <Mail size={17} />
                Enviar un correo
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
