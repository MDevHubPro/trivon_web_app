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
            display: "inline",
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
                    {letter}
                </motion.span>
            ))}
        </motion.span>
    );
};

export default function CustomDevHero() {
    const brands = ['winikon', 'temenos', 'SOFTWARE GROUP', 'winikon', 'Abler', 'avanza', 'temenos'];

    // Timing Constants
    const speed = 0.04;
    const headerDelay = 0.2;
    // Delay for the main "Web Dev" text starts after the top headers (approx 25 chars)
    const mainTitleDelay = headerDelay + (25 * speed) + 0.5;
    const paragraphDelay = mainTitleDelay + (8 * speed) + 0.3;

    return (
        <>
            <div className="relative w-full h-screen overflow-hidden ">
                {/* Floating client image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="absolute left-4 sm:left-8 md:left-14 bottom-4 sm:bottom-8 md:bottom-0 z-40 rounded-2xl p-2 sm:p-4 shadow-2xl"
                >
                    <div className='relative  md:block hidden rounded-[30px] z-[50] h-44 w-44 sm:h-64 sm:w-64 md:h-72 md:w-72'>
                        <div style={{ height: '100%', position: 'absolute', left: 0, right: 0, bottom: 0, width: "100%", display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
                            <Folder size={2} color="#5227FF" className="custom-folder" />
                        </div>
                    </div>
                    <div className='relative  block md:hidden rounded-[30px] z-[50] h-64 w-64 md:h-72 md:w-72'>
                        <div style={{ height: '100%', position: 'absolute', left: 0, right: 0, bottom: 0, width: "100%", display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
                            <Folder size={1} color="#5227FF" className="custom-folder" />
                        </div>
                    </div>
                </motion.div>


                {/* Top section - Custom Development Services */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-10 sm:top-16 flex flex-col sm:flex-row justify-center sm:justify-end gap-4 items-center text-center sm:text-left px-6 w-full">

                    <div className="flex flex-col w-full sm:flex-row items-start md:items-center justify-center gap-4">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium bg-[radial-gradient(50%_50%_at_50%_50%,#FFFFFF_30%,rgba(255,255,255,0.5)_84.77%)] bg-clip-text text-transparent">
                            <span className="block"><TypewriterText text="CUSTOM" delay={headerDelay} speed={speed} /></span>
                            <span className="block"><TypewriterText text="DEVELOPMENT" delay={headerDelay + 0.3} speed={speed} /></span>
                            <span className="block"><TypewriterText text="SERVICES" delay={headerDelay + 0.6} speed={speed} /></span>
                        </h2>
                    </div>

                    <div className="mt-4 sm:mt-0 flex flex-col justify-center items-end md:items-center sm:items-start">
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: headerDelay + 1 }}
                        >
                            <Image src="/assets/arrow-3.svg" alt="arrow" width={40} height={40} className="sm:w-10 sm:h-10" />
                        </motion.div>
                        <p className="text-gray-400 text-xs sm:text-sm mt-4 max-w-xs sm:max-w-md min-h-[40px]">
                            <TypewriterText
                                text="We specialize in creating innovative, scalable, and secure decentralized applications."
                                delay={paragraphDelay}
                                speed={0.02}
                            />
                        </p>
                    </div>
                </div>

                {/* Center - Main heading */}
                <div className="absolute top-1/2 -translate-y-1/2 right-4 sm:right-10 md:right-20">
                    <h3 className="flex items-center font-medium tracking-tighter text-[60px] text-nowrap sm:text-[120px] md:text-[160px] bg-[linear-gradient(90deg,#FFFFFF_0%,#444444_100%)] bg-clip-text text-transparent">
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: mainTitleDelay }}
                        >*/</motion.span>
                        <span className="ml-2 relative flex items-center">
                            <TypewriterText
                                text="Web Dev"
                                delay={mainTitleDelay + 0.2}
                                speed={0.08}
                                className="bg-[linear-gradient(90deg,#FFFFFF_0%,#000000_100%)] bg-clip-text text-transparent"
                            />

                            {/* Cursor - Removed text-transparent so it's actually visible */}
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: [0, 1, 0] }}
                                transition={{ repeat: Infinity, duration: 0.8 }}
                                className="inline-block w-2 md:w-4 h-[50px] md:h-[100px] bg-white ml-4 shadow-[0_0_15px_rgba(255,255,255,0.8)]"
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