export default function HeroSection() {
    return (<>
        <section className="relative bg-black pt-32 pb-48 overflow-hidden">

            {/* Stats Row - Positioned at top of About Section as per image */}
            <div className="container max-w-5xl mx-auto px-4 md:px-8 ">
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
                            <span
                                className="text-4xl font-medium mb-1"
                                style={{
                                    background: 'radial-gradient(50% 50% at 50% 50%, #FFFFFF 30%, rgba(255, 255, 255, 0.5) 84.77%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                    color: 'transparent'
                                }}
                            >
                                {stat.val}
                            </span>
                            <p className="text-sm text-[#00FF55] font-bold">{stat.sub}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Giant 'ABOUT US' Watermark Background - Stroke Only */}
            <div className="min-h-screen relative overflow-visible bg-[url('/assets/about.png')] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
                {/* Main Heading */}
                {/* <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-center mb-8 sm:mb-12">
                <span className="text-purple-900 opacity-80">ABOUT US</span>
            </h1> */}

                {/* Description Text */}

                <div className="absolute right-0 left-0 max-w-5xl mx-auto flex flex-col items-center  top-1/2 ">
                    <p className="text-gray-300 text-center max-w-2xl mb-8 sm:mb-10 text-sm sm:text-base px-4">
                        {`We provide you with a convenient and reliable platform for effective business management. Forget about complexities we'll handle everything for your convenience!`}
                    </p>

                    {/* Read More Button */}
                    <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full text-sm sm:text-base font-medium transition-colors duration-200 mb-16 sm:mb-24">
                        Read More
                    </button>

                    {/* Our Services Button */}
                    {/* <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-colors duration-200 mb-6 sm:mb-8 flex items-center gap-2">
                    <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                    </svg>
                    Our Services
                </button> */}

                    {/* Let's Work Together Heading */}
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium trac text-center mb-6 sm:mb-8 px-4">
                        <span
                            style={{
                                background: "radial-gradient(50% 50% at 50% 50%, #FFFFFF 30%, rgba(255, 255, 255, 0.5) 84.77%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}>{`Let's work`}</span>
                        <span className="bg-gradient-to-r from-[#6B2CEC] to-[#A156F7] bg-clip-text text-transparent">together</span>
                        <br />
                        <span className="bg-gradient-to-r from-[#6B2CEC] to-[#A156F7] bg-clip-text text-transparent">with </span>
                        <span style={{
                            background: "radial-gradient(50% 50% at 50% 50%, #FFFFFF 30%, rgba(255, 255, 255, 0.5) 84.77%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}>our us</span>
                    </h2>

                    {/* Bottom Description */}
                    <p className="text-gray-300 text-center max-w-2xl text-sm sm:text-base px-4">
                        {`We provide you with a convenient and reliable platform for effective business management. Forget about complexities we'll handle everything for your convenience!`}
                    </p>
                </div>
            </div>

            {/* Content Overlay */}

            {/* Planet Horizon Curve Separator at Bottom */}

        </section>

    </>
    );
}