'use client'

import Link from "next/link"
import { useRef } from 'react'
import Image from "next/image"
import { ImageProps } from "@/utils/types"
import JibaroCard from "./JibaroCard";

interface HomePageProps {
  images: ImageProps[];
  jibaroName: string; 
}

export default function HomePage({images, jibaroName}: HomePageProps) {
  
    const lastViewedPhotoRef = useRef<HTMLAnchorElement>(null)
  
    return (
      <>
        <main className="mx-auto max-w-[1960px] p-4">
          <div className="columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4">
            <div className="after:content group relative mb-5 block w-full after:pointer-events-none">
              <div className="flex justify-center sm:justify-start sm:p-10 sm:pl-12 pb-2">
                <nav className="flex flex-row space-x-4 whitespace-nowrap text-lg sm:text-xl">
                  <Link href="/works" className="text-blue-500 hover:text-blue-700">Works</Link>
                  <Link href="#" className="text-blue-500 hover:text-blue-700">About</Link>
                  <Link href="#" className="text-blue-500 hover:text-blue-700">Contact Us</Link>
                </nav>
              </div>
                <JibaroCard jibaroName={jibaroName}/>
            </div>
            {images.map(({ id, public_id, format, blurDataUrl }) => (
              <div key={id} className="after:content group relative mb-5 block w-full after:pointer-events-none">
                <Image
                  alt={jibaroName}
                  className="transform rounded-lg brightness-98 transition will-change-auto group-hover:brightness-110"
                  style={{ transform: 'translate3d(0, 0, 0)' }}
                  placeholder="blur"
                  blurDataURL={blurDataUrl}
                  src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_720/${public_id}.${format}`}
                  width={720}
                  height={480}
                  sizes="(max-width: 640px) 100vw,
                    (max-width: 1280px) 50vw,
                    (max-width: 1536px) 33vw,
                    25vw"
                />
              </div>
            ))}
          </div>
        </main>
        <footer className="p-6 text-center text-white/80 sm:p-12">
        </footer>
      </>
    )
}