import { motion } from 'framer-motion';
import { Coffee } from 'lucide-react';

const AgendaNode = ({ item, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="relative pl-16 mb-12 last:mb-0 group"
    >
      <div className="absolute left-[calc(-3rem-2.4px)] top-2 w-4 h-4 rounded-full bg-[#0a0f1d] border-4 border-white/20 z-10 group-hover:bg-[#40B2D6] group-hover:border-[#40B2D6] group-hover:shadow-[0_0_15px_rgba(64,178,214,0.8)] transition-all duration-300" />
      
      <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12">
        <div className="text-[#40B2D6] font-medium tabular-nums tracking-widest text-[11px] w-24 pt-4 uppercase">
           {item.time}
        </div>
        <div className={`flex-1 p-8 rounded-3xl glass-card border transition-all duration-500 ${
          item.type === 'break' 
          ? 'border-white/5 bg-white/5 border-dashed' 
          : 'border-white/5 hover:border-[#40B2D6]/35'
        }`}>
          {item.type === 'break' ? (
            <div className="flex items-center gap-4 text-blue-200/40">
               <Coffee className="w-5 h-5" />
               <span className="text-xs font-medium uppercase tracking-[0.2em] italic">{item.title}</span>
            </div>
          ) : (
            <>
              <h4 className="text-xl font-medium text-blue-50 mb-2 tracking-tight group-hover:text-[#40B2D6] transition-colors">{item.title}</h4>
              <p className="text-sm text-blue-200/60 leading-relaxed font-light">{item.description}</p>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const AgendaSection = () => {
  const agenda = [
    { time: '09:00 AM', title: 'Registration & Kickoff', description: 'Welcome note, kit distribution, and setting up development environments.', type: 'session' },
    { time: '10:30 AM', title: 'Session 1: Blockchain Fundamentals', description: 'Led by Dr. Alice Chen. Cryptography basics, consensus mechanisms, and Ethereum architecture.', type: 'session' },
    { time: '12:30 PM', title: 'Networking & Lunch Break', type: 'break' },
    { time: '01:30 PM', title: 'Session 2: Hands-on Smart Contracts', description: 'Led by Mr. David Lee. Writing, compiling, and deploying your first Solidity contract using Hardhat/Foundry.', type: 'session' },
    { time: '03:30 PM', title: 'Session 3: Web3 Integration', description: 'Connecting front-end applications to deployed contracts using Ethers.js and React.', type: 'session' },
    { time: '05:00 PM', title: 'Day 1 Wrap Up & Assignment', description: 'Review of topics, Q&A, and details for tomorrow\'s advanced session.', type: 'session' },
  ];

  return (
    <section className="py-24 bg-[#0a0f1d] border-y border-white/5 relative font-body">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-20 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-index mx-auto"
          >
            Agenda
          </motion.h2>
          <div className="w-16 h-1 bg-[#40B2D6] mx-auto rounded-full" />
          <p className="mt-6 text-blue-200/40 font-medium uppercase tracking-widest text-[10px]">Detailed session timeline (Day 1 structure shown)</p>
        </div>

        <div className="relative border-l-4 border-white/5 ml-12">
           {agenda.map((item, i) => (
             <AgendaNode key={i} item={item} index={i} />
           ))}
        </div>

        <div className="text-center mt-16">
           <button className="ieee-btn-outline px-8 py-3 uppercase tracking-widest text-[10px]">
             View Full 3-Day Agenda
           </button>
        </div>
      </div>
    </section>
  );
};

export default AgendaSection;
