import { motion } from 'framer-motion';

const GalleryHero = () => {
  return (
    <section className="bg-[#0D1117] pt-48 pb-24 px-6 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="paren-index mb-8"
        >
          IEEE_SRM_AP // CHRONICLE_VAULT
        </motion.div>
        
        <h1 className="headline-display mb-10">
          Capture the <span className="word-cyan italic">Legacy.</span>
        </h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[16px] md:text-[18px] font-body text-[#A8C4DE] max-w-xl leading-relaxed"
        >
          Capturing innovation, groundbreaking events, and community milestones within our student branch.
        </motion.p>
      </div>

      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-ieee-mist rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none opacity-20" />
    </section>
  );
};

export default GalleryHero;
