import { Metadata } from "next";
import { Suspense } from "react";
import HomePage from "../../../components/HomePage";
import getCloudImages from "../../../utils/getCloudImages";

export const metadata: Metadata = {
  title: "Jibaro Nature",
  description: "Professional Nature photography by Frank Vázquez",
  openGraph: {
    images:
      "https://res.cloudinary.com/drc0myo7z/image/upload/q_auto,f_auto,c_scale,w_720/v1705793129/Jibaro-Works/SAM_3297-2_loonfg.jpg",
  },
  twitter: {
    images:
      "https://res.cloudinary.com/drc0myo7z/image/upload/q_auto,f_auto,c_scale,w_720/v1705793129/Jibaro-Works/SAM_3297-2_loonfg.jpg",
  },
};

function SearchBarFallback() {
  return <>Jibaro Nature</>;
}

export default async function Page() {
  const cloudImages = await getCloudImages("jibaro-nature");
  return (
    <Suspense fallback={<SearchBarFallback />}>
      <HomePage
        images={cloudImages.reducedResults}
        jibaroName="Jibaro Nature"
      />
    </Suspense>
  );
}
