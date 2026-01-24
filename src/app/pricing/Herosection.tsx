import React from 'react';
import Header from '@/components/Header';
import Image from 'next/image';
export default function TrivonHero() {
    const teamMembers = [
        { id: 1, img: "https://i.pravatar.cc/150?img=1" },
        { id: 2, img: "https://i.pravatar.cc/150?img=2" },
        { id: 3, img: "https://i.pravatar.cc/150?img=3" },
        { id: 4, img: "https://i.pravatar.cc/150?img=4" },
    ];

    return (
        <div className='relative h-[619px] w-full bg-cover bg-center bg-no-repeat'>
            <Header />
            {/* 1. Hero Section */}
            <div className='md:block hidden absolute z-[0] h-full top-6 inset-0 bg-[url("/assets/bg-image.png")] bg-cover bg-center bg-no-repeat'></div>

            <div className='absolute z-[0]  inset-0 bg-[url("/assets/bg-2.png")] bg-cover bg-center bg-no-repeat'></div>
            <div className="relative h-full w-full  flex flex-col items-center justify-center px-4 overflow-hidden">
                {/* Background - we'll keep it simple for now */}
                <div className="absolute inset-0 "></div>

                <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
                    <div className="flex flex-col justify-between ">

                        {/* Top Section - Heading and Description */}
                        <div className="flex-1 flex flex-col justify-center items-center text-center pt-8 sm:pt-12 lg:pt-16 pb-12 sm:pb-16 lg:pb-20">
                            <div className="max-w-6xl flex flex-col items-start w-full space-y-6 sm:space-y-8">
                                {/* Main Heading */}
                                <h1 className="text-4xl sm:text-5xl text-right    font-medium text-gray-300 leading-tight tracking-tight">
                                    Explore New Ways To Captivate
                                    <br />
                                    Your Customers
                                </h1>

                                {/* Description with Arrow */}
                                <div className="flex justify-center items-end text-right   gap-4 lg:gap-6 px-4">
                                    <p className="text-gray-500 text-sm sm:text-base lg:text-lg max-w-3xl leading-[1.2] tracking-wide">
                                        Trivon is a security-first blockchain consulting company that provides a range of services related to Trivon technology with strong emphasis on security engineering and DeFi innovation for more inclusive, reliable and sustainable systems
                                    </p>

                                    {/* Arrow - only on large screens */}
                                    <div className="hidden xl:block  flex-shrink-0 mt-0">
                                        <Image src="/assets/arrow-3.svg" width={60} height={60} alt="Arrow" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Section - Card and Pricing */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-end pb-8 sm:pb-12">

                            {/* Left - Client Card */}
                            <div className="flex justify-center lg:justify-start">
                                <div className="relative w-full max-w-sm">
                                    {/* Colorful accent line */}
                                    <div className="absolute -top-3 left-0 w-28 sm:w-32 h-1  rounded-full"></div>

                                    {/* Main card */}
                                    <div className=" backdrop-blur-sm rounded-3xl p-7 sm:p-8 shadow-2xl border border-gray-700/40">

                                        {/* Team avatars */}
                                        <div className="flex items-center mb-8 -space-x-2.5">
                                            {teamMembers.map((member) => (
                                                <div
                                                    key={member.id}
                                                    className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border-2 border-gray-800 overflow-hidden shadow-lg hover:scale-110 transition-transform duration-300"
                                                >
                                                    <img
                                                        src={member.img}
                                                        alt={`Team member ${member.id}`}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                            ))}
                                            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border-2 border-gray-800 bg-gray-700/80 flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer">
                                                <span className="text-gray-300 text-lg font-medium">+</span>
                                            </div>
                                        </div>

                                        {/* Client count with dot pattern */}
                                        <div className="relative">
                                            {/* Decorative dots background */}
                                            <div className="absolute inset-0 opacity-15 overflow-hidden">
                                                <div className="grid grid-cols-8 gap-3 h-32">
                                                    {[...Array(32)].map((_, i) => (
                                                        <div key={i} className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="relative pt-2">
                                                <h3 className="text-6xl sm:text-7xl font-bold text-white mb-2 tracking-tight">100+</h3>
                                                <p className="text-gray-400 text-lg font-medium tracking-wide">Clients Worldwide</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right - Pricing Section */}
                            <div className="flex flex-col sm:flex-row justify-center lg:justify-end items-center gap-4 sm:gap-5">

                                {/* Pricing Box */}
                                <div className="relative group">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur-sm opacity-20 group-hover:opacity-30 transition duration-300"></div>
                                    <div className="relative bg-gray-900/70 backdrop-blur-sm px-8 sm:px-10 py-5 sm:py-6 rounded-xl border border-gray-700/50">
                                        <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-300 tracking-tight">
                                            <span className="text-purple-400">*</span>/Our Pricing
                                        </h2>
                                    </div>
                                </div>

                                {/* Decorative circles */}
                                <div className="flex gap-3 sm:gap-4">
                                    <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full bg-gray-800/40 border border-gray-700/30"></div>
                                    <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full bg-gray-800/20 border border-gray-700/20"></div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}