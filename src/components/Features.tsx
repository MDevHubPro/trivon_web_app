interface Feature {
  title: string;
  description: string;
  icon: string;
}

const features: Feature[] = [
  {
    title: 'Web Development',
    description: 'Custom web solutions tailored to your business needs',
    icon: '🌐',
  },
  {
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications',
    icon: '📱',
  },
  {
    title: 'UI/UX Design',
    description: 'Beautiful and intuitive user experiences',
    icon: '🎨',
  },
  {
    title: 'Digital Marketing',
    description: 'Boost your online presence and reach',
    icon: '📈',
  },
];

export default function Features() {
  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive digital solutions to help your business grow
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition shadow-sm hover:shadow-md"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
