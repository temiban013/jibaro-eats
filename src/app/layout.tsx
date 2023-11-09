import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://JibaroEats.com'),
  icons: {
      icon: '/favicon.ico'
  },
  title: 'Jibaro Eats',
  description: 'Eating Jibaro-style. Digital services for eateries.',
  alternates: {
      canonical: '/',
      languages: {
          'en-US': '/en-US',
          'es-US': '/es-US'
      }
  },
  openGraph: {
      siteName: 'JibaroEats.com',
      description: 'Eating Jibaro-style. Digital services for eateries.',
      title: 'Jibaro Eats',
      locale: 'en-US',
      images: 'https://res.cloudinary.com/drc0myo7z/image/upload/c_scale,w_1080/v1694092635/Jibaro-Eats/SAM_7866_b7ummj.jpg',
      videos: 'https://www.youtube.com/watch?v=ti2ob5111g8'
  },
  twitter: {
      card: 'summary_large_image',
      title: 'Jibaro Eats',
      images: 'https://res.cloudinary.com/drc0myo7z/image/upload/c_scale,w_1080/v1694092635/Jibaro-Eats/SAM_7866_b7ummj.jpg',
      description: 'Eating Jibaro-style. Digital services for eateries.',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
