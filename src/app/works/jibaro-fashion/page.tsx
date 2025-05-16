import { Metadata } from "next";
import { Suspense } from "react";
import HomePage from "../../../components/HomePage";
import getCloudImages from "../../../utils/getCloudImages";

export const metadata: Metadata = {
  title: "Jibaro Fashion",
  description: "Professional Fashion photography by Frank Vázquez",
  openGraph: {
    images:
      "https://res.cloudinary.com/drc0myo7z/image/upload/q_auto,f_auto,c_scale,w_720/v1705793123/Jibaro-Works/IMG_4152_jpafzn.jpg",
  },
  twitter: {
    images:
      "https://res.cloudinary.com/drc0myo7z/image/upload/q_auto,f_auto,c_scale,w_720/v1705793123/Jibaro-Works/IMG_4152_jpafzn.jpg",
  },
};

function SearchBarFallback() {
  return <>Jibaro Fashion</>;
}

export default async function Page() {
  const cloudImages = await getCloudImages("jibaro-fashion");
  return (
    <Suspense fallback={<SearchBarFallback />}>
      <HomePage
        images={cloudImages.reducedResults}
        jibaroName="jibaro-fashion"
      />
    </Suspense>
  );
}
