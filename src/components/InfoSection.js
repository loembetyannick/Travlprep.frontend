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

      {/* Desktop: 3 on first row, 2 centered on second row */}
      <div className="hidden lg:block max-w-6xl mx-auto">
        <div className="grid grid-cols-3 gap-6">
          {features.slice(0, 3).map((feature, i) => (
            <div key={i} className="flex justify-center">
              <Image
                src={feature.image}
                alt={feature.alt}
                width={320}
                height={640}
                className="w-full h-auto object-contain rounded-2xl"
              />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-6 mt-6 max-w-[680px] mx-auto">
          {features.slice(3).map((feature, i) => (
            <div key={i} className="flex justify-center">
              <Image
                src={feature.image}
                alt={feature.alt}
                width={320}
                height={640}
                className="w-full h-auto object-contain rounded-2xl"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Mobile: carousel with dots */}
      <div className="lg:hidden max-w-sm mx-auto relative">
        <button
          onClick={goPrev}
          className="absolute left-[-16px] top-1/2 -translate-y-1/2 z-10 flex w-10 h-10 items-center justify-center rounded-full bg-white shadow-lg"
          aria-label="Previous feature"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <button
          onClick={goNext}
          className="absolute right-[-16px] top-1/2 -translate-y-1/2 z-10 flex w-10 h-10 items-center justify-center rounded-full bg-white shadow-lg"
          aria-label="Next feature"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
