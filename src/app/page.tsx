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
import FeaturedResourcesSection from '@/components/FeaturedResourcesSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      {/* 1. Hero Section */}
      <HomeHero />

      {/* 1.5 Brand Marquee */}
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
