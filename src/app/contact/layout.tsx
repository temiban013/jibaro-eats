import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://JibaroEats.com/contact"),
  icons: {
    icon: "/favicon.ico",
  },
  title: "Contact Jibaro Media",
  description:
    "Get in touch with our team for photography and media production services",
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
    canonical: "/contact",
    languages: {
      "en-US": "/en-US",
    },
  },
  openGraph: {
    siteName: "JibaroEats.com/contact",
    description:
      "Get in touch with our team for photography and media production services",
    title: "Contact Jibaro Media",
    locale: "en-US",
    images:
      "https://res.cloudinary.com/drc0myo7z/image/upload/q_auto,f_auto,c_scale,w_720/v1705793123/Jibaro-Works/IMG_4152_jpafzn.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Jibaro Media",
    images:
      "https://res.cloudinary.com/drc0myo7z/image/upload/q_auto,f_auto,c_scale,w_720/v1705793123/Jibaro-Works/IMG_4152_jpafzn.jpg",
    description:
      "Get in touch with our team for photography and media production services",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
