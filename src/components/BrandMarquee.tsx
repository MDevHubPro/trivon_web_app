'use client';

import { motion } from 'framer-motion';

const brands = [
    'winikon', 'temenos', 'SOFTWARE GROUP', 'winikon', 'Abler', 'avanza', 'temenos'
];

export default function BrandMarquee() {
    return (
        <section className="bg-black py-12 border-b border-gray-900 overflow-hidden relative z-20">
            <div className="flex whitespace-nowrap">
                <motion.div
                    className="flex items-center gap-24 px-12"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                    {[...brands, ...brands, ...brands, ...brands].map((brand, i) => (
                        <div key={i} className="text-gray-500 font-bold text-xl uppercase opacity-50 hover:opacity-100 transition-opacity">
                            {/* Using text for now, in real app these would be SVGs */}
                            {brand === 'SOFTWARE GROUP' ? (
                                <span className="flex items-center gap-2">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 12l10 10 10-10L12 2zm0 15l-5-5 5-5 5 5-5 5z" /></svg>
                                    {brand}
                                </span>
                            ) : (
                                brand
                            )}
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Fade edges */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent pointer-events-none"></div>
        </section>
    );
}
