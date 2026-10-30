import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { SectionIndex } from "@/components/shared/section-index";
import { practices } from "@/models/vida/practices";

export default function CommunityLifePage() {
  return (
    <>
      <section className="border-b border-line py-16 md:py-24">
        <div className="site-container ">
          <Breadcrumbs items={[{ label: "Vida y misión" }]} />
          <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.16em] text-clay-text">
            Vida y misión
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-4xl font-normal leading-[1.12] sm:text-5xl md:mt-5 md:text-6xl">
            La fe toma forma en lo cotidiano.
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-muted sm:text-base md:mt-6 md:leading-8">
            Nuestra vida comunitaria se construye con gestos sencillos:
            reunirnos, escucharnos, aprender y estar disponibles para servir.
          </p>
        </div>
      </section>
      <SectionIndex
        label="Prácticas de vida comunitaria"
        items={practices.map((practice) => ({
          id: "practica-" + practice.number,
          label: practice.title,
        }))}
      />
      <section className="py-16 md:py-24">
        <div className="site-container">
          <div className="mb-10 grid gap-4 md:grid-cols-[0.65fr_1.35fr] md:gap-16">
            <p className="eyebrow">Un ritmo compartido</p>
            <h2 className="max-w-2xl font-display text-3xl font-normal leading-tight sm:text-4xl">
              Espacios para encontrarnos y crecer.
            </h2>
          </div>
          <div className="border-t border-ink">
            {practices.map(({ number, title, text }) => (
              <article
                className="grid grid-cols-[3rem_1fr] gap-5 border-b border-line py-8 sm:grid-cols-[5rem_1fr] md:grid-cols-[0.65fr_1.35fr] md:gap-16 md:py-10"
                id={"practica-" + number}
                key={number}
              >
                <span
                  aria-hidden="true"
                  className="font-display text-3xl leading-none text-clay sm:text-5xl md:text-6xl"
                >
                  {number}
                </span>
                <div className="grid gap-3 lg:grid-cols-[0.7fr_1.3fr] lg:gap-10">
                  <h3 className="font-display text-2xl font-normal sm:text-3xl">
                    {title}
                  </h3>
                  <p className="max-w-xl text-sm leading-7 text-muted sm:text-base">
                    {text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-forest-deep py-16 text-white md:py-24">
        <div className="site-container grid gap-8 md:grid-cols-[1fr_0.4fr] md:items-end md:gap-20">
          <div>
            <p className="text-xs uppercase tracking-[0.17em] text-white/65">
              Ven a conocernos
            </p>
            <h2 className="mt-6 max-w-3xl font-display text-3xl font-normal leading-tight sm:text-4xl lg:text-5xl">
              Siempre hay lugar para una persona más.
            </h2>
          </div>
          <Link
            className="inline-flex min-h-12 w-fit items-center justify-between gap-16 border-b border-clay text-sm font-medium transition-colors hover:text-white/70"
            href="/contacto"
          >
            Acércate <ArrowUpRight aria-hidden="true" size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
