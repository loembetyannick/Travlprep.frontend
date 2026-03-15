'use client';

import Image from 'next/image';
import { useState } from 'react';

const features = [
  { image: '/feature-create-plans.png', alt: 'Create Your Plans' },
  { image: '/feature-upcoming-plans.png', alt: 'Add Upcoming Plans' },
  { image: '/feature-itinerary.png', alt: 'Build Your Itinerary' },
  { image: '/feature-map.png', alt: 'Design Your Moment' },
  { image: '/feature-relive.png', alt: 'Relive Your Moment' },
];

export default function InfoSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goNext = () =>
    setActiveIndex((prev) => (prev + 1) % features.length);
  const goPrev = () =>
    setActiveIndex((prev) => (prev - 1 + features.length) % features.length);

  return (
    <section className="py-16 lg:py-24 px-4">
      <h2 className="text-center text-4xl mt-36 lg:text-[48px] font-medium mb-12 lg:mb-16">
        What does Lifemade include?
      </h2>

      <div className="max-w-md mx-auto relative">
        {/* Left Arrow */}
        <button
          onClick={goPrev}
          className="absolute left-[-60px] top-1/2 -translate-y-1/2 z-10 hidden lg:flex w-12 h-12 items-center justify-center rounded-full bg-white shadow-lg hover:bg-gray-100 transition-colors"
          aria-label="Previous feature"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Right Arrow */}
        <button
          onClick={goNext}
          className="absolute right-[-60px] top-1/2 -translate-y-1/2 z-10 hidden lg:flex w-12 h-12 items-center justify-center rounded-full bg-white shadow-lg hover:bg-gray-100 transition-colors"
          aria-label="Next feature"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div className="overflow-hidden rounded-3xl">
          <Image
            src={features[activeIndex].image}
            alt={features[activeIndex].alt}
            width={400}
            height={800}
            className="w-full h-auto object-contain mx-auto transition-opacity duration-300 ease-in-out"
          />
        </div>

        {/* Dots */}
        <div className="flex justify-center space-x-2 mt-6">
          {features.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === activeIndex ? 'bg-gray-800' : 'bg-gray-300'
              }`}
              aria-label={`Go to feature: ${features[i].alt}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
