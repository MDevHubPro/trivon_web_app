'use client';

export default function StatsSection() {
    return (
        <section className="py-24 bg-black">
            <div className="container mx-auto px-4 md:px-8  ">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start mb-20 pb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-white max-w-2xl leading-tight">
                        {`Our work speaks through
                        numbers. Here's What we've
                        achieved so far.`}
                    </h2>

                    {/* Team Avatar Badge */}
                    <div className="flex items-center gap-4 mt-8 md:mt-0 bg-[#0f0f13] border border-gray-800 rounded-full pr-6 pl-2 py-2">
                        <div className="flex -space-x-3">
                            <img className="w-10 h-10 rounded-full border-2 border-black" src="https://i.pravatar.cc/100?img=1" alt="" />
                            <img className="w-10 h-10 rounded-full border-2 border-black" src="https://i.pravatar.cc/100?img=2" alt="" />
                            <img className="w-10 h-10 rounded-full border-2 border-black" src="https://i.pravatar.cc/100?img=3" alt="" />
                        </div>
                        <div className="text-xs">
                            <span className="text-purple-500 font-bold block">Schedule a Call</span>
                            <span className="text-gray-500">with Team & Founder</span>
                        </div>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { val: '3.2B+', label: 'TVL Secured', color: 'bg-[linear-gradient(258.73deg,#6B2CEC_7.48%,#A156F7_92.51%)] bg-clip-text text-transparent ' },
                        { val: '300+', label: 'Vulnerabilities', color: 'bg-[linear-gradient(258.73deg,#6B2CEC_7.48%,#A156F7_92.51%)] bg-clip-text text-transparent ' },
                        { val: '65%', label: 'High Impact', color: 'bg-[linear-gradient(258.73deg,#6B2CEC_7.48%,#A156F7_92.51%)] bg-clip-text text-transparent ' },
                        { val: '250+', label: 'Smart Contracts', color: 'bg-[linear-gradient(258.73deg,#6B2CEC_7.48%,#A156F7_92.51%)] bg-clip-text text-transparent ' }
                    ].map((stat, i) => (
                        <div key={i} className="group">
                            {/* Number */}
                            <div className={`text-[75px] font-regular mb-4 ${stat.color} drop-shadow-[0_0_10px_rgba(139,92,246,0.5)]`}>
                                {stat.val}
                            </div>

                            {/* Label with underline separator */}
                            <h3 className="text-4xl font-bold text-white mb-6 border-t pt-4 border-gray-800 pb-4 group-hover:border-purple-500 transition-colors">
                                {stat.label}
                            </h3>

                            {/* Description Text */}
                            <p className="text-gray-500 text-[24px] text-justify">
                                Trivon has secured over $3.2 billion in Total Value Locked across multiple blockchain ecosystems. Our robust audit methodologies and security-first mindset ensure that protocols remain resilient, enabling projects to grow confidently in an increasingly complex Web3 landscape.
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
