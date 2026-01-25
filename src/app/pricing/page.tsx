'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PricingSection from '@/components/PricingSection';
import FAQ from '@/components/FAQ';
import ContactFormSection from '@/components/ContactFormSection';
import HeroSection from '../industries/Herosection';
import Testimonials from '@/components/Testimonials';
import Maincontent from './Maincontent';
export default function PricingPage() {
    return (
        <main className="min-h-screen bg-black text-white">
            <HeroSection >
                <Maincontent />
            </HeroSection>
            <div className="pt-20">
                <PricingSection />
            </div>
            <Testimonials />
            <FAQ />
            <ContactFormSection />
            <Footer />
        </main>
    );
}
