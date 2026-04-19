import HackathonHero from '../components/hackathon/HackathonHero';
import Tracks from '../components/hackathon/Tracks';
import HackathonTimeline from '../components/hackathon/HackathonTimeline';
import PrizeSection from '../components/hackathon/PrizeSection';
import FAQSection from '../components/hackathon/FAQSection';
import { CheckCircle, User } from 'lucide-react';
import { motion } from 'framer-motion';

const Hackathon = () => {
  return (
    <div className="bg-[#0a0f1d] text-blue-50 font-body">
      <HackathonHero />
      
      {/* Sponsor Strip */}
      <div className="w-full bg-[#0a0f1d] border-y border-white/5 py-10 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="text-blue-200/40 font-medium tracking-[0.35em] text-[10px] uppercase whitespace-nowrap">
              Main Event Partners
            </div>
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-12 opacity-80 transition-all duration-700">
               {['AWS', 'Intel', 'Microsoft', 'Google', 'Cloudflare'].map(s => (
                 <span key={s} className="text-2xl font-bold text-blue-50 hover:text-[#40B2D6] transition-colors cursor-pointer">{s}</span>
               ))}
            </div>
          </div>
        </div>
      </div>

      <Tracks />

      {/* Main Content Grid */}
      <section className="py-24 px-6 relative bg-[#0a0f1d]">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Left Column - Timeline & Eligibility */}
            <div className="lg:col-span-4 space-y-20">
              <HackathonTimeline />
              
              <div className="p-10 rounded-[32px] glass-card border border-white/5 relative overflow-hidden group">
                <h3 className="section-index mb-10 flex items-center">
                   <span className="w-2 h-8 bg-[#40B2D6] mr-4 rounded-full" />
                   Eligibility
                </h3>
                <ul className="space-y-6">
                  {[
                    'Open to all undergraduate & postgraduate students.',
                    'Teams must consist of 2 to 4 members.',
                    'Cross-college teams are permitted.',
                    'Valid college ID required for registration.'
                  ].map((text, i) => (
                    <li key={i} className="flex items-start group/li">
                      <CheckCircle className="w-5 h-5 text-[#40B2D6] mt-1 mr-4 transition-transform" />
                      <span className="text-blue-200/60 text-sm font-medium leading-relaxed">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column - Prizes, Mentors, FAQ */}
            <div className="lg:col-span-8 space-y-24">
              <PrizeSection />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <div>
                  <h3 className="section-index mb-10 border-b border-white/5 pb-6">Mentors</h3>
                  <div className="space-y-4">
                    {[
                      { name: 'Dr. Raj Sharma', role: 'AI Expert' },
                      { name: 'Priya Patel', role: 'Cloud Architect' }
                    ].map((m, i) => (
                       <div key={i} className="flex items-center gap-6 p-6 glass-card border border-white/5 transition-all group">
                         <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 transition-transform">
                          <User className="text-[#40B2D6] transition-colors" />
                         </div>
                         <div>
                           <div className="text-blue-50 font-medium">{m.name}</div>
                           <div className="text-[#40B2D6] text-[10px] font-medium uppercase tracking-widest mt-1">{m.role}</div>
                         </div>
                      </div>
                    ))}
                  </div>
                </div>

                <FAQSection />
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Hackathon;
