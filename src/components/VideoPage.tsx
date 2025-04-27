"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useState } from "react";
import type { ImageProps, VideoProps } from "@/utils/types";
import getBase64ImageUrl from "../utils/generateBlurPlaceholder";
import JibaroCard from "./JibaroCard";
import router from "next/router";

interface VideoPageProps {
  jibaroName: string;
  videos: VideoProps[];
  images: ImageProps[];
}

const getVideoUrl = (videoId: string) => {
  return `https://www.youtube.com/embed/${videoId}`;
};

const findImageByVideoId = (
  videoId: string,
  images: ImageProps[]
): ImageProps => {
  const matching = images.find((image) => image.videoId === videoId);
  return matching ? matching : images[0];
};

export default function VideoPage({
  jibaroName,
  videos,
  images,
}: VideoPageProps) {
  // Create a state object that maps video IDs to their loading states
  const [loadingStates, setLoadingStates] = useState<{
    [videoId: string]: boolean;
  }>(
    videos.reduce(
      (acc, video) => Object.assign({}, acc, { [video.videoId]: true }),
      {}
    )
  );

  // Function to update the loading state for a specific video
  const setLoaded = (videoId: string) => {
    setLoadingStates((prevStates) => ({ ...prevStates, [videoId]: false }));
  };
  return (
    <>
      <main className="mx-auto max-w-[1960px] p-4">
        <div className="gap-4 sm:columns-1 lg:columns-2 xl:columns-3">
          <div className="after:content group relative mb-5 block w-full after:pointer-events-none">
            <div className="flex justify-center sm:justify-start sm:p-10 sm:pl-12 pb-2">
              <nav className="flex flex-row space-x-4 whitespace-nowrap text-lg sm:text-xl">
                <Link
                  href="/works"
                  className="text-blue-500 hover:text-blue-700"
                >
                  Works
                </Link>
                {/* <Link href="/about" className="text-blue-500 hover:text-blue-700">About</Link>
                  <Link href="/contact" className="text-blue-500 hover:text-blue-700">Contact Us</Link> */}
              </nav>
            </div>
            <JibaroCard jibaroName={jibaroName} />
          </div>
          {videos.map(({ id, videoId, title }) => {
            const isLoaded = !loadingStates[videoId];
            const image = findImageByVideoId(videoId, images);
            return (
              <div
                key={id}
                className="after:content group relative pl-12 mb-5 block w-full after:pointer-events-none"
              >
                {!isLoaded && (
                  <div className="transform rounded-lg brightness-98 transition will-change-auto group-hover:brightness-90">
                    <Image
                      alt={jibaroName}
                      className="transform rounded-lg brightness-98 transition will-change-auto group-hover:brightness-110"
                      style={{ transform: "translate3d(0, 0, 0)" }}
                      src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_720/${image.public_id}.${image.format}`}
                      width={720}
                      height={480}
                      placeholder="blur"
                      blurDataURL={image.blurDataUrl}
                      sizes="(max-width: 640px) 100vw,
                                  (max-width: 1280px) 50vw,
                                  (max-width: 1536px) 33vw,
                                  25vw"
                    />
                    <div className="absolute inset-0 flex items-center justify-center transition-opacity opacity-0 group-hover:opacity-100">
                      <p className="text-2xl font-bold text-white">Cargando</p>
                    </div>
                  </div>
                )}
                <iframe
                  src={getVideoUrl(videoId)}
                  onLoad={() => setLoaded(videoId)}
                  title={title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className={`transform rounded-lg brightness-98 transition will-change-auto group-hover:brightness-50 ${isLoaded ? "block" : "hidden"}`}
                />
              </div>
            );
          })}
        </div>
      </main>
      <footer className="p-6 text-center text-white/80 sm:p-12" />
    </>
  );
}
