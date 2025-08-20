import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function HeroSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8 text-center lg:text-left">
          {/* 5 Star Rating */}
          <div className="flex items-center justify-center lg:justify-start space-x-2">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <FontAwesomeIcon 
                  key={i}
                  icon={faStar} 
                  className="h-6 w-6 text-black"
                />
              ))}
            </div>
            <span className="text-2xl font-bold text-gray-900">5.0</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Your Travel life<br />
              perfectly organized!
            </h1>
            
            {/* Description */}
            <p className="text-lg text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Plan, organize, and share your perfect trip with friends. Create 
              collaborative travel itineraries, manage packing lists, 
              track activities, store memories in your trip gallery, and keep 
              everyone on the same page. From solo adventures to group 
              getaways, make every journey stress-free and unforgettable.
            </p>
          </div>

          {/* App Store Button */}
          <div className="pt-4 flex justify-center lg:justify-start">
            <a 
              href="https://apps.apple.com/gb/app/travlprep-travel-planner/id6670488133" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block hover:opacity-80 transition-opacity duration-200"
            >
              <Image
                src="/appstore-icon.png"
                alt="Download on App Store"
                width={200}
                height={60}
                className="h-14 w-auto"
              />
            </a>
          </div>
        </div>

        {/* Right Content - Phone Mockup */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <Image
              src="/main-img.png"
              alt="Travlprep App Screenshots"
              width={700}
              height={580}
              className="w-full max-w-xl h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
} 