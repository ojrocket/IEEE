import { useRef, useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, ArrowUpRight, Users, Calendar, Award, Cpu, Sparkles, Globe, Clock, MapPin, ChevronDown } from 'lucide-react';
import useIsMobile from '../hooks/useIsMobile';

gsap.registerPlugin(ScrollTrigger);

/* ═══════════ DATA ═══════════ */
const marqueeItems = [
  'IEEE Official Affiliated Chapter', '✦', 'SRM University AP', '✦',
  'Est. 2019', '✦', '520+ Members', '✦', '65+ Events', '✦',
  '5 Years of Excellence', '✦', 'Global Network — 419,000+ Members', '✦',
  'Amaravati Campus', '✦', '6 Technical Chapters', '✦',
];

const bentoStats = [
  { value: 520, suffix: '+', label: 'Active Members', icon: Users, cls: 'bento-wide', bg: 'bg-white/5', text: 'text-blue-50' },
  { value: 65, suffix: '+', label: 'Events Hosted', icon: Calendar, cls: '', bg: 'bg-[#3C72B0]/20', text: 'text-blue-50' },
  { value: 6, suffix: '', label: 'Technical Chapters', icon: Cpu, cls: '', bg: 'bg-[#40B2D6]/20', text: 'text-blue-50' },
  { value: 25, suffix: '+', label: 'Awards Won', icon: Award, cls: '', bg: 'bg-white/5', text: 'text-blue-50' },
  { value: 5, suffix: '', label: 'Years of Excellence', icon: Sparkles, cls: '', bg: 'bg-white/5', text: 'text-blue-50' },
  { value: 419, suffix: 'K+', label: 'Global IEEE Network', icon: Globe, cls: 'bento-wide', bg: 'bg-gradient-to-br from-[#3C72B0]/20 to-[#40B2D6]/20', text: 'text-blue-50' },
];

const chapters = [
  { name: 'Computer Society', tags: ['AI/ML', 'Software'], desc: 'Advancing computing technology and software innovation.', accent: '#0A66C2', members: '150+' },
  { name: 'Robotics & Automation', tags: ['Arduino', 'ROS'], desc: 'Designing autonomous systems and industrial automation.', accent: '#EF4444', members: '90+' },
  { name: 'Signal Processing', tags: ['DSP', '5G'], desc: 'Digital signal processing and next-gen communications.', accent: '#F59E0B', members: '70+' },
  { name: 'Women in Engineering', tags: ['Leadership', 'Community'], desc: 'Empowering women through mentorship and growth.', accent: '#EC4899', members: '100+' },
  { name: 'Power & Energy', tags: ['Renewable', 'Smart Grid'], desc: 'Sustainable energy solutions and power systems.', accent: '#10B981', members: '80+' },
  { name: 'Special Interest Group', tags: ['Innovation', 'Research'], desc: 'Niche technical domains and emerging research.', accent: '#8B5CF6', members: '60+' },
];

const events = [
  { title: 'TechFest 2024', date: 'Dec 15', location: 'SRM AP Campus', tag: 'Festival', desc: 'Annual technical festival with coding, robotics, expert seminars' },
  { title: '24-Hour Hackathon', date: 'Dec 20', location: 'Innovation Lab', tag: 'Competition', desc: 'Code, innovate, compete. $5000 Prize Pool' },
  { title: 'AI & ML Workshop', date: 'Dec 25', location: 'Tech Hall A', tag: 'Workshop', desc: 'Hands-on workshop with industry experts' },
];

const blogPosts = [
  { title: 'The Future of Artificial Intelligence in Engineering', category: 'AI / ML', author: 'Dr. Sarah Chen', time: '8 min', featured: true },
  { title: 'Building Autonomous Robots: A Beginner\'s Guide', category: 'Robotics', author: 'Alex K.', time: '5 min' },
  { title: 'Modern Web Development Trends in 2024', category: 'Web Dev', author: 'Priya S.', time: '6 min' },
];

/* ═══════════ ANIMATED COUNTER ═══════════ */
function AnimatedCounter({ target, suffix = '', inView }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const dur = 2000, start = performance.now();
    let frame;
    function step(now) {
      const p = Math.min((now - start) / dur, 1);
      setCount(Math.round((1 - Math.pow(1 - p, 4)) * target));
      if (p < 1) frame = requestAnimationFrame(step);
    }
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [target, inView]);
  return <>{count.toLocaleString()}{suffix}</>;
}

/* ═══════════ 3D TILT CARD ═══════════ */
function TiltCard({ children, className = '' }) {
  const ref = useRef(null);
  const onMove = useCallback((e) => {
    const c = ref.current; if (!c) return;
    const r = c.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    c.style.transform = `perspective(800px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) scale3d(1.02, 1.02, 1.02)`;
  }, []);
  const onLeave = useCallback(() => { if (ref.current) ref.current.style.transform = 'perspective(800px) rotateY(0) rotateX(0) scale3d(1,1,1)'; }, []);
  return <div ref={ref} className={`tilt-card ${className}`} onMouseMove={onMove} onMouseLeave={onLeave} style={{ transition: 'transform 0.15s ease-out' }}>{children}</div>;
}

/* ═══════════ MAIN ═══════════ */
export default function Home() {
  const container = useRef(null);
  const bentoRef = useRef(null);
  const [bentoInView, setBentoInView] = useState(false);
  const { isMobile, isLowEndDevice } = useIsMobile();

  useEffect(() => {
    const el = bentoRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setBentoInView(true); }, { threshold: 0.2 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useGSAP(() => {
    let mm = gsap.matchMedia();
    mm.add('(prefers-reduced-motion: no-preference)', () => {

      const heroTl = gsap.timeline({ defaults: { ease: 'power4.out' } });
      heroTl
        .fromTo('.hero-word', { y: '100%', rotateX: -50, opacity: 0 }, { y: '0%', rotateX: 0, opacity: 1, duration: 1, stagger: 0.1 })
        .fromTo('.hero-cta-btn', { y: 15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.1 }, '-=0.3')
        .fromTo('.hero-scroll-cue', { opacity: 0 }, { opacity: 1, duration: 0.8 }, '-=0.1');

      gsap.fromTo('.marquee-section', { scaleX: 0.85, opacity: 0 }, {
        scaleX: 1, opacity: 1, duration: 0.8,
        scrollTrigger: { trigger: '.marquee-section', start: 'top 92%' }
      });

      gsap.fromTo('.bento-card', { rotateX: -30, y: 60, opacity: 0, transformOrigin: 'bottom center' }, {
        rotateX: 0, y: 0, opacity: 1, duration: 0.7, stagger: 0.08,
        scrollTrigger: { trigger: '.bento-section', start: isMobile ? 'top 95%' : 'top 80%' }
      });

      gsap.fromTo('.about-quote', { x: -120, opacity: 0 }, {
        x: 0, opacity: 1, duration: 1.2, ease: 'power3.out',
        scrollTrigger: { trigger: '.about-section', start: 'top 70%' }
      });
      gsap.fromTo('.about-card', { y: 50, opacity: 0, scale: 0.9 }, {
        y: 0, opacity: 1, scale: 1, duration: 0.6, stagger: 0.15,
        scrollTrigger: { trigger: '.about-cards', start: 'top 85%' }
      });

      gsap.fromTo('.chapter-card', { x: (i) => (i % 2 === 0 ? -50 : 50), y: 40, opacity: 0 }, {
        x: 0, y: 0, opacity: 1, duration: 0.7, stagger: 0.08,
        scrollTrigger: { trigger: '.chapters-section', start: isMobile ? 'top 95%' : 'top 80%' }
      });

      gsap.fromTo('.events-header', { y: 40, opacity: 0 }, {
        y: 0, opacity: 1, ease: 'none',
        scrollTrigger: { trigger: '.events-section', start: 'top 75%', end: 'top 50%', scrub: 1 }
      });
      gsap.utils.toArray('.event-row').forEach((row, i) => {
        gsap.fromTo(row, { x: i % 2 === 0 ? -60 : 60, opacity: 0 }, {
          x: 0, opacity: 1, duration: 0.6,
          scrollTrigger: { trigger: row, start: 'top 90%' }
        });
      });

      gsap.fromTo('.blog-card', { rotateY: -15, opacity: 0, transformOrigin: 'left center' }, {
        rotateY: 0, opacity: 1, duration: 0.7, stagger: 0.12,
        scrollTrigger: { trigger: '.blog-section', start: isMobile ? 'top 95%' : 'top 80%' }
      });

      gsap.fromTo('.cta-final', { scale: 0.88, opacity: 0, borderRadius: '4rem' }, {
        scale: 1, opacity: 1, borderRadius: '2rem', ease: 'none',
        scrollTrigger: { trigger: '.cta-final', start: 'top 90%', end: 'top 55%', scrub: true }
      });
    });
    return () => mm.revert();
  }, { scope: container, dependencies: [isMobile, isLowEndDevice] });

  return (
    <div ref={container}>

      {/* ══════════ HERO ══════════ */}
      <section className="min-h-screen bg-[#0a0f1d] flex flex-col justify-center px-6 md:px-12 lg:px-20 relative overflow-hidden">
        {/* CSS-only background — dot grid + radial glow */}
        <div className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(0,194,255,0.08) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 600px 400px at 70% 30%, rgba(10,102,194,0.15) 0%, transparent 70%), radial-gradient(ellipse 500px 350px at 25% 70%, rgba(0,194,255,0.08) 0%, transparent 70%)',
          }}
        />
        <div className="absolute inset-0 z-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at center, transparent 40%, rgba(10,31,68,0.7) 100%)' }} />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="editorial-headline text-blue-50 mb-10">
            <span className="editorial-word-row">
              <span className="hero-word">Empowering</span>
            </span>
            <span className="editorial-word-row">
              <span className="hero-word italic">Innovation.</span>
            </span>
            <span className="editorial-word-row justify-end">
              <span className="hero-word text-transparent bg-clip-text bg-gradient-to-r from-[#00C2FF] to-ieee-bright lowercase">Future_Now.</span>
            </span>
          </h1>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="https://www.ieee.org/membership/join/index.html" target="_blank" rel="noopener noreferrer"
              className="hero-cta-btn group flex items-center justify-center gap-2 ieee-btn-primary">
              Join IEEE <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </a>
            <Link to="/chapters"
              className="hero-cta-btn group flex items-center justify-center gap-2 ieee-btn-outline">
              Explore Chapters <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        <div className="hero-scroll-cue absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 z-10">
          <span className="text-[8px] font-sans uppercase tracking-[0.4em] text-white/15">Scroll</span>
          <ChevronDown size={12} className="text-white/15 animate-bounce" />
        </div>
      </section>

      {/* ══════════ MARQUEE ══════════ */}
      <section className="marquee-section overflow-hidden py-4 bg-ieee-deep border-y border-white/5 -mt-px">
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className={`flex-shrink-0 px-4 md:px-5 text-[10px] md:text-xs font-sans uppercase tracking-[0.2em] font-bold whitespace-nowrap ${item === '✦' ? 'text-[#00C2FF]/50' : 'text-white/25'}`}>
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* ══════════ BENTO STATS ══════════ */}
      <section ref={bentoRef} className="bento-section py-16 md:py-24 px-6 md:px-16 bg-[#0a0f1d] border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 md:mb-14">
            <span className="paren-index mb-4">01 // IMPACT_METRICS</span>
            <h2 className="text-editorial text-[clamp(48px,8vw,90px)] text-blue-50 uppercase">By the Numbers.</h2>
          </div>
          <div className="bento-grid">
            {bentoStats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className={`bento-card ${stat.cls} p-6 flex flex-col justify-between min-h-[140px] md:min-h-[180px] group transition-all duration-500 border-r border-b border-white/5 hover:bg-white/[0.02]`}>
                  <div className="flex items-center justify-between">
                    <Icon size={14} className="text-[#40B2D6] opacity-30 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="text-mono-label">{stat.label}</span>
                  </div>
                  <span className="font-display text-[clamp(44px,6vw,84px)] font-light text-blue-50 mt-auto leading-none">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} inView={bentoInView} />
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════ ABOUT ══════════ */}
      <section className="about-section py-20 md:py-32 px-6 md:px-16 bg-ieee-deep relative overflow-hidden">
        {/* CSS-only subtle background */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 800px 500px at 50% 50%, rgba(10,102,194,0.08) 0%, transparent 70%)' }} />

        <div className="relative z-10 max-w-5xl">
          <span className="paren-index mb-8">02 // CORE_MISSION</span>
          <blockquote className="about-quote text-editorial text-[clamp(44px,7vw,110px)] text-blue-50 leading-[0.9] tracking-tight mb-20">
            A vibrant community of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C2FF] to-ieee-bright">passionate engineers</span> dedicated to advancing technology for humanity.
          </blockquote>

          <div className="about-cards flex flex-col sm:flex-row gap-4">
            <div className="about-card flex-1 p-8 border-r border-white/5 bg-white/[0.02]">
              <h4 className="text-mono-label mb-2">Mission</h4>
              <p className="text-body-loose text-sm">To foster technological innovation and excellence for the benefit of humanity.</p>
            </div>
            <div className="about-card flex-1 p-8 border-r border-white/5 bg-white/[0.02]">
              <h4 className="text-mono-label mb-2">Vision</h4>
              <p className="text-body-loose text-sm">To be the leading technical community shaping future engineers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ CHAPTERS ══════════ */}
      <section className="chapters-section py-16 md:py-24 px-6 md:px-16 bg-[#0a0f1d] border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 border-b border-white/10 pb-8">
            <div>
              <span className="paren-index mb-4">03 // TECHNICAL_SOCIETIES</span>
              <h2 className="text-editorial text-[clamp(48px,8vw,90px)] text-blue-50 uppercase">Chapters.</h2>
            </div>
            <Link to="/chapters" className="mt-3 md:mt-0 inline-flex items-center gap-2 text-blue-200/40 hover:text-[#40B2D6] text-[10px] font-body uppercase tracking-[0.2em] font-medium transition-colors group">
              View All <ArrowRight size={10} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {chapters.map((ch, i) => (
              <TiltCard key={i} className="chapter-card">
                <Link to="/chapters" className="block glass-card p-5 md:p-6 transition-all duration-500 group h-full">
                  <div className="w-8 h-0.5 rounded-full mb-5" style={{ backgroundColor: ch.accent }} />
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {ch.tags.map((t, ti) => (
                      <span key={ti} className="text-[10px] uppercase tracking-widest px-3 py-1 rounded-full bg-[rgba(64,178,214,0.1)] border border-[var(--border-subtle)] text-[#40B2D6]">{t}</span>
                    ))}
                  </div>
                  <h3 className="font-display text-[18px] md:text-[20px] text-blue-50 mb-2">{ch.name}</h3>
                  <p className="text-[12px] font-body text-[#5a7fa8] leading-relaxed mb-5">{ch.desc}</p>
                  <div className="flex items-center justify-between pt-3 border-t border-white/5">
                    <span className="text-[12px] font-body text-blue-200/40">{ch.members} Members</span>
                    <ArrowUpRight size={12} className="text-blue-200/10 group-hover:text-[#40B2D6] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                  </div>
                </Link>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ EVENTS ══════════ */}
      <section className="events-section py-16 md:py-24 px-6 md:px-16 bg-ieee-deep relative overflow-hidden">
        {/* CSS-only dot grid background */}
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(0,194,255,0.04) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="events-header mb-16">
            <span className="paren-index mb-4">04 // UPCOMING_ACTIVATIONS</span>
            <h2 className="text-editorial text-[clamp(48px,8vw,90px)] text-blue-50 uppercase">What's Next.</h2>
          </div>

          {events.map((ev, i) => (
            <div key={i} className="event-row group border-t border-white/[0.06] py-6 md:py-8 cursor-pointer">
              <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-0">
                <div className="md:w-32 flex-shrink-0">
                  <span className="text-mono-label">{ev.date}</span>
                </div>
                <div className="hidden md:block w-px h-12 bg-white/[0.06] mx-6 group-hover:bg-[#00C2FF]/20 transition-colors duration-500" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-[10px] uppercase tracking-widest px-3 py-1 rounded-full bg-[rgba(64,178,214,0.1)] border border-[var(--border-subtle)] text-[#40B2D6]">{ev.tag}</span>
                    <div className="flex items-center gap-1 text-[12px] font-body text-blue-200/40">
                      <MapPin size={8} />
                      <span>{ev.location}</span>
                    </div>
                  </div>
                  <h3 className="text-editorial text-2xl text-blue-50 group-hover:text-[#40B2D6] transition-colors duration-300 mb-1">{ev.title}</h3>
                  <p className="text-body-loose text-xs">{ev.desc}</p>
                </div>
                <div className="flex-shrink-0 md:pl-6">
                  <div className="w-8 h-8 rounded-full border border-white/5 group-hover:border-[#40B2D6]/25 group-hover:bg-[#40B2D6]/5 flex items-center justify-center transition-all duration-300">
                    <ArrowRight size={12} className="text-white/10 group-hover:text-[#40B2D6] group-hover:translate-x-0.5 transition-all duration-300" />
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="border-t border-white/[0.06]" />

          <div className="mt-8 flex flex-wrap gap-1.5">
            <span className="text-[8px] font-sans uppercase tracking-[0.2em] text-white/12 font-bold self-center mr-1.5">Past:</span>
            {['Web Dev Bootcamp · Nov', 'Robotics Competition · Oct', 'AI Symposium · Sep'].map((e, i) => (
              <span key={i} className="text-[9px] font-sans text-white/15 border border-white/[0.04] rounded-full px-2.5 py-0.5">{e}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ BLOG ══════════ */}
      <section className="blog-section py-16 md:py-24 px-6 md:px-16 bg-[#0a0f1d] border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <span className="paren-index mb-4">05 // LATEST_INSIGHTS</span>
            <h2 className="text-editorial text-[clamp(48px,8vw,90px)] text-blue-50 uppercase">From the Blog.</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
            <TiltCard className="blog-card lg:col-span-3">
              <div className="group glass-card p-5 md:p-6 h-full flex flex-col justify-between min-h-[240px] cursor-pointer hover:shadow-2xl transition-shadow duration-500 relative overflow-hidden">
                {/* CSS gradient accent instead of canvas */}
                <div className="absolute top-0 right-0 w-[18rem] h-[18rem] bg-ieee-bright/8 rounded-full blur-[80px] -translate-y-1/3 translate-x-1/4 pointer-events-none" />
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-6">
                    <span className="text-mono-label border border-white/10 px-3 py-1">Featured</span>
                    <span className="text-mono-label border border-white/10 px-3 py-1">{blogPosts[0].category}</span>
                  </div>
                  <h3 className="text-editorial text-[clamp(28px,4vw,48px)] text-blue-50 group-hover:text-white transition-colors duration-300 max-w-md uppercase italic">{blogPosts[0].title}</h3>
                </div>
                <div className="relative z-10 flex items-center justify-between mt-6">
                  <span className="text-[12px] font-body text-blue-200/40">{blogPosts[0].author}</span>
                  <div className="flex items-center gap-1.5 text-[12px] font-body text-blue-200/40"><Clock size={10} /><span>{blogPosts[0].time}</span></div>
                </div>
              </div>
            </TiltCard>

            <div className="lg:col-span-2 flex flex-col gap-4">
              {blogPosts.slice(1).map((post, i) => (
                <TiltCard key={i} className="blog-card flex-1">
                  <div className="group glass-card p-5 md:p-6 transition-all duration-500 h-full flex flex-col justify-between cursor-pointer">
                    <div>
                      <span className="text-[10px] uppercase tracking-widest px-3 py-1 rounded-full bg-[rgba(64,178,214,0.1)] border border-[var(--border-subtle)] text-[#40B2D6] block mb-2">{post.category}</span>
                      <h4 className="font-display text-[18px] md:text-[20px] text-blue-50 mb-2">{post.title}</h4>
                    </div>
                    <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/5">
                      <span className="text-[12px] font-body text-blue-200/40">{post.author}</span>
                      <span className="text-[12px] font-body text-blue-200/40">{post.time}</span>
                    </div>
                  </div>
                </TiltCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ CTA ══════════ */}
      <section className="py-10 md:py-16 px-4 md:px-10 bg-[#0a0f1d] border-t border-white/5">
        <div className="cta-final relative overflow-hidden rounded-[2rem] bg-ieee-deep py-16 md:py-24 px-6 md:px-14 shadow-[0_30px_80px_rgba(10,31,68,0.25)]">
          {/* CSS glow accents */}
          <div className="absolute top-0 left-1/4 w-[25rem] h-[25rem] bg-ieee-bright/10 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-[20rem] h-[20rem] bg-[#00C2FF]/8 rounded-full blur-[80px] translate-y-1/2 pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="text-editorial text-[clamp(44px,7vw,110px)] text-blue-50 mb-6 uppercase">
              Shape the <span className="italic">future</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C2FF] to-ieee-bright">with us.</span>
            </h2>
            <p className="text-sm font-sans text-white/30 max-w-md mx-auto mb-8 leading-relaxed">
              Join 520+ members across 6 technical chapters.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="https://www.ieee.org/membership/join/index.html" target="_blank" rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 ieee-btn-primary">
                Join IEEE Today <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <Link to="/about"
                className="group flex items-center justify-center gap-2 ieee-btn-outline">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
