import { brotherhoodLogoUrl } from "@/models/shared/assets";
import { SITE_NAME, SITE_URL, getCanonicalUrl } from "@/models/seo/site";

export type JsonLdValue = Record<string, unknown>;

export const organizationSchema: JsonLdValue = {
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "Hermandad de Cargadores de San Martín de Porres de Cruz Blanca",
  alternateName: "Hermandad de San Martín de Porres de Cruz Blanca",
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: brotherhoodLogoUrl,
  },
  email: "hermandadcargadoressmp@gmail.com",
  telephone: "+51 904 609 195",
  sameAs: [
    "https://web.facebook.com/hcsmpcb",
    "https://www.instagram.com/hcsmpcb/",
    "https://www.youtube.com/@hermandaddesanmartindeporr4803",
  ],
};

export const websiteSchema: JsonLdValue = {
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  inLanguage: "es-PE",
  publisher: { "@id": `${SITE_URL}/#organization` },
};

export function createWebPageSchema({
  name,
  description,
  path,
  type = "WebPage",
}: {
  name: string;
  description: string;
  path: string;
  type?: string;
}): JsonLdValue {
  return {
    "@type": type,
    "@id": `${getCanonicalUrl(path)}#webpage`,
    url: getCanonicalUrl(path),
    name,
    description,
    inLanguage: "es-PE",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

export function createSaintSchema({
  description,
}: {
  description: string;
}): JsonLdValue {
  return {
    "@type": "Person",
    "@id": `${SITE_URL}/#san-martin-de-porres`,
    name: "San Martín de Porres",
    birthDate: "1579-12-09",
    deathDate: "1639-11-03",
    birthPlace: {
      "@type": "Place",
      name: "Lima, Perú",
    },
    description,
    url: getCanonicalUrl("/san-martin-de-porres"),
  };
}

export function createBreadcrumbSchema(
  items: Array<{ name: string; path: string }>,
): JsonLdValue {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map(({ name, path }, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name,
      item: getCanonicalUrl(path),
    })),
  };
}

export function createSiteGraph(...items: JsonLdValue[]): JsonLdValue {
  return {
    "@context": "https://schema.org",
    "@graph": items,
  };
}
