import { useState } from 'react';
import WorkshopHero from '../components/workshop/WorkshopHero';
import WorkshopQuickInfo from '../components/workshop/WorkshopQuickInfo';
import SpeakersSection from '../components/workshop/SpeakersSection';
import AgendaSection from '../components/workshop/AgendaSection';
import LearningOutcomes from '../components/workshop/LearningOutcomes';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, ChevronDown } from 'lucide-react';

const FAQItem = ({ faq, isOpen, onClick }) => {
  return (
    <div className="border-t border-[var(--border-mid)] first:border-t-0 font-body">
      <button
        onClick={onClick}
        className="w-full py-8 flex items-center justify-between text-left group transition-colors"
      >
        <span className={`text-lg font-bold tracking-tight transition-colors ${isOpen ? 'text-[var(--primary)]' : 'text-[var(--text-ice)] group-hover:text-[var(--primary)]'}`}>
          {faq.question}
        </span>
        <ChevronDown className={`w-5 h-5 text-[var(--primary)] transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-8 text-[var(--text-secondary-c)] font-medium leading-relaxed max-w-3xl">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Workshop = () => {
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    { question: 'Is prior blockchain knowledge required?', answer: 'No, the workshop is designed to take you from fundamentals to advanced concepts. Basic programming knowledge in any language is helpful.' },
    { question: 'Will certificates be provided?', answer: 'Yes, all participants will receive an official IEEE SRM AP Workshop Completion Certificate. Exceptional performers may receive certificates of merit.' },
    { question: 'What software should I install beforehand?', answer: 'We will send a detailed setup guide 48 hours before the event. Generally, you will need VS Code, Node.js, and a Web3 wallet like MetaMask.' },
  ];

  return (
    <div className="bg-[var(--bg-darkest)] text-[var(--text-ice)] font-body">
      <WorkshopHero />

      <section className="bg-[var(--bg-darkest)] border-t border-[var(--border-mid)] border-b border-[var(--border-mid)]">
        <WorkshopQuickInfo />
      </section>

      <section className="bg-[var(--bg-darkest)] border-b border-[var(--border-mid)]">
        <SpeakersSection />
      </section>

      <section className="bg-[var(--bg-darkest)] border-b border-[var(--border-mid)]">
        <AgendaSection />
      </section>

      <section className="bg-[var(--bg-darkest)] border-b border-[var(--border-mid)]">
        <LearningOutcomes />
      </section>

      {/* Who Can Attend Section */}
      <section className="py-24 bg-[var(--bg-darkest)] border-t border-[var(--border-mid)] overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-label mx-auto mb-4 w-fit"
            >
              Who Can Attend?
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-center max-w-6xl mx-auto">
             <div className="space-y-6">
                {[
                  'Engineering students from CS, IT, ECE, EEE domains.',
                  'Pre-final and Final year students looking for industry projects.',
                  'Post-graduate students interested in Blockchain research.',
                  'Working professionals looking to transition to Web3.',
                  'Valid college/work ID required for formal certification.'
                ].map((text, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="solid-card p-6 border border-[var(--border-mid)] bg-[var(--bg-card)] rounded-[4px] flex items-center group transition-all"
                  >
                    <CheckCircle className="w-5 h-5 text-[var(--accent-emerald)] mr-6 flex-shrink-0" />
                    <span className="text-[var(--text-secondary-c)] font-medium transition-colors">{text}</span>
                  </motion.div>
                ))}
             </div>
             
             <div className="relative group">
                <div className="relative p-12 rounded-[4px] border border-[var(--border-mid)] bg-[var(--bg-card)] text-center">
                   <h3 className="font-display text-3xl font-black text-[var(--text-ice)] mb-6 uppercase tracking-tight">Reserve Your Spot</h3>
                   <p className="text-[var(--text-muted-c)] mb-10 font-medium">Early bird registration ends in 48 hours. Secure your seat now.</p>
                   <button className="bg-[var(--primary)] hover:bg-[var(--accent-gold)] text-[var(--bg-darkest)] w-full py-4 text-[12px] font-bold tracking-widest uppercase transition-all">
                     Register Now
                   </button>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 container mx-auto px-6 max-w-4xl">
         <div className="text-center mb-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-label mx-auto mb-4 w-fit"
            >
              Frequently Asked Questions
            </motion.div>
          </div>

          <div className="border-b border-[var(--border-mid)]">
            {faqs.map((faq, i) => (
              <FAQItem 
                key={i} 
                faq={faq} 
                isOpen={openFaq === i} 
                onClick={() => setOpenFaq(openFaq === i ? -1 : i)} 
              />
            ))}
          </div>
      </section>
    </div>
  );
};

export default Workshop;
