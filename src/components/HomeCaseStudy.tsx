'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function HomeCaseStudy() {
    return (
        <section className="bg-black text-white py-24 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-8 max-w-7xl">

                {/* Title */}
                <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-12">
                    <span className="text-neutral-400">Case</span>{' '}
                    <span className="text-purple-600">Study</span>
                </h2>

                {/* Normal Card */}
                <div className="relative w-full aspect-[16/11] sm:aspect-[16/9] md:aspect-[2/1] lg:aspect-[2.4/1] xl:aspect-[2.8/1] bg-[#060606] rounded-[1.5rem] md:rounded-[2.5rem] border border-white/10 overflow-hidden group shadow-2xl">

                    {/* Background Image */}
                    <img
                        src="/case-study-bg.png"
                        alt="Background"
                        className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-1000 ease-out"
                    />

                    {/* Gradients for depth - more layered for better contrast */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/30 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent opacity-60" />

                    {/* Navigation Buttons (Top Right) */}
                    <div className="absolute top-4 right-4 md:top-8 md:right-8 z-30 flex gap-2 md:gap-3">
                        <button className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:bg-white/10 hover:text-white transition-all backdrop-blur-md">
                            <span className="text-xl md:text-2xl mt-[-4px]">‹</span>
                        </button>
                        <button className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:bg-white/10 hover:text-white transition-all backdrop-blur-md">
                            <span className="text-xl md:text-2xl mt-[-4px]">›</span>
                        </button>
                    </div>

                    {/* Central Hex Icon - Adjust size and position fluidly */}
                    <div className="absolute right-[10%] lg:right-[20%] top-1/2 -translate-y-1/2 hidden lg:block select-none scale-75 lg:scale-100">
                        <motion.div
                            animate={{
                                scale: [0.95, 1, 0.95],
                                rotate: [0, 2, 0]
                            }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="relative w-48 h-48 lg:w-64 lg:h-64 flex items-center left-32 lg:mb-16  justify-center"
                        >
                            <div className="absolute inset-0 bg-purple-500/20 blur-[60px] lg:blur-[80px] rounded-full" />
                            <svg viewBox="0 0 100 100" className="w-32 h-32 lg:w-48 lg:h-48 drop-shadow-[0_0_15px_rgba(147,51,234,0.4)]">
                                <path d="M50 5 L90 27.5 V72.5 L50 95 L10 72.5 V27.5 L50 5Z" fill="#9333ea" />
                                <circle cx="35" cy="35" r="5" fill="white" />
                                <circle cx="65" cy="35" r="5" fill="white" />
                                <circle cx="35" cy="65" r="5" fill="white" />
                                <circle cx="65" cy="65" r="5" fill="white" />
                                <path d="M35 40 Q40 50 35 60" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
                                <path d="M65 40 Q60 50 65 60" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
                                <path d="M40 35 Q50 40 60 35" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
                                <path d="M40 65 Q50 60 60 65" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
                            </svg>
                        </motion.div>
                    </div>

                    {/* Content Container - Bottom portion */}
                    <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 lg:p-12 flex flex-col md:flex-row md:items-end justify-between gap-6">

                        {/* Bottom Left Image (casecard.png) */}
                        <div className="z-20 shrink-0">
                            <img
                                src="/assets/casecard.png"
                                alt="Case Logo"
                                className="h-12 sm:h-14 md:h-16 2xl:h-20 w-auto object-contain drop-shadow-lg"
                            />
                        </div>

                        {/* Description (Bottom Right) */}
                        <div className="max-w-xs lg:max-w-sm  z-20">
                            <p className="text-white text-xs md:text-sm leading-relaxed font-light line-clamp-3 md:line-clamp-none">
                                We provide you with a convenient, reliable platform designed to simplify
                                every aspect of your business management. Forget the complexities — our
                                system handles the difficult work for you, ensuring smooth operations, improved efficiency, and total peace of mind.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
