import { motion } from 'framer-motion';

const GalleryHero = () => {
  return (
    <section className="bg-ieee-light pt-36 pb-24 px-6 relative overflow-hidden border-b border-ieee-deep/10">
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="inline-block px-4 py-1.5 bg-ieee-beige border border-ieee-deep/15 rounded-full text-[10px] font-semibold tracking-[0.2em] text-ieee-bright uppercase mb-8"
        >
          IEEE SRM AP 24'
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-6xl md:text-8xl font-semibold text-ieee-deep mb-6 tracking-tighter"
        >
          IEEE Gallery
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-[#56627a] max-w-xl font-light leading-relaxed"
        >
          Capturing Innovation, Events, and Achievements within our engineering community.
        </motion.p>
      </div>

      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-ieee-bright/8 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
    </section>
  );
};

export default GalleryHero;
