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
    label: "Hermandad",
    href: "/hermandad",
    links: [
      { label: "Historia", href: "/hermandad/historia" },
      { label: "Fundadores", href: "/hermandad/fundadores" },
      { label: "Presidentes", href: "/hermandad/presidentes" },
      { label: "Vida de Hermandad", href: "/hermandad/vida" },
    ],
  },
  {
    label: "San Martin De Porres",
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
    label: "Festividad",
    href: "/fiesta",
    links: [],
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
  { label: "Actualidad", href: "/noticias", links: [] },
];

export const footerNavigation: NavigationLink[] = [
  { label: "Hermandad", href: "/hermandad" },
  { label: "Historia", href: "/hermandad/historia" },
  { label: "San Martin De Porres", href: "/san-martin-de-porres" },
  { label: "Festividad", href: "/fiesta" },
  { label: "Memoria", href: "/memoria" },
  { label: "Actualidad", href: "/noticias" },
  { label: "Contacto", href: "/contacto" },
];
