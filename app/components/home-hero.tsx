"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { assetUrl } from "@/app/data/assets";

const heroSlides = [
  {
    image: `${assetUrl("home_hero.jpg")}?w=2560&quality=85`,
    description:
      "Nuestra imagen titular, luego de su restauración en el año 2018, en la sala capitular del Convento de Santo Domingo.",
    imagePosition:
      "translate-y-0 scale-[1.08] object-cover object-top md:translate-y-[-4%] md:object-[center_4%]",
  },
  {
    image:
      "https://hcsmpcb.wordpress.com/wp-content/uploads/2026/10/img_8654-2-1.jpg",
    description: "Recorrido de Guardada. Noviembre del 2019.",
    imagePosition:
      "translate-y-0 scale-[1.08] object-cover object-[center_40%]",
  },
  {
    image:
      "https://hcsmpcb.wordpress.com/wp-content/uploads/2026/10/img_4409-1.jpg",
    description:
      "Recorrido del 5 de mayo del 2019. Celebración por el aniversario de la canonización de San Martín de Porres.",
    imagePosition:
      "translate-y-0 scale-[1.08] object-cover object-[center_40%]",
  },
  {
    image:
      "https://hcsmpcb.wordpress.com/wp-content/uploads/2026/10/img_0047-1-1.jpg",
    description:
      "03 de noviembre de 2020. Martin no recorrió debido a la pandemia.",
    imagePosition:
      "translate-y-0 scale-[1.08] object-cover object-[center_15%]",
  },
];

export function HomeHero() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const activeSlide = heroSlides[activeSlideIndex];

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlideIndex(
        (currentIndex) => (currentIndex + 1) % heroSlides.length,
      );
    }, 6000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="relative flex aspect-[7/6] items-end overflow-hidden rounded-b-3xl bg-[#111111] text-white sm:aspect-auto sm:min-h-[min(420px,calc(100svh-5rem))] md:min-h-[min(500px,calc(100svh-5rem))] lg:mx-4 lg:min-h-[min(560px,calc(100svh-5rem))]">
      <div aria-hidden="true" className="absolute inset-0">
        {heroSlides.map(({ image, imagePosition }, index) => (
          <Image
            alt=""
            aria-hidden="true"
            className={`absolute inset-0 ${imagePosition} transition-opacity duration-1000 ${
              activeSlideIndex === index ? "opacity-100" : "opacity-0"
            }`}
            fill
            key={image}
            preload={index === 0}
            sizes="100vw"
            src={image}
          />
        ))}
      </div>
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
              href="/noticias/programa-festividad-san-martin-2026/"
            >
              <span className="sm:hidden">Festividad 2026</span>
              <span className="hidden sm:inline">Solemne Festividad 2026</span>
            </Link>
          </div>
        </div>
        <p className="hidden max-w-xs border-l border-[#b89b5e] pl-4 text-[14px] leading-5 text-white/90 md:mb-1 md:block">
          {activeSlide.description}
        </p>
      </div>
      <span className="absolute right-5 top-1/2 hidden -translate-y-1/2 font-display text-[10px] text-white/50 [writing-mode:vertical-rl] md:block">
        ESCOGIÓ LA HUMILDAD Y ENCONTRÓ EL AMOR
      </span>
    </section>
  );
}
