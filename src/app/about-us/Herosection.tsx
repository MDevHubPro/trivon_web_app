import Header from '@/components/Header';
import Image from 'next/image';
const HeroSection = ({ heading_one, heading_two, text, main_heading }: any) => {
    return (

        <div className='relative h-screen w-full bg-cover bg-center bg-no-repeat'>
            <Header />
            {/* 1. Hero Section */}
            <div className='md:block hidden absolute z-[0] h-[80%] top-6 inset-0 bg-[url("/assets/bg-image.png")] bg-cover bg-center bg-no-repeat'></div>

            <div className='absolute z-[0]  inset-0 bg-[url("/assets/bg-2.png")] bg-cover bg-center bg-no-repeat'></div>



            {/* Hero Secti
      on */}
            <section className="pt-32 pb-24 relative overflow-hidden">
                {/* Background 'ABOUT US' Watermark - Massive */}
                <div className="absolute top-1/4 left-0 w-full overflow-hidden pointer-events-none select-none z-0">
                    <h1 className="text-[12rem] md:text-5xl font-black text-white/[0.02] whitespace-nowrap leading-none tracking-tighter">
                        ABOUT US
                    </h1>
                </div>

                <div className="container mx-auto px-4 h-screen sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col h-[70%] md:flex-row items-start justify-between">
                        <div className='flex flex-col flex flex-col items-center justify-center h-full'>
                            <div className="max-w-3xl h-full">
                                <h2 className="text-5xl font-medium  mb-2  tracking-tighter pl-1"
                                    style={{
                                        background: "radial-gradient(50% 50% at 50% 50%, #FFFFFF 30%, rgba(255, 255, 255, 0.5) 84.77%)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                    }}>{heading_one}</h2>
                                <h2
                                    className="text-5xl tracking-tighter leading-[1.5] font-medium"
                                    style={{
                                        background: "linear-gradient(258.73deg, #6B2CEC 7.48%, #A156F7 92.51%)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                    }}
                                >
                                    {heading_two}
                                </h2>
                            </div>
                            {/* The Arrow */}
                            {/* <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="mb-8 opacity-50">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg> */}
                            <div className="flex items-start gap-4  py-2">
                                <p className="text-right font-medium text-gray-400 text-sm  max-w-sm leading-relaxed border-l border-gray-800 pl-16">
                                    {text}
                                </p>
                                <div className='flex items-center justify-center'><Image src="/assets/arrow-3.svg" width={50} height={50} alt="Arrow" /></div>
                            </div>
                        </div>

                        {/* Right side floating card or graphic */}
                        <div className="hidden md:block mt-12 md:mt-0 h-1/2 relative flex justify-center pt-14">

                            <div>
                                <h2
                                    className="md:text-[140px] text-[100px] font-medium mb-2 tracking-tighter pr-16"
                                    style={{
                                        background: "linear-gradient(90deg, #FFFFFF 0%, #000000 100%)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                    }}
                                >
                                    {main_heading}
                                </h2>
                            </div>
                            {/* Decorative lines/mesh */}
                            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-600/10 blur-[80px] rounded-full pointer-events-none"></div>
                        </div>
                    </div>
                </div>


            </section>
        </div>
    );
};
export default HeroSection;