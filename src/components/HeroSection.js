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
              Plan and Relive Moments
              that matter
            </h1>
            
            {/* Description */}
            <p className="text-lg text-gray-700 leading-relaxed max-w-xl mx-auto lg:mx-0">
            Pin and plan the moments that matter most. Stay organized, add plans, create meaningful itineraries, and relive your experiences, on your own or with others, all in one place. Save memories so you can revisit them anytime.</p>
          </div>

          {/* Try for Free Button */}
          <div className="pt-4 flex justify-center lg:justify-start">
            <a 
              href="https://apps.apple.com/gb/app/lifemade-travel-planner/id6670488133" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-black font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Download
            </a>
          </div>
        </div>

        {/* Right Content - Phone Mockup */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <Image
              src="/main-img.png"
              alt="Lifemade App Screenshots"
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