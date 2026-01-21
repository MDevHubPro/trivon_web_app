'use client';

import { motion } from 'framer-motion';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: 'John Doe',
    role: 'CEO',
    company: 'Company Name',
    quote: 'Trivon Digital transformed our online presence. Their team is professional, creative, and delivers exceptional results.',
    rating: 5,
  },
  {
    name: 'Jane Smith',
    role: 'Marketing Director',
    company: 'Tech Corp',
    quote: 'Working with Trivon Digital was a game-changer. They understood our vision and brought it to life beautifully.',
    rating: 5,
  },
  {
    name: 'Mike Johnson',
    role: 'Founder',
    company: 'Startup Inc',
    quote: 'The team at Trivon Digital exceeded our expectations. Their attention to detail and creativity is unmatched.',
    rating: 5,
  },
  {
    name: 'Sarah Williams',
    role: 'Product Manager',
    company: 'Innovation Labs',
    quote: 'Trivon Digital helped us create a stunning digital experience. Highly recommend their services!',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            What our <span className="text-purple-400">Clients</span> Say
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl">
            Hear from our satisfied clients about their experience working with us.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-900 rounded-xl p-6 md:p-8 border border-gray-800 hover:border-purple-500/50 transition"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">{testimonial.quote}</p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
