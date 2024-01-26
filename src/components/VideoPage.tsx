'use client'

import Link from "next/link"
import { useRef } from 'react'
import { VideoProps } from "@/utils/types"
import JibaroCard from "./JibaroCard";
import router from "next/router"

interface VideoPageProps {
  jibaroName: string; 
  videos: VideoProps[];
}

const navigateToTitle = (videoId: string) => {
  router.push(`https://youtu.be/${videoId}`);
} 

const getVideoUrl = (videoId: string) => {
  return `https://www.youtube.com/embed/${videoId}`
}

export default function VideoPage({ jibaroName, videos }: VideoPageProps) {
  
    const lastViewedPhotoRef = useRef<HTMLAnchorElement>(null)
      
    return (
      <>
        <main className="mx-auto max-w-[1960px] p-4">
          <div className="columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4">
            <div className="after:content group relative mb-5 block w-full after:pointer-events-none">
              <div className="flex justify-center sm:justify-start sm:p-10 sm:pl-12 pb-2">
                <nav className="flex flex-row space-x-4 whitespace-nowrap text-lg sm:text-xl">
                  <Link href="/works" className="text-blue-500 hover:text-blue-700">Works</Link>
                  <Link href="/about" className="text-blue-500 hover:text-blue-700">About</Link>
                  <Link href="/contact" className="text-blue-500 hover:text-blue-700">Contact Us</Link>
                </nav>
              </div>
                <JibaroCard jibaroName={jibaroName}/>
            </div>
            {videos.map(({ id, videoId, title }) => (
                <div key={id} className="after:content group relative pl-12 mb-5 block w-full after:pointer-events-none">
                    <iframe
                    src={getVideoUrl(videoId)}
                    title={title} 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="transform rounded-lg brightness-98 transition will-change-auto group-hover:brightness-50"
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