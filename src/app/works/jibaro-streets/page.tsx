
import { Metadata } from 'next'
import { Suspense } from 'react'
import HomePage from '../../../components/HomePage'
import getCloudImages from '../../../utils/getCloudImages'

export const metadata: Metadata = {
  title: 'Jibaro Streets',
  description: 'Professional Street Photography by Frank Vázquez',
  openGraph: {
    images: 'https://res.cloudinary.com/drc0myo7z/image/upload/c_scale,w_720/v1705793118/Jibaro-Works/DSC_0033_uet4qw.jpg'
  },
  twitter: {
    images: 'https://res.cloudinary.com/drc0myo7z/image/upload/c_scale,w_720/v1705793118/Jibaro-Works/DSC_0033_uet4qw.jpg'
  }
}

function SearchBarFallback() {
  return <>Jibaro Streets</>
}
 
export default async function Page() {
  const cloudImages = await getCloudImages('Jibaro-Streets')
  return (
    <Suspense fallback={<SearchBarFallback/>}>
      <HomePage images={ cloudImages.reducedResults } jibaroName='Jibaro Streets'/>
    </Suspense>
  )
}