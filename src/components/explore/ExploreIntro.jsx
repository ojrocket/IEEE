import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const ExploreIntro = () => {
  return (
    <section className="py-24 bg-[#0a0f1d] overflow-hidden font-body">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div>
              <h2 className="text-4xl font-light text-blue-50 mb-6 uppercase tracking-tight font-display">What is IEEE Xplore?</h2>
              <div className="w-16 h-1 bg-[#40B2D6] rounded-full" />
            </div>
            
            <p className="text-xl text-blue-200/60 leading-relaxed font-light">
              IEEE Xplore is the premier research database for discovery and access to scientific and technical content published by the IEEE and its global partners.
            </p>

            <ul className="space-y-6">
              {[
                'Over 5+ million full-text technical documents.',
                'Latest IEEE Journals, Magazines, and Conference Proceedings.',
                'Access to highly cited standards and technical specifications.'
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-5 group">
                  <div className="flex-shrink-0 w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center text-[#40B2D6] border border-white/10 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <span className="text-blue-200/40 font-medium group-hover:text-blue-50 transition-all">{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative p-10 glass-card rounded-[40px] border border-white/5 w-full max-w-md shadow-2xl group overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-[#3C72B0]/10 blur-3xl -z-10" />
               <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#40B2D6]/10 blur-3xl -z-10" />
               
               {/* Abstract UI Illustration */}
               <div className="space-y-6 relative z-10">
                  <div className="h-2 w-1/3 bg-white/5 rounded-full animate-pulse" />
                  <div className="h-12 w-full bg-white/5 rounded-2xl flex items-center px-6 gap-4 border border-white/5">
                     <div className="w-4 h-4 rounded-full border-2 border-white/20" />
                     <div className="h-2 w-1/2 bg-white/10 rounded-full" />
                  </div>
                  <div className="grid grid-cols-2 gap-6 pt-6">
                     <div className="h-40 bg-white/5 rounded-3xl border border-white/5 p-6 space-y-4 group-hover:bg-[#3C72B0]/5 transition-colors">
                        <div className="h-2 w-3/4 bg-[#3C72B0]/40 rounded-full" />
                        <div className="h-2 w-full bg-white/10 rounded-full" />
                        <div className="h-2 w-5/6 bg-white/10 rounded-full" />
                     </div>
                     <div className="h-40 bg-white/5 rounded-3xl border border-white/5 p-6 space-y-4 group-hover:bg-[#40B2D6]/5 transition-colors">
                        <div className="h-2 w-3/4 bg-[#40B2D6]/40 rounded-full" />
                        <div className="h-2 w-full bg-white/10 rounded-full" />
                        <div className="h-2 w-1/2 bg-white/10 rounded-full" />
                     </div>
                  </div>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExploreIntro;
