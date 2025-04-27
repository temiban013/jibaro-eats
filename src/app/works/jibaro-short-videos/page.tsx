import type { Metadata } from "next";
import { Suspense } from "react";
import VideoPage from "../../../components/VideoPage";
import getCloudImages from "@/utils/getCloudImages";

export const metadata: Metadata = {
  title: "Jibaro Short Videos",
  description: "Professional 30 Seconds Video Spot Production by Frank Vázquez",
  openGraph: {
    images:
      "https://res.cloudinary.com/drc0myo7z/image/upload/c_scale,w_720/v1705794360/Jibaro-Works/image-asset_5_lnl0o1.jpg",
  },
  twitter: {
    images:
      "https://res.cloudinary.com/drc0myo7z/image/upload/c_scale,w_720/v1705794360/Jibaro-Works/image-asset_5_lnl0o1.jpg",
  },
};

function SearchBarFallback() {
  return <>Jibaro Short Videos</>;
}

const videos = [
  {
    id: "1",
    videoId: "jTqHHPHukqo",
    title: "BAD AZZ BURRITO Enchilado",
  },
  {
    id: "2",
    videoId: "ZmjO_MbeKbY",
    title: "BAD AZZ BURRITO Pulseo",
  },
  {
    id: "3",
    videoId: "0_888C7qZG8",
    title: "El Mexicano",
  },
];

export default async function Page() {
  const cloudImages = await getCloudImages("Jibaro-Short-Videos");
  return (
    <Suspense fallback={<SearchBarFallback />}>
      <VideoPage
        videos={videos}
        images={cloudImages.reducedResults}
        jibaroName="Jibaro Short Videos"
      />
    </Suspense>
  );
}
