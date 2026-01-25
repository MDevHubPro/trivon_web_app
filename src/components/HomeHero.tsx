'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

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
            transition: { duration: 0.01 }, // Sharp reveal for typewriter feel
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

export default function HomeHero() {
    // Timing constants to keep things consistent
    const speed = 0.05;
    const line1Length = "Designed to ".length;
    const line2Length = "Grow".length;

    // Calculation for start times (start + (chars * speed))
    const growStart = 0.2 + (line1Length * speed);
    const businessStart = growStart + (line2Length * speed) + 0.5; // +0.5 for a natural breath

    return (
        <section className="relative min-h-[110vh] overflow-hidden flex flex-col justify-center font-sans bg-[#0a0516]">
            {/* Background Effects */}
            <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-purple-600 opacity-20 blur-[150px] rounded-full pointer-events-none"></div>
            <div className="absolute top-[10%] right-[0%] w-[1000px] h-[1000px] bg-indigo-900 opacity-20 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto px-4 md:px-8 relative z-10 pt-[23rem] md:pt-32">
                <div className="flex w-full gap-12 items-center">
                    <div className="relative w-full text-center md:text-left ">
                        <h1 className="text-4xl md:text-7xl font-medium text-white leading-[1.1] mb-4 md:mb-8 tracking-tight">
                            {/* Sequence 1: Main Title Start */}
                            <TypewriterText text="Designed to " delay={0.2} speed={speed} />

                            <span className="text-[#A855F7] relative inline-block">
                                {/* Sequence 2: Continues with "Grow" */}
                                <TypewriterText text="Grow" delay={growStart} speed={speed} />

                                {/* Cursor - Only blinks during the heading phase */}
                                <motion.span
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: [0, 1, 0] }}
                                    transition={{ repeat: 8, duration: 0.6 }}
                                    className="inline-block w-1 h-12 bg-[#A855F7] ml-1 absolute bottom-2"
                                />

                                {/* Badge - Pops in after the heading is fully typed */}
                                <motion.span
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: businessStart - 0.2 }}
                                    className="absolute top-4 left-48 bg-[#2e1065] border border-gray-700 text-white text-sm px-2 py-2 rounded-full flex items-center gap-1 w-44"
                                >
                                    <div className='w-8 h-8 rounded-full flex items-center justify-center bg-[linear-gradient(258.73deg,#6B2CEC_7.48%,#A156F7_92.51%)]'>
                                        <Image src="/assets/star.svg" alt="star" width={20} height={20} />
                                    </div>
                                    <span className="tracking-wider text-[12px]">Best Web & App</span>
                                </motion.span>
                            </span>
                            <br />

                            {/* Sequence 3: "Your Business" line */}
                            <span className="block mt-2">
                                <TypewriterText text="Your Business" delay={businessStart} speed={speed} />
                            </span>
                        </h1>

                        {/* Sequence 4: The Paragraph (Begins after heading is done) */}
                        <div className="text-gray-400 text-sm max-w-md mb-10 leading-[1.2] md:leading-relaxed min-h-[60px]">
                            <TypewriterText
                                text="We provide you with a convenient and reliable platform for effective business management. Forget about complexities—we'll handle everything for your convenience!"
                                delay={businessStart + 1} // Starts 1 second after "Your Business"
                                speed={0.02} // Typed slightly faster for long text
                            />
                        </div>

                        {/* Sequence 5: The Final UI Reveal */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: businessStart + 4 }}
                            className="flex items-center justify-center md:justify-start gap-6"
                        >
                            <button className="h-12 px-8 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#a855f7] text-white font-bold text-sm flex items-center gap-2 shadow-[0_0_25px_rgba(139,92,246,0.4)] hover:shadow-[0_0_35px_rgba(139,92,246,0.6)] transition-all">
                                Get Started
                                <div className="bg-white rounded-full p-1">
                                    <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="4"><polyline points="7 17 17 7 17 17"></polyline><line x1="7" y1="17" x2="17" y2="7"></line></svg>
                                </div>
                            </button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}