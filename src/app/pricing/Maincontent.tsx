import React from 'react';
import Image from 'next/image';
import BrandMarquee from '@/components/BrandMarquee';
import Folder from '../../components/folder'

export default function CustomDevHero() {
    const brands = [
        'winikon', 'temenos', 'SOFTWARE GROUP', 'winikon', 'Abler', 'avanza', 'temenos'
    ];

    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* Floating client image - top layer */}
            <div className="absolute left-4 sm:left-8 md:left-14 bottom-4 sm:bottom-8 md:bottom-0 z-40 rounded-2xl p-2 sm:p-4 shadow-2xl">
                <div className="relative rounded-[30px] z-[50] h-48 w-48 sm:h-64 sm:w-64 md:h-72 md:w-72">
                    <div style={{ height: '100%', position: 'absolute', left: 0, right: 0, bottom: 0, width: "100%", display: 'flex', alignItems: 'center', justifyContent: 'center' }} className=' md:top-[50px]'>
                        <Folder size={2} color="#5227FF" className="custom-folder"
                        />
                    </div>
                </div>
            </div>

            {/* Brand Marquee */}
            <BrandMarquee brands={brands} className="!absolute !bottom-0 !z-10" />

            {/* Top section - Custom Development Services */}
            <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-10 sm:top-16 flex flex-col justify-center sm:justify-end gap-4 items-center text-center sm:text-left">
                <div className="flex flex-col w-full sm:flex-row items-start md:items-center justify-center gap-4">
                    <h2 className="text-2xl sm:text-4xl text-nowrap text-right md:text-5xl font-medium bg-[radial-gradient(50%_50%_at_50%_50%,#FFFFFF_30%,rgba(255,255,255,0.5)_84.77%)] bg-clip-text text-transparent">
                        Explore New Ways To Engage <br />
                        Your Customers
                    </h2>
                </div>
                <div className="mt-4 sm:mt-0 flex flex-row justify-center items-end md:items-center sm:items-start gap-4">
                    <p className="text-gray-400  text-right text-xs sm:text-sm mt-4 max-w-xs sm:max-w-md">
                        Trivon is a security-first blockchain consulting company that provides a range of services related to Trivon technology with strong emphasis on security engineering and DeFi innovation for more inclusive, reliable and sustainable systems.
                    </p>

                    <Image
                        src="/assets/arrow-3.svg"
                        alt="arrow"
                        width={40}
                        height={40}
                        className="sm:w-10 sm:h-10"
                    />
                </div>
            </div>

            {/* Center - Main heading */}
            <div className="absolute top-[65%] text-nowrap -translate-y-2/3 right-4 sm:right-10 md:right-14">
                <h3 className="flex items-center font-medium tracking-tighter text-[60px] sm:text-[120px] md:text-[160px] bg-[linear-gradient(90deg,#FFFFFF_0%,#000000_100%)] bg-clip-text text-transparent">
                    <span>*/</span>
                    <span className="ml-2">Our Pricing</span>
                </h3>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-10 right-4 sm:right-10 md:right-20 w-24 h-24 sm:w-32 sm:h-32 bg-gray-800 rounded-full opacity-10 blur-3xl"></div>
            <div className="absolute bottom-10 left-4 sm:left-10 md:left-20 w-32 h-32 sm:w-40 sm:h-40 bg-gray-700 rounded-full opacity-10 blur-3xl"></div>
        </div>
    );
}
