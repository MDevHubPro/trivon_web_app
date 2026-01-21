export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                About Trivon Digital
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                We are a leading digital agency specializing in creating innovative
                solutions for businesses of all sizes.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our team of experts combines creativity with technology to deliver
                exceptional results that drive growth and success.
              </p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                Learn More
              </button>
            </div>
            <div className="bg-gradient-to-br from-blue-400 to-indigo-600 rounded-2xl h-64 md:h-96 flex items-center justify-center">
              <span className="text-white text-6xl">📊</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
