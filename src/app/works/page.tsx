
import { Metadata } from 'next'
import { Suspense } from 'react'
import WorksPage from '@/components/WorksPage'
import getCloudImages from '@/utils/getCloudImages'

export const metadata: Metadata = {
  title: 'Jibaro Eats',
  description: 'Eating Jibaro-style. Digital services for eateries.',
  openGraph: {
    images: 'https://res.cloudinary.com/drc0myo7z/image/upload/c_scale,w_720/v1694092635/Jibaro-Eats/SAM_7866_b7ummj.jpg'
  },
  twitter: {
    images: 'https://res.cloudinary.com/drc0myo7z/image/upload/c_scale,w_720/v1694092635/Jibaro-Eats/SAM_7866_b7ummj.jpg'
  }
}

function SearchBarFallback() {
  return <>Jibaro Works</>
}
 
export default async function Page() {
  const cloudImages = await getCloudImages('Jibaro-works')
  return (
    <Suspense fallback={<SearchBarFallback/>}>
      <WorksPage images={ cloudImages.reducedResults }/>
    </Suspense>
  )
}