"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import Image from "next/image";
import type { ImageProps } from "@/utils/types";
import JibaroCard from "./JibaroCard";
import PhotoCarousel from "./PhotoCarousel";

interface HomePageProps {
  images: ImageProps[];
  jibaroName: string;
}

export default function HomePage({ images, jibaroName }: HomePageProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );
  const lastViewedPhotoRef = useRef<HTMLAnchorElement>(null);

  const openCarousel = (index: number) => {
    setSelectedImageIndex(index);
    // Prevent body scrolling when carousel is open
    document.body.style.overflow = "hidden";
  };

  const closeCarousel = () => {
    setSelectedImageIndex(null);
    // Restore body scrolling when carousel is closed
    document.body.style.overflow = "";
  };

  return (
    <>
      <main className="mx-auto max-w-[1960px] p-4">
        <div className="columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4">
          <div
            className="after:content group relative mb-5 block w-full after:pointer-events-none"
            style={{ maxHeight: "70vh", height: "auto" }}
          >
            <JibaroCard jibaroName={jibaroName} />
          </div>
          {images.map(({ id, public_id, format, blurDataUrl }, index) => (
            <div
              key={id}
              className="after:content group relative mb-5 block w-full after:pointer-events-none"
            >
              <button
                type="button"
                onClick={() => openCarousel(index)}
                className="w-full text-left"
                aria-label={`View ${jibaroName} image ${index + 1}`}
              >
                <Image
                  alt={jibaroName}
                  className="transform rounded-lg brightness-98 transition will-change-auto group-hover:brightness-110 cursor-pointer"
                  style={{ transform: "translate3d(0, 0, 0)" }}
                  placeholder="blur"
                  blurDataURL={blurDataUrl}
                  src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/q_auto,f_auto,c_scale,w_720/${public_id}.${format}`}
                  width={720}
                  height={480}
                  sizes="(max-width: 640px) 100vw,
                      (max-width: 1280px) 50vw,
                      (max-width: 1536px) 33vw,
                      25vw"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-black bg-opacity-70 text-white px-4 py-2 rounded-lg">
                    View Image
                  </div>
                </div>
              </button>
            </div>
          ))}
        </div>
      </main>
      <footer className="p-6 text-center text-white/80 sm:p-12" />

      {/* Photo Carousel Modal */}
      {selectedImageIndex !== null && (
        <PhotoCarousel
          images={images}
          initialIndex={selectedImageIndex}
          onClose={closeCarousel}
        />
      )}
    </>
  );
}
