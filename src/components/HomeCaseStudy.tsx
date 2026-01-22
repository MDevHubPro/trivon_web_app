'use client';

export default function HomeCaseStudy() {
    return (
        <section className="py-24 bg-black relative">
            <div className="container mx-auto px-4 md:px-8">

                <div className="flex items-center gap-4 mb-12">
                    <h2 className="text-4xl font-bold text-white">Case <span className="text-purple-500">Study</span></h2>
                    <div className="flex-grow h-px bg-gray-800"></div>
                    <div className="flex gap-2">
                        <button className="w-10 h-10 border border-gray-700 rounded flex items-center justify-center text-gray-500 hover:text-white hover:border-white transition">&lt;</button>
                        <button className="w-10 h-10 border border-gray-700 rounded flex items-center justify-center text-gray-500 hover:text-white hover:border-white transition">&gt;</button>
                    </div>
                </div>

                {/* Featured Card */}
                <div className="w-full h-[500px] rounded-3xl overflow-hidden relative border border-gray-800 group">
                    {/* Background Image / Abstract */}
                    <div className="absolute inset-0 bg-[#0a0a0a]">
                        {/* Abstract Purple Fluid */}
                        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-purple-600 to-blue-600 blur-[80px] opacity-40 rounded-full translate-x-1/3 -translate-y-1/3"></div>

                        {/* Purple Swirl SVG */}
                        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 500" preserveAspectRatio="none">
                            <path d="M0,500 C300,400 300,100 500,100 C700,100 700,400 1000,500 L1000,0 L0,0 Z" fill="none" />
                            {/* Custom flowing shape mimicking the fluid design */}
                            <path d="M-100,500 C200,500 400,200 600,300 S900,100 1100,0" stroke="#8B5CF6" strokeWidth="2" fill="none" opacity="0.5" />
                            <path d="M-100,600 C200,600 400,300 600,400 S900,200 1100,100" stroke="#A855F7" strokeWidth="50" fill="none" opacity="0.2" filter="url(#glow)" />
                        </svg>
                        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent"></div>
                    </div>

                    {/* Content */}
                    <div className="absolute inset-0 p-12 flex flex-col justify-end items-start md:w-1/2">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                                {/* Logo Icon */}
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                            </div>
                            <span className="text-2xl font-bold text-white">Phantom</span>
                            <div className="px-3 py-1 bg-white/10 rounded-full text-[10px] text-white uppercase tracking-wider backdrop-blur-sm">
                                Crypto Wallet
                            </div>
                        </div>
                    </div>

                    {/* Right Side Hexagon Centerpiece */}
                    <div className="absolute right-20 top-1/2 -translate-y-1/2 w-64 h-64 hidden md:flex items-center justify-center">
                        <div className="w-full h-full bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl rotate-45 transform skew-y-6 shadow-[0_0_50px_rgba(168,85,247,0.5)] flex items-center justify-center">
                            <svg width="60" height="60" viewBox="0 0 24 24" fill="white" className="-rotate-45">
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                            </svg>
                        </div>
                    </div>

                    {/* Description Box Floating */}
                    <div className="absolute bottom-12 right-12 max-w-sm bg-black/80 backdrop-blur-md rounded-xl p-6 border border-gray-800 hidden md:block">
                        <p className="text-gray-400 text-xs leading-relaxed">
                            We provide you with a convenient and reliable platform for effective business management. Forget about complexities we'll handle everything.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}
