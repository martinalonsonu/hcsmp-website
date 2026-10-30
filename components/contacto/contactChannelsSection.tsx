import { ArrowUpRight, Mail, MessageCircleCheck } from "lucide-react";
import { EMAIL, WHATSAPP_URL } from "@/models/contacto/contact";

export function ContactChannelsSection() {
  return (
    <section className="py-16 md:py-24" id="canales-de-contacto">
      <div className="site-container">
        <div className="mb-10 grid gap-4 md:grid-cols-2 md:items-end">
          <p className="eyebrow">01 / Estamos a tu disposición</p>
          <h2 className="font-display text-3xl font-normal leading-tight md:text-4xl">
            Ponte en contacto con nosotros.
          </h2>
        </div>
        <div className="grid md:grid-cols-[1.1fr_0.9fr]">
          <article className="flex flex-col bg-forest-deep p-7 text-white sm:p-10 lg:p-12">
            <div className="flex items-center justify-between gap-4 border-b border-white/20 pb-6">
              <p className="text-xs uppercase tracking-[0.15em] text-white/75">
                Atención institucional
              </p>
              <MessageCircleCheck
                aria-hidden="true"
                className="text-clay"
                size={27}
                strokeWidth={1.5}
              />
            </div>
            <h3 className="mt-8 font-display text-3xl font-normal sm:text-4xl">
              Mesa de partes
            </h3>
            <p className="mt-5 max-w-lg text-sm leading-7 text-white/75 sm:text-base">
              Para presentar solicitudes, comunicaciones u otros documentos
              dirigidos a nuestra institución, puedes comunicarte con nuestra
              mesa de partes a través de WhatsApp.
            </p>
            <div className="mt-auto pt-8">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-between gap-5 border border-white/40 px-5 py-3 text-sm font-medium transition-colors hover:bg-paper hover:text-ink"
              >
                Contactar por WhatsApp{" "}
                <ArrowUpRight aria-hidden="true" size={18} />
              </a>
              <p className="mt-4 text-xs leading-6 text-white/65">
                WhatsApp de mesa de partes: 904 609 195
              </p>
            </div>
          </article>
          <article className="flex flex-col border border-line bg-white/40 p-7 sm:p-10 lg:p-12">
            <div className="flex items-center justify-between gap-4 border-b border-line pb-6">
              <p className="text-xs uppercase tracking-[0.15em] text-muted">
                Comunicación directa
              </p>
              <Mail
                aria-hidden="true"
                className="text-clay"
                size={27}
                strokeWidth={1.5}
              />
            </div>
            <h3 className="mt-8 font-display text-3xl font-normal sm:text-4xl">
              Escríbenos
            </h3>
            <p className="mt-5 text-sm leading-7 text-muted sm:text-base">
              Para consultas, coordinaciones o comunicaciones relacionadas con
              nuestras actividades institucionales y devocionales, puedes
              escribirnos a nuestro correo electrónico.
            </p>
            <a
              href={`mailto:${EMAIL}`}
              className="mt-6 w-fit max-w-full break-all text-sm font-medium underline decoration-clay underline-offset-4"
            >
              {EMAIL}
            </a>
            <div className="mt-auto pt-8">
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex min-h-12 items-center gap-5 border-b border-ink text-sm font-medium transition-colors hover:text-clay-text"
              >
                Enviar un correo <ArrowUpRight aria-hidden="true" size={18} />
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
