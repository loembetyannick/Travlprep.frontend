import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="pt-7">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section: Logo + App Store Badge */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <Image
              src="/logo-title.png"
              alt="Travlprep"
              width={120}
              height={36}
              className="h-8 w-auto"
            />
          </div>
          <p className="text-sm text-gray-600 mt-2">Download Travlprep</p>
          <div className="flex flex-col lg:flex-row gap-2">
            <a
              href="https://apps.apple.com/gb/app/travlprep/id6670488133"
              className="block"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/appstore-icon.png"
                alt="Download on App Store"
                width={135}
                height={40}
                className="h-10 w-auto hover:opacity-80 transition-opacity"
              />
            </a>
          </div>
        </div>

        {/* Legal Links */}
        <div>
          <h3 className="text-base font-semibold text-black mb-4">Legal</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/privacy-policy" className="text-sm text-gray-600 hover:text-black transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms-and-conditions" className="text-sm text-gray-600 hover:text-black transition-colors">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-base font-semibold text-black mb-4">Company</h3>
          <ul className="space-y-2">
            <li>
              <a href="mailto:support@travlprep.com" className="text-sm text-gray-600 hover:text-black transition-colors">
                Contact
              </a>
            </li>
            <li>
              <a href="mailto:support@travlprep.com" className="text-sm text-gray-600 hover:text-black transition-colors">
                Press
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Row: Copyright and Social Links */}
      <div className="max-w-7xl mx-auto px-4 mt-2 py-4 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm text-gray-500">
          © Copyright 2025, All rights reserved
        </p>
        <div className="flex space-x-4 mt-4 sm:mt-0">
          <a
            href="https://www.instagram.com/travlprep/"
            className="text-gray-500 hover:text-black transition-colors"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} className="w-6 h-6" />
          </a>
          <a
            href="https://www.tiktok.com/@travlprep"
            className="text-gray-500 hover:text-black transition-colors"
            aria-label="TikTok"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTiktok} className="w-6 h-6" />
          </a>
          <a
            href="https://youtube.com/@travlprep"
            className="text-gray-500 hover:text-black transition-colors"
            aria-label="YouTube"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faYoutube} className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}
