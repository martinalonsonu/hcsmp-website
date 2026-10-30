import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { SectionIndex } from "@/components/shared/section-index";
import { milestones, virtues } from "@/models/san-martin/content";
import Image from "next/image";
import Link from "next/link";
import { AudioPill } from "@/components/shared/audio-pill";
import { ArrowUpRight } from "lucide-react";

export function SanMartinPage() {
  return (
    <>
      <AudioPill left />
      <header className="relative isolate flex min-h-[30rem] items-end overflow-hidden rounded-b-3xl bg-forest-deep text-white-warm md:aspect-auto md:min-h-[min(640px,calc(100svh-5rem))]">
        <Image
          alt="Imagen de San Martín de Porres"
          className="object-cover object-[center_42%]"
          fill
          preload
          quality={90}
          sizes="100vw"
          src="https://hcsmpcb.wordpress.com/wp-content/uploads/2026/10/56478674_2552517768156471_2960457524760805376_n.jpg"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-r from-forest-deep/85 via-forest-deep/50 to-transparent"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-t from-forest-deep/80 via-transparent to-forest-deep/15"
        />

        <div className="site-container relative z-10 pb-10 pt-6 sm:pb-12 sm:pt-10 md:pb-20 md:pt-24">
          <Breadcrumbs inverse items={[{ label: "San Martín de Porres" }]} />

          <div className="mt-6 max-w-4xl sm:mt-28 md:mt-36">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#d9c28f] sm:text-xs">
              Lima · 1579—1639
            </p>

            <h1 className="mt-3 font-display text-4xl font-normal leading-[1.02] sm:mt-4 sm:text-6xl md:text-8xl">
              San Martín
              <span className="block text-[#d9c28f]">de Porres O.P.</span>
            </h1>

            <p className="mt-3 max-w-2xl text-[13px] leading-5 text-white/85 sm:mt-7 sm:text-lg sm:leading-8">
              Una vida de caridad, humildad y servicio.
            </p>
          </div>

          <p className="absolute bottom-4 right-0 hidden max-w-xs text-right text-xs leading-5 text-white/70 md:block">
            Imagen titular de nuestra hermandad. Tomada en los claustros del
            Convento de Santo Domingo de Lima.
          </p>
        </div>
      </header>

      <SectionIndex
        label="Secciones de San Martín de Porres"
        items={[
          { id: "biografia", label: "Biografía" },
          { id: "espiritualidad", label: "Espiritualidad" },
          { id: "servicio", label: "Servicio" },
          { id: "tradicion", label: "Tradición" },
          { id: "legado", label: "Legado" },
          { id: "himno", label: "Himno" },
        ]}
      />

      <section className="py-16 sm:py-20 md:py-28" id="biografia">
        <div className="site-container grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:gap-16 lg:gap-24">
          <div>
            <p className="eyebrow">01 / Su vida: Una historia de amor.</p>

            <h2 className="mt-3 max-w-md font-display text-3xl font-normal leading-tight sm:mt-5 sm:text-4xl md:text-5xl">
              Nacimiento e infancia: crecer en Cristo.
            </h2>
          </div>

          <div className="flex flex-col gap-5 text-sm leading-7 text-muted sm:text-base sm:leading-8">
            <p>
              San Martín de Porres Velázquez nació en Lima, Perú, el 9 de
              diciembre de 1579, durante los primeros años del Virreinato. Fue
              hijo de Juan de Porres, caballero español de la Orden de
              Alcántara, y de Ana Velázquez, mujer libre de origen africano.
              Martín y su hermana Juana crecieron inicialmente junto a su madre;
              por las diferencias sociales y raciales de la época, su padre no
              pudo reconocerlos plenamente durante sus primeros años.
            </p>

            <p>
              A pesar de las dificultades económicas, su madre procuró darle una
              formación cristiana. Desde niño mostró una especial sensibilidad
              hacia quienes sufrían, junto con un carácter humilde y una
              profunda confianza en Dios. Las desigualdades que conoció marcaron
              su cercanía con las personas de origen africano y humilde.
            </p>

            <p>
              En su juventud aprendió el oficio de barbero, que entonces
              comprendía cuidados prácticos de salud, como curar heridas y
              atender dolencias. A los 15 años ingresó al Convento de Nuestra
              Señora del Rosario, de la Orden de Predicadores. Entró como
              donado, realizando labores de servicio sin los mismos derechos que
              los religiosos profesos; con el tiempo profesó como hermano
              cooperador dominico.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-forest-deep py-10 text-white-warm sm:py-14 md:py-16">
        <div className="site-container ">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-clay">
            Hitos de su vida
          </p>

          <ol className="mt-6 grid sm:grid-cols-2 md:mt-8 md:grid-cols-5">
            {milestones.map((milestone) => (
              <li
                className="border-t border-clay/65 py-4 sm:px-4 sm:first:pl-0 md:px-5 md:py-5 md:first:pl-0"
                key={milestone.date}
              >
                <p className="font-display text-xl text-clay sm:text-2xl">
                  {milestone.date}
                </p>

                <h3 className="mt-2 text-sm font-semibold">
                  {milestone.title}
                </h3>

                <p className="mt-1 max-w-xs text-xs leading-5 text-white/65">
                  {milestone.detail}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-28" id="espiritualidad">
        <div className="site-container grid gap-8 sm:gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-center md:gap-20">
          <figure className="mx-auto w-full max-w-md border border-line p-4 md:mx-0 md:p-6">
            <div className="relative aspect-4/5 w-full overflow-hidden bg-black">
              <Image
                alt="Imagen de San Martín de Porres con el hábito dominico y una escoba"
                className="object-contain"
                fill
                quality={90}
                sizes="(max-width: 768px) 100vw, 42vw"
                src="https://hcsmpcb.wordpress.com/wp-content/uploads/2026/10/diseno-sin-titulo-11-1.png"
              />
            </div>
          </figure>

          <div>
            <p className="eyebrow">02 / Contemplar y compartir</p>

            <h2 className="mt-3 max-w-2xl font-display text-3xl font-normal leading-tight sm:mt-5 sm:text-4xl md:text-5xl">
              Dominico, hermano y servidor.
            </h2>

            <p className="mt-5 text-sm leading-7 text-muted sm:text-base sm:leading-8">
              Su espiritualidad dominicana unía oración, contemplación y
              búsqueda de la verdad con una tarea concreta: compartir con los
              demás lo que recibía en su relación con Dios. Fue profundamente
              eucarístico y mariano, con una vida de oración constante.
            </p>

            <div className="mt-7 border-y border-line bg-white/40 px-5 sm:px-7">
              <h3 className="pt-6 font-display text-xl sm:text-2xl">
                El hermano donado
              </h3>

              <p className="pb-6 pt-3 text-sm leading-7 text-muted sm:text-base sm:leading-8">
                Ingresó al convento como donado y aceptó con humildad las tareas
                más sencillas: limpiar, cocinar, atender a los enfermos y ayudar
                en cuanto necesitaba la comunidad. Con el tiempo profesó como
                hermano cooperador dominico. En cada tarea, por sencilla que
                pareciera, encontró una forma de amar a Dios y al prójimo.
              </p>
            </div>

            <p className="mt-5 text-sm leading-7 text-muted sm:text-base sm:leading-8">
              Para Martín, la oración y el servicio eran inseparables: buscar a
              Dios en la contemplación y compartir con los demás aquello que
              había contemplado. Atender al enfermo, alimentar al hambriento o
              acompañar al necesitado era también servir a Dios.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-mist py-16 sm:py-20 md:py-28" id="servicio">
        <div className="site-container grid gap-8 sm:gap-12 md:grid-cols-[1.1fr_0.9fr] md:items-center md:gap-20">
          <div>
            <p className="eyebrow">03 / Una caridad sin distinciones</p>

            <h2 className="mt-3 max-w-2xl font-display text-3xl font-normal leading-tight sm:mt-5 sm:text-4xl md:text-5xl">
              En cada persona reconocía a Cristo.
            </h2>

            <p className="mt-5 text-sm leading-7 text-muted sm:text-base sm:leading-8">
              Se acercó a pobres, enfermos, personas esclavizadas e indígenas,
              niños abandonados y a quienes atravesaban alguna necesidad.
              Atendía sus dolencias, compartía alimentos y buscaba maneras de
              ayudar. Su caridad no hacía distinciones: servir al necesitado era
              servir al mismo Cristo.
            </p>

            <p className="mt-4 text-sm leading-7 text-muted sm:text-base sm:leading-8">
              Organizaba la distribución de alimentos y medicinas, y se cuenta
              que destinó parte de su habitación a recibir a personas
              necesitadas. Muchos acudían al convento para pedir su ayuda; él no
              preguntaba por su origen, color de piel o posición social, sino
              cómo aliviar su sufrimiento.
            </p>

            <p className="mt-4 text-sm leading-7 text-muted sm:text-base sm:leading-8">
              La humildad, la obediencia, la paciencia, la pureza de corazón, la
              pobreza voluntaria y el espíritu de sacrificio dieron forma a su
              vida. Nunca buscó privilegios ni reconocimiento; su servicio
              también acercaba y reconciliaba a las personas.
            </p>

            <p className="mt-4 text-sm leading-7 text-muted sm:text-base sm:leading-8">
              Su preocupación se extendía a los animales abandonados o heridos,
              a los que recogía y cuidaba. La tradición cuenta que procuraba
              alimentarlos y protegerlos junto con las personas que acudían a
              él.
            </p>
          </div>

          <figure className="relative aspect-4/5 overflow-hidden border-b-4 border-clay bg-forest">
            <Image
              alt="Imagen de San Martín de Porres"
              className="object-cover object-center"
              fill
              quality={90}
              sizes="(max-width: 768px) 100vw, 42vw"
              src="https://hcsmpcb.wordpress.com/wp-content/uploads/2026/10/514002267_30044326875215523_4147663507118119381_n.jpg"
            />

            <figcaption className="absolute inset-x-0 bottom-0 bg-forest-deep/90 px-5 py-4 text-xs leading-6 text-white/90">
              Una fe que se hace cuidado y cercanía.
            </figcaption>
          </figure>
        </div>

        <div className="site-container mt-10 grid border-t border-line sm:mt-14 sm:grid-cols-2 md:mt-20 md:grid-cols-4">
          {virtues.map(([virtue, description]) => (
            <div
              className="border-b border-line py-4 sm:px-4 md:border-b-0 md:border-l md:px-5 md:first:border-l-0 md:first:pl-0"
              key={virtue}
            >
              <h3 className="font-display text-xl text-forest-deep sm:text-2xl">
                {virtue}
              </h3>

              <p className="mt-2 text-xs leading-5 text-muted">{description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="py-16 sm:py-20 md:py-28" id="tradicion">
        <div className="site-container grid gap-8 sm:gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-center md:gap-20">
          <figure className="relative aspect-4/5 overflow-hidden border-b-4 border-clay bg-mist">
            <Image
              alt="Imagen de San Martín de Porres"
              className="object-cover object-center"
              fill
              quality={90}
              sizes="(max-width: 768px) 100vw, 42vw"
              src="https://hcsmpcb.wordpress.com/wp-content/uploads/2026/10/476484423_9050730654974688_1188267202507305334_n.jpg"
            />
          </figure>

          <div>
            <p className="eyebrow">04 / Testimonios y tradición hagiográfica</p>

            <h2 className="mt-3 max-w-2xl font-display text-3xl font-normal leading-tight sm:mt-5 sm:text-4xl md:text-5xl">
              Lo extraordinario habla de una vida centrada en Dios.
            </h2>

            <p className="mt-5 text-sm leading-7 text-muted sm:text-base sm:leading-8">
              Los testimonios asociados a los procesos de beatificación y
              canonización recogen relatos de bilocación, levitación, curaciones
              y conocimiento de necesidades de personas lejanas. Pertenecen a la
              tradición hagiográfica y se presentan como testimonios de fe, no
              como hechos comprobados científicamente.
            </p>

            <blockquote className="mt-8 max-w-2xl border-l-2 border-clay py-2 pl-6 font-display text-xl leading-relaxed text-ink sm:pl-8 sm:text-2xl">
              Más que los relatos extraordinarios, permanece una vida entregada
              a la oración y a la caridad.
            </blockquote>
          </div>
        </div>
      </section>

      <section
        className="border-y border-line bg-white/40 py-16 sm:py-20 md:py-28"
        id="legado"
      >
        <div className="site-container grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:gap-16 lg:gap-24">
          <div>
            <p className="eyebrow">05 / Lima · 1639 · 1962</p>

            <h2 className="mt-3 max-w-md font-display text-3xl font-normal leading-tight sm:mt-5 sm:text-4xl md:text-5xl">
              Una vida que sigue dando fruto.
            </h2>
          </div>

          <div className="flex flex-col gap-5 text-sm leading-7 text-muted sm:text-base sm:leading-8">
            <p>
              En 1639, durante una epidemia que afectó Lima, Martín se dedicó
              especialmente a atender a los enfermos. Su propia salud empeoró y
              murió en la ciudad el 3 de noviembre de ese año, a los 59 años.
              Personas de distintos grupos sociales acudieron a despedir a quien
              muchos ya consideraban un hombre santo.
            </p>

            <p>
              La devoción se extendió desde Lima a otros territorios de América.
              El papa Gregorio XVI lo beatificó el 29 de octubre de 1837 y San
              Juan XXIII lo canonizó el 6 de mayo de 1962, en la Basílica de San
              Pedro. Fue el primer santo de origen africano canonizado de
              América. Su fiesta litúrgica se celebra el 3 de noviembre.
            </p>

            <p>
              Más allá de los hechos extraordinarios que le atribuye la
              tradición, la Iglesia destaca su virtud, humildad, caridad y vida
              de servicio. Recordado como fray Martín de la caridad, fue un
              hombre profundamente dominico, dedicado a la oración, al trabajo y
              a los pobres, enfermos y marginados.
            </p>

            <p className="border-l-2 border-clay pl-4 font-display text-lg leading-relaxed text-ink sm:text-2xl">
              San Martín de Porres: hombre de fe, humilde servidor y hermano de
              los pobres y enfermos.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-28" id="himno">
        <div className="site-container grid gap-8 sm:gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-center md:gap-20">
          <figure className="relative aspect-4/5 overflow-hidden border-b-4 border-clay bg-mist md:sticky md:top-40 md:self-start">
            <Image
              alt="Imagen de San Martín de Porres"
              className="object-cover object-center"
              fill
              quality={90}
              sizes="(max-width: 768px) 100vw, 42vw"
              src="https://hcsmpcb.wordpress.com/wp-content/uploads/2026/10/smp-sesion.jpg"
            />
          </figure>

          <div>
            <p className="eyebrow">06 / Aprendamos juntos</p>

            <h2 className="mt-3 max-w-2xl font-display text-3xl font-normal leading-tight sm:mt-5">
              Himno a San Martin de Porres
            </h2>
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-clay-text">
              CORO
            </p>
            <p className="text-sm leading-8 text-muted sm:text-base">
              ¡Gloria inmortal a tu bendito nombre <br /> sol de amor de los
              pobres,
              <br /> San Martín astro divino del Perú de América,
              <br /> de la Iglesia invencible paladín!
              <br /> Son tus hermanos de ideal y patria <br />
              los que hoy llegan fervientes a tu altar;
              <br /> danos la luz que iluminó tu mente,
              <br />
              danos la fe que te enseñó a triunfar. (BIS)
            </p>
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-clay-text">
              ESTROFA I
            </p>
            <p className="text-sm leading-8 text-muted sm:text-base">
              ¡Radiante flor del suelo americano <br />
              que diste olor de augusta santidad;
              <br /> gala y blasón del pueblo peruano;
              <br /> que en ti encendió la antorcha de piedad!
              <br /> Protégenos, tu caridad sagrada
              <br /> todo el Perú ardiente en su emoción;
              <br /> si viene a él tu excelsa llamarada
              <br /> de un pueblo hará
              <br /> tan sólo un corazón
            </p>
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-clay-text">
              ESTROFA II
            </p>
            <p className="text-sm leading-8 text-muted sm:text-base">
              Te dio el solar de Rosa, la divina <br />
              Cuna de ardor para tu noble afán; <br />
              Tu fe sin par, su alma peregrina;
              <br /> Pasión de Dios, Domingo de Guzmán
              <br /> Hoy como ayer, por tu virtud, reciben
              <br /> pan de verdad, los pobres de tu amor <br />
              Hoy como ayer, para su gloria viven
              <br /> Bendícelos y ampara su dolor.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-forest-deep py-12 text-white-warm sm:py-16 md:py-20">
        <div className="site-container flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-clay">
              Una santidad vivida en lo cotidiano
            </p>

            <h2 className="mt-3 max-w-3xl font-display text-2xl font-normal leading-tight sm:mt-4 sm:text-3xl md:text-4xl">
              Servir al hermano también es un camino de santidad.
            </h2>
          </div>

          <Link
            className="inline-flex min-h-11 shrink-0 items-center gap-3 border-b border-clay pb-1 text-sm font-semibold text-white transition-colors hover:text-clay"
            href="/hermandad"
          >
            Conoce la Hermandad
            <ArrowUpRight aria-hidden="true" size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
