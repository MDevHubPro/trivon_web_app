'use client';
import Image from "next/image";
import BrandMarquee from "@/components/BrandMarquee";
const Maincontent = () => {
    const brands = [
        'winikon', 'temenos', 'SOFTWARE GROUP', 'winikon', 'Abler', 'avanza', 'temenos'
    ];
    return (
        <>
            <div className="relative z-10 md:max-w-5xl flex flex-col py-32 h-full md:h-auto md:py-2 gap-4  justify-between w-full text-center">
                {/* Top heading with arrow */}
                <div className="flex items-center justify-left gap-8 ">
                    <h1 className="text-4xl md:text-5xl  text-left md:text-right font-medium tracking-tighter text-gray-200 leading-tight md:max-w-3xl"
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

            <div className="hidden md:flex items-center justify-between gap-8 relative w-full opacity-40 overflow-hidden">

                <BrandMarquee brands={brands} />
            </div></>
    )
}
export default Maincontent