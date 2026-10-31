import { ArrowRight, CalendarDays } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getNewsArticle } from "@/models/blog/news";
import { wordpressImageUrl } from "@/models/shared/assets";

const programSlug = "programa-festividad-san-martin-2026";
const processionalImage = wordpressImageUrl(
  "https://hcsmpcb.wordpress.com/wp-content/uploads/2026/10/489105222_9402938193087264_7697141976573185879_n.jpg",
  1200,
);

export function HomeFestivitySection() {
  const program = getNewsArticle(programSlug);

  return (
    <section
      className="mt-6 border-t border-line bg-ink sm:mt-0 sm:bg-transparent sm:py-16 md:py-20"
      id="fiesta"
      aria-labelledby="home-festivity-title"
    >
      <div className="site-container max-sm:w-full">
        <div className="grid overflow-hidden bg-ink text-paper sm:border sm:border-line md:grid-cols-[1.05fr_0.95fr]">
          <div className="border-t-2 border-clay px-6 py-9 sm:p-10 lg:p-12">
            <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-paper/80 sm:text-xs">
              <span aria-hidden="true" className="h-px w-8 shrink-0 bg-clay" />
              Noviembre · Cruz Blanca
            </p>
            <h2
              className="mt-6 max-w-xl font-display text-3xl font-normal leading-[1.2] sm:text-4xl lg:text-5xl"
              id="home-festivity-title"
            >
              Solemne Festividad{" "}
              <span className="mt-1 block text-[#b89b5e]">2026</span>
            </h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-paper/80">
              Una tradición de fe y encuentro que cada noviembre reúne a nuestra
              comunidad en torno a San Martín de Porres.
            </p>
            {program && (
              <p className="mt-7 flex items-start gap-3 border-t border-paper/20 pt-5 text-xs leading-6 text-paper/80">
                <CalendarDays
                  aria-hidden="true"
                  className="mt-1 size-4 shrink-0 text-[#b89b5e]"
                />
                {program.date}
              </p>
            )}
            <Link
              className="group mt-7 inline-flex min-h-12 w-full items-center justify-between gap-5 border border-paper bg-paper px-5 py-3 text-xs font-semibold text-ink transition-colors hover:border-white hover:bg-white focus-visible:outline-paper sm:w-fit"
              href={`/blog/${programSlug}/`}
            >
              Ver programa de la festividad
              <ArrowRight
                aria-hidden="true"
                className="size-4 shrink-0 transition-transform motion-safe:group-hover:translate-x-1"
              />
            </Link>
          </div>
          <figure className="flex min-w-0 flex-col border-t border-paper/20 md:border-l md:border-t-0">
            <div className="relative aspect-[4/3] overflow-hidden bg-forest sm:aspect-[16/10] md:aspect-auto md:min-h-80 md:flex-1">
              <Image
                alt="Hermanos de la Hermandad acompañan a San Martín de Porres en procesión junto a una alfombra floral"
                className="object-cover object-[35%_center]"
                fill
                quality={90}
                sizes="(max-width: 767px) 100vw, (max-width: 1344px) 48vw, 610px"
                src={processionalImage}
              />
            </div>
            <figcaption className="flex flex-wrap items-center justify-between gap-x-5 gap-y-1 border-t border-paper/20 px-6 py-4 text-[10px] leading-5 text-paper/70 sm:px-8">
              <span>Fe y tradición en las calles de Cruz Blanca</span>
              <span className="uppercase tracking-[0.12em]">
                Archivo de la Hermandad
              </span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
