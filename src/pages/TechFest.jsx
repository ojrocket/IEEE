import TechFestHero from '../components/techfest/TechFestHero';
import EventCategories from '../components/techfest/EventCategories';
import TechFestSchedule from '../components/techfest/TechFestSchedule';
import FlagshipEvents from '../components/techfest/FlagshipEvents';
import { motion } from 'framer-motion';

const TechFest = () => {
  return (
    <div className="bg-white text-ieee-deep">
      <TechFestHero />
      
      {/* About Section (Inline for fidelity) */}
      <section className="py-24 border-t border-ieee-deep/10 bg-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-semibold text-ieee-deep mb-8 uppercase tracking-[0.16em]"
          >
            About TechFest 2026
          </motion.h2>
          <div className="w-20 h-1 bg-ieee-bright mx-auto mb-10 rounded-full" />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[#55627c] font-medium leading-[1.8] mb-12"
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
                <div className="text-4xl font-semibold text-ieee-deep mb-2 tracking-tight">{stat.val}</div>
                <div className="text-ieee-bright text-xs font-semibold uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <EventCategories />
      <TechFestSchedule />
      <FlagshipEvents />

      {/* Registration Banner */}
      <section className="py-28 bg-ieee-deep border-y border-ieee-bright/20 relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-semibold text-white mb-8 tracking-tight"
          >
            Ready to Join TechFest 2026?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/80 mb-12 max-w-3xl mx-auto font-medium"
          >
            Be part of the biggest technical extravaganza. Register now and secure your spot in this celebration of innovation and excellence.
          </motion.p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="px-12 py-4 bg-ieee-bright text-white rounded-full font-semibold text-base tracking-[0.08em] uppercase hover:bg-ieee-cyan transition-all">
              Register Now
            </button>
            <button className="px-12 py-4 bg-transparent border border-white/35 text-white rounded-full font-semibold text-base tracking-[0.08em] uppercase hover:border-ieee-cyan hover:text-ieee-cyan transition-all">
              Download Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechFest;
