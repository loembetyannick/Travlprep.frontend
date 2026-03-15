export default function ReasonsSection() {
  const reasons = [
    {
      icon: '📸',
      title: "Don't let your memories disappear",
      description:
        'The average person has over 40,000 photos on their phone and will look back at less than 3% of them. Lifemade makes sure your best moments are always easy to find and relive.',
    },
    {
      icon: '📍',
      title: 'Plan, capture, and relive — all in one place',
      description:
        "Lifemade is the only app that connects every part of your experience. Plan before, capture during, and relive after — so nothing gets lost.",
    },
    {
      icon: '✨',
      title: 'Your life, beautifully kept',
      description:
        "Lifemade isn't just a planning app or a photo app. It's a record of the life you're actually living — organised, visual, and always there when you want to look back.",
    },
  ];

  return (
    <section className="px-4 mb-32">
      <h2 className="text-center text-[48px] font-medium mt-40">
        Why choose Lifemade?
      </h2>
      <p className="text-center text-lg text-[#262626] font-normal mb-20">
        Don&apos;t let your memories disappear.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 max-w-6xl mx-auto">
        {reasons.map((reason, i) => (
          <div
            key={i}
            className="flex flex-col p-8 rounded-3xl bg-white"
            style={{
              borderRadius: '30px',
              background: '#FFF',
              boxShadow: '0px 1px 20px 1px rgba(228, 229, 233, 0.50)',
            }}
          >
            <div className="bg-gray-100 w-16 h-16 rounded-xl flex items-center justify-center mb-4 text-3xl">
              {reason.icon}
            </div>
            <h3 className="text-xl font-bold mb-4">{reason.title}</h3>
            <p className="text-sm text-gray-700">{reason.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
