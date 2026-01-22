'use client';

export default function Web3Section() {
    return (
        <section className="py-24 bg-black relative overflow-hidden">

            {/* Giant X Background */}
            <div className="absolute right-0 top-0 bottom-0 w-1/2 overflow-hidden pointer-events-none opacity-20">
                <div className="absolute top-1/2 right-0 -translate-y-1/2 text-[40rem] font-black text-purple-900 leading-none select-none">
                    X
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className="bg-gradient-to-r from-[#1a1a2e] to-[#0D0616] rounded-[3rem] border border-gray-800 p-8 md:p-16 relative overflow-hidden">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Image (Astronaut) */}
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1614726365723-49cfae968393?q=80&w=1000&auto=format&fit=crop"
                                alt="Web 3.0 Astronaut"
                                className="w-full max-w-md mx-auto object-contain drop-shadow-[0_0_50px_rgba(139,92,246,0.3)] grayscale hover:grayscale-0 transition-all duration-500"
                            />
                            {/* Floating UI Elements */}
                            <div className="absolute top-10 left-0 bg-black/60 backdrop-blur px-4 py-2 rounded-lg border border-purple-500/30 text-white text-xs">
                                Empowering Wealth Creation
                            </div>
                        </div>

                        {/* Right Content */}
                        <div>
                            <h2 className="text-right text-gray-500 text-sm uppercase mb-2">Empowering Wealth Creation in</h2>
                            <h2 className="text-right text-6xl md:text-8xl font-black text-white mb-12 tracking-tighter">
                                WEB 3.0
                            </h2>

                            <div className="grid grid-cols-2 gap-6">
                                {[
                                    'NFT Design Development',
                                    'Blockchain Smart Contract',
                                    'Metaverse Design & Dev',
                                    'AI-Micro Intelligence Solution'
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 bg-black/40 p-3 rounded-lg border border-gray-800 hover:border-purple-500 transition-colors">
                                        <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center shrink-0">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                        </div>
                                        <span className="text-white text-xs font-bold">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Scanlines / Texture */}
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none mix-blend-overlay"></div>
                </div>
            </div>
        </section>
    );
}
