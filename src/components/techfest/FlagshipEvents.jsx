import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';

const FlagshipCard = ({ event, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-[28px] bg-ieee-beige border border-ieee-deep/12 hover:border-ieee-bright/30 transition-all duration-700"
    >
      <div className={`h-48 relative overflow-hidden bg-gradient-to-br ${event.bg}`}>
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-700" />
        <div className="absolute bottom-6 left-8">
          <span className={`px-4 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest text-white shadow-2xl ${event.tagColor}`}>
            {event.tag}
          </span>
        </div>
      </div>
      
      <div className="p-10">
        <h3 className="text-2xl font-semibold text-ieee-deep mb-3 tracking-tight group-hover:text-ieee-bright transition-colors">
          {event.title}
        </h3>
        <div className="flex items-center gap-3 mb-8">
          <Trophy className={`w-5 h-5 ${event.iconColor}`} />
          <p className={`text-lg font-black ${event.iconColor} tabular-nums tracking-wide`}>
            Prize Pool: {event.prize}
          </p>
        </div>
        <button className="w-full py-4 bg-ieee-light border border-ieee-deep/15 rounded-2xl text-ieee-deep font-semibold text-xs uppercase tracking-widest hover:bg-ieee-bright hover:text-ieee-beige transition-all">
          Register Now
        </button>
      </div>
    </motion.div>
  );
};

const FlagshipEvents = () => {
  const events = [
    { title: 'Grand Hackathon', prize: '₹1,00,000', tag: 'Major', bg: 'from-blue-900 to-indigo-900', tagColor: 'bg-blue-600', iconColor: 'text-blue-400' },
    { title: 'AI Challenge', prize: '₹75,000', tag: 'Elite', bg: 'from-purple-900 to-fuchsia-900', tagColor: 'bg-purple-600', iconColor: 'text-purple-400' },
    { title: 'Robotics Championship', prize: '₹1,50,000', tag: 'Combat', bg: 'from-red-900 to-rose-900', tagColor: 'bg-red-600', iconColor: 'text-red-400' },
    { title: 'Startup Pitch Fest', prize: '₹50,000', tag: 'Creative', bg: 'from-emerald-900 to-teal-900', tagColor: 'bg-emerald-600', iconColor: 'text-emerald-400' },
  ];

  return (
    <section className="py-24 bg-ieee-deep relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-black text-white mb-4 uppercase tracking-[0.3em]"
          >
            Flagship Events
          </motion.h2>
          <div className="w-16 h-1 bg-ieee-cyan mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {events.map((event, i) => (
            <FlagshipCard key={event.title} event={event} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlagshipEvents;
