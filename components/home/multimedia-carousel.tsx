"use client";

import clsx from "clsx";

import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Pause,
  Play,
  X,
} from "lucide-react";
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
      className="group min-w-0"
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
      <div className="relative h-[34rem] overflow-hidden bg-ink sm:h-[39rem] lg:h-[32rem]">
        {slides.map((slide, index) => (
          <figure
            aria-label={`${index + 1} de ${slides.length}: ${slide.title}`}
            aria-roledescription="diapositiva"
            className={clsx(
              "absolute inset-0 grid grid-rows-[1fr_auto] transition-opacity duration-700 motion-reduce:transition-none lg:grid-cols-[1.8fr_1fr] lg:grid-rows-1",
              index === activeIndex ? "z-10 opacity-100" : "z-0 opacity-0",
            )}
            key={slide.src}
            aria-hidden={index !== activeIndex}
          >
            <div className="relative min-h-0 overflow-hidden">
              <Image
                alt=""
                aria-hidden="true"
                className="object-cover"
                fill
                loading="lazy"
                quality={90}
                sizes="(max-width: 1024px) 100vw, 65vw"
                src={slide.src}
                style={{ objectPosition: slide.position }}
              />
              <button
                aria-label={`Ampliar fotografía: ${slide.title}`}
                className="group/expand absolute inset-0 z-0 cursor-zoom-in focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-white"
                onClick={() => openLightbox(index)}
                ref={index === activeIndex ? openButtonRef : undefined}
                tabIndex={index === activeIndex ? 0 : -1}
                type="button"
              >
                <span
                  aria-hidden="true"
                  className="absolute bottom-4 right-4 grid size-11 place-items-center border border-paper/40 bg-ink/70 text-paper transition-colors group-hover/expand:bg-ink"
                >
                  <Maximize2 size={18} />
                </span>
              </button>
            </div>
            <figcaption className="flex flex-col justify-between gap-7 p-6 text-paper sm:p-8 lg:gap-12 lg:p-10">
              <span
                aria-hidden="true"
                className="text-xs font-medium tracking-[0.14em] text-paper/60"
              >
                {String(index + 1).padStart(2, "0")} /{" "}
                {String(slides.length).padStart(2, "0")}
              </span>
              <span>
                <span className="block text-[10px] font-semibold uppercase leading-6 tracking-[0.16em] text-paper/65">
                  {slide.caption}
                </span>
                <span className="mt-4 block max-w-xl font-display text-2xl leading-snug sm:text-3xl">
                  {slide.title}
                </span>
              </span>
              <span
                aria-hidden="true"
                className="hidden h-px w-12 bg-clay lg:block"
              />
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-x-8 gap-y-4 border-b border-line pb-5 sm:mt-6 sm:pb-6">
        <div
          aria-label="Elegir fotografía"
          className="flex flex-wrap items-center gap-1 sm:gap-2"
          role="group"
          aria-live={pauseRotation ? "polite" : "off"}
        >
          {slides.map((slide, index) => (
            <button
              aria-current={index === activeIndex ? "true" : undefined}
              aria-label={`Mostrar ${slide.title}`}
              className={clsx(
                "grid size-11 touch-manipulation place-items-center border-b-2 text-xs transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay",
                index === activeIndex
                  ? "border-clay font-semibold text-ink"
                  : "border-transparent text-muted hover:border-line hover:text-ink",
              )}
              key={slide.src}
              onClick={() => setActiveIndex(index)}
              type="button"
            >
              0{index + 1}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            aria-label={
              isPaused
                ? "Reanudar carrusel automático"
                : "Pausar carrusel automático"
            }
            aria-pressed={isPaused}
            className="mr-3 grid size-11 touch-manipulation place-items-center text-muted transition-colors hover:text-ink"
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
            aria-label="Fotografía anterior"
            className="grid size-11 touch-manipulation place-items-center border border-line text-ink transition-colors hover:border-ink hover:bg-ink hover:text-paper"
            onClick={showPrevious}
            type="button"
          >
            <ChevronLeft aria-hidden="true" size={19} />
          </button>
          <button
            aria-label="Fotografía siguiente"
            className="grid size-11 touch-manipulation place-items-center border border-line text-ink transition-colors hover:border-ink hover:bg-ink hover:text-paper"
            onClick={showNext}
            type="button"
          >
            <ChevronRight aria-hidden="true" size={19} />
          </button>
        </div>
      </div>

      <dialog
        aria-labelledby="multimedia-lightbox-title"
        className="fixed inset-0 m-0 h-dvh w-screen max-h-none max-w-none overflow-hidden border-0 bg-ink p-0 text-paper backdrop:bg-black/80"
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
          <div className="flex shrink-0 items-start justify-between gap-4 border-b border-paper/20 py-4 sm:py-6">
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

          <div className="relative mt-4 min-h-0 flex-1 bg-black/30">
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
