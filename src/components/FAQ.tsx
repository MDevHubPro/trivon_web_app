'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqItems = [
  {
    question: 'What types of remote resources can I hire through Trivon Digital, and how quickly can I start?',
    answer: 'You can hire a wide range of remote talent including developers, designers, product managers, and more. We can typically get you started within 48-72 hours depending on your specific requirements.',
  },
  {
    question: 'How does Trivon Digital ensure the quality and productivity of developers?',
    answer: 'We have a rigorous vetting process that includes technical assessments, soft skills interviews, and background checks. This ensures world-class talent.',
  },
  {
    question: 'What is the minimum contract tenure, and how flexible is the hiring model?',
    answer: 'Our contracts are flexible to suit your needs, starting from as little as one month. We offer various engagement models including full-time, part-time, and hourly based on your project requirements.',
  },
  {
    question: 'How does Trivon Digital ensure a risk-free hiring process, and what if I\'m not satisfied?',
    answer: 'We offer a risk-free trial period. If you are not satisfied with the resource within the first week, we will replace them at no extra cost or provide a full refund.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4 md:px-8">

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Column - Header */}
          <div className="lg:w-1/3">
            <div className="sticky top-24">
              <div className="inline-block px-4 py-1.5 rounded-full bg-[#1a1a2e] border border-purple-500/30 mb-6">
                <span className="text-purple-400 text-xs font-bold flex items-center gap-2 uppercase tracking-wide">
                  <span className="text-lg leading-none mb-0.5">+</span>
                  Frequently Asked Question
                </span>
              </div>

              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-[1.1]">
                Frequently <br />
                <span className="text-purple-500">Asked</span> <br />
                Questions
              </h2>

              <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
                We provide you with a convenient and reliable platform for effective business management. Forget about complexities we'll handle everything for your convenience!
              </p>
            </div>
          </div>

          {/* Right Column - Accordion List */}
          <div className="lg:w-2/3 space-y-4">
            {faqItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="border border-[#1f1f23] rounded-2xl bg-black overflow-hidden transition-colors hover:border-purple-500/30"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full px-8 py-6 flex items-start justify-between text-left group"
                >
                  <div className="flex gap-4">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-purple-500 flex-shrink-0"></div>
                    <span className="text-gray-300 font-medium text-sm md:text-base group-hover:text-white transition-colors">
                      {item.question}
                    </span>
                  </div>

                  <span className={`text-gray-500 transition-transform duration-300 ml-4 ${openIndex === i ? 'rotate-180 text-purple-500' : ''}`}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </button>

                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-8 pl-[3.25rem] text-gray-500 text-sm leading-relaxed">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
