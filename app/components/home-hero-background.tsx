"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { brotherhoodLogoUrl } from "@/app/data/assets";

type HomeHeroBackgroundProps = {
  src: string;
};

export function HomeHeroBackground({ src }: HomeHeroBackgroundProps) {
  const imageRef = useRef<HTMLImageElement>(null);
  const [isImageReady, setIsImageReady] = useState(false);

  useEffect(() => {
    if (imageRef.current?.complete) {
      setIsImageReady(true);
    }
  }, []);

  return (
    <>
      <Image
        alt="Imagen de San Martín de Porres sobre su anda procesional"
        className="object-cover object-top md:object-[center_4%]"
        fill
        onError={() => setIsImageReady(true)}
        onLoad={() => setIsImageReady(true)}
        preload
        ref={imageRef}
        sizes="100vw"
        src={src}
      />
      <div
        aria-hidden={isImageReady}
        aria-label="Cargando la imagen principal"
        className={`fixed inset-0 z-100 flex items-center justify-center bg-white px-6 text-forest-deep transition-opacity duration-500 ${isImageReady ? "pointer-events-none opacity-0" : "opacity-100"}`}
        role="status"
      >
        <div className="flex w-full max-w-4xl items-center justify-center gap-2 sm:gap-3 md:gap-4">
          <Image
            alt=""
            className="size-12 shrink-0 object-contain sm:size-16 md:size-20"
            height={1080}
            src={brotherhoodLogoUrl}
            width={1080}
          />
          <div className="min-w-0 font-sans">
            <p className="text-[10px] leading-[1.1] sm:text-sm md:text-base">
              Hermandad de Cargadores de
            </p>
            <p className="text-xs font-bold uppercase leading-[1.1] tracking-[0.06em] text-clay sm:text-base md:text-xl">
              San Martín de Porres
            </p>
            <p className="mt-0.5 text-[9px] leading-[1.1] tracking-wide text-muted sm:text-xs md:text-sm">
              Cruz Blanca - Huacho
            </p>
          </div>
        </div>
      </div>
    </>
  );
}