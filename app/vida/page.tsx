import type { Metadata } from "next";
import CommunityLifePage from "@/components/vida/community-life-page";
import { JsonLd } from "@/components/seo/json-ld";
import {
  createBreadcrumbSchema,
  createSiteGraph,
  createWebPageSchema,
} from "@/models/seo/schemas";
import { SITE_NAME, getCanonicalUrl } from "@/models/seo/site";

const communityDescription =
  "Descubre cómo la Hermandad vive su fe en comunidad mediante la oración, la formación, el encuentro y el servicio en Cruz Blanca.";

export const metadata: Metadata = {
  title: "Vida y misión de la Hermandad",
  description: communityDescription,
  alternates: { canonical: "/vida" },
  openGraph: {
    title: "Vida y misión de la Hermandad",
    description:
      "Oración, formación, encuentro y servicio: conoce la vida comunitaria de la Hermandad en Cruz Blanca.",
    url: getCanonicalUrl("/vida"),
    siteName: SITE_NAME,
    type: "website",
  },
};

const communityStructuredData = createSiteGraph(
  createWebPageSchema({
    name: "Vida y misión de la Hermandad",
    description: communityDescription,
    path: "/vida",
    type: "AboutPage",
  }),
  createBreadcrumbSchema([
    { name: "Inicio", path: "/" },
    { name: "Vida y misión", path: "/vida" },
  ]),
);

export default function CommunityLifeRoute() {
  return (
    <>
      <JsonLd data={communityStructuredData} />
      <CommunityLifePage />
    </>
  );
}
