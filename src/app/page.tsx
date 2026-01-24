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
  const brands = [
    'winikon', 'temenos', 'SOFTWARE GROUP', 'winikon', 'Abler', 'avanza', 'temenos'
  ];

  return (
    <main className="min-h-screen  text-white w-full ">
      <div className='relative min-h-screen w-full'>
        <div className='h-[619px] w-full relative'>
          <div className='md:block hidden absolute z-[0] h-full top-6 inset-0 bg-[url("/assets/bg-image.png")] bg-cover bg-center bg-no-repeat'></div>
          <Header />
          {/* 1. Hero Section */}


          <div className='absolute left-0 top-0 bottom-0  w-full h-full'>
            <HomeHero />
          </div>

        </div>
        <div className='absolute z-[0]  inset-0 bg-[url("/assets/bg-2.png")] bg-cover bg-center bg-no-repeat'></div>
        <div className='absolute z-[0] top-0 bottom-0 right-0 h-[619px] w-[619px] bg-[url("/assets/bg-3.png")] bg-cover bg-top bg-no-repeat'></div>

      </div>
      <BrandMarquee brands={brands} />

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
