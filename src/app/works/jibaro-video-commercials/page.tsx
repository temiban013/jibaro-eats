
  import { Metadata } from 'next'
  import { Suspense } from 'react'
  import VideoPage from '../../../components/VideoPage'
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
    return <>Jibaro Video Commercials</>
  }

  const videos = [
      {
        id: '1',
        videoId: '_ohozBm45Uc',
        title: 'CocoBana Vegetarian Restaurant'
      },
      {
        id: '2',
        videoId: '5fkPCEOzjJs',
        title: 'Restaurante Buena Vibra'
      },
      {
        id: '3',
        videoId: 'XwJT2HVlo4k',
        title: 'Advanced React Patterns'
      },
      {
        id: '4',
        videoId: 'ti2ob5111g8',
        title: 'Chasca Frutas'
      },
      {
        id: '5',
        videoId: 'J-Wd7fpn8bk',
        title: 'Chalio\'s Restaurant'
      },
      {
        id: '6',
        videoId: 'C520Klh75oU',
        title: 'Jobes Hats (The Rodeo Hat)'
      },
      {
        id: '7',
        videoId: '-n-Ivm-asnY',
        title: 'Bad Azz Burrito ad 2'
      },
      {
        id: '8',
        videoId: 'RBkGdFYIpc8',
        title: 'Elotes Tapia'
      },
      {
        id: '9',
        videoId: 'Zb2Gg5W7r3s',
        title: 'Bayamon Hospital HD'
      },
      {
        id: '10',
        videoId: 'xJuKJNan2gg',
        title: 'Signature Gallery Furniture'
      },
      {
        id: '11',
        videoId: 'sLJ-Fe3lub0',
        title: 'Cambridge Chicago'
      },
      {
        id: '12',
        videoId: 'LXuu2_0ji7k',
        title: 'Cambridge Puerto Rico (Delaware)'
      },
      {
        id: '13',
        videoId: 'oL2F3ds7HtY',
        title: 'Botanas Lokas'
      }
    ]  
   
  export default async function Page() {
    return (
      <Suspense fallback={<SearchBarFallback/>}>
        <VideoPage videos={ videos } jibaroName='Jibaro Video Commercial'/>
      </Suspense>
    )
  }  