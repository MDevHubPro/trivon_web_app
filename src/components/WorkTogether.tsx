'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

const baseServices = [
    {
        title: 'Website Dev',
        desc: 'help you to build website company that is modern, user friendly, good CEO, and Clean design',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        visual: 'web',
        type: 'purple'
    },
    {
        title: 'UI/UX Design',
        desc: 'help you to build website company that is modern, user friendly, good CEO, and Clean design',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
        visual: 'ui',
        type: 'purple'
    },
    {
        title: 'Logo Branding',
        desc: 'help you to build website company that is modern, user friendly, good CEO, and Clean design',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg',
        visual: 'branding',
        type: 'dark'
    },
    {
        title: 'Shopify Website',
        desc: 'help you to build website company that is modern, user friendly, good CEO, and Clean design',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/shopify/shopify-original.svg',
        visual: 'shopify',
        type: 'dark'
    }
];

const REPEAT_COUNT = 25; // 100 items
const services = Array(REPEAT_COUNT).fill(baseServices).flat();
const START_INDEX = (services.length / 2) - ((services.length / 2) % baseServices.length);

const marqueeText = ["CREATIVE DESIGN", "UI/UX", "MARKETING", "MOTION", "ANIMATION", "BRANDING", "DEVELOPMENT"];

export default function WorkTogether() {
    const [currentIndex, setCurrentIndex] = useState(START_INDEX);
    const [itemsToScroll, setItemsToScroll] = useState(1);
    const [cardWidth, setCardWidth] = useState(320); // Estimation
    const [isHovered, setIsHovered] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => {
            if (prev >= services.length - 4) return START_INDEX;
            return prev + 1;
        });
    }, []);

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
        <section className="py-12 md:py-24 bg-black relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                {/* Blue Neon Lines Effect (Left Side) */}
                <svg className="absolute top-0 left-0 w-[500px] h-[800px] opacity-30" viewBox="0 0 500 800" fill="none">
                    <path d="M-100 0 L200 300 L-100 600" stroke="#00d4ff" strokeWidth="2" />
                    <path d="M-50 0 L250 300 L-50 600" stroke="#00d4ff" strokeWidth="2" opacity="0.5" />
                    <circle cx="200" cy="300" r="100" stroke="#00d4ff" strokeWidth="1" strokeDasharray="10 10" opacity="0.3" />
                </svg>
            </div>

            <div className="container mx-auto px-4 md:px-8 mb-12 relative z-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-20">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1a1a2e] border border-gray-800 mb-8">
                            <span className="w-5 h-5 rounded-full bg-purple-500 flex items-center justify-center text-[10px] text-white shadow-[0_0_10px_rgba(168,85,247,0.5)]">✨</span>
                            <span className="text-gray-300 text-xs font-medium tracking-wide">Our Services</span>
                        </div>

                        <h2 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
                            Let&apos;s work <span className="text-[#8B5CF6]">together</span>
                        </h2>
                        <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                            <span className="text-[#8B5CF6]">with</span> our us
                        </h2>

                        <p className="text-gray-500 text-sm max-w-xl leading-relaxed">
                            We provide you with a convenient and reliable platform for effective business management. Forget about complexities we&apos;ll handle everything for your convenience!
                        </p>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex gap-4 mt-8 md:mt-0">
                        <button
                            onClick={prevSlide}
                            className="w-12 h-12 rounded-lg bg-[#0f0f10] border border-gray-800 text-white flex items-center justify-center hover:bg-gray-800 hover:border-gray-600 transition active:scale-95 z-20 group"
                        >
                            <svg className="group-hover:text-purple-500 transition-colors" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                        </button>
                        <button
                            onClick={nextSlide}
                            className="w-12 h-12 rounded-lg bg-[#0f0f10] border border-gray-800 text-white flex items-center justify-center hover:bg-gray-800 hover:border-gray-600 transition active:scale-95 z-20 group"
                        >
                            <svg className="group-hover:text-purple-500 transition-colors" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                        </button>
                    </div>
                </div>

                {/* Infinite Staggered Carousel */}
                <div
                    className="relative w-full overflow-hidden" // Removed -mx-4 to keep inside container or maybe wider?
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <motion.div
                        className="flex gap-6"
                        // We slide by item width + gap. Assuming card width approx 320px + 24px gap = 344px
                        animate={{ x: -(currentIndex * 344) }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        style={{ x: -(currentIndex * 344) }}
                    >
                        {services.map((service, i) => (
                            <div
                                key={i}
                                className={`flex-shrink-0 w-[320px] transition-transform duration-500 ${i % 2 !== 0 ? 'mt-16' : 'mt-0'}`} // Stagger Effect
                            >
                                <div className="bg-[#0f0f13] border border-[#1f1f23] rounded-3xl p-8 h-[460px] flex flex-col relative overflow-hidden group hover:border-purple-500/50 transition-colors duration-300">

                                    {/* Icon top left */}
                                    <div className="w-12 h-12 rounded-full bg-[#1a1a2e] border border-gray-800 flex items-center justify-center mb-6 shadow-inner">
                                        <img src={service.icon} alt="" className="w-6 h-6 opacity-70 group-hover:opacity-100 transition-opacity" />
                                    </div>

                                    {/* Content */}
                                    <div className="relative z-10">
                                        <h3 className="text-2xl font-bold text-white mb-2">
                                            {/* Style the second word purple if 2 words, or logic for coloring */}
                                            {service.title.split(' ')[0]} <span className="text-[#8B5CF6]">{service.title.split(' ').slice(1).join(' ')}</span>
                                        </h3>
                                        <p className="text-gray-500 text-xs leading-relaxed mb-8 h-12 line-clamp-3">
                                            {service.desc}
                                        </p>

                                        <button className="flex items-center gap-2 bg-[#1a1a2e] hover:bg-[#252538] text-gray-300 text-[10px] font-bold px-5 py-2.5 rounded-full border border-gray-800 transition-colors mb-4 group-hover:border-purple-500/30">
                                            GET STARTED
                                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                                        </button>
                                    </div>

                                    {/* Visual/Illustration at Bottom */}
                                    <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none">
                                        {/* UI Visual */}
                                        {service.visual === 'ui' && (
                                            <div className="w-full h-full flex flex-col justify-end px-6">
                                                <div className="bg-[#1e1e26] rounded-t-xl p-3 border-t border-x border-gray-800 shadow-2xl translate-y-2 group-hover:translate-y-0 transition-transform">
                                                    <div className="flex gap-2 mb-3">
                                                        <div className="w-8 h-8 rounded-full bg-gray-700"></div>
                                                        <div className="space-y-1">
                                                            <div className="w-12 h-1.5 bg-gray-700 rounded"></div>
                                                            <div className="w-8 h-1.5 bg-gray-700 rounded"></div>
                                                        </div>
                                                    </div>
                                                    <div className="w-full h-16 bg-gray-800/50 rounded grid gap-2 p-2">
                                                        <div className="w-full h-full bg-gray-700/20 rounded"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {/* Branding Visual */}
                                        {service.visual === 'branding' && (
                                            <div className="w-full h-full flex items-end justify-center pb-0">
                                                <div className="w-32 h-32 bg-gradient-to-tr from-gray-800 to-gray-700 rounded-xl transform rotate-12 translate-y-8 border border-gray-600 relative shadow-2xl group-hover:rotate-6 transition-transform">
                                                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border border-gray-400"></div>
                                                </div>
                                            </div>
                                        )}

                                        {/* Shopify Visual */}
                                        {service.visual === 'shopify' && (
                                            <div className="w-full h-full flex items-end justify-center translate-y-4 group-hover:translate-y-2 transition-transform">
                                                <div className="relative">
                                                    {/* Bag Handle */}
                                                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 border-4 border-[#333] rounded-full"></div>
                                                    {/* Bag Body */}
                                                    <div className="w-28 h-28 bg-[#222] rounded-lg border border-gray-800 flex items-center justify-center relative z-10 skew-x-2">
                                                        <span className="text-4xl font-bold text-gray-700">S</span>
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {/* Web Dev Visual */}
                                        {service.visual === 'web' && (
                                            <div className="w-full h-full flex flex-col justify-end px-4">
                                                <div className="bg-[#1e1e26] h-32 rounded-t-xl border border-gray-700 translate-y-4 group-hover:translate-y-0 transition-transform">
                                                    <div className="h-6 border-b border-gray-800 flex items-center gap-1.5 px-3 bg-[#15151a] rounded-t-xl">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                                                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                                                        <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                                                    </div>
                                                    <div className="p-3">
                                                        <div className="w-full h-4 bg-gray-800 rounded mb-2"></div>
                                                        <div className="w-2/3 h-4 bg-gray-800 rounded"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {/* Fade Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f13] via-transparent to-transparent h-20 bottom-0 pointer-events-none"></div>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>

            </div>

            {/* Existing Marquee (Kept as is) */}
            <div className="w-full bg-gradient-to-r from-[#7000ff] to-[#bd00ff] py-4 transform -rotate-1 scale-110 shadow-[0_0_30px_rgba(139,92,246,0.5)] border-y border-white/20 mt-20 relative z-20">
                <div className="flex whitespace-nowrap overflow-hidden relative">
                    <motion.div
                        className="flex gap-16 items-center"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ ease: "linear", duration: 20, repeat: Infinity }}
                    >
                        {[...marqueeText, ...marqueeText, ...marqueeText, ...marqueeText].map((text, i) => (
                            <div key={i} className="flex items-center gap-16">
                                <span className="text-white font-bold text-xl tracking-widest">{text}</span>
                                <div className="w-2 h-2 rounded-full bg-white"></div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
