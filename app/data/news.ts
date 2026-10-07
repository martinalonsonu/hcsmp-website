export type NewsCategory =
  | "Institucional"
  | "Fiesta"
  | "Formación"
  | "Actividades"
  | "Historia"
  | "Comunicados";

export type NewsArticle = {
  slug: string;
  title: string;
  date: string;
  publishedAt?: string;
  category: NewsCategory;
  eyebrow?: string;
  summary: string;
  image?: string;
  content: string;
};

export const newsArticles: NewsArticle[] = [
  {
    slug: "programa-festividad-san-martin-2026",
    title: "Programa de la Festividad de San Martín de Porres 2026",
    date: "Del 18 de octubre al 30 de noviembre de 2026",
    category: "Fiesta",
    eyebrow: "SOLEMNES CULTOS · CRUZ BLANCA",
    summary:
      "La Hermandad invita a la comunidad a vivir los cultos en honor a San Martín de Porres, con jornadas de oración, solidaridad y tradición.",
    content: `# Programa de festividad en honor a San Martín de Porres

La Hermandad de Cargadores de San Martín de Porres de la Parroquia La Santa Cruz, Diócesis de Huacho, invita a los hermanos, devotos y a toda la comunidad a participar en los solemnes cultos en honor a nuestro santo patrón.

Al recordar los 387 años de la partida de San Martín de Porres al encuentro con el Señor y celebrar el 51.º aniversario de vida institucional de la Hermandad, nos reunimos inspirados por su testimonio de servicio, humildad y caridad. Como nos recuerda el Evangelio: «Cuanto hicisteis a unos de estos hermanos míos más pequeños, a mí me lo hicisteis» (Mt 25, 40).

## Domingo 18 de octubre

- **8:00 a. m.** Jornada espiritual para los miembros de la institución.

## Sábado 24 de octubre

- **8:00 p. m.** Misa y primer día de novena. Tema: *Orientación*.
- **9:00 p. m.** Exhibición fotográfica y de enseres de San Martín de Porres en el salón parroquial.

## Domingo 25 de octubre

- **8:00 p. m.** Misa y segundo día de novena. Tema: *Fe en Dios*.
- **9:00 p. m.** Exhibición fotográfica y de enseres de San Martín de Porres en el salón parroquial.

## Lunes 26 de octubre

- **8:00 p. m.** Misa y tercer día de novena. Tema: *Mortificación*.

## Martes 27 de octubre

- **8:00 p. m.** Misa y cuarto día de novena. Tema: *El Taumaturgo*.

## Miércoles 28 de octubre

- **8:00 p. m.** Misa y quinto día de novena. Tema: *Padre de los pobres*.

## Domingo 1 de noviembre

- **12:00 p. m.** Almuerzo solidario para personas de escasos recursos de los diferentes sectores de nuestra localidad.
- **3:00 p. m.** Show infantil en la losa deportiva del Colegio Félix B. Cárdenas, dirigido a los niños del distrito.

## Lunes 2 de noviembre

- **9:00 a. m.** Romería al Cementerio Campo Santo para honrar la memoria de nuestros hermanos difuntos.
- **6:00 p. m.** Concurso de alfombras.
- **7:00 p. m.** Solemne misa de vísperas en honor a San Martín de Porres, ofrecida por la familia Villarreal Alcántara.
- **8:00 p. m.** Reconocimiento a los ganadores del concurso de alfombras.
- **8:10 p. m.** Juramentación de los nuevos hermanos de la institución.
- **8:25 p. m.** Bendiciones.
- **8:30 p. m.** Primer recorrido procesional de la venerada imagen por el perímetro de la plazuela Félix B. Cárdenas.

## Martes 3 de noviembre · Solemnidad de San Martín de Porres

Se cumplen 387 años de la partida de San Martín de Porres al encuentro con el Señor. La tradición recuerda que, en sus últimos momentos, rodeado por sus hermanos religiosos y con un crucifijo entre las manos, recitó el Credo y pronunció: «Et homo factus est» («Y se hizo hombre»). Con su vida entregada al servicio de Dios y de los más necesitados, continúa siendo ejemplo para nuestra comunidad.

- **8:00 a. m.** Celebración eucarística por la solemnidad de San Martín de Porres y el 51.º aniversario institucional de la Hermandad. Preside S. E. R. Mons. Luis Alberto Barrera Pacheco, M.C.C.J., Administrador Apostólico de la Diócesis de Huacho. Acompaña el coro de la I. E. Parroquial Santa Rosa de Lima.
- **9:30 a. m.** Segundo recorrido procesional de la venerada imagen, con el acompañamiento musical de la Agrupación Musical Los Auténticos del Callao.

### Recorrido procesional

Parroquia La Santa Cruz → Av. Cruz Blanca → Av. Domingo Mandamiento → Av. Mariscal Castilla → Av. San Martín → Jr. Elías Ipince → retorno por Av. San Martín → Óvalo de Huacho → Av. Túpac Amaru → Urb. Los Jardines → Av. Túpac Amaru → Av. La Paz → Urb. Lever Pacocha → Antigua Panamericana → Parroquia La Santa Cruz.

**¡Somos parte de tu historia de amor!**`,
  },
  {
    slug: "recorrido-principal-san-martin-porres",
    title: "Recorrido principal de San Martín de Porres",
    date: "Lunes 3 de noviembre | 09:30 a. m.",
    category: "Comunicados",
    eyebrow: "BOLETÍN INFORMATIVO",
    summary:
      "La Hermandad convoca a sus hermanos, devotos y a toda la comunidad al recorrido principal de San Martín de Porres.",
    image:
      "https://hcsmpcb.wordpress.com/wp-content/uploads/2026/10/whatsapp-image-2026-09-05-at-10.12.46-pm.jpeg",
    content: `La **Hermandad de Cargadores de San Martín de Porres de Cruz Blanca** comunica a todos sus hermanos, devotos y comunidad en general que el próximo **lunes 3 de noviembre**, a partir de las **09:30 a. m.**, se llevará a cabo el **recorrido principal de la venerada imagen de San Martín de Porres**, en el marco de los solemnes cultos en honor a nuestro santo patrón.

La salida tendrá lugar desde la **Parroquia La Santa Cruz**, contando con el acompañamiento musical de la **Agrupación Musical Clase Juvenil** y de la **Agrupación Musical Los Auténticos del Callao**.

### Recorrido procesional

La venerada imagen seguirá la siguiente ruta:

**Parroquia La Santa Cruz → Av. Cruz Blanca → Av. Domingo Mandamiento → Av. Mariscal Castilla → Av. San Martín → Jr. Elías Ipince → retorno por Av. San Martín → Óvalo de Huacho → Av. Túpac Amaru → Urb. Los Jardines → Av. Túpac Amaru → Av. La Paz → Urb. Lever Pacocha → Antigua Panamericana → Parroquia La Santa Cruz.**

Invitamos a toda la comunidad a acompañar con fe y devoción el paso de San Martín de Porres por nuestras calles, renovando juntos nuestro compromiso de seguir su ejemplo de servicio, humildad y caridad hacia nuestros hermanos.

**¡San Martín de Porres, ruega por nosotros!**

**Hermandad de Cargadores de San Martín de Porres de Cruz Blanca**  
*Parroquia La Santa Cruz – Cruz Blanca*

**“¡Somos parte de tu historia de amor!”**`,
  },
];

export const getNewsArticle = (slug: string) =>
  newsArticles.find((article) => article.slug === slug);
