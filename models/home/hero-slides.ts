import { assetUrl, wordpressImageUrl } from "@/models/shared/assets";

export const heroSlides = [
  {
    image: wordpressImageUrl(assetUrl("home_hero.jpg"), 1920),
    description:
      "Nuestra imagen titular, luego de su restauraci\u00f3n en el a\u00f1o 2018, en la sala capitular del Convento de Santo Domingo.",
    imagePosition:
      "translate-y-0 scale-[1.08] object-cover object-top md:translate-y-[-4%] md:object-[center_4%]",
  },
  {
    image: wordpressImageUrl(
      "https://hcsmpcb.wordpress.com/wp-content/uploads/2026/10/45537561_1880803785300780_5270040655920365568_n.jpg",
      1920,
    ),
    description: "Recorrido de Guardada. Noviembre del 2019.",
    imagePosition:
      "translate-y-0 scale-[1.08] object-cover object-[center_40%]",
  },
  {
    image: wordpressImageUrl(
      "https://hcsmpcb.wordpress.com/wp-content/uploads/2026/10/img_4409-1.jpg",
      1920,
    ),
    description:
      "Recorrido del 5 de mayo del 2019. Celebraci\u00f3n por el aniversario de la canonizaci\u00f3n de San Mart\u00edn de Porres.",
    imagePosition:
      "translate-y-0 scale-[1.08] object-cover object-[center_40%]",
  },
  {
    image: wordpressImageUrl(
      "https://hcsmpcb.wordpress.com/wp-content/uploads/2026/10/img_0047-1-1.jpg",
      1920,
    ),
    description:
      "03 de noviembre de 2020. Martin no recorr\u00edo debido a la pandemia.",
    imagePosition:
      "translate-y-0 scale-[1.08] object-cover object-[center_15%]",
  },
];
