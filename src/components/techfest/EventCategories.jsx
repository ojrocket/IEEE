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
      className="tf-card group rounded-[28px] p-8 bg-ieee-beige border border-ieee-deep/12 hover:border-ieee-bright/35 transition-all duration-300"
    >
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border transition-all duration-300 ${category.bg} ${category.border} group-hover:scale-110`}>
        <Icon className={`w-7 h-7 ${category.color}`} />
      </div>
      <h3 className="text-xl font-semibold text-ieee-deep mb-3 tracking-tight">{category.title}</h3>
      <p className="text-[#54627c] text-sm leading-relaxed mb-8 h-12 line-clamp-2">
        {category.description}
      </p>
      <a href="#" className={`flex items-center gap-2 font-bold text-xs uppercase tracking-widest transition-colors ${category.color} group-hover:brightness-125`}>
        Explore Track
        <Zap className="w-3 h-3 transition-transform group-hover:translate-x-1" fill="currentColor" />
      </a>
    </motion.div>
  );
};

const EventCategories = () => {
  const categories = [
    { title: 'Hackathon', icon: Code2, description: '48-hour continuous product building and problem solving.', color: 'text-blue-500', bg: 'bg-blue-100', border: 'border-blue-200' },
    { title: 'Technical Workshops', icon: FlaskConical, description: 'Hands-on sessions on AI, Blockchain, and Cybersecurity.', color: 'text-violet-500', bg: 'bg-violet-100', border: 'border-violet-200' },
    { title: 'Paper Presentation', icon: FileText, description: 'Showcase your research to industry experts and panellists.', color: 'text-orange-500', bg: 'bg-orange-100', border: 'border-orange-200' },
    { title: 'Robo Wars', icon: Zap, description: 'Combat robotics where engineered bots fight for supremacy.', color: 'text-rose-500', bg: 'bg-rose-100', border: 'border-rose-200' },
    { title: 'Coding Competition', icon: Laptop, description: 'Competitive programming contests to test algorithmic skills.', color: 'text-emerald-500', bg: 'bg-emerald-100', border: 'border-emerald-200' },
    { title: 'Project Expo', icon: Globe, description: 'Exhibit your capstone projects and working prototypes to guests.', color: 'text-cyan-500', bg: 'bg-cyan-100', border: 'border-cyan-200' },
    { title: 'Startup Pitch', icon: Lightbulb, description: 'Pitch your business ideas to venture capitalists and investors.', color: 'text-amber-500', bg: 'bg-amber-100', border: 'border-amber-200' },
    { title: 'Guest Lectures', icon: Users, description: 'Inspiring talks by industry leaders and renowned academicians.', color: 'text-pink-500', bg: 'bg-pink-100', border: 'border-pink-200' },
  ];

  return (
    <section className="py-24 bg-ieee-deep relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-black text-white mb-4 uppercase tracking-widest"
          >
            Event Categories
          </motion.h2>
          <div className="w-16 h-1 bg-ieee-cyan mx-auto rounded-full" />
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
