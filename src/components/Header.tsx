'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // New Design: Floating Pill Navbar
  return (
    <>
      <header className="relative top-6 left-0 right-0 z-50 flex justify-between px-4 pointer-events-none md:pointer-events-auto">
        <div className='md:block hidden absolute z-[10] top-4 left-10 '>
          <Image src={'/assets/headerlogo.png'} alt="bg-2" width={140} height={140} />
        </div>

        <div className='md:hidden block z-[10] top-4 left-10 '>
          <Image src={'/assets/headerlogo.png'} alt="bg-2" width={140} height={140} />
        </div>
        <div className=" md:flex hidden absolute z-[10] top-4 right-6">
          <button className="flex items-center gap-2 text-sm rounded-full px-4 py-1 bg-[linear-gradient(258.73deg,#6B2CEC_7.48%,#A156F7_92.51%)]">
            Request Quote
            <div className='bg-white rounded-full p-2'>
              <Image src="/assets/arrow.svg" alt="arrow" width={10} height={10} />
            </div>
          </button>
        </div>
        <div className=" pl-6 pr-2 pt-8 flex items-center gap-8 shadow-2xl md:w-full pointer-events-auto">

          {/* Logo */}
          {/* <Link href="/" className="flex items-center gap-2 mr-4">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center font-bold text-white">T</div>
            <span className="text-white font-bold hidden md:block">TRIVON</span>
          </Link> */}

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center gap-1 w-full">
            {['Home', 'Services', 'Industries', 'Pricing', 'About Us', 'Case Study'].map((item) => {
              const path = item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`;
              const isActive = pathname === path;

              return (
                <Link
                  key={item}
                  href={path}
                  className={`text-sm font-medium px-4 py-2 transition-all ${isActive
                    ? ''
                    : 'bg-transparent group-hover:bg-[linear-gradient(258.73deg,#6B2CEC_7.48%,#A156F7_92.51%)]'}`}
                >
                  {item}
                </Link>
              )
            })}
            <Link
              href="/contact"
              className={`text-sm font-medium px-4 py-2 rounded-full transition-all ${pathname === '/contact'
                ? 'bg-[#1a1a24] text-white border border-gray-700'
                : 'text-gray-500 hover:text-white hover:bg-white/5'
                }`}
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden w-8 h-8 flex items-center justify-center text-white bg-[#1a1a24] rounded-full border border-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {isMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>

          {/* CTA Button (Hidden on extremely small screens if needed, but keeping for now) */}
          {/* <Link href="/contact" className="hidden sm:flex bg-gradient-to-r from-[#8B5CF6] to-[#a855f7] text-white text-xs font-bold px-6 py-3 rounded-full items-center gap-2 hover:shadow-[0_0_15px_rgba(139,92,246,0.4)] transition-all">
            Request Quote
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
          </Link> */}
        </div>
      </header>

      {/* Mobile Slide-out Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl pt-32 px-8 flex flex-col md:hidden animate-in slide-in-from-top-10 duration-200 text-center">
          <nav className="flex flex-col gap-4 text-center">
            {['Home', 'Services', 'Industries', 'Pricing', 'About Us', 'Case Study', 'Contact'].map((item) => {
              const path = item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`;
              return (
                <Link
                  key={item}
                  href={path}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-xl font-bold text-white py-2 border-b border-gray-800 hover:text-purple-500 transition-colors"
                >
                  {item}
                </Link>
              )
            })}

            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className=" mt-8 bg-gradient-to-r from-[#8B5CF6] to-[#a855f7] text-white py-4 rounded-xl font-bold md:flex hidden justify-center items-center gap-2"
            >
              Request Quote
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
