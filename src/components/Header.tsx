'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isCaseStudy = pathname === '/case-study';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">T</span>
            </div>
            <Link href="/" className="text-xl md:text-2xl font-bold text-white">
              Trivon Digital
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link 
              href="/" 
              className={`transition ${pathname === '/' ? 'text-purple-400' : 'text-white hover:text-purple-400'}`}
            >
              Home
            </Link>
            <Link 
              href="/#about" 
              className="text-white hover:text-purple-400 transition"
            >
              About Us
            </Link>
            <Link 
              href="/#services" 
              className="text-white hover:text-purple-400 transition"
            >
              Services
            </Link>
            {isCaseStudy ? (
              <Link 
                href="/case-study" 
                className="text-purple-400 border-b-2 border-purple-400 pb-1 transition"
              >
                Case Study
              </Link>
            ) : (
              <Link 
                href="/case-study" 
                className="text-white hover:text-purple-400 transition"
              >
                Portfolio
              </Link>
            )}
            <Link 
              href="/contact" 
              className={`transition ${pathname === '/contact' ? 'text-purple-400' : 'text-white hover:text-purple-400'}`}
            >
              Contact
            </Link>
            <Link 
              href="/contact" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg hover:from-purple-700 hover:to-pink-700 transition font-semibold"
            >
              {isCaseStudy ? 'Get Started' : "Let's Talk"}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-white hover:text-purple-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link
              href="/"
              className="block text-white hover:text-purple-400 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/#about"
              className="block text-white hover:text-purple-400 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/#services"
              className="block text-white hover:text-purple-400 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/case-study"
              className="block text-white hover:text-purple-400 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              href="/contact"
              className="block text-white hover:text-purple-400 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/contact"
              className="block w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg hover:from-purple-700 hover:to-pink-700 transition text-center font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              Let's Talk
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
