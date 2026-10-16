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
      { label: "Pilares", href: "/hermandad/pilares" },
      { label: "Nuestra imagen", href: "/hermandad/imagen" },
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
    label: "Archivo",
    href: "/archivo",
    links: [
      { label: "Fotografías", href: "/archivo/fotografias" },
      { label: "Documentos", href: "/archivo/documentos" },
      { label: "Videos", href: "/archivo/videos" },
    ],
  },
  { label: "Blog", href: "/blog", links: [] },
];

export const footerNavigation: NavigationLink[] = [
  { label: "Hermandad", href: "/hermandad" },
  { label: "Historia", href: "/hermandad/historia" },
  { label: "San Martin De Porres", href: "/san-martin-de-porres" },
  { label: "Archivo", href: "/archivo" },
  { label: "Blog", href: "/blog" },
  { label: "Contacto", href: "/contacto" },
];
