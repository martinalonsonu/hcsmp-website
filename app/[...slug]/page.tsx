import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { InstitutionalPageView } from "@/app/components/institutional-page-view";
import {
  institutionalPageByPath,
  institutionalPages,
} from "@/app/data/institutional-pages";

type PageProps = {
  params: Promise<{ slug: string[] }>;
};

const legacyRouteRedirects = new Map([
  ["/vida-de-hermandad", "/hermandad/vida"],
  ["/vida-de-hermandad/formacion", "/hermandad/vida"],
  ["/vida-de-hermandad/servicio", "/hermandad/vida"],
  ["/vida-de-hermandad/actividades", "/hermandad/vida"],
  ["/hermandad/vida/formacion", "/hermandad/vida"],
  ["/hermandad/vida/servicio", "/hermandad/vida"],
  ["/hermandad/vida/actividades", "/hermandad/vida"],
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
    openGraph: {
      title: `${page.title} | Hermandad de San Martín de Porres`,
      description: page.description,
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

  return <InstitutionalPageView page={page} />;
}
