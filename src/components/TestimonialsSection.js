import Image from 'next/image';

const testimonials = [
  {
    name: 'Matt',
    image: '/ellipse-4.png',
    text: '"I used to have thousands of photos I never looked at. Now every trip is its own collection. Photos, map, itinerary, all in one place. I actually go back and relive them."',
  },
  {
    name: 'Sophie',
    image: '/ellipse-5.png',
    text: '"The planning is so smooth. I just drop pins on a map, set times, and my whole day is laid out. I showed up to every stop in Rome without checking my notes once."',
  },
  {
    name: 'Mia',
    image: '/ellipse-6.png',
    text: '"My photos finally make sense. They get matched to the plan automatically. No more scrolling through a messy camera roll trying to remember where I was."',
  },
  {
    name: 'Emily',
    image: '/ellipse-7.png',
    text: '"I planned my entire birthday weekend on Lifemade. The itinerary kept everything on track and now I have a beautiful visual memory of the whole thing."',
  },
  {
    name: 'Luke',
    image: '/ellipse-8.png',
    text: '"This app changed how I travel. I plan before, capture during, and relive after. It is the only app that connects all three."',
  },
  {
    name: 'Carlos',
    image: '/ellipse-9.png',
    text: '"Honestly the best way to keep your memories alive. I scroll back through old trips and it feels like I am there again."',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 lg:py-40 px-4 bg-[#1E1A24] text-white">
      <div>
        <h2 className="text-center text-4xl lg:text-[48px] font-bold mb-12 lg:mb-16">
          What our users are saying
        </h2>

        <div className="max-w-6xl mx-auto flex flex-wrap gap-8 justify-center">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="w-80 bg-[#2D2934] p-8 rounded-2xl flex flex-col gap-4 hover:scale-105 transition-all duration-300 shadow-2xl border border-gray-700"
            >
              <div className="flex items-center gap-4">
                <Image
                  src={t.image}
                  alt={t.name}
                  width={42}
                  height={42}
                  className="w-[42px] h-[42px] rounded-full object-cover"
                />
                <p className="font-medium text-[20px]">{t.name}</p>
              </div>
              <p className="text-sm opacity-80">{t.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
