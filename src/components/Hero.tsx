export default function Hero() {
  return (
    <section id="home" className="pt-16 md:pt-20 min-h-screen flex items-center ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Welcome to Trivon Digital
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Transforming ideas into digital excellence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition shadow-lg">
              Get Started
            </button>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-50 transition border-2 border-blue-600">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
