'use client';

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PricingSection from '@/components/PricingSection';
import ClientCarousel from '@/components/ClientCarousel';
import ProcessSection from '@/components/ProcessSection';
import FAQ from '@/components/FAQ';
import ContactFormSection from '@/components/ContactFormSection';

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-black text-white">
            <Header />

            {/* Process Section */}
            <ProcessSection />

            {/* Stats/Image Row - Kept because it wasn't strictly part of the replaced 'Process' image but relates to the page content flow. If the user meant replace the ENTIRE top part, I might need to adjust. 
               The image showed the process list with "When I joined...". 
               My ProcessSection component already includes that specific header!
               So I should remove the redundant "Hero Section" if ProcessSection covers it.
               
               Let's check ProcessSection again. It has the "Tag", "Headline", "Curved Line", and "Steps".
               So I should REMOVE the existing Hero Section that I manually built before.
            */}

            <PricingSection />
            <ClientCarousel />
            <FAQ />
            <ContactFormSection />
            <Footer />
        </main>
    );
}
