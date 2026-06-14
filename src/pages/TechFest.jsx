import TechFestHero from '../components/techfest/TechFestHero';
import EventCategories from '../components/techfest/EventCategories';
import TechFestSchedule from '../components/techfest/TechFestSchedule';
import FlagshipEvents from '../components/techfest/FlagshipEvents';
import { motion } from 'framer-motion';

const TechFest = () => {
  return (
    <div className="bg-[var(--bg-darkest)] text-[var(--text-ice)] font-body">
      <TechFestHero />
      
      {/* About Section */}
      <section className="py-24 border-t border-[var(--border-mid)] bg-[var(--bg-darkest)]">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label mx-auto mb-8 w-fit"
          >
            About TechFest 2026
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[var(--text-secondary-c)] font-medium leading-[1.8] mb-12"
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
                <div className="headline-display text-4xl mb-2 uppercase">{stat.val}</div>
                <div className="text-[var(--primary)] text-[10px] font-mono uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <EventCategories />
      <TechFestSchedule />
      <FlagshipEvents />

      {/* Registration Banner */}
      <section className="py-28 bg-[var(--bg-dark)] border-t border-[var(--border-mid)] relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="headline-display text-4xl md:text-6xl mb-8 uppercase"
          >
            Ready to Join TechFest 2026?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-[var(--text-secondary-c)] mb-12 max-w-3xl mx-auto font-medium"
          >
            Be part of the biggest technical extravaganza. Register now and secure your spot in this celebration of innovation and excellence.
          </motion.p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="bg-[var(--primary)] hover:bg-[var(--accent-gold)] text-[var(--bg-darkest)] px-12 py-5 text-[14px] font-bold uppercase tracking-widest transition-all w-full sm:w-auto text-center">
              Register Now
            </button>
            <button className="border-2 border-[var(--border-mid)] text-[var(--text-ice)] hover:border-[var(--primary)] px-12 py-5 text-[14px] font-bold uppercase tracking-widest transition-all w-full sm:w-auto text-center">
              Download Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechFest;
