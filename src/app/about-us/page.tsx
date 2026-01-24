'use client';

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';
import ContactFormSection from '@/components/ContactFormSection';
import VisionMissionSection from '@/components/VisionMissionSection';
import StatsSection from '@/components/StatsSection';
import Image from 'next/image';
import HeroSection from './Herosection';
import Testimonials from '@/components/Testimonials';
export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-purple-500/30">

      <HeroSection heading_one={"About Us"} heading_two={'Trivon Digital'} text={"Trivon is a security-first blockchain consulting company that provides a range of services related to Trivon technology with strong emphasis on security engineering and DeFi innovation for more inclusive, reliable and sustainable systems"} main_heading={"About Us"} />


      <VisionMissionSection />

      <StatsSection />

      <Testimonials />
      <FAQ />
      <ContactFormSection />
      <Footer />
    </main>
  );
}
