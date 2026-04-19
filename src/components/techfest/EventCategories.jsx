import { motion } from 'framer-motion';
import { Code2, FlaskConical, FileText, Zap, Laptop, Globe, Lightbulb, Users } from 'lucide-react';

const CategoryCard = ({ category, index }) => {
  const Icon = category.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -10 }}
      className="glass-card group rounded-[28px] p-8 border border-white/5 hover:border-[#40B2D6]/35 transition-all duration-300"
    >
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border border-white/10 bg-white/5 group-hover:scale-110 transition-all duration-300`}>
        <Icon className={`w-7 h-7 ${category.color}`} />
      </div>
      <h3 className="text-xl font-medium text-blue-50 mb-3 tracking-tight">{category.title}</h3>
      <p className="text-blue-200/60 text-sm leading-relaxed mb-8 h-12 line-clamp-2">
        {category.description}
      </p>
      <a href="#" className={`flex items-center gap-2 font-medium text-[10px] uppercase tracking-widest transition-colors ${category.color} group-hover:brightness-125`}>
        Explore Track
        <Zap className="w-3 h-3 transition-transform group-hover:translate-x-1" fill="currentColor" />
      </a>
    </motion.div>
  );
};

const EventCategories = () => {
  const categories = [
    { title: 'Hackathon', icon: Code2, description: '48-hour continuous product building and problem solving.', color: 'text-blue-400' },
    { title: 'Technical Workshops', icon: FlaskConical, description: 'Hands-on sessions on AI, Blockchain, and Cybersecurity.', color: 'text-violet-400' },
    { title: 'Paper Presentation', icon: FileText, description: 'Showcase your research to industry experts and panellists.', color: 'text-orange-400' },
    { title: 'Robo Wars', icon: Zap, description: 'Combat robotics where engineered bots fight for supremacy.', color: 'text-rose-400' },
    { title: 'Coding Competition', icon: Laptop, description: 'Competitive programming contests to test algorithmic skills.', color: 'text-emerald-400' },
    { title: 'Project Expo', icon: Globe, description: 'Exhibit your capstone projects and working prototypes to guests.', color: 'text-cyan-400' },
    { title: 'Startup Pitch', icon: Lightbulb, description: 'Pitch your business ideas to venture capitalists and investors.', color: 'text-amber-400' },
    { title: 'Guest Lectures', icon: Users, description: 'Inspiring talks by industry leaders and renowned academicians.', color: 'text-pink-400' },
  ];

  return (
    <section className="py-24 bg-[#0a0f1d] relative font-body">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-index mx-auto"
          >
            Event Categories
          </motion.h2>
          <div className="w-16 h-1 bg-[#40B2D6] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, i) => (
            <CategoryCard key={cat.title} category={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventCategories;
