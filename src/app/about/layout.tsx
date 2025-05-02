import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://JibaroEats.com/about"),
  icons: {
    icon: "/favicon.ico",
  },
  title: "About Jibaro Media",
  description: "Professional photography and media production by Frank Vázquez",
  alternates: {
    canonical: "/about",
    languages: {
      "en-US": "/en-US",
      "es-US": "/es-US",
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
