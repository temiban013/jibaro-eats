import { Metadata } from 'next'
import { Suspense } from 'react'
import HomePage from '../components/HomePage'
import getCloudImages from '../utils/getCloudImages'
import { ImageProps } from '@/utils/types'

export const metadata: Metadata = {
  title: 'Jibaro Eats',
  openGraph: {
    images: '/og-image.png'
  },
  twitter: {
    images: '/og-image.png'
  }
}

function SearchBarFallback() {
  return <>Jibaro Eats</>
}
 
export default async function Page() {
    const cloudImages = await getCloudImages()
    return (
      <Suspense fallback={<SearchBarFallback/>}>
        <HomePage images={ cloudImages.reducedResults }/>
      </Suspense>
    )
}