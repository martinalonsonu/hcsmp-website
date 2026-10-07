export type NavigationLink = {
  label: string;
  href: string;
};

export type NavigationGroup = {
  label: string;
  href: string;
  links: NavigationLink[];
};

export const navigationGroups: NavigationGroup[] = [
  {
    label: "La Hermandad",
    href: "/hermandad",
    links: [
      { label: "Historia", href: "/hermandad/historia" },
      { label: "Fundadores", href: "/hermandad/fundadores" },
      { label: "Presidentes", href: "/hermandad/presidentes" },
      { label: "Vida de Hermandad", href: "/hermandad/vida" },
    ],
  },
  {
    label: "San Martín",
    href: "/san-martin-de-porres",
    links: [
      { label: "Biografía", href: "/san-martin-de-porres#biografia" },
      {
        label: "Espiritualidad",
        href: "/san-martin-de-porres#espiritualidad",
      },
    ],
  },
  {
    label: "Fiesta",
    href: "/fiesta",
    links: [
      { label: "Procesión", href: "/fiesta/procesion" },
    ],
  },
  {
    label: "Memoria",
    href: "/memoria",
    links: [
      { label: "Fotografías", href: "/memoria/fotografias" },
      { label: "Documentos", href: "/memoria/documentos" },
      { label: "Videos", href: "/memoria/videos" },
    ],
  },
  { label: "Noticias", href: "/noticias", links: [] },
];

export const footerNavigation: NavigationLink[] = [
  { label: "La Hermandad", href: "/hermandad" },
  { label: "Historia", href: "/hermandad/historia" },
  { label: "San Martín", href: "/san-martin-de-porres" },
  { label: "Fiesta", href: "/fiesta" },
  { label: "Vida de Hermandad", href: "/hermandad/vida" },
  { label: "Memoria", href: "/memoria" },
  { label: "Noticias", href: "/noticias" },
  { label: "Contacto", href: "/contacto" },
];
