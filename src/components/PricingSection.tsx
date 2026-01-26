'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Invest from './Invest';
const packages = [
    {
        name: 'Basic Logo Package',
        highlightWord: 'Basic',
        price: 199,
        subtitle: 'For businesses on a budget',
        category: 'Logo Design',
        features: [
            '3 Custom Logo Design Concepts',
            '1 Dedicated Designer',
            '4 Revisions',
            '2 Hours TAT',
            '100% Satisfaction Guarantee',
            '100% Money Back Guarantee *',
            '100% Ownership Rights',
            'One Time Payment',
            'By 2 Designers'
        ]
    },
    {
        name: 'Start Up Logo Package',
        highlightWord: 'Start Up',
        price: 199,
        subtitle: 'For businesses on a budget',
        category: 'Logo Design',
        features: [
            '3 Custom Logo Design Concepts',
            '1 Dedicated Designer',
            '4 Revisions',
            '2 Hours TAT',
            '100% Satisfaction Guarantee',
            '100% Money Back Guarantee *',
            '100% Ownership Rights',
            'One Time Payment',
            'By 2 Designers'
        ]
    },
    {
        name: 'Mascot Logo Package',
        highlightWord: 'Mascot',
        price: 199,
        subtitle: 'For businesses on a budget',
        category: 'Logo Design',
        features: [
            '3 Custom Logo Design Concepts',
            '1 Dedicated Designer',
            '4 Revisions',
            '2 Hours TAT',
            '100% Satisfaction Guarantee',
            '100% Money Back Guarantee *',
            '100% Ownership Rights',
            'One Time Payment',
            'By 2 Designers'
        ]
    },
    {
        name: 'Basic Logo Package',
        highlightWord: 'Basic',
        price: 199,
        subtitle: 'For businesses on a budget',
        category: 'Website Design', // Duplicating for layout demo
        features: [
            '3 Custom Logo Design Concepts',
            '1 Dedicated Designer',
            '4 Revisions',
            '2 Hours TAT',
            '100% Satisfaction Guarantee',
            '100% Money Back Guarantee *',
            '100% Ownership Rights',
            'One Time Payment',
            'By 2 Designers'
        ]
    },
    {
        name: 'Start Up Logo Package',
        highlightWord: 'Start Up',
        price: 199,
        subtitle: 'For businesses on a budget',
        category: 'Website Design',
        features: [
            '3 Custom Logo Design Concepts',
            '1 Dedicated Designer',
            '4 Revisions',
            '2 Hours TAT',
            '100% Satisfaction Guarantee',
            '100% Money Back Guarantee *',
            '100% Ownership Rights',
            'One Time Payment',
            'By 2 Designers'
        ]
    }
];

const categories = ['Logo Design', 'Website Design', 'E-Commerce', 'Branding', 'SEO', 'Animation'];

export default function PricingSection() {
    const [activeCategory, setActiveCategory] = useState('Logo Design');

    const displayPackages = packages;

    return (
        <section className="py-8 bg-black font-sans">
            <div className="container mx-auto px-4 md:px-8">

                {/* Filters */}
                {/* <div className="flex flex-wrap gap-4 mb-20 justify-center">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 border ${activeCategory === cat
                                ? 'bg-[#1e102e] border-[#8B5CF6] text-white shadow-[0_0_15px_rgba(139,92,246,0.3)]'
                                : 'bg-[#111] border-[#1f1f1f] text-gray-500 hover:border-gray-700 hover:text-gray-300'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div> */}

                {/* Layout: Exact 3 Top, 2 Bottom Centered */}
                <div className="max-w-6xl mx-auto space-y-8">
                    <Invest />
                    {/* Top Row: 3 Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {displayPackages.slice(0, 3).map((pkg, i) => (
                            <PricingCard key={i} pkg={pkg} />
                        ))}
                    </div>

                    {/* Bottom Row: 2 Cards Centered */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:w-2/3 mx-auto">
                        {displayPackages.slice(3, 5).map((pkg, i) => (
                            <PricingCard key={i + 3} pkg={pkg} />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}

function PricingCard({ pkg }: { pkg: any }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10, boxShadow: '0 0 30px rgba(139,92,246,0.2)' }}
            transition={{ duration: 0.3 }}
            /* 1. Set border to 2px and transparent so the background gradient shows through */
            className="border-2 border-transparent backdrop-blur-[23px] rounded-[2rem] p-8 relative flex flex-col items-center text-center group"
            style={{
                /* 2. The first gradient is your solid fill color (#180D25) */
                /* 3. The second gradient is your border source */
                backgroundImage: `linear-gradient(#180D25, #180D25), linear-gradient(66.83deg, #A156F7 -3.68%, rgba(161, 86, 247, 0) 42.16%)`,
                backgroundOrigin: 'border-box',
                backgroundClip: 'padding-box, border-box',
            }}
        >
            <h3 className="text-3xl uppercase font-bold text-white mb-6">
                <span className="text-[#A855F7]">{pkg.highlightWord}</span> {pkg.name.replace(pkg.highlightWord, '')}
            </h3>

            <p className="text-[10px] text-gray-400 font-medium mb-1 uppercase tracking-wider">Price Starting From</p>

            <div className="flex items-start justify-center text-[#A855F7] font-bold mb-8">
                <span className="text-2xl mt-1">$</span>
                <span className="text-6xl leading-none">{pkg.price}</span>
                <span className="text-xl mt-1">.00</span>
            </div>

            <button className="w-full max-w-[200px] text-white py-3 rounded-full text-sm font-bold flex items-center justify-center gap-3 mb-4 shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:shadow-[0_0_25px_rgba(139,92,246,0.6)] transition-shadow"
                style={{ background: 'linear-gradient(258.73deg, #6B2CEC 7.48%, #A156F7 92.51%)' }}
            >
                Order Now
                <div className="bg-white rounded-full p-1">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                </div>
            </button>

            <p className="text-[10px] text-gray-500 mb-8">{pkg.subtitle}</p>

            <div className="w-full text-left space-y-4">
                <p className="text-[#A855F7] text-xs font-bold mb-4">Plan Includes:</p>
                {pkg.features.map((feature: string, i: number) => (
                    <div key={i} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#A855F7] shadow-[0_0_5px_#A855F7]"></div>
                        <p className="text-xs text-gray-300 font-medium">{feature}</p>
                    </div>
                ))}
            </div>
        </motion.div>
    )
}
