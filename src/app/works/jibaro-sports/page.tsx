import { Metadata } from "next";
import { Suspense } from "react";
import HomePage from "../../../components/HomePage";
import getCloudImages from "../../../utils/getCloudImages";

export const metadata: Metadata = {
  title: "Jibaro Sports",
  description: "Professional 30 Seconds Video Spot Production by Frank Vázquez",
  openGraph: {
    images:
      "https://res.cloudinary.com/drc0myo7z/image/upload/q_auto,f_auto,c_scale,w_720/v1705793215/Jibaro-Works/IMG_1671_1_t4uxso.jpg",
  },
  twitter: {
    images:
      "https://res.cloudinary.com/drc0myo7z/image/upload/q_auto,f_auto,c_scale,w_720/v1705793215/Jibaro-Works/IMG_1671_1_t4uxso.jpg",
  },
};

function SearchBarFallback() {
  return <>Jibaro Sports</>;
}

export default async function Page() {
  const cloudImages = await getCloudImages("Jibaro-Sports");
  return (
    <Suspense fallback={<SearchBarFallback />}>
      <HomePage
        images={cloudImages.reducedResults}
        jibaroName="Jibaro Sports"
      />
    </Suspense>
  );
}
