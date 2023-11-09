'use client'

import Link from "next/link"
import { useSearchParams } from 'next/navigation'
import { useEffect, useRef } from 'react'
import Image from "next/image"
import { ImageProps } from "@/utils/types"

export default function HomePage({images}: { images: ImageProps[] }) {
    const searchParams = useSearchParams()
    const photoId = searchParams.get('id')
  
    const lastViewedPhotoRef = useRef<HTMLAnchorElement>(null)
  
    return (
      <>
        <main className="mx-auto max-w-[1960px] p-4">
          <div className="columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4">
            <div className="after:content group relative mb-5 block w-full after:pointer-events-none">
              <div className="text-center bg-black text-white/80 sm:text-left sm:pl-12 sm:pt-12 sm:pb-6">
                <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">Jíbaro Eats</h1>
                <p className="text-xl sm:text-2xl"><a href="tel:+17879328884" className="sm:inline-block">(787) 932-0884</a> </p>
                <p className="text-xl sm:text-2xl"><a href="mailto:jibaromg@gmail.com" className="sm:inline-block">jibaromg@gmail.com</a></p>
              </div>
            </div>
            {images.map(({ id, public_id, format, blurDataUrl }) => (
              <div key={id} className="after:content group relative mb-5 block w-full after:pointer-events-none">
                <Image
                  alt="Jibaro Eats"
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