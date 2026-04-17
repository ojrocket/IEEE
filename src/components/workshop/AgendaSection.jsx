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
      <div className="absolute left-[calc(-3rem-2.4px)] top-2 w-4 h-4 rounded-full bg-ieee-deep border-4 border-slate-500 z-10 group-hover:bg-ieee-cyan group-hover:border-ieee-cyan group-hover:shadow-[0_0_15px_rgba(0,194,255,0.8)] transition-all duration-300" />
      
      <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12">
        <div className="text-ieee-cyan font-black tabular-nums tracking-widest text-sm w-24 pt-4 uppercase">
           {item.time}
        </div>
        <div className={`flex-1 p-8 rounded-3xl glass-enhanced border transition-all duration-500 ${
          item.type === 'break' 
          ? 'border-ieee-deep/12 bg-ieee-light border-dashed' 
          : 'border-ieee-deep/12 hover:border-ieee-cyan/35'
        }`}>
          {item.type === 'break' ? (
            <div className="flex items-center gap-4 text-[#5a6781]">
               <Coffee className="w-5 h-5" />
               <span className="text-sm font-semibold uppercase tracking-[0.2em] italic">{item.title}</span>
            </div>
          ) : (
            <>
              <h4 className="text-xl font-semibold text-ieee-deep mb-2 tracking-tight group-hover:text-ieee-bright transition-colors">{item.title}</h4>
              <p className="text-sm text-[#56637d] leading-relaxed font-medium">{item.description}</p>
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
    <section className="py-24 bg-ieee-deep border-y border-ieee-bright/20 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-semibold uppercase tracking-[0.24em] text-ieee-beige mb-4"
          >
            Agenda
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-ieee-bright to-ieee-cyan mx-auto rounded-full" />
          <p className="mt-6 text-ieee-beige/70 font-semibold uppercase tracking-widest text-xs">Detailed session timeline (Day 1 structure shown)</p>
        </div>

        <div className="relative border-l-4 border-ieee-bright/20 ml-12">
           {agenda.map((item, i) => (
             <AgendaNode key={i} item={item} index={i} />
           ))}
        </div>

        <div className="text-center mt-16">
           <button className="px-8 py-3 bg-ieee-bright/15 border border-ieee-bright/30 rounded-full text-[10px] font-semibold uppercase tracking-[0.3em] text-ieee-beige/85 hover:text-ieee-beige hover:bg-ieee-bright/25 transition-all">
             View Full 3-Day Agenda
           </button>
        </div>
      </div>
    </section>
  );
};

export default AgendaSection;
