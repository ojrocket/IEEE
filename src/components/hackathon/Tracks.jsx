import { motion } from 'framer-motion';
import { Brain, Cpu, Leaf, ShieldCheck, Activity, Bot } from 'lucide-react';

const TrackCard = ({ track, index }) => {
  const Icon = track.icon;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="relative group"
    >
      <div className="glass-card bg-[#0a0f1d] p-8 flex flex-col items-center justify-center text-center transition-all duration-500 hover:scale-105 border border-white/5 hover:border-[#40B2D6]/50">
        <Icon className={`w-12 h-12 mb-6 ${track.color} group-hover:scale-110 transition-transform`} />
        <h3 className="text-blue-50 font-medium text-xs md:text-sm uppercase tracking-widest leading-relaxed">
          {track.title.split(' ').map((word, i) => (
            <span key={i} className="block">{word}</span>
          ))}
        </h3>
      </div>
    </motion.div>
  );
};

const Tracks = () => {
  const tracks = [
    { title: 'AI & Machine Learning', icon: Brain, color: 'text-cyan-400' },
    { title: 'Web3 / Blockchain', icon: Cpu, color: 'text-purple-400' },
    { title: 'Sustainability / Green Tech', icon: Leaf, color: 'text-green-400' },
    { title: 'Cybersecurity', icon: ShieldCheck, color: 'text-red-400' },
    { title: 'Healthcare Tech', icon: Activity, color: 'text-pink-400' },
    { title: 'IoT / Robotics', icon: Bot, color: 'text-blue-400' },
  ];

  return (
    <section className="py-24 bg-[#0a0f1d] relative z-10 font-body">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="text-center mb-20 space-y-4">
          <h2 className="section-index mx-auto">
            Themes <span className="text-[#40B2D6]">/ Tracks</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {tracks.map((track, i) => (
            <TrackCard key={track.title} track={track} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tracks;
