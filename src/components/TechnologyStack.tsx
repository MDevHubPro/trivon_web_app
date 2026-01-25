'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const techData = {
    'Mobile Apps': [
        {
            group: 'iOS',
            items: [
                { name: 'HTML 5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
                { name: 'CSS 3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
                { name: 'JAVA SCRIPT', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' }
            ]
        },
        {
            group: 'Android',
            items: [
                { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
                { name: 'NODEJS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
                { name: 'REACTJS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
                { name: 'JQUERY', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg' }
            ]
        },
        {
            group: 'Hybrid', // Placeholder for third group in mockup
            items: [
                { name: 'MANGODB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
                { name: 'MYSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
                { name: 'WORDPRESS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg' }
            ]
        }
    ],
    'Web Platforms': [
        {
            group: 'Frontend',
            items: [
                { name: 'REACTJS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
                { name: 'VUEJS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' }
            ]
        }
    ],
    'Cross Platforms': [],
    'Games': [],
    'Database': [],
    'Cloud & DevOps': []
};

export default function TechnologyStack() {
    const [activeTab, setActiveTab] = useState('Mobile Apps');

    return (
        <section className="py-24 bg-black">
            <div className="container mx-auto px-4 md:px-8">

                <div className="mb-16 flex flex-col  gap-9">
                    <h2 className="text-5xl xl:text-[170px] font-bold text-white mb-4">
                        Technology <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">Stack</span>
                    </h2>
                    <p className="text-gray-500 md:text-[20px] text-[14px] max-w-[70%]">
                        {`We provide you with a convenient and reliable platform for effective business management. Forget about complexities we'll handle everything for your convenience!`}
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-20">

                    {/* Left Column: Tabs */}
                    <div className="lg:w-1/4 flex flex-col gap-6">
                        {Object.keys(techData).map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`text-left px-8 py-4 rounded-xl text-sm font-semibold transition-all duration-300 relative overflow-hidden ${activeTab === tab
                                    ? 'text-white shadow-[0_0_20px_rgba(139,92,246,0.3)]'
                                    : 'text-purple-400 hover:bg-white/5'
                                    }`}
                            >
                                {activeTab === tab && (
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6] to-[#6366f1] z-0"></div>
                                )}
                                <span className="relative z-10">{tab}</span>
                            </button>
                        ))}
                    </div>

                    {/* Right Column: Content Grid */}
                    <div className="lg:w-3/4">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="space-y-12"
                            >
                                {techData[activeTab as keyof typeof techData]?.map((group, idx) => (
                                    <div key={idx}>
                                        <h3 className="text-2xl font-bold text-white mb-6 uppercase tracking-wide">
                                            {group.group}
                                        </h3>
                                        <div className="flex flex-wrap gap-4">
                                            {group.items.map((item, i) => (
                                                <div
                                                    key={i}
                                                    className="bg-[#0b0b0d] border border-gray-800 rounded-lg px-6 py-3 flex items-center gap-4 min-w-[160px] hover:border-purple-500/50 transition-colors group cursor-pointer"
                                                >
                                                    <img src={item.icon} alt={item.name} className="w-6 h-6 object-contain" />
                                                    <span className="text-gray-300 text-xs font-bold uppercase group-hover:text-white">{item.name}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}

                                {/* Fallback for empty tabs */}
                                {(!techData[activeTab as keyof typeof techData] || techData[activeTab as keyof typeof techData].length === 0) && (
                                    <div className="text-gray-500 italic">Content pending for {activeTab}...</div>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>
            </div>

            {/* Background Grid Lines (Abstract) */}
            <div className="absolute right-0 bottom-0 pointer-events-none opacity-20 hidden lg:block">
                <svg width="400" height="400" viewBox="0 0 400 400">
                    <path d="M400,0 L400,400 L0,400" fill="none" stroke="#333" strokeWidth="1" />
                    <path d="M350,50 L350,400" fill="none" stroke="#333" strokeWidth="1" />
                    <path d="M300,100 L300,400" fill="none" stroke="#333" strokeWidth="1" />
                </svg>
            </div>
        </section>
    );
}
