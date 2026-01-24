'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PricingSection from '@/components/PricingSection';
import ClientCarousel from '@/components/ClientCarousel';
import FAQ from '@/components/FAQ';
import ContactFormSection from '@/components/ContactFormSection';
import HeroSection from '../about-us/Herosection';
export default function PricingPage() {
    return (
        <main className="min-h-screen bg-black text-white">
            <HeroSection heading_one={"Explore New Ways To Captivate"} text={"Trivon is a security-first blockchain consulting company that provides a range of services related to Trivon technology with strong emphasis on security engineering and DeFi innovation for more inclusive, reliable and sustainable systems"} main_heading={"*/Our Pricing"} />
            <div className="pt-20">
                <PricingSection />
            </div>
            <ClientCarousel />
            <FAQ />
            <ContactFormSection />
            <Footer />
        </main>
    );
}
