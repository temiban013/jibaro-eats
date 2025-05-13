import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Jibaro Media",
  description:
    "Get in touch with our team for photography and media production services",
  openGraph: {
    images:
      "https://res.cloudinary.com/drc0myo7z/image/upload/c_scale,w_720/v1705793123/Jibaro-Works/IMG_4152_jpafzn.jpg",
  },
  twitter: {
    images:
      "https://res.cloudinary.com/drc0myo7z/image/upload/c_scale,w_720/v1705793123/Jibaro-Works/IMG_4152_jpafzn.jpg",
  },
};

// Define portfolio images array with known working URLs
const portfolioImages = [
  {
    id: 1,
    src: "https://res.cloudinary.com/drc0myo7z/image/upload/c_scale,w_400/v1705793126/Jibaro-Works/DSCF6708_uqxjls.jpg",
    alt: "Music photography sample",
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/drc0myo7z/image/upload/c_scale,w_400/v1705793118/Jibaro-Works/DSC_0033_uet4qw.jpg",
    alt: "Street photography sample",
  },
  {
    id: 3,
    src: "https://res.cloudinary.com/drc0myo7z/image/upload/c_scale,w_400/v1705793123/Jibaro-Works/IMG_4152_jpafzn.jpg",
    alt: "Event photography sample",
  },
  {
    id: 4,
    src: "https://res.cloudinary.com/drc0myo7z/image/upload/c_scale,w_400/v1705793129/Jibaro-Works/SAM_3297-2_loonfg.jpg",
    alt: "Nature photography sample",
  },
  {
    id: 5,
    src: "https://res.cloudinary.com/drc0myo7z/image/upload/c_scale,w_400/v1705793215/Jibaro-Works/IMG_1671_1_t4uxso.jpg",
    alt: "Sports photography sample",
  },
];

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-[1960px] p-4">
      <div className="flex justify-center sm:justify-start sm:p-10 sm:pl-12 pb-2">
        <nav className="flex flex-row space-x-4 whitespace-nowrap text-lg sm:text-xl">
          <Link href="/" className="text-blue-500 hover:text-blue-700">
            Home
          </Link>
          <Link href="/works" className="text-blue-500 hover:text-blue-700">
            Works
          </Link>
          <Link href="/about" className="text-blue-500 hover:text-blue-700">
            About
          </Link>
        </nav>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <div>
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl mb-8">
            Contact Us
          </h1>

          <div className="max-w-xl">
            <div className="bg-black text-white rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>
              <div className="mb-4">
                <h3 className="text-lg font-medium mb-2">Phone</h3>
                <a
                  href="tel:+17879320884"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  (787) 932-0884
                </a>
              </div>

              <div className="mb-4">
                <h3 className="text-lg font-medium mb-2">Email</h3>
                <a
                  href="mailto:jibaromg@gmail.com"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  jibaromg@gmail.com
                </a>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Office Address</h3>
                <address className="not-italic" title="Mailing Address">
                  P.O. Box 159
                  <br />
                  00677
                  <br />
                  Puerto Rico
                  <br />
                  United States
                </address>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Working Hours</h2>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday:</span>
                  <span>10:00 AM - 4:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Follow Us</h2>
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <title>Facebook</title>
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-600 hover:text-pink-800 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <title>Instagram</title>
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 hover:text-red-800 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <title>YouTube</title>
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="bg-black text-white rounded-lg p-8 shadow-lg relative overflow-hidden">
            {/* Logo watermark as background */}
            <div className="absolute inset-0 flex items-center justify-center opacity-10 z-0">
              <Image
                src="https://res.cloudinary.com/drc0myo7z/image/upload/c_scale,w_720/v1705793107/Jibaro-Works/logo2_opokyt.jpg"
                alt="Logo Watermark"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 48"
              />
            </div>

            {/* Form content */}
            <div className="relative z-10">
              <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 mb-8">
        <h2 className="text-3xl font-bold mb-6">Portfolio Highlights</h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {portfolioImages.map((image) => (
            <div
              key={image.id}
              className="group relative h-48 rounded-lg overflow-hidden"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 20vw"
              />
            </div>
          ))}
        </div>
      </div>

      <footer className="p-6 text-center text-white/80 sm:p-12" />
    </main>
  );
}
