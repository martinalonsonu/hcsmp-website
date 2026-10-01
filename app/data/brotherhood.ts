export type FoundingFigure = {
  id: string;
  name: string;
  note: string;
};

export type PresidencyReference = {
  id: string;
  name: string;
  context?: string;
  date: string;
};

export const foundingFigures: FoundingFigure[] = [
  {
    id: "victorino-collantes-sipan",
    name: "Victorino Collantes Sipán",
    note: "Fundador y Primer Presidente.",
  },
  {
    id: "eleodoro-garcia-nicho",
    name: "Eleodoro García Nicho",
    note: "Fundador.",
  },
  {
    id: "nicolas-nicho",
    name: "Nicolás Nicho",
    note: "Fundador",
  },
  {
    id: "alcides-fernandez",
    name: "Alcides Fernández",
    note: "Fundador.",
  },
  {
    id: "jorge-nunez",
    name: "Jorge Núñez",
    note: "Fundador y primer presidente reconocido eclesialmente",
  },
  {
    id: "jorge-nicho",
    name: "Jorge Nicho Mauricio",
    note: "Fundador",
  },
];

export const firstSisters = [
  "Graciela Grados",
  "Norma Díaz",
  "Milagros Navarro",
];

export const presidencyReferences: PresidencyReference[] = [
  {
    id: "victorino-collantes",
    name: "Victorino Collantes Sipán",
    context: "Primer presidente de la Hermandad.",
    date: "Primer presidente",
  },
  {
    id: "jorge-nunez",
    name: "Jorge Núñez",
    context:
      "Primer presidente reconocido por la autoridad eclesial diocesana.",
    date: "1990 · 1991",
  },
  {
    id: "martin-nunez-1999-2000",
    name: "Hno. Martin Nuñez Azahuanche",
    date: "1999–2000",
    context:
      "En el año 2000, durante las bodas de plata, se realizó el primer recorrido al centro de Huacho.",
  },
  {
    id: "norma-diaz-2001-2002",
    name: "Hna. Norma Díaz Salinas",
    date: "2001–2002",
  },
  {
    id: "cesar-diaz-valladares-2003-2004",
    name: "Hno. César Díaz Valladares",
    date: "2003–2004",
  },
  {
    id: "cesar-quineche-grados-2005-2006",
    name: "Hno. César Quineche Grados",
    date: "2005–2006",
  },
  {
    id: "martin-nunez-2007",
    name: "Hno. Martin Nuñez Azahuanche",
    date: "2007",
  },
  {
    id: "victor-villarreal-mauricio-2008",
    name: "Hno. Victor Villarreal Mauricio",
    date: "2008",
  },
  {
    id: "martin-nunez-2009",
    name: "Hno. Martin Nuñez Azahuanche",
    date: "2009",
  },
  {
    id: "mercedes-pimentel-chang-2010",
    name: "Hna. Mercedes Pimentel Chang",
    date: "2010",
  },
  {
    id: "martin-nunez-2011",
    name: "Hno. Martin Nuñez Azahuanche",
    date: "2011",
  },
  {
    id: "graciela-grados-ruiz-2012",
    name: "Hna. Graciela Grados Ruiz",
    date: "2012",
  },
  {
    id: "alberto-aguirre-la-rosa-2013",
    name: "Hno. Alberto Aguirre La Rosa",
    date: "2013",
  },
  {
    id: "alberto-aguirre-la-rosa-2014",
    name: "Hno. Alberto Aguirre La Rosa",
    date: "2014",
  },
  {
    id: "martin-nunez-2015",
    name: "Hno. Martin Nuñez Azahuanche",
    date: "2015",
  },
  {
    id: "carlos-solano-sanchez-2016",
    name: "Hno. Carlos Solano Sánchez",
    date: "2016",
  },
  {
    id: "alberto-aguirre-la-rosa-2017",
    name: "Hno. Alberto Aguirre La Rosa",
    date: "2017",
  },
  {
    id: "milagros-navarro-zapata-2018",
    name: "Hna. Milagros Navarro Zapata",
    date: "2018",
  },
  {
    id: "alberto-aguirre-la-rosa-2019",
    name: "Hno. Alberto Aguirre La Rosa",
    date: "2019",
  },
  {
    id: "martin-nunez-2020-2021",
    name: "Hno. Martin Nuñez Azahuanche",
    date: "2020–2021",
  },
  {
    id: "julio-diaz-garcia-2022",
    name: "Hno. Julio Diaz García",
    date: "2022",
  },
  {
    id: "diego-mauricio-torres-2023",
    name: "Hno. Diego Mauricio Torres",
    date: "2023",
  },
  {
    id: "luis-flores-montes-2024",
    name: "Hno. Luis Flores Montes",
    date: "2024",
  },
  {
    id: "diego-mauricio-torres-2025",
    name: "Hno. Diego Mauricio Torres",
    date: "2025",
    context: "Año de celebración de las bodas de oro de la Hermandad.",
  },
  {
    id: "francisco-chilet-andaviza-2026",
    name: "Hno. Francisco Chilet Andaviza",
    date: "2026",
  },
];
