'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const FILTERS = [
    "All", "Education", "Market Analysis", "Technology", "Security"
];

const RESOURCES = [
    {
        id: 1,
        title: "Memecoins: Impact on Emerging Crypto Markets",
        category: "Market Analysis",
        readTime: "5 Min Read",
        date: "April 16, 2025",
        image: "/assets/images/memecoin.png",
        featured: true
    },
    {
        id: 2,
        title: "GameFi: Future of Gaming or Short-lived Gimmick?",
        category: "Technology",
        readTime: "5 Min Read",
        date: "April 16, 2025",
        image: "/assets/images/gamefi.png",
        featured: false
    },
    {
        id: 3,
        title: "Order Matching: Achieving Seamless Trades",
        category: "Security",
        readTime: "5 Min Read",
        date: "April 16, 2025",
        image: "/assets/images/order-matching.png",
        featured: false
    },
    {
        id: 4,
        title: "Beyond Buzzwords: Exploring the Real Potential of AI",
        category: "Education",
        readTime: "5 Min Read",
        date: "April 16, 2025",
        image: "/assets/images/beyond-buzzwords.png",
        featured: false
    }
];

export default function FeaturedResourcesSection() {
    const [activeFilter, setActiveFilter] = useState("All");

    const filteredResources = activeFilter === "All"
        ? RESOURCES
        : RESOURCES.filter(res => res.category === activeFilter);

    return (
        <section className="bg-black py-20 text-white font-sans overflow-hidden">
            <div className="container mx-auto px-4 md:px-8">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-medium tracking-tight"
                    >
                        Featured Resources
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-400 max-w-xl text-sm md:text-base leading-relaxed"
                    >
                        Trivon is a security-first blockchain consulting company that provides a range of services related to Trivon technology with strong emphasis on security engineering
                    </motion.p>
                </div>

                {/* Hero Top Section */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
                    {/* Main Featured Card */}
                    <div className="lg:col-span-2 relative h-[400px] rounded-3xl overflow-hidden group border border-white/10">
                        <Image
                            src={RESOURCES[0].image}
                            alt={RESOURCES[0].title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                        <div className="absolute bottom-0 left-0 p-8 w-full max-w-2xl">
                            <div className="flex items-center gap-2 mb-4">
                                <span className="bg-[#6D28D9] text-white text-xs px-3 py-1 rounded-full uppercase tracking-wider font-semibold">
                                    {RESOURCES[0].category}
                                </span>
                            </div>
                            <h3 className="text-3xl md:text-4xl font-semibold mb-4 leading-tight">
                                <span className="text-[#FFD166]">Memecoins</span> <br />
                                Impact on Emerging <br />
                                Crypto Markets
                            </h3>
                            <div className="flex items-center gap-4 text-gray-300 text-xs font-medium uppercase tracking-wide">
                                <span>• {RESOURCES[0].readTime}</span>
                                <span>• {RESOURCES[0].date}</span>
                            </div>
                        </div>
                        {/* Top Right Logo Icon from design */}
                        <div className="absolute top-6 right-6 w-10 h-10 bg-white/10 backdrop-blur-md rounded-lg flex items-center justify-center">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                                <path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z" />
                            </svg>
                        </div>
                    </div>

                    {/* Side List */}
                    <div className="flex flex-col gap-4">
                        {RESOURCES.slice(1).map((res) => (
                            <div key={res.id} className="bg-[#0F0F0F] border border-white/10 rounded-2xl p-4 flex gap-4 hover:bg-[#1A1A1A] transition-colors cursor-pointer group">
                                <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                                    <Image
                                        src={res.image}
                                        alt={res.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="flex flex-col justify-center">
                                    <span className="bg-[#1E1B4B] text-[#A78BFA] text-[10px] px-2 py-0.5 rounded-full w-fit mb-2 font-medium">
                                        {res.category}
                                    </span>
                                    <p className="text-sm font-medium leading-tight text-gray-200 line-clamp-3 group-hover:text-white transition-colors">
                                        {res.title}
                                    </p>
                                    <div className="flex items-center gap-2 text-gray-500 text-[10px] mt-2 uppercase">
                                        <span>• {res.readTime}</span>
                                        <span>• {res.date}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Filters */}
                <div className="mb-12 overflow-x-auto pb-4 scrollbar-hide">
                    <div className="flex gap-4">
                        {FILTERS.map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={`px-8 py-3 rounded-full text-sm font-medium transition-all whitespace-nowrap ${activeFilter === filter
                                    ? 'bg-[#1e1b4b] text-white border border-[#4c1d95] shadow-[0_0_15px_rgba(124,58,237,0.3)]'
                                    : 'bg-[#0F0F0F] text-gray-400 border border-white/10 hover:border-white/20'
                                    }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {filteredResources.map((res, idx) => (
                        <div key={`${res.id}-${idx}`} className="group cursor-pointer">
                            <div className="relative h-64 w-full rounded-2xl overflow-hidden mb-6 border border-white/10">
                                <Image
                                    src={res.image}
                                    alt={res.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            <div className="space-y-4 px-2">
                                <div className="flex items-center justify-between">
                                    <span className="bg-[#1E1B4B] text-[#A78BFA] text-xs px-4 py-1.5 rounded-full font-medium">
                                        {res.category}
                                    </span>
                                    <div className="flex items-center gap-3 text-gray-500 text-xs font-medium uppercase tracking-wide">
                                        <span>• {res.readTime}</span>
                                        <span>• {res.date}</span>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-medium text-white leading-tight group-hover:text-purple-400 transition-colors">
                                    {res.title}
                                </h3>

                                <div className="pt-2">
                                    <button className="flex items-center gap-2 bg-[#8B5CF6] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#7C3AED] transition-all group/btn">
                                        Read More
                                        <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center ml-1">
                                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover/btn:-rotate-45 transition-transform">
                                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                                <polyline points="12 5 19 12 12 19"></polyline>
                                            </svg>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                    {filteredResources.length === 0 && (
                        <div className="col-span-2 text-center text-gray-500 py-12">
                            No resources found for this category.
                        </div>
                    )}
                </div>

            </div>
        </section>
    );
}
