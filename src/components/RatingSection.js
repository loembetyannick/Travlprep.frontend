import Image from 'next/image';

export default function RatingSection() {
  return (
    <section className="w-full py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
          <Image
            src="/rating.png"
            alt="5 Star Rating on the App Store"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
} 