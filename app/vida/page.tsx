import Link from "next/link";

const practices = [
  {
    number: "01",
    title: "Oración",
    text: "Un espacio para hacer silencio, agradecer y poner en común aquello que llevamos en el corazón.",
  },
  {
    number: "02",
    title: "Formación",
    text: "Aprendemos y profundizamos en la fe, con preguntas abiertas y escucha mutua.",
  },
  {
    number: "03",
    title: "Encuentro",
    text: "Compartimos la vida, celebramos juntos y nos acompañamos en cada etapa.",
  },
  {
    number: "04",
    title: "Servicio",
    text: "Nos ponemos al lado de otras personas y comunidades, desde la cercanía y el cuidado.",
  },
];

export default function CommunityLifePage() {
  return (
    <>
      <section className="border-b border-line py-16 md:py-24">
        <div className="mx-auto w-[calc(100%-2rem)] max-w-7xl sm:w-[calc(100%-2.5rem)] md:w-[calc(100%-4rem)]">
          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-clay">
            Vida y misión
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-4xl font-normal leading-[1.12] sm:text-5xl md:mt-5 md:text-6xl">
            La fe toma forma en lo cotidiano.
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-muted sm:text-base md:mt-6 md:leading-8">
            Nuestra vida comunitaria se construye con gestos sencillos:
            reunirnos, escucharnos, aprender y estar disponibles para servir.
          </p>
        </div>
      </section>
      <section className="py-14 md:py-24">
        <div className="mx-auto grid w-[calc(100%-2rem)] max-w-7xl gap-6 sm:w-[calc(100%-2.5rem)] md:w-[calc(100%-4rem)] md:grid-cols-[0.55fr_1.45fr] md:gap-24">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-muted">
            Un ritmo compartido
          </p>
          <div className="max-w-3xl">
            <h2 className="font-display text-2xl font-normal leading-tight sm:text-3xl md:text-4xl">
              Espacios para encontrarnos y crecer.
            </h2>
            <div className="mt-7 border-t border-line sm:mt-10">
              {practices.map(({ number, title, text }) => (
                <article
                  className="grid grid-cols-[2rem_1fr] gap-3 border-b border-line py-5 sm:grid-cols-[2.5rem_1fr] sm:gap-4 md:grid-cols-[3rem_1fr] md:gap-5 md:py-7"
                  key={number}
                >
                  <span className="font-display text-base text-clay sm:text-lg">
                    {number}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-normal sm:text-2xl">
                      {title}
                    </h3>
                    <p className="mt-2 max-w-xl text-sm leading-7 text-muted">
                      {text}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-forest-deep py-14 text-white-warm md:py-20">
        <div className="mx-auto flex w-[calc(100%-2rem)] max-w-7xl flex-col items-start gap-6 sm:w-[calc(100%-2.5rem)] md:w-[calc(100%-4rem)] md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#e7c2aa]">
              Ven a conocernos
            </p>
            <h2 className="mt-4 max-w-2xl font-display text-2xl font-normal leading-tight sm:text-3xl md:text-4xl">
              Siempre hay lugar para una persona más.
            </h2>
          </div>
          <Link
            className="inline-flex min-h-12 items-center justify-center border border-white/60 px-5 text-sm font-semibold transition-colors hover:bg-white hover:text-forest-deep"
            href="/contacto"
          >
            Acércate{" "}
            <span aria-hidden="true" className="ml-4">
              →
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}
