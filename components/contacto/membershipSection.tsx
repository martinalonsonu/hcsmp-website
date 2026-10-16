import { ArrowDownToLine, ArrowUpRight, FileText, MessageCircleCheck, Users } from "lucide-react";
import { DOCUMENTO_INGRESO_MAYOR, DOCUMENTO_INGRESO_MENOR, WHATSAPP_URL } from "@/models/contacto/contact";
export function MembershipSection() {
  return (
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
  );
}
