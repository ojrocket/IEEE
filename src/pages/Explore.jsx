import ExploreHero from '../components/explore/ExploreHero';
import ExploreIntro from '../components/explore/ExploreIntro';
import XploreBenefits from '../components/explore/XploreBenefits';
import AccessSteps from '../components/explore/AccessSteps';
import ResearchWorkflow from '../components/explore/ResearchWorkflow';
import { motion } from 'framer-motion';
import { Plus, Users, Globe, ShieldCheck, FileText } from 'lucide-react';

const Explore = () => {
  return (
    <div className="bg-[#0a0f1d] text-blue-50 font-body">
      <ExploreHero />
      <ExploreIntro />
      <XploreBenefits />
      <AccessSteps />
      <ResearchWorkflow />

      {/* Research Support Section */}
      <section className="py-24 bg-[#0a0f1d] border-t border-white/5">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-index mx-auto"
            >
              Research Support
            </motion.h2>
            <div className="w-16 h-1 bg-[#40B2D6] mx-auto rounded-full" />
            <p className="text-blue-200/40 font-medium uppercase tracking-widest text-[10px] mt-8 max-w-2xl mx-auto">
              Our student branch provides continuous assistance for students aiming to leverage academic research resources efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Paper Writing Workshops', desc: 'Monthly sessions covering manuscript structuring, abstract drafting, and publishing ethics.', icon: Plus, color: 'text-[#40B2D6] bg-white/5 border-white/10' },
              { title: 'Research Mentorship', desc: 'Collaborate with senior members and faculty to structure your domain-specific research.', icon: Users, color: 'text-[#40B2D6] bg-white/5 border-white/10' },
              { title: 'Conference Participation', desc: 'Guidance on submitting papers to major IEEE international conferences and symposiums.', icon: Globe, color: 'text-[#40B2D6] bg-white/5 border-white/10' },
              { title: 'Plagiarism Checks', desc: 'Assistance in validating the originality of your papers using university-approved checker tools.', icon: ShieldCheck, color: 'text-[#40B2D6] bg-white/5 border-white/10' },
              { title: 'Citation Formatting', desc: 'Training on proper IEEE citation styles and bibliography generation techniques.', icon: FileText, color: 'text-[#40B2D6] bg-white/5 border-white/10' },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-[28px] glass-card border border-white/10 flex items-start gap-6 group transition-all duration-500"
                >
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border transition-transform group-hover:scale-110 ${item.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-blue-50 mb-2 tracking-tight transition-colors group-hover:text-[#40B2D6]">{item.title}</h4>
                    <p className="text-blue-200/60 text-[10px] font-medium leading-relaxed uppercase tracking-wider">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-28 bg-[#0a0f1d] border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-6xl font-light text-blue-50 mb-8 tracking-tight"
          >
            Start Exploring Research Today
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-blue-200/60 mb-12 max-w-2xl mx-auto font-light"
          >
            Ignite your ideas, review the latest innovations, and push the boundaries of technology with comprehensive academic resources.
          </motion.p>
          
          <a 
            href="https://ieeexplore.ieee.org" 
            target="_blank"
            rel="noopener noreferrer"
            className="ieee-btn-primary inline-block px-12 py-4 uppercase tracking-widest text-xs"
          >
            Visit IEEE Xplore Library
          </a>
        </div>
      </section>
    </div>
  );
};

export default Explore;
