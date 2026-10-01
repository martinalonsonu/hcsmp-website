import Link from "next/link";
import Image from "next/image";
import { brotherhoodLogoUrl } from "@/app/data/assets";
import { CurrentYear } from "@/app/components/current-year";
import { footerNavigation } from "@/app/data/navigation";

export function SiteFooter() {
  return (
    <footer className="bg-[#111111] py-10 text-[#f4f0e6] md:py-12">
      <div className="mx-auto flex w-[calc(100%-2rem)] max-w-7xl flex-col justify-between gap-8 sm:w-[calc(100%-2.5rem)] md:w-[calc(100%-4rem)] md:flex-row md:items-end">
        <div className="flex items-start gap-4 sm:gap-5">
          <span className="grid size-14 shrink-0 place-items-center sm:size-16">
            <Image
              alt="Emblema de la Hermandad de Cargadores de San Martín de Porres"
              className="size-full object-contain"
              height={1080}
              quality={90}
              src={brotherhoodLogoUrl}
              width={1080}
            />
          </span>
          <div>
            <p className="max-w-md font-display text-lg leading-snug text-[#f4f0e6] sm:text-xl">
              Hermandad de Cargadores de San Martín de Porres
            </p>
            <p className="mt-2 text-xs tracking-wide text-white/65">
              Parroquia La Santa Cruz · Diócesis de Huacho
            </p>
            <p className="mt-4 text-xs text-[#b89b5e]">
              ¡Somos parte de tu historia de amor!
            </p>
          </div>
        </div>
        <nav
          aria-label="Navegación del pie de página"
          className="flex max-w-xl flex-wrap gap-x-5 gap-y-3 text-xs text-white/75"
        >
          {footerNavigation.map(({ href, label }) => (
            <Link
              className="transition-colors hover:text-[#b89b5e] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b89b5e]"
              href={href}
              key={href}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="mx-auto mt-8 flex w-[calc(100%-2rem)] flex-col gap-3 border-t border-white/15 pt-5 text-[11px] text-white/60 sm:w-[calc(100%-2.5rem)] sm:flex-row sm:items-center sm:justify-between md:w-[calc(100%-4rem)]">
        <p>
          © <CurrentYear /> Hermandad de Cargadores de San Martín de Porres.
          Todos los derechos reservados.
        </p>
        <p>
          Hecho con <span aria-label="amor">❤️</span> por{" "}
          <a
            className="font-medium text-[#f4f0e6] underline decoration-[#b89b5e]/70 underline-offset-4 transition-colors hover:text-[#b89b5e] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b89b5e]"
            href="https://martinalonsonu.netlify.app/"
            rel="noreferrer"
            target="_blank"
          >
            @martinalonsonu
          </a>
        </p>
      </div>
    </footer>
  );
}
