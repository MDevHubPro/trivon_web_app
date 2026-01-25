'use client';

import React from 'react';
import Image from "next/image";
import { motion } from 'framer-motion';
import BrandMarquee from "@/components/BrandMarquee";

// --- Reusable Typewriter Component ---
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

const Maincontent = () => {
    const brands = ['winikon', 'temenos', 'SOFTWARE GROUP', 'winikon', 'Abler', 'avanza', 'temenos'];

    return (
        <>
            <div className="relative z-10 md:max-w-5xl flex flex-col py-32 h-full md:h-auto md:py-2 gap-4 justify-between w-full text-center">

                {/* Top heading with arrow */}
                <div className="flex items-center justify-left gap-8">
                    <h1 className="text-4xl md:text-5xl text-left md:text-right font-medium tracking-tighter text-gray-200 leading-tight md:max-w-3xl">
                        <TypewriterText
                            text="Customized Web Solutions for Industry-Specific Requirements"
                            speed={0.03}
                            style={{
                                background: "radial-gradient(50% 50% at 50% 50%, #FFFFFF 30%, rgba(255, 255, 255, 0.5) 84.77%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        />
                    </h1>

                    {/* Arrow fades in after text starts */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.5 }}
                        className="hidden md:block mt-8"
                    >
                        <Image src="/assets/arrow-2.svg" width={100} height={100} alt="Arrow" />
                    </motion.div>
                </div>

                {/* Main brand text - "Industries" */}
                <div className="flex items-end justify-end">
                    <h2 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-medium tracking-tighter text-gray-300">
                        {/* Prefix symbol */}
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2 }}
                            className="text-white"
                        >
                            */
                        </motion.span>

                        {/* Animated Gradient Text */}
                        <TypewriterText
                            text="Industries"
                            delay={2.2}
                            speed={0.1}
                            style={{
                                background: "linear-gradient(90deg, #FFFFFF 0%, #000000 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        />

                        {/* Blinking Cursor */}
                        <motion.span
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ repeat: Infinity, duration: 0.8 }}
                            className="inline-block w-2 md:w-4 h-[50px] md:h-[100px] bg-white ml-2 align-middle"
                        />
                    </h2>
                </div>
            </div>

            {/* Marquee Section */}
            <div className="hidden md:flex items-center justify-between gap-8 relative w-full opacity-40 overflow-hidden mt-12">
                <BrandMarquee brands={brands} />
            </div>
        </>
    );
};

export default Maincontent;