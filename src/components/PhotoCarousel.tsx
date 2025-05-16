"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { debounce } from "lodash";
import { useSwipeable } from "react-swipeable";
import type { ImageProps } from "@/utils/types";

interface PhotoCarouselProps {
  images: ImageProps[];
  initialIndex?: number;
  onClose: () => void;
}

export default function PhotoCarousel({
  images,
  initialIndex = 0,
  onClose,
}: PhotoCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isLoading, setIsLoading] = useState(true);
  const [showControls, setShowControls] = useState(true);

  const currentImage = images[currentIndex];

  const navigateToNext = useCallback(() => {
    setIsLoading(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const navigateToPrevious = useCallback(() => {
    setIsLoading(true);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  }, [images.length]);

  // Hide controls after inactivity
  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const handleMouseMove = debounce(() => {
      clearTimeout(timeout);
      setShowControls(true);

      timeout = setTimeout(() => {
        setShowControls(false);
      }, 3000);
    }, 100);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseMove);
    window.addEventListener("keydown", handleMouseMove);
    window.addEventListener("touchstart", handleMouseMove);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseMove);
      window.removeEventListener("keydown", handleMouseMove);
      window.removeEventListener("touchstart", handleMouseMove);
    };
  }, []);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        navigateToPrevious();
      } else if (e.key === "ArrowRight") {
        navigateToNext();
      } else if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [navigateToNext, navigateToPrevious, onClose]);

  // Setup swipe handlers
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => navigateToNext(),
    onSwipedRight: () => navigateToPrevious(),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  if (!currentImage) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
      {/* Close button */}
      <button
        type="button"
        className={`absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 transition-opacity ${
          showControls ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
        aria-label="Close"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-labelledby="closeIconTitle"
        >
          <title id="closeIconTitle">Close</title>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      {/* Main image */}
      <div
        {...swipeHandlers}
        className="w-full h-full flex items-center justify-center"
      >
        <div className="relative w-full max-w-[90vw] h-[80vh]">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white" />
            </div>
          )}
          <Image
            src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/q_auto,f_auto,c_scale,w_1080/${currentImage.public_id}.${currentImage.format}`}
            alt={currentImage.title || "Gallery image"}
            fill
            className={`object-contain transition-opacity duration-300 ${isLoading ? "opacity-0" : "opacity-100"}`}
            sizes="(max-width: 480px) 95vw, (max-width: 640px) 90vw, (max-width: 1280px) 50vw, (max-width: 1536px) 33vw, 25vw"
            priority
            onLoadingComplete={() => setIsLoading(false)}
          />
        </div>
      </div>
      {/* Navigation arrows */}
      <button
        type="button"
        className={`absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-2 transition-opacity ${
          showControls ? "opacity-100" : "opacity-0"
        }`}
        onClick={navigateToPrevious}
        aria-label="Previous image"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-labelledby="previousIconTitle"
        >
          <title id="previousIconTitle">Previous image</title>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        type="button"
        className={`absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-2 transition-opacity ${
          showControls ? "opacity-100" : "opacity-0"
        }`}
        onClick={navigateToNext}
        aria-label="Next image"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-labelledby="nextIconTitle"
        >
          <title id="nextIconTitle">Next image</title>{" "}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
      {/* Thumbnail navigation - Now at the very bottom */}
      <div
        className={`absolute bottom-0 left-0 right-0 bg-black bg-opacity-80 py-3 transition-opacity ${
          showControls ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex justify-center space-x-2 px-4 mb-16">
          {images
            .slice(
              Math.max(0, currentIndex - 2),
              Math.min(images.length, currentIndex + 3)
            )
            .map((image, idx) => (
              <button
                type="button"
                key={image.id}
                onClick={() => {
                  setIsLoading(true);
                  setCurrentIndex(currentIndex - 2 + idx);
                }}
                className={`relative h-16 w-16 flex-shrink-0 rounded-md overflow-hidden transition-opacity ${
                  currentIndex - 2 + idx === currentIndex
                    ? "ring-2 ring-blue-500"
                    : "opacity-70 hover:opacity-100"
                }`}
                aria-label={`View image ${currentIndex - 2 + idx + 1}`}
              >
                <Image
                  src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/q_auto,f_auto,c_scale,w_100/${image.public_id}.${image.format}`}
                  alt={image.title || `Thumbnail ${currentIndex - 2 + idx + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 480px) 95vw, (max-width: 640px) 90vw, (max-width: 1280px) 50vw, (max-width: 1536px) 33vw, 25vw"
                  loading="lazy"
                />
              </button>
            ))}
        </div>

        {/* Image info - Now embedded within the thumbnail area at the bottom */}
        <div className="absolute bottom-0 left-0 right-0 bg-black text-white p-4">
          <div className="max-w-[1960px] mx-auto">
            <h3 className="text-xl font-bold">
              {currentImage.title ||
                `Image ${currentIndex + 1} of ${images.length}`}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
