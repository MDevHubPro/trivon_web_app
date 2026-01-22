'use client';

import { motion } from 'framer-motion';

const services = [
    {
        title: 'UI/UX Design',
        desc: 'help you to build website company that is modern, user friendly, good CEO, and Clean design',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
        visual: 'ui',
        type: 'purple'
    },
    {
        title: 'Logo Branding',
        desc: 'help you to build website company that is modern, user friendly, good CEO, and Clean design',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg',
        visual: 'branding',
        type: 'dark'
    },
    {
        title: 'Shopify Website',
        desc: 'help you to build website company that is modern, user friendly, good CEO, and Clean design',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/shopify/shopify-original.svg',
        visual: 'shopify',
        type: 'dark'
    },
    {
        title: 'Website Dev',
        desc: 'help you to build website company that is modern, user friendly, good CEO, and Clean design',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        visual: 'web',
        type: 'purple'
    }
];

const marqueeText = ["CREATIVE DESIGN", "UI/UX", "MARKETING", "MOTION", "ANIMATION", "BRANDING", "DEVELOPMENT"];

export default function WorkTogether() {
    return (
        <section className="pb-6  bg-red-500 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-8 mb-24 relative z-10">
                {/* Header */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1a1a2e] border border-gray-800 mb-6 mx-auto">
                        <span className="w-4 h-4 rounded-full bg-purple-500 flex items-center justify-center text-[10px] text-white">+</span>
                        <span className="text-gray-300 text-xs font-medium tracking-wide">Our Services</span>
                    </div>

                    <h2 className="text-5xl md:text-7xl font-bold text-white mb-4">
                        Let's work <span className="text-[#8B5CF6]">together</span>
                    </h2>
                    <h2 className="text-5xl md:text-7xl font-bold text-white mb-8">
                        <span className="text-[#8B5CF6]">with</span> our us
                    </h2>

                    <p className="text-gray-500 text-sm max-w-xl mx-auto">
                        We provide you with a convenient and reliable platform for effective business management. Forget about complexities we'll handle everything for your convenience!
                    </p>
                </div>

                {/* Cards Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, i) => (
                        <div
                            key={i}
                            className="bg-[#0f0f13] border border-[#1f1f23] rounded-3xl p-6 h-[480px] flex flex-col relative overflow-hidden group hover:border-purple-500/50 transition-colors"
                        >
                            {/* Icon top left */}
                            <div className="w-10 h-10 rounded-full bg-[#1a1a2e] border border-gray-800 flex items-center justify-center mb-6">
                                <img src={service.icon} alt="" className="w-5 h-5 opacity-70" />
                            </div>

                            {/* Content */}
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold text-white mb-1">
                                    {service.title.split(' ')[0]} <span className="text-[#8B5CF6]">{service.title.split(' ').slice(1).join(' ')}</span>
                                </h3>
                                <p className="text-gray-500 text-[10px] leading-relaxed mb-6 max-w-[200px]">
                                    {service.desc}
                                </p>

                                <button className="flex items-center gap-2 bg-[#1a1a2e] hover:bg-[#252538] text-gray-300 text-[10px] font-bold px-4 py-2 rounded-full border border-gray-800 transition-colors">
                                    GET STARTED
                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                                </button>
                            </div>

                            {/* Visual/Illustration at Bottom */}
                            <div className="absolute bottom-0 left-0 right-0 h-48 flex items-end justify-center pointer-events-none">
                                {/* Abstract Gradients & Shapes resembling the mockup images */}
                                {service.visual === 'branding' && (
                                    <div className="w-40 h-40 relative">
                                        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-gray-800 to-gray-700 rounded-t-xl transform -rotate-12 border border-gray-600">
                                            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-gray-500"></div>
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                                    </div>
                                )}
                                {service.visual === 'shopify' && (
                                    <div className="w-40 h-40 relative">
                                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-[#2d2d3a] rounded-lg flex items-center justify-center transform skew-x-3">
                                            <span className="text-5xl font-bold text-gray-500 opacity-20">S</span>
                                        </div>
                                        {/* Bag handles */}
                                        <div className="absolute bottom-32 left-1/2 -translate-x-1/2 w-16 h-16 border-4 border-[#2d2d3a] rounded-full clip-half"></div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                                    </div>
                                )}
                                {service.visual === 'ui' && (
                                    <div className="w-full h-full relative p-4 flex flex-col justify-end">
                                        <div className="bg-[#1e1e26] w-full h-32 rounded-t-xl p-4 border border-gray-700">
                                            <div className="flex gap-2 mb-4">
                                                <div className="w-8 h-8 rounded-full bg-gray-600"></div>
                                                <div className="w-20 h-2 bg-gray-600 rounded mt-3"></div>
                                            </div>
                                            <div className="w-full h-12 bg-gray-700/50 rounded"></div>
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                                    </div>
                                )}
                                {service.visual === 'web' && (
                                    <div className="w-full h-36 bg-[#1e1e26] rounded-t-xl border border-gray-700 mx-6 relative">
                                        <div className="h-6 border-b border-gray-700 flex items-center gap-1 px-3">
                                            <div className="w-2 h-2 rounded-full bg-red-500"></div>
                                            <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                        </div>
                                        <div className="p-4">
                                            <div className="w-full h-20 bg-gray-800/50 rounded"></div>
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                                    </div>
                                )}
                            </div>

                            {/* Hover Glow */}
                            <div className="absolute inset-0 bg-purple-900/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Purple Marquee Strip */}
            <div className="w-full bg-gradient-to-r from-[#7000ff] to-[#bd00ff] py-4 transform -rotate-1 scale-110 shadow-[0_0_30px_rgba(139,92,246,0.5)] border-y border-white/20">
                <div className="flex whitespace-nowrap overflow-hidden relative">
                    <motion.div
                        className="flex gap-16 items-center"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ ease: "linear", duration: 20, repeat: Infinity }}
                    >
                        {[...marqueeText, ...marqueeText, ...marqueeText, ...marqueeText].map((text, i) => (
                            <div key={i} className="flex items-center gap-16">
                                <span className="text-white font-bold text-xl tracking-widest">{text}</span>
                                <div className="w-2 h-2 rounded-full bg-white"></div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
