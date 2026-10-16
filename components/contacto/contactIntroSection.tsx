export function ContactIntroSection() {
  return (
    <section className="border-b border-line py-16 md:py-24">
        <div className="mx-auto w-[calc(100%-2rem)] max-w-7xl sm:w-[calc(100%-2.5rem)] md:w-[calc(100%-4rem)]">
          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-clay">
            Contacto
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-4xl font-normal leading-[1.12] sm:text-5xl md:mt-5 md:text-6xl">
            Estamos para escucharte y servirte.
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-muted sm:text-base md:mt-6 md:leading-8">
            Si deseas comunicarte con nuestra Hermandad, solicitar tu ingreso o
            conocer más sobre nuestra vida institucional, ponemos a tu
            disposición nuestros canales de atención.
          </p>
        </div>
      </section>
  );
}
