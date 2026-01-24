import Header from '@/components/Header';
import Image from 'next/image';
const HeroSection = () => {
    return (

        <div className='relative h-screen w-full '>
            <Header />
            {/* 1. Hero Section */}
            <div className='md:block hidden absolute z-[0] h-[80%] top-6 inset-0 bg-[url("/assets/bg-image.png")] bg-cover bg-center bg-no-repeat'></div>

            <div className='h-full w-full absolute z-[0]  inset-0 bg-[url("/assets/bg-2.png")] bg-cover bg-center bg-no-repeat'></div>
            <div className="relative min-h-screen  flex flex-col items-center justify-center px-4 overflow-hidden">
                {/* Background overlay */}
                {/* <div className="absolute inset-0 bg-black/30"></div> */}

                {/* Main content */}
                <div className="relative z-10 md:max-w-5xl h-[60vh] flex flex-col py-2  justify-between w-full text-center">
                    {/* Top heading with arrow */}
                    <div className="flex items-center justify-left gap-8 ">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl text-right font-medium tracking-tighter text-gray-200 leading-tight md:max-w-3xl"
                            style={{
                                background:
                                    "radial-gradient(50% 50% at 50% 50%, #FFFFFF 30%, rgba(255, 255, 255, 0.5) 84.77%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}>
                            Customized Web Solutions
                            <br />
                            for Industry-Specific
                            <br />
                            Requirements
                        </h1>

                        {/* Arrow pointing down-right */}
                        <div className="hidden md:block mt-8">
                            <Image src="/assets/arrow-2.svg" width={100} height={100} alt="Arrow" />
                        </div>
                    </div>

                    {/* Main brand text */}
                    <div className=" flex items-end justify-end">
                        <h2 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-medium tracking-tighter text-gray-300"
                            style={{
                                background: "linear-gradient(90deg, #FFFFFF 0%, #000000 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}>
                            <span className="text-white">*/</span>Industries
                        </h2>
                    </div>

                    {/* Logo carousel placeholder */}

                </div>

                {/* Decorative gradient orbs */}
                <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>


            </div>
            <div className="flex items-center justify-between gap-8 relative max-w-5xl mx-auto opacity-40 overflow-hidden">
                <div className="text-gray-400 text-lg md:text-xl font-light">winikon</div>
                <div className="text-gray-400 text-lg md:text-xl font-light">temenos</div>
                <div className="text-gray-400 text-lg md:text-xl font-semibold">SOFTWARE<br />GROUP</div>
                <div className="text-gray-400 text-lg md:text-xl font-light">winikon</div>
                <div className="text-gray-400 text-lg md:text-xl font-light">Abler</div>
                <div className="text-gray-400 text-lg md:text-xl font-light">avanza</div>
                <div className="text-gray-400 text-lg md:text-xl font-light">temenos</div>
            </div>

            {/* Hero Secti
      on */}

        </div>
    );
};
export default HeroSection;