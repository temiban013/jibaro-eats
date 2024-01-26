
import { Metadata } from 'next'
import { Suspense } from 'react'
import HomePage from '../../../components/HomePage'
import getCloudImages from '../../../utils/getCloudImages'

export const metadata: Metadata = {
  title: 'Jibaro Animals',
  description: 'Professional Animal photography by Frank Vázquez',
  openGraph: {
    images: 'https://res.cloudinary.com/drc0myo7z/image/upload/c_scale,w_1080/v1705772991/Jibaro-Animals/IMG_6151_d5zbqw.jpg'
  },
  twitter: {
    images: 'https://res.cloudinary.com/drc0myo7z/image/upload/c_scale,w_1080/v1705772991/Jibaro-Animals/IMG_6151_d5zbqw.jpg'
  }
}

function SearchBarFallback() {
  return <>Jibaro Animals</>
}
 
export default async function Page() {
  const cloudImages = await getCloudImages('jibaro-animals')
  return (
    <Suspense fallback={<SearchBarFallback/>}>
      <HomePage images={ cloudImages.reducedResults } jibaroName='Jíbaro Animals'/>
    </Suspense>
  )
}