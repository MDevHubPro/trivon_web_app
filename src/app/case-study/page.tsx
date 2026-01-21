'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';

const categories = ['Web Design', 'Mobile Design', 'UI/UX Design', 'Branding', 'SEO', 'Blockchain'];

const resources = [
  {
    title: 'GameFi:',
    subtitle: "What's the future of short-term investment?",
    category: 'Education',
    readTime: '1 Min Read',
    date: 'April 18, 2024',
  },
  {
    title: 'DeFi Protocols:',
    subtitle: 'Understanding decentralized finance',
    category: 'Education',
    readTime: '2 Min Read',
    date: 'April 15, 2024',
  },
  {
    title: 'NFT Marketplaces:',
    subtitle: 'The evolution of digital ownership',
    category: 'Blockchain',
    readTime: '3 Min Read',
    date: 'April 12, 2024',
  },
  {
    title: 'Smart Contracts:',
    subtitle: 'Automating trust in business',
    category: 'Blockchain',
    readTime: '2 Min Read',
    date: 'April 10, 2024',
  },
  {
    title: 'Web3 Development:',
    subtitle: 'Building the decentralized web',
    category: 'Education',
    readTime: '4 Min Read',
    date: 'April 8, 2024',
  },
  {
    title: 'Crypto Wallets:',
    subtitle: 'Security and best practices',
    category: 'Education',
    readTime: '2 Min Read',
    date: 'April 5, 2024',
  },
];

export default function CaseStudyPage() {
  const [selectedCategory, setSelectedCategory] = useState('Web Design');
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section with Blue Glow Border */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-black relative">
        <div className="absolute inset-0 border-2 border-blue-500/50 rounded-lg m-4 glow-blue"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="flex items-center space-x-2 mb-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Case Studies</h1>
              <motion.svg
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-8 h-8 text-white"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </motion.svg>
            </div>
            <p className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed">
              Trivon Digital is a leading digital and blockchain consulting company that provides a range of services related to blockchain technology with strong emphasis on security engineering.
            </p>
            <div className="relative">
              <input
                type="text"
                placeholder="Search anything..."
                className="w-full px-6 py-4 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition"
              />
              <svg
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </motion.div>

          {/* Background Graphics */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
            <motion.div
              animate={{
                x: [0, 100, 0],
                y: [0, 50, 0],
              }}
              transition={{ duration: 10, repeat: Infinity }}
              className="absolute top-20 right-20 w-32 h-32 bg-purple-500 rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                x: [0, -50, 0],
                y: [0, 100, 0],
              }}
              transition={{ duration: 15, repeat: Infinity }}
              className="absolute bottom-20 left-20 w-40 h-40 bg-blue-500 rounded-full blur-3xl"
            />
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-16 md:py-24 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Resource's</h2>
            <p className="text-lg text-gray-400 max-w-3xl">
              Trivon Digital is a leading digital and blockchain consulting company that provides a range of services related to blockchain technology with strong emphasis on security engineering.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Large Featured Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-64 md:h-80 rounded-xl overflow-hidden group cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600"></div>
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">Memecoins</h3>
                <p className="text-lg text-gray-200">Impact on Emerging Crypto Markets</p>
              </div>
            </motion.div>

            {/* Right Column Cards */}
            <div className="space-y-4">
              {[1, 2, 3].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-purple-500/50 transition cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold">T</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Memecoins impact on Emerging Crypto Markets.</h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <span>1 Min Read</span>
                    <span>•</span>
                    <span>April 18, 2024</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-8 bg-black border-y border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition ${
                  selectedCategory === category
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-900 text-gray-400 hover:text-white border border-gray-800'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Grid */}
      <section className="py-16 md:py-24 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
            {resources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-900 rounded-xl p-6 md:p-8 border border-gray-800 hover:border-purple-500/50 transition group cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-xs font-semibold">
                    {resource.category}
                  </span>
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                    <span className="text-white font-bold">T</span>
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-2">
                  {resource.title} <span className="text-gray-400 font-normal">{resource.subtitle}</span>
                </h3>
                <div className="flex items-center justify-between mt-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <span>{resource.readTime}</span>
                    <span>•</span>
                    <span>{resource.date}</span>
                  </div>
                  <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-purple-700 hover:to-pink-700 transition flex items-center space-x-2">
                    <span>Read Now</span>
                    <svg className="w-4 h-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center space-x-4">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              className="p-2 bg-gray-900 border border-gray-800 rounded-lg hover:border-purple-500 transition disabled:opacity-50"
              disabled={currentPage === 1}
            >
              <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <span className="px-4 py-2 bg-purple-600 text-white rounded-lg font-semibold">{currentPage}</span>
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              className="p-2 bg-gray-900 border border-gray-800 rounded-lg hover:border-purple-500 transition"
            >
              <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      <Testimonials />
      <FAQ />

      {/* Let's Talk Section */}
      <section className="py-16 md:py-24 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Let's Talk</h2>
            </motion.div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.form
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="px-4 py-4 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="px-4 py-4 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Project Type"
                  className="w-full px-4 py-4 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition"
                />
                <input
                  type="url"
                  placeholder="Project URL"
                  className="w-full px-4 py-4 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition"
                />
                <textarea
                  rows={6}
                  placeholder="Message"
                  className="w-full px-4 py-4 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition resize-none"
                />
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition flex items-center justify-center space-x-2"
                >
                  <span>Send Message</span>
                  <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </motion.form>

              {/* Right Side - Stats & Partners */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                {/* Animated Graphic */}
                <div className="relative h-48 md:h-64 flex items-center justify-center">
                  <motion.svg
                    viewBox="0 0 400 400"
                    className="w-full h-full absolute"
                  >
                    <motion.path
                      d="M200,200 Q250,100 300,200 T400,200"
                      stroke="url(#gradient3)"
                      strokeWidth="3"
                      fill="none"
                      initial={{ pathLength: 0, opacity: 0.5 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                    />
                    <motion.path
                      d="M200,200 Q150,300 100,200 T0,200"
                      stroke="url(#gradient4)"
                      strokeWidth="3"
                      fill="none"
                      initial={{ pathLength: 0, opacity: 0.5 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
                    />
                    <defs>
                      <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#a855f7" />
                        <stop offset="100%" stopColor="#ec4899" />
                      </linearGradient>
                      <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#ec4899" />
                        <stop offset="100%" stopColor="#a855f7" />
                      </linearGradient>
                    </defs>
                  </motion.svg>
                  <div className="relative z-10 text-center">
                    <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                      680+
                    </div>
                    <div className="text-lg text-gray-400">Clients & Partners</div>
                  </div>
                </div>

                {/* Partner Logos */}
                <div className="grid grid-cols-4 gap-4 opacity-60">
                  {['Google', 'Amazon', 'Microsoft', 'Apple', 'Meta', 'Netflix', 'Tesla', 'Adobe'].map((partner, index) => (
                    <motion.div
                      key={partner}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 0.6, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="bg-gray-800 rounded-lg p-4 flex items-center justify-center text-gray-500 text-xs font-semibold hover:opacity-100 transition"
                    >
                      {partner}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
