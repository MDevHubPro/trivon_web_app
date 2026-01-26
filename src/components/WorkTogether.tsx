'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
const baseServices = [
    {
        title: 'Website Dev',
        desc: 'help you to build website company that is modern, user friendly, good CEO, and Clean design',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        visual: '/assets/webdev2.png',
        type: 'purple'
    },
    {
        title: 'UI/UX Design',
        desc: 'help you to build website company that is modern, user friendly, good CEO, and Clean design',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
        visual: '/assets/uiux.png',
        type: 'purple'
    },
    {
        title: 'Logo Branding',
        desc: 'help you to build website company that is modern, user friendly, good CEO, and Clean design',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg',
        visual: '/assets/logobranding.png',
        type: 'dark'
    },
    {
        title: 'Shopify Website',
        desc: 'help you to build website company that is modern, user friendly, good CEO, and Clean design',
        icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM6onG0BTCip21uyKDKTTaMVp62LNJYTLV5A&s',
        visual: '/assets/shopify.png',
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
        <section className="py-12 md:py-24 relative overflow-hidden">
            {/* Background Elements */}


            <div className="container mx-auto px-4 md:px-8 mb-12 relative z-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-20">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full  mb-8">
                        </div>

                        <h2 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
                            <span className="text-[#8B5CF6]"></span>
                        </h2>
                        <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                            <span className="text-[#8B5CF6]"></span>
                        </h2>

                        <p className="text-gray-500 text-sm max-w-xl leading-relaxed">
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
                                className={`flex-shrink-0 w-[320px] transition-transform duration-500 ${i % 2 !== 0 ? 'mt-16' : 'mt-0'
                                    }`}
                            >
                                {/* The Gradient Border Container */}
                                <div
                                    className="p-[2px] rounded-[24px] transition-all duration-300 group"
                                    style={{
                                        background: `linear-gradient(66.83deg, #A156F7 -3.68%, rgba(161, 86, 247, 0) 42.16%)`,
                                    }}
                                >
                                    {/* The Inner Card Content */}
                                    <div
                                        className="bg-[#190E26] rounded-[22px] p-8 h-[460px] flex flex-col relative overflow-hidden transition-colors duration-300"
                                        style={{
                                            backgroundImage: `url('${service.visual}')`,
                                            backgroundPosition: 'center',
                                            backgroundSize: 'cover'
                                        }}
                                    >
                                        {/* Icon top left */}
                                        <div className="w-12 h-12 rounded-full flex items-center justify-center mb-6 shadow-inner">
                                            <Image
                                                src={'/assets/browsing.svg'}
                                                alt=""
                                                className="w-6 h-6 opacity-70 group-hover:opacity-100 transition-opacity"
                                                width={30}
                                                height={30}
                                            />
                                        </div>

                                        {/* Content */}
                                        <div className="relative z-10">
                                            <h3 className="text-2xl font-bold text-white mb-2">
                                                {service.title.split(' ')[0]} <span className="text-[#8B5CF6]">{service.title.split(' ').slice(1).join(' ')}</span>
                                            </h3>
                                            <p className="text-gray-500 text-xs leading-relaxed mb-8 h-16 line-clamp-3 pb-9">
                                                {service.desc}
                                            </p>

                                            <button className="flex items-center gap-2 bg-[#FFFFFF1A] hover:bg-[#252538] text-gray-300 text-sm font-medium px-5 py-2 rounded-full border border-gray-800 transition-colors mb-4 group-hover:border-purple-500/30">
                                                GET STARTED
                                                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <line x1="7" y1="17" x2="17" y2="7"></line>
                                                    <polyline points="7 7 17 7 17 17"></polyline>
                                                </svg>
                                            </button>
                                        </div>

                                        {/* Visual/Illustration logic - Matching your baseServices titles */}
                                        <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none">
                                            {/* {service.title.includes('UI/UX') && (
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
                                            )} */}
                                            {/* 
                                            {service.title.includes('Logo') && (
                                                <div className="w-full h-full flex items-end justify-center pb-0">
                                                    <div className="w-32 h-32 bg-gradient-to-tr from-gray-800 to-gray-700 rounded-xl transform rotate-12 translate-y-8 border border-gray-600 relative shadow-2xl group-hover:rotate-6 transition-transform">
                                                        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border border-gray-400"></div>
                                                    </div>
                                                </div>
                                            )}

                                            {service.title.includes('Shopify') && (
                                                <div className="w-full h-full flex items-end justify-center translate-y-4 group-hover:translate-y-2 transition-transform">
                                                    <div className="relative">
                                                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 border-4 border-[#333] rounded-full"></div>
                                                        <div className="w-28 h-28 bg-[#222] rounded-lg border border-gray-800 flex items-center justify-center relative z-10 skew-x-2">
                                                            <span className="text-4xl font-bold text-gray-700">S</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                                            {service.title.includes('Website Dev') && (
                                                <div className="w-full h-full flex flex-col justify-end px-4">
                                                    {/* Ensure this path is correct in your public folder */}
                                            {/* <Image src={'/assets/web-dev.png'} width={300} height={300} alt="Web Dev" />
                                        </div>
                                            )} */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>

            </div >

            {/* Existing Marquee (Kept as is) */}
            < div className="w-full bg-gradient-to-r from-[#7000ff] to-[#bd00ff] py-4 transform -rotate-1 scale-110 shadow-[0_0_30px_rgba(139,92,246,0.5)] border-y border-white/20 mt-20 relative z-20" >
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
            </div >
        </section >
    );
}
