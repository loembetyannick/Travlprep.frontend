'use client';

import Image from 'next/image';

const features = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    title: 'Plan your moments',
    description:
      'Use Travlprep as your trip planner, event planner, or everyday adventure organiser. Add a title, pick a date, and your plan is ready.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    title: 'Build your map',
    description:
      'Drop pins onto your map and shape your experience visually. See every stop laid out in real space, connected in one visual route.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 6H20M4 10H14M4 14H18M4 18H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="19" cy="15" r="4" stroke="currentColor" strokeWidth="2" />
        <path d="M19 13V15H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Plan your itinerary',
    description:
      'Add locations, set times, and watch your day come together. A clean scrollable itinerary keeps everything in order from first stop to last.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="2" />
        <circle cx="8.5" cy="8.5" r="2" stroke="currentColor" strokeWidth="2" />
        <path d="M3 16L8 11L11 14L16 9L21 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Capture & organise automatically',
    description:
      'Every photo you take gets matched to the plan it belongs to. No more hunting through thousands of unsorted images.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 000-7.78z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Relive any moment, instantly',
    description:
      'Every plan becomes a beautiful visual scrapbook. Scroll back through your trips, browse your life year by year, and share it with the people who were there.',
  },
];

export default function InfoSection() {
  return (
    <section className="py-8 lg:py-24 px-4">
      <h2 className="text-center text-4xl mt-12 lg:mt-36 lg:text-[48px] font-medium mb-4 lg:mb-6">
        What does Travlprep include?
      </h2>
      <p className="text-center text-lg text-gray-600 max-w-2xl mx-auto mb-12 lg:mb-16">
        The only travel planner and photo organiser that connects every part of your experience
        — planning before, capturing during, and reliving after.
      </p>

      {/* Feature showcase image */}
      <div className="max-w-5xl mx-auto mb-16 lg:mb-20">
        <Image
          src="/Screenshot 2026-03-30 at 20.28.17.png"
          alt="Travlprep app features — Create Plans, Build Map, Plan Itinerary, Relive Memories, Explore Past Plans"
          width={1930}
          height={1046}
          className="w-full h-auto rounded-2xl"
          priority
        />
      </div>

      {/* Feature cards */}
      <div className="max-w-6xl mx-auto">
        {/* Desktop: single row of 5 */}
        <div className="hidden lg:grid grid-cols-5 gap-5">
          {features.map((feature, i) => (
            <div
              key={i}
              className="flex flex-col p-6 rounded-2xl bg-white"
              style={{
                boxShadow: '0px 1px 20px 1px rgba(228, 229, 233, 0.50)',
              }}
            >
              <div className="bg-gray-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-gray-800">
                {feature.icon}
              </div>
              <h3 className="text-base font-bold mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Tablet: 3 + 2 */}
        <div className="hidden md:grid lg:hidden grid-cols-3 gap-5">
          {features.slice(0, 3).map((feature, i) => (
            <div
              key={i}
              className="flex flex-col p-6 rounded-2xl bg-white"
              style={{
                boxShadow: '0px 1px 20px 1px rgba(228, 229, 233, 0.50)',
              }}
            >
              <div className="bg-gray-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-gray-800">
                {feature.icon}
              </div>
              <h3 className="text-base font-bold mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
          <div className="col-span-3 grid grid-cols-2 gap-5 max-w-[66%] mx-auto">
            {features.slice(3).map((feature, i) => (
              <div
                key={i}
                className="flex flex-col p-6 rounded-2xl bg-white"
                style={{
                  boxShadow: '0px 1px 20px 1px rgba(228, 229, 233, 0.50)',
                }}
              >
                <div className="bg-gray-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-gray-800">
                  {feature.icon}
                </div>
                <h3 className="text-base font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: stacked */}
        <div className="md:hidden flex flex-col gap-4">
          {features.map((feature, i) => (
            <div
              key={i}
              className="flex items-start gap-4 p-5 rounded-2xl bg-white"
              style={{
                boxShadow: '0px 1px 20px 1px rgba(228, 229, 233, 0.50)',
              }}
            >
              <div className="bg-gray-100 w-12 h-12 rounded-xl flex items-center justify-center shrink-0 text-gray-800">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-base font-bold mb-1">{feature.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
