import type { Metadata } from "next";
import { Suspense } from "react";
import VideoPage from "../../../components/VideoPage";
import getCloudImages from "@/utils/getCloudImages";

export const metadata: Metadata = {
  title: "Jibaro Films",
  description: "Professional Film Production by Frank Vázquez",
  openGraph: {
    images:
      "https://res.cloudinary.com/drc0myo7z/image/upload/q_auto,f_auto,c_scale,w_720/v1705794357/Jibaro-Works/image-asset_4_c698yr.jpg",
  },
  twitter: {
    images:
      "https://res.cloudinary.com/drc0myo7z/image/upload/q_auto,f_auto,c_scale,w_720/v1705794357/Jibaro-Works/image-asset_4_c698yr.jpg",
  },
};

function SearchBarFallback() {
  return <>Jibaro Films</>;
}

const videos = [
  {
    id: "1",
    videoId: "yFLDOuwKY1U",
    title: "The Culture of Ignorance trailer",
  },
  {
    id: "2",
    videoId: "xPsxI9Dc8jw",
    title: "The Red Cillindrium",
  },
  {
    id: "3",
    videoId: "544SO0LFkWg",
    title: "Niños Sicarios trailer 1",
  },
  {
    id: "4",
    videoId: "L0rY-8fEC0w",
    title: "The Great Fallacy trailer",
  },
];

export default async function Page() {
  const cloudImages = await getCloudImages("Jibaro-Films");
  return (
    <Suspense fallback={<SearchBarFallback />}>
      <VideoPage
        videos={videos}
        images={cloudImages.reducedResults}
        jibaroName="Jibaro Films"
      />
    </Suspense>
  );
}
