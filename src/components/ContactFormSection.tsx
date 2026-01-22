'use client';

import { motion } from 'framer-motion';

export default function ContactFormSection() {
    return (
        <section className="py-20 bg-black relative">
            <div className="container mx-auto px-4 md:px-8">
                <div className="bg-[#0A0A0A] rounded-3xl p-8 md:p-12 border border-gray-900 overflow-hidden relative">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
                        {/* Form Side */}
                        <div>
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">Let's Talk</h3>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs text-gray-500 uppercase tracking-wider">First Name</label>
                                        <input type="text" className="w-full bg-transparent border-b border-gray-800 text-white pb-2 focus:border-purple-500 focus:outline-none transition-colors" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs text-gray-500 uppercase tracking-wider">Last Name</label>
                                        <input type="text" className="w-full bg-transparent border-b border-gray-800 text-white pb-2 focus:border-purple-500 focus:outline-none transition-colors" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs text-gray-500 uppercase tracking-wider">Project Name</label>
                                    <input type="text" className="w-full bg-transparent border-b border-gray-800 text-white pb-2 focus:border-purple-500 focus:outline-none transition-colors" />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs text-gray-500 uppercase tracking-wider">Project URL</label>
                                    <input type="text" className="w-full bg-transparent border-b border-gray-800 text-white pb-2 focus:border-purple-500 focus:outline-none transition-colors" />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs text-gray-500 uppercase tracking-wider">Message</label>
                                    <textarea rows={3} className="w-full bg-transparent border-b border-gray-800 text-white pb-2 focus:border-purple-500 focus:outline-none transition-colors resize-none"></textarea>
                                </div>

                                <div className="pt-4">
                                    <button type="submit" className="w-full md:w-auto bg-[#8B5CF6] hover:bg-[#7C3AED] text-white px-8 py-3 rounded-full flex items-center justify-between gap-4 group transition-all">
                                        <span>Send Request</span>
                                        <span className="bg-white/20 rounded-full p-1 group-hover:bg-white/30 transition">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                                <polyline points="12 5 19 12 12 19"></polyline>
                                            </svg>
                                        </span>
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* Image Side */}
                        <div className="relative hidden lg:block">
                            <div className="absolute right-0 top-0 w-full h-full">
                                {/* Purple Wave Background Effect */}
                                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-600/20 blur-[100px] rounded-full"></div>

                                {/* Abstract 3D Wave Image (Using SVG or Placeholder) */}
                                <div className="relative z-10 h-full flex flex-col items-center justify-center">
                                    {/* 3D Wave Placeholder */}
                                    <div className="w-full h-64 mb-8 relative">
                                        {/* Just a visual representation of the wave in the image */}
                                        <svg viewBox="0 0 200 100" className="w-full h-full opacity-80" preserveAspectRatio="none">
                                            <path d="M0,50 C50,20 80,80 120,50 S180,20 200,50" fill="none" stroke="url(#grad1)" strokeWidth="2" />
                                            <defs>
                                                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                                                    <stop offset="0%" style={{ stopColor: '#8B5CF6', stopOpacity: 1 }} />
                                                    <stop offset="100%" style={{ stopColor: '#EC4899', stopOpacity: 1 }} />
                                                </linearGradient>
                                            </defs>
                                            {/* Repeated lines for wave effect */}
                                            {Array.from({ length: 10 }).map((_, i) => (
                                                <path key={i} d={`M0,${50 + i * 2} C50,${20 + i * 2} 80,${80 + i * 2} 120,${50 + i * 2} S180,${20 + i * 2} 200,${50 + i * 2}`}
                                                    fill="none"
                                                    stroke="url(#grad1)"
                                                    strokeWidth="1"
                                                    opacity={1 - i * 0.1}
                                                />
                                            ))}
                                        </svg>
                                    </div>

                                    <div className="text-center">
                                        <div className="flex items-center justify-center gap-2 text-white mb-2">
                                            {/* Handshake Icon */}
                                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.21 6.93 1.21 11.2 3.58 13.58l8.47 8.47 8.47-8.47a5.4 5.4 0 0 0 0-7.65z"></path>
                                            </svg>
                                        </div>
                                        <h3 className="text-4xl font-bold text-white mb-1">680+</h3>
                                        <p className="text-gray-400 text-sm mb-8">Clients & Partners</p>
                                    </div>

                                    {/* Partner Logos Grid (Placeholder) */}
                                    <div className="bg-white rounded-xl p-4 grid grid-cols-4 gap-4 w-full max-w-sm mx-auto">
                                        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                                            <div key={i} className="h-6 bg-gray-200 rounded animate-pulse"></div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
