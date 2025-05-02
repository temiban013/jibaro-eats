"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState } from "react";

export default function Navigation() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Works", path: "/works" },
    { name: "About", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  const isActive = (path: string): boolean => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname?.startsWith(path)) return true;
    return false;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header className="w-full bg-black bg-opacity-90 text-white py-4 sticky top-0 z-50">
      <div className="max-w-[1960px] mx-auto px-4 sm:px-6 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <div className="relative h-12 w-12 mr-4 rounded-lg overflow-hidden">
              <Image
                src="/jibaro-logo.png"
                alt="Jibaro Media"
                fill
                sizes="(max-width: 768px) 100vw, 48px"
                className="object-cover"
              />
            </div>
            <span className="hidden sm:inline-block text-xl font-semibold">
              Jibaro Media
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`text-lg transition-colors duration-200 hover:text-blue-400 ${
                isActive(item.path) ? "text-blue-500 font-medium" : "text-white"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            role="img"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-gray-900 py-4">
          <div className="flex flex-col space-y-4 px-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`text-lg transition-colors duration-200 hover:text-blue-400 ${
                  isActive(item.path)
                    ? "text-blue-500 font-medium"
                    : "text-white"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
