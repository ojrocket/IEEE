import { motion } from 'framer-motion';

const ExploreHero = () => {
  return (
    <section className="min-h-[82vh] flex items-center justify-center relative pt-28 pb-14 overflow-hidden bg-ieee-light border-b border-ieee-deep/10">

      <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, ease: "circOut" }}
          className="w-24 h-1 bg-ieee-bright mx-auto mb-10 rounded-full" 
        />
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-8xl font-semibold text-ieee-deep mb-8 tracking-tight leading-tight"
        >
          IEEE Xplore <br />
          <span className="text-ieee-bright italic">Digital Library</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-xl md:text-2xl text-[#55627b] mb-14 font-light leading-relaxed max-w-3xl mx-auto"
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
            className="px-12 py-4 bg-ieee-bright text-ieee-beige rounded-full font-semibold text-sm uppercase tracking-[0.12em] border border-ieee-bright hover:bg-ieee-cyan transition-all"
          >
            Access Now
          </a>
          <button className="px-12 py-4 bg-transparent text-ieee-deep rounded-full font-semibold text-sm uppercase tracking-[0.12em] border border-ieee-deep/25 hover:border-ieee-bright transition-all">
            Learn How to Use
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ExploreHero;
