'use client';

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import ContactFormSection from '@/components/ContactFormSection';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import Testimonials from '@/components/Testimonials';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white font-sans selection:bg-purple-500/30">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-48 md:pb-24 bg-black relative overflow-hidden">

        {/* Background Glows */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              We love exploring new ideas and transforming <br className="hidden md:block" />
              them into reality!
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Trivon is a security-first blockchain consulting company that provides a range of services related to Trivon technology with strong emphasis on security engineering
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <ContactFormSection />

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ */}
      <FAQ />

      <Footer />
    </main>
  );
}
