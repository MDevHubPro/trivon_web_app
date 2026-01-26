'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

// 1. Unified brand data structure
const brandData = [
    { name: 'winikon', logo: '/assets/wninkon.png', isImage: true },
    { name: 'temenos', logo: '/assets/temen.png', isImage: true },
    { name: 'SOFTWARE GROUP', logo: '/assets/software.png', isImage: true },
    { name: 'Abler', logo: '/assets/abler.png', isImage: true },
    { name: 'avanza', logo: '/assets/avana.png', isImage: true },
];

export default function BrandMarquee({ className }: { className?: string }) {
    // Duplicate the array to ensure a seamless infinite loop
    const displayBrands = [...brandData, ...brandData, ...brandData];

    return (
        <section className={`bg-black py-12 overflow-hidden relative ${className}`}>
            < div className="flex whitespace-nowrap">
                <motion.div
                    className="flex items-center gap-24 px-12"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                >
                    {displayBrands.map((brand, i) => (
                        <div
                            key={i}
                            className="text-gray-500 font-bold text-xl uppercase opacity-50 hover:opacity-100 transition-opacity flex-shrink-0"
                        >
                            {brand.isImage ? (
                                <Image
                                    src={brand.logo}
                                    alt={brand.name}
                                    width={120}
                                    height={40}
                                    className="object-contain"
                                />
                            ) : (
                                <span>{brand.name}</span>
                            )}
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Gradient Fades for a smoother look */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent pointer-events-none z-10" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent pointer-events-none z-10" />
        </section >
    );
}