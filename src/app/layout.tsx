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

export const metadata: Metadata = {
  title: "DJ Pachanga Latina | DJ y Photobooth 360 en Los Ángeles, OC y San Fernando Valley",
  description:
    "DJ Pachanga Latina — DJ profesional y Photobooth 360 para quinceañeras, bodas, posadas y todo evento en Los Ángeles, Condado de Orange y San Fernando Valley.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${boldonse.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black">{children}</body>
    </html>
  );
}
