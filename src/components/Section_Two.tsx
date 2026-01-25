import Link from 'next/link';
import { Instagram, Linkedin, Youtube, Twitter } from 'lucide-react';
import Image from 'next/image';
export default function Section_Two() {
    return (
        <footer className="hidden md:block h-[100px]  text-white px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                {/* Left Section - Social Links */}
                <div className="flex items-center justify-center gap-6">
                    <span className="text-sm text-[#FFFFFF80] ">Follow For More                         <span className="inline-block ml-4 h-1 w-6 bg-[linear-gradient(258.73deg,#6B2CEC_7.48%,#A156F7_92.51%)] rounded-full" />

                    </span>
                    <div className="flex items-center gap-4">
                        <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                            <Image src="/assets/insta.svg" alt="instagram" width={18} height={18} />
                        </Link>
                        <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                            <Image src="/assets/whats.svg" alt="youtube" width={18} height={18} />
                        </Link>
                        <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                            <Image src="/assets/linkedin.svg" alt="linkedin" width={16} height={16} />
                        </Link>

                        <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                            <Image src="/assets/twitter.svg" alt="twitter" width={16} height={16} />
                        </Link>
                    </div>
                </div>

                {/* Center Section - Logo */}
                <div className="relative flex items-center justify-center">

                    {/* Decorative dots around circle */}
                    {/* <div className="w-20 h-20 animate-spin" style={{ animationDuration: '20s' }}>
                            {[...Array(12)].map((_, i) => (
                                <div
                                    key={i}
                                    className="absolute w-1 h-1 bg-purple-400/40 rounded-full"
                                    style={{
                                        top: '50%',
                                        left: '50%',
                                        transform: `rotate(${i * 30}deg) translateY(-40px)`,
                                    }}
                                />
                            ))}
                        </div> */}
                    <div className='h-44 w-44 flex items-center justify-center'>
                        <Image src="/assets/mouse.svg" alt="mouse" width={90} height={90} />
                    </div>
                </div>

                {/* Right Section - Contact Info */}
                <div className="text-left text-[#FFFFFF80]">
                    <p className="text-sm ">Creating Smart Solutions, Driving Real</p>
                    <p className="text-sm ">Growth</p>
                </div>
            </div>
        </footer>
    );
}