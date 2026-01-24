'use client';

import { motion } from 'framer-motion';

const steps = [
    {
        id: '01',
        title: 'Discovery',
        description: 'help you to build website company that is modern, user friendly, good CEO, and Clean design'
    },
    {
        id: '02',
        title: 'Design',
        description: 'help you to build website company that is modern, user friendly, good CEO, and Clean design'
    },
    {
        id: '03',
        title: 'Development',
        description: 'help you to build website company that is modern, user friendly, good CEO, and Clean design'
    },
    {
        id: '04',
        title: 'Launch',
        description: 'help you to build website company that is modern, user friendly, good CEO, and Clean design'
    }
];

export default function ProcessSection() {
    return (
        <section className="py-24 bg-black relative overflow-hidden ">
            {/* Container */}
            <div className="container mx-auto px-4 md:px-8 relative z-10">

                {/* Top Header Section */}
                <div className="max-w-5xl mb-16">
                    {/* Tag */}
                    <div className="inline-block bg-[linear-gradient(90deg,#00C6FF_0%,#0072FF_100%)] rounded-full px-4 py-1.5 mb-8">
                        <span className="text-white text-xs font-bold flex items-center gap-2">
                            <span className="text-lg leading-none">T</span>
                            A community-driven memecoin ...
                        </span>
                    </div>

                    {/* Headline */}
                    <h2 className="text-4xl md:text-6xl font-bold text-gray-400 leading-[1.2] tracking-tight mb-6">
                        When I <span className="text-[#8B5CF6]">joined</span> first mastermind with <span className="text-[#8B5CF6]">Designers</span> 10x my <span className="text-[#8B5CF6]">level</span>, everything <span className="text-[#8B5CF6]">changed</span>.
                    </h2>

                    {/* Subtext */}
                    <p className="text-gray-500 text-sm max-w-2xl leading-relaxed">
                        We provide you with a convenient and reliable platform for effective business management. Forget about complexities we'll handle everything for your convenience!
                    </p>
                </div>

                {/* Curved Divider Line */}
                <div className="relative w-full h-24 mb-16 overflow-hidden pointer-events-none">
                    <div className="absolute top-0 left-[-10%] right-[-10%] h-[1000px] border-t border-[#8B5CF6] rounded-[100%] opacity-50 shadow-[0_-5px_20px_rgba(139,92,246,0.3)]"></div>
                </div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                    {steps.map((step, index) => (
                        <div key={step.id} className="relative group">
                            {/* Separator Arrow (between items) */}
                            {index < steps.length - 1 && (
                                <div className="hidden md:block absolute top-1/3 -right-6 text-gray-600 z-10">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                                </div>
                            )}

                            {/* Large Arrow Graphic */}
                            <div className="relative w-full aspect-square mb-6">
                                {/* The Diagonal Arrow Shape */}
                                <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_0_15px_rgba(139,92,246,0.2)]">
                                    <defs>
                                        <linearGradient id={`arrow-grad-${index}`} x1="0%" y1="100%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="#2e1065" stopOpacity="1" /> {/* dark purple */}
                                            <stop offset="50%" stopColor="#7c3aed" stopOpacity="1" /> {/* purple */}
                                            <stop offset="100%" stopColor="#a78bfa" stopOpacity="1" /> {/* light purple */}
                                        </linearGradient>
                                    </defs>
                                    {/* Arrow Body */}
                                    <path
                                        d="M40 160 L140 160 L140 60 L180 60 L180 20 L40 160 Z"
                                        fill="none"
                                    />
                                    {/* Trying a simpler thick arrow path */}
                                    {/* Main Shaft */}
                                    <path d="M40 160 L120 80" stroke={`url(#arrow-grad-${index})`} strokeWidth="40" strokeLinecap="butt" />
                                    {/* Arrow Head */}
                                    <path d="M120 40 L160 40 L160 120" fill="none" stroke={`url(#arrow-grad-${index})`} strokeWidth="40" strokeLinecap="butt" strokeLinejoin="miter" />
                                    {/* Let's draw a polygon for clean fill */}
                                    <polygon
                                        points="40,180 20,160 120,60 80,60 160,20 180,60 140,60 140,100" // Not quite right, arrows are hard in polygon
                                        fill={`url(#arrow-grad-${index})`}
                                        className="hidden"
                                    />
                                    {/* Using the simple thick stroke approach which looks like the modern blocky arrow */}
                                    <path d="M30 170 L130 70" stroke={`url(#arrow-grad-${index})`} strokeWidth="50" strokeLinecap="square" />
                                    <path d="M90 30 L170 30 L170 110" fill="none" stroke={`url(#arrow-grad-${index})`} strokeWidth="50" strokeLinecap="square" strokeLinejoin="miter" />
                                </svg>

                                {/* Number Overlay */}
                                <div className="absolute top-4 right-4 text-4xl font-bold text-white drop-shadow-md">
                                    {step.id}.
                                </div>
                            </div>

                            {/* Content */}
                            <div className="text-left px-2">
                                <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                                <p className="text-stone-400 text-xs leading-relaxed max-w-[200px]">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
