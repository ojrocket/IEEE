import { motion } from 'framer-motion';

const FilterBar = ({ activeFilter, setActiveFilter }) => {
  const filters = ['all', 'workshops', 'hackathons', 'seminars', 'events'];

  return (
    <div className="flex justify-center -translate-y-1/2 relative z-50">
      <motion.div 
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="glass-pill p-2 flex gap-2 shadow-2xl hover:shadow-ieee-cyan/20 transition-all duration-700"
      >
        {filters.map((f, i) => (
          <motion.button
            key={f}
            onClick={() => setActiveFilter(f)}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative px-8 py-3 rounded-full text-sm font-bold uppercase tracking-widest transition-all overflow-hidden group"
          >
            <span className={`relative z-10 transition-colors duration-300 ${
              activeFilter === f ? 'text-white' : 'text-slate-500 group-hover:text-ieee-dark'
            }`}>
              {f}
            </span>
            {activeFilter === f && (
              <motion.div
                layoutId="activeFilter"
                className="absolute inset-0 bg-ieee-dark shadow-lg shadow-ieee-dark/20"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
};

export default FilterBar;
