'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
    {
        name: 'Jaydon Bator',
        role: 'Sr. Designer',
        text: "If anyone is looking to create a book cover, this is the place you need to visit.My editor recommended 99design and I am glad she did.",
        stars: 5,
        type: 'A' // Top Avatar
    },
    {
        name: 'Jaydon Bator',
        role: 'Sr. Designer',
        text: "If anyone is looking to create a book cover, this is the place you need to visit.My editor recommended 99design and I am glad she did.",
        stars: 5,
        type: 'B' // Bottom Avatar
    },
    {
        name: 'Jaydon Bator',
        role: 'Sr. Designer',
        text: "If anyone is looking to create a book cover, this is the place you need to visit.My editor recommended 99design and I am glad she did.",
        stars: 5,
        type: 'A'
    },
    {
        name: 'Jaydon Bator',
        role: 'Sr. Designer',
        text: "If anyone is looking to create a book cover, this is the place you need to visit.My editor recommended 99design and I am glad she did.",
        stars: 5,
        type: 'B'
    }
];

export default function ClientCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // We are not sliding in the image, it just shows 4 static cards or maybe a carousel of 4.
    // The user said "exactly like image", where 4 cards are shown.
    // I will make it a grid for now, or if it must be a carousel, I'll allow sliding.
    // Given "Carousel" name, I keep the arrows.

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    return (
        <section className="py-24 bg-black">
            <div className="container mx-auto px-4 md:px-8">

                {/* Header */}
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <div className="inline-block px-4 py-1.5 rounded-full bg-[#1a1a2e] border border-purple-500/30 mb-6">
                            <span className="text-purple-400 text-xs font-bold flex items-center gap-2 uppercase tracking-wide">
                                <span className="text-lg leading-none mb-0.5">+</span>
                                Client Testimonials
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            What our <span className="text-purple-500">Clients</span> Say's
                        </h2>
                        <p className="text-gray-500 text-sm max-w-xl leading-relaxed">
                            We provide you with a convenient and reliable platform for effective business management. Forget about complexities we'll handle everything for your convenience!
                        </p>
                    </div>

                    {/* Navigation Arrows */}
                    <div className="flex gap-4">
                        <button onClick={prevSlide} className="w-10 h-10 rounded-lg bg-[#111] border border-gray-800 text-white flex items-center justify-center hover:bg-gray-800 transition">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                        </button>
                        <button onClick={nextSlide} className="w-10 h-10 rounded-lg bg-[#111] border border-gray-800 text-white flex items-center justify-center hover:bg-gray-800 transition">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                        </button>
                    </div>
                </div>

                {/* Grid of Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {testimonials.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-[#0f0f10] border border-[#1f1f23] rounded-xl p-6 h-[420px] flex flex-col justify-between"
                        >
                            {/* Style A: Header First */}
                            {item.type === 'A' && (
                                <>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-gray-700 rounded-lg bg-cover bg-center" style={{ backgroundImage: `url('https://placehold.co/100')` }}>
                                            {/* Placeholder Avatar */}
                                            {/* If using local image, replace URL */}
                                            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=100&h=100" className="w-full h-full object-cover rounded-lg mix-blend-overlay opacity-80" alt="" />
                                        </div>
                                        <div>
                                            <h4 className="text-white text-sm font-semibold">{item.name}</h4>
                                            <p className="text-gray-500 text-xs">{item.role}</p>
                                        </div>
                                    </div>

                                    <div className="flex-grow flex flex-col justify-end">
                                        <div className="flex justify-between items-start mb-4">
                                            <div className="flex gap-1">
                                                {[...Array(5)].map((_, i) => (
                                                    <span key={i} className="text-yellow-500 text-xs">★</span>
                                                ))}
                                            </div>
                                            <div className="text-gray-600">
                                                <span className="text-xl">+</span>
                                            </div>
                                        </div>
                                        <p className="text-gray-400 text-xs leading-relaxed">
                                            {item.text}
                                        </p>
                                    </div>
                                </>
                            )}

                            {/* Style B: Stars First, Footer Last */}
                            {item.type === 'B' && (
                                <>
                                    <div className="flex justify-between items-start">
                                        <div className="flex gap-1">
                                            {[...Array(5)].map((_, i) => (
                                                <span key={i} className="text-yellow-500 text-xs">★</span>
                                            ))}
                                        </div>
                                        <div className="text-gray-600">
                                            <span className="text-xl">+</span>
                                        </div>
                                    </div>

                                    <div className="flex-grow flex flex-col justify-center">
                                        <p className="text-gray-400 text-xs leading-relaxed mt-4">
                                            {item.text}
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-3 mt-auto pt-6">
                                        <div className="w-10 h-10 bg-gray-700 rounded-lg overflow-hidden">
                                            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=100&h=100" className="w-full h-full object-cover mix-blend-overlay opacity-80" alt="" />
                                        </div>
                                        <div>
                                            <h4 className="text-white text-sm font-semibold">{item.name}</h4>
                                            <p className="text-gray-500 text-xs">{item.role}</p>
                                        </div>
                                    </div>
                                </>
                            )}
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
