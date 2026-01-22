'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import IndustriesGrid from '@/components/IndustriesGrid';
import WorkTogether from '@/components/WorkTogether';
import TechnologyStack from '@/components/TechnologyStack';
import ClientCarousel from '@/components/ClientCarousel';
import FAQ from '@/components/FAQ';
import ContactFormSection from '@/components/ContactFormSection';

export default function IndustriesPage() {
    return (
        <main className="min-h-screen bg-black text-white">
            <Header />
            <div className="pt-20">
                <IndustriesGrid />
                <WorkTogether />
                <TechnologyStack />
            </div>
            <ClientCarousel />
            <FAQ />
            <ContactFormSection />
            <Footer />
        </main>
    );
}
