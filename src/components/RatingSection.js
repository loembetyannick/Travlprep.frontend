import Image from 'next/image';

export default function RatingSection() {
  return (
    <section className="py-16 lg:py-44 px-4 relative overflow-hidden">
      <div className="max-w-3xl mx-auto text-center flex flex-col items-center relative z-10">
        <div className="flex flex-col items-center">
          <div className="text-4xl mb-2">⭐⭐⭐⭐⭐</div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1E1A24] mb-4">
            5-star ratings on the App Store
          </h2>
          <div className="flex items-center justify-center gap-1 text-lg opacity-80">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="23"
              viewBox="0 0 19 23"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.7212 0C13.8259 1.36126 13.407 2.61776 12.5693 3.66496C11.7316 4.71206 10.5798 5.34036 9.21847 5.34036C9.11377 3.97906 9.53267 2.72256 10.3704 1.78011C11.2081 0.73299 12.4646 0.10471 13.7212 0ZM18.0144 7.74866C16.4438 8.69106 15.5013 10.3665 15.5013 12.1466C15.5013 14.1362 16.6532 16.021 18.538 16.6493C18.2239 17.8011 17.7003 18.9529 16.9673 19.8953C16.0249 21.3613 15.0825 22.7226 13.5118 22.7226C12.751 22.7226 12.2605 22.5015 11.7546 22.2735C11.216 22.0307 10.6601 21.7801 9.74217 21.7801C8.76767 21.7801 8.16977 22.0312 7.58757 22.2756C7.10637 22.4777 6.63597 22.6752 5.97247 22.7226C4.50657 22.7226 3.35467 21.1519 2.41227 19.7906C0.422771 16.9634 -1.04323 11.7278 0.946371 8.27226C1.88877 6.59686 3.66887 5.54976 5.65837 5.44506C6.47197 5.44506 7.25337 5.76756 7.94877 6.05466C8.50637 6.28476 9.00867 6.49216 9.42797 6.49216C9.79557 6.49216 10.2747 6.30096 10.828 6.08026C11.6933 5.73496 12.7401 5.31726 13.826 5.44506C15.5013 5.54976 17.072 6.38746 18.0144 7.74866Z"
                fill="#1E1A24"
              />
            </svg>
            <span className="mt-1 ml-1">5.0/5</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-10 items-center">
          <a
            href="https://apps.apple.com/gb/app/travlprep-travel-plans/id6670488133"
            className="block"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/appstore-icon.png"
              alt="Download on App Store"
              width={135}
              height={41}
              className="h-[41px] w-auto hover:opacity-80 transition-opacity"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
