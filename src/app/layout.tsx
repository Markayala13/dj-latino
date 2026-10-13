import type { Metadata } from "next";
import { Montserrat, Boldonse, Caveat } from "next/font/google";
import "./globals.css";

// Body + short section titles.
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

// Main display title (hero).
const boldonse = Boldonse({
  variable: "--font-boldonse",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const SITE_URL = "https://djpachangalatina.com";
const TITLE =
  "DJ Pachanga Latina | DJ y Photobooth 360 en Los Ángeles, OC y San Fernando Valley";
const DESCRIPTION =
  "DJ Pachanga Latina — DJ profesional y Photobooth 360 para quinceañeras, bodas, posadas y todo evento en Los Ángeles, Condado de Orange y San Fernando Valley. Pantallas, slideshow de video y fotos, micrófonos inalámbricos, audio e iluminación.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s | DJ Pachanga Latina",
  },
  description: DESCRIPTION,
  applicationName: "DJ Pachanga Latina",
  keywords: [
    "DJ Pachanga Latina",
    "DJ para quinceañeras",
    "DJ para bodas",
    "DJ para posadas",
    "Photobooth 360",
    "DJ Los Ángeles",
    "DJ Condado de Orange",
    "DJ San Fernando Valley",
    "DJ latino Los Angeles",
    "música latina eventos",
    "pantallas para eventos",
    "slideshow quinceañera",
    "micrófonos inalámbricos",
    "audio e iluminación eventos",
  ],
  authors: [{ name: "DJ Pachanga Latina" }],
  creator: "DJ Pachanga Latina",
  publisher: "DJ Pachanga Latina",
  alternates: {
    canonical: "/",
  },
  category: "Entertainment",
  openGraph: {
    type: "website",
    locale: "es_US",
    url: SITE_URL,
    siteName: "DJ Pachanga Latina",
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "DJ Pachanga Latina — DJ y Photobooth 360 en Los Ángeles, Condado de Orange y San Fernando Valley",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${montserrat.variable} ${boldonse.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black">{children}</body>
    </html>
  );
}
