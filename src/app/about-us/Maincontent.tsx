'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import BrandMarquee from '@/components/BrandMarquee';

// --- Reusable Typewriter Component (Keep this at the top of your file or import it) ---
const TypewriterText = ({ text, delay = 0, speed = 0.05, className = "", style = {} }) => {
    const letters = Array.from(text);
    const container = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: speed, delayChildren: delay },
        },
    };
    const child = {
        visible: { opacity: 1, display: "inline-block", transition: { duration: 0.01 } },
        hidden: { opacity: 0, display: "none" },
    };

    return (
        <motion.span variants={container} initial="hidden" animate="visible" className={className} style={style}>
            {letters.map((letter, index) => (
                <motion.span variants={child} key={index}>
                    {letter === " " ? "\u00A0" : letter}
                </motion.span>
            ))}
        </motion.span>
    );
};

export default function AboutSection({ heading_one, heading_two, text, main_heading }) {
    return (
        <section className="pt-32 pb-24 relative overflow-hidden bg-black">
            {/* Background 'ABOUT US' Watermark */}
            <div className="absolute top-1/4 left-0 w-full overflow-hidden pointer-events-none select-none z-0">
                <h1 className="text-[12rem] md:text-5xl font-black text-white/[0.02] whitespace-nowrap leading-none tracking-tighter">
                    ABOUT US
                </h1>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col h-[70%] md:flex-row items-start justify-between">
                    <div className='flex flex-col items-center justify-center h-full'>
                        <div className="max-w-3xl h-full">
                            {/* Heading One Animation */}
                            <h2 className="text-5xl font-medium mb-2 tracking-tighter pl-1">
                                <TypewriterText
                                    text={heading_one}
                                    speed={0.05}
                                    style={{
                                        background: "radial-gradient(50% 50% at 50% 50%, #FFFFFF 30%, rgba(255, 255, 255, 0.5) 84.77%)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                    }}
                                />
                            </h2>
                            {/* Heading Two Animation */}
                            <h2 className="text-5xl tracking-tighter leading-[1.5] font-medium">
                                <TypewriterText
                                    text={heading_two}
                                    delay={0.5}
                                    speed={0.05}
                                    style={{
                                        background: "linear-gradient(258.73deg, #6B2CEC 7.48%, #A156F7 92.51%)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                    }}
                                />
                            </h2>
                        </div>

                        <div className="flex items-start gap-4 py-2 mt-4">
                            {/* Description Animation */}
                            <p className="text-right font-medium text-gray-400 text-sm max-w-sm leading-relaxed border-l border-gray-800 pl-16">
                                <TypewriterText
                                    text={text}
                                    delay={1.2}
                                    speed={0.02}
                                />
                            </p>
                            <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 2.5 }}
                                className='flex items-center justify-center'
                            >
                                <Image src="/assets/arrow-3.svg" width={50} height={50} alt="Arrow" />
                            </motion.div>
                        </div>
                    </div>

                    {/* Right side - Main Massive Heading */}
                    <div className="hidden md:block mt-12 md:mt-0 h-1/2 relative flex justify-center pt-14">
                        <div>
                            <h2 className="md:text-[140px] text-[100px] text-nowrap font-medium mb-2 tracking-tighter pr-16">
                                <TypewriterText
                                    text={main_heading}
                                    delay={2.0}
                                    speed={0.08}
                                    style={{
                                        background: "linear-gradient(90deg, #FFFFFF 0%, #000000 100%)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                    }}
                                />
                                {/* Blinking Cursor for the Big Heading */}
                                <motion.span
                                    animate={{ opacity: [0, 1, 0] }}
                                    transition={{ repeat: Infinity, duration: 0.8 }}
                                    className="inline-block w-2 h-[100px] bg-white ml-2 align-middle"
                                />
                            </h2>
                        </div>

                        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-600/10 blur-[80px] rounded-full pointer-events-none"></div>

                    </div>

                </div>
                <div className="hidden md:flex items-center justify-between gap-8 relative w-full overflow-hidden mt-10">
                    <BrandMarquee />
                </div>
            </div>


        </section>
    );
}