import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Section */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <div className="space-y-4">
              <a href="mailto:support@maindays.app" className="block text-gray-300 hover:text-white transition-colors">
                Press
              </a>
              <a href="mailto:support@maindays.app" className="block text-gray-300 hover:text-white transition-colors">
                Email
              </a>
              <a 
                href="https://apps.apple.com/gb/app/maindays-travel-planner/id6670488133" 
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Download
              </a>
            </div>
          </div>

          {/* Legal Section */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Legal</h3>
            <div className="space-y-4">
              <Link href="/terms-and-conditions" className="block text-gray-300 hover:text-white transition-colors">
                Terms & Conditions
              </Link>
              <Link href="/privacy-policy" className="block text-gray-300 hover:text-white transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>

          {/* Empty Column for Spacing */}
          <div className="hidden md:block"></div>

          {/* Social Media Icons */}
          <div className="flex justify-start md:justify-end space-x-6">
            <a 
              href="https://www.instagram.com/maindays/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors"
            >
              <FontAwesomeIcon icon={faInstagram} className="h-8 w-8" />
            </a>
            <a 
              href="https://www.tiktok.com/@maindays" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors"
            >
              <FontAwesomeIcon icon={faTiktok} className="h-8 w-8" />
            </a>
            <a 
              href="https://youtube.com/@maindays?si=bocKiOxfi8Seyuez" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors"
            >
              <FontAwesomeIcon icon={faYoutube} className="h-8 w-8" />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* Left Side - App Store and Rating */}
            <div className="flex flex-col space-y-4">
              {/* App Store Button */}
              <a 
                href="https://apps.apple.com/gb/app/maindays-travel-planner/id6670488133" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/appstore-icon.png"
                  alt="Download on App Store"
                  width={150}
                  height={45}
                  className="h-12 w-auto"
                />
              </a>
              
              {/* Star Rating */}
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <FontAwesomeIcon 
                      key={i}
                      icon={faStar} 
                      className="h-5 w-5 text-white"
                    />
                  ))}
                </div>
                <span className="text-lg font-semibold text-white">5.0</span>
              </div>
            </div>

            {/* Right Side - Copyright */}
            <div className="text-gray-400 text-sm">
              © Copyright 2025, All rights reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 