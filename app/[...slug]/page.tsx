import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InstitutionalPageView } from "@/app/components/institutional-page-view";
import {
  institutionalPageByPath,
  institutionalPages,
} from "@/app/data/institutional-pages";

type PageProps = {
  params: Promise<{ slug: string[] }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return institutionalPages.map((page) => ({
    slug: page.path.slice(1).split("/"),
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = institutionalPageByPath.get(`/${slug.join("/")}`);
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
  const page = institutionalPageByPath.get(`/${slug.join("/")}`);
  if (!page) notFound();

  return <InstitutionalPageView page={page} />;
}
