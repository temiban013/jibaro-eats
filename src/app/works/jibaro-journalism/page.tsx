import { Metadata } from "next";
import { Suspense } from "react";
import HomePage from "../../../components/HomePage";
import getCloudImages from "../../../utils/getCloudImages";

export const metadata: Metadata = {
  title: "Jibaro Journalism",
  description: "Professional Journalistic Photography by Frank Vázquez",
  openGraph: {
    images:
      "https://res.cloudinary.com/drc0myo7z/image/upload/q_auto,f_auto,c_scale,w_720/v1705793107/Jibaro-Works/logo2_opokyt.jpg",
  },
  twitter: {
    images:
      "https://res.cloudinary.com/drc0myo7z/image/upload/q_auto,f_auto,c_scale,w_720/v1705793107/Jibaro-Works/logo2_opokyt.jpg",
  },
};

function SearchBarFallback() {
  return <>Jibaro Journalism</>;
}

export default async function Page() {
  const cloudImages = await getCloudImages("jibaro-journalism");
  return (
    <Suspense fallback={<SearchBarFallback />}>
      <HomePage
        images={cloudImages.reducedResults}
        jibaroName="jibaro-journalism"
      />
    </Suspense>
  );
}
