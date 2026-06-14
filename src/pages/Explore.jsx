import ExploreHero from '../components/explore/ExploreHero';
import ExploreIntro from '../components/explore/ExploreIntro';
import XploreBenefits from '../components/explore/XploreBenefits';
import AccessSteps from '../components/explore/AccessSteps';
import ResearchWorkflow from '../components/explore/ResearchWorkflow';
import { motion } from 'framer-motion';
import { Plus, Users, Globe, ShieldCheck, FileText } from 'lucide-react';

const Explore = () => {
  return (
    <div className="bg-[var(--bg-darkest)] text-[var(--text-ice)] font-body">
      <ExploreHero />
      <ExploreIntro />
      <XploreBenefits />
      <AccessSteps />
      <ResearchWorkflow />

      {/* Research Support Section */}
      <section className="py-24 bg-[var(--bg-darkest)] border-t border-[var(--border-mid)]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-label mx-auto mb-8 w-fit"
            >
              Research Support
            </motion.div>
            <p className="text-[var(--text-secondary-c)] font-medium uppercase tracking-widest text-[10px] mt-8 max-w-2xl mx-auto">
              Our student branch provides continuous assistance for students aiming to leverage academic research resources efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Paper Writing Workshops', desc: 'Monthly sessions covering manuscript structuring, abstract drafting, and publishing ethics.', icon: Plus },
              { title: 'Research Mentorship', desc: 'Collaborate with senior members and faculty to structure your domain-specific research.', icon: Users },
              { title: 'Conference Participation', desc: 'Guidance on submitting papers to major IEEE international conferences and symposiums.', icon: Globe },
              { title: 'Plagiarism Checks', desc: 'Assistance in validating the originality of your papers using university-approved checker tools.', icon: ShieldCheck },
              { title: 'Citation Formatting', desc: 'Training on proper IEEE citation styles and bibliography generation techniques.', icon: FileText },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 border border-[var(--border-mid)] bg-[var(--bg-card)] rounded-[4px] flex items-start gap-6 group transition-all duration-500 hover:border-[var(--primary)]"
                >
                  <div className="w-12 h-12 rounded-[4px] bg-[var(--bg-darkest)] border border-[var(--border-mid)] flex items-center justify-center shrink-0 transition-transform group-hover:scale-110">
                    <Icon className="w-5 h-5 text-[var(--primary)]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-black text-[var(--text-ice)] mb-2 tracking-tight transition-colors group-hover:text-[var(--primary)] uppercase">{item.title}</h4>
                    <p className="text-[var(--text-secondary-c)] text-[11px] font-medium leading-relaxed uppercase tracking-wider">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-28 bg-[var(--bg-dark)] border-t border-[var(--border-mid)] relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="headline-display text-4xl md:text-6xl mb-8 uppercase"
          >
            Start Exploring Research Today
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-[var(--text-secondary-c)] mb-12 max-w-2xl mx-auto font-medium"
          >
            Ignite your ideas, review the latest innovations, and push the boundaries of technology with comprehensive academic resources.
          </motion.p>
          
          <a 
            href="https://ieeexplore.ieee.org" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[var(--primary)] hover:bg-[var(--accent-gold)] text-[var(--bg-darkest)] inline-block px-12 py-5 text-[14px] font-bold uppercase tracking-widest transition-all text-center"
          >
            Visit IEEE Xplore Library
          </a>
        </div>
      </section>
    </div>
  );
};

export default Explore;
