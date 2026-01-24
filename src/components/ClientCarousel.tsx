'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

const baseTestimonials = [
    {
        name: 'Jaydon Bator',
        role: 'Sr. Designer',
        text: "If anyone is looking to create a book cover, this is the place you need to visit.My editor recommended 99design and I am glad she did.",
        stars: 5,
        type: 'A' // Header First
    },
    {
        name: 'Jaydon Bator',
        role: 'Sr. Designer',
        text: "If anyone is looking to create a book cover, this is the place you need to visit.My editor recommended 99design and I am glad she did.",
        stars: 5,
        type: 'B' // Stars First
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

// Create a large array to simulate infinite scrolling
const REPEAT_COUNT = 25; // 100 items total
const testimonials = Array(REPEAT_COUNT).fill(baseTestimonials).flat();
const START_INDEX = (testimonials.length / 2) - ((testimonials.length / 2) % baseTestimonials.length);

export default function ClientCarousel() {
    const [currentIndex, setCurrentIndex] = useState(START_INDEX);
    const [itemsPerPage, setItemsPerPage] = useState(4);
    const [isHovered, setIsHovered] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const handleResize = () => {
            if (window.innerWidth >= 1024) setItemsPerPage(4);
            else if (window.innerWidth >= 768) setItemsPerPage(2);
            else setItemsPerPage(1);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => {
            if (prev >= testimonials.length - itemsPerPage) return START_INDEX;
            return prev + 1;
        });
    }, [itemsPerPage]);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prev) => {
            if (prev <= 0) return START_INDEX;
            return prev - 1;
        });
    }, []);

    useEffect(() => {
        if (!mounted || isHovered) return;
        const interval = setInterval(() => {
            nextSlide();
        }, 3000);
        return () => clearInterval(interval);
    }, [mounted, isHovered, nextSlide]);

    if (!mounted) return <div className="py-24 bg-black" />;

    return (
        <section className="py-24 bg-black overflow-hidden relative">
            <div className="container mx-auto px-4 md:px-8">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 md:gap-0">
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
                        <button
                            onClick={prevSlide}
                            className="w-10 h-10 rounded-lg bg-[#111] border border-gray-800 text-white flex items-center justify-center hover:bg-gray-800 transition active:scale-95 z-20 group"
                        >
                            <svg className="group-hover:text-purple-500 transition-colors" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                        </button>
                        <button
                            onClick={nextSlide}
                            className="w-10 h-10 rounded-lg bg-[#111] border border-gray-800 text-white flex items-center justify-center hover:bg-gray-800 transition active:scale-95 z-20 group"
                        >
                            <svg className="group-hover:text-purple-500 transition-colors" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                        </button>
                    </div>
                </div>

                {/* Carousel */}
                <div
                    className="overflow-hidden"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <motion.div
                        className="flex"
                        style={{
                            width: `${(testimonials.length * 100) / itemsPerPage}%`,
                        }}
                        animate={{
                            x: `-${(currentIndex * 100) / testimonials.length}%`
                        }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    >
                        {testimonials.map((item, idx) => (
                            <div
                                key={idx}
                                style={{ width: `${100 / testimonials.length}%` }}
                                className="px-3" // Gap simulation
                            >
                                <div className="bg-[#0f0f10] border border-[#1f1f23] rounded-xl p-6 h-[420px] flex flex-col justify-between hover:border-purple-500/30 transition-colors duration-300">

                                    {/* Style A: Header First */}
                                    {item.type === 'A' && (
                                        <>
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 bg-gray-800 rounded-lg overflow-hidden">
                                                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=100&h=100" className="w-full h-full object-cover opacity-80" alt={item.name} />
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

                                    {/* Style B: Stars First */}
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

                                            <div className="flex items-center gap-3 mt-auto pt-6 border-t border-gray-800/50">
                                                <div className="w-10 h-10 bg-gray-800 rounded-lg overflow-hidden">
                                                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=100&h=100" className="w-full h-full object-cover opacity-80" alt={item.name} />
                                                </div>
                                                <div>
                                                    <h4 className="text-white text-sm font-semibold">{item.name}</h4>
                                                    <p className="text-gray-500 text-xs">{item.role}</p>
                                                </div>
                                            </div>
                                        </>
                                    )}

                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
