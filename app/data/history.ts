import { assetUrl } from "@/app/data/assets";

export type HistoryChapter = {
  id: string;
  eyebrow: string;
  title: string;
  paragraphs: string[];
  image?: {
    src: string;
    alt: string;
    caption: string;
  };
  position?: string;
  facts?: {
    date: string;
    title: string;
    detail: string;
  }[];
};

export const historyChapters: HistoryChapter[] = [
  {
    id: "tradition",
    eyebrow: "Memoria oral",
    title: "Entre la fe popular y la historia real",
    paragraphs: [
      "Una tradición oral cuenta que la imagen de San Martín llegó por barco desde muy lejos, cruzando océanos. Algunas versiones dicen que venía desde España y que recorrió distintos templos del norte chico, probablemente Huaura y Végueta, antes de encontrar su lugar en Cruz Blanca.",
      "Según estos relatos, el Santo se resistía a permanecer en otros lugares y finalmente fue acogido en el templo del barrio de Cruz Blanca. La comunidad lo reconoció como protector. Esta historia pertenece a la memoria devocional transmitida por generaciones; se presenta como tradición oral, no como un hecho documentalmente demostrado.",
    ],
  },
  {
    id: "image-and-mayordomia",
    eyebrow: "1875 · 1892",
    title: "La imagen titular y la Mayordomía",
    paragraphs: [
      "Durante la restauración realizada en 2018 se recuperó la placa original pintada en la espalda de la imagen. La información transcrita de esa placa atribuye la obra a M. Benjamín Arias, en Lima, y señala que fue encargada por José Chilet.",
      "La memoria histórica compartida sitúa el traslado de la imagen al templo de Cruz Blanca y la fundación de la Mayordomía del Señor del Auxilio Fray Martín de Porres el 5 de noviembre de 1892 (hoy nuestra institución hermana, la Mayordomía de San Martín de Porres de Cruz Blanca).",
    ],
    facts: [
      {
        date: "20 de noviembre de 1875",
        title: "La escultura queda concluida",
        detail:
          "Fecha consignada en la placa recuperada durante la restauración de 2018.",
      },
      {
        date: "5 de noviembre de 1892",
        title: "Traslado y Mayordomía",
        detail:
          "La imagen llega al templo de Cruz Blanca y se funda la Mayordomía del Señor del Auxilio Fray Martín de Porres.",
      },
    ],
    image: {
      src: "https://hcsmpcb.wordpress.com/wp-content/uploads/2026/10/651244755_26049865191301302_111588460350318562_n.jpg",
      alt: "Estampa antigua de la imagen.",
      caption: "Antigua estampa de la imagen de San Martin de Porres",
    },
    position: "center 10%",
  },
  {
    id: "earthquake-and-pilgrimage",
    eyebrow: "1966 · 1967",
    title: "El terremoto y las primeras peregrinaciones",
    paragraphs: [
      "El 17 de octubre de 1966, un terremoto sacudió la costa de Huacho. Según la memoria local, las torres de la antigua iglesia matriz colapsaron y el templo parroquial de Cruz Blanca, que resguardaba la imagen, quedó destruido.",
      "El 23 de abril de 1967 se formó en el local del Círculo Deportivo de Cruz Blanca el Comité Central Pro-Construcción del Templo de San Martín de Porres, presidido por el señor Marcelino Mundo. En esos años la imagen comenzó a peregrinar por distintos sectores del norte chico.",
    ],
    image: {
      src: "https://hcsmpcb.wordpress.com/wp-content/uploads/2026/10/29683490_10211613813357475_1888083931312422912_n.jpg",
      alt: "Peregrinaciones de la imagen.",
      caption: "Peregrinaciones luego del terremoto del 66.",
    },
    position: "center 25%",
  },
  {
    id: "beginnings-and-recognition",
    eyebrow: "1972 · 1974 · 1975 · 1991",
    title: "Los primeros pasos y el reconocimiento eclesial",
    paragraphs: [
      "Los primeros indicios de reuniones organizadas de devotos aparecen alrededor de 1972, bajo el nombre de Asociación de Hermanos Devotos de San Martín de Porres. Entre las figuras recordadas en los antecedentes compartidos están Victorino Collantes Sipán, señalado como primer presidente; Eleodoro García Nicho, Nicolás Nicho, Alcides Fernández y Jorge Núñez, entre otros.",
      "Los documentos y recuerdos conservados presentan dos fechas relacionadas con el nacimiento institucional. Un sello señala el 5 de noviembre de 1974. Al perderse los libros fundacionales y para formalizar el reconocimiento eclesiástico, se fijó como fecha de fundación institucional el 3 de noviembre de 1975. Se mantienen ambas referencias con su procedencia, valorando en ellas una riqueza de nuestra historia.",
      "En octubre de 1991, durante el periodo del hermano Jorge Núñez y bajo el episcopado de monseñor Lorenzo León Alvarado, la Diócesis de Huacho otorgó el reconocimiento episcopal. El Decreto Episcopal N.° 01, Registro N.° 088, formalizó el nombre que continúa hasta hoy: Hermandad de Cargadores de San Martín de Porres.",
    ],
    image: {
      src: "https://hcsmpcb.wordpress.com/wp-content/uploads/2026/10/00005409-rotated-1-e1791380815329.jpg",
      alt: "Hermandad en pleno.",
      caption: "Nuestra hermandad. Año 2003",
    },
    position: "center 50%",
    facts: [
      {
        date: "1974 y 1975",
        title: "Dos referencias fundacionales",
        detail:
          "La documentación y la memoria institucional conservan ambas fechas y sus distintos contextos.",
      },
      {
        date: "29 de octubre de 1991",
        title: "Decreto Episcopal N.° 01",
        detail:
          "Reconocimiento episcopal y adopción del nombre actual; Registro N.° 088.",
      },
    ],
  },
  {
    id: "expansion-and-inclusion",
    eyebrow: "Décadas de 1990 y 2000",
    title: "Expansión, inclusión y nuevos recorridos",
    paragraphs: [
      "La Hermandad fue ampliando su presencia. Los primeros recorridos se realizaban dentro del barrio de Cruz Blanca; con el tiempo se extendieron hacia la avenida Félix B. Cárdenas, El Milagro y la antigua Panamericana Norte.",
      "Luego de varios años de fundada la institución se aprobó la incorporación de las mujeres a la vida institucional. La rama femenina, conocida como Hermanas Sahumadoras, tomó forma organizativa en 1993 y recibió oficialmente a sus primeras integrantes en 1994: Graciela Grados, Norma Díaz y Milagros Navarro.",
      "El recorrido hacia el centro de Huacho marcó otro momento. El primer recorrido en esa dirección se realizó el 3 de noviembre de 2000, durante las bodas de plata, en el periodo del hermano Martín Núñez Azahuanche. La ruta incluyó el Hospital Regional, EsSalud, la Catedral de Huacho y la avenida 28 de Julio.",
      "Entre los hermanos recordados por impulsar esa expansión figura el hermano Víctor Vega, promotor de llevar a San Martín al corazón de la ciudad. Lamentablemente no pudo ver su deseo cumplido en vida.",
    ],
    image: {
      src: "https://hcsmpcb.wordpress.com/wp-content/uploads/2026/10/00005235.jpg",
      alt: "Salida Procesional.",
      caption: "Salida Procesional. 03 de noviembre de 1999.",
    },
    position: "center 50%",
  },
  {
    id: "jubilee-2012",
    eyebrow: "2012 · Cincuenta años de canonización",
    title: "La imagen llega a la Catedral de Huacho",
    paragraphs: [
      "En 2012, al cumplirse cincuenta años de la canonización de San Martín de Porres, la imagen titular ingresó a la Catedral de Huacho como parte de las actividades conmemorativas.",
      "Ese mismo año, el 10 de junio, la Hermandad recibió la visita de reliquias de primer grado de San Martín de Porres, un encuentro significativo para la comunidad de Cruz Blanca.",
    ],
    image: {
      src: "https://hcsmpcb.wordpress.com/wp-content/uploads/2026/10/643441610_25899733869647769_2952487230789753739_n.jpg",
      alt: "La imagen llega a la Catedral de Huacho",
      caption: "La imagen llega a la Catedral de Huacho",
    },
    position: "center 50%",
    facts: [
      {
        date: "6 de mayo de 2012",
        title: "Ingreso a la Catedral de Huacho",
        detail:
          "La imagen titular participa en las actividades por los cincuenta años de canonización.",
      },
      {
        date: "10 de junio de 2012",
        title: "Visita de reliquias de primer grado",
        detail: "La comunidad recibe las reliquias de San Martín de Porres.",
      },
    ],
  },
  {
    id: "pandemic",
    eyebrow: "Memoria reciente",
    title: "La pandemia: un reto y una bendición",
    paragraphs: [
      "La pandemia suspendió las actividades públicas, las procesiones y las celebraciones presenciales. La Hermandad atravesó un tiempo de dolor, incertidumbre y pérdidas, pero no se desintegró.",
      "Los hermanos se unieron virtualmente para rezar por las personas enfermas, las familias y la ciudad. Aunque no fue posible acompañar a San Martín por las calles, la institución sostuvo su vínculo y su vocación de servicio.",
      "La experiencia dejó una certeza compartida: el amor y la fraternidad no se cancelan cuando cambia la forma de encontrarse. La vida de Hermandad continuó, y con ella la memoria viva de una devoción.",
    ],
    image: {
      src: "https://hcsmpcb.wordpress.com/wp-content/uploads/2026/10/123794233_3390478907666586_4009985927145514438_n.jpg",
      alt: "Solemnidad de San Martin de Porres en Pandemia.",
      caption: "03 de noviembre 2020: Pandemia. Fotografía: Renzo Aragón.",
    },
  },
];
