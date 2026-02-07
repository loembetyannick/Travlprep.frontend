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
    <nav className="mx-4 mt-4 md:mx-12 md:mt-8 md:bg-white/80 md:backdrop-blur-xl md:shadow-lg md:border md:border-gray-200 md:rounded-[32px]">
      <div className="max-w-7xl mx-auto px-2 sm:px-8 lg:px-2">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
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
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link 
                href="/"
                className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Home
              </Link>
              <a 
                href="mailto:support@lifemade.app"
                className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Press
              </a>
              <a 
                href="mailto:support@lifemade.app?subject=Feedback"
                className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Feedback
              </a>
            </div>
          </div>

          {/* Try for Free Button - Desktop only */}
          <div className="hidden md:flex items-center">
            <a 
              href="https://apps.apple.com/gb/app/lifemade-travel-planner/id6670488133" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black font-semibold px-6 py-2.5 rounded-full hover:bg-gray-100 transition-all duration-200 text-sm shadow-lg hover:shadow-xl"
            >
              Download
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-300"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger/Close icon */}
              {isMobileMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
            <Link 
              href="/"
              className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <a 
              href="mailto:support@lifemade.app"
              className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Press
            </a>
            <a 
              href="mailto:support@lifemade.app?subject=Feedback"
              className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Feedback
            </a>
            
            {/* Try for Free Button in Mobile Menu */}
            <div className="px-3 py-4 border-t border-gray-200 mt-3">
              <a 
                href="https://apps.apple.com/gb/app/lifemade-travel-planner/id6670488133" 
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition-all duration-200 text-center shadow-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Download
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
} 