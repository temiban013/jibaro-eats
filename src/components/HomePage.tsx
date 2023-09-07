'use client'

import Link from "next/link"
import { useSearchParams } from 'next/navigation'
import { useEffect, useRef } from 'react'
import Image from "next/image"
import Modal from "../components/Modal"
import { useLastViewedPhoto } from '../utils/useLastViewedPhoto'
import { ImageProps } from "@/utils/types"

export default function HomePage({images}: { images: ImageProps[] }) {
    const searchParams = useSearchParams()
    const photoId = searchParams.get('id')
    const [lastViewedPhoto, setLastViewedPhoto] = useLastViewedPhoto()
  
    const lastViewedPhotoRef = useRef<HTMLAnchorElement>(null)
  
    useEffect(() => {
      // This effect keeps track of the last viewed photo in the modal to keep the index page in sync when the user navigates back
      if (lastViewedPhoto && !photoId) {
        lastViewedPhotoRef.current?.scrollIntoView({ block: 'center' })
        setLastViewedPhoto(null)
      }
    }, [photoId, lastViewedPhoto, setLastViewedPhoto])
  
    return (
      <>
        <main className="mx-auto max-w-[1960px] p-4">
          {photoId && (
            <Modal
              images={images}
              onClose={() => {
                const numberId = Number(photoId) 
                setLastViewedPhoto(numberId)
              }}
            />
          )}
          <div className="columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4">
            {images.map(({ id, public_id, format, blurDataUrl }) => (
              <Link
                key={id}
                href={`/?photoId=${id}`}
                as={`/p/${id}`}
                ref={id === Number(lastViewedPhoto) ? lastViewedPhotoRef : null}
                shallow
                className="after:content group relative mb-5 block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight"
              >
                <Image
                  alt="Next.js Conf photo"
                  className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
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
              </Link>
            ))}
          </div>
        </main>
        <footer className="p-6 text-center text-white/80 sm:p-12">
        </footer>
      </>
    )
}