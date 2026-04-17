import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQItem = ({ faq, isOpen, onClick }) => {
  return (
    <div className="mb-4 last:mb-0">
      <button
        onClick={onClick}
        className={`w-full p-6 flex items-center justify-between text-left glass-enhanced border transition-all duration-300 rounded-2xl ${
          isOpen ? 'border-ieee-cyan/50 bg-ieee-cyan/5' : 'border-white/5 hover:border-white/20'
        }`}
      >
        <span className={`text-sm font-bold tracking-wide ${isOpen ? 'text-white' : 'text-slate-300'}`}>
          {faq.question}
        </span>
        <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${
          isOpen ? 'rotate-180 text-ieee-cyan' : 'text-slate-500'
        }`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="p-6 text-sm text-slate-400 leading-relaxed font-medium">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    { question: 'Is the event online or offline?', answer: 'The Hackathon 2026 is a completely offline event held at the SRM AP campus to foster collaboration and networking.' },
    { question: 'Are there any registration fees?', answer: 'No, registration is completely free for all shortlisted teams. Accommodation and food will be provided.' },
    { question: 'Can I participate individually?', answer: 'No, you must form a team of 2 to 4 members to participate in the hackathon.' },
  ];

  return (
    <div className="space-y-10">
      <h3 className="text-2xl font-black text-white mb-10 border-b border-white/5 pb-6">FAQs</h3>
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <FAQItem 
            key={i} 
            faq={faq} 
            isOpen={openIndex === i} 
            onClick={() => setOpenIndex(openIndex === i ? -1 : i)} 
          />
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
