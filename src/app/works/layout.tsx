import '../globals.css'
import { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://JibaroEats.com/works'),
  icons: {
      icon: '/favicon.ico'
  },
  title: 'Jibaro Works',
  description: 'Eating Jibaro-style. Digital services for eateries.',
  alternates: {
      canonical: '/works',
      languages: {
          'en-US': '/en-US',
          'es-US': '/es-US'
      }
  },
  openGraph: {
      siteName: 'JibaroEats.com/works',
      description: 'Eating Jibaro-style. Digital services for eateries.',
      title: 'Jibaro Works',
      locale: 'en-US',
      images: 'https://res.cloudinary.com/drc0myo7z/image/upload/c_scale,w_1080/v1694092635/Jibaro-Eats/SAM_7866_b7ummj.jpg',
      videos: 'https://www.youtube.com/watch?v=ti2ob5111g8'
  },
  twitter: {
      card: 'summary_large_image',
      title: 'Jibaro Works',
      images: 'https://res.cloudinary.com/drc0myo7z/image/upload/c_scale,w_1080/v1694092635/Jibaro-Eats/SAM_7866_b7ummj.jpg',
      description: 'Eating Jibaro-style. Digital services for eateries.',
  }
}

export default function Works({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    children
  )
}
