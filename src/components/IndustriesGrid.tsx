'use client';

import { motion } from 'framer-motion';

const industries = [
    { name: 'Healthcare', icon: 'M12 4v16m8-8H4' }, // Simplified paths
    { name: 'Finance', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
    { name: 'Retail', icon: 'M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z' },
    { name: 'Manufacturing', icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z' },
    { name: 'Transportation', icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4' },
    { name: 'Education', icon: 'M12 14l9-5-9-5-9 5 9 5z' },
    { name: 'E-Commerce', icon: 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z' },
    { name: 'Real Estate', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
];

export default function IndustriesGrid() {
    return (
        <section className="py-24 bg-black relative">
            {/* Background Grid Lines */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
                <svg width="100%" height="100%">
                    <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

            <div className="container mx-auto px-4 md:px-8 relative z-10">

                <div className="flex flex-col md:flex-row justify-between items-start mb-20 relative">
                    {/* Connecting Lines */}
                    <div className="absolute top-20 left-10 w-px h-32 bg-gray-800 hidden md:block"></div>
                    <div className="absolute top-52 left-10 w-32 h-px bg-gray-800 hidden md:block"></div>

                    <div className="max-w-xl pl-0 md:pl-20 relative">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Customized Web Solutions <br />
                            for <span className="text-gray-500">Industry-Specific</span> <br />
                            Requirements
                        </h2>
                        {/* Arrow */}
                        <svg className="absolute top-0 -right-20 text-gray-500" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M7 17L17 7M17 7H7M17 7V17" /></svg>
                    </div>

                    {/* Top Corner "Steps" Graphic Illustration */}
                    <div className="hidden md:block">
                        {/* Placeholder for the isometric stairs graphic */}
                        <svg width="200" height="150" viewBox="0 0 200 150">
                            <path d="M100 20 L140 40 L140 60 L100 40 Z" fill="#3B82F6" opacity="0.8" />
                            <path d="M100 40 L140 60 L100 80 L60 60 Z" fill="#8B5CF6" opacity="0.8" />
                            <path d="M60 60 L100 80 L100 100 L60 80 Z" fill="#EC4899" opacity="0.8" />
                            <path d="M60 20 L100 40 L60 60 L20 40 Z" fill="#3B82F6" opacity="0.5" />
                        </svg>
                    </div>
                </div>

                <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
                    {industries.map((ind, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.05 }}
                            className="bg-white rounded-xl p-6 h-48 flex flex-col justify-between cursor-pointer group hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all"
                        >
                            <div className="flex justify-between items-start">
                                <span className="text-xs font-bold text-gray-300 group-hover:text-black">0{i + 1}</span>
                                <div className="text-blue-600">
                                    <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={ind.icon} /></svg>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-lg font-bold text-black mb-2">{ind.name}</h3>
                                <p className="text-[10px] text-gray-400 line-clamp-3 leading-tight group-hover:text-gray-600">
                                    Specific solutions customized for {ind.name} industry needs ensuring max growth.
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
