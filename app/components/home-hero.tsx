import Link from "next/link";
import { assetUrl } from "@/app/data/assets";
import { PrimaryImageBackground } from "@/app/components/primary-image-background";

export function HomeHero() {
  return (
    <section className="relative flex aspect-square items-end overflow-hidden rounded-b-3xl bg-[#111111] text-white sm:aspect-auto sm:min-h-[min(420px,calc(100svh-5rem))] md:min-h-[min(500px,calc(100svh-5rem))] lg:mx-4 lg:min-h-[min(560px,calc(100svh-5rem))]">
      <PrimaryImageBackground
        alt="Imagen de San Martín de Porres sobre su anda procesional"
        className="translate-y-0 scale-[1.08] object-cover object-top md:translate-y-[-4%] md:object-[center_4%]"
        showLoadingScreen
        src={`${assetUrl("home_hero.jpg")}?w=2560&quality=85`}
      />
      <div className="absolute inset-0 bg-linear-to-r from-black/45 via-black/20 to-transparent" />
      <div className="absolute inset-0 bg-linear-to-t from-black/55 via-black/10 to-transparent" />
      <div className="relative mx-auto grid w-[calc(100%-2rem)] max-w-7xl gap-7 pb-6 pt-14 sm:w-[calc(100%-2.5rem)] sm:gap-10 sm:pb-10 sm:pt-20 md:w-[calc(100%-4rem)] md:grid-cols-[1fr_auto] md:items-end md:gap-12 md:pb-12 md:pt-24">
        <div className="max-w-4xl">
          <p className="max-w-2xl text-[10px] font-semibold uppercase leading-5 tracking-[0.14em] text-white/85 sm:text-xs sm:tracking-[0.18em]">
            Hermandad de Cargadores de San Martín de Porres
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-3xl font-normal leading-[1.12] sm:mt-8 sm:text-5xl md:mt-6 lg:text-6xl xl:text-7xl">
            ¡Somos parte de tu{" "}
            <span className="text-[#d7bd78]">historia de amor!</span>
          </h1>
          <div className="mt-5 flex flex-row gap-2.5 sm:mt-6 sm:gap-3">
            <Link
              className="inline-flex min-h-12 min-w-0 flex-1 items-center justify-center gap-2 whitespace-nowrap bg-white px-2 text-xs font-semibold text-[#111111] transition-colors hover:bg-[#d9d0c0] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:flex-none sm:gap-5 sm:px-5 sm:text-sm"
              href="/hermandad/historia"
            >
              <span className="sm:hidden">Nuestra historia</span>
              <span className="hidden sm:inline">Conoce nuestra historia</span>
              <span aria-hidden="true">→</span>
            </Link>
            <Link
              className="inline-flex min-h-12 min-w-0 flex-1 items-center justify-center whitespace-nowrap border border-white/70 px-2 text-xs font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:flex-none sm:px-5 sm:text-sm"
              href="/fiesta"
            >
              <span className="sm:hidden">Festividad 2026</span>
              <span className="hidden sm:inline">Solemne Festividad 2026</span>
            </Link>
          </div>
        </div>
        <p className="hidden max-w-xs border-l border-[#b89b5e] pl-4 text-[14px] leading-5 text-white/90 md:mb-1 md:block">
          Nuestra imagen titular, luego de su restauración en el año 2018, en la
          sala capitular del Convento de Santo Domingo.
        </p>
      </div>
      <span className="absolute right-5 top-1/2 hidden -translate-y-1/2 font-display text-[10px] text-white/50 [writing-mode:vertical-rl] md:block">
        ESCOGIÓ LA HUMILDAD Y ENCONTRÓ EL AMOR
      </span>
    </section>
  );
}
