"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useState } from "react";
import type { ImageProps, VideoProps } from "@/utils/types";
import JibaroCard from "./JibaroCard";

interface VideoPageProps {
  jibaroName: string;
  videos: VideoProps[];
  images: ImageProps[];
}

const getVideoUrl = (videoId: string) => {
  return `https://www.youtube.com/embed/${videoId}`;
};

// Updated function to match images by public_id containing videoId
const findImageByVideoId = (
  videoId: string,
  images: ImageProps[]
): ImageProps | null => {
  // First try to find exact match by videoId in metadata
  const exactMatch = images.find((image) => image.videoId === videoId);
  if (exactMatch) {
    return exactMatch;
  }

  // If no exact metadata match, look for videoId in the public_id (filename)
  const publicIdMatch = images.find((image) =>
    image.public_id.includes(videoId)
  );
  if (publicIdMatch) {
    return publicIdMatch;
  }

  // If still no match, fallback to YouTube thumbnail
  return null;
};

// Generate a YouTube thumbnail URL as fallback
const getYouTubeThumbnail = (videoId: string) => {
  return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
};

export default function VideoPage({
  jibaroName,
  videos,
  images,
}: VideoPageProps) {
  // Separate states for image loading and video interaction
  const [imageLoadingStates, setImageLoadingStates] = useState<{
    [videoId: string]: boolean;
  }>(
    videos.reduce(
      (acc, video) => Object.assign({}, acc, { [video.videoId]: true }),
      {}
    )
  );

  const [videoLoadedStates, setVideoLoadedStates] = useState<{
    [videoId: string]: boolean;
  }>(
    videos.reduce(
      (acc, video) => Object.assign({}, acc, { [video.videoId]: false }),
      {}
    )
  );

  // Function to update the image loading state
  const setImageLoaded = (videoId: string) => {
    setImageLoadingStates((prevStates) => ({
      ...prevStates,
      [videoId]: false,
    }));
  };

  // Function to update the video loaded state
  const setVideoLoaded = (videoId: string) => {
    setVideoLoadedStates((prevStates) => ({ ...prevStates, [videoId]: true }));
  };

  // Function to handle play button click
  const handlePlayClick = (videoId: string) => {
    const iframe = document.getElementById(
      `video-${videoId}`
    ) as HTMLIFrameElement;
    const imageContainer = iframe?.previousElementSibling as HTMLElement;

    if (iframe && imageContainer) {
      // Set the actual src to start loading the video
      iframe.src = getVideoUrl(videoId);
      // Hide the image container and show the video
      imageContainer.style.display = "none";
      iframe.classList.remove("hidden");
      iframe.classList.add("block");
    }
  };

  return (
    <>
      <main className="mx-auto max-w-[1960px] p-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 auto-rows-max">
          <div className="after:content group relative mb-5 block w-full after:pointer-events-none">
            <div className="flex justify-center sm:justify-start sm:p-10 sm:pl-12 pb-2">
              <nav className="flex flex-row space-x-4 whitespace-nowrap text-lg sm:text-xl">
                <Link
                  href="/works"
                  className="text-blue-500 hover:text-blue-700"
                >
                  Works
                </Link>
              </nav>
            </div>
            <JibaroCard jibaroName={jibaroName} />
          </div>
          {videos.map(({ id, videoId, title }, index) => {
            const isImageLoaded = !imageLoadingStates[videoId];
            const isVideoLoaded = videoLoadedStates[videoId];
            const image = findImageByVideoId(videoId, images);

            return (
              <div
                key={id}
                className="video-container after:content group relative pl-12 mb-5 block w-full after:pointer-events-none"
              >
                {/* Image placeholder - always show, but loading overlay only until image loads */}
                <div className="relative w-full aspect-video">
                  {image ? (
                    <Image
                      alt={title}
                      className="transform rounded-lg brightness-98 transition will-change-auto"
                      style={{ transform: "translate3d(0, 0, 0)" }}
                      src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/q_auto,f_auto,c_scale,w_720/${image.public_id}.${image.format}`}
                      fill
                      placeholder="blur"
                      blurDataURL={image.blurDataUrl}
                      sizes="(max-width: 640px) 100vw,
                                  (max-width: 1280px) 50vw,
                                  (max-width: 1536px) 33vw,
                                  25vw"
                      onLoad={() => setImageLoaded(videoId)}
                      onError={() => setImageLoaded(videoId)} // Also stop loading on error
                    />
                  ) : (
                    // Fallback to YouTube thumbnail if no Cloudinary image
                    <Image
                      alt={title}
                      className="transform rounded-lg brightness-98 transition will-change-auto"
                      style={{ transform: "translate3d(0, 0, 0)" }}
                      src={getYouTubeThumbnail(videoId)}
                      fill
                      sizes="(max-width: 640px) 100vw,
                                  (max-width: 1280px) 50vw,
                                  (max-width: 1536px) 33vw,
                                  25vw"
                      onLoad={() => setImageLoaded(videoId)}
                      onError={() => setImageLoaded(videoId)} // Also stop loading on error
                    />
                  )}

                  {/* Loading indicator - only show until image loads */}
                  {!isImageLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
                      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white" />
                    </div>
                  )}

                  {/* Play button overlay - show when image is loaded */}
                  {isImageLoaded && (
                    <button
                      type="button"
                      onClick={() => handlePlayClick(videoId)}
                      className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer"
                      aria-label={`Play ${title}`}
                    >
                      <div className="bg-black bg-opacity-70 rounded-full p-4">
                        <svg
                          className="w-12 h-12 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <title>{`Play ${title}`}</title>
                          <path d="M8 5v10l8-5-8-5z" />
                        </svg>
                      </div>
                    </button>
                  )}
                </div>

                {/* Video iframe - hidden initially, loads on demand when play button is clicked */}
                <iframe
                  onLoad={() => setVideoLoaded(videoId)}
                  title={title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full aspect-video transform rounded-lg hidden"
                  id={`video-${videoId}`}
                />

                {/* Video title - tightly coupled to video */}
                <div className="mt-1 mb-3">
                  <h3 className="text-lg font-semibold text-white leading-tight">
                    {title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </main>
      <footer className="p-6 text-center text-white/80 sm:p-12" />
    </>
  );
}
