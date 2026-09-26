import Link from "next/link";

const values = [
  {
    number: "01",
    title: "Acogida",
    text: "Hacemos espacio para cada persona, con respeto por su historia y su camino.",
  },
  {
    number: "02",
    title: "Fe compartida",
    text: "Crecemos juntos a través de la oración, la escucha y la vida cotidiana.",
  },
  {
    number: "03",
    title: "Servicio",
    text: "Ponemos nuestros talentos al servicio de quienes nos rodean.",
  },
];

export default function CommunityPage() {
  return (
    <>
      <section className="border-b border-line py-16 md:py-24">
        <div className="mx-auto w-[calc(100%-2rem)] max-w-7xl sm:w-[calc(100%-2.5rem)] md:w-[calc(100%-4rem)]">
          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-clay">
            La comunidad
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-4xl font-normal leading-[1.12] sm:text-5xl md:mt-5 md:text-6xl">
            Una familia unida por la fe y el servicio.
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-muted sm:text-base md:mt-6 md:leading-8">
            Somos personas diversas que se encuentran para compartir la fe,
            acompañarse y construir una comunidad abierta.
          </p>
        </div>
      </section>
      <section className="py-14 md:py-24">
        <div className="mx-auto grid w-[calc(100%-2rem)] max-w-7xl gap-6 sm:w-[calc(100%-2.5rem)] md:w-[calc(100%-4rem)] md:grid-cols-[0.55fr_1.45fr] md:gap-24">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-muted">
            Quiénes somos
          </p>
          <div className="max-w-3xl">
            <h2 className="font-display text-2xl font-normal leading-tight sm:text-3xl md:text-4xl">
              Creemos en una fe que se vive con los demás.
            </h2>
            <p className="mt-5 text-sm leading-7 text-muted sm:mt-6 sm:text-base md:leading-8">
              HCSMP es una comunidad religiosa que encuentra en el encuentro, la
              oración y el servicio una forma concreta de vivir su vocación.
              Queremos ser un lugar donde cada persona pueda sentirse recibida y
              acompañada.
            </p>
            <p className="mt-4 text-sm leading-7 text-muted sm:text-base md:leading-8">
              Nos une el deseo de crecer juntos y de hacer presente, en lo
              cotidiano, una esperanza que se comparte.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-mist py-14 md:py-24">
        <div className="mx-auto grid w-[calc(100%-2rem)] max-w-7xl gap-6 sm:w-[calc(100%-2.5rem)] md:w-[calc(100%-4rem)] md:grid-cols-[0.55fr_1.45fr] md:gap-24">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-muted">
            Lo que nos guía
          </p>
          <div className="max-w-3xl border-t border-forest/20">
            {values.map(({ number, title, text }) => (
              <article
                className="grid grid-cols-[2rem_1fr] gap-3 border-b border-forest/20 py-5 sm:grid-cols-[2.5rem_1fr] sm:gap-4 md:grid-cols-[3rem_1fr] md:gap-5 md:py-7"
                key={number}
              >
                <span className="font-display text-sm text-clay">{number}</span>
                <div>
                  <h2 className="text-sm font-bold">{title}</h2>
                  <p className="mt-2 text-sm leading-6 text-muted">{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="py-14 md:py-20">
        <div className="mx-auto flex w-[calc(100%-2rem)] max-w-7xl flex-col items-start gap-5 sm:w-[calc(100%-2.5rem)] md:w-[calc(100%-4rem)] md:flex-row md:items-center md:justify-between">
          <h2 className="max-w-2xl font-display text-2xl font-normal leading-tight sm:text-3xl md:text-4xl">
            La comunidad se descubre viviéndola.
          </h2>
          <Link
            className="inline-flex min-h-11 items-center gap-4 text-sm font-bold text-forest-link hover:text-clay"
            href="/vida"
          >
            Conoce nuestra vida comunitaria <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
