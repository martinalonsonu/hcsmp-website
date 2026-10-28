import { assetUrl } from "@/models/shared/assets";

type PageBackground = { src: string; position: string };

const pageBackgrounds: Readonly<Record<string, PageBackground>> = {
  "/hermandad": {
    src: assetUrl("estandarte-1.jpg"),
    position: "object-center",
  },
  "/hermandad/presidentes": {
    src: assetUrl("presidentes.jpg"),
    position: "object-[center_48%]",
  },
  "/hermandad/fundadores": {
    src: assetUrl("primeros-pasos.jpg"),
    position: "object-[center_55%]",
  },
  "/hermandad/pilares": {
    src: "https://hcsmpcb.wordpress.com/wp-content/uploads/2026/10/70595698_2344695052244982_6646925837222281216_n.jpg",
    position: "object-[center_48%] md:object-[center_35%]",
  },
};

export function getPageBackground(path: string): PageBackground | undefined {
  return pageBackgrounds[path];
}
