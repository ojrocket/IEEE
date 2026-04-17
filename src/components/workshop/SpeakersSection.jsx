import { motion } from 'framer-motion';
import { Globe, Mail, Phone, User } from 'lucide-react';

const SpeakerCard = ({ speaker, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="speaker-card p-10 rounded-[32px] bg-ieee-beige border border-ieee-deep/12 hover:border-ieee-bright/35 flex flex-col items-center text-center transition-all duration-500 group"
    >
      <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-ieee-deep/12 group-hover:border-ieee-bright transition-all duration-500 mb-8 p-1">
        <div className="w-full h-full rounded-full bg-ieee-light flex items-center justify-center text-ieee-bright overflow-hidden relative">
           <User className="w-12 h-12 group-hover:scale-110 transition-transform" />
           {/* In production, an img tag would go here */}
        </div>
      </div>

      <h3 className="text-xl font-semibold text-ieee-deep mb-2 tracking-tight group-hover:text-ieee-bright transition-colors">
        {speaker.name}
      </h3>
      <p className="text-xs font-semibold text-ieee-bright mb-6 uppercase tracking-[0.2em]">
        {speaker.role}
      </p>
      <p className="text-[#55637c] text-sm leading-relaxed mb-8 max-w-[240px] font-medium">
        {speaker.description}
      </p>

      <div className="flex gap-6 mt-auto">
        {speaker.socials.map((social, i) => {
          const Icon = social.icon;
          return (
            <a 
              key={i} 
              href={social.url} 
              className="text-ieee-deep/55 hover:text-ieee-bright hover:-translate-y-1 transition-all"
            >
              <Icon className="w-5 h-5" />
            </a>
          );
        })}
      </div>
    </motion.div>
  );
};

const SpeakersSection = () => {
  const speakers = [
    { 
      name: 'Dr. Alice Chen', 
      role: 'Principal Blockchain Architect', 
      description: 'Specializing in Layer 2 scaling solutions and enterprise protocol integration.',
      socials: [{ icon: Mail, url: '#' }, { icon: Phone, url: '#' }, { icon: Globe, url: '#' }]
    },
    { 
      name: 'Mr. David Lee', 
      role: 'Smart Contract Auditor', 
      description: 'Leading security researcher. Over 50+ major protocols audited successfully.',
      socials: [{ icon: Mail, url: '#' }, { icon: Globe, url: '#' }]
    },
    { 
      name: 'Prof. Priya Sharma', 
      role: 'Academic Researcher', 
      description: 'Focus on Web3 ethics, tokenomics, and decentralized governance models.',
      socials: [{ icon: Mail, url: '#' }, { icon: Phone, url: '#' }]
    },
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
          Speakers
        </motion.h2>
        <div className="w-16 h-1 bg-gradient-to-r from-ieee-bright to-ieee-cyan mx-auto rounded-full" />
        <p className="mt-6 text-[#5a6882] font-semibold uppercase tracking-widest text-xs">Learn from industry leaders and expert academics</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {speakers.map((s, i) => (
          <SpeakerCard key={s.name} speaker={s} index={i} />
        ))}
      </div>
    </section>
  );
};

export default SpeakersSection;
