'use client';

import { motion } from 'framer-motion';

export default function HomeHero() {
    return (
        <section className="relative min-h-[110vh] bg-[#050505] overflow-hidden flex flex-col justify-center font-sans">

            {/* Background Effects */}
            {/* Purple Haze Top Left */}
            <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-[#2e1065] opacity-40 blur-[150px] rounded-full pointer-events-none"></div>
            {/* Deep Purple Glow Center/Right */}
            <div className="absolute top-[10%] right-[0%] w-[1000px] h-[1000px] bg-gradient-to-b from-[#4c1d95] to-transparent opacity-20 blur-[120px] rounded-full pointer-events-none"></div>

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none"></div>

            {/* Geometric Cube Grid Lines (Abstract) */}
            <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 pointer-events-none">
                <svg width="100%" height="100%">
                    <pattern id="cubes" width="100" height="100" patternUnits="userSpaceOnUse">
                        <path d="M50 0 L100 25 L100 75 L50 100 L0 75 L0 25 Z" fill="none" stroke="white" strokeWidth="0.5" />
                        <path d="M50 0 L50 50 L100 75" fill="none" stroke="white" strokeWidth="0.5" />
                        <path d="M0 25 L50 50" fill="none" stroke="white" strokeWidth="0.5" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#cubes)" />
                </svg>
            </div>

            <div className="container mx-auto px-4 md:px-8 relative z-10 pt-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Content - Left */}
                    <div className="z-20">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-6xl md:text-7xl font-bold text-white leading-[1.1] mb-8 tracking-tight"
                        >
                            Designed to <span className="text-[#A855F7] relative inline-block">
                                Grow
                                {/* Badge next to Grow */}
                                <span className="absolute top-1 -right-32 bg-[#1a1a2e] border border-gray-700 text-white text-[10px] px-3 py-1 rounded-full flex items-center gap-1 w-max">
                                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                                    Best Web & App
                                </span>
                            </span> <br />
                            <span className="flex items-center gap-4">
                                {/* Pill Badge */}
                                <span className="inline-flex items-center gap-2 bg-[#2e1065] text-white text-[10px] px-3 py-1.5 rounded-full border border-purple-500/50">
                                    <span className="w-3 h-3 rounded-full bg-white flex items-center justify-center text-black text-[8px] font-bold">+</span>
                                    Innovative Product of the Year
                                </span>
                            </span>
                            <span className="block mt-2">Your Business</span>
                        </motion.h1>

                        <p className="text-gray-400 text-sm max-w-md mb-10 leading-relaxed">
                            We provide you with a convenient and reliable platform for effective business management. Forget about complexities- we'll handle everything for your convenience!
                        </p>

                        <div className="flex items-center gap-6">
                            <button className="h-12 px-8 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#a855f7] text-white font-bold text-sm flex items-center gap-2 shadow-[0_0_25px_rgba(139,92,246,0.4)] hover:shadow-[0_0_35px_rgba(139,92,246,0.6)] transition-all">
                                Get Started
                                <div className="bg-white rounded-full p-1">
                                    <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="4"><polyline points="7 17 17 7 17 17"></polyline><line x1="7" y1="17" x2="17" y2="7"></line></svg>
                                </div>
                            </button>
                        </div>

                        {/* Bottom Socials */}
                        <div className="mt-24 flex items-center gap-3 text-xs text-gray-400 font-medium">
                            <span>Follow For More</span>
                            <div className="w-8 h-px bg-gray-700"></div>
                            <div className="flex gap-4 text-white">
                                <span className="hover:text-purple-400 cursor-pointer"><i className="fab fa-instagram">IG</i></span>
                                <span className="hover:text-purple-400 cursor-pointer"><i className="fas fa-globe">Web</i></span>
                                <span className="hover:text-purple-400 cursor-pointer"><i className="fab fa-linkedin">In</i></span>
                                <span className="hover:text-purple-400 cursor-pointer"><i className="fab fa-twitter">Tw</i></span>
                            </div>
                        </div>
                    </div>

                    {/* Visual - Right */}
                    <div className="relative h-[600px] flex items-center justify-center">

                        {/* The Coin */}
                        <div className="relative z-10 w-80 h-80 md:w-[450px] md:h-[450px]">
                            {/* Light Beams from center */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-[conic-gradient(from_0deg,transparent_0deg,#7c3aed_20deg,transparent_40deg,transparent_360deg)] opacity-30 blur-xl rotate-45 pointer-events-none"></div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-[conic-gradient(from_180deg,transparent_0deg,#7c3aed_20deg,transparent_40deg,transparent_360deg)] opacity-30 blur-xl rotate-45 pointer-events-none"></div>

                            {/* Coin CSS Construction */}
                            <motion.div
                                className="w-full h-full rounded-full bg-[#1e1035] border border-purple-500/30 flex items-center justify-center relative shadow-[0_0_80px_rgba(124,58,237,0.3)]"
                                style={{
                                    transformStyle: 'preserve-3d',
                                    transform: 'rotateY(-15deg) rotateX(10deg)'
                                }}
                                animate={{ y: [-15, 15, -15] }}
                                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                            >
                                {/* Coin Face */}
                                <div className="w-[85%] h-[85%] rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#4c1d95] shadow-inner flex items-center justify-center border-4 border-[#6d28d9] relative overflow-hidden">
                                    {/* Glossy Reflection */}
                                    <div className="absolute top-0 left-0 w-full h-1/2 bg-white opacity-10 skew-y-12 blur-md"></div>

                                    {/* Logo "D" or "T" */}
                                    <div className="text-white text-9xl font-black italic drop-shadow-md" style={{ fontFamily: 'sans-serif' }}>
                                        <svg width="150" height="150" viewBox="0 0 100 100" fill="currentColor">
                                            <path d="M20 20 H60 Q90 20 90 50 Q90 80 60 80 H20 V20 Z M40 40 V60 H55 Q70 60 70 50 Q70 40 55 40 H40 Z" />
                                            <path d="M30 30 L30 70" stroke="rgba(0,0,0,0.2)" strokeWidth="2" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Coin Edge (Pseudo-3D) */}
                                <div className="absolute inset-0 rounded-full border-[12px] border-[#2e1065] opacity-50 pointer-events-none" style={{ transform: 'translateZ(-20px)' }}></div>
                            </motion.div>
                        </div>

                        {/* Scroll Down Spinner (Bottom Center of this column or absolute to section) */}
                        <div className="absolute bottom-10 left-0 right-0 lg:left-[-50%] flex justify-center">
                            <div className="relative w-24 h-24 flex items-center justify-center group cursor-pointer">
                                <div className="absolute inset-0 animate-spin-slow">
                                    <svg viewBox="0 0 100 100" width="100" height="100">
                                        <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                                        <text fill="gray" fontSize="12" letterSpacing="2px">
                                            <textPath href="#circlePath" startOffset="0%">
                                                SCROLL DOWN FOR MORE • SCROLL DOWN •
                                            </textPath>
                                        </text>
                                    </svg>
                                </div>
                                <div className="text-white">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="5" y="2" width="14" height="20" rx="7" /><line x1="12" y1="6" x2="12" y2="10" /></svg>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Right Text */}
                        <div className="absolute bottom-10 right-0 max-w-[200px] text-right hidden lg:block">
                            <p className="text-[10px] text-gray-500 leading-relaxed">
                                Trivon Digital is an agency that builds brands for every angle. Today, tomorrow and years from now.
                            </p>
                        </div>

                    </div>
                </div>
            </div>

        </section>
    );
}
