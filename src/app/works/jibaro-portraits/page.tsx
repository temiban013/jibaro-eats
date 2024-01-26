
import { Metadata } from 'next'
import { Suspense } from 'react'
import HomePage from '../../../components/HomePage'
import getCloudImages from '../../../utils/getCloudImages'

export const metadata: Metadata = {
  title: 'Jibaro Portraits',
  description: 'Professional 30 Seconds Video Spot Production by Frank Vázquez',
  openGraph: {
    images: 'https://res.cloudinary.com/drc0myo7z/image/upload/c_scale,w_720/v1705794362/Jibaro-Works/image-asset_6_f2qlpa.jpg'
  },
  twitter: {
    images: 'https://res.cloudinary.com/drc0myo7z/image/upload/c_scale,w_720/v1705794362/Jibaro-Works/image-asset_6_f2qlpa.jpg'
  }
}

function SearchBarFallback() {
  return <>Jibaro Portraits</>
}
 
export default async function Page() {
  const cloudImages = await getCloudImages('Jibaro-Portraits')
  return (
    <Suspense fallback={<SearchBarFallback/>}>
      <HomePage images={ cloudImages.reducedResults } jibaroName='Jibaro Portraits'/>
    </Suspense>
  )
}