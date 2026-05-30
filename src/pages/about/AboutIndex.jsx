import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Eye, Lightbulb, Users, Shield, Heart, Globe, Award, ArrowUpRight } from 'lucide-react';

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
        <span className="section-label mb-8">Est. 1884</span>
        <h1 className="headline-display text-[clamp(44px,7vw,84px)] mb-10">
          Global Engineering <span className="text-[var(--primary)] italic">Leadership.</span>
        </h1>
        <p className="text-[18px] md:text-[22px] font-bold text-[var(--text-secondary-c)] leading-snug max-w-3xl mb-12 border-l-4 border-[var(--primary)] pl-6">
          IEEE is the world's largest technical professional organization dedicated to advancing technology for the benefit of humanity. Since our founding by Thomas Edison and Alexander Graham Bell, we've remained at the forefront of global innovation.
        </p>

        <div className="technical-grid">
          {heroStats.map((s, i) => (
            <div key={i} className="bg-[var(--bg-card)] p-8 text-left border border-[var(--border-mid)] hover:border-[var(--primary)] transition-all">
              <span className="font-display font-black text-[32px] text-[var(--text-ice)] block mb-2">{s.value}</span>
              <span style={{ fontFamily: 'Chivo Mono' }} className="text-[12px] font-bold text-[var(--primary)] uppercase tracking-widest">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── MISSION & VISION (FLAT ROW) ── */}
      <div className="space-y-0 mb-24 border-t border-[var(--border-mid)] pt-12">
        <div className="flat-row group border-b border-[var(--border-mid)] pb-12 mb-12">
          <div className="flat-row-key">Mission</div>
          <div className="flat-row-value">
            <h3 className="font-display text-[32px] font-black uppercase mb-6 text-[var(--text-ice)]">Advance Technology.</h3>
            <p className="text-[16px] font-medium text-[var(--text-secondary-c)] leading-relaxed">
              To foster technological innovation and excellence for the benefit of humanity. We strive to be the most essential technical community globally.
            </p>
          </div>
        </div>
        <div className="flat-row group">
          <div className="flat-row-key">Vision</div>
          <div className="flat-row-value">
            <h3 className="font-display text-[32px] font-black uppercase mb-6 text-[var(--text-ice)]">Universal Impact.</h3>
            <p className="text-[16px] font-medium text-[var(--text-secondary-c)] leading-relaxed">
              To be universally recognized for the contributions of technical professionals in creating technologies that benefit the world.
            </p>
          </div>
        </div>
      </div>

      {/* ── CORE VALUES ── */}
      <div className="mb-24">
        <span className="section-label mb-8 text-[var(--primary)]">What We Stand For</span>
        <h2 className="headline-display text-[clamp(36px,5vw,60px)] mb-12 uppercase text-[var(--text-ice)]">Core Values</h2>
        <div className="technical-grid">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <div key={i} className="bg-[var(--bg-card)] p-8 flex flex-col gap-6 border border-[var(--border-mid)] hover:border-[var(--primary)] transition-all">
                <div className="w-12 h-12 bg-[var(--bg-darkest)] border border-[var(--border-mid)] flex items-center justify-center flex-shrink-0">
                  <Icon size={24} className="text-[var(--primary)]" />
                </div>
                <div>
                  <h4 className="font-display font-black text-[var(--text-ice)] text-[22px] mb-3 uppercase">{v.title}</h4>
                  <p className="text-[15px] font-medium text-[var(--text-secondary-c)] leading-relaxed">{v.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── LEGACY (FLAT ROW LIST) ── */}
      <div className="mb-24">
        <span className="section-label mb-8">Timeline</span>
        <h2 className="headline-display text-[clamp(36px,5vw,60px)] mb-12 uppercase text-[var(--text-ice)]">Our Journey</h2>
        <div className="border-t border-[var(--border-mid)]">
          {timeline.map((m, i) => (
            <div key={i} className="flat-row items-center border-b border-[var(--border-mid)] py-8 group hover:bg-[var(--bg-dark)] px-4 transition-colors">
              <div className="flat-row-key text-[var(--primary)] font-bold text-[18px]">{m.year}</div>
              <div className="flat-row-value">
                <p className="text-[16px] font-medium text-[var(--text-ice)] leading-relaxed pr-12 group-hover:text-[var(--primary)] transition-colors">{m.event}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── TECHNICAL SOCIETIES (FLAT ROWS) ── */}
      <div className="mb-24">
        <span className="section-label mb-8">Communities</span>
        <h2 className="headline-display text-[clamp(36px,5vw,60px)] mb-12 uppercase text-[var(--text-ice)]">Societies</h2>
        <div className="border-t border-[var(--border-mid)]">
          {societies.slice(0, 5).map((s, i) => (
            <div key={i} className="flat-row group hover:bg-[var(--bg-dark)] px-4 transition-colors border-b border-[var(--border-mid)] py-8">
              <div className="flat-row-key opacity-40 text-[14px]">0{i + 1}</div>
              <div className="flat-row-value flex justify-between items-center group">
                <div>
                  <h4 className="font-display font-black text-[22px] text-[var(--text-ice)] truncate group-hover:text-[var(--primary)] transition-colors uppercase mb-2">{s.name}</h4>
                  <p className="text-[14px] font-medium text-[var(--text-secondary-c)] mt-1">{s.desc}</p>
                </div>
                <ArrowUpRight size={24} className="text-[var(--text-muted-c)] opacity-0 group-hover:opacity-100 group-hover:text-[var(--primary)] transition-all" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── CTA ── */}
      <div className="p-10 md:p-16 bg-[var(--primary)] border-[8px] border-[var(--bg-card)] relative overflow-hidden group">
        <div className="absolute inset-0 z-[1] pointer-events-none opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle, var(--bg-darkest) 2px, transparent 2px)',
            backgroundSize: '24px 24px',
          }}
        />
        <div className="relative z-10">
          <h3 className="headline-display text-[40px] md:text-[56px] mb-8 text-[var(--bg-darkest)] uppercase">Want to be part of the future?</h3>
          <p className="text-[18px] font-medium text-[var(--bg-darkest)] mb-12 max-w-xl leading-relaxed">
            Whether you're a first-year exploring your interests or a final-year looking to lead — there's a place for you here at SRM AP.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <a href="https://www.ieee.org/membership/join/index.html" target="_blank" rel="noopener noreferrer"
              className="bg-[var(--bg-darkest)] text-[var(--text-ice)] hover:bg-white hover:text-[var(--bg-darkest)] px-10 py-5 text-[14px] font-bold uppercase tracking-widest transition-all text-center">
              Join IEEE
            </a>
            <Link to="/join" className="border-2 border-[var(--bg-darkest)] text-[var(--bg-darkest)] hover:bg-[var(--bg-darkest)] hover:text-[var(--text-ice)] px-10 py-5 text-[14px] font-bold uppercase tracking-widest transition-all text-center">
              Membership Details
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
