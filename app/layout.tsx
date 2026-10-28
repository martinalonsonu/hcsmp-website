import clsx from "clsx";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Libre_Baskerville, Poppins } from "next/font/google";
import { SiteFooter } from "@/components/shared/site-footer";
import { SiteHeader } from "@/components/shared/site-header";
import { NovemberCountdownRibbon } from "@/components/shared/november-countdown-ribbon";
import { ScrollToTopButton } from "@/components/shared/scroll-to-top-button";
import { SITE_NAME, SITE_URL } from "@/models/seo/site";
import { getTimeUntilNovember } from "@/utils/november-countdown";
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
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} de Cruz Blanca | Santa María, Huaura`,
    template: "%s | HCSMP Cruz Blanca",
  },
  description:
    "Conoce la historia, la fe y las actividades de la Hermandad de Cargadores de San Martín de Porres de Cruz Blanca, Santa María, Huaura.",
  openGraph: {
    title: `${SITE_NAME} de Cruz Blanca | Santa María, Huaura`,
    description:
      "Historia, fe, actividades y memoria de la Hermandad en Cruz Blanca, Santa María, Huaura.",
    siteName: SITE_NAME,
    locale: "es_PE",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: `${SITE_NAME} de Cruz Blanca`,
    description:
      "Historia, fe y actividades de la Hermandad en Santa María, Huaura.",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const initialCountdown = getTimeUntilNovember();

  return (
    <html
      lang="es"
      className={clsx(poppins.variable, libreBaskerville.variable)}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-screen bg-paper font-sans text-ink antialiased">
        <a
          className="fixed left-4 top-4 z-50 -translate-y-24 rounded-xs bg-white px-4 py-3 text-forest shadow-lg transition-transform focus:translate-y-0"
          href="#contenido"
        >
          Saltar al contenido
        </a>
        <NovemberCountdownRibbon initialCountdown={initialCountdown} />
        <SiteHeader />
        <main
          id="contenido"
          className="min-h-[60vh] focus:outline-none"
          tabIndex={-1}
        >
          {children}
        </main>
        <SiteFooter />
        <ScrollToTopButton />
      </body>
    </html>
  );
}
