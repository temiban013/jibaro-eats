import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://JibaroEats.com/works"),
  icons: {
    icon: "/favicon.ico",
  },
  title: "Jibaro Works",
  description: "Digital Design and Film Production.",
  alternates: {
    canonical: "/works",
    languages: {
      "en-US": "/en-US",
      "es-US": "/es-US",
    },
  },
  openGraph: {
    siteName: "JibaroEats.com/works",
    description: "Digital Design and Film Production.",
    title: "Jibaro Works",
    locale: "en-US",
    images:
      "https://res.cloudinary.com/drc0myo7z/image/upload/c_scale,w_1080/v1694092635/Jibaro-Eats/IMG_8043_loyyzw.jpg",
    videos: "https://www.youtube.com/watch?v=ti2ob5111g8",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jibaro Works",
    images:
      "https://res.cloudinary.com/drc0myo7z/image/upload/c_scale,w_1080/v1694092635/Jibaro-Eats/IMG_8043_loyyzw.jpg",
    description: "Digital Design and Film Production.",
  },
};

export default function Works({ children }: { children: React.ReactNode }) {
  return children;
}
