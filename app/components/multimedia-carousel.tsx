"use client";

import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { assetUrl } from "@/app/data/assets";

const slides = [
  {
    src: assetUrl("alfombra.jpg"),
    alt: "Procesión de San Martín de Porres sobre la alfombra floral del homenaje institucional de 2018",
    title: "Paso procesional del 3 de noviembre",
    caption: "2018 · Homenaje institucional",
    position: "center 62%",
  },
  {
    src: assetUrl("jubileo-800.jpg"),
    alt: "Hermanos de la Hermandad participando en la procesión por los 800 años de la Orden Dominica en Lima",
    title: "800 años de la Orden Dominica",
    caption: "Lima · Procesión jubilar",
    position: "center 52%",
  },
  {
    src: assetUrl("tres-nov2020.jpg"),
    alt: "Hermanos reunidos para el día central de San Martín de Porres el 3 de noviembre de 2020",
    title: "Nuestro día central en la Pandemia",
    caption: "3 de noviembre de 2020",
    position: "center 58%",
  },
  {
    src: assetUrl("milagros.jpg"),
    alt: "Encuentro de la Hermandad con el Señor de los Milagros de Huacho durante la procesión del 31 de octubre de 2014",
    title: "Encuentro con el Señor de los Milagros",
    caption: "Huacho · 31 de octubre de 2014",
    position: "center 52%",
  },
  {
    src: assetUrl("hcsmp-lima-1.jpg"),
    alt: "Hermanos de la Hermandad en el Convento de Santo Domingo de Lima para la procesión de los Pasos de la Pasión",
    title: "Procesión de los Pasos de la Pasión",
    caption: "Convento de Santo Domingo de Lima · Martes Santo Dominico 2026",
    position: "center 70%",
  },
] as const;

export function MultimediaCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hasFocus, setHasFocus] = useState(false);
  const pauseRotation = isPaused || isHovered || hasFocus;

  useEffect(() => {
    if (pauseRotation) return;

    const intervalId = window.setInterval(() => {
      if (
        document.hidden ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ) {
        return;
      }

      setActiveIndex((currentIndex) => (currentIndex + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, [pauseRotation]);

  function showPrevious() {
    setActiveIndex(
      (currentIndex) => (currentIndex - 1 + slides.length) % slides.length,
    );
  }

  function showNext() {
    setActiveIndex((currentIndex) => (currentIndex + 1) % slides.length);
  }

  return (
    <div
      aria-label="Fotografías de la vida de la Hermandad"
      aria-roledescription="carrusel"
      className="group"
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setHasFocus(false);
        }
      }}
      onFocusCapture={() => setHasFocus(true)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="region"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-[#2a2a2a] sm:aspect-[16/8]">
        {slides.map((slide, index) => (
          <figure
            aria-label={`${index + 1} de ${slides.length}: ${slide.title}`}
            aria-roledescription="diapositiva"
            className={`absolute inset-0 transition-opacity duration-700 motion-reduce:transition-none ${index === activeIndex ? "z-10 opacity-100" : "z-0 opacity-0"}`}
            key={slide.src}
            aria-hidden={index !== activeIndex}
          >
            <Image
              alt={slide.alt}
              className="object-cover"
              fill
              priority={index === 0}
              quality={90}
              sizes="(max-width: 768px) 100vw, 90vw"
              src={slide.src}
              style={{ objectPosition: slide.position }}
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-linear-to-t from-black/75 via-black/10 to-transparent"
            />
            <figcaption className="absolute inset-x-0 bottom-0 flex flex-col justify-between gap-3 p-5 text-white sm:flex-row sm:items-end sm:p-8">
              <span>
                <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-white/75">
                  {slide.caption}
                </span>
                <span className="mt-2 block max-w-2xl font-display text-xl leading-snug sm:text-2xl md:text-3xl">
                  {slide.title}
                </span>
              </span>
              <span className="shrink-0 text-xs text-white/70">
                {String(index + 1).padStart(2, "0")} /{" "}
                {String(slides.length).padStart(2, "0")}
              </span>
            </figcaption>
          </figure>
        ))}

        <div className="absolute inset-x-0 top-0 z-20 flex justify-between p-3 sm:p-5">
          <button
            aria-label={
              isPaused
                ? "Reanudar carrusel automático"
                : "Pausar carrusel automático"
            }
            className="grid size-10 touch-manipulation place-items-center border border-white/45 bg-black/25 text-white backdrop-blur-sm transition-colors hover:bg-black/55 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            onClick={() => setIsPaused((paused) => !paused)}
            type="button"
          >
            {isPaused ? (
              <Play aria-hidden="true" size={17} />
            ) : (
              <Pause aria-hidden="true" size={17} />
            )}
          </button>
          <div className="flex gap-2">
            <button
              aria-label="Fotografía anterior"
              className="grid size-10 touch-manipulation place-items-center border border-white/45 bg-black/25 text-white backdrop-blur-sm transition-colors hover:bg-black/55 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              onClick={showPrevious}
              type="button"
            >
              <ChevronLeft aria-hidden="true" size={19} />
            </button>
            <button
              aria-label="Fotografía siguiente"
              className="grid size-10 touch-manipulation place-items-center border border-white/45 bg-black/25 text-white backdrop-blur-sm transition-colors hover:bg-black/55 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              onClick={showNext}
              type="button"
            >
              <ChevronRight aria-hidden="true" size={19} />
            </button>
          </div>
        </div>
      </div>

      <div
        aria-label="Elegir fotografía"
        className="mt-4 flex flex-wrap items-center gap-3"
        role="group"
      >
        {slides.map((slide, index) => (
          <button
            aria-current={index === activeIndex ? "true" : undefined}
            aria-label={`Mostrar ${slide.title}`}
            className={`min-h-10 touch-manipulation border-b px-1 text-xs transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay ${index === activeIndex ? "border-clay font-semibold text-ink" : "border-line text-muted hover:text-ink"}`}
            key={slide.src}
            onClick={() => setActiveIndex(index)}
            type="button"
          >
            0{index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
