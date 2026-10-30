import { PrimaryImageBackground } from "@/components/shared/primary-image-background";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { SectionIndex } from "@/components/shared/section-index";
import { ArrowLeft, CalendarDays, FileText, Landmark } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

const coverImageSrc =
  "https://hcsmpcb.wordpress.com/wp-content/uploads/2026/10/captura-de-pantalla-2026-10-15-020647.png";

const imageSrc =
  "https://hcsmpcb.wordpress.com/wp-content/uploads/2026/10/24-dias-1-1.png";

type ImageFact = {
  label: string;
  value: string;
};

type ImageMilestone = {
  id: string;
  year: string;
  date: string;
  title: string;
  detail: string;
};

type ImageChapter = {
  id: string;
  eyebrow: string;
  title: string;
  paragraphs: string[];
  inscription?: boolean;
  facts?: {
    label: string;
    value: string;
  }[];
};

const imageMilestones: ImageMilestone[] = [
  {
    id: "completion",
    year: "1875",
    date: "20 de noviembre",
    title: "Una fecha que permanece escrita",
    detail:
      "La inscripción de la imagen consigna esta fecha como el día en que se culminó su elaboración.",
  },
  {
    id: "arrival",
    year: "1892",
    date: "5 de noviembre",
    title: "Una nueva historia en Cruz Blanca",
    detail:
      "La tradición local vincula esta fecha con la llegada de la imagen al barrio.",
  },
  {
    id: "restoration",
    year: "2018",
    date: "Restauración",
    title: "Preservar su legado",
    detail:
      "La imagen fue restaurada, en una intervención recordada por la recuperación de su policromía.",
  },
];

const imageFacts: ImageFact[] = [
  {
    label: "Advocación",
    value: "San Martín de Porres",
  },
  {
    label: "Tipología",
    value: "Imagen de candelero",
  },
  {
    label: "Encargo mencionado",
    value: "Don José Chilet",
  },
  {
    label: "Establecimiento mencionado",
    value: "Don M. Benjamín Arias",
  },
  {
    label: "Características visibles",
    value: "Policromía, ojos de vidrio y acabado del cabello",
  },
  {
    label: "Restauración",
    value: "2018",
  },
];

const imageChapters: ImageChapter[] = [
  {
    id: "inscripcion",
    eyebrow: "Testimonio material",
    title: "Una inscripción que atraviesa el tiempo",
    paragraphs: [
      "Las palabras conservadas en la propia imagen constituyen una referencia documental para aproximarnos a su historia. Además de ofrecer una fecha, mencionan a personas vinculadas con su elaboración y un establecimiento de pintura.",
      "Este testimonio permite conocer parte de su pasado, aunque no determina por sí solo quién realizó la talla ni cuál fue la función exacta de cada persona mencionada.",
    ],
  },
  {
    id: "inscripcion-original",
    eyebrow: "Memoria escrita",
    title: "Las palabras que guarda la imagen",
    paragraphs: [
      "Hay recuerdos que se transmiten de generación en generación y otros que permanecen escritos en los objetos que acompañan a una comunidad. Esta inscripción nos acerca a un tiempo lejano y nos invita a conservar su memoria.",
    ],
    inscription: true,
  },
  {
    id: "caracteristicas",
    eyebrow: "Patrimonio artístico",
    title: "Una imagen hecha para ser vestida",
    paragraphs: [
      "Las imágenes de candelero cuentan con una estructura interna que sirve de soporte a las prendas, mientras que las partes visibles conforman su representación. Esta tipología está ligada a una tradición de preparación y arreglo que forma parte de la presentación devocional.",
      "Su valor comprende tanto la dimensión religiosa como la material. Por ello, conocer su composición y documentar sus características contribuye a una mejor comprensión de la obra y a su conservación responsable.",
    ],
    facts: [
      {
        label: "Estructura",
        value: "Soporte preparado para la vestimenta",
      },
      {
        label: "Acabados",
        value: "Elementos pictóricos y detalles visibles de la imagen",
      },
    ],
  },
  {
    id: "llegada",
    eyebrow: "Memoria de Cruz Blanca",
    title: "Una presencia arraigada en el barrio",
    paragraphs: [
      "La tradición local relaciona la llegada de la imagen con el establecimiento de la devoción a San Martín de Porres en Cruz Blanca y con los orígenes de su Mayordomía, como consta en su acta de fundación en 1892. Con el tiempo, su presencia pasó a ocupar un lugar central en las celebraciones y en la memoria compartida de los vecinos.",
      "Esta historia forma parte de una tradición que merece seguir investigándose mediante documentos, fotografías y testimonios de las familias que la han mantenido viva.",
    ],
  },
];

export function BrotherhoodImagePage() {
  return (
    <>
      <header className="relative isolate overflow-hidden border-b border-[#48443d] bg-[#111111] py-10 text-[#f4f0e6] sm:py-14 md:py-20">
        <PrimaryImageBackground
          alt=""
          className="object-cover object-center grayscale"
          quality={90}
          src={coverImageSrc}
        />

        <div aria-hidden="true" className="absolute inset-0 bg-black/65" />

        <div className="site-container relative z-10">
          <Breadcrumbs
            inverse
            items={[
              { label: "La Hermandad", href: "/hermandad" },
              { label: "Nuestra imagen" },
            ]}
          />

          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-[#d3b778] sm:mt-11">
            Patrimonio devocional · Cruz Blanca
          </p>

          <h1 className="mt-3 max-w-5xl font-display text-4xl font-normal leading-[1.08] text-white sm:mt-4 sm:text-5xl md:text-7xl">
            La imagen que guarda nuestra historia
          </h1>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-white/85 sm:mt-6 sm:text-base sm:leading-8">
            Hay imágenes que llegan a formar parte de la vida de todo un pueblo.
            La de nuestro San Martín acompaña la fe, las promesas y los
            recuerdos de quienes encuentran en ella un motivo para reunirse y
            mantener viva su devoción.
          </p>
        </div>
      </header>
      <SectionIndex
        label="Capítulos de esta historia"
        items={[
          { id: "image-overview-title", label: "La imagen" },
          { id: "image-timeline-title", label: "Cronología" },
          { id: "image-facts-title", label: "Ficha descriptiva" },
          ...imageChapters.map((chapter) => ({
            id: chapter.id,
            label: chapter.title,
          })),
        ]}
      />

      <section
        aria-labelledby="image-overview-title"
        className="py-14 sm:py-20 md:py-24"
      >
        <div className="site-container grid gap-10 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] md:items-center md:gap-20">
          <figure className="relative overflow-hidden border border-line bg-mist p-3">
            <Image
              alt="Imagen titular de San Martín de Porres venerada en Cruz Blanca"
              className="max-h-[36rem] w-full object-contain"
              width={900}
              height={1200}
              quality={95}
              sizes="(max-width: 768px) 100vw, 50vw"
              src={imageSrc}
            />

            <figcaption className="px-1 pb-1 pt-4 text-xs leading-6 text-muted">
              Imagen titular de la Hermandad de Cargadores de San Martín de
              Porres de Cruz Blanca.
            </figcaption>
          </figure>

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-clay-text">
              Más que una imagen
            </p>

            <h2
              className="mt-5 font-display text-3xl leading-tight tracking-[-0.035em] sm:text-4xl lg:text-5xl"
              id="image-overview-title"
            >
              Una presencia en la vida de nuestra comunidad
            </h2>

            <p className="mt-6 text-sm leading-8 text-muted sm:text-base sm:leading-8">
              A su alrededor se han encontrado generaciones de familias, devotos
              y hermanos. Su presencia en las celebraciones es parte de una
              memoria colectiva construida con oración, servicio y participación
              comunitaria.
            </p>

            <p className="mt-5 text-sm leading-8 text-muted sm:text-base sm:leading-8">
              La historia de esta imagen es anterior a la de nuestra
              institución. Conocerla por separado nos permite reconocer el
              camino que ha recorrido y el significado que ha adquirido en Cruz
              Blanca.
            </p>

            <Link
              className="mt-8 inline-flex min-h-12 items-center gap-3 border-b border-clay text-xs font-semibold text-forest-link transition-colors hover:text-clay-text"
              href="/hermandad/historia"
            >
              Conocer la historia de la Hermandad
              <ArrowLeft aria-hidden="true" className="rotate-180" size={15} />
            </Link>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="image-timeline-title"
        className="bg-ink py-14 text-paper sm:py-20 md:py-24"
      >
        <div className="site-container ">
          <div className="mb-7 flex flex-col gap-3 sm:mb-10 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-paper/65">
                Hitos históricos
              </p>

              <h2
                className="mt-4 font-display text-3xl tracking-[-0.035em] sm:text-4xl"
                id="image-timeline-title"
              >
                Su historia en el tiempo
              </h2>
            </div>

            <p className="max-w-sm text-xs leading-7 text-paper/65">
              Tres momentos que ayudan a comprender su trayectoria.
            </p>
          </div>

          <ol className="grid gap-8 sm:grid-cols-3 sm:gap-10">
            {imageMilestones.map((milestone) => (
              <li
                className="border-t border-paper/25 pt-6 sm:pt-8"
                key={milestone.id}
              >
                <time
                  className="font-display text-4xl tracking-[-0.04em] text-clay sm:text-5xl"
                  dateTime={milestone.year}
                >
                  {milestone.year}
                </time>

                <h3 className="mt-6 font-display text-lg leading-snug text-paper sm:text-xl">
                  {milestone.title}
                </h3>

                <p className="mt-4 text-xs leading-7 text-paper/70 sm:text-sm">
                  {milestone.detail}
                </p>

                <p className="mt-6 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-paper/65">
                  <CalendarDays aria-hidden="true" size={13} />
                  {milestone.date}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        aria-labelledby="image-facts-title"
        className="border-b border-line bg-mist/50 py-14 sm:py-20 md:py-24"
      >
        <div className="site-container ">
          <div className="grid gap-10 md:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] md:gap-20">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-clay-text">
                Ficha descriptiva
              </p>

              <h2
                className="mt-5 font-display text-3xl leading-tight tracking-[-0.035em] sm:text-4xl md:text-5xl"
                id="image-facts-title"
              >
                Conocer para preservar
              </h2>

              <p className="mt-6 text-sm leading-8 text-muted sm:text-base sm:leading-8">
                Un registro de sus principales características y de los datos
                que conocemos hasta el momento.
              </p>
            </div>

            <dl className="divide-y divide-line border-y border-line">
              {imageFacts.map((fact) => (
                <div
                  className="grid gap-2 py-5 sm:grid-cols-[10rem_1fr] sm:gap-8 sm:py-6"
                  key={fact.label}
                >
                  <dt className="text-[10px] font-semibold uppercase leading-6 tracking-[0.15em] text-muted sm:pt-1">
                    {fact.label}
                  </dt>

                  <dd className="font-display text-lg leading-snug tracking-[-0.02em] sm:text-xl">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <div className="site-container ">
        {imageChapters.map((chapter, index) => (
          <Fragment key={chapter.id}>
            <section
              className="grid gap-8 border-b border-line py-14 sm:gap-10 sm:py-20 md:grid-cols-[minmax(12rem,0.7fr)_minmax(0,1.3fr)] md:gap-20 md:py-24"
              id={chapter.id}
            >
              <div className="md:sticky md:top-36 md:self-start">
                <span
                  aria-hidden="true"
                  className="mb-6 block font-display text-5xl leading-none tracking-[-0.04em] text-clay-text"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
                  {chapter.eyebrow}
                </p>

                <h2 className="mt-4 font-display text-2xl leading-tight tracking-[-0.03em] sm:text-3xl md:text-4xl">
                  {chapter.title}
                </h2>
              </div>

              <div className="min-w-0">
                {chapter.inscription && (
                  <figure className="overflow-hidden border border-line bg-mist/60">
                    <div className="relative aspect-[4/3] bg-ink sm:aspect-[16/10]">
                      <Image
                        alt="Imagen de San Martín de Porres utilizada en la portada de esta página"
                        className="object-contain"
                        fill
                        quality={95}
                        sizes="(max-width: 768px) 100vw, 65vw"
                        src={coverImageSrc}
                      />
                    </div>

                    <figcaption className="border-b border-line px-4 py-3 text-xs leading-5 text-muted sm:px-6 sm:text-xs">
                      La imagen titular, testimonio de una devoción transmitida
                      a través de generaciones.
                    </figcaption>

                    <div className="p-6 sm:p-10">
                      <div className="mb-5 flex items-center gap-2 text-clay-text">
                        <FileText aria-hidden="true" size={17} />

                        <span className="text-xs font-semibold uppercase tracking-[0.15em]">
                          Transcripción de la inscripción
                        </span>
                      </div>

                      <blockquote className="font-display text-xl leading-relaxed tracking-[-0.025em] text-ink sm:text-2xl sm:leading-relaxed">
                        Este Sn. Martin lo mando trabajar Don José Chilet, y se
                        acabó hoy 20 de nbre de 1875. Es hecho en el
                        establecimiento de pintura de Don M. Benjamin Arias.
                      </blockquote>

                      <p className="mt-6 border-t border-line pt-5 text-xs leading-6 text-muted">
                        Se conserva la grafía de la transcripción disponible.
                      </p>
                    </div>
                  </figure>
                )}

                <div className="mt-5 flex flex-col gap-5 sm:gap-6">
                  {chapter.paragraphs.map((paragraph) => (
                    <p
                      className="text-sm leading-8 text-muted sm:text-base sm:leading-8"
                      key={paragraph}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                {chapter.facts && (
                  <dl className="mt-6 divide-y divide-line border-y border-line sm:mt-8">
                    {chapter.facts.map((fact) => (
                      <div
                        className="grid gap-1 py-4 sm:grid-cols-[10rem_1fr] sm:gap-5 sm:py-5"
                        key={fact.label}
                      >
                        <dt className="text-xs font-semibold text-clay-text">
                          {fact.label}
                        </dt>

                        <dd className="font-display text-base sm:text-lg">
                          {fact.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                )}
              </div>
            </section>
          </Fragment>
        ))}
      </div>

      <section className="bg-ink py-14 text-paper sm:py-20">
        <div className="site-container ">
          <div className="grid gap-7 border-l border-clay pl-6 sm:pl-10 md:grid-cols-[auto_1fr] md:items-start md:gap-10">
            <Landmark
              aria-hidden="true"
              className="text-clay"
              size={34}
              strokeWidth={1.4}
            />

            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-paper/65">
                Un legado compartido
              </p>

              <h2 className="mt-5 max-w-2xl font-display text-3xl leading-tight tracking-[-0.035em] sm:text-4xl">
                Somos parte de una historia que continúa
              </h2>

              <p className="mt-6 max-w-3xl text-sm leading-8 text-paper/70 sm:text-base sm:leading-8">
                Recibir una tradición también significa asumir el compromiso de
                cuidarla. Que quienes vengan después puedan conocer esta
                historia y encontrar en ella un motivo para seguir unidos será
                una manera de honrar a quienes nos precedieron.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="site-container flex flex-col gap-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:py-14">
        <Link
          className="inline-flex min-h-12 items-center gap-3 text-xs font-semibold text-forest-link hover:text-clay-text"
          href="/hermandad"
        >
          <ArrowLeft aria-hidden="true" size={15} />
          Volver a La Hermandad
        </Link>

        <Link
          className="button-secondary inline-flex min-h-12 w-fit items-center gap-3 border border-line px-5 text-xs font-semibold text-forest-link transition-colors hover:border-clay hover:text-clay-text"
          href="/archivo/documentos"
        >
          Explorar memoria documental
          <FileText aria-hidden="true" size={15} />
        </Link>
      </div>
    </>
  );
}
