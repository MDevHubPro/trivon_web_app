'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PricingSection from '@/components/PricingSection';
import ClientCarousel from '@/components/ClientCarousel';
import FAQ from '@/components/FAQ';
import ContactFormSection from '@/components/ContactFormSection';

export default function PricingPage() {
    return (
        <main className="min-h-screen bg-black text-white">
            <Header />
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
