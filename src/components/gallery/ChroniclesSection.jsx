import { motion } from 'framer-motion';

const ChronicleCard = ({ item, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-[32px] glass-enhanced border border-ieee-deep/12 hover:border-ieee-cyan/35 transition-all duration-700"
    >
      <div className="h-64 overflow-hidden relative">
        <img 
          src={item.image} 
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ieee-deep/90 via-ieee-deep/20 to-transparent" />
      </div>
      
      <div className="p-8 relative">
        <h3 className="text-xl font-semibold text-ieee-deep mb-2 tracking-tight group-hover:text-ieee-bright transition-colors">
          {item.title}
        </h3>
        <p className="text-[#5b6982] text-xs font-semibold uppercase tracking-widest">
          {item.subtitle}
        </p>
      </div>
    </motion.div>
  );
};

const ChroniclesSection = () => {
  const items = [
    { title: 'Tech Innovation Summit', subtitle: 'Where ideas meet implementation', image: 'https://picsum.photos/seed/techsummit2024/600/400' },
    { title: 'AI Workshop Series', subtitle: 'Shaping the future of intelligence', image: 'https://picsum.photos/seed/aiworkshop2024/600/400' },
    { title: 'Robotics Showcase', subtitle: 'Engineering in motion', image: 'https://picsum.photos/seed/robotics2024/600/400' },
  ];

  return (
    <section className="py-24 container mx-auto px-6 bg-ieee-deep">
      <div className="text-center mb-20">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-black uppercase tracking-[0.3em] text-white mb-4"
        >
          CHRONICLES OF TECH
        </motion.h2>
        <div className="w-16 h-1 bg-ieee-cyan mx-auto rounded-full mb-6" />
        <p className="text-slate-500 font-black uppercase tracking-widest text-[10px]">A curated collection of our most memorable moments</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {items.map((item, i) => (
          <ChronicleCard key={item.title} item={item} index={i} />
        ))}
      </div>
    </section>
  );
};

export default ChroniclesSection;
