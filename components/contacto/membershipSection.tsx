import { ArrowDownToLine, ArrowUpRight, FileText } from "lucide-react";
import {
  DOCUMENTO_INGRESO_MAYOR,
  DOCUMENTO_INGRESO_MENOR,
  WHATSAPP_URL,
} from "@/models/contacto/contact";

const applicationFormats = [
  {
    title: "Mayor de edad",
    description:
      "Para personas mayores de edad que desean solicitar su incorporación a nuestra Hermandad.",
    href: DOCUMENTO_INGRESO_MAYOR,
  },
  {
    title: "Menor de edad",
    description:
      "Para menores de edad, la solicitud deberá ser presentada por su padre, madre, tutor o adulto responsable, según corresponda.",
    href: DOCUMENTO_INGRESO_MENOR,
  },
];

export function MembershipSection() {
  return (
    <section
      id="solicitud-de-ingreso"
      className="border-y border-line bg-white/35 py-16 md:py-24"
    >
      <div className="site-container grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div>
          <p className="eyebrow">02 / Forma parte de nuestra familia</p>
          <h2 className="mt-5 max-w-lg font-display text-3xl font-normal leading-tight sm:text-4xl lg:text-5xl">
            ¿Quieres ingresar a nuestra Hermandad?
          </h2>
          <p className="mt-6 text-sm leading-7 text-muted sm:text-base sm:leading-8">
            Si deseas formar parte de la Hermandad de Cargadores de San Martín
            de Porres de Cruz Blanca, el primer paso es presentar un documento
            formal con tu solicitud de ingreso, dirigido al presidente de
            nuestra institución.
          </p>
          <p className="mt-4 text-sm leading-7 text-muted sm:text-base sm:leading-8">
            Ponemos a tu disposición dos formatos de referencia. Descarga el que
            corresponda, completa la información solicitada y presenta tu
            documento a través de nuestra mesa de partes.
          </p>
        </div>
        <div>
          <div className="border-t border-ink">
            {applicationFormats.map((format, index) => (
              <article
                className="grid grid-cols-[2rem_1fr] gap-4 border-b border-line py-7 sm:grid-cols-[3rem_1fr] sm:gap-6 sm:py-9"
                key={format.href}
              >
                <span
                  aria-hidden="true"
                  className="pt-1 font-display text-xl text-clay-text sm:text-3xl"
                >
                  0{index + 1}
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.12em] text-muted">
                    Formato de solicitud
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-normal sm:text-3xl">
                    {format.title}
                  </h3>
                  <p className="mt-3 max-w-lg text-sm leading-7 text-muted">
                    {format.description}
                  </p>
                  <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2">
                    <a
                      href={format.href}
                      download
                      className="inline-flex min-h-11 items-center gap-3 border-b border-clay text-sm font-semibold transition-colors hover:text-clay-text"
                    >
                      <ArrowDownToLine aria-hidden="true" size={17} />
                      Descargar formato
                    </a>
                    <p className="flex items-center gap-2 text-xs text-muted">
                      <FileText aria-hidden="true" size={14} />
                      Documento Word (.docx)
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8 border-l-2 border-clay pl-5 sm:pl-7">
            <p className="text-sm font-semibold">
              ¿Ya tienes tu solicitud preparada?
            </p>
            <p className="mt-2 max-w-lg text-sm leading-7 text-muted">
              Comunícate con nuestra mesa de partes para coordinar la
              presentación de tu documento dirigido al presidente de la
              Hermandad.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex min-h-11 items-center gap-5 text-sm font-semibold transition-colors hover:text-clay-text"
            >
              Mesa de partes <ArrowUpRight aria-hidden="true" size={17} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
