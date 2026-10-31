import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { brotherhoodLogoUrl } from "@/models/shared/assets";
import { CurrentYear } from "@/components/shared/current-year";
import { footerNavigation } from "@/models/shared/navigation";

export function SiteFooter() {
  return (
    <footer className="border-t border-clay/40 bg-ink pb-[calc(6rem+env(safe-area-inset-bottom))] pt-8 text-paper sm:pb-8 sm:pt-20">
      <div className="site-container grid gap-6 pb-7 sm:gap-12 sm:pb-16 md:grid-cols-[1.6fr_1fr_1fr] md:gap-14">
        <div className="flex items-start gap-3 sm:block">
          <Image
            alt="Emblema de la Hermandad de Cargadores de San Martín de Porres"
            className="size-14 shrink-0 object-contain sm:size-20"
            height={80}
            width={80}
            sizes="(min-width: 640px) 80px, 56px"
            src={brotherhoodLogoUrl}
          />
          <div className="min-w-0">
            <p className="max-w-sm font-display text-lg leading-snug sm:mt-6 sm:text-2xl sm:leading-relaxed">
              Hermandad de Cargadores de San Martín de Porres
            </p>
            <p className="mt-2 text-xs leading-5 text-paper/65 sm:mt-4 sm:leading-6">
              Parroquia La Santa Cruz · Diócesis de Huacho
              <br />
              Cruz Blanca · Santa María, Huaura, Perú
            </p>
          </div>
        </div>
        <div>
          <p className="border-b border-white/15 pb-2 text-[10px] uppercase tracking-[0.18em] text-paper/65 sm:pb-4">
            Conoce la Hermandad
          </p>
          <nav
            aria-label="Navegación del pie de página"
            className="mt-2 grid grid-cols-2 gap-x-4 sm:mt-3 md:grid-cols-1"
          >
            {footerNavigation.map(({ href, label }) => (
              <Link
                className="inline-flex min-h-11 items-center text-xs text-paper/85 transition-colors hover:text-white hover:underline decoration-clay underline-offset-4"
                href={href}
                key={href}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
        <div>
          <p className="border-b border-white/15 pb-2 text-[10px] uppercase tracking-[0.18em] text-paper/65 sm:pb-4">
            Sigamos caminando juntos
          </p>
          <p className="mt-3 font-display text-lg leading-snug sm:mt-6 sm:text-xl sm:leading-relaxed">
            ¡Somos parte de tu historia de amor!
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 sm:mt-0 sm:block">
            <Link
              className="inline-flex min-h-12 items-center justify-between gap-3 border-b border-clay text-xs text-paper sm:mt-6 sm:gap-5"
              href="/contacto"
            >
              Sé parte de la Hermandad{" "}
              <ArrowUpRight aria-hidden="true" size={17} />
            </Link>
            <a
              className="flex min-h-11 items-center gap-2 text-xs text-paper/65 hover:text-paper sm:mt-6 sm:gap-3"
              href="https://web.facebook.com/hcsmpcb"
              target="_blank"
              rel="noreferrer"
            >
              Facebook oficial <ArrowUpRight aria-hidden="true" size={13} />
            </a>
          </div>
        </div>
      </div>
      <div className="site-container flex flex-col gap-1 border-t border-white/15 pt-4 text-[10px] leading-5 text-paper/65 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:pt-7 sm:leading-6">
        <p>
          © <CurrentYear /> Hermandad de Cargadores de San Martín de Porres.
          Todos los derechos reservados.
        </p>
        <p className="shrink-0">
          Hecho con{" "}
          <span aria-label="amor" className="text-paper">
            ♡
          </span>{" "}
          por{" "}
          <a
            className="text-paper underline decoration-clay underline-offset-4"
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
