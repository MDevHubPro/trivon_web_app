import Header from '@/components/Header';
import Image from 'next/image';

import BrandMarquee from '@/components/BrandMarquee';
import Maincontent from './MainContent'
const HeroSection = () => {
    const brands = [
        'winikon', 'temenos', 'SOFTWARE GROUP', 'winikon', 'Abler', 'avanza', 'temenos'
    ];
    return (
        <main className="  text-white ">



            <div className='relative h-[619px] w-full bg-cover bg-center bg-no-repeat'>
                <Header />
                {/* 1. Hero Section */}
                <div className='md:block hidden absolute z-[0] h-full top-6 inset-0 bg-[url("/assets/bg-image.png")] bg-cover bg-center bg-no-repeat'></div>

                <div className='absolute z-[0]  inset-0 bg-[url("/assets/bg-5.png")] bg-cover bg-center bg-no-repeat'></div>

                <div className='absolute z-[0]  bottom-0  right-0 bg-[url("/assets/bg-right.png")] hidden lg:flex items-center justify-center w-2/3 aspect-[2.68/1] top-1/4 bg-cover bg-center bg-no-repeat'>
                    <div className="hidden px-12  h-full md:flex items-end justify-end w-full z-[5] relative ">
                        <div className="w-full max-w-xl mb-20 relative">
                            <div className="w-full rounded-2xl p-[2px]  ">


                                <input

                                    type="text"
                                    placeholder="Search here..."
                                    className="w-full rounded-2xl bg-[url('/assets/Rectangle.png')]    py-3 px-6 text-gray-300 placeholder-gray-400 focus:outline-none"
                                />


                                {/* <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="11" cy="11" r="8"></circle>
                          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                      </div> */}
                            </div>
                        </div>
                        {/* <div className="absolute inset-0 bg-[url('/assets/bg-right.png')] bg-cover bg-top bg-no-repeat rounded-full blur-3xl"></div> */}
                        {/* Placeholder for the grid globe effect */}
                        {/* <svg viewBox="0 0 200 200" className="w-full h-full animate-[spin_60s_linear_infinite]">
                    <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-gray-500" />
                    <path d="M10,100 Q100,50 190,100" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-gray-500" />
                    <path d="M10,100 Q100,150 190,100" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-gray-500" />
                    <ellipse cx="100" cy="100" rx="90" ry="30" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-gray-500" />
                    <ellipse cx="100" cy="100" rx="40" ry="90" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-gray-500" />
                  </svg> */}


                    </div></div>




                <Maincontent />

            </div>
            <div className="hidden md:flex items-center justify-between gap-8 relative w-full opacity-40 overflow-hidden">

                <BrandMarquee brands={brands} />
            </div>
        </main>
    )
}
export default HeroSection