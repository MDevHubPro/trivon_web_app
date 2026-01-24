'use client';

export default function CollaborateCard() {
    return (
        <div className="w-full px-6 py-16 bg-black">
            <div className="relative  container mx-auto overflow-hidden rounded-[32px] bg-gradient-to-r from-[#9B5CF6] via-[#8B4CF2] to-[#6D28D9] px-10 py-14">

                {/* Curved Line */}
                <svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 1200 200"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0 210 C 1200 80, 600 200, 1200 120"
                        stroke="rgba(255,255,255,0.35)"
                        strokeWidth="2"
                        fill="none"
                    />
                </svg>

                {/* Content */}
                <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">

                    {/* Left Text */}
                    <h2 className="text-white text-4xl md:text-5xl font-semibold leading-tight max-w-xl">
                        Have a Cool Idea? Let’s <br /> Collaborate.
                    </h2>

                    {/* Button */}
                    <button className="flex items-center gap-3 bg-white text-black px-6 py-3 rounded-full text-sm font-medium hover:scale-105 transition-transform">
                        Get Started
                        <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#7C3AED] text-white">
                            ↗
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
}
