import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Eye, Lightbulb, Users, Shield, Heart, Globe, Award } from 'lucide-react';

// ── Data (from user spec) ─────────────────────────────────
const heroStats = [
  { value: '420,000+', label: 'Global Members' },
  { value: '160+', label: 'Countries' },
  { value: '45', label: 'Technical Societies' },
  { value: '1,600+', label: 'Annual Conferences' },
];

const values = [
  { icon: Lightbulb, title: 'Innovation', desc: 'Driving technological advancement through creative thinking and cutting-edge research.' },
  { icon: Shield, title: 'Integrity', desc: 'Upholding the highest ethical standards in all professional and technical endeavors.' },
  { icon: Users, title: 'Collaboration', desc: 'Fostering partnerships and teamwork across disciplines and boundaries.' },
  { icon: Heart, title: 'Inclusion', desc: 'Embracing diversity of thought and background.' },
  { icon: Globe, title: 'Global Impact', desc: 'Creating technology solutions for pressing global challenges.' },
  { icon: Award, title: 'Excellence', desc: 'Striving for the highest quality in publications, standards, and education.' },
];

const timeline = [
  { year: '1884', event: 'Founded as the American Institute of Electrical Engineers (AIEE) by Thomas Edison and Alexander Graham Bell' },
  { year: '1963', event: 'AIEE merged with IRE to form IEEE — world\'s largest technical organization' },
  { year: '2018', event: 'IEEE SRM AP Student Branch officially established in Amaravati' },
  { year: '2024', event: 'Continuing to lead in AI, Quantum Computing, and Sustainable Energy' },
];

const societies = [
  { name: 'Computer Society', desc: 'Advancing the theory and application of computer science and IT globally' },
  { name: 'Power & Energy', desc: 'Leading power and energy system innovation and sustainability' },
  { name: 'Communications', desc: 'Telecommunications standards and groundbreaking networking technologies' },
  { name: 'Robotics & Automation', desc: 'Intelligent systems, autonomous vehicles, and industrial automation' },
  { name: 'AI & ML', desc: 'Ethical AI development, neural networks, and deep learning' },
  { name: 'Electronics', desc: 'Semiconductor technology and circuit design' },
  { name: 'Aerospace', desc: 'Space electronics, avionics, and global positioning systems' },
  { name: 'Engineering in Medicine', desc: 'Diagnostic electronics and healthcare technology' },
];

const membershipTiers = [
  { tier: 'Student', price: '$27/year', features: ['IEEE Xplore® access', 'Scholarships', 'Global network', 'Conference discounts', 'Google @IEEE mail'] },
  { tier: 'Professional', price: '$100/year', features: ['Full technical society access', 'Leadership opportunities', 'Digital library', 'IEEE Spectrum Magazine', 'CPE credits'] },
  { tier: 'Institutional', price: 'Custom', features: ['Bulk memberships', 'Corporate standards access', 'University lab resources'] },
];

// ── Main Export ──────────────────────────────────────────
export default function AboutIndex() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl"
    >
      {/* ── HERO INTRO ── */}
      <div className="mb-24">
        <span className="paren-index mb-8">ESTABLISHED_1884</span>
        <h1 className="headline-display text-[clamp(44px,7vw,84px)] mb-10">
          Global Engineering <span className="word-cyan italic">Leadership.</span>
        </h1>
        <p className="text-[16px] md:text-[18px] font-body text-[#A8C4DE] leading-relaxed max-w-3xl mb-12">
          IEEE is the world's largest technical professional organization dedicated to advancing technology for the benefit of humanity. Since our founding by Thomas Edison and Alexander Graham Bell, we've remained at the forefront of global innovation.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-1 bg-white/[0.04] border border-white/[0.04]">
          {heroStats.map((s, i) => (
            <div key={i} className="bg-[#0D1117] p-6 text-center">
              <span className="font-display text-[28px] text-[#A8C4DE] block mb-1">{s.value}</span>
              <span className="font-mono text-[9px] text-[#5a7fa8] uppercase tracking-widest">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── MISSION & VISION (FLAT ROW) ── */}
      <div className="space-y-0 mb-24 border-t border-white/[0.08]">
        <div className="flat-row group">
          <div className="flat-row-key">MISSION_DRIVE</div>
          <div className="flat-row-value">
            <h3 className="headline-display text-3xl mb-4">Advance Technology.</h3>
            <p className="text-[14px] text-[#A8C4DE] leading-relaxed">
              To foster technological innovation and excellence for the benefit of humanity. We strive to be the most essential technical community globally.
            </p>
          </div>
        </div>
        <div className="flat-row group">
          <div className="flat-row-key">VISION_HORIZON</div>
          <div className="flat-row-value">
            <h3 className="headline-display text-3xl mb-4">Universal Impact.</h3>
            <p className="text-[14px] text-[#A8C4DE] leading-relaxed">
              To be universally recognized for the contributions of technical professionals in creating technologies that benefit the world.
            </p>
          </div>
        </div>
      </div>

      {/* ── CORE VALUES ── */}
      <div className="mb-24">
        <span className="paren-index mb-8">OUR_FOUNDATIONS</span>
        <h2 className="headline-display text-5xl mb-12 uppercase">Core Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <div key={i} className="indexed-card glass-card p-8 flex gap-6">
                <div className="w-10 h-10 bg-ieee-mist rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-[#40B2D6]" />
                </div>
                <div>
                  <h4 className="font-display font-medium text-[#E2EEF9] text-lg mb-2">{v.title}</h4>
                  <p className="text-[13px] text-[#A8C4DE] leading-relaxed">{v.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── LEGACY (FLAT ROW LIST) ── */}
      <div className="mb-24">
        <span className="paren-index mb-8">HISTORIC_TIMELINE</span>
        <h2 className="headline-display text-5xl mb-12 uppercase">Our Journey</h2>
        <div className="border-t border-white/[0.08]">
          {timeline.map((m, i) => (
            <div key={i} className="flat-row items-center">
              <div className="flat-row-key text-ieee-electric font-bold">{m.year}</div>
              <div className="flat-row-value py-6">
                <p className="text-[15px] text-[#A8C4DE] leading-relaxed italic pr-12">{m.event}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── TECHNICAL SOCIETIES (FLAT ROWS) ── */}
      <div className="mb-24">
        <span className="paren-index mb-8">GLOBAL_COMMUNITIES</span>
        <h2 className="headline-display text-5xl mb-12 uppercase">Societies</h2>
        <div className="border-t border-white/[0.08]">
          {societies.slice(0, 5).map((s, i) => (
            <div key={i} className="flat-row group hover:bg-white/[0.01] transition-colors">
              <div className="flat-row-key opacity-40">ITEM_0{i + 1}</div>
              <div className="flat-row-value py-5 flex justify-between items-center group">
                <div>
                  <h4 className="font-display text-xl text-[#E2EEF9] truncate group-hover:text-ieee-electric transition-colors">{s.name}</h4>
                  <p className="text-[12px] text-[#5a7fa8] mt-1">{s.desc}</p>
                </div>
                <ArrowUpRight size={16} className="text-[#2d4a6b] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── CTA ── */}
      <div className="p-10 md:p-14 bg-[#12233b] rounded-[2rem] relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-[25rem] h-[25rem] bg-ieee-mist rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="relative z-10">
          <h3 className="headline-display text-4xl mb-6">Want to be part of the future?</h3>
          <p className="text-[15px] text-[#A8C4DE] mb-10 max-w-xl leading-relaxed">
            Whether you're a first-year exploring your interests or a final-year looking to lead — there's a place for you here at SRM AP.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="https://www.ieee.org/membership/join/index.html" target="_blank" rel="noopener noreferrer"
              className="bg-[#3C72B0] hover:bg-[#0ECAD4] text-[#E2EEF9] px-8 py-3 rounded-full text-[14px] font-body transition-all duration-250">
              Join IEEE
            </a>
            <Link to="/join" className="border border-white/10 text-[#A8C4DE] hover:border-[#40B2D6] px-8 py-3 rounded-full text-[14px] font-body transition-all duration-250">
              Membership Details
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
