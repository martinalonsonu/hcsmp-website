import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { brotherhoodLogoUrl } from "@/models/shared/assets";
import { CurrentYear } from "@/components/shared/current-year";
import { footerNavigation } from "@/models/shared/navigation";

export function SiteFooter() {
  return (
    <footer className="border-t border-clay/40 bg-ink pb-8 pt-14 text-paper sm:pt-20">
      <div className="site-container grid gap-12 pb-12 md:grid-cols-[1.6fr_1fr_1fr] md:gap-14 sm:pb-16">
        <div>
          <Image
            alt="Emblema de la Hermandad de Cargadores de San Martín de Porres"
            className="size-20 object-contain"
            height={80}
            width={80}
            sizes="80px"
            src={brotherhoodLogoUrl}
          />
          <p className="mt-6 max-w-sm font-display text-xl leading-relaxed sm:text-2xl">
            Hermandad de Cargadores de San Martín de Porres
          </p>
          <p className="mt-4 text-xs leading-6 text-paper/65">
            Parroquia La Santa Cruz · Diócesis de Huacho
            <br />
            Cruz Blanca · Santa María, Huaura, Perú
          </p>
        </div>
        <div>
          <p className="border-b border-white/15 pb-4 text-[10px] uppercase tracking-[0.18em] text-paper/65">
            Conoce la Hermandad
          </p>
          <nav
            aria-label="Navegación del pie de página"
            className="mt-3 grid grid-cols-2 gap-x-4 md:grid-cols-1"
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
          <p className="border-b border-white/15 pb-4 text-[10px] uppercase tracking-[0.18em] text-paper/65">
            Sigamos caminando juntos
          </p>
          <p className="mt-6 font-display text-xl leading-relaxed">
            ¡Somos parte de tu historia de amor!
          </p>
          <Link
            className="mt-6 inline-flex min-h-12 items-center justify-between gap-5 border-b border-clay text-xs text-paper"
            href="/contacto"
          >
            Sé parte de la Hermandad{" "}
            <ArrowUpRight aria-hidden="true" size={17} />
          </Link>
          <a
            className="mt-6 flex min-h-11 items-center gap-3 text-xs text-paper/65 hover:text-paper"
            href="https://web.facebook.com/hcsmpcb"
            target="_blank"
            rel="noreferrer"
          >
            Facebook oficial <ArrowUpRight aria-hidden="true" size={13} />
          </a>
        </div>
      </div>
      <div className="site-container flex flex-col gap-4 border-t border-white/15 pt-7 text-[10px] leading-6 text-paper/65 sm:flex-row sm:items-center sm:justify-between">
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
