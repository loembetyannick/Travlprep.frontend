import Image from 'next/image';

export default function CommunitySection() {
  return (
    <section className="w-full pt-0 pb-4 sm:pb-6 lg:pb-8">
      <div className="max-w-none mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] 2xl:h-[800px] max-w-4xl sm:max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto">
          <Image
            src="/community-img.png"
            alt="Join our Community"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
} 