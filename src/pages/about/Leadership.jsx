import { useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import useIsMobile from '../../hooks/useIsMobile';

gsap.registerPlugin(ScrollTrigger);

// ── Data (from user spec) ─────────────────────────────────
const leaders = [
  { name: 'Dr. Rajesh Kumar', role: 'Faculty Advisor', dept: 'Electrical Engineering', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face', linkedin: '#' },
  { name: 'Sneha Reddy', role: 'Branch Chairperson', dept: 'Computer Science', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face', linkedin: '#' },
  { name: 'Rahul Sharma', role: 'Vice Chair', dept: 'Electronics & Communication', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face', linkedin: '#' },
  { name: 'Student Name', role: 'General Secretary', dept: 'Computer Science', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face', linkedin: '#' },
  { name: 'Student Name', role: 'Treasurer', dept: 'Mechanical Engineering', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face', linkedin: '#' },
  { name: 'Student Name', role: 'Webmaster', dept: 'Computer Science', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face', linkedin: '#' },
];

const pastLeaders = [
  { year: '2024–2025', name: 'Previous Chairperson', desc: 'Led rapid growth, establishing new chapters and industry partnerships.' },
  { year: '2023–2024', name: 'Previous Chairperson', desc: 'Expanded event portfolio and increased member engagement across societies.' },
  { year: '2022–2023', name: 'Founding Chairperson', desc: 'Established the branch, set up initial chapter structure, and organized first flagship events.' },
];

const leadershipValues = [
  { title: 'Member-First', desc: 'Every decision prioritizes the growth, learning, and experience of our members.' },
  { title: 'Transparency', desc: 'Open communication, transparent decision-making, and inclusive governance.' },
  { title: 'Innovation', desc: 'Continuously pushing boundaries, trying new formats, and embracing excellence.' },
];

// ── Main Export ──────────────────────────────────────────
export default function Leadership() {
  const container = useRef(null);
  const { isMobile } = useIsMobile();

  useGSAP(() => {
    let mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.fromTo('.leader-card',
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: isMobile ? 0.4 : 0.6, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: '.leadership-grid', start: isMobile ? 'top 95%' : 'top 80%' }
        }
      );
    });
    return () => mm.revert();
  }, { scope: container, dependencies: [isMobile] });

  return (
    <div ref={container} className="max-w-5xl touch-pan-y">
      {/* ── HEADER ── */}
      <span className="section-label mb-6">2025–2026 Term</span>
      <h1 className="headline-display mb-10">
        Our <span className="text-[var(--primary)] italic">Leadership.</span>
      </h1>
      <p className="text-[18px] md:text-[22px] font-bold text-[var(--text-secondary-c)] max-w-2xl leading-snug mb-20 border-l-4 border-[var(--primary)] pl-6">
        The leaders who have shaped and continue to drive IEEE SRM AP forward.
      </p>

      {/* ── CURRENT LEADERS ── */}
      <div className="technical-grid leadership-grid mb-16">
        {leaders.map((leader, i) => (
          <div key={i} className="leader-card group relative overflow-hidden cursor-default transition-all duration-500 bg-[var(--bg-card)] border border-[var(--border-mid)]">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img src={leader.img} alt={leader.name} className="w-full h-full object-cover filter grayscale transition-transform duration-700 group-hover:scale-105 group-hover:grayscale-0" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-darkest)] via-transparent to-transparent opacity-90 transition-opacity duration-500" />
              <a href={leader.linkedin} target="_blank" rel="noopener noreferrer"
                className="absolute top-4 right-4 w-10 h-10 bg-[var(--bg-darkest)] border border-[var(--border-mid)] flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 text-[var(--text-muted-c)] hover:text-[var(--primary)] hover:border-[var(--primary)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10 border-t border-[var(--border-mid)] bg-[var(--bg-darkest)]/80 backdrop-blur-sm">
                <h3 className="font-display font-black text-[22px] text-[var(--text-ice)] leading-tight mb-2 uppercase">{leader.name}</h3>
                <p style={{ fontFamily: 'Chivo Mono' }} className="text-[11px] font-bold uppercase tracking-widest text-[var(--primary)] mb-1">{leader.role}</p>
                <p style={{ fontFamily: 'Chivo Mono' }} className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted-c)]">{leader.dept}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── PAST LEADERS ── */}
      <div className="mb-16">
        <span className="section-label mb-8">Legacy</span>
        <h2 className="headline-display text-[clamp(36px,6vw,60px)] mb-12 uppercase text-[var(--text-ice)]">Past Leaders</h2>
        <div className="relative pl-8 border-l-[4px] border-[var(--border-mid)]">
          {pastLeaders.map((l, i) => (
            <div key={i} className="relative mb-12 last:mb-0 group">
              <div className="absolute -left-[38px] top-1 w-6 h-6 rounded-none bg-[var(--bg-darkest)] border-4 border-[var(--border-mid)] group-hover:border-[var(--primary)] transition-colors duration-300" />
              <span style={{ fontFamily: 'Chivo Mono' }} className="text-[14px] font-bold text-[var(--primary)] uppercase tracking-widest block mb-2">{l.year}</span>
              <h4 className="font-display text-[24px] font-black text-[var(--text-ice)] uppercase mb-3">{l.name}</h4>
              <p className="text-[16px] font-medium text-[var(--text-secondary-c)] leading-relaxed">{l.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── LEADERSHIP VALUES ── */}
      <div className="mb-16">
        <span className="section-label mb-8">What Drives Us</span>
        <h2 className="headline-display text-[clamp(36px,6vw,60px)] mb-12 uppercase text-[var(--text-ice)]">Leadership Values</h2>
        <div className="technical-grid">
          {leadershipValues.map((v, i) => (
            <div key={i} className="p-8 bg-[var(--bg-card)] border border-[var(--border-mid)] hover:border-[var(--primary)] transition-all duration-300 text-left">
              <h4 className="font-display font-black text-[22px] text-[var(--text-ice)] uppercase mb-4">{v.title}</h4>
              <p className="text-[15px] font-medium text-[var(--text-secondary-c)] leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── CTA ── */}
      <div className="p-10 md:p-14 bg-[var(--primary)] border-[8px] border-[var(--bg-card)] relative overflow-hidden group text-left">
        <div className="absolute inset-0 z-[1] pointer-events-none opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle, var(--bg-darkest) 2px, transparent 2px)',
            backgroundSize: '24px 24px',
          }}
        />
        <div className="relative z-10">
          <h3 className="headline-display text-[40px] md:text-[56px] mb-6 text-[var(--bg-darkest)] uppercase">Ready to Lead?</h3>
          <p className="text-[18px] font-medium text-[var(--bg-darkest)] mb-10 max-w-xl leading-relaxed">Join IEEE SRM AP and build your path to leadership.</p>
          <div className="flex flex-col sm:flex-row gap-6">
            <a href="https://www.ieee.org/membership/join/index.html" target="_blank" rel="noopener noreferrer"
              className="bg-[var(--bg-darkest)] text-[var(--text-ice)] hover:bg-white hover:text-[var(--bg-darkest)] px-10 py-5 text-[14px] font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-3">
              Join IEEE SRM AP <ArrowRight size={18} />
            </a>
            <Link to="/executive-board"
              className="border-2 border-[var(--bg-darkest)] text-[var(--bg-darkest)] hover:bg-[var(--bg-darkest)] hover:text-[var(--text-ice)] px-10 py-5 text-[14px] font-bold uppercase tracking-widest transition-all flex items-center justify-center">
              Full Team
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
