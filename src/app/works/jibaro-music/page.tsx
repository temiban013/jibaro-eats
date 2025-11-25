import { Metadata } from "next";
import { Suspense } from "react";
import HomePage from "../../../components/HomePage";
import getCloudImages from "../../../utils/getCloudImages";

export const metadata: Metadata = {
  title: "Jibaro Music",
  description: "Professional Music Video Production by Frank Vázquez",
  openGraph: {
    images:
      "https://res.cloudinary.com/drc0myo7z/image/upload/q_auto,f_auto,c_scale,w_720/v1705793126/Jibaro-Works/DSCF6708_uqxjls.jpg",
  },
  twitter: {
    images:
      "https://res.cloudinary.com/drc0myo7z/image/upload/q_auto,f_auto,c_scale,w_720/v1705793126/Jibaro-Works/DSCF6708_uqxjls.jpg",
  },
};

function SearchBarFallback() {
  return <>Jibaro Music</>;
}

export default async function Page() {
  const cloudImages = await getCloudImages("jibaro-music");
  return (
    <Suspense fallback={<SearchBarFallback />}>
      <HomePage images={cloudImages.reducedResults} jibaroName="jibaro-music" />
    </Suspense>
  );
}
