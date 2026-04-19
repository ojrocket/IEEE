import TechFestHero from '../components/techfest/TechFestHero';
import EventCategories from '../components/techfest/EventCategories';
import TechFestSchedule from '../components/techfest/TechFestSchedule';
import FlagshipEvents from '../components/techfest/FlagshipEvents';
import { motion } from 'framer-motion';

const TechFest = () => {
  return (
    <div className="bg-[#0a0f1d] text-blue-50 font-body">
      <TechFestHero />
      
      {/* About Section (Inline for fidelity) */}
      <section className="py-24 border-t border-white/5 bg-[#0a0f1d]">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-index mx-auto"
          >
            About TechFest 2026
          </motion.h2>
          <div className="w-20 h-1 bg-[#40B2D6] mx-auto mb-10 rounded-full" />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-blue-200/60 font-medium leading-[1.8] mb-12"
          >
            Organized by IEEE SRM AP Student Branch, TechFest 2026 is the ultimate convergence of brilliant minds and cutting-edge technology. Experience 48 hours of intense coding, groundbreaking hardware showcases, and visionary talks designed to push boundaries and spark innovation.
          </motion.p>
          
          <div className="flex flex-wrap justify-center gap-16">
            {[
              { label: 'Participants', val: '500+' },
              { label: 'Institutions', val: '20+' },
              { label: 'Core Events', val: '15+' },
            ].map((stat, i) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.3 }}
                className="text-center"
              >
                <div className="text-4xl font-display font-light text-blue-50 mb-2 tracking-tight">{stat.val}</div>
                <div className="text-[#40B2D6] text-[10px] font-medium uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <EventCategories />
      <TechFestSchedule />
      <FlagshipEvents />

      {/* Registration Banner */}
      <section className="py-28 bg-[#0a0f1d] border-y border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-6xl font-light text-blue-50 mb-8 tracking-tight"
          >
            Ready to Join TechFest 2026?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-blue-200/60 mb-12 max-w-3xl mx-auto font-light"
          >
            Be part of the biggest technical extravaganza. Register now and secure your spot in this celebration of innovation and excellence.
          </motion.p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="ieee-btn-primary px-12 py-4 uppercase tracking-widest text-sm">
              Register Now
            </button>
            <button className="ieee-btn-outline px-12 py-4 uppercase tracking-widest text-sm">
              Download Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechFest;
