'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const ExpertiseSection = () => {
    return (
        <section className="relative bg-black text-white py-24 overflow-hidden border-t border-white/5">
            {/* Background Glows and Decorative Lines */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#6B2CEC]/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#6B2CEC]/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />

                {/* Outlined Squares for Mesh Effect */}
                <div className="absolute top-20 left-[10%] w-[300px] h-[300px] border border-white/5 rounded-[3rem] -rotate-6" />
                <div className="absolute top-40 right-[15%] w-[400px] h-[400px] border border-white/5 rounded-[4rem] rotate-12" />
                <div className="absolute bottom-40 left-[40%] w-[200px] h-[200px] border border-white/5 rounded-[2rem] rotate-45" />
            </div>

            <div className="relative z-10">
                {/* Top Header Row */}
                <div className="flex flex-col md:flex-row gap-8 md:gap-12 mb-12 md:mb-20 items-start md:items-end">
                    <div className="w-full md:w-1/2 order-2 md:order-1">
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-gray-400 text-[10px] sm:text-xs md:text-sm leading-relaxed max-w-[280px] text-left md:text-right md:ml-auto mb-4 md:mb-12"
                        >
                            We specialize in creating innovative, scalable, and secure decentralized applications that redefine the future of digital interactions.
                        </motion.p>
                    </div>
                    <div className="w-full md:w-1/2 order-1 md:order-2">
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold leading-[1.1] tracking-tight"
                        >
                            Our expertise <br />
                            <span className="text-white">provides the</span> <br />
                            <span className="text-gray-400">foundation for your</span> <br />
                            <span className="text-gray-400">project to be set up</span> <br />
                            <span className="text-gray-400">for success.</span>
                        </motion.h2>
                    </div>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
                    <div className="lg:col-span-5 relative group w-full">
                        <div className="overflow-hidden bg-[#0D0616] border border-white/10">
                            <Image
                                src="/assets/expertiseimage1.png"
                                alt="Team Celebration"
                                width={600}
                                height={800}
                                className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>
                    </div>

                    {/* Arrow and Stats Wrapper */}
                    <div className="lg:col-span-7 flex flex-col gap-8 md:gap-12 w-full">
                        <div className="hidden md:flex justify-start lg:pl-12 mb-4">
                            <motion.div
                                initial={{ opacity: 0, x: -20, y: 20 }}
                                whileInView={{ opacity: 1, x: 0, y: 0 }}
                                viewport={{ once: true }}
                                className="w-16 h-16 md:w-24 md:h-24 flex items-center justify-center"
                            >
                                <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-white">
                                    <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="square" strokeLinejoin="miter" />
                                </svg>
                            </motion.div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 items-end w-full   overflow-hidden rounded-br-[1.5rem] md:rounded-br-[2.5rem]">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="lg:col-span-3 bg-[#6B2CEC] p-6 2xl:p-10 flex flex-col justify-between min-h-[160px] md:min-h-[220px] border-r border-b border-white/10"
                            >
                                <p className="text-white/90 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">Project Build</p>
                                <h3 className="text-4xl md:text-5xl 2xl:text-7xl font-bold tracking-tighter">750+</h3>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="lg:col-span-3 bg-white p-6 2xl:p-10 flex flex-col justify-between min-h-[160px] md:min-h-[220px] border-r border-b border-white/10"
                            >
                                <p className="text-black/60 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] leading-tight">TVL Secured & <br className="hidden md:block" /> Counting</p>
                                <h3 className="text-[#6B2CEC] text-4xl md:text-3xl 2xl:text-7xl font-bold tracking-tighter">$3.21M</h3>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="sm:col-span-2 lg:col-span-6 relative min-h-[240px] md:min-h-[360px] lg:min-h-[440px] border-r border-b border-white/10"
                            >
                                <Image
                                    src="/assets/expertiseimage3.png"
                                    alt="Digital Art"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-[#6B2CEC]/10 mix-blend-overlay" />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExpertiseSection;
