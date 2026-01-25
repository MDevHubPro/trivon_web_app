'use client';

import { motion } from 'framer-motion';


import Image from 'next/image';

export default function ContactFormSection() {
    return (
        <section className="py-20 bg-black relative">
            <div className="container mx-auto px-4 md:px-8">
                <div className="bg-[#0A0A0A] rounded-3xl border border-white/10 overflow-hidden relative   mx-auto">

                    <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] relative z-10">
                        {/* Form Side - 70% */}
                        <div className='p-8 md:p-12 lg:p-16 relative bg-[#111111]'>
                            <h3 className="text-4xl md:text-5xl font-medium text-white mb-12 tracking-tight">{`Let's Talk`}</h3>
                            <form className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                                    <div className="space-y-2">
                                        <label className="text-xs md:text-sm text-gray-500 font-medium ml-1">First Name</label>
                                        <input type="text" className="w-full bg-transparent border-b border-gray-700 text-white pb-3 focus:border-[#8B5CF6] focus:outline-none transition-colors text-lg" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs md:text-sm text-gray-500 font-medium ml-1">Last Name</label>
                                        <input type="text" className="w-full bg-transparent border-b border-gray-700 text-white pb-3 focus:border-[#8B5CF6] focus:outline-none transition-colors text-lg" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs md:text-sm text-gray-500 font-medium ml-1">Project Name</label>
                                    <input type="text" className="w-full bg-transparent border-b border-gray-700 text-white pb-3 focus:border-[#8B5CF6] focus:outline-none transition-colors text-lg" />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs md:text-sm text-gray-500 font-medium ml-1">Project URL</label>
                                    <input type="text" className="w-full bg-transparent border-b border-gray-700 text-white pb-3 focus:border-[#8B5CF6] focus:outline-none transition-colors text-lg" />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs md:text-sm text-gray-500 font-medium ml-1">Message</label>
                                    <textarea rows={3} className="w-full bg-transparent border-b border-gray-700 text-white pb-3 focus:border-[#8B5CF6] focus:outline-none transition-colors resize-none text-lg"></textarea>
                                </div>

                                <div className="pt-8 flex justify-end">
                                    <button type="submit" className="bg-[#8B5CF6] hover:bg-[#7C3AED] text-white pl-8 pr-2 py-2 rounded-full flex items-center gap-4 group transition-all">
                                        <span className="font-medium">Send Request</span>
                                        <span className="bg-white text-[#8B5CF6] rounded-full p-2 group-hover:bg-white/90 transition">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                                <polyline points="12 5 19 12 12 19"></polyline>
                                            </svg>
                                        </span>
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* Image Side - 30% */}
                        <div className="relative hidden lg:block h-full">
                            <div className="w-full h-full flex flex-col">
                                {/* Top Part - Background & Stats */}
                                <div className="h-[65%] relative bg-black flex flex-col items-center justify-center text-white overflow-hidden">
                                    {/* Background Image */}
                                    <div className="absolute inset-0 z-0 opacity-80">
                                        <Image
                                            src="/assets/contact-card-bg.jpg"
                                            alt="Background"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="absolute inset-0 bg-black/20 z-0"></div>

                                    {/* Content Overlay */}
                                    <div className="relative z-10 flex flex-col items-center text-center p-6">
                                        {/* Handshake Icon */}
                                        <div className="mb-4">
                                            <Image
                                                src="/assets/handshake.png"
                                                alt="Handshake"
                                                width={60}
                                                height={60}
                                            />
                                        </div>
                                        <h3 className="text-5xl font-bold text-white mb-2 tracking-tight">680+</h3>
                                        <p className="text-white/90 text-lg font-medium">Clients & Partners</p>
                                    </div>
                                </div>

                                {/* Bottom Part - Logos */}
                                <div className="h-[35%] bg-white w-full p-6 flex items-center justify-center relative">
                                    <Image
                                        src="/assets/clients-logos.png"
                                        alt="Client Logos"
                                        fill
                                        className="object-contain p-4"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </section >
    );
}


