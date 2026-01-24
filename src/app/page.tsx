'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HomeHero from '@/components/HomeHero';
import HomeAbout from '@/components/HomeAbout';
import WorkTogether from '@/components/WorkTogether';
import TechnologyStack from '@/components/TechnologyStack';
import HomeCaseStudy from '@/components/HomeCaseStudy';
import PricingSection from '@/components/PricingSection';
import Testimonials from '@/components/Testimonials';
import Web3Section from '@/components/Web3Section';
import BrandMarquee from '@/components/BrandMarquee';
import Image from 'next/image';
import FeaturedResourcesSection from '@/components/FeaturedResourcesSection';
export default function Home() {
  return (
    <main className="min-h-screen py-4 bg-black text-white">

      <div className='relative bg-[url("/assets/bg.png")] h-screen w-full bg-cover bg-center bg-no-repeat'>
        <Header />
        {/* 1. Hero Section */}

        <div className='absolute z-[0]  inset-0 bg-[url("/assets/bg-2.png")] bg-cover bg-center bg-no-repeat'></div>
        <div className='absolute z-[0] top-0 bottom-0 right-0 w-2/3 h-full bg-[url("/assets/bg-3.png")] bg-cover bg-top bg-no-repeat'></div>

        <HomeHero />
      </div>
      <BrandMarquee />

      {/* 2. About Us Section */}
      <HomeAbout />

      {/* 3. Work Together (Services) */}
      <WorkTogether />

      {/* 4. Technology Stack */}
      <TechnologyStack />

      {/* 5. Case Study */}
      <HomeCaseStudy />

      {/* 6. Pricing Section */}
      <PricingSection />

      {/* 7. Testimonials */}
      <Testimonials />

      {/* 8. Web 3.0 Section */}
      <Web3Section />

      {/* 9. Featured Resources */}
      <FeaturedResourcesSection />

      <Footer />
    </main>
  );
}
