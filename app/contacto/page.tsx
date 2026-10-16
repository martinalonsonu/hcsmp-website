import type { Metadata } from "next";
import ContactPage from "@/components/contacto/contact-page";
import { JsonLd } from "@/components/seo/json-ld";
import {
  createBreadcrumbSchema,
  createSiteGraph,
  createWebPageSchema,
} from "@/models/seo/schemas";
import { SITE_NAME, getCanonicalUrl } from "@/models/seo/site";

const contactDescription =
  "Contacta a la Hermandad de San Martín de Porres de Cruz Blanca, solicita tu ingreso y consulta nuestros canales de atención y lugar de reunión.";

export const metadata: Metadata = {
  title: "Contacto e ingreso a la Hermandad",
  description: contactDescription,
  alternates: { canonical: "/contacto" },
  openGraph: {
    title: "Contacto e ingreso a la Hermandad",
    description:
      "Escríbenos, consulta cómo ingresar a la Hermandad y encuentra información de nuestras reuniones en Santa María, Huaura.",
    url: getCanonicalUrl("/contacto"),
    siteName: SITE_NAME,
    type: "website",
  },
};

const contactStructuredData = createSiteGraph(
  createWebPageSchema({
    name: "Contacto e ingreso a la Hermandad",
    description: contactDescription,
    path: "/contacto",
    type: "ContactPage",
  }),
  createBreadcrumbSchema([
    { name: "Inicio", path: "/" },
    { name: "Contacto", path: "/contacto" },
  ]),
);

export default function ContactRoute() {
  return (
    <>
      <JsonLd data={contactStructuredData} />
      <ContactPage />
    </>
  );
}
