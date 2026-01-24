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
    image: '/assets/gamefi.png',
    theme: 'blue'
  },
  {
    id: 3,
    tag: 'Education',
    readTime: '5 Min Read',
    date: 'April 18, 2023',
    title: 'Memecoins: impact on Emerging Crypto Markets',
    image: '/assets/orderfi.png',
    theme: 'purple'
  },
  {
    id: 4,
    tag: 'Education',
    readTime: '2 Min Read',
    date: 'April 16, 2023',
    title: 'Memecoins: impact on Emerging Crypto Markets',
    image: '/assets/beyondfi.png',
    theme: 'blue'
  }
];


const resources = [
  {
    id: 1,
    title: "Memecoins: Impact on Emerging Crypto Markets",
    readTime: "1 Min Read",
    date: "April 18, 2023",
    image: "/assets/gamefi.png",
    category: "Crypto",
    tags: ["memecoins", "crypto", "markets"]
  },
  {
    id: 2,
    title: "Web3 Development: Building Decentralized Applications",
    readTime: "5 Min Read",
    date: "May 22, 2023",
    image: "/assets/orderfi.png",
    category: "Web3",
    tags: ["web3", "dapps", "blockchain"]
  },
  {
    id: 3,
    title: "NFT Marketplace Trends in 2024",
    readTime: "3 Min Read",
    date: "January 15, 2024",
    image: "/assets/beyondfi.png",
    category: "NFT",
    tags: ["nft", "marketplace", "trends"]
  }

]

export default function CaseStudyPage() {
  const [selectedCategory, setSelectedCategory] = useState('Legal Analysis');

  return (




    <main className="min-h-screen  text-white selection:bg-purple-500/30">



      <div className='relative bg-[url("/assets/bg.png")] h-screen w-full bg-cover bg-center bg-no-repeat'>
        <Header />
        {/* 1. Hero Section */}

        <div className='absolute z-[0]  inset-0 bg-[url("/assets/bg-2.png")] bg-cover bg-center bg-no-repeat'></div>

        <div className='absolute z-[0] bottom-0  right-0 bg-[url("/assets/bg-right.png")]  w-2/3 h-[400px]  bg-cover bg-top bg-no-repeat'></div>




        {/* Hero Section */}
        <section className="pt-32 pb-16  relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
              <div className="max-w-2xl">
                <div className="flex items-center gap-4 mb-6">
                  <h1 className="text-5xl md:text-7xl font-medium text-white tracking-tight">
                    Case Studies
                  </h1>
                  <div className='w-12 h-12 relative'>

                    <Image src="/assets/arrow-2.svg" alt="arrow" fill className='object-cover' />
                  </div>
                </div>
                <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                  Trivon is a security-first blockchain consulting company that provides a range of services related to Trivon technology with strong emphasis on security engineering.
                </p>
              </div>

              {/* Abstract Grid/Globe Graphic on Right */}
              <div className="hidden   h-[500px] md:flex items-end justify-center w-1/2 z-[5] relative ">
                <div className="w-full max-w-sm mb-20">
                  <div className="w-full rounded-2xl p-[2px] bg-[linear-gradient(66.83deg,#A156F7_-3.68%,rgba(161,86,247,0)_42.16%)] ">
                    <input
                      type="text"
                      placeholder="Search here..."
                      className="w-full rounded-2xl bg-transparent py-3 px-6 text-gray-300 placeholder-gray-400 focus:outline-none"
                    />


                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                      </svg>
                    </div>
                  </div>
                </div>
                {/* <div className="absolute inset-0 bg-[url('/assets/bg-right.png')] bg-cover bg-top bg-no-repeat rounded-full blur-3xl"></div> */}
                {/* Placeholder for the grid globe effect */}
                {/* <svg viewBox="0 0 200 200" className="w-full h-full animate-[spin_60s_linear_infinite]">
                  <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-gray-500" />
                  <path d="M10,100 Q100,50 190,100" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-gray-500" />
                  <path d="M10,100 Q100,150 190,100" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-gray-500" />
                  <ellipse cx="100" cy="100" rx="90" ry="30" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-gray-500" />
                  <ellipse cx="100" cy="100" rx="40" ry="90" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-gray-500" />
                </svg> */}


              </div>
            </div>

            {/* Search Bar */}


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
                  className="col-span-1 lg:col-span-2 relative group cursor-pointer overflow-hidden rounded-2xl md:min-h-[400px]"
                >
                  {/* Background Image/Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] to-[#16213e]">
                    {/* Isometric/3D Elements Placeholder */}
                    <div className="absolute right-0 top-0 h-full w-2/3 opacity-80">
                      <img
                        src="https://placehold.co/800x600/1a1a2e/FFF?text=Memecoins+Visual"
                        alt="Featured"
                        className="w-full h-full object-cover mix-blend-overlay"
                      />
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-transparent to-transparent"></div>

                  <div className="absolute bottom-0 left-0 p-8 w-full">
                    <div className="flex justify-between items-end">
                      <div>
                        <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
                          Memecoins:<br />
                          Impact on Emerging<br />
                          Crypto Markets
                        </h3>
                      </div>
                      <div className="bg-white/10 backdrop-blur-md p-2 rounded-full hidden md:block group-hover:bg-purple-500 transition-colors">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="7" y1="17" x2="17" y2="7"></line>
                          <polyline points="7 7 17 7 17 17"></polyline>
                        </svg>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 mt-6 text-sm text-gray-300">
                      <span>• 1 Min Read</span>
                      <span>• April 18, 2023</span>
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
                    <div className="absolute top-4 left-4">
                      <span className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
                        GameFi:
                      </span>
                      <p className="text-xs text-gray-500 mt-1">Future of Gaming or<br />Short-lived Gimmick?</p>
                    </div>

                    {/* 3D Isometric Illustration Placeholder */}
                    <div className="absolute right-0 bottom-0 w-2/3 h-2/3">
                      <div className="w-full h-full relative">
                        {/* Just abstract shapes for 'GameFi' look */}
                        <div className="absolute bottom-4 right-4 w-20 h-20 bg-purple-600/20 rounded-full blur-xl"></div>
                        <div className="absolute bottom-8 right-12 w-10 h-10 bg-blue-500/40 rounded-lg transform rotate-45"></div>
                        <div className="absolute bottom-16 right-24 w-8 h-16 bg-pink-500/40 rounded-full"></div>
                        {/* Grid Floor */}
                        <div className="absolute bottom-0 right-0 w-full h-24 bg-[linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] [transform:perspective(500px)_rotateX(60deg)]"></div>
                      </div>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end border-t border-white/5 pt-4">
                      <span className="px-3 py-1 bg-[#1a1a1a] rounded-full text-xs text-purple-400 border border-purple-500/30">
                        {study.tag}
                      </span>
                      <div className="text-xs text-gray-500 flex gap-3">
                        <span>• {study.readTime}</span>
                        <span>• {study.date}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                      {study.title}
                    </h3>
                    <button className="bg-[#8B5CF6] text-white px-6 py-2.5 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-[#7C3AED] transition-colors group">
                      Read View
                      <span className="bg-white/20 rounded-full p-0.5">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="7" y1="17" x2="17" y2="7"></line>
                          <polyline points="7 7 17 7 17 17"></polyline>
                        </svg>
                      </span>
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </section>
      </div >
      <ClientCarousel />
      <FAQ />
      <ContactFormSection />
      <Footer />
    </main >
  );
}