import Image from 'next/image';

export default function RatingSection() {
  return (
    <section className="w-full py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <a 
          href="https://apps.apple.com/gb/app/maindays-travel-planner/id6670488133" 
          target="_blank"
          rel="noopener noreferrer"
          className="block hover:opacity-80 transition-opacity duration-300"
        >
          <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
            <Image
              src="/rating.png"
              alt="5 Star Rating on the App Store - Click to download"
              fill
              className="object-contain"
              priority
            />
          </div>
        </a>
      </div>
    </section>
  );
} 