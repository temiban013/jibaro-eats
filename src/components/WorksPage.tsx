"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import Image from "next/image";
import type { ImageProps } from "@/utils/types";

export default function WorksPage({ images }: { images: ImageProps[] }) {
  const router = useRouter();
  const lastViewedPhotoRef = useRef<HTMLAnchorElement>(null);

  const navigateToTitle = (title: string) => {
    router.push(`/works/${title}`);
  };
  return (
    <>
      <main className="mx-auto max-w-[1960px] p-4">
        <div className="columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4">
          <div className="after:content group relative mb-5 block w-full after:pointer-events-none">
            <div className="text-center bg-black text-white/80 sm:text-left sm:pl-12 pt-2 sm:pb-6">
              <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
                Jíbaro Works
              </h1>
              <p className="text-xl sm:text-2xl pt-3">
                <a href="tel:+17879328884" className="sm:inline-block">
                  (787) 932-0884
                </a>{" "}
              </p>
              <p className="text-xl sm:text-2xl pt-3">
                <a
                  href="mailto:jibaromg@gmail.com"
                  className="text-blue-500 hover:text-blue-700 sm:inline-block"
                >
                  jibaromg@gmail.com
                </a>
              </p>
            </div>
          </div>
          {images.map(({ id, public_id, format, title, blurDataUrl }) => (
            <div
              key={id}
              className="after:content group relative mb-5 block w-full after:pointer-events-none"
            >
              <Image
                alt={title}
                className="transform rounded-lg brightness-98 transition will-change-auto group-hover:brightness-50"
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
              <div className="absolute inset-0 flex items-center justify-center transition-opacity opacity-0 group-hover:opacity-100">
                <p className="text-2xl font-bold text-white">{title}</p>
              </div>
              <button
                type="button"
                onClick={() => navigateToTitle(title.toLowerCase())}
                className="absolute inset-0 flex items-center justify-center cursor-pointer bg-transparent border-0"
              >
                {/* Add a transparent button with an onClick handler to navigate to the title */}
              </button>
            </div>
          ))}
        </div>
      </main>
      <footer className="p-6 text-center text-white/80 sm:p-12" />
    </>
  );
}
