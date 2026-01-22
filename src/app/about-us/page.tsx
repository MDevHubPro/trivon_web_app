'use client';

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ClientCarousel from '@/components/ClientCarousel';
import FAQ from '@/components/FAQ';
import ContactFormSection from '@/components/ContactFormSection';
import VisionMissionSection from '@/components/VisionMissionSection';
import StatsSection from '@/components/StatsSection';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-purple-500/30">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-black relative overflow-hidden">
        {/* Background 'ABOUT US' Watermark - Massive */}
        <div className="absolute top-1/4 left-0 w-full overflow-hidden pointer-events-none select-none z-0">
          <h1 className="text-[12rem] md:text-[20rem] font-black text-white/[0.02] whitespace-nowrap leading-none tracking-tighter">
            ABOUT US
          </h1>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-start justify-between">
            <div className="max-w-2xl">
              <h2 className="text-sm font-bold text-gray-500 mb-2 uppercase tracking-widest pl-1">About Us</h2>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-2">
                Trivon Digital
              </h1>
              {/* The Arrow */}
              <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="mb-8 opacity-50">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>

              <p className="text-gray-400 text-sm md:text-base max-w-lg leading-relaxed border-l border-gray-800 pl-6 py-2">
                Trivon is a security-first blockchain consulting company that provides a range of services related to Trivon technology with strong emphasis on security engineering and risk assessment for regulated industries.
              </p>
            </div>

            {/* Right side floating card or graphic */}
            <div className="mt-12 md:mt-0 relative">
              <div className="p-6 rounded-2xl bg-[#0F0F0F] border border-gray-800 max-w-sm">
                <p className="text-gray-400 text-xs leading-relaxed">
                  At Trivon, we have two distinct divisions dedicated to niche product lifecycle management.
                </p>
              </div>
              {/* Decorative lines/mesh */}
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-600/10 blur-[80px] rounded-full pointer-events-none"></div>
            </div>
          </div>
        </div>

        {/* Abstract Blue Waves at bottom */}
        <div className="absolute bottom-0 left-0 w-full h-96 opacity-30 pointer-events-none">
          <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 320">
            <path fill="none" stroke="url(#blue-gradient)" strokeWidth="1" d="M0,160L48,170.7C96,181,192,203,288,202.7C384,203,480,181,576,165.3C672,149,768,139,864,149.3C960,160,1056,192,1152,197.3C1248,203,1344,181,1392,170.7L1440,160" />
            <defs>
              <linearGradient id="blue-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#4F46E5" stopOpacity="0" />
                <stop offset="50%" stopColor="#3B82F6" stopOpacity="1" />
                <stop offset="100%" stopColor="#06B6D4" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>

      <VisionMissionSection />

      <StatsSection />

      <ClientCarousel />
      <FAQ />
      <ContactFormSection />
      <Footer />
    </main>
  );
}
