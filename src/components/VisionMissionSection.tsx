'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function VisionMissionSection() {
    return (
        <section className="relative min-h-screen lg:min-h-[1400px] bg-black text-white py-24 lg:py-32 overflow-hidden lg:px-0">
            {/* 1. Background Purple Logo/Lines Image */}
            <div className="absolute inset-x-0 top-0 h-[800px] bg-red-900 lg:h-[1000px] z-0 pointer-events-none opacity-40 lg:opacity-50   translate-y-[50px] lg:translate-y-[100px]">
                <div className="relative w-[80%] h-full max-w-[1400px] bg-purple-900 top-[250px]">
                    <Image
                        src="/assets/vision/bg-logo-lines.png"
                        alt="Background Lines"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>
            </div>

            <div className="container mx-auto max-w-7xl relative z-10 h-full">

                {/* 2. Top Card: Intro Text */}
                <div className="flex justify-center lg:justify-end lg:mr-[20%] mb-16 lg:mt-20 bg-red-300 relative z-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative w-full max-w-[340px] h-[120px]"
                    >
                        <Image
                            src="/assets/vision/card-bg.png"
                            alt="Card Background"
                            fill
                            className="object-fill bg-green-300"
                        />
                        <div className="absolute inset-0 flex items-center px-8 lg:px-10">
                            <p className="text-gray-300 text-[12px] lg:text-[13px] leading-relaxed">
                                At Trivon, we have two distinct branches that cater to entire protocol lifecycle management.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* 3. Arrows Junction Layer (Desktop only) */}
                <div className="absolute left-[55%] top-[200px] -translate-x-1/2 -translate-y-1/2 w-[400px] h-[600px] pointer-events-none hidden lg:block opacity-80">
                    <Image
                        src="/assets/vision/arrows-left-up.png"
                        alt="Arrows Left Up"
                        fill
                        className="object-contain"
                    />
                    <div className="absolute inset-0 ">
                        {/* <Image
                            src="/assets/vision/arrow-down.png"
                            alt="Arrow Down"
                            fill
                            className="object-contain"
                        /> */}
                    </div>
                </div>

                <div className="absolute left-[73%] top-[360px] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[450px] pointer-events-none hidden lg:block opacity-80">

                    <div className="absolute inset-0 ">
                        <Image
                            src="/assets/vision/arrow-down.png"
                            alt="Arrow Down"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>

                {/* 4. Vision Block */}
                <div className="relative z-20 mt-44 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
                    <div className="flex flex-col items-center -mt-24 lg:items-start lg:pl-[22%]">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative w-full max-w-[400px] h-[110px] lg:h-[120px] mb-8"
                        >
                            <Image
                                src="/assets/vision/card-bg.png"
                                alt="Heading Background"
                                fill
                                className="object-fill "
                            />
                            <div className="absolute inset-0 flex items-center px-10 lg:px-12">
                                <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-white">
                                    Our Vision
                                </h2>
                            </div>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="text-gray-400 bg-yellow-900 text-sm md:text-base  max-w-[400px] px-4 lg:px-0 lg:pl-6 lg:border-l lg:border-white/10 "
                        >
                            Our Vision at Trivon is to advance the interoperable blockchain landscape through secure socio-technical innovations that cater specifically to the evolving needs of individuals, startups, and enterprises. We are committed to simplifying Decentralized Finance and making it more accessible, while ensuring our technologies contribute positively to a more transparent, privacy preserving, and conscious future.
                        </motion.p>
                    </div>
                    <div className="hidden lg:block"></div>
                </div>

                {/* 5. Mission Block */}
                <div className="relative z-20 mt-24 lg:mt-[10px] flex justify-center lg:justify-end lg:pr-[12%]">
                    <div className="flex flex-col items-center lg:items-start max-w-[450px]">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative w-full max-w-[380px] h-[110px] lg:h-[130px] mb-8"
                        >
                            <Image
                                src="/assets/vision/card-bg.png"
                                alt="Heading Background"
                                fill
                                className="object-fill"
                            />
                            <div className="absolute inset-0 flex items-center px-10 lg:px-12">
                                <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-white">
                                    Our Mission
                                </h2>
                            </div>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="text-gray-400 text-sm md:text-base leading-relaxed max-w-[400px] px-4 lg:px-0 lg:pl-6 text-center lg:text-left"
                        >
                            Our mission at Trivon is to advance the interoperable blockchain landscape through secure socio-technical innovations that cater specifically to the evolving needs of individuals, startups, and enterprises. We are committed to simplifying Decentralized Finance and making it more accessible, while ensuring our technologies contribute positively to a more transparent, privacy preserving, and conscious future.
                        </motion.p>
                    </div>
                </div>

            </div>

            {/* Atmosphere Glows */}
            <div className="absolute top-[20%] left-[-10%] w-[800px] h-[800px] bg-purple-900/[0.08] blur-[160px] rounded-full pointer-events-none -z-10" />
            <div className="absolute bottom-[10%] right-[-10%] w-[900px] h-[900px] bg-blue-900/[0.1] blur-[200px] rounded-full pointer-events-none -z-10" />
        </section>
    );
}
