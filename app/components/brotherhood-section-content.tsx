import { ArrowUpRight, UsersRound } from "lucide-react";
import Link from "next/link";
import { foundingFigures, presidencyReferences } from "@/app/data/brotherhood";

const sectionLinks = [
  {
    href: "/hermandad/historia",
    number: "01",
    title: "Nuestra historia",
    detail: "De la memoria popular a los documentos y la vida institucional.",
  },
  {
    href: "/hermandad/fundadores",
    number: "02",
    title: "Quienes dieron los primeros pasos",
    detail: "Nombres y recuerdos de los primeros años de la Hermandad.",
  },
  {
    href: "/hermandad/presidentes",
    number: "03",
    title: "Presidentes",
    detail:
      "Referencias de liderazgo vinculadas a momentos de nuestra historia.",
  },
];

export function BrotherhoodOverview() {
  return (
    <div className="space-y-12 sm:space-y-14">
      <section className="border-y border-line py-5 sm:py-7">
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-clay">
          Nuestra identidad
        </p>
        <p className="mt-4 max-w-3xl font-display text-xl leading-relaxed sm:text-2xl">
          Somos una institución de fieles laicos, que hace vida eclesial en la
          Parroquia La Santa Cruz, del barrio de Cruz Blanca, unida por la
          devoción a San Martín de Porres y una vida de fe, fraternidad y
          caridad.
        </p>
        <p className="mt-4 text-xs leading-6 text-muted sm:text-sm sm:leading-7">
          Diócesis de Huacho · Parroquia La Santa Cruz
        </p>
      </section>

      <section>
        <div className="grid gap-4 sm:grid-cols-3 sm:gap-5">
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
          ].map(([title, detail]) => (
            <article className="border-t border-clay/70 pt-3" key={title}>
              <h2 className="font-display text-lg sm:text-xl">{title}</h2>
              <p className="mt-2 text-xs leading-6 text-muted sm:text-sm">
                {detail}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-mist/70 px-5 py-6 sm:px-7 sm:py-8">
        <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-clay">
          Una historia con dos referencias fundacionales
        </p>
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          <div>
            <p className="font-display text-2xl">5 nov 1974</p>
            <p className="mt-1 text-xs leading-6 text-muted">
              Fecha que aparece en el sello institucional más antiguo que se
              conserva en una carta institucional.
            </p>
          </div>
          <div>
            <p className="font-display text-2xl">3 nov 1975</p>
            <p className="mt-1 text-xs leading-6 text-muted">
              Fecha fijada posteriormente como referencia institucional tras
              perderse los libros fundacionales y al ser requerido para el
              reconocimiento eclesial.
            </p>
          </div>
        </div>
        <p className="mt-5 border-t border-line pt-4 text-xs leading-6 text-muted">
          Conservamos ambas fechas con su contexto y como parte de la riqueza de
          nuestra historia.
        </p>
      </section>

      <section>
        <div className="mb-5 flex items-end justify-between gap-4">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-clay">
              Recorrido institucional
            </p>
            <h2 className="mt-2 font-display text-2xl sm:text-3xl">
              Explora la sección
            </h2>
          </div>
          <UsersRound aria-hidden="true" className="mb-1 text-clay" size={20} />
        </div>
        <div className="divide-y divide-line border-y border-line">
          {sectionLinks.map((link) => (
            <Link
              className="group grid min-h-20 grid-cols-[2rem_1fr_auto] items-center gap-3 py-4 sm:grid-cols-[3rem_1fr_auto] sm:gap-5"
              href={link.href}
              key={link.href}
            >
              <span className="font-display text-sm text-clay">
                {link.number}
              </span>
              <span>
                <span className="block font-display text-lg leading-snug group-hover:text-clay sm:text-xl">
                  {link.title}
                </span>
                <span className="mt-1 block text-xs leading-5 text-muted">
                  {link.detail}
                </span>
              </span>
              <ArrowUpRight
                aria-hidden="true"
                className="text-clay transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                size={18}
              />
            </Link>
          ))}
        </div>
      </section>

      <section className="border-l-2 border-clay pl-4 sm:pl-5">
        <p className="font-display text-xl leading-relaxed sm:text-2xl">
          “¡Somos parte de tu historia de amor!”
        </p>
      </section>
    </div>
  );
}

export function FoundersArchive() {
  return (
    <div className="space-y-10 sm:space-y-12">
      <section className="border-y border-line">
        {foundingFigures.map((figure, index) => (
          <article
            className="grid gap-2 border-b border-line py-5 last:border-b-0 sm:grid-cols-[3rem_1fr] sm:gap-5 sm:py-6"
            key={figure.id}
          >
            <span className="font-display text-sm text-clay">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <h2 className="font-display text-xl sm:text-2xl">
                {figure.name}
              </h2>
              <p className="mt-2 text-xs leading-6 text-muted sm:text-sm">
                {figure.note}
              </p>
            </div>
          </article>
        ))}
      </section>
      <p className="text-xs leading-6 text-muted sm:text-sm sm:leading-7">
        Esta relación recoge figuras mencionadas en la memoria compartida; no
        pretende ser la nómina completa de fundadores. Los libros fundacionales
        se perdieron con el paso del tiempo y el archivo podrá ampliarse con
        testimonios y documentos identificados.
      </p>
    </div>
  );
}

export function PresidentsArchive() {
  return (
    <div className="space-y-7 sm:space-y-9">
      <ol className="relative border-l border-line">
        {presidencyReferences.map((reference) => (
          <li
            className="relative pb-7 pl-6 last:pb-0 sm:pl-8"
            key={reference.id}
          >
            <span
              aria-hidden="true"
              className="absolute -left-[5px] top-1 size-[9px] rounded-full bg-clay ring-4 ring-paper"
            />
            <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-clay">
              {reference.date}
            </p>
            <h2 className="mt-1 font-display text-xl sm:text-2xl">
              {reference.name}
            </h2>
            {reference.context && (
              <p className="mt-2 max-w-2xl text-xs leading-6 text-muted sm:text-sm">
                {reference.context}
              </p>
            )}
          </li>
        ))}
      </ol>
      <p className="border-t border-line pt-4 text-xs leading-6 text-muted sm:text-sm">
        Reconocer a quienes dirigieron nuestra institución es reconocer la
        riqueza de nuestra historia.
      </p>
    </div>
  );
}
