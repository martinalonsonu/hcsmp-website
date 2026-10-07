import Image from "next/image";
import { ArrowUpRight, Images } from "lucide-react";

const albums = [
  {
    id: "3390487407665736",
    title: "3 de noviembre 2020",
    detail: "22 elementos",
  },
  {
    id: "1910355455678946",
    title: "Festividad 2018 · 25 de noviembre",
    detail: "35 elementos",
  },
  {
    id: "1884971151550710",
    title: "Festividad 2018 · 3 de noviembre, segunda parte",
    detail: "65 elementos",
  },
  {
    id: "1880803325300826",
    title: "Festividad 2018 · 3 de noviembre",
    detail: "20 elementos",
  },
  {
    id: "1850096075038218",
    title: "Concierto de SIERVAS",
    detail: "29 elementos",
  },
  {
    id: "1465779630136533",
    title: "Festividad 2017",
    detail: "148 elementos",
  },
  {
    id: "1127871543927345",
    title: "Festividad 2016 · 41 años como HCSMP",
    detail: "171 elementos",
  },
  {
    id: "1000354066679094",
    title: "Presentes en los 800 años de Jubileo de la Orden de Predicadores",
    detail: "51 elementos",
  },
  {
    id: "936035059777662",
    title: "Recorrido de guardada 2015",
    detail: "76 elementos",
  },
  {
    id: "907881129259722",
    title: "Fiesta litúrgica · 3 de noviembre",
    detail: "63 elementos",
  },
  {
    id: "902635373117631",
    title: "Fiesta infantil",
    detail: "97 elementos",
  },
  {
    id: "907879375926564",
    title: "Vísperas · 2 de noviembre",
    detail: "143 elementos",
  },
  {
    id: "902625719785263",
    title: "Encuentro con el Señor de los Milagros · 28 de octubre",
    detail: "88 elementos",
  },
  {
    id: "826779284036574",
    title: "Festividad de mayo 2015 · 53 años de su canonización",
    detail: "60 elementos",
  },
  {
    id: "748136581900845",
    title: "Festividad 2014",
    detail: "109 elementos",
  },
  {
    id: "757082991006204",
    title: "Guardada 2014",
    detail: "65 elementos",
  },
  {
    id: "741608295887007",
    title: "Solemnes vísperas y segundo recorrido procesional · 2 de noviembre",
    detail: "46 elementos",
  },
  {
    id: "740620882652415",
    title: "Encuentro con el Señor de los Milagros",
    detail: "58 elementos",
  },
  {
    id: "581485688565936",
    title: "Guardada 2013 · Octava",
    detail: "123 elementos",
  },
  {
    id: "578535938860911",
    title: "Festividad 2013",
    detail: "185 elementos",
  },
  {
    id: "507219329325906",
    title: "Festividad · 51 años de la canonización",
    detail: "86 elementos",
  },
  {
    id: "486298851417954",
    title: "Festividad 2012",
    detail: "55 elementos",
  },
  {
    id: "486288814752291",
    title: "Llegada de las reliquias de San Martín de Porres a Huacho",
    detail: "75 elementos",
  },
  {
    id: "486260708088435",
    title: "50 años de la canonización de San Martín de Porres",
    detail: "129 elementos",
  },
  {
    id: "481028905278282",
    title: "Festividad de canonización 2011",
    detail: "5 elementos",
  },
  {
    id: "481018781945961",
    title: "Festividad noviembre 2010",
    detail: "15 elementos",
  },
  {
    id: "481013268613179",
    title: "Festividad 2009",
    detail: "25 elementos",
  },
  {
    id: "481007955280377",
    title: "3 de noviembre · Festividad 2008",
    detail: "36 elementos",
  },
];

export function PhotoAlbumArchive() {
  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {albums.map((album) => (
        <li
          className="overflow-hidden border border-line bg-white/35"
          key={album.id}
        >
          <a
            className="group block h-full transition-colors hover:bg-white/60"
            href={`https://www.facebook.com/media/set/?set=a.${album.id}&type=3`}
            rel="noreferrer"
            target="_blank"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-mist">
              <Image
                alt={`Fotografía del álbum ${album.title}`}
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                src={`/images/facebook-albums/album-${album.id}.jpg`}
              />
            </div>
            <div className="flex min-h-36 flex-col p-5 sm:p-6">
              <Images
                aria-hidden="true"
                className="mb-4 text-clay"
                size={20}
              />
              <span className="flex items-start justify-between gap-3">
                <span className="font-display text-xl leading-snug group-hover:text-clay">
                  {album.title}
                </span>
                <ArrowUpRight
                  aria-hidden="true"
                  className="mt-1 shrink-0 text-forest-link"
                  size={18}
                />
              </span>
              <span className="mt-2 block text-xs leading-5 text-muted">
                {album.detail} · Álbum público de Facebook
              </span>
              <span className="mt-auto pt-4 text-xs font-semibold text-forest-link">
                Ver álbum
              </span>
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
}
