import { motion } from 'framer-motion';
import { CalendarDays, Satellite, GraduationCap, Ticket } from 'lucide-react';

const InfoCard = ({ item, index }) => {
  const Icon = item.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group relative p-8 rounded-3xl bg-ieee-bright/12 border border-ieee-cyan/20 hover:border-ieee-cyan/45 transition-all text-center flex flex-col items-center overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-ieee-cyan to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
      <Icon className="w-10 h-10 text-ieee-cyan mb-6 transition-all" />
      <h4 className="text-white font-semibold text-lg tracking-tight">{item.title}</h4>
      <p className="text-[10px] text-white/70 font-semibold uppercase tracking-[0.2em] mt-2 italic">{item.subtitle}</p>
    </motion.div>
  );
};

const WorkshopQuickInfo = () => {
  const infoItems = [
    { title: '3 Days', subtitle: 'Duration', icon: CalendarDays },
    { title: 'Hybrid Mode', subtitle: 'Access', icon: Satellite },
    { title: 'All Students', subtitle: 'Eligibility', icon: GraduationCap },
    { title: 'Free', subtitle: 'For IEEE Members', icon: Ticket },
  ];

  return (
    <section className="py-20 relative z-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {infoItems.map((item, i) => (
            <InfoCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkshopQuickInfo;
