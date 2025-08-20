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
    <nav className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo-title.png"
                alt="Travlprep"
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
                className="text-gray-700 hover:text-black px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Home
              </Link>
              <Link 
                href="/press" 
                className="text-gray-700 hover:text-black px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Press
              </Link>
              <Link 
                href="/about" 
                className="text-gray-700 hover:text-black px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                About Us
              </Link>
            </div>
          </div>

          {/* App Store Button - Desktop only */}
          <div className="hidden md:flex items-center">
            <Link 
              href="#" 
              className="flex items-center hover:opacity-80 transition-opacity duration-200"
            >
              <Image
                src="/appstore-icon.png"
                alt="Download on App Store"
                width={120}
                height={36}
                className="h-9 w-auto"
              />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-black hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
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
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 border-t border-gray-200">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-black block px-3 py-2 text-base font-medium transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/press" 
              className="text-gray-700 hover:text-black block px-3 py-2 text-base font-medium transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Press
            </Link>
            <Link 
              href="/about" 
              className="text-gray-700 hover:text-black block px-3 py-2 text-base font-medium transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </Link>
            
            {/* App Store Button in Mobile Menu */}
            <div className="px-3 py-4 border-t border-gray-300 mt-3">
              <Link 
                href="#" 
                className="flex justify-start hover:opacity-80 transition-opacity duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Image
                  src="/appstore-icon.png"
                  alt="Download on App Store"
                  width={120}
                  height={36}
                  className="h-9 w-auto"
                />
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
} 