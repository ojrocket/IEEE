import { motion } from 'framer-motion';

const ExploreHero = () => {
  return (
    <section className="min-h-[82vh] flex items-center justify-center relative pt-28 pb-14 overflow-hidden bg-[#0a0f1d] border-b border-white/5 font-body">

      <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, ease: "circOut" }}
          className="w-24 h-1 bg-[#40B2D6] mx-auto mb-10 rounded-full" 
        />
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-display text-5xl md:text-8xl font-light text-blue-50 mb-8 tracking-tight leading-tight"
        >
          IEEE Xplore <br />
          <span className="text-[#40B2D6] italic">Digital Library</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-xl md:text-2xl text-blue-200/60 mb-14 font-light leading-relaxed max-w-3xl mx-auto"
        >
          Unlock the world's highest-quality technical literature in engineering, computer science, and technology. Empower your academic research and projects with unlimited access.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a 
            href="https://ieeexplore.ieee.org" 
            target="_blank"
            rel="noopener noreferrer"
            className="ieee-btn-primary px-12 py-4 uppercase tracking-widest text-xs"
          >
            Access Now
          </a>
          <button className="ieee-btn-outline px-12 py-4 uppercase tracking-widest text-xs">
            Learn How to Use
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ExploreHero;
