'use client';

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ClientCarousel from '@/components/ClientCarousel';
import FAQ from '@/components/FAQ';
import ContactFormSection from '@/components/ContactFormSection';
import VisionMissionSection from '@/components/VisionMissionSection';
import StatsSection from '@/components/StatsSection';
import Image from 'next/image';
import Herosection from './Herosection';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-purple-500/30">

      <Herosection />

      <VisionMissionSection />

      <StatsSection />

      <ClientCarousel />
      <FAQ />
      <ContactFormSection />
      <Footer />
    </main>
  );
}
