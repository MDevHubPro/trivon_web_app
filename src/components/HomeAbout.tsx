'use client';

export default function HomeAbout() {
    return (
        <section className="relative bg-black pt-32 pb-48 overflow-hidden ">

            {/* Stats Row - Positioned at top of About Section as per image */}
            <div className="container mx-auto px-4 md:px-8 mb-32">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 border-b border-gray-900 pb-12">
                    {[
                        { val: '130K', sub: '+250%', label: 'Sponsors' },
                        { val: '500K', sub: '+124%', label: 'Sponsorship' },
                        { val: '340K', sub: '+84%', label: 'Organizations' },
                        { val: '130K', sub: '+56%', label: 'Repositories' },
                        { val: '130K', sub: '+84%', label: 'Code Searches' }
                    ].map((stat, i) => (
                        <div key={i} className="text-center md:text-left">
                            <div className="flex items-center gap-2 mb-2 justify-center md:justify-start">
                                <div className="w-5 h-5 rounded-full bg-[#111] border border-gray-800 flex items-center justify-center text-[10px] text-gray-500 font-bold">$</div>
                                <span className="text-[10px] text-gray-500 uppercase tracking-widest">{stat.label}</span>
                            </div>
                            <div className="text-4xl font-bold text-white mb-1">
                                {stat.val}
                            </div>
                            <p className="text-[10px] text-green-500 font-bold">{stat.sub}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Giant 'ABOUT US' Watermark Background - Stroke Only */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none z-0 ">
                <h1 className="text-[12rem] md:text-[18rem] font-bold leading-none tracking-widest text-transparent opacity-20">
                    ABOUT US
                </h1>
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 container mx-auto px-4 text-center flex flex-col gap-4">
                <p className="text-gray-400 text-xs md:text-sm max-w-xl mx-auto leading-relaxed ">
                    We provide you with a convenient and reliable platform for effective business management. Forget about complexities we'll handle everything for your convenience!
                </p>

                <button className="bg-gradient-to-r from-[#8B5CF6] to-[#a855f7] text-white px-8 py-3 rounded-full font-bold text-xs flex items-center gap-2 mx-auto hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] transition-shadow">
                    Read More
                    <div className="bg-white rounded-full p-0.5">
                    </div>
                </button>
            </div>

            {/* Planet Horizon Curve Separator at Bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-[450px]  bg-[url('/assets/about.png')] bg-cover bg-center overflow-hidden pointer-events-none">
                {/* The glowing curve */}
            </div>
        </section>
    );
}
