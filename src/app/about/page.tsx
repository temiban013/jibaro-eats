import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Jibaro Media",
  description: "Professional photography and media production by Frank Vázquez",
  openGraph: {
    images:
      "https://res.cloudinary.com/drc0myo7z/image/upload/q_auto,f_auto,c_scale,w_720/v1705793107/Jibaro-Works/logo2_opokyt.jpg",
  },
  twitter: {
    images:
      "https://res.cloudinary.com/drc0myo7z/image/upload/q_auto,f_auto,c_scale,w_720/v1705793107/Jibaro-Works/logo2_opokyt.jpg",
  },
};

export default function AboutPage() {
  // Hardcoded image paths for the "Recent Work" section
  const workImages = [
    "v1694092673/Jibaro-Eats/SAM_0880_rqbndo.jpg",
    "v1694092680/Jibaro-Eats/SAM_8870_bfah5u.jpg",
    "v1694092670/Jibaro-Eats/_SAM6463_iz9g4k.jpg",
  ];

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
          <Link href="/contact" className="text-blue-500 hover:text-blue-700">
            Contact Us
          </Link>
        </nav>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl mb-8">
            About Us
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg mb-4">
              Jibaro Media Group is a different advertising and production
              agency; since we have all the promotional tools (video,
              photography, graphic art and web page design) within our company.
              Therefore, we do not have to hire third party freelancers to
              achieve the dissemination purposes of our customers.
            </p>

            <p className="text-lg mb-4">
              Our slogan is &ldquo;Awakening Consciousness&ldquo;. In our
              productions, this is defined as creating awareness of the
              world&quot;s situations that manifest demagogically in our
              society.
            </p>

            <p className="text-lg mb-4">
              For our customers, this means making productions that awaken
              consumer awareness around the product or service we are
              campaigning for.
            </p>

            <p className="text-lg mb-4">
              In other words, our campaigns are designed to draw the attention
              of the subconscious mind, provoking the immediate reaction to the
              conscious mind.
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className="relative w-full max-w-md h-96">
            <Image
              src="https://res.cloudinary.com/drc0myo7z/image/upload/q_auto,f_auto,c_scale,w_720/v1694092680/Jibaro-Eats/SAM_7900_koubw1.jpg"
              alt="Jibaro Media Logo"
              fill
              className="object-contain"
              sizes="(max-width: 480px) 95vw, (max-width: 640px) 90vw, (max-width: 1280px) 50vw, (max-width: 1536px) 33vw, 25vw"
            />
          </div>
        </div>
      </div>

      <div className="mt-12 mb-8">
        <h2 className="text-3xl font-bold mb-6">Our Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-black p-6 rounded-lg text-white hover:bg-gray-900 transition-colors">
            <h3 className="text-xl font-semibold mb-3">Photography</h3>
            <p>
              Professional photography services for events, portraits, food,
              fashion, and more.
            </p>
          </div>

          <div className="bg-black p-6 rounded-lg text-white hover:bg-gray-900 transition-colors">
            <h3 className="text-xl font-semibold mb-3">Video Production</h3>
            <p>
              Commercials, music videos, short films, and documentary
              production.
            </p>
          </div>

          <div className="bg-black p-6 rounded-lg text-white hover:bg-gray-900 transition-colors">
            <h3 className="text-xl font-semibold mb-3">Graphic Design</h3>
            <p>
              Logo design, branding materials, print design, and digital assets.
            </p>
          </div>

          <div className="bg-black p-6 rounded-lg text-white hover:bg-gray-900 transition-colors">
            <h3 className="text-xl font-semibold mb-3">Web Design</h3>
            <p>
              Responsive websites, online stores, and digital marketing
              solutions.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16 mb-8">
        <h2 className="text-3xl font-bold mb-6">Recent Work</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {workImages.map((imagePath) => (
            <div
              key={imagePath}
              className="group relative h-64 rounded-lg overflow-hidden"
            >
              <Image
                src={`https://res.cloudinary.com/drc0myo7z/image/upload/q_auto,f_auto,c_scale,w_720/${imagePath}`}
                alt={`Portfolio example ${imagePath}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 480px) 95vw, (max-width: 640px) 90vw, (max-width: 1280px) 50vw, (max-width: 1536px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Link
                  href="/works"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  View Gallery
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer className="p-6 text-center text-white/80 sm:p-12" />
    </main>
  );
}
