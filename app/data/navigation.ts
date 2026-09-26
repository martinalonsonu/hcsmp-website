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
    ],
  },
  {
    label: "San Martín",
    href: "/san-martin",
    links: [
      { label: "Su vida", href: "/san-martin/vida" },
      { label: "Espiritualidad", href: "/san-martin/espiritualidad" },
    ],
  },
  {
    label: "Fiesta",
    href: "/fiesta",
    links: [
      { label: "Programa", href: "/fiesta/programa" },
      { label: "Procesión", href: "/fiesta/procesion" },
      { label: "Recorridos", href: "/fiesta/recorridos" },
    ],
  },
  {
    label: "Vida de Hermandad",
    href: "/vida-de-hermandad",
    links: [
      { label: "Formación", href: "/vida-de-hermandad/formacion" },
      { label: "Servicio", href: "/vida-de-hermandad/servicio" },
      { label: "Actividades", href: "/vida-de-hermandad/actividades" },
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
  { label: "San Martín", href: "/san-martin" },
  { label: "Fiesta", href: "/fiesta" },
  { label: "Vida de Hermandad", href: "/vida-de-hermandad" },
  { label: "Memoria", href: "/memoria" },
  { label: "Noticias", href: "/noticias" },
  { label: "Contacto", href: "/contacto" },
];
