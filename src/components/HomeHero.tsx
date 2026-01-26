'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Section_Two from './Section_Two';
type TypewriterTextProps = {
  text: string
  delay?: number
  speed?: number
  className?: string
  style?: React.CSSProperties
}
// --- Reusable Typewriter Component ---
const TypewriterText = ({ text, delay = 0, speed = 0.05, className = "",style = {} }: TypewriterTextProps) => {
    const letters = Array.from(text);

    const container = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: speed, delayChildren: delay },
        },
    };

    const child = {
        visible: {
            opacity: 1,
            display: "inline",
            transition: { duration: 0.01 }, // Sharp reveal for typewriter feel
        },
        hidden: {
            opacity: 0,
            display: "none",
        },
    };

    return (
        <motion.span
            variants={container}
            initial="hidden"
            animate="visible"
            className={`${className} `}
        >
            {letters.map((letter, index) => (
                <motion.span variants={child} key={index}>
                    {letter}
                </motion.span>
            ))
            }
        </motion.span >
    );
};

export default function HomeHero() {
    // Timing constants to keep things consistent
    const speed = 0.05;
    const line1Length = "Designed to ".length;
    const line2Length = "Grow".length;

    // Calculation for start times (start + (chars * speed))
    const growStart = 0.2 + (line1Length * speed);
    const businessStart = growStart + (line2Length * speed) + 0.5; // +0.5 for a natural breath

    return (
        <section className="relativem h-full overflow-hidden flex flex-col justify-center font-sans bg-[#0a0516]">
            {/* Background Effects */}

            <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-purple-600 opacity-20 blur-[150px] rounded-full pointer-events-none"></div>
            <div className="absolute top-[10%] right-[0%] w-[1000px] h-[1000px] bg-indigo-900 opacity-20 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto px-4 md:px-8 relative z-10 pt-[28rem] md:pt-32">
                <div className="flex w-full gap-12 items-center">
                    <div className="relative w-full text-center md:text-left ">
                        <h1 className="text-3xl md:text-5xl font-mori font-medium text-white leading-[1.1] mb-4 md:mb-8 tracking-tight">
                            {/* Sequence 1: Main Title Start */}
                            <TypewriterText text="Designed to " className='bg-[radial-gradient(50%_50%_at_50%_50%,#FFFFFF_30%,rgba(255,255,255,0.5)_84.77%)] bg-clip-text text-transparent
' delay={0.2} speed={speed} />

                            <span className=" relative flex md:inline-block md:space-x-2  items-center justify-center gap-2">
                                {/* Sequence 2: Continues with "Grow" */}
                                <TypewriterText text="Grow"
                                    style={{
                                        background: 'linear-gradient(258.73deg, #6B2CEC 7.48%, #A156F7 92.51%)'
                                    }}
                                    delay={growStart} speed={speed} className="bg-[linear-gradient(258.73deg,#6B2CEC_7.48%,#A156F7_92.51%)] bg-clip-text text-transparent"
                                />

                                {/* Cursor - Only blinks during the heading phase */}
                                <motion.span
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: [0, 1, 0] }}
                                    transition={{ repeat: 8, duration: 0.6 }}
                                    className="inline-block w-1 h-12 bg-[#A855F7] ml-1 absolute bottom-2"
                                />

                                {/* Badge - Pops in after the heading is fully typed */}
                                <motion.span
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: businessStart - 0.2 }}
                                    style={{
                                        background: "linear-gradient(258.73deg, rgba(107,44,236,0.4) 7.48%, rgba(161,86,247,0.4) 92.51%)"
                                    }}

                                    className="ml-4 inline-flex items-center gap-2  border border-[#FFFFFF80] text-white text-sm px-3 py-1 md:py-2 rounded-full md:mb-4 bg-opacity-40"
                                >
                                    <div className='w-4 md:w-6 h-4 md:h-6 rounded-full flex items-center justify-center '
                                        style={{ background: 'linear-gradient(258.73deg, #6B2CEC 7.48%, #A156F7 92.51%)' }}
                                    >
                                        <Image src="/assets/star.svg" alt="star" width={20} height={20} className='hidden md:block' />
                                        <Image src="/assets/star.svg" alt="star" width={10} height={10} className='md:hidden' />

                                    </div>
                                    <span className=" text-xs md:text-sm tracking-tight">Best Web & App</span>
                                </motion.span>
                            </span>
                            <br />

                            {/* Innovative Product Button */}
                            <div className='flex  md:flex-row flex-col items-center gap-2 '>
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: businessStart - 0.2 }}
                                    style={{
                                        background: 'linear-gradient(258.73deg, rgba(107,44,236,0.4) 7.48%, rgba(161,86,247,0.4) 92.51%)'
                                    }} className="inline-flex items-center gap-2 bg-[#2e1065] border border-gray-700 text-white text-sm px-3 py-1 md:py-2 rounded-full "
                                >
                                    <div className=' w-4 md:w-6 h-4 md:h-6 rounded-full flex items-center justify-center bg-[linear-gradient(258.73deg,#6B2CEC_7.48%,#A156F7_92.51%)]'>
                                        <Image src="/assets/star.svg" alt="star" width={20} height={20} className='hidden md:block' />
                                        <Image src="/assets/star.svg" alt="star" width={10} height={10} className='md:hidden' />
                                    </div>
                                    <span className="tracking-tight text-xs md:text-sm">Innovative Product of the Year</span>
                                </motion.div>

                                <div className='flex'>
                                    {/* "Your Business" line */}
                                    <span className="block mt-2">
                                        <TypewriterText text="Your" className='mr-4 bg-[linear-gradient(258.73deg,#6B2CEC_7.48%,#A156F7_92.51%)] bg-clip-text text-transparent' delay={businessStart} speed={speed} />
                                    </span>
                                    <span className="block mt-2">
                                        <TypewriterText text=" Business"
                                            className='bg-[radial-gradient(50%_50%_at_50%_50%,#FFFFFF_30%,rgba(255,255,255,0.5)_84.77%)] bg-clip-text text-transparent' delay={businessStart} speed={speed} />
                                    </span>
                                </div>
                            </div>
                        </h1>

                        {/* Sequence 4: The Paragraph (Begins after heading is done) */}
                        <div className="text-gray-400 text-xs md:text-sm max-w-md mb-1 md:mb-10 leading-[1.2] md:leading-relaxed min-h-[60px]">
                            <TypewriterText
                                text="We provide you with a convenient and reliable platform for effective business management. Forget about complexities—we'll handle everything for your convenience!"
                                delay={businessStart + 1} // Starts 1 second after "Your Business"
                                speed={0.02} // Typed slightly faster for long text
                            />
                        </div>

                        {/* Sequence 5: The Final UI Reveal */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: businessStart + 4 }}
                            className="flex items-center justify-center md:justify-start gap-6"
                        >
                            <button className="h-8 md:h-10 w-[160px] pl-6  pr-2 rounded-full bg-[linear-gradient(258.73deg,#6B2CEC_7.48%,#A156F7_92.51%)] text-white font-medium text-sm flex items-center justify-between gap-2">
                                Get Started
                                <div className="bg-white rounded-full p-2">
                                    <Image src={'/assets/arrow.svg'} width={12} height={12} className='hidden md:block'   alt="Arrow" />
                                    <Image src={'/assets/arrow.svg'} width={10} height={10} className='md:hidden block'   alt="Arrow" />
                                </div>
                            </button>
                        </motion.div>
                    </div>
                </div>

            </div>


        </section>

    );
}