import Link from "next/link";

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-line py-16 md:py-24">
        <div className="mx-auto w-[calc(100%-2rem)] max-w-7xl sm:w-[calc(100%-2.5rem)] md:w-[calc(100%-4rem)]">
          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-clay">
            Contacto
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-4xl font-normal leading-[1.12] sm:text-5xl md:mt-5 md:text-6xl">
            Nos encantará encontrarnos contigo.
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-muted sm:text-base md:mt-6 md:leading-8">
            Acercarse a una comunidad empieza con una conversación. Queremos
            escucharte y acompañarte en lo que necesites.
          </p>
        </div>
      </section>
      <section className="py-14 md:py-24">
        <div className="mx-auto grid w-[calc(100%-2rem)] max-w-7xl gap-7 sm:w-[calc(100%-2.5rem)] md:w-[calc(100%-4rem)] md:grid-cols-[0.75fr_1.25fr] md:gap-24">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-muted">
              Un primer paso
            </p>
            <h2 className="mt-4 font-display text-2xl font-normal leading-tight sm:text-3xl md:mt-5 md:text-4xl">
              Toda pregunta merece ser escuchada.
            </h2>
          </div>
          <div className="max-w-2xl border-l-2 border-clay bg-mist p-5 sm:p-6 md:p-9">
            <p className="text-sm leading-7 text-ink/80 sm:text-base md:leading-8">
              Los datos oficiales de ubicación, horarios y contacto no están
              incluidos en la información recibida para este sitio. Se
              incorporarán aquí cuando sean confirmados por la institución.
            </p>
            <Link
              className="mt-5 inline-flex min-h-11 items-center gap-3 text-sm font-bold text-forest-link hover:text-clay sm:mt-6 sm:gap-4"
              href="/comunidad"
            >
              Mientras tanto, conoce la comunidad{" "}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
