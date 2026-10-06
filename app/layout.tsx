import type { Metadata, Viewport } from "next";
import { Marcellus, Hanken_Grotesk, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const marcellus = Marcellus({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-marcellus",
  display: "swap",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.musharaqahub.com"),
  title: "MusharaqaHub | Infrastructure for Real World Assets",
  description:
    "MusharaqaHub structures Shariah-compliant participation in productive, real-world assets (RWA) — anchoring digital ownership to identifiable value, transparent documentation, and clearly defined rights.",
  alternates: {
    canonical: "https://www.musharaqahub.com/",
  },
  openGraph: {
    title: "MusharaqaHub | Infrastructure for Real World Assets",
    description:
      "Shariah-compliant infrastructure for the tokenization of real-world assets, incorporated in the AIFC.",
    type: "website",
    siteName: "MusharaqaHub",
  },
  twitter: {
    card: "summary_large_image",
    title: "MusharaqaHub | Infrastructure for Real World Assets",
    description:
      "Shariah-compliant infrastructure for the tokenization of real-world assets.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#F6F3EA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${marcellus.variable} ${hanken.variable} ${plexMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
