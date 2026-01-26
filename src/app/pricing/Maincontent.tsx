'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import BrandMarquee from '@/components/BrandMarquee';
import Folder from '../../components/folder';

// --- Reusable Typewriter Component ---
const TypewriterText = ({ text, delay = 0, speed = 0.05, className = "" }: { text: string, delay?: number, speed?: number, className?: string }) => {
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

export default function CustomDevHero() {
    const brands = ['winikon', 'temenos', 'SOFTWARE GROUP', 'winikon', 'Abler', 'avanza', 'temenos'];

    // Timing
    const speed = 0.05;
    const pricingStart = 1.2;

    return (
        <>
            <div className="relative w-full h-screen overflow-hidden ">
                {/* Floating Folder Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="absolute left-4 sm:left-8 md:left-14 bottom-4 sm:bottom-8 md:bottom-0 z-40 rounded-2xl p-2 sm:p-4 shadow-2xl"
                >
                    {/* Desktop Folder */}
                    <div className='relative md:block hidden rounded-[30px] z-[50] h-44 w-44 sm:h-64 sm:w-64 md:h-72 md:w-72'>
                        <div style={{ height: '100%', position: 'absolute', left: 0, right: 0, bottom: 0, width: "100%", display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
                            <Folder size={2} color="#5227FF" className="custom-folder" />
                        </div>
                    </div>
                    {/* Mobile Folder - Reduced Size */}
                    <div className='relative block md:hidden rounded-[30px] z-[50] h-40 w-40'>
                        <div style={{ height: '100%', position: 'absolute', left: 0, right: 0, bottom: 0, top: '20px', width: "100%", display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
                            <Folder size={0.8} color="#5227FF" className="custom-folder" />
                        </div>
                    </div>
                </motion.div>

                {/* Top section - Headers */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-10 sm:top-16 flex flex-col justify-center sm:justify-end gap-4 items-center text-center sm:text-left px-6 w-full">
                    <div className="flex flex-col w-full sm:flex-row items-start md:items-center justify-center gap-4">
                        <h2 className="text-2xl sm:text-4xl text-nowrap text-right md:text-5xl font-medium bg-[radial-gradient(50%_50%_at_50%_50%,#FFFFFF_30%,rgba(255,255,255,0.5)_84.77%)] bg-clip-text text-transparent">
                            <TypewriterText text="Explore New Ways To Engage" speed={0.03} /> <br />
                            <TypewriterText text="Your Customers" delay={0.8} speed={0.03} />
                        </h2>
                    </div>
                    <div className="mt-4 sm:mt-0 flex flex-row justify-center items-end md:items-center sm:items-start gap-4">
                        <p className="text-gray-400 text-right text-xs sm:text-sm mt-4 max-w-xs sm:max-w-md">
                            <TypewriterText
                                text="Trivon is a security-first blockchain consulting company providing a range of services with strong emphasis on security engineering."
                                delay={1.5}
                                speed={0.01}
                            />
                        </p>
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}>
                            <Image src="/assets/arrow-3.svg" alt="arrow" width={40} height={40} className="sm:w-10 sm:h-10" />
                        </motion.div>
                    </div>
                </div>

                {/* Center - Main "Our Pricing" heading */}
                <div className="absolute top-[65%] text-nowrap -translate-y-2/3 right-4 sm:right-10 md:right-14">
                    <h3 className="flex items-center font-medium tracking-tighter text-[55px] sm:text-[110px] md:text-[150px]">
                        {/* Prefix */}
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: pricingStart }}
                            className="text-white opacity-70"
                        >
                            */
                        </motion.span>

                        <span className="ml-2 relative flex items-center">
                            {/* Typewriter with White to Black Gradient */}
                            <TypewriterText
                                text="Our Pricing"
                                delay={pricingStart + 0.2}
                                speed={0.08}
                                className="bg-[linear-gradient(90deg,#FFFFFF_0%,#000000_100%)] bg-clip-text text-transparent"
                            />

                            {/* Blinking Cursor */}
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: [0, 1, 0] }}
                                transition={{ repeat: Infinity, duration: 0.8 }}
                                className="inline-block w-1.5 md:w-3 h-[45px] md:h-[100px] bg-white ml-2 md:ml-4"
                            />
                        </span>
                    </h3>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-10 right-4 sm:right-10 md:right-20 w-24 h-24 sm:w-32 sm:h-32 bg-gray-800 rounded-full opacity-10 blur-3xl"></div>
                <div className="absolute bottom-10 left-4 sm:left-10 md:left-20 w-32 h-32 sm:w-40 sm:h-40 bg-gray-700 rounded-full opacity-10 blur-3xl"></div>
            </div>

            <BrandMarquee className="!absolute !-bottom-10 !z-10" />
        </>
    );
}