import { motion } from 'framer-motion';

const GalleryHero = () => {
  return (
    <section className="bg-[#0a0f1d] pt-36 pb-24 px-6 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="section-index mb-8"
        >
          IEEE SRM AP 24'
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-[clamp(52px,8vw,120px)] font-light tracking-tight leading-none mb-6 text-blue-50"
        >
          IEEE Gallery
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[17px] md:text-[20px] font-body text-blue-200/60 max-w-xl leading-relaxed"
        >
          Capturing Innovation, Events, and Achievements within our engineering community.
        </motion.p>
      </div>

      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-ieee-bright/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
    </section>
  );
};

export default GalleryHero;
