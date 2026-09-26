import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Libre_Baskerville, Poppins } from "next/font/google";
import { SiteFooter } from "@/app/components/site-footer";
import { SiteHeader } from "@/app/components/site-header";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const libreBaskerville = Libre_Baskerville({
  variable: "--font-display-family",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: process.env.NEXT_PUBLIC_SITE_URL
    ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
    : undefined,
  title: {
    default: "Hermandad de Cargadores de San Martín de Porres | Cruz Blanca",
    template: "%s | Hermandad de San Martín de Porres",
  },
  description:
    "Sitio oficial de la Hermandad de Cargadores de San Martín de Porres de Cruz Blanca. Historia, devoción, fiesta y memoria institucional.",
  openGraph: {
    title: "Hermandad de Cargadores de San Martín de Porres | Cruz Blanca",
    description:
      "La memoria viva de una devoción en Cruz Blanca, Santa María, Diócesis de Huacho, Perú.",
    siteName: "Hermandad de Cargadores de San Martín de Porres",
    locale: "es_PE",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="es"
      className={`${poppins.variable} ${libreBaskerville.variable}`}
    >
      <body className="min-h-screen bg-paper font-sans text-ink antialiased">
        <a
          className="fixed left-4 top-4 z-50 -translate-y-24 rounded-sm bg-white px-4 py-3 text-forest shadow-lg transition-transform focus:translate-y-0"
          href="#contenido"
        >
          Saltar al contenido
        </a>
        <SiteHeader />
        <main id="contenido" className="min-h-[60vh]">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
