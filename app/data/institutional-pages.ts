export type InstitutionalSection = {
  title: string;
  body: string;
  items?: { label: string; detail: string; href?: string }[];
};

export type InstitutionalPage = {
  path: string;
  title: string;
  eyebrow: string;
  description: string;
  introduction: string;
  kind?:
    | "brotherhood"
    | "founders"
    | "presidents"
    | "history"
    | "people"
    | "archive"
    | "news";
  sections: InstitutionalSection[];
  related?: string[];
};

export type HistoricalEvent = {
  id: string;
  date: string;
  year: number;
  title: string;
};

export type BoardMember = {
  id: string;
  role: string;
  name: string;
  year: number;
};

export type President = {
  id: string;
  name: string;
  period: string;
  image?: string;
  biography?: string;
  achievements?: string[];
};

export type FiestaEvent = {
  id: string;
  date: string;
  title: string;
  detail?: string;
  time?: string;
};

export type ProcessionalRouteEvent = {
  id: string;
  date: string;
  title: string;
  detail?: string;
};

export const historicalEvents: HistoricalEvent[] = [
  {
    id: "statue-completed-1875",
    date: "1875",
    year: 1875,
    title: "Se culmina la escultura de Fray Martín de Porres",
  },
  {
    id: "image-and-mayordomia-1892",
    date: "1892",
    year: 1892,
    title: "Traslado de la imagen y fundación de la Mayordomía",
  },
  {
    id: "canonization-1962",
    date: "1962",
    year: 1962,
    title: "Canonización de Fray Martín de Porres",
  },
  {
    id: "devotees-association-1972",
    date: "1972",
    year: 1972,
    title: "Primeros indicios de reuniones de devotos",
  },
  {
    id: "brotherhood-founded-1974",
    date: "1974",
    year: 1974,
    title: "Fundación de la Hermandad",
  },
  {
    id: "name-and-recognition-1991",
    date: "1991",
    year: 1991,
    title: "Reconocimiento episcopal y adopción del nombre actual",
  },
  {
    id: "cathedral-visit-2012",
    date: "6 de mayo de 2012",
    year: 2012,
    title: "Ingreso de la imagen titular a la Catedral de Huacho",
  },
  {
    id: "first-class-relics-2012",
    date: "10 de junio de 2012",
    year: 2012,
    title: "Visita de las reliquias de primer grado de San Martín de Porres",
  },
];

export const boardMembers: BoardMember[] = [
  {
    id: "spiritual-advisor-2026",
    role: "Asesor espiritual",
    name: "Rvdo. P. Hoimer Pérez Tapia",
    year: 2026,
  },
  {
    id: "president-2026",
    role: "Presidente",
    name: "Hno. Francisco José Chilet Andaviza",
    year: 2026,
  },
  {
    id: "vice-president-2026",
    role: "Vicepresidente",
    name: "Hna. Carmen Marilú Cabrel Reyes",
    year: 2026,
  },
  {
    id: "secretary-2026",
    role: "Secretario",
    name: "Hno. Martín Alonso Núñez Navarro",
    year: 2026,
  },
  {
    id: "treasurer-2026",
    role: "Tesorero",
    name: "Hna. Rocío del Pilar Manchego Velásquez",
    year: 2026,
  },
  {
    id: "assistant-treasurer-2026",
    role: "Protesorero",
    name: "Hna. Susana Milagros Argote Espinoza",
    year: 2026,
  },
  {
    id: "auditor-2026",
    role: "Fiscal",
    name: "Hno. César Reynaldo Cunchique Grados",
    year: 2026,
  },
  {
    id: "social-assistance-glenda-2026",
    role: "Vocal de Asistencia Social",
    name: "Hna. Glenda Geovana Yacchi Morales",
    year: 2026,
  },
  {
    id: "social-assistance-nora-2026",
    role: "Vocal de Asistencia Social",
    name: "Hna. Nora Margot Pastor González",
    year: 2026,
  },
  {
    id: "worship-vocal-2026",
    role: "Vocal de Piedad y Culto",
    name: "Hno. Juan Alexander Pacora Marín",
    year: 2026,
  },
  {
    id: "formation-vocal-2026",
    role: "Vocal de Formación Cristiana",
    name: "Hno. Víctor Martín Villarreal Alcántara",
    year: 2026,
  },
];

export const presidents: President[] = [];
export const founders: { name: string; biography?: string; image?: string }[] =
  [];

export const fiestaEvents: FiestaEvent[] = [
  {
    id: "novenario-2026",
    date: "24–28 OCT",
    title: "Solemne novenario",
    time: "8:00 p. m.",
  },
  {
    id: "romeria-infantil-2026",
    date: "01 NOV",
    title: "Romería y show infantil",
  },
  {
    id: "visperas-alfombras-2026",
    date: "02 NOV",
    title: "Vísperas y concurso de alfombras",
  },
  {
    id: "solemnity-procession-2026",
    date: "03 NOV",
    title: "Solemnidad de San Martín de Porres",
    detail: "Recorrido principal",
  },
  {
    id: "guardada-vigils-mass-2026",
    date: "28 NOV",
    title: "Misa de vísperas de guardada",
  },
  {
    id: "last-procession-guardada-2026",
    date: "29 NOV",
    title: "Último recorrido y guardada institucional",
  },
];

export const processionalRouteEvents: ProcessionalRouteEvent[] = [
  {
    id: "canonization-anniversary",
    date: "6 de mayo",
    title: "Aniversario de la canonización de San Martín de Porres",
  },
  {
    id: "alfombras-vigil",
    date: "2 de noviembre",
    title: "Vísperas y concurso de alfombras",
    detail: "Recorrido por el perímetro de la plazuela Félix B. Cárdemas.",
  },
  {
    id: "main-procession",
    date: "3 de noviembre",
    title: "Solemnidad de San Martín de Porres",
    detail: "Recorrido principal con visita al centro de la ciudad de Huacho.",
  },
  {
    id: "institutional-guardada",
    date: "Último domingo de noviembre",
    title: "Último recorrido y guardada institucional",
  },
];

export const institutionalPages: InstitutionalPage[] = [
  {
    path: "/hermandad",
    title: "Hermandad",
    eyebrow: "Una comunidad, una historia",
    description:
      "Identidad, memoria y generaciones de la Hermandad de Cargadores de San Martín de Porres de Cruz Blanca.",
    introduction:
      "Fundado el 3 de Noviembre de 1975 - Parroquia “La Santa Cruz” - Diócesis de Huacho. Reconocido por Decreto Supremo Episcopal N° 01 29-10-1991. Reconocido por Decreto Episcopal N° 01 08-05-2007 / Hermandades",
    kind: "brotherhood",
    sections: [],
    related: [
      "/hermandad/historia",
      "/hermandad/fundadores",
      "/hermandad/presidentes",
      "/hermandad/vida",
    ],
  },
  {
    path: "/hermandad/historia",
    title: "Nuestra historia",
    eyebrow: "Memoria institucional",
    description:
      "Tradición oral, documentos y generaciones en la historia de la Hermandad de Cargadores de San Martín de Porres de Cruz Blanca.",
    introduction:
      "Una historia construida entre la devoción popular, documentos conservados y el compromiso de quienes mantuvieron viva la Hermandad. Algunas fechas aparecen de manera distinta en la memoria documental; aquí distinguimos cada fuente en lugar de ocultar esas diferencias.",
    kind: "history",
    sections: [
      {
        title: "Una memoria que sigue creciendo",
        body: "Esta narración reúne antecedentes y testimonios compartidos por la Hermandad. Las imágenes de archivo sin fecha confirmada se identifican como tales; los documentos históricos se describen según la información disponible.",
      },
    ],
    related: [
      "/hermandad/fundadores",
      "/hermandad/presidentes",
      "/memoria/documentos",
    ],
  },
  {
    path: "/hermandad/fundadores",
    title: "Quienes dieron los primeros pasos",
    eyebrow: "Memoria",
    description:
      "Memoria de fundadores y protagonistas de los primeros años de la Hermandad.",
    introduction:
      "Nombres que marcaron nuestra historia y fijaron nuestro nacimiento. Nuestra institución es también un legado de sus manos.",
    kind: "founders",
    sections: [],
    related: ["/hermandad/historia"],
  },
  {
    path: "/hermandad/presidentes",
    title: "Presidentes de nuestra Hermandad",
    eyebrow: "Continuidad institucional",
    description: "Registro histórico de las presidencias de la Hermandad.",
    introduction:
      "Los nombres que dirigieron nuestra institución. Su legado, aporte, gestión y dirigencia es guía para las nuevas generaciones martinianas",
    kind: "presidents",
    sections: [],
    related: ["/hermandad/historia"],
  },
  {
    path: "/san-martin-de-porres",
    title: "San Martín de Porres",
    eyebrow: "Santo dominico peruano",
    description:
      "Biografía, espiritualidad dominicana y legado de caridad de San Martín de Porres.",
    introduction:
      "Nacido en Lima en 1579, San Martín de Porres hizo de la contemplación una vida de humildad, fraternidad y servicio, especialmente junto a las personas pobres y enfermas.",
    sections: [],
    related: ["/hermandad"],
  },
  {
    path: "/san-martin",
    title: "San Martín de Porres",
    eyebrow: "Santo dominico peruano",
    description:
      "Biografía, espiritualidad dominicana y legado de caridad de San Martín de Porres.",
    introduction:
      "Nacido en Lima en 1579, San Martín de Porres hizo de la contemplación una vida de humildad, fraternidad y servicio, especialmente junto a las personas pobres y enfermas.",
    sections: [],
    related: ["/san-martin-de-porres"],
  },
  {
    path: "/san-martin/vida",
    title: "Vida de San Martín",
    eyebrow: "1579—1639 · Lima",
    description:
      "Una síntesis de la vida de San Martín de Porres y su camino como religioso dominico.",
    introduction:
      "Martín de Porres nació en Lima en 1579 y vivió su vocación religiosa en el convento dominico de Nuestra Señora del Rosario. Su vida quedó asociada al cuidado de personas enfermas y pobres.",
    sections: [
      {
        title: "Canonización",
        body: "Fue canonizado por el papa Juan XXIII en 1962. Su memoria permanece ligada a una vida cristiana expresada en el servicio concreto.",
      },
    ],
    related: ["/san-martin-de-porres#espiritualidad", "/san-martin-de-porres"],
  },
  {
    path: "/san-martin/espiritualidad",
    title: "Espiritualidad y servicio",
    eyebrow: "Seguir sus huellas",
    description:
      "La espiritualidad de San Martín: oración, humildad, fraternidad y servicio.",
    introduction:
      "San Martín de Porres nos recuerda que la fe también se expresa en el servicio, la humildad y el amor al prójimo.",
    sections: [
      {
        title: "Oración y sencillez",
        body: "La tradición cristiana reconoce en San Martín una vida de oración y humildad, vivida en comunidad y orientada al cuidado de los demás.",
      },
      {
        title: "Servicio al prójimo",
        body: "Para la Hermandad, su ejemplo invita a que la devoción se traduzca en fraternidad y cercanía, más allá de la celebración anual.",
      },
    ],
    related: ["/hermandad/vida", "/san-martin-de-porres"],
  },
  {
    path: "/fiesta",
    title: "Fiesta de San Martín",
    eyebrow: "Noviembre · Cruz Blanca",
    description:
      "La tradición, la fe y el encuentro comunitario en honor a San Martín de Porres en Cruz Blanca.",
    introduction:
      "En Cruz Blanca, la fiesta se vive caminando junto a Martín, encontrándonos como comunidad y renovando una devoción que ha acompañado al barrio por generaciones.",
    sections: [
      {
        title: "Una tradición que creció con el barrio",
        body: "La festividad se celebraba tradicionalmente el 4 y 5 de noviembre, en recuerdo de la llegada de la imagen de San Martín de Porres a nuestro barrio, y era organizada por la Mayordomía. Con el nacimiento de la Hermandad, se sumaron al calendario las salidas del 6 de mayo, aniversario de su canonización, y del 3 de noviembre, solemnidad de San Martín, que hoy es nuestra fiesta y recorrido principal. En sus primeros años, la imagen recorría el barrio y luego llegó hasta la Urb. Pacocha o Puquio Cano. En el año 2000 realizó por primera vez un recorrido al centro de Huacho: un hecho histórico que se mantiene hasta hoy, con variaciones a lo largo de los años.",
      },
      {
        title: "Noviembre se vive en comunidad",
        body: "Los nueve días del novenario nos preparan para la fiesta mediante la Eucaristía y la oración. El 1 de noviembre, la romería nos reúne para recordar a nuestros difuntos; ese mismo día, los niños del barrio comparten un momento de alegría en el show infantil. El 2 de noviembre, instituciones, vecinos y otros participantes crean las alfombras del tradicional concurso, una costumbre que lleva 20 años acompañándonos. Después de la misa de vísperas, la procesión recorre el perímetro de la plazuela de Cruz Blanca y visita las casas de quienes elaboraron sus alfombras.",
      },
      {
        title: "Caminar juntos durante el año",
        body: "El 6 de mayo salimos para recordar el aniversario de la canonización de San Martín. En noviembre, la procesión de vísperas del día 2 recorre el perímetro de la plazuela Félix B. Cárdemas y visita las casas de quienes prepararon las alfombras; muy temprano el día 3 celebramos la Eucaristía y emprendemos el recorrido principal hacia el centro de Huacho, para regresar a nuestro templo a la medianoche. Después, la Mayordomía celebra tradicionalmente los días 4 y 5. El último fin de semana del mes, la guardada institucional nos permite despedir el mes que vivimos con Martín y cerrar las celebraciones con un último recorrido.",
      },
    ],
    related: ["/fiesta/procesion"],
  },
  {
    path: "/fiesta/procesion",
    title: "La procesión",
    eyebrow: "Fe y tradición procesional",
    description:
      "La tradición procesional de la Hermandad en honor a San Martín de Porres.",
    introduction:
      "La procesión es un momento de encuentro y expresión pública de la devoción a San Martín. Su recorrido y horario se comunicarán cuando la organización los confirme.",
    sections: [
      {
        title: "Caminar en comunidad",
        body: "La experiencia procesional forma parte de una vida de Hermandad que se extiende durante todo el año.",
      },
    ],
    related: ["/fiesta"],
  },
  {
    path: "/hermandad/vida",
    title: "Vida de Hermandad",
    eyebrow: "Vida Eclesial",
    description:
      "Formación, servicio, fraternidad y actividades de la Hermandad.",
    introduction:
      "La vida de la Hermandad no se limita a noviembre. Se expresa en la formación, el encuentro y el servicio compartido.",
    sections: [
      {
        title: "Formación cristiana",
        body: "Crecer en la fe también forma parte de nuestro camino como hermanos. Vivimos la fe inspirados por la figura de San Martin de Porres. Su espiritualidad es la base de nuestro carisma: humildad, oración, caridad.",
      },
      {
        title: "Servicio y apostolado",
        body: "A ejemplo de San Martín, buscamos que nuestra devoción se traduzca en servicio y cercanía con quienes más lo necesitan. Anualmente nuestra institución fija objetivos de acción social. ¡Somos la extensión de las manos de Martin!",
      },
      {
        title: "Encuentros y actividades",
        body: "La vida de la Hermandad se fortalece en el encuentro y en las actividades compartidas. Mensualmente nos reunimos los primeros domingos a las 11:00 AM. en donde compartimos nuestra Asamblea General. En ella damos opiniones, tomamos decisiones, y vivimos nuestra devoción. Adicionalmente tenemos diversas actividades que nos permiten formar lazos de hermandad.",
      },
    ],
    related: ["/hermandad", "/hermandad/historia", "/san-martin-de-porres"],
  },
  {
    path: "/memoria",
    title: "Nuestra memoria",
    eyebrow: "Archivo vivo",
    description:
      "Fotografías, documentos, programas y videos de la historia de la Hermandad.",
    introduction:
      "Fotografías, documentos, programas y momentos que forman parte de la historia de nuestra Hermandad.",
    kind: "archive",
    sections: [
      {
        title: "Un patrimonio por compartir",
        body: "El archivo digital crecerá con material propio descrito, fechado y revisado con la comunidad.",
      },
    ],
    related: ["/memoria/fotografias", "/memoria/documentos", "/memoria/videos"],
  },
  {
    path: "/memoria/fotografias",
    title: "Fotografías",
    eyebrow: "Archivo visual",
    description:
      "Archivo fotográfico de procesiones, celebraciones y vida de Hermandad.",
    introduction:
      "Explora los álbumes públicos de Facebook con fotografías de procesiones, celebraciones y vida de Hermandad.",
    kind: "archive",
    sections: [
      {
        title: "Álbumes de nuestra historia",
        body: "Cada álbum abre en una pestaña nueva la publicación original de la página oficial de la Hermandad.",
      },
    ],
    related: ["/memoria"],
  },
  {
    path: "/memoria/documentos",
    title: "Documentos",
    eyebrow: "Archivo institucional",
    description:
      "Documentos institucionales y antecedentes históricos de la Hermandad, disponibles para consulta.",
    introduction:
      "Consulta los documentos disponibles de nuestra vida institucional y eclesial.",
    kind: "archive",
    sections: [
      {
        title: "Documentos disponibles",
        body: "Accede a los documentos institucionales disponibles para consulta.",
      },
    ],
    related: ["/memoria", "/hermandad/historia"],
  },
  {
    path: "/memoria/videos",
    title: "Videos y testimonios",
    eyebrow: "Memoria audiovisual",
    description:
      "Registro audiovisual de celebraciones y testimonios de la Hermandad.",
    introduction:
      "Videos y testimonios que ayudan a conservar la memoria de la vida institucional y la devoción compartida.",
    kind: "archive",
    sections: [
      {
        title: "Colección en preparación",
        body: "El material audiovisual se incorporará cuando la Hermandad confirme su procedencia y autorización de publicación.",
      },
    ],
    related: ["/memoria", "/memoria/fotografias"],
  },
  {
    path: "/noticias",
    title: "Noticias y comunicados",
    eyebrow: "Actualidad institucional",
    description:
      "Noticias, comunicados, formación y actividades de la Hermandad.",
    introduction:
      "Un espacio para comunicados oficiales, actividades y noticias de la vida de la Hermandad.",
    kind: "news",
    sections: [],
    related: ["/hermandad/vida", "/fiesta"],
  },
];

export const institutionalPageByPath = new Map(
  institutionalPages.map((page) => [page.path, page]),
);
