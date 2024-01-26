
import { Metadata } from 'next'
import { Suspense } from 'react'
import VideoPage from '../../../components/VideoPage'

export const metadata: Metadata = {
  title: 'Jibaro 30 Sec Spot',
  description: 'Professional 30 Seconds Video Spot Production by Frank Vázquez',
  openGraph: {
    images: 'https://res.cloudinary.com/drc0myo7z/image/upload/c_scale,w_720/v1705794362/Jibaro-Works/image-asset_6_f2qlpa.jpg'
  },
  twitter: {
    images: 'https://res.cloudinary.com/drc0myo7z/image/upload/c_scale,w_720/v1705794362/Jibaro-Works/image-asset_6_f2qlpa.jpg'
  }
}

function SearchBarFallback() {
  return <>Jibaro 30 Sec Spot</>
}


const videos = [
  {
    id: '1',
    videoId: 'KV5SQQ_tDGE',
    title: 'Gomez Western Wear ad 1'
  },
  {
    id: '2',
    videoId: 'zM3pQDG21SU',
    title: 'Cambridge Puerto Rico en Delaware'
  },
  {
    id: '3',
    videoId: 'uhQhavKXyZ8',
    title: 'Gomez Western Wear Ad2'
  },
  {
    id: '4',
    videoId: 'OoiEdsv-JnI',
    title: 'El Punto Vegano'
  },
  {
    id: '5',
    videoId: 'lW6bjv8T3Yw',
    title: 'Cambridge College Puerto Rico in Chicago 4k'
  },
  {
    id: '6',
    videoId: 'iAtXw-GlePQ',
    title: 'Dallas en la Mañana 30 sec 1'
  },
  {
    id: '7',
    videoId: '01Nzx6Jhtuw',
    title: 'Aprieta en un Abrazo, no Aprietes el Gatillo'
  },
  {
    id: '8',
    videoId: '34MFmLaGGt0',
    title: 'Clínica de Medicina Alternativa: Los Deportistas'
  },
  {
    id: '9',
    videoId: 'x-AEWiH62bk',
    title: '30 sec spot 2'
  },
  {
    id: '10',
    videoId: 'nqlYbDFwltM',
    title: 'Restaurante Los Jalicienses'
  },
  {
    id: '11',
    videoId: 'lhtwu0T7dok',
    title: 'Clínica de Medicina Alternativa: El Cemental'
  }   
]  
 
export default async function Page() {
  return (
    <Suspense fallback={<SearchBarFallback/>}>
      <VideoPage videos={ videos } jibaroName='Jibaro 30 Sec Spot'/>
    </Suspense>
  )
}