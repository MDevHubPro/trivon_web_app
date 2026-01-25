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
import CollaborateCard from '@/components/CollaborateCard';
import FAQ from '@/components/FAQ';

export default function Home() {
  const brands = [
    'winikon', 'temenos', 'SOFTWARE GROUP', 'winikon', 'Abler', 'avanza', 'temenos'
  ];

  return (
    <main className="min-h-screen  text-white w-full ">
      <div className='relative min-h-screen w-full'>
        <div className='h-[619px] w-full relative'>
          <Header />
          {/* 1. Hero Section */}


          <div className='absolute left-0 bottom-0  md:top-0 w-full h-full '>
            <HomeHero />
          </div>

        </div>
        <div className='absolute z-[0]  inset-0 bg-[url("/assets/bg-5.png")] bg-cover bg-center bg-no-repeat'></div>
        <div className='absolute z-[0] top-0 bottom-0 right-0 aspect-square w-full md:w-2/3 bg-[url("/assets/bg-3.png")] bg-cover bg-center md:bg-top bg-no-repeat'></div>

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

      {/* 7. Web 3.0 Section */}
      <Web3Section />

      {/* 8. Testimonials */}
      <Testimonials />

      {/* 9. FAQ */}
      <FAQ />


      {/* 10. Collaborate Section */}
      <CollaborateCard />

      <Footer />
    </main>
  );
}
