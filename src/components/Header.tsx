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
      <header className="relative z-50 mx-auto max-w-5xl px-6 py-6  md:bg-[#0C0C0C] bg-opacity-50 rounded-b-3xl">
        <div className="flex items-center justify-between w-full">

          {/* Logo */}
          <Link href="/" className="flex items-center cursor-pointer">
            <Image
              src="/assets/headerlogo.png"
              alt="Logo"
              width={140}
              height={140}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex flex-1 items-center justify-center gap-2">
            {['Home', 'Services', 'Industries', 'Pricing', 'About Us', 'Case Study'].map((item) => {
              const path = item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`;
              const isActive = pathname === path;

              return (
                <Link
                  key={item}
                  href={path}
                  className={`text-sm font-medium px-4 py-2 rounded-full transition-all
              ${isActive
                      ? 'bg-white/10 text-white'
                      : 'text-gray-300 hover:bg-white/5 hover:text-white'
                    }`}
                >
                  {item}
                </Link>
              );
            })}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex">
            <Link href="/contact">
              <button className="flex items-center gap-2 text-sm rounded-full px-4 py-1 bg-[linear-gradient(258.73deg,#6B2CEC_7.48%,#A156F7_92.51%)] text-white">
                Request Quote
                <span className="bg-white rounded-full p-2">
                  <Image src="/assets/arrow.svg" alt="arrow" width={10} height={10} />
                </span>
              </button>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden w-8 h-8 flex items-center justify-center text-white bg-[#1a1a24] rounded-full border border-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {isMenuOpen
                ? <path d="M18 6L6 18M6 6l12 12" />
                : <path d="M3 12h18M3 6h18M3 18h18" />
              }
            </svg>
          </button>

        </div>
      </header>


      {/* Mobile Slide-out Menu Overlay */}
      {
        isMenuOpen && (
          <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl pt-32 px-8 flex flex-col lg:hidden animate-in slide-in-from-top-10 duration-200 text-center">
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
                className=" mt-8 bg-gradient-to-r from-[#8B5CF6] to-[#a855f7] text-white py-4 rounded-xl font-bold lg:flex hidden justify-center items-center gap-2"
              >
                Request Quote
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
              </Link>
            </nav>
          </div>
        )
      }
    </>
  );
}
