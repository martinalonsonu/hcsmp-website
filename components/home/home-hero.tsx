"use client";

import clsx from "clsx";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { heroSlides } from "@/models/home/hero-slides";
import { useCarousel } from "@/hooks/use-carousel";

export function HomeHero() {
  const {
    activeIndex: activeSlideIndex,
    previousIndex,
    previous,
    next,
    isPaused,
    setIsPaused,
    setIsHovered,
    setHasFocus,
    pauseRotation,
  } = useCarousel({ count: heroSlides.length });
  const activeSlide = heroSlides[activeSlideIndex];
  const nextSlideIndex = (activeSlideIndex + 1) % heroSlides.length;

  return (
    <section
      aria-label="La Hermandad en imágenes"
      aria-roledescription="carrusel"
      className="relative flex min-h-[30rem] items-end overflow-hidden rounded-b-3xl bg-[#111111] text-white sm:min-h-[36rem] lg:mx-4 lg:min-h-[min(640px,calc(100svh-5rem))]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocusCapture={() => setHasFocus(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget))
          setHasFocus(false);
      }}
    >
      <div aria-hidden="true" className="absolute inset-0">
        {heroSlides.map(({ image, imagePosition }, index) => {
          if (
            index !== activeSlideIndex &&
            index !== nextSlideIndex &&
            index !== previousIndex
          ) {
            return null;
          }

          return (
            <Image
              alt=""
              aria-hidden="true"
              className={clsx(
                "absolute inset-0 transition-opacity duration-1000 motion-reduce:transition-none",
                imagePosition,
                activeSlideIndex === index ? "opacity-100" : "opacity-0",
              )}
              fill
              key={image}
              loading={index === 0 ? undefined : "lazy"}
              preload={index === 0}
              sizes="100vw"
              src={image}
            />
          );
        })}
      </div>
      <div className="absolute inset-0 bg-linear-to-r from-black/45 via-black/20 to-transparent" />
      <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent" />
      <div className="site-container relative grid gap-7 pb-24 pt-20 sm:gap-10 sm:pb-24 md:grid-cols-[1fr_auto] md:items-end md:gap-12 md:pb-24 md:pt-24">
        <div className="max-w-4xl">
          <p className="max-w-2xl text-xs font-semibold uppercase leading-5 tracking-[0.14em] text-white/85 sm:text-xs sm:tracking-[0.18em]">
            Hermandad de Cargadores de San Mart&iacute;n de Porres
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-3xl font-normal leading-[1.12] sm:mt-8 sm:text-5xl md:mt-6 lg:text-6xl xl:text-7xl">
            &iexcl;Somos parte de tu{" "}
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
              href="/blog/programa-festividad-san-martin-2026/"
            >
              <span className="sm:hidden">Festividad 2026</span>
              <span className="hidden sm:inline">Solemne Festividad 2026</span>
            </Link>
          </div>
        </div>
        <p
          aria-live={pauseRotation ? "polite" : "off"}
          className="hidden max-w-56 border-l border-[#b89b5e] pl-4 text-sm leading-6 text-white/90 lg:mb-1 lg:block"
        >
          {activeSlide.description}
        </p>
      </div>
      <div className="absolute inset-x-0 bottom-6 z-10">
        <div className="site-container flex items-center justify-end gap-2">
          <span
            aria-hidden="true"
            className="mr-3 text-xs tabular-nums text-white/85"
          >
            {String(activeSlideIndex + 1).padStart(2, "0")} /{" "}
            {String(heroSlides.length).padStart(2, "0")}
          </span>
          <button
            aria-label="Imagen anterior de portada"
            className="grid size-11 place-items-center border border-white/50 bg-black/30 hover:bg-black/60"
            onClick={previous}
            type="button"
          >
            <ChevronLeft aria-hidden="true" size={19} />
          </button>
          <button
            aria-label={
              isPaused
                ? "Reanudar portada automática"
                : "Pausar portada automática"
            }
            aria-pressed={isPaused}
            className="grid size-11 place-items-center border border-white/50 bg-black/30 hover:bg-black/60"
            onClick={() => setIsPaused((paused) => !paused)}
            type="button"
          >
            {isPaused ? (
              <Play aria-hidden="true" size={17} />
            ) : (
              <Pause aria-hidden="true" size={17} />
            )}
          </button>
          <button
            aria-label="Imagen siguiente de portada"
            className="grid size-11 place-items-center border border-white/50 bg-black/30 hover:bg-black/60"
            onClick={next}
            type="button"
          >
            <ChevronRight aria-hidden="true" size={19} />
          </button>
        </div>
      </div>
      <span className="absolute right-5 top-1/2 hidden -translate-y-1/2 font-display text-xs text-white/50 [writing-mode:vertical-rl] md:block">
        ESCOGI&Oacute; LA HUMILDAD Y ENCONTR&Oacute; EL AMOR
      </span>
    </section>
  );
}
