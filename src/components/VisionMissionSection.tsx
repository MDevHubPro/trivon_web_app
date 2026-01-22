'use client';

import { motion } from 'framer-motion';

export default function VisionMissionSection() {
    return (
        <section className="py-24 bg-black relative overflow-hidden">
            {/* Background Grid Pattern - Faint squares to match image */}
            <div className="absolute inset-0 pointer-events-none opacity-5">
                <svg width="100%" height="100%">
                    <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                        <path d="M 50 0 L 0 0 0 50" fill="none" stroke="white" strokeWidth="0.5" />
                        <rect x="0" y="0" width="10" height="10" fill="white" fillOpacity="0.2" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

            <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-6xl">

                {/* Top Central Shield Icon */}
                <div className="flex justify-center mb-12 relative z-20">
                    <div className="relative w-32 h-36">
                        {/* The Shield Hexagon Glow */}
                        <div className="absolute inset-0 bg-purple-900/40 blur-2xl rounded-full"></div>
                        {/* Hexagon Shape */}
                        <svg viewBox="0 0 100 115" className="w-full h-full drop-shadow-[0_0_15px_rgba(139,92,246,0.6)]">
                            <path d="M50 0 L95 25 L95 75 L50 100 L5 75 L5 25 Z" fill="#1a1a2e" stroke="#8B5CF6" strokeWidth="1" />
                            {/* Inner Shield Icon */}
                            <path d="M50 20 L80 35 V70 L50 90 L20 70 V35 Z" fill="none" stroke="#A855F7" strokeWidth="2" />
                            <path d="M35 55 L45 65 L65 45" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>

                        {/* Connection Line to Vision (Left) */}
                        <svg className="absolute top-1/2 left-0 -translate-x-full w-48 h-24 pointer-events-none hidden lg:block" style={{ top: '60%' }}>
                            <path d="M190 0 C 100 0, 100 100, 0 100" fill="none" stroke="#4c1d95" strokeWidth="1" strokeDasharray="5 5" />
                            <circle cx="0" cy="100" r="3" fill="#8B5CF6" />
                        </svg>

                        {/* Connection Line to Mission (Right) */}
                        <svg className="absolute top-1/2 right-0 translate-x-full w-48 h-24 pointer-events-none hidden lg:block" style={{ top: '60%' }}>
                            <path d="M0 0 C 90 0, 90 50, 180 50" fill="none" stroke="#4c1d95" strokeWidth="1" strokeDasharray="5 5" />
                            <circle cx="180" cy="50" r="3" fill="#8B5CF6" />
                        </svg>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-32 gap-y-16 items-start relative">

                    {/* Vision Block */}
                    <div className="relative">
                        {/* Title Box with Gradient Border Left */}
                        <div className="relative inline-block mb-6">
                            <div className="bg-black border border-gray-800 rounded-lg px-8 py-4 relative z-10 overflow-hidden group">
                                {/* Gradient shine effect on left */}
                                <div className="absolute top-0 bottom-0 left-0 w-1 bg-gradient-to-b from-transparent via-blue-500 to-transparent"></div>
                                <h3 className="text-3xl font-bold text-white">Our Vision</h3>
                            </div>
                            {/* Glow under title */}
                            <div className="absolute -inset-1 bg-blue-500/20 blur-lg rounded-lg -z-10"></div>
                        </div>

                        <p className="text-gray-400 text-sm leading-relaxed text-justify border-l border-gray-800 pl-6 py-2 relative">
                            {/* Small connection line indicator */}
                            <span className="absolute top-0 left-[-1px] w-1 h-8 bg-purple-500"></span>
                            Our Vision at Trivon is to advance the interoperable blockchain landscape through secure socio-technical innovations that cater specifically to the evolving needs of individuals, startups, and enterprises. We are committed to simplifying Decentralized Finance and making it more accessible, while ensuring our technologies contribute positively to a more transparent, privacy preserving, and conscious future.
                        </p>
                    </div>

                    {/* Mission Block - Shifted Down */}
                    <div className="relative lg:mt-32">
                        {/* Title Box with Gradient Border Right */}
                        <div className="relative inline-block mb-6">
                            <div className="bg-black border border-gray-800 rounded-lg px-8 py-4 relative z-10 overflow-hidden group">
                                {/* Gradient shine effect on right */}
                                <div className="absolute top-0 bottom-0 right-0 w-1 bg-gradient-to-b from-transparent via-blue-500 to-transparent"></div>
                                <h3 className="text-3xl font-bold text-white">Our Mission</h3>
                            </div>
                            {/* Glow under title */}
                            <div className="absolute -inset-1 bg-blue-500/20 blur-lg rounded-lg -z-10"></div>
                        </div>

                        <p className="text-gray-400 text-sm leading-relaxed text-justify border-l border-gray-800 pl-6 py-2 relative">
                            {/* Small connection line indicator */}
                            <span className="absolute bottom-0 left-[-1px] w-1 h-8 bg-blue-500"></span>
                            Our mission at Trivon is to advance the interoperable blockchain landscape through secure socio-technical innovations that cater specifically to the evolving needs of individuals, startups, and enterprises. We are committed to simplifying Decentralized Finance and making it more accessible, while ensuring our technologies contribute positively to a more transparent, privacy preserving, and conscious future.
                        </p>
                    </div>

                </div>

                {/* Connecting Lines Overlay for Desktop - connecting text blocks */}
                <div className="absolute inset-x-0 bottom-0 h-full pointer-events-none hidden lg:block overflow-visible -z-0">
                    {/* Line from Vision text bottom to... somewhere? Image shows complex wiring. Just generic connection hints. */}
                </div>

            </div>
        </section>
    );
}
