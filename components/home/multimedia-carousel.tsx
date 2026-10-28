"use client";

import clsx from "clsx";

import { ChevronLeft, ChevronRight, Pause, Play, X } from "lucide-react";
import Image from "next/image";
import { useRef, useState, type KeyboardEvent } from "react";
import { useCarousel } from "@/hooks/use-carousel";
import { useModalDialog } from "@/hooks/use-modal-dialog";
import { slides } from "@/models/home/multimedia-slides";

export function MultimediaCarousel() {
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const {
    activeIndex,
    goTo: setActiveIndex,
    previous: showPrevious,
    next: showNext,
    isPaused,
    setIsPaused,
    setIsHovered,
    setHasFocus,
    pauseRotation,
  } = useCarousel({
    count: slides.length,
    interval: 5000,
    suspended: isLightboxOpen,
  });
  const lightboxRef = useModalDialog(isLightboxOpen);
  const openButtonRef = useRef<HTMLButtonElement>(null);

  function openLightbox(index: number) {
    setLightboxIndex(index);
    setActiveIndex(index);
    setIsLightboxOpen(true);
  }

  function showLightboxPrevious() {
    const previousIndex = (lightboxIndex - 1 + slides.length) % slides.length;
    setLightboxIndex(previousIndex);
    setActiveIndex(previousIndex);
  }

  function showLightboxNext() {
    const nextIndex = (lightboxIndex + 1) % slides.length;
    setLightboxIndex(nextIndex);
    setActiveIndex(nextIndex);
  }

  function handleLightboxKeyDown(event: KeyboardEvent<HTMLDialogElement>) {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      showLightboxPrevious();
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      showLightboxNext();
    }
  }

  return (
    <div
      aria-label="Fotografías de la vida de la Hermandad"
      aria-roledescription="carrusel"
      className="group"
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
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
            className={clsx(
              "absolute inset-0 transition-opacity duration-700 motion-reduce:transition-none",
              index === activeIndex ? "z-10 opacity-100" : "z-0 opacity-0",
            )}
            key={slide.src}
            aria-hidden={index !== activeIndex}
          >
            <Image
              alt=""
              aria-hidden="true"
              className="object-cover"
              fill
              loading="lazy"
              quality={90}
              sizes="(max-width: 768px) 100vw, 90vw"
              src={slide.src}
              style={{ objectPosition: slide.position }}
            />
            <button
              aria-label={`Ampliar fotografía: ${slide.title}`}
              className="absolute inset-0 z-0 cursor-zoom-in focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-white"
              onClick={() => openLightbox(index)}
              ref={index === activeIndex ? openButtonRef : undefined}
              tabIndex={index === activeIndex ? 0 : -1}
              type="button"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/75 via-black/10 to-transparent"
            />
            <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 flex flex-col justify-between gap-3 p-5 text-white sm:flex-row sm:items-end sm:p-8">
              <span>
                <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-white/75">
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
            className="grid size-11 touch-manipulation place-items-center border border-white/45 bg-black/25 text-white backdrop-blur-xs transition-colors hover:bg-black/55 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
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
              className="grid size-11 touch-manipulation place-items-center border border-white/45 bg-black/25 text-white backdrop-blur-xs transition-colors hover:bg-black/55 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              onClick={showPrevious}
              type="button"
            >
              <ChevronLeft aria-hidden="true" size={19} />
            </button>
            <button
              aria-label="Fotografía siguiente"
              className="grid size-11 touch-manipulation place-items-center border border-white/45 bg-black/25 text-white backdrop-blur-xs transition-colors hover:bg-black/55 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
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
        aria-live={pauseRotation ? "polite" : "off"}
      >
        {slides.map((slide, index) => (
          <button
            aria-current={index === activeIndex ? "true" : undefined}
            aria-label={`Mostrar ${slide.title}`}
            className={clsx(
              "min-h-11 touch-manipulation border-b px-1 text-xs transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay",
              index === activeIndex
                ? "border-clay font-semibold text-ink"
                : "border-line text-muted hover:text-ink",
            )}
            key={slide.src}
            onClick={() => setActiveIndex(index)}
            type="button"
          >
            0{index + 1}
          </button>
        ))}
      </div>

      <dialog
        aria-labelledby="multimedia-lightbox-title"
        className="fixed inset-0 m-0 h-dvh w-screen max-h-none max-w-none overflow-hidden border-0 bg-black/95 p-0 text-white backdrop:bg-black/80"
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            lightboxRef.current?.close();
          }
        }}
        onClose={() => {
          setIsLightboxOpen(false);
          requestAnimationFrame(() =>
            openButtonRef.current?.focus({ preventScroll: true }),
          );
        }}
        onKeyDown={handleLightboxKeyDown}
        ref={lightboxRef}
      >
        <div
          className="site-container flex h-full min-h-0 w-full flex-col px-3 sm:px-6"
          style={{
            paddingBottom: "env(safe-area-inset-bottom)",
            paddingTop: "env(safe-area-inset-top)",
          }}
        >
          <div className="flex shrink-0 items-start justify-between gap-4 py-3 sm:py-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/65">
                {slides[lightboxIndex].caption}
              </p>
              <h2
                className="mt-2 font-display text-xl leading-snug sm:text-2xl"
                id="multimedia-lightbox-title"
              >
                {slides[lightboxIndex].title}
              </h2>
            </div>
            <button
              aria-label="Cerrar fotografía ampliada"
              autoFocus
              className="grid size-11 shrink-0 place-items-center border border-white/40 text-white transition-colors hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              onClick={() => lightboxRef.current?.close()}
              type="button"
            >
              <X aria-hidden="true" size={20} />
            </button>
          </div>

          <div className="relative min-h-0 flex-1 bg-black/40">
            <Image
              alt={slides[lightboxIndex].alt}
              className="object-contain"
              fill
              quality={95}
              sizes="100vw"
              src={slides[lightboxIndex].src}
            />
            <button
              aria-label="Fotografía anterior"
              className="absolute left-2 top-1/2 z-10 grid size-11 -translate-y-1/2 place-items-center border border-white/50 bg-black/45 text-white transition-colors hover:bg-black/75 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:left-4"
              onClick={showLightboxPrevious}
              type="button"
            >
              <ChevronLeft aria-hidden="true" size={22} />
            </button>
            <button
              aria-label="Fotografía siguiente"
              className="absolute right-2 top-1/2 z-10 grid size-11 -translate-y-1/2 place-items-center border border-white/50 bg-black/45 text-white transition-colors hover:bg-black/75 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:right-4"
              onClick={showLightboxNext}
              type="button"
            >
              <ChevronRight aria-hidden="true" size={22} />
            </button>
          </div>

          <p className="shrink-0 py-3 text-right text-xs text-white/65">
            {String(lightboxIndex + 1).padStart(2, "0")} /{" "}
            {String(slides.length).padStart(2, "0")}
          </p>
        </div>
      </dialog>
    </div>
  );
}
