import type { Metadata } from "next";
import { Suspense, useEffect, useState } from "react";
import HomePage from "../components/HomePage";
import getCloudImages from "../utils/getCloudImages";

export const metadata: Metadata = {
  title: "Jibaro Eats",
  description: "Eating Jibaro-style. Digital services for eateries.",
  openGraph: {
    images:
      "https://res.cloudinary.com/drc0myo7z/image/upload/q_auto,f_auto,c_scale,w_1080/v1694092635/Jibaro-Eats/SAM_7866_b7ummj.jpg",
  },
  twitter: {
    images:
      "https://res.cloudinary.com/drc0myo7z/image/upload/q_auto,f_auto,c_scale,w_1080/v1694092635/Jibaro-Eats/SAM_7866_b7ummj.jpg",
  },
};

function SearchBarFallback() {
  return <>Jibaro Eats</>;
}

export default async function Page() {
  const cloudImages = await getCloudImages("jibaro-Eats");
  return (
    <Suspense fallback={<SearchBarFallback />}>
      <HomePage images={cloudImages.reducedResults} jibaroName="Jibaro Eats" />
    </Suspense>
  );
}
