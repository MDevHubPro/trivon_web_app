'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import ClientCarousel from '@/components/ClientCarousel';
import FAQ from '@/components/FAQ';
import ContactFormSection from '@/components/ContactFormSection';
import Footer from '@/components/Footer';
import FeaturedResourcesSection from '@/components/FeaturedResourcesSection';
import Image from 'next/image';

const categories = ['Legal Analysis', 'Market Analysis', 'Virtual Assets', 'Banking', 'NBA', 'Animated'];

const caseStudies = [
  {
    id: 1,
    tag: 'Education',
    readTime: '1 Min Read',
    date: 'April 18, 2023',
    title: 'Memecoins: impact on Emerging Crypto Markets',
    image: 'GameFi', // Placeholder logic
    theme: 'purple'
  },
  {
    id: 2,
    tag: 'Education',
    readTime: '3 Min Read',
    date: 'April 18, 2023',
    title: 'Memecoins: impact on Emerging Crypto Markets',
    image: 'GameFi',
    theme: 'blue'
  },
  {
    id: 3,
    tag: 'Education',
    readTime: '5 Min Read',
    date: 'April 18, 2023',
    title: 'Memecoins: impact on Emerging Crypto Markets',
    image: 'GameFi',
    theme: 'purple'
  },
  {
    id: 4,
    tag: 'Education',
    readTime: '2 Min Read',
    date: 'April 16, 2023',
    title: 'Memecoins: impact on Emerging Crypto Markets',
    image: 'GameFi',
    theme: 'blue'
  }
];

export default function CaseStudyPage() {
  const [selectedCategory, setSelectedCategory] = useState('Legal Analysis');

  return (
    <main className="min-h-screen bg-black text-white selection:bg-purple-500/30">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-black relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div className="max-w-2xl">
              <div className="flex items-start gap-4 mb-6">
                <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
                  Case Studies
                </h1>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="gray" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="mt-2 text-gray-500">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                Trivon is a security-first blockchain consulting company that provides a range of services related to Trivon technology with strong emphasis on security engineering.
              </p>
            </div>

            {/* Abstract Grid/Globe Graphic on Right */}
            <div className="hidden md:block w-96 h-96 relative opacity-20">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-3xl"></div>
              {/* Placeholder for the grid globe effect */}
              <svg viewBox="0 0 200 200" className="w-full h-full animate-[spin_60s_linear_infinite]">
                <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-gray-500" />
                <path d="M10,100 Q100,50 190,100" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-gray-500" />
                <path d="M10,100 Q100,150 190,100" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-gray-500" />
                <ellipse cx="100" cy="100" rx="90" ry="30" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-gray-500" />
                <ellipse cx="100" cy="100" rx="40" ry="90" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-gray-500" />
              </svg>
            </div>
          </div>

          {/* Search Bar */}
          <div className="w-full max-w-sm mb-20">
            <div className="relative">
              <input
                type="text"
                placeholder="Search here..."
                className="w-full bg-[#111] border border-gray-800 rounded-full py-3 px-6 text-gray-300 focus:outline-none focus:border-purple-500 transition-colors"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </div>
            </div>
          </div>

          {/* Featured Resources Section */}
          <div className="mb-24">
            <div className="flex justify-between items-end mb-8">
              <h2 className="text-4xl font-bold text-white">Featured Resource's</h2>
              <p className="text-xs text-gray-500 max-w-md text-right hidden md:block">
                Trivon is a security-first blockchain consulting company that provides a range of services related to Trivon technology with strong emphasis on security engineering.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Large Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="col-span-1 border border-gray-800 lg:col-span-2 relative group cursor-pointer overflow-hidden rounded-2xl md:min-h-[400px] flex flex-col md:flex-row"
              >
                {/* Left Side - Image */}
                <div className="relative w-full md:w-4/5 h-64 md:h-auto bg-[#1a1a2e]">
                  <Image
                    src="/assets/memecoin.png"
                    alt="Memecoins"
                    fill
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-black/10" />
                </div>

                {/* Right Side - Purple Content */}
                <div className="relative w-full md:w-[30%] bg-[#6D28D9] p-8 flex flex-col justify-center">

                  {/* Top Right Design Element/Logo */}
                  <div className="absolute top-6 right-6">
                    <Image
                      src="/assets/gamefiicon.png"
                      alt="Memecoins"
                      width={40}
                      className="object-cover w-full h-full"
                    />
                  </div>

                  <div className="mt-16 mb-2 space-y-2">
                    <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                      Memecoins: Impact on Emerging Crypto Markets
                    </h3>

                  </div>

                  <div className="flex items-center gap-3 text-[12px] font-medium text-white/80 mt-auto">
                    <span>• 5 Min Read</span>
                    <span>• April 16, 2025</span>
                  </div>
                </div>
              </motion.div>

              {/* Sidebar List */}
              <div className="col-span-1 space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-[#111] p-4 rounded-xl border border-gray-800 hover:border-purple-500/50 transition cursor-pointer flex gap-4 h-[125px]">
                    <div className="w-1/3 bg-gray-800 rounded-lg overflow-hidden relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 to-blue-900/40"></div>
                    </div>
                    <div className="w-2/3 flex flex-col justify-center">
                      <h4 className="text-sm font-semibold text-white mb-2 line-clamp-2">
                        Memecoins: Impact on Emerging Crypto Markets
                      </h4>
                      <div className="flex items-center gap-2 text-[10px] text-gray-500">
                        <span>• 1 Min Read</span>
                        <span>• April 18, 2023</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* <FeaturedResourcesSection /> */}

          {/* Filters */}
          <div className="mb-12 overflow-x-auto pb-4">
            <div className="flex gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-6 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all border ${selectedCategory === cat
                    ? 'bg-purple-600 border-purple-600 text-white'
                    : 'bg-[#111] border-gray-800 text-gray-400 hover:border-purple-500/50 hover:text-white'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {caseStudies.map((study) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group"
              >
                {/* Image/Thumbnail Area */}
                <div className="aspect-video bg-[#0f0f13] border border-gray-800 rounded-2xl p-8 relative overflow-hidden mb-6 group-hover:border-purple-500/30 transition-colors">
                  {/* 3D Isometric Illustration Placeholder */}
                  <div className="absolute right-0 bottom-0 w-full h-full ">

                    <Image src="/assets/gamefi.png" alt="GameFi" fill className="object-cover w-full h-full" />
                  </div>
                </div>

                {/* Content */}
                < div >
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                    {study.title}
                  </h3>
                  <div className=" flex justify-between items-center ">


                    <button className="bg-[#8B5CF6] text-white px-6 py-2.5 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-[#7C3AED] transition-colors group">
                      Read View
                      <span className="bg-white/20 rounded-full p-0.5">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="7" y1="17" x2="17" y2="7"></line>
                          <polyline points="7 7 17 7 17 17"></polyline>
                        </svg>
                      </span>
                    </button>
                    <div className="text-sm text-white flex items-center md:flex-row flex-col gap-3">
                      <span>• {study.readTime}</span>
                      <span>• {study.date}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section >

      <ClientCarousel />
      <FAQ />
      <ContactFormSection />
      <Footer />
    </main >
  );
}
