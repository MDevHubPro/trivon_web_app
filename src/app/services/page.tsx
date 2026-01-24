'use client';

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PricingSection from '@/components/PricingSection';
import ClientCarousel from '@/components/ClientCarousel';
import ProcessSection from '@/components/ProcessSection';
import FAQ from '@/components/FAQ';
import ContactFormSection from '@/components/ContactFormSection';


const packages = [
    {
        name: 'Basic Logo Package',
        highlightWord: 'Basic',
        price: 199,
        subtitle: 'For businesses on a budget',
        category: 'Logo Design',
        features: [
            '3 Custom Logo Design Concepts',
            '1 Dedicated Designer',
            '4 Revisions',
            '2 Hours TAT',
            '100% Satisfaction Guarantee',
            '100% Money Back Guarantee *',
            '100% Ownership Rights',
            'One Time Payment',
            'By 2 Designers'
        ]
    },
    {
        name: 'Start Up Logo Package',
        highlightWord: 'Start Up',
        price: 199,
        subtitle: 'For businesses on a budget',
        category: 'Logo Design',
        features: [
            '3 Custom Logo Design Concepts',
            '1 Dedicated Designer',
            '4 Revisions',
            '2 Hours TAT',
            '100% Satisfaction Guarantee',
            '100% Money Back Guarantee *',
            '100% Ownership Rights',
            'One Time Payment',
            'By 2 Designers'
        ]
    },
    {
        name: 'Mascot Logo Package',
        highlightWord: 'Mascot',
        price: 199,
        subtitle: 'For businesses on a budget',
        category: 'Logo Design',
        features: [
            '3 Custom Logo Design Concepts',
            '1 Dedicated Designer',
            '4 Revisions',
            '2 Hours TAT',
            '100% Satisfaction Guarantee',
            '100% Money Back Guarantee *',
            '100% Ownership Rights',
            'One Time Payment',
            'By 2 Designers'
        ]
    },

];

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-black text-white">
            <Header />

            {/* Process Section */}
            <ProcessSection />

            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <h1 className="text-center text-[70px] font-semibold leading-tight md:text-[70px] mb-8">
                    <span className="bg-gradient-to-r from-[#6B2CEC] to-[#A156F7] bg-clip-text text-transparent">
                        Explore
                    </span>{" "}
                    New Ways To{" "}
                    <span className="bg-gradient-to-r from-[#6B2CEC] to-[#A156F7] bg-clip-text text-transparent">
                        Captivate
                    </span>
                    <br />
                    Your{" "}
                    <span className="bg-gradient-to-r from-[#6B2CEC] to-[#A156F7] bg-clip-text text-transparent">
                        Customers
                    </span>
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {packages.slice(0, 3).map((pkg, i) => (


                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10, borderColor: 'rgba(139,92,246,0.5)', boxShadow: '0 0 30px rgba(139,92,246,0.1)' }}
                            transition={{ duration: 0.3 }}
                            className="bg-[#0D0616] border border-[#2b1b3d] rounded-[2rem] p-8 relative flex flex-col items-center text-center group"
                        >
                            <h3 className="text-xl font-bold text-white mb-6">
                                <span className="text-[#A855F7]">{pkg.highlightWord}</span> {pkg.name.replace(pkg.highlightWord, '')}
                            </h3>

                            <p className="text-[10px] text-gray-400 font-medium mb-1 uppercase tracking-wider">Price Starting From</p>

                            <div className="flex items-start justify-center text-[#A855F7] font-bold mb-8">
                                <span className="text-2xl mt-1">$</span>
                                <span className="text-6xl leading-none">{pkg.price}</span>
                                <span className="text-xl mt-1">.00</span>
                            </div>

                            <button className="w-full max-w-[200px] bg-gradient-to-r from-[#8B5CF6] to-[#C084FC] text-white py-3 rounded-full text-sm font-bold flex items-center justify-center gap-3 mb-4 shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:shadow-[0_0_25px_rgba(139,92,246,0.6)] transition-shadow">
                                Order Now
                                <div className="bg-white rounded-full p-1">
                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="9 18 15 12 9 6"></polyline>
                                    </svg>
                                </div>
                            </button>

                            <p className="text-[10px] text-gray-500 mb-8">{pkg.subtitle}</p>

                            <div className="w-full text-left space-y-4">
                                <p className="text-[#A855F7] text-xs font-bold mb-4">Plan Includes:</p>
                                {pkg.features.map((feature: string, i: number) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-[#A855F7] shadow-[0_0_5px_#A855F7]"></div>
                                        <p className="text-xs text-gray-300 font-medium">{feature}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>


            <ClientCarousel />
            <FAQ />
            <ContactFormSection />
            <Footer />
        </main>
    );
}
