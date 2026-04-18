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
      <div className="hexagon-container bg-gradient-to-br from-ieee-deep to-[#0f305f] p-8 flex flex-col items-center justify-center text-center transition-all duration-500 group-hover:bg-ieee-bright/14 border border-ieee-bright/20 hover:border-ieee-cyan/50">
        <Icon className={`w-12 h-12 mb-6 ${track.color} group-hover:scale-110 transition-transform`} />
        <h3 className="text-white font-semibold text-xs md:text-sm uppercase tracking-widest leading-relaxed">
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
    <section className="py-24 bg-ieee-deep relative z-10">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-[0.2em] uppercase mb-4">
            Themes <span className="text-ieee-cyan">/ Tracks</span>
          </h2>
          <div className="w-32 h-1 bg-ieee-cyan mx-auto rounded-full" />
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
