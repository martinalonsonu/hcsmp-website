import Image from "next/image";
import Link from "next/link";

export function HomeHero() {
  return (
    <section className="relative isolate flex min-h-[min(620px,calc(100svh-4.5rem))] items-end overflow-hidden bg-[#111111] text-white sm:min-h-[min(700px,calc(100svh-5rem))] md:min-h-[min(820px,calc(100svh-5rem))]">
      <Image
        alt="Imagen de San Martín de Porres sobre su anda procesional"
        className="object-cover object-top md:object-[center_4%]"
        fill
        preload
        quality={85}
        sizes="100vw"
        src="/assets/home_hero.jpg"
      />
      <div className="absolute inset-0 bg-linear-to-r from-black/45 via-black/20 to-transparent" />
      <div className="absolute inset-0 bg-linear-to-t from-black/55 via-black/10 to-transparent" />
      <div className="relative mx-auto grid w-[calc(100%-2rem)] max-w-7xl gap-7 pb-10 pt-20 sm:w-[calc(100%-2.5rem)] sm:gap-10 sm:pb-14 sm:pt-24 md:w-[calc(100%-4rem)] md:grid-cols-[1fr_auto] md:items-end md:gap-12 md:pb-20 md:pt-36">
        <div className="max-w-4xl animate-rise-in">
          <p className="max-w-2xl text-[10px] font-semibold uppercase leading-5 tracking-[0.14em] text-white/85 sm:text-xs sm:tracking-[0.18em]">
            Hermandad de Cargadores de San Martín de Porres
          </p>
          <p className="mt-2 text-xs text-white/75 sm:text-sm">
            Cruz Blanca · Santa María · Huacho
          </p>
          <h1 className="mt-6 max-w-4xl font-display text-3xl font-normal leading-[1.12] sm:mt-10 sm:text-5xl md:text-6xl lg:text-7xl">
            Somos parte de tu historia de amor.
          </h1>
          <div className="mt-6 flex flex-col gap-2.5 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-3">
            <Link
              className="inline-flex min-h-12 items-center justify-center gap-5 bg-white px-5 text-sm font-semibold text-[#111111] transition-colors hover:bg-[#d9d0c0] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              href="/hermandad/historia"
            >
              Conoce nuestra historia <span aria-hidden="true">→</span>
            </Link>
            <Link
              className="inline-flex min-h-12 items-center justify-center border border-white/70 px-5 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              href="/fiesta"
            >
              Solemne Festividad 2026
            </Link>
          </div>
        </div>
        <p className="max-w-xs border-l border-[#b89b5e] pl-4 text-[10px] leading-5 text-white/90 md:mb-1">
          Nuestra imagen titular, luego de su restauración en el año 2018, en la
          sala capitular del Convento de Santo Domingo.
        </p>
      </div>
      <span className="absolute right-5 top-1/2 hidden -translate-y-1/2 font-display text-xs text-white/50 [writing-mode:vertical-rl] md:block">
        ESCOGIÓ LA HUMILDAD Y ENCONTRÓ EL AMOR
      </span>
    </section>
  );
}
