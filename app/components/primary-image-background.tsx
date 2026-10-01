"use client";

import Image from "next/image";
import { createPortal } from "react-dom";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import { brotherhoodLogoUrl } from "@/app/data/assets";

const subscribeToPortalRoot = () => () => {};
const getPortalRootSnapshot = () => document.body;
const getPortalRootServerSnapshot = (): HTMLElement | null => null;

type PrimaryImageBackgroundProps = {
  alt?: string;
  className?: string;
  quality?: number;
  showLoadingScreen?: boolean;
  src: string;
};

export function PrimaryImageBackground({
  alt = "",
  className = "object-cover",
  quality,
  showLoadingScreen = false,
  src,
}: PrimaryImageBackgroundProps) {
  const imageRef = useRef<HTMLImageElement>(null);
  const exitTimerRef = useRef<number | null>(null);
  const portalRoot = useSyncExternalStore(
    subscribeToPortalRoot,
    getPortalRootSnapshot,
    getPortalRootServerSnapshot,
  );
  const [loadedSrc, setLoadedSrc] = useState<string | null>(null);
  const [isExiting, setIsExiting] = useState(false);
  const isImageReady = loadedSrc === src;

  const handleImageReady = useCallback(() => {
    setLoadedSrc(src);
    setIsExiting(true);
    if (exitTimerRef.current !== null) {
      window.clearTimeout(exitTimerRef.current);
    }
    exitTimerRef.current = window.setTimeout(() => {
      setIsExiting(false);
      exitTimerRef.current = null;
    }, 750);
  }, [src]);

  useEffect(() => {
    if (imageRef.current?.complete && imageRef.current.naturalWidth > 0) {
      handleImageReady();
    }
    return () => {
      if (exitTimerRef.current !== null) {
        window.clearTimeout(exitTimerRef.current);
        exitTimerRef.current = null;
      }
    };
  }, [handleImageReady]);

  const loadingScreen = (
    <div
      aria-hidden={isImageReady}
      aria-label="Cargando la imagen principal"
      className="fixed inset-0 z-9999 flex items-center justify-center bg-white px-6 text-forest-deep"
      role="status"
    >
      <div
        className={`flex w-full max-w-4xl items-center justify-center gap-2 transition-opacity duration-700 ease-out sm:gap-3 md:gap-4 ${isImageReady ? "opacity-0" : "animate-rise-in"}`}
      >
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
  );

  return (
    <>
      <Image
        alt={alt}
        aria-hidden={alt ? undefined : true}
        className={className}
        fill
        onError={handleImageReady}
        onLoad={handleImageReady}
        preload
        quality={quality}
        ref={imageRef}
        sizes="100vw"
        src={src}
      />
      {showLoadingScreen &&
        (!isImageReady || isExiting) &&
        (portalRoot ? createPortal(loadingScreen, portalRoot) : loadingScreen)}
    </>
  );
}
