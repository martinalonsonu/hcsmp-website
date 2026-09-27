import Image from "next/image";
import Link from "next/link";
import { assetUrl } from "@/app/data/assets";

export function HomeClosingSection() {
  return (
    <section
      className="relative isolate flex min-h-[420px] items-center justify-center overflow-hidden bg-[#111111] py-16 text-center text-[#f4f0e6] sm:min-h-[480px] sm:py-24 md:min-h-[540px] md:py-32"
      id="cierre"
    >
      <Image
        alt="Hermanos de la Hermandad reunidos en una fotografía histórica"
        className="object-cover object-center grayscale"
        fill
        quality={90}
        sizes="100vw"
        src={assetUrl("hcsmp-90-1.jpg")}
      />
      <div aria-hidden="true" className="absolute inset-0 bg-black/55" />
      <div className="relative z-10 mx-auto w-[calc(100%-2rem)] max-w-5xl sm:w-[calc(100%-2.5rem)]">
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#b89b5e]">
          #HCSMP
        </p>
        <h2 className="mx-auto mt-7 max-w-4xl font-display text-3xl font-normal leading-tight sm:text-4xl md:text-6xl">
          Una historia que comenzó hace generaciones y continúa en nosotros.
        </h2>
        <p className="mt-7 font-display text-lg italic text-[#d9d0c0] sm:text-2xl">
          Somos parte de tu historia de amor.
        </p>
        <Link
          className="mt-9 inline-flex min-h-12 items-center justify-center border border-white/45 px-5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          href="/contacto"
        >
          Sé parte de nuestra Hermandad{" "}
          <span aria-hidden="true" className="ml-4">
            →
          </span>
        </Link>
      </div>
    </section>
  );
}
