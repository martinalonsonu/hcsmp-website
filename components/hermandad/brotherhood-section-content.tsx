import { sectionLinks } from "@/models/hermandad/content";
import { ArrowUpRight, UsersRound } from "lucide-react";
import Link from "next/link";
import {
  foundingFigures,
  presidencyReferences,
} from "@/models/hermandad/brotherhood";

export function BrotherhoodOverview() {
  return (
    <div className="flex flex-col gap-14 sm:gap-20">
      <section className="relative overflow-hidden bg-ink p-7 text-paper sm:p-10">
        <span
          aria-hidden="true"
          className="absolute -right-1 -top-4 font-display text-[12rem] leading-none text-paper/5"
        >
          ✝
        </span>
        <p className="relative text-[10px] font-semibold uppercase tracking-[0.2em] text-paper/65">
          Nuestra identidad
        </p>
        <p className="relative mt-7 max-w-3xl font-display text-xl leading-relaxed tracking-[-0.02em] sm:text-2xl">
          Somos una institución de fieles laicos, que hace vida eclesial en la
          Parroquia La Santa Cruz, del barrio de Cruz Blanca, unida por la
          devoción a San Martín de Porres y una vida de fe, fraternidad y
          caridad.
        </p>
        <p className="relative mt-8 border-t border-paper/20 pt-5 text-[10px] uppercase leading-6 tracking-[0.15em] text-paper/70">
          Diócesis de Huacho · Parroquia La Santa Cruz
        </p>
      </section>

      <section>
        <div className="grid gap-8 sm:grid-cols-3 sm:gap-6">
          {[
            [
              "Fe",
              "Bajo la devoción y ejemplo de San Martin de Porres, fijamos nuestra mirada al Creador.",
            ],
            [
              "Fraternidad",
              "La vida en comunidad es un pilar, a ejemplo de la convivencia de las comunidades dominicas, de quienes adoptamos el carisma institucional.",
            ],
            [
              "Caridad",
              "El ejemplo de San Martín inspira cercanía y apostolado. Ver en el hermano a Cristo mismo.",
            ],
          ].map(([title, detail], index) => (
            <article className="border-t border-line pt-5" key={title}>
              <span
                aria-hidden="true"
                className="text-xs font-medium tracking-widest text-clay-text"
              >
                0{index + 1}
              </span>
              <h2 className="mt-6 font-display text-2xl tracking-[-0.02em]">
                {title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-muted">{detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-line py-8 sm:py-10">
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-clay-text">
          Una historia con dos referencias fundacionales
        </p>
        <div className="mt-8 grid gap-8 sm:grid-cols-2 sm:gap-10">
          <div>
            <p className="font-display text-3xl tracking-[-0.03em]">
              5 nov 1974
            </p>
            <p className="mt-4 text-sm leading-7 text-muted">
              Fecha que aparece en el sello institucional más antiguo que se
              conserva en una carta institucional.
            </p>
          </div>
          <div>
            <p className="font-display text-3xl tracking-[-0.03em]">
              3 nov 1975
            </p>
            <p className="mt-4 text-sm leading-7 text-muted">
              Fecha fijada posteriormente como referencia institucional tras
              perderse los libros fundacionales y al ser requerido para el
              reconocimiento eclesial.
            </p>
          </div>
        </div>
        <p className="mt-8 bg-mist/60 p-5 text-xs leading-7 text-muted">
          Conservamos ambas fechas con su contexto y como parte de la riqueza de
          nuestra historia.
        </p>
      </section>

      <section>
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-clay-text">
              Recorrido institucional
            </p>
            <h2 className="mt-3 font-display text-3xl tracking-[-0.03em] sm:text-4xl">
              Explora la sección
            </h2>
          </div>
          <UsersRound
            aria-hidden="true"
            className="mb-1 text-clay-text"
            size={20}
          />
        </div>
        <div className="divide-y divide-line border-y border-line">
          {sectionLinks.map((link) => (
            <Link
              className="group grid min-h-24 grid-cols-[2rem_1fr_auto] items-center gap-3 py-6 transition-colors hover:bg-mist/50 sm:grid-cols-[3rem_1fr_auto] sm:gap-5 sm:px-3"
              href={link.href}
              key={link.href}
            >
              <span className="font-display text-lg text-clay-text">
                {link.number}
              </span>
              <span>
                <span className="block font-display text-lg leading-snug tracking-[-0.02em] group-hover:text-clay-text sm:text-2xl">
                  {link.title}
                </span>
                <span className="mt-1 block text-sm leading-6 text-muted">
                  {link.detail}
                </span>
              </span>
              <ArrowUpRight
                aria-hidden="true"
                className="text-clay-text transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                size={18}
              />
            </Link>
          ))}
        </div>
      </section>

      <section className="border-l-2 border-clay py-3 pl-6 sm:pl-8">
        <p className="font-display text-2xl leading-relaxed tracking-[-0.025em] sm:text-3xl">
          “¡Somos parte de tu historia de amor!”
        </p>
      </section>
    </div>
  );
}

export function FoundersArchive() {
  return (
    <div className="flex flex-col gap-10 sm:gap-12">
      <section className="grid gap-x-10 border-t border-line sm:grid-cols-2">
        {foundingFigures.map((figure, index) => (
          <article
            className="grid grid-cols-[2.5rem_1fr] items-start gap-4 border-b border-line py-8 sm:py-10"
            key={figure.id}
          >
            <span
              aria-hidden="true"
              className="font-display text-2xl text-clay-text"
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <h2 className="font-display text-xl leading-snug tracking-[-0.025em] sm:text-2xl">
                {figure.name}
              </h2>
              <p className="mt-2 text-sm leading-7 text-muted sm:text-sm">
                {figure.note}
              </p>
            </div>
          </article>
        ))}
      </section>
      <p className="border-l-2 border-clay bg-mist/50 px-6 py-5 text-sm leading-7 text-muted">
        Debido a la pérdida de los documentos fundacionales y de los primeros
        años de nuestra historia, no tenemos un referencia completa de la nómina
        de hermanos fundadores. Poco a poco estamos reconstruyendo nuestra
        historia.
      </p>
    </div>
  );
}

export function PresidentsArchive() {
  return (
    <div className="flex flex-col gap-8 sm:gap-10">
      <ol className="border-t border-line">
        {presidencyReferences.map((reference) => (
          <li
            className="grid gap-3 border-b border-line py-6 sm:grid-cols-[9rem_1fr] sm:gap-x-8 sm:py-8"
            key={reference.id}
          >
            <p className="pt-1 text-xs font-semibold uppercase leading-6 tracking-[0.1em] text-clay-text">
              {reference.date}
            </p>
            <div>
              <h2 className="font-display text-xl leading-snug tracking-[-0.025em] sm:text-2xl">
                {reference.name}
              </h2>
              {reference.context && (
                <p className="mt-2 max-w-2xl text-sm leading-7 text-muted sm:text-sm">
                  {reference.context}
                </p>
              )}
            </div>
          </li>
        ))}
      </ol>
      <p className="border-l-2 border-clay pl-6 font-display text-lg leading-8 text-muted sm:text-xl">
        Reconocer a quienes dirigieron nuestra institución es reconocer la
        riqueza de nuestra historia.
      </p>
    </div>
  );
}
