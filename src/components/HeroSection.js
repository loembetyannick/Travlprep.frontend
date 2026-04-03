import Image from 'next/image';

export default function HeroSection() {
  return (
    <main className="grid grid-cols-1 lg:grid-cols-2 mt-6 sm:mt-10 items-center max-w-screen-xl mx-auto">
      <div className="flex flex-col gap-5 sm:gap-4 px-6 sm:px-8 lg:px-0 lg:w-fit lg:mx-auto">
        {/* Social Proof Pill */}
        <div className="flex items-center h-[42.5px] border border-[#c6c6c68f] rounded-full p-1.5 pr-3 text-xs gap-2 w-fit">
          <div className="flex -space-x-3">
            <Image src="/ellipse-1.png" alt="User 1" width={38} height={38} className="rounded-full object-cover border-2 border-white z-30" />
            <Image src="/ellipse-2.png" alt="User 2" width={38} height={38} className="rounded-full object-cover border-2 border-white z-20" />
            <Image src="/ellipse-3.png" alt="User 3" width={38} height={38} className="rounded-full object-cover border-2 border-white z-10" />
          </div>
          <div className="font-medium sm:text-sm text-xs">
            Loved by users with ⭐ 5.0 rating
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-[36px] sm:text-[44px] lg:text-[52px] font-bold leading-tight">
          Meet Lifemade<br />
          <span className="font-medium">
            Plan, Capture<br />
            and Relive Moments
          </span>
        </h1>

        {/* Description */}
        <p className="opacity-60 text-sm sm:text-base font-normal max-w-[510px]">
          The only app that connects every part of your experience. Planning
          before, capturing during, and reliving after. Drop pins on a map,
          build itineraries, and watch your photos organise themselves. Your
          best moments deserve more than a folder you never open.
        </p>

        {/* App Store Badge */}
        <div className="flex sm:flex-row flex-col gap-4 mt-2">
          <a
            href="https://apps.apple.com/gb/app/lifemade-travel-planner/id6670488133"
            className="block"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/appstore-icon.png"
              alt="Download on App Store"
              width={162}
              height={49}
              className="h-[49px] w-auto hover:opacity-80 transition-opacity"
            />
          </a>
        </div>
      </div>

      {/* Right Content - Hero Image */}
      <div className="overflow-hidden sm:overflow-visible mx-auto mt-10 sm:mt-0 pb-8 sm:pb-0">
        <Image
          src="/main-img.png"
          alt="Lifemade App Screenshots"
          width={700}
          height={700}
          className="w-auto max-h-[500px] sm:max-h-[700px] object-contain"
          priority
        />
      </div>
    </main>
  );
}
