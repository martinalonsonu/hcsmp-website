import { SectionCta } from "@/app/components/section-cta";

const brotherhoodAreas = [
  {
    number: "01",
    title: "Formación cristiana",
    detail: "Fe que se aprende, se conversa y se lleva a la vida.",
  },
  {
    number: "02",
    title: "Caridad",
    detail: "Servicio cercano, inspirado en San Martín de Porres.",
  },
  {
    number: "03",
    title: "Fraternidad",
    detail: "Lazos que sostienen a la Hermandad dentro y fuera de noviembre.",
  },
  {
    number: "05",
    title: "Convivencia",
    detail: "Espacios para participar y sumarse a la vida común.",
  },
];

export function HomeBrotherhoodSection() {
  return (
    <section className="py-8 sm:py-12 md:py-20" id="vida-hermandad">
      <div className="mx-auto grid w-[calc(100%-2rem)] max-w-7xl gap-5 sm:w-[calc(100%-2.5rem)] sm:gap-8 md:w-[calc(100%-4rem)] md:grid-cols-[0.75fr_1.25fr] md:gap-20">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-clay">
            Vida Eclesial
          </p>
          <h2 className="mt-3 font-display text-2xl font-normal leading-tight sm:mt-5 sm:text-4xl md:text-5xl">
            Vida de Hermandad
          </h2>
          <p className="mt-3 max-w-sm text-xs leading-6 text-muted sm:mt-5 sm:text-sm sm:leading-7">
            La devoción continúa en la formación, el encuentro y el servicio
            compartido.
          </p>
          <SectionCta href="/hermandad">Conoce a la Hermandad</SectionCta>
        </div>
        <div className="border-t border-line">
          {brotherhoodAreas.map(({ number, title, detail }) => (
            <article
              className="grid grid-cols-[2rem_1fr] gap-2 border-b border-line py-3 sm:grid-cols-[3rem_1fr] sm:gap-5 sm:py-5"
              key={number}
            >
              <span className="font-display text-sm text-clay">{number}</span>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                <h3 className="font-display text-base sm:text-xl">{title}</h3>
                <p className="max-w-sm text-[11px] leading-4 text-muted sm:text-right sm:text-sm sm:leading-5">
                  {detail}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
