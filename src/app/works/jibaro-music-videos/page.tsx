import type { Metadata } from "next";
import { Suspense } from "react";
import VideoPage from "../../../components/VideoPage";
import getCloudImages from "@/utils/getCloudImages";

export const metadata: Metadata = {
  title: "Jibaro Music Videos",
  description: "Professional Music Video Production by Frank Vázquez",
  openGraph: {
    images:
      "https://res.cloudinary.com/drc0myo7z/image/upload/q_auto,f_auto,c_scale,w_720/v1705794357/Jibaro-Works/image-asset_3_lfltj6.jpg",
  },
  twitter: {
    images:
      "https://res.cloudinary.com/drc0myo7z/image/upload/q_auto,f_auto,c_scale,w_720/v1705794357/Jibaro-Works/image-asset_3_lfltj6.jpg",
  },
};

function SearchBarFallback() {
  return <>Jibaro Music Videos</>;
}

const videos = [
  {
    id: "1",
    videoId: "6p4x9cKk50A",
    title: "Fernando la Montaña : Una carta Abierta",
  },
  {
    id: "2",
    videoId: "FcpLEIGNsFM",
    title: "Coral",
  },
  {
    id: "3",
    videoId: "z0xLIUD6w0g",
    title: "Fernando LaMontaña: Alguien Diferente",
  },
  {
    id: "4",
    videoId: "HwBGfkyexWU",
    title: "R Kan: Agueybaná",
  },
  {
    id: "5",
    videoId: "7Ly-iCVCVE4",
    title: "Tania Kimbroug (Vuelve Conmigo)",
  },
  {
    id: "6",
    videoId: "BQgMOw9DaAk",
    title: "UZI: Hookless",
  },
  {
    id: "7",
    videoId: "UV91ArcnG3g",
    title: "Never Be The Same",
  },
  {
    id: "8",
    videoId: "YWisopajqoc",
    title: "Commot For Road",
  },
];

export default async function Page() {
  const cloudImages = await getCloudImages("Jibaro-Music-Videos");
  return (
    <Suspense fallback={<SearchBarFallback />}>
      <VideoPage
        videos={videos}
        images={cloudImages.reducedResults}
        jibaroName="Jibaro Music Videos"
      />
    </Suspense>
  );
}
