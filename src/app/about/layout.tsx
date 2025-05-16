import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://JibaroEats.com/"),
  icons: {
    icon: "https://JibaroEats.com/favicon.ico",
  },
  title: "About Jibaro Media",
  description: "Professional photography and media production by Frank Vázquez",
  keywords: [
    "Jibaro Media",
    "Jibaro Eats",
    "Jibaro",
    "Jibaro Media Group",
    "Frank Vázquez",
    "photography",
    "media production",
    "advertising agency",
    "Puerto Rico",
    "Texas",
    "video production",
    "graphic design",
    "web design",
  ],
  alternates: {
    canonical: "https://JibaroEats.com/about",
    languages: {
      "en-US": "/en-US",
    },
  },
  openGraph: {
    siteName: "JibaroEats.com/about",
    description:
      "Professional photography and media production by Frank Vázquez",
    title: "About Jibaro Media",
    locale: "en-US",
    images:
      "https://res.cloudinary.com/drc0myo7z/image/upload/c_scale,w_720/v1705793107/Jibaro-Works/logo2_opokyt.jpg",
  },
  authors: [
    { name: "Jibaro Media", url: "https://www.jibaromedia.com" },
    { name: "Mario R. Ayala", url: "https://www.mariorafaelayala.com" },
  ],
  creator: "Jibaro Media",
  publisher: "Mario R. Ayala",
  twitter: {
    card: "summary_large_image",
    title: "About Jibaro Media",
    images:
      "https://res.cloudinary.com/drc0myo7z/image/upload/c_scale,w_720/v1705793107/Jibaro-Works/logo2_opokyt.jpg",
    description:
      "Professional photography and media production by Frank Vázquez",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
