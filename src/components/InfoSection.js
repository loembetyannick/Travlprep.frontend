'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function InfoSection() {
  const [selectedFeature, setSelectedFeature] = useState(1);

  const features = [
    {
      id: 1,
      icon: '📝',
      title: 'Plan Your Perfect Trip in Minutes',
      description: 'Create detailed itineraries with activities, schedules, and locations. Add notes, links, and budgets to keep everything organized in one place.',
      image: '/info-img1.png'
    },
    {
      id: 2,
      icon: '🤝',
      title: 'Collaborate with Your Friend',
      description: 'Share trips with friends and family in real-time. Everyone can add activities and contribute to the planning process seamlessly.',
      image: '/info-img2.png'
    },
    {
      id: 3,
      icon: '📸',
      title: 'Capture and Organize Trip Memories',
      description: 'Galleries automatically stores all your travel photos organized by trips. Create a visual diary of your adventures that\'s easy to share and revisit.',
      image: '/info-img3.png'
    },
    {
      id: 4,
      icon: '🔍',
      title: 'Discover Tools to Perfect Your Trip',
      description: 'Find the best tools to make your trip perfect. From travel attachments to currency converters, we\'ve got you covered.',
      image: '/info-img4.png'
    }
  ];

  const currentFeature = features.find(f => f.id === selectedFeature);

  return (
    <section id="info-section" className="w-full py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-4">
            What can you do with Maindays? 🤔
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          {/* Features List - Shows first on mobile, second on desktop */}
          <div className="space-y-8 order-2 lg:order-2">
            {features.map((feature) => (
              <div 
                key={feature.id} 
                className={`flex items-start space-x-6 p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                  selectedFeature === feature.id 
                    ? 'bg-white/15 backdrop-blur-sm border border-white/30 shadow-xl' 
                    : 'bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20'
                }`}
                onClick={() => setSelectedFeature(feature.id)}
              >
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl flex items-center justify-center text-3xl">
                    {feature.icon}
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <h3 className={`text-2xl font-bold mb-3 transition-colors duration-300 ${
                    selectedFeature === feature.id ? 'text-white' : 'text-gray-200'
                  }`}>
                    {feature.title}
                  </h3>
                  <p className={`text-lg leading-relaxed transition-colors duration-300 ${
                    selectedFeature === feature.id ? 'text-gray-300' : 'text-gray-400'
                  }`}>
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Phone Mockup - Shows second on mobile, first on desktop */}
          <div className="flex justify-center lg:justify-start order-1 lg:order-1">
            <div className="relative">
              <Image
                src={currentFeature.image}
                alt={`${currentFeature.title} - Maindays App Interface`}
                width={400}
                height={600}
                className="w-full max-w-sm h-auto shadow-2xl rounded-lg transition-all duration-300"
                priority
                style={{
                  filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.3))',
                  borderRadius: '30px',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 