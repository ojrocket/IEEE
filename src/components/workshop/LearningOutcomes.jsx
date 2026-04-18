import { motion } from 'framer-motion';
import { Server, Network, PenTool, Handshake } from 'lucide-react';

const OutcomeCard = ({ outcome, index }) => {
  const Icon = outcome.icon;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="p-8 rounded-[28px] bg-white border border-ieee-deep/12 hover:border-ieee-bright/35 transition-all duration-500 text-center flex flex-col items-center group"
    >
      <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-6 group-hover:bg-white group-hover:scale-110 transition-all border border-ieee-deep/12">
        <Icon className="w-8 h-8 text-ieee-bright transition-colors" />
      </div>
      <h4 className="text-lg font-semibold text-ieee-deep mb-3 tracking-tight group-hover:text-ieee-bright transition-colors">{outcome.title}</h4>
      <p className="text-xs text-[#55647e] leading-relaxed font-medium uppercase tracking-widest">{outcome.description}</p>
    </motion.div>
  );
};

const LearningOutcomes = () => {
  const outcomes = [
    { title: 'Hands-on Deployment', description: 'Learn to deploy robust contracts to testnets and mainnets.', icon: Server },
    { title: 'Architecture Understanding', description: 'Deep dive into DApp infrastructure, IPFS, and node providers.', icon: Network },
    { title: 'Research Writing', description: 'Guidance on authoring IEEE format papers on Web3 topics.', icon: PenTool },
    { title: 'Industry Exposure', description: 'Direct networking with professionals and internship opportunities.', icon: Handshake },
  ];

  return (
    <section className="py-24 container mx-auto px-6">
      <div className="text-center mb-20">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-semibold uppercase tracking-[0.16em] text-ieee-deep mb-4"
        >
          Learning Outcomes
        </motion.h2>
        <div className="w-16 h-1 bg-gradient-to-r from-ieee-bright to-ieee-cyan mx-auto rounded-full" />
        <p className="mt-6 text-[#5b6983] font-semibold uppercase tracking-widest text-xs max-w-2xl mx-auto">What you will gain from this intensive 3-day technical workshop.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {outcomes.map((o, i) => (
          <OutcomeCard key={o.title} outcome={o} index={i} />
        ))}
      </div>
    </section>
  );
};

export default LearningOutcomes;
