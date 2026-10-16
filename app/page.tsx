import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/json-ld";
import { HomeArchiveSections } from "@/components/home/home-archive-sections";
import { HomeBrotherhoodSection } from "@/components/home/home-brotherhood-section";
import { HomeHero } from "@/components/home/home-hero";
import { HomeIdentitySections } from "@/components/home/home-identity-sections";
import { ScrollRevealSections } from "@/components/shared/scroll-reveal-sections";
import { AudioPill } from "@/components/shared/audio-pill";
import { assetUrl } from "@/models/shared/assets";
import {
  createSiteGraph,
  createWebPageSchema,
  organizationSchema,
  websiteSchema,
} from "@/models/seo/schemas";
import { SITE_NAME, getCanonicalUrl } from "@/models/seo/site";

const homeSocialImage = assetUrl("home_hero.jpg");

export const metadata: Metadata = {
  title: "Hermandad de San Martín de Porres",
  description:
    "Conoce la historia, la fe y las actividades de la Hermandad de Cargadores de San Martín de Porres de Cruz Blanca, Santa María, Huaura.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Hermandad de San Martín de Porres de Cruz Blanca",
    description:
      "Historia, fe, festividad y vida comunitaria de la Hermandad de San Martín de Porres en Cruz Blanca, Santa María, Huaura.",
    url: getCanonicalUrl("/"),
    siteName: SITE_NAME,
    locale: "es_PE",
    type: "website",
    images: [homeSocialImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hermandad de San Martín de Porres de Cruz Blanca",
    description:
      "Historia, fe, festividad y vida comunitaria de la Hermandad en Cruz Blanca, Santa María, Huaura.",
    images: [homeSocialImage],
  },
};

const homeStructuredData = createSiteGraph(
  organizationSchema,
  websiteSchema,
  createWebPageSchema({
    name: "Hermandad de San Martín de Porres de Cruz Blanca",
    description:
      "Historia, fe, festividad y vida comunitaria de la Hermandad de Cargadores de San Martín de Porres en Cruz Blanca, Santa María, Huaura.",
    path: "/",
    type: "WebPage",
  }),
);

export default function HomePage() {
  return (
    <>
      <JsonLd data={homeStructuredData} />
      <HomeHero />
      <ScrollRevealSections>
        <HomeBrotherhoodSection />
        <HomeIdentitySections />
        <HomeArchiveSections />
      </ScrollRevealSections>
      <AudioPill left />
    </>
  );
}
