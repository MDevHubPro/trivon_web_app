'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  rating: number;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    role: 'Product Manager',
    image: '/assets/avatar-1.png',
    rating: 5,
    quote: 'The team transformed our vague requirements into a robust, scalable platform. Their attention to security details specifically regarding smart contracts was impressive.',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'CTO, TechFlow',
    image: '/assets/avatar-2.png',
    rating: 5,
    quote: 'Exceptional delivery on our DeFi protocol. The audit process was thorough, and their suggestions improved our gas efficiency by 40%. Highly recommended!',
  },
  {
    id: 3,
    name: 'Elena Rodriguez',
    role: 'Founder, CryptoArt',
    image: '/assets/avatar-3.png',
    rating: 5,
    quote: 'They built our NFT marketplace from scratch. The user experience is flawless, and the backend handles high volume traffic without a hitch.',
  },
  {
    id: 4,
    name: 'David Park',
    role: 'Director of Engineering',
    image: '/assets/avatar-4.png',
    rating: 5,
    quote: 'Finding a team that understands both traditional web stack and Web3 nuances is hard. This agency bridges that gap perfectly. Great communication throughout.',
  },
  {
    id: 5,
    name: 'Jessica Wu',
    role: 'VP Of Operations',
    image: '/assets/avatar-1.png',
    rating: 5,
    quote: 'Our internal tools needed a complete overhaul. The dashboard they designed is intuitive and has saved our team countless hours of manual work.',
  },
  {
    id: 6,
    name: 'Robert Fox',
    role: 'Lead Developer',
    image: '/assets/avatar-2.png',
    rating: 5,
    quote: 'Clean code, modern stack, and best practices. It was a pleasure collaborating with their developers. They actually care about code quality.',
  },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-1">
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-3 h-3 ${i < rating ? 'text-[#FFD166]' : 'text-gray-700'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const ProfileCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <div className="bg-[#111111] p-4 rounded-xl flex items-center gap-4 h-[100px] border border-white/5">
    <div className="w-12 h-12 bg-gray-800 rounded-full overflow-hidden flex-shrink-0 relative">
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-blue-500 opacity-20"></div>
      {/* Fallback Initials */}
      <div className="w-full h-full flex items-center justify-center text-white font-bold bg-[#1A1A1A]">
        {testimonial.name.slice(0, 2).toUpperCase()}
      </div>
    </div>
    <div>
      <h4 className="text-white font-medium text-base leading-tight">{testimonial.name}</h4>
      <p className="text-gray-500 text-xs mt-1">{testimonial.role}</p>
    </div>
  </div>
);

const ReviewCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <div className="bg-[#111111] p-8 rounded-xl flex flex-col justify-between h-[360px] border border-white/5 relative group hover:border-purple-500/50 transition-colors">
    <div className="flex justify-between items-start">
      <StarRating rating={testimonial.rating} />
      <div className="text-gray-700 group-hover:text-purple-500 transition-colors">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M10 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5" />
          <path d="M19 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5" />
        </svg>
      </div>
    </div>
    <p className="text-gray-300 text-lg leading-relaxed font-light">
      "{testimonial.quote}"
    </p>
  </div>
);

const TestimonialColumn = ({ testimonial, isProfileTop }: { testimonial: Testimonial, isProfileTop: boolean }) => {
  return (
    <div className="flex flex-col gap-4 w-full h-full">
      {isProfileTop ? (
        <>
          <ProfileCard testimonial={testimonial} />
          <ReviewCard testimonial={testimonial} />
        </>
      ) : (
        <>
          <ReviewCard testimonial={testimonial} />
          <ProfileCard testimonial={testimonial} />
        </>
      )}
    </div>
  );
};

export default function Testimonials() {
  const [itemsToShow, setItemsToShow] = useState(4);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setItemsToShow(1);
      else if (window.innerWidth < 1024) setItemsToShow(2);
      else setItemsToShow(4);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalItems = testimonials.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  };

  // Auto carousel with loop
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(timer);
  }, [totalItems]); // Removed itemsToShow dependency to avoid reset on resize

  const getVisibleItems = () => {
    const items = [];
    for (let i = 0; i < itemsToShow; i++) {
      items.push(testimonials[(currentIndex + i) % totalItems]);
    }
    return items;
  };

  const visibleItems = getVisibleItems();

  return (
    <section className="py-24 bg-black overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-[#1E1B2E] text-purple-300 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-purple-500/20">
              <span className="flex items-center justify-center w-5 h-5 bg-purple-600 rounded-full text-white text-xs">
                ✨
              </span>
              Client Testimonials
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              What our <span className="text-[#8B5CF6]">Clients</span> Say
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              We provide you with a convenient and reliable platform for effective business management.
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-4">
            <button
              onClick={prevSlide}
              className="w-14 h-14 rounded-full bg-[#111111] text-white border border-gray-800 flex items-center justify-center hover:bg-[#8B5CF6] hover:border-[#8B5CF6] transition-all duration-300 group"
              aria-label="Previous slide"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="w-14 h-14 rounded-full bg-[#111111] text-white border border-gray-800 flex items-center justify-center hover:bg-[#8B5CF6] hover:border-[#8B5CF6] transition-all duration-300 group"
              aria-label="Next slide"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode='popLayout'>
            {visibleItems.map((testimonial, index) => {
              // We must use a unique key that represents the POSITION in the grid + the CONTENT
              // OR just the content ID if we want them to slide.
              // To achieve "sliding left" effect for the whole row, items need to move.
              // If we use index keys, items update in place (no slide).
              // If we use ID keys, Item 2 moves from pos 1 -> pos 0. This is the slide.
              return (
                <motion.div
                  key={testimonial.id}
                  layout
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20, position: 'absolute', zIndex: -1 }} // Absolute exit to avoid layout thrashing
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="w-full"
                >
                  <TestimonialColumn
                    testimonial={testimonial}
                    // Fixed alternating pattern: First column always Profile Top, Second always Review Top, etc.
                    // This creates a static grid structure where content flows through it.
                    // Or do we want the style to travel with the card?
                    // "make design exactly like image" -> usually staggered like masonry.
                    // If we want the structure to be 1: Up, 2: Down, 3: Up... strictly by column:
                    isProfileTop={index % 2 === 0}
                  />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
