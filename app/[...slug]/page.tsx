import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { InstitutionalPageView } from "@/components/hermandad/institutional-page-view";
import { JsonLd } from "@/components/seo/json-ld";
import {
  institutionalPageByPath,
  institutionalPages,
} from "@/models/hermandad/institutional-pages";
import {
  createBreadcrumbSchema,
  createSaintSchema,
  createSiteGraph,
  createWebPageSchema,
} from "@/models/seo/schemas";
import { getCanonicalUrl } from "@/models/seo/site";

type PageProps = {
  params: Promise<{ slug: string[] }>;
};

const legacyRouteRedirects = new Map([
  ["/vida-de-hermandad", "/hermandad/pilares"],
  ["/vida-de-hermandad/formacion", "/hermandad/pilares"],
  ["/vida-de-hermandad/servicio", "/hermandad/pilares"],
  ["/vida-de-hermandad/actividades", "/hermandad/pilares"],
  ["/hermandad/pilares/formacion", "/hermandad/pilares"],
  ["/hermandad/pilares/servicio", "/hermandad/pilares"],
  ["/hermandad/pilares/actividades", "/hermandad/pilares"],
]);

export const dynamicParams = false;

export function generateStaticParams() {
  return [
    ...institutionalPages.map((page) => page.path),
    ...legacyRouteRedirects.keys(),
  ].map((path) => ({ slug: path.slice(1).split("/") }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const path = `/${slug.join("/")}`;
  const page = institutionalPageByPath.get(
    legacyRouteRedirects.get(path) ?? path,
  );
  if (!page) notFound();

  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: getCanonicalUrl(page.path) },
    openGraph: {
      title: `${page.title} | Hermandad de San Martín de Porres`,
      description: page.description,
      url: getCanonicalUrl(page.path),
      siteName: "Hermandad de Cargadores de San Martín de Porres",
      type: "website",
      locale: "es_PE",
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
    },
  };
}

export default async function InstitutionalRoute({ params }: PageProps) {
  const { slug } = await params;
  const path = `/${slug.join("/")}`;
  const legacyRedirect = legacyRouteRedirects.get(path);
  if (legacyRedirect) redirect(legacyRedirect);
  if (path === "/san-martin") redirect("/san-martin-de-porres");
  if (path === "/san-martin/vida") {
    redirect("/san-martin-de-porres#biografia");
  }
  if (path === "/san-martin/espiritualidad") {
    redirect("/san-martin-de-porres#espiritualidad");
  }

  const page = institutionalPageByPath.get(path);
  if (!page) notFound();

  const pageType =
    page.kind === "archive" || page.kind === "news"
      ? "CollectionPage"
      : page.path === "/hermandad" ||
          page.path === "/san-martin-de-porres" ||
          page.path === "/hermandad/pilares"
        ? "AboutPage"
        : "WebPage";
  const breadcrumbItems = [
    { name: "Inicio", path: "/" },
    ...page.path
      .split("/")
      .filter(Boolean)
      .map((segment, index, segments) => {
        const itemPath = `/${segments.slice(0, index + 1).join("/")}`;
        return {
          name:
            institutionalPageByPath.get(itemPath)?.title ??
            segment.replaceAll("-", " "),
          path: itemPath,
        };
      }),
  ];
  const pageStructuredData = createSiteGraph(
    createWebPageSchema({
      name: page.title,
      description: page.description,
      path: page.path,
      type: pageType,
    }),
    createBreadcrumbSchema(breadcrumbItems),
    ...(page.path === "/san-martin-de-porres"
      ? [createSaintSchema({ description: page.description })]
      : []),
  );

  return (
    <>
      <JsonLd data={pageStructuredData} />
      <InstitutionalPageView page={page} />
    </>
  );
}
