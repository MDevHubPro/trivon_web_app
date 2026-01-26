'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const services = [
    {
        id: '001',
        title: 'Healthcare',
        description: 'We specialize in creating innovative, scalable, and secure decentralized applications that redefine the future of digital interactions.',
    },
    {
        id: '002',
        title: 'Finance',
        description: 'We specialize in creating innovative, scalable, and secure decentralized applications that redefine the future of digital interactions.',
    },
    {
        id: '003',
        title: 'Retail',
        description: 'We specialize in creating innovative, scalable, and secure decentralized applications that redefine the future of digital interactions.',
    },
    {
        id: '004',
        title: 'Manufacturing',
        description: 'We specialize in creating innovative, scalable, and secure decentralized applications that redefine the future of digital interactions.',
    },
    {
        id: '005',
        title: 'Transportation',
        description: 'We specialize in creating innovative, scalable, and secure decentralized applications that redefine the future of digital interactions.',
    },
    {
        id: '006',
        title: 'Education',
        description: 'We specialize in creating innovative, scalable, and secure decentralized applications that redefine the future of digital interactions.',
    },
    {
        id: '007',
        title: 'E-Commerce',
        description: 'We specialize in creating innovative, scalable, and secure decentralized applications that redefine the future of digital interactions.',
    },
    {
        id: '008',
        title: 'Real Estate',
        description: 'We specialize in creating innovative, scalable, and secure decentralized applications that redefine the future of digital interactions.',
    }
];

export default function CoreIndustryServices() {
    return (
        <section className="bg-black text-white py-24 relative ">
            {/* BACKGROUND LAYER - This stays fixed while content scrolls */}
            <div
                className="absolute inset-0 pointer-events-none bg-[url('/assets/exp-bg.png')] bg-no-repeat lg:bg-[length:1218px_1114px] bg-top "
                style={{ backgroundAttachment: 'fixed' }} // This keeps the image from moving
            />
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">

                    {/* Left Sticky Section */}
                    <div className=" lg:w-2/4 relative ">
                        <div className="lg:sticky lg:top-32 flex flex-col justify-between bg-[url('/assets/Heading-Arrows-1.png')] bg-no-repeat lg:bg-[length:528px_461px] lg:h-[500px]">
                            <h2 className="text-[71px] leading-[80px] tracking-[-0.03em] font-semibold bg-[radial-gradient(50%_50%_at_50%_50%,#FFFFFF_0%,#FFFFFF80_100%)]
                                bg-clip-text
                                text-transparent">
                                <span className="block">Our Core</span>
                                <span className="block">Industry</span>
                                <span
                                    className="
                                block                                
                                "
                                >
                                    Services
                                </span>
                            </h2>



                            <div className='mt-5'>
                                <button className="group relative inline-flex items-center gap-2 bg-[#8B5CF6] text-white pl-6 pr-2 py-2 rounded-full overflow-hidden transition-all hover:pr-6">
                                    <span className="text-sm font-medium z-10">{`Let's Connect `}</span>
                                    <div className="bg-white rounded-full p-2 transition-transform group-hover:translate-x-1">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="7" y1="17" x2="17" y2="7"></line>
                                            <polyline points="7 7 17 7 17 17"></polyline>
                                        </svg>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Scrollable Cards Grid */}
                    <div className="lg:w-2/4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {services.map((service, index) => (
                                <div
                                    key={index}
                                    className="p-2.5 bg-gradient-to-r from-[#6B2CEC] to-[#A156F7] mb-8"
                                >
                                    <motion.div
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        transition={{ duration: 0.5, delay: index % 2 * 0.1 }}
                                        className="bg-white p-8 flex flex-col justify-between min-h-[400px] relative overflow-hidden group hover:shadow-[0_0_40px_rgba(139,92,246,0.3)] transition-shadow duration-300"
                                    >
                                        <div className="flex justify-between items-start mb-8">
                                            <span className="bg-gray-100 text-gray-500 px-3 py-1 rounded-full text-xs font-bold tracking-widest">
                                                {service.id}
                                            </span>

                                            {/* Abstract Icon Placeholder */}
                                            {index % 2 === 0 ? (
                                                <Image
                                                    src="/assets/coreImage1.png"
                                                    alt="Abstract Icon"
                                                    width={50}
                                                    height={50}
                                                    className="h-16 w-16"
                                                />
                                            ) : (
                                                <Image
                                                    src="/assets/coreImage2.png"
                                                    alt="Abstract Icon"
                                                    width={50}
                                                    height={50}
                                                    className="h-16 w-16"
                                                />
                                            )}

                                        </div>

                                        <div>
                                            <h3 className="text-3xl font-bold mb-4 text-[#8B5CF6]">
                                                {service.title}
                                            </h3>
                                            <p className="text-gray-500 text-sm leading-relaxed">
                                                {service.description}
                                            </p>
                                        </div>

                                        {/* Hover Effect Light */}
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500 opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500 rounded-bl-full pointer-events-none"></div>
                                    </motion.div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
