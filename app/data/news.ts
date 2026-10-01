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

**“Somos parte de tu historia de amor.”**`,
  },
];

export const getNewsArticle = (slug: string) =>
  newsArticles.find((article) => article.slug === slug);
