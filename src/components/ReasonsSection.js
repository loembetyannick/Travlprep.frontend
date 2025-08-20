export default function ReasonsSection() {
  const reasons = [
    {
      id: 1,
      icon: '✈️',
      title: 'All-in-one travel companion',
      description: 'From itineraries to photo galleries, Travlprep handles every aspect of your trip. No more switching between multiple apps or losing important details in group chats.'
    },
    {
      id: 2,
      icon: '🎯',
      title: 'Organized by design, not by chance',
      description: 'From weekend trips with friends to family vacations, Travlprep keeps everyone on the same page and say goodbye to endless group chat confusion.'
    },
    {
      id: 3,
      icon: '🤝',
      title: 'Travel together, stress-free',
      description: 'From weekend trips with friends to family vacations, Travlprep keeps everyone on the same page and say goodbye to endless group chat confusion.'
    }
  ];

  return (
    <section className="w-full py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 mb-4">
            Why Choose Travlprep?
          </h2>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason) => (
            <div key={reason.id} className="bg-gray-50 rounded-2xl p-8 text-center">
              {/* Icon */}
              <div className="text-4xl mb-6">
                {reason.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                {reason.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 