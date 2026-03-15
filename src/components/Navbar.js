'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="backdrop-blur-xl bg-white/20 sticky top-0 z-50 px-5 xl:px-0 py-4">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row justify-between items-center">
        <div className="w-full">
          <div className="flex items-center w-full justify-between">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo-title.png"
                alt="Lifemade"
                width={180}
                height={40}
                className="h-8 w-auto"
                priority
              />
            </Link>

            <button
              type="button"
              onClick={toggleMobileMenu}
              className="block lg:hidden"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-800">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-800">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex justify-center absolute left-1/2 transform top-7 -translate-x-1/2 gap-[30px] text-base font-medium">
            <Link href="/" className="hover:text-gray-600 transition-colors">Home</Link>
            <a href="mailto:support@lifemade.app" className="hover:text-gray-600 transition-colors">Press</a>
            <a href="mailto:support@lifemade.app?subject=Feedback" className="hover:text-gray-600 transition-colors">Feedback</a>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="lg:hidden" id="mobile-menu">
              <ul className="flex flex-col text-lg">
                <li className="py-2">
                  <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
                </li>
                <li className="py-2">
                  <a href="mailto:support@lifemade.app" onClick={() => setIsMobileMenuOpen(false)}>Press</a>
                </li>
                <li className="py-2">
                  <a href="mailto:support@lifemade.app?subject=Feedback" onClick={() => setIsMobileMenuOpen(false)}>Feedback</a>
                </li>
              </ul>
              <div className="w-full items-center mt-3 gap-4 flex">
                <a
                  href="https://apps.apple.com/gb/app/lifemade-travel-planner/id6670488133"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block hover:opacity-80 transition-opacity"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Image
                    src="/appstore-icon.png"
                    alt="Download on App Store"
                    width={135}
                    height={40}
                    className="h-10 w-auto"
                  />
                </a>
              </div>
            </div>
          )}
        </div>

        {/* App Store Button (Desktop) */}
        <div className="hidden lg:flex min-w-[180px] items-center gap-4">
          <a
            href="https://apps.apple.com/gb/app/lifemade-travel-planner/id6670488133"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block hover:opacity-80 transition-opacity"
          >
            <Image
              src="/appstore-icon.png"
              alt="Download on App Store"
              width={135}
              height={40}
              className="h-10 w-auto"
            />
          </a>
        </div>
      </div>
    </header>
  );
}
