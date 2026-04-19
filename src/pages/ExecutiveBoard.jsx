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
    <div className="indexed-card group relative overflow-hidden cursor-default transition-all duration-500">
      <div className={`relative overflow-hidden ${isLarge ? 'aspect-[3/4]' : 'aspect-square'}`}>
        <img src={member.img} alt={member.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1d] via-[#0a0f1d]/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
        <a href={member.linkedin} target="_blank" rel="noopener noreferrer"
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-[#0A66C2] hover:border-[#0A66C2]"
          onClick={e => e.stopPropagation()}>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-white"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
        </a>
        <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
          <h3 className={`text-editorial font-medium text-blue-50 leading-none mb-2 ${isLarge ? 'text-[32px]' : 'text-[22px]'}`}>{member.name}</h3>
          <p className="text-mono-label text-ieee-cyan">{member.role}</p>
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
      gsap.utils.toArray('.dept-section').forEach((section) => {
        const cards = section.querySelectorAll('.member-card');
        if (cards.length > 0) {
          gsap.fromTo(cards, { y: 50, opacity: 0 }, {
            y: 0, opacity: 1, duration: isMobile ? 0.4 : 0.6, stagger: 0.08, ease: 'power3.out',
            scrollTrigger: { trigger: section, start: isMobile ? 'top 95%' : 'top 80%' }
          });
        }
      });
    });
    return () => mm.revert();
  }, { scope: container, dependencies: [isMobile] });

  return (
    <div ref={container} className="bg-[#0a0f1d] min-h-screen text-blue-50 touch-pan-y">

      {/* ── HERO ── */}
      <section className="pt-44 md:pt-52 pb-20 md:pb-28 px-8 md:px-16">
        <div className="board-hero max-w-7xl mx-auto">
          <span className="paren-index mb-6">ADMIN_STRUCTURE_V4</span>
          <h1 className="editorial-headline text-blue-50 mb-10">
            Executive<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C2FF] to-ieee-bright italic">Board.</span>
          </h1>
          <p className="text-body-loose text-[20px] max-w-3xl">
            Architects of Innovation. Meet the visionary minds steering IEEE SRM AP towards a future of technical excellence and global impact.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <a href="#leadership-grid" className="group flex items-center justify-center gap-2 ieee-btn-primary">
              View Executive Board <ArrowRight size={14} />
            </a>
            <a href="https://www.ieee.org/membership/join/index.html" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center gap-2 ieee-btn-outline">
              Join the Team
            </a>
          </div>
        </div>
      </section>

      {/* ── CORE LEADERSHIP ── */}
      <section id="leadership-grid" className="px-8 md:px-16 pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto">
          <span className="paren-index mb-10">CORE_LEADERSHIP_COHORT</span>
          <div className="leadership-grid grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {leadership.map((member, i) => (
              <div key={i} className="leadership-card">
                <MemberCard member={member} size="large" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXCOM ROLES ── */}
      <section className="px-8 md:px-16 pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto">
          <span className="section-index mb-4">EXCOM</span>
          <h2 className="font-display text-[clamp(32px,4.5vw,60px)] font-light text-blue-50 mb-12 tracking-tight">Executive Committee</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {excomRoles.map((role, i) => (
              <div key={i} className="p-6 md:p-8 glass-card">
                <h3 className="font-display text-[20px] font-medium text-blue-50 mb-2">{role.title}</h3>
                <p className="text-[13px] font-body text-blue-200/50 mb-6 leading-relaxed italic">{role.tagline}</p>
                <ul className="space-y-2">
                  {role.responsibilities.map((r, j) => (
                    <li key={j} className="flex items-start gap-2 text-[13px] font-body text-blue-200/60">
                      <CheckCircle size={14} className="text-[#40B2D6] mt-0.5 flex-shrink-0" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DEPARTMENTS ── */}
      {departments.map((dept, di) => (
        <section key={di} className="dept-section px-8 md:px-16 pb-20 md:pb-28">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-3">
              <span className="text-xl">{dept.emoji}</span>
              <span className="section-index">{dept.name}</span>
            </div>
            <p className="text-[13px] font-body text-blue-200/40 mb-4 italic">{dept.subtitle}</p>

            <div className="flex flex-wrap gap-2 mb-8">
              {dept.objectives.map((obj, oi) => (
                <span key={oi} className="text-[10px] uppercase tracking-widest px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#40B2D6]">{obj}</span>
              ))}
            </div>

            {/* Members Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {dept.members.map((member, mi) => (
                <MemberCard key={mi} member={member} />
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ── PATH TO LEADERSHIP ── */}
      <section className="px-8 md:px-16 pb-24 md:pb-32 bg-white/5">
        <div className="max-w-7xl mx-auto pt-20">
          <span className="section-index mb-4">Join Our Team</span>
          <h2 className="font-display text-[clamp(32px,4.5vw,60px)] font-light text-blue-50 mb-12 tracking-tight">Path to Leadership</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            {pathToLeadership.map((step, i) => (
              <div key={i} className="group p-6 glass-card relative overflow-hidden">
                <span className="font-display text-[60px] font-light text-blue-50/5 absolute top-2 right-2">{step.step}</span>
                <div className="relative z-10">
                  <h4 className="font-display text-[18px] font-medium text-blue-50 mb-2">{step.title}</h4>
                  <p className="text-[13px] font-body text-blue-200/50 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Selection Criteria */}
          <div>
            <h3 className="font-display text-[20px] font-medium text-blue-50 mb-4">Selection Criteria</h3>
            <div className="flex flex-wrap gap-3">
              {selectionCriteria.map((c, i) => (
                <span key={i} className="text-[11px] uppercase tracking-widest px-4 py-2 rounded-full border border-white/10 text-[#40B2D6] font-medium">{c}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="h-16" />
    </div>
  );
}
