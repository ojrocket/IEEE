import HackathonHero from '../components/hackathon/HackathonHero';
import Tracks from '../components/hackathon/Tracks';
import HackathonTimeline from '../components/hackathon/HackathonTimeline';
import PrizeSection from '../components/hackathon/PrizeSection';
import FAQSection from '../components/hackathon/FAQSection';
import { CheckCircle, User } from 'lucide-react';
import { motion } from 'framer-motion';

const Hackathon = () => {
  return (
    <div className="bg-[var(--bg-darkest)] text-[var(--text-ice)] font-body">
      <HackathonHero />
      
      {/* Sponsor Strip */}
      <div className="w-full bg-[var(--bg-darkest)] border-y border-[var(--border-mid)] py-10 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="text-[var(--text-muted-c)] font-mono tracking-[0.35em] text-[10px] uppercase whitespace-nowrap">
              Main Event Partners
            </div>
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-12 opacity-80 transition-all duration-700">
               {['AWS', 'Intel', 'Microsoft', 'Google', 'Cloudflare'].map(s => (
                 <span key={s} className="text-2xl font-black text-[var(--text-ice)] hover:text-[var(--primary)] transition-colors cursor-pointer uppercase font-display">{s}</span>
               ))}
            </div>
          </div>
        </div>
      </div>

      <Tracks />

      {/* Main Content Grid */}
      <section className="py-24 px-6 relative bg-[var(--bg-darkest)]">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Left Column - Timeline & Eligibility */}
            <div className="lg:col-span-4 space-y-20">
              <HackathonTimeline />
              
              <div className="solid-card p-10 border border-[var(--border-mid)] bg-[var(--bg-card)] relative overflow-hidden group">
                <span className="section-label mb-10">Eligibility</span>
                <ul className="space-y-6">
                  {[
                    'Open to all undergraduate & postgraduate students.',
                    'Teams must consist of 2 to 4 members.',
                    'Cross-college teams are permitted.',
                    'Valid college ID required for registration.'
                  ].map((text, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-[var(--accent-emerald)] mt-1 mr-4 flex-shrink-0" />
                      <span className="text-[var(--text-secondary-c)] text-sm font-medium leading-relaxed">{text}</span>
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
                  <span className="section-label mb-10">Mentors</span>
                  <div className="space-y-4">
                    {[
                      { name: 'Dr. Raj Sharma', role: 'AI Expert' },
                      { name: 'Priya Patel', role: 'Cloud Architect' }
                    ].map((m, i) => (
                       <div key={i} className="flex items-center gap-6 p-6 bg-[var(--bg-card)] border border-[var(--border-mid)] rounded-[4px] transition-all group">
                         <div className="w-14 h-14 rounded-[4px] bg-[var(--bg-darkest)] flex items-center justify-center border border-[var(--border-mid)]">
                           <User className="text-[var(--primary)]" />
                         </div>
                         <div>
                           <div className="text-[var(--text-ice)] font-bold">{m.name}</div>
                           <div className="text-[var(--primary)] text-[10px] font-mono uppercase tracking-widest mt-1">{m.role}</div>
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
