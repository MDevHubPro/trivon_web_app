'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// --- Typewriter Component (Ensure this is available in your file) ---
const TypewriterText = ({ text, delay = 0, speed = 0.05, className = "" }) => {
    const letters = Array.from(text);

    const container = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: speed, delayChildren: delay },
        },
    };

    const child = {
        visible: {
            opacity: 1,
            display: "inline-block",
            transition: { duration: 0.01 },
        },
        hidden: {
            opacity: 0,
            display: "none",
        },
    };

    return (
        <motion.span
            variants={container}
            initial="hidden"
            animate="visible"
            className={className}
        >
            {letters.map((letter, index) => (
                <motion.span variants={child} key={index}>
                    {letter === " " ? "\u00A0" : letter}
                </motion.span>
            ))}
        </motion.span>
    );
};

export default function CaseStudiesHeader() {
    return (
        <section className="pt-32 pb-16 relative overflow-hidden ">
            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                    <div className="max-w-2xl md:pl-12">
                        <div className="flex items-center gap-4 mb-6">
                            <h1 className="text-5xl font-medium text-white tracking-tight flex items-center">
                                <TypewriterText text="Case Studies" speed={0.06} />

                                {/* Blinking Cursor */}
                                <motion.span
                                    animate={{ opacity: [0, 1, 0] }}
                                    transition={{ repeat: Infinity, duration: 0.8 }}
                                    className="inline-block w-1 h-10 bg-[#5227FF] ml-2"
                                />
                            </h1>

                            {/* Animated Arrow Wrapper */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8, x: -10 }}
                                animate={{ opacity: 1, scale: 1, x: 0 }}
                                transition={{ delay: 0.8 }}
                                className='w-12 h-12 relative'
                            >
                                <Image src="/assets/arrow-2.svg" alt="arrow" fill className='object-cover' />
                            </motion.div>
                        </div>

                        <p className="text-gray-400 text-lg leading-relaxed max-w-xl min-h-[60px]">
                            <TypewriterText
                                text="Trivon is a security-first blockchain consulting company that provides a range of services related to Trivon technology with strong emphasis on security engineering."
                                delay={1.2}
                                speed={0.02}
                            />
                        </p>
                    </div>

                    {/* Right side graphic placeholder */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.2 }}
                        transition={{ duration: 2 }}
                        className="hidden md:block w-64 h-64 bg-[#5227FF] blur-[120px] rounded-full absolute right-0 top-0 pointer-events-none"
                    />
                </div>
            </div>
        </section>
    );
}