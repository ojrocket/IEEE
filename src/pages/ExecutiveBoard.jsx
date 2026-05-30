import { useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, FileText, CheckCircle } from 'lucide-react';
import useIsMobile from '../hooks/useIsMobile';

gsap.registerPlugin(ScrollTrigger);

// ── Data ──────────────────────────────────────────────────
const leadership = [
  { name: 'Sneha Reddy', role: 'Branch Chairperson', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face', linkedin: '#' },
  { name: 'Rahul Sharma', role: 'Vice Chair', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face', linkedin: '#' },
  { name: 'Student Name', role: 'General Secretary', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face', linkedin: '#' },
  { name: 'Student Name', role: 'Treasurer', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face', linkedin: '#' },
];

const excomRoles = [
  {
    title: 'General Secretary',
    tagline: 'Orchestrating the strategic operations and governing the official documentation framework of the branch.',
    responsibilities: ['Maintain official records and documentation', 'Prepare & circulate meeting agendas/minutes', 'Maintain member database', 'Coordinate internal communication'],
  },
  {
    title: 'Treasurer',
    tagline: 'Managing global financial assets, overseeing budgets, and ensuring total fiscal transparency and accountability.',
    responsibilities: ['Manage financial transactions', 'Prepare budgets and financial transparency reports', 'Handle reimbursements and fundraising', 'Submit annual financial reports'],
  },
  {
    title: 'Internal Affairs',
    tagline: 'Guarding the internal integrity of the branch, fostering discipline, and optimizing core team engagement.',
    responsibilities: ['Oversee coordination and ensure discipline', 'Monitor engagement and conduct', 'Organize internal review meetings', 'Foster transparent internal collaboration'],
  },
];

const departments = [
  {
    name: 'Technical Wing',
    emoji: '🔧',
    subtitle: 'Research, Development & Innovation',
    objectives: ['Plan workshops & competitions', 'Lead R&D initiatives', 'Maintain the IEEE SRM AP website', 'Ensure quality in all technical activations'],
    members: [
      { name: 'Aryan Shah', role: 'Wing Lead', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face', linkedin: '#' },
      { name: 'Priya Dhar', role: 'Projects Coordinator', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face', linkedin: '#' },
      { name: 'Kabir Verma', role: 'Workshop Lead', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face', linkedin: '#' },
      { name: 'Riya Sen', role: 'Tech Analyst', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face', linkedin: '#' },
    ],
  },
  {
    name: 'PR & Outreach Wing',
    emoji: '🌐',
    subtitle: 'Collaborations & Global Presence',
    objectives: ['Build industrial/academic collaborations', 'Secure sponsorships', 'Drive membership campaigns', 'Manage institutional relations'],
    members: [
      { name: 'Ananya Rao', role: 'Wing Lead', img: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&h=400&fit=crop&crop=face', linkedin: '#' },
      { name: 'Arjun Das', role: 'Industry Liaison', img: 'https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=400&h=400&fit=crop&crop=face', linkedin: '#' },
      { name: 'Kavita Singh', role: 'Outreach Coordinator', img: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=400&fit=crop&crop=face', linkedin: '#' },
    ],
  },
  {
    name: 'Social Media & Marketing Wing',
    emoji: '🎨',
    subtitle: 'Creative Branding & Engagement',
    objectives: ['Execute marketing strategies', 'Manage all social media platforms', 'Enhance brand visibility across digital channels'],
    members: [
      { name: 'Kavya Reddy', role: 'Wing Lead', img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=400&fit=crop&crop=face', linkedin: '#' },
      { name: 'Arjun Das', role: 'Content Strategist', img: 'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=400&h=400&fit=crop&crop=face', linkedin: '#' },
      { name: 'Meera Joshi', role: 'Graphic Designer', img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop&crop=face', linkedin: '#' },
      { name: 'Siddharth Rao', role: 'Social Media Manager', img: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=400&h=400&fit=crop&crop=face', linkedin: '#' },
    ],
  },
  {
    name: 'Events Wing',
    emoji: '🎪',
    subtitle: 'Planning & Logistics Execution',
    objectives: ['Strategic planning, timeline management', 'Venue logistics, registration protocols', 'Volunteer supervision'],
    members: [
      { name: 'Rohan Gupta', role: 'Wing Lead', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face', linkedin: '#' },
      { name: 'Neha Sharma', role: 'Logistics Lead', img: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?w=400&h=400&fit=crop&crop=face', linkedin: '#' },
      { name: 'Vikram Singh', role: 'Hospitality Head', img: 'https://images.unsplash.com/photo-1485893086445-ed75865251e0?w=400&h=400&fit=crop&crop=face', linkedin: '#' },
    ],
  },
  {
    name: 'Podcast Wing',
    emoji: '🎙️',
    subtitle: 'Audio Storytelling & Guest Relations',
    objectives: ['Episode planning & guest coordination', 'High-fidelity audio production', 'Topic research & QA'],
    members: [
      { name: 'Siddharth M.', role: 'Wing Lead', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face', linkedin: '#' },
      { name: 'Meera Nair', role: 'Script Lead', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face', linkedin: '#' },
      { name: 'Akash Roy', role: 'Sound Engineer', img: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=400&h=400&fit=crop&crop=face', linkedin: '#' },
    ],
  },
];

const pathToLeadership = [
  { step: '01', title: 'Application', desc: 'Submit your portfolio and institutional vision statement' },
  { step: '02', title: 'Technical Screening', desc: 'Rigorous assessment of technical expertise and domain depth' },
  { step: '03', title: 'EXCOM Interview', desc: 'Final leadership round focusing on management and decision-making' },
  { step: '04', title: 'Onboarding', desc: 'Official induction into the leadership cohort with mentorship' },
];

const selectionCriteria = ['Leadership', 'Communication Skills', 'Commitment', 'Teamwork', 'IEEE Knowledge'];

// ── Member Card ───────────────────────────────────────────
function MemberCard({ member, size = 'default' }) {
  const isLarge = size === 'large';
  return (
    <div className="group relative overflow-hidden cursor-default transition-all duration-500 border border-[var(--border-mid)] bg-[var(--bg-dark)]">
      <div className={`relative overflow-hidden ${isLarge ? 'aspect-[3/4.5]' : 'aspect-square'}`}>
        <img src={member.img} alt={member.name} className="w-full h-full object-cover filter grayscale transition-transform duration-700 group-hover:scale-105 group-hover:grayscale-0" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-darkest)] via-transparent to-transparent opacity-90" />
        <a href={member.linkedin} target="_blank" rel="noopener noreferrer"
          className="absolute top-4 right-4 w-10 h-10 bg-[var(--bg-darkest)] border border-[var(--border-mid)] flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:border-[var(--primary)] text-[var(--text-muted-c)] hover:text-[var(--primary)]"
          onClick={e => e.stopPropagation()}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
        </a>
        <div className="absolute bottom-0 left-0 right-0 p-6 z-10 border-t border-[var(--border-mid)] bg-[var(--bg-darkest)]/80 backdrop-blur-sm">
          <h3 className={`font-display font-black text-[var(--text-ice)] leading-tight mb-2 uppercase ${isLarge ? 'text-[24px]' : 'text-[18px]'}`}>{member.name}</h3>
          <p style={{ fontFamily: 'Chivo Mono' }} className="text-[11px] font-bold uppercase tracking-widest text-[var(--primary)]">{member.role}</p>
        </div>
      </div>
    </div>
  );
}

// ── Main Export ──────────────────────────────────────────
export default function ExecutiveBoard() {
  const container = useRef(null);
  const { isMobile } = useIsMobile();

  useGSAP(() => {
    let mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.fromTo('.board-hero', { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out' });
      gsap.fromTo('.leadership-card', { y: 60, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.7, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: '.leadership-grid', start: 'top 85%' }
      });
    });
    return () => mm.revert();
  }, { scope: container, dependencies: [isMobile] });

  return (
    <div ref={container} className="bg-[var(--bg-darkest)] min-h-screen text-[var(--text-ice)]">

      {/* ── HERO ── */}
      <section className="pt-48 pb-20 px-8 md:px-16 lg:px-24">
        <div className="board-hero max-w-7xl mx-auto border-l-4 border-[var(--primary)] pl-8">
          <span className="section-label mb-8">Executive Committee</span>
          <h1 className="headline-display mb-10">
            Executive<br /><span className="text-[var(--primary)] italic">Board.</span>
          </h1>
          <p className="text-[18px] md:text-[22px] font-bold text-[var(--text-secondary-c)] max-w-3xl leading-snug mb-12">
            Architects of Innovation. Meet the visionary minds steering IEEE SRM AP towards a future of technical excellence and global impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <a href="#leadership-grid" className="bg-[var(--primary)] hover:bg-[var(--accent-gold)] text-[var(--bg-darkest)] px-10 py-5 text-[14px] font-bold uppercase tracking-widest transition-all text-center">
              Board Directory
            </a>
            <a href="https://www.ieee.org" target="_blank" rel="noopener noreferrer" className="border-2 border-[var(--border-mid)] text-[var(--text-ice)] hover:border-[var(--primary)] px-10 py-5 text-[14px] font-bold uppercase tracking-widest transition-all text-center">
              Join Leadership
            </a>
          </div>
        </div>
      </section>

      {/* ── CORE LEADERSHIP ── */}
      <section id="leadership-grid" className="px-8 md:px-16 lg:px-24 pb-32">
        <div className="max-w-7xl mx-auto">
          <span className="section-label mb-10 text-[var(--primary)]">Core Team</span>
          <div className="leadership-grid technical-grid">
            {leadership.map((member, i) => (
              <div key={i} className="leadership-card">
                <MemberCard member={member} size="large" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXCOM ROLES ── */}
      <section className="px-8 md:px-16 lg:px-24 pb-32 border-t border-[var(--border-mid)] pt-32 bg-[var(--bg-dark)]">
        <div className="max-w-7xl mx-auto">
          <div className="flat-row">
             <div className="flat-row-key">Governance</div>
             <div className="flat-row-value">
                <h2 className="headline-display text-[clamp(44px,6vw,72px)] mb-12 uppercase">EXCOM Roles</h2>
                <div className="technical-grid">
                  {excomRoles.map((role, i) => (
                    <div key={i} className="p-10 bg-[var(--bg-card)] border border-[var(--border-mid)] hover:border-[var(--primary)] transition-all">
                      <h3 className="font-display text-[28px] font-black text-[var(--text-ice)] mb-4 uppercase">{role.title}</h3>
                      <p className="text-[16px] font-medium text-[var(--text-secondary-c)] mb-8 leading-relaxed italic border-l-2 border-[var(--border-mid)] pl-4">{role.tagline}</p>
                      <ul className="space-y-4">
                        {role.responsibilities.slice(0, 3).map((r, j) => (
                          <li key={j} className="flex items-start gap-3 text-[14px] font-bold text-[var(--text-muted-c)] uppercase tracking-wide">
                            <span className="text-[var(--primary)] mt-1">→</span> {r}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* ── DEPARTMENTS ── */}
      <section className="px-8 md:px-16 lg:px-24 pb-32 border-t border-[var(--border-mid)] pt-32 bg-[var(--bg-darkest)]">
         <div className="max-w-7xl mx-auto">
           <span className="section-label mb-16">Departments</span>
           {departments.map((dept, di) => (
             <div key={di} className="mb-24 last:mb-0">
                <div className="flex justify-between items-end mb-10 border-b border-[var(--border-mid)] pb-6">
                   <div>
                     <h2 className="headline-display text-[clamp(36px,5vw,60px)] uppercase">{dept.name}</h2>
                     <p style={{ fontFamily: 'Chivo Mono' }} className="text-[13px] font-bold text-[var(--primary)] mt-3 uppercase tracking-widest">{dept.subtitle}</p>
                   </div>
                   <span className="text-4xl opacity-40 grayscale">{dept.emoji}</span>
                </div>
                <div className="technical-grid">
                   {dept.members.map((member, mi) => (
                     <MemberCard key={mi} member={member} />
                   ))}
                </div>
             </div>
           ))}
         </div>
      </section>

      {/* ── PATH TO LEADERSHIP ── */}
      <section className="px-8 md:px-16 lg:px-24 py-32 bg-[var(--bg-dark)] border-t border-[var(--border-mid)]">
        <div className="max-w-7xl mx-auto">
          <span className="section-label mb-10">Get Involved</span>
          <h2 className="headline-display text-[clamp(44px,6vw,72px)] mb-12 uppercase">Path to Leadership</h2>

          <div className="technical-grid">
            {pathToLeadership.map((step, i) => (
              <div key={i} className="bg-[var(--bg-card)] p-10 relative group border border-[var(--border-mid)] hover:bg-[var(--bg-surface)]">
                <span style={{ fontFamily: 'Chivo Mono' }} className="text-[12px] font-bold text-[var(--primary)] border border-[var(--primary)] px-2 py-1 absolute top-8 left-8">{step.step}</span>
                <div className="mt-16">
                  <h4 className="font-display text-[22px] font-black text-[var(--text-ice)] mb-4 uppercase group-hover:text-[var(--primary)] transition-colors">{step.title}</h4>
                  <p className="text-[16px] font-medium text-[var(--text-secondary-c)] leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
