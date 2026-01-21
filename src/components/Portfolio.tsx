interface PortfolioItem {
  title: string;
  category: string;
  description: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    title: 'E-Commerce Platform',
    category: 'Web Development',
    description: 'Modern shopping experience',
  },
  {
    title: 'Mobile Banking App',
    category: 'Mobile App',
    description: 'Secure financial transactions',
  },
  {
    title: 'Corporate Website',
    category: 'Web Design',
    description: 'Professional brand presence',
  },
  {
    title: 'SaaS Dashboard',
    category: 'Web Development',
    description: 'Analytics and insights',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Portfolio
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our recent projects and success stories
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl p-8 text-white hover:scale-105 transition transform shadow-lg hover:shadow-xl"
            >
              <div className="mb-4">
                <span className="text-sm opacity-90">{item.category}</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-sm opacity-90">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
