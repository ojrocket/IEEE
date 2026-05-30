import { useRef, useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, ArrowUpRight, Users, Calendar, Award, Cpu, Sparkles, Globe, Clock, MapPin, ChevronDown } from 'lucide-react';
import useIsMobile from '../hooks/useIsMobile';
import ScrollVideo from '../components/ScrollVideo';

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
        .fromTo('.editorial-line-inner', { y: '100%', rotateX: -50, opacity: 0 }, { y: '0%', rotateX: 0, opacity: 1, duration: 1, stagger: 0.1 })
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

      gsap.fromTo('.cta-final', { scale: 0.95, opacity: 0 }, {
        scale: 1, opacity: 1, ease: 'none',
        scrollTrigger: { trigger: '.cta-final', start: 'top 90%', end: 'top 55%', scrub: true }
      });
    });
    return () => mm.revert();
  }, { scope: container, dependencies: [isMobile, isLowEndDevice] });

  return (
    <div ref={container}>

      {/* ══════════ HERO ══════════ */}
      <section className="min-h-[100dvh] flex flex-col justify-center overflow-hidden px-6 md:px-14 lg:px-20 relative bg-[var(--bg-darkest)]">
        {/* Scroll-driven video background */}
        <ScrollVideo
          src="/videos/hero-scroll.mp4"
          className="absolute inset-0 z-0 w-full h-full mix-blend-screen opacity-20"
          scrollStart={0}
        />
        <div className="absolute inset-0 z-[1] bg-[var(--bg-darkest)]/80 pointer-events-none" />
        {/* Technical dot grid */}
        <div className="absolute inset-0 z-[2] pointer-events-none opacity-30"
          style={{
            backgroundImage: 'radial-gradient(circle, var(--text-muted-c) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />

        <div className="relative z-10 max-w-[1280px] mx-auto w-full">
          <div className="mb-4">
            <span className="section-label">IEEE SRM AP</span>
          </div>

          <h1 className="mb-10">
            <div className="editorial-line">
              <motion.span 
                initial={{ y: "110%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                className="editorial-line-inner headline-display"
              >
                Empowering
              </motion.span>
            </div>
            <div className="editorial-line">
              <motion.span 
                initial={{ y: "110%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1], delay: 0.22 }}
                className="editorial-line-inner headline-display italic word-gold"
              >
                Innovation.
              </motion.span>
            </div>
            <div className="editorial-line">
              <motion.span 
                initial={{ y: "110%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1], delay: 0.34 }}
                className="editorial-line-inner headline-display word-cyan lowercase"
              >
                Future_Now.
              </motion.span>
            </div>
          </h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-[18px] md:text-[22px] font-bold text-[var(--text-secondary-c)] max-w-[500px] leading-snug mt-6 mb-12 border-l-4 border-[var(--primary)] pl-6"
          >
            Advancing technology for the benefit of humanity at SRM University AP Amaravati.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="hero-cta-btn flex flex-col sm:flex-row gap-4"
          >
            <a href="https://www.ieee.org/membership/join/index.html" target="_blank" rel="noopener noreferrer"
              className="bg-[var(--primary)] text-[var(--bg-darkest)] px-8 py-4 text-[14px] font-bold transition-all hover:bg-[var(--accent-gold)] uppercase tracking-widest inline-flex items-center justify-center gap-3">
              Join IEEE <ArrowRight size={18} />
            </a>
            <Link to="/chapters"
              className="bg-[var(--bg-card)] border border-[var(--border-mid)] text-[var(--text-ice)] hover:bg-[var(--bg-surface)] hover:border-[var(--primary)] px-8 py-4 text-[14px] font-bold transition-all uppercase tracking-widest inline-flex items-center justify-center gap-3">
              Explore Chapters <ArrowUpRight size={18} />
            </Link>
          </motion.div>

          {/* Stats Bar Component as requested */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="mt-20 flex flex-wrap gap-8 md:gap-16"
          >
            <div className="stat-block">
              <span className="stat-number">520+</span>
              <span className="stat-label">Active Members</span>
            </div>
            <div className="stat-block">
              <span className="stat-number gold">65+</span>
              <span className="stat-label">Events Hosted</span>
            </div>
            <div className="stat-block">
              <span className="stat-number violet">6</span>
              <span className="stat-label">Tech Chapters</span>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="hero-scroll-cue absolute bottom-10 right-10 hidden lg:flex flex-col items-center gap-4"
        >
          <span style={{ fontFamily: 'Chivo Mono' }} className="text-[11px] font-bold text-[var(--text-muted-c)] uppercase tracking-[0.16em] [writing-mode:vertical-lr]">
            Scroll to Explore
          </span>
          <div className="w-[1px] h-12 bg-[var(--primary)]" />
        </motion.div>
      </section>

      {/* ══════════ MARQUEE ══════════ */}
      <section className="marquee-section py-6 bg-[var(--primary)] overflow-hidden">
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className={`marquee-item ${item === '✦' ? 'text-[var(--bg-darkest)] opacity-50' : ''}`}>
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* ══════════ STATS GRID ══════════ */}
      <section ref={bentoRef} className="bento-section py-24 md:py-32 px-6 md:px-16 bg-[var(--bg-dark)] border-t border-[var(--border-mid)]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14 md:mb-20">
            <span className="section-label mb-4">Impact</span>
            <h2 className="headline-display text-[clamp(44px,7vw,90px)] uppercase">By the Numbers.</h2>
          </div>
          <div className="technical-grid">
            {bentoStats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className={`bento-card solid-card ${stat.cls === 'bento-wide' ? 'md:col-span-2' : ''} h-56 flex flex-col justify-between group`}>
                  <div className="flex items-center justify-between">
                    <div className="p-3 bg-[var(--bg-darkest)] border border-[var(--border-mid)]">
                      <Icon size={20} className="text-[var(--primary)]" />
                    </div>
                    <span style={{ fontFamily: 'Chivo Mono' }} className="text-[12px] font-bold uppercase tracking-widest text-[var(--text-muted-c)]">{stat.label}</span>
                  </div>
                  <span className="font-display text-[clamp(48px,5vw,84px)] font-black text-[var(--text-ice)] leading-none tabular-nums tracking-tighter">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} inView={bentoInView} />
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════ ABOUT ══════════ */}
      <section className="about-section py-24 md:py-32 px-6 md:px-14 lg:px-20 bg-[var(--bg-darkest)] relative overflow-hidden">
        
        <div className="relative z-10 max-w-5xl">
          <span className="section-label mb-8">Our Mission</span>
          <blockquote className="about-quote headline-display text-[clamp(36px,6vw,90px)] leading-[0.95] tracking-tight mb-24">
            A vibrant community of <span className="word-cyan">passionate engineers</span> dedicated to advancing technology for humanity.
          </blockquote>

          <div className="about-cards technical-grid">
            <div className="about-card solid-card">
              <h4 style={{ fontFamily: 'Chivo Mono' }} className="text-[14px] font-bold uppercase tracking-widest text-[var(--primary)] mb-6 block border-b border-[var(--border-mid)] pb-4">Mission</h4>
              <p className="text-[18px] font-medium text-[var(--text-secondary-c)] leading-relaxed">To foster technological innovation and excellence for the benefit of humanity at SRM University AP.</p>
            </div>
            <div className="about-card solid-card">
              <h4 style={{ fontFamily: 'Chivo Mono' }} className="text-[14px] font-bold uppercase tracking-widest text-[var(--primary)] mb-6 block border-b border-[var(--border-mid)] pb-4">Vision</h4>
              <p className="text-[18px] font-medium text-[var(--text-secondary-c)] leading-relaxed">To be the leading technical community shaping future engineers for global challenges.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ CHAPTERS ══════════ */}
      <section className="chapters-section py-24 md:py-32 px-6 md:px-14 lg:px-20 bg-[var(--bg-dark)] border-t border-[var(--border-mid)]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 pb-8 border-b border-[var(--border-mid)]">
            <div>
              <span className="section-label mb-4">Technical Societies</span>
              <h2 className="headline-display text-[clamp(44px,7vw,90px)] uppercase">Chapters.</h2>
            </div>
            <Link to="/chapters" className="mt-8 md:mt-0 flex items-center gap-3 text-[var(--text-muted-c)] hover:text-[var(--primary)] font-bold text-[14px] uppercase tracking-widest transition-colors group">
              View All <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="technical-grid">
            {chapters.map((ch, i) => (
              <div key={i} className="chapter-card solid-card flex flex-col justify-between">
                <div className="mb-12">
                  <div className="w-12 h-3 bg-[var(--primary)] mb-8" style={{ backgroundColor: ch.accent }} />
                  <div className="flex flex-wrap gap-2 mb-6">
                    {ch.tags.map((t, ti) => (
                      <span key={ti} className="badge-event">{t}</span>
                    ))}
                  </div>
                  <h3 className="font-display text-[26px] font-black text-[var(--text-ice)] mb-4">{ch.name}</h3>
                  <p className="text-[16px] font-medium text-[var(--text-secondary-c)] leading-relaxed">{ch.desc}</p>
                </div>
                <div className="flex items-center justify-between pt-6 border-t border-[var(--border-mid)]">
                  <span style={{ fontFamily: 'Chivo Mono' }} className="text-[12px] font-bold text-[var(--text-muted-c)] uppercase tracking-widest">{ch.members} Members</span>
                  <ArrowUpRight size={18} className="text-[var(--text-muted-c)]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ EVENTS ══════════ */}
      <section className="events-section py-24 md:py-32 px-6 md:px-14 lg:px-20 bg-[var(--bg-darkest)] border-t border-[var(--border-mid)]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <span className="section-label mb-4">Upcoming Events</span>
            <h2 className="events-header headline-display text-[clamp(44px,7vw,90px)] uppercase">What's Next.</h2>
          </div>

          <div className="border-t border-[var(--border-mid)]">
            {events.map((ev, i) => (
              <div key={i} className="event-row flat-row group cursor-pointer hover:bg-[var(--bg-dark)] px-6 transition-colors">
                <div className="flat-row-key flex flex-col gap-1">
                  <span className="text-[16px] text-[var(--primary)]">{ev.date}</span>
                  <span className="text-[11px] opacity-60 mt-1">{ev.location}</span>
                </div>
                <div className="flat-row-value">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`badge-event ${ev.tag === 'Festival' ? 'violet' : ev.tag === 'Competition' ? 'gold' : ''}`}>
                      {ev.tag}
                    </span>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-display text-[24px] md:text-[32px] font-black text-[var(--text-ice)] mb-3 group-hover:text-[var(--primary)] transition-colors">{ev.title}</h3>
                      <p className="text-[16px] text-[var(--text-secondary-c)] font-medium max-w-xl">{ev.desc}</p>
                    </div>
                    <ArrowRight size={24} className="text-[var(--text-muted-c)] group-hover:text-[var(--primary)] group-hover:translate-x-2 transition-all" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ BLOG ══════════ */}
      <section className="blog-section py-24 md:py-32 px-6 md:px-14 lg:px-20 bg-[var(--bg-dark)] border-t border-[var(--border-mid)]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <span className="section-label mb-4">Latest Articles</span>
            <h2 className="headline-display text-[clamp(44px,7vw,90px)] uppercase">From the Blog.</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8">
              <div className="blog-card indexed-card group relative h-[500px] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1600" 
                     className="w-full h-full object-cover card-image" alt="Featured Post" />
                <div className="card-overlay" />
                <div className="card-label">
                  <span className="badge-event gold mb-6 block w-fit">{blogPosts[0].category}</span>
                  <h3 className="font-display font-black text-5xl mb-6 leading-[1.0] text-[var(--text-ice)]">{blogPosts[0].title}</h3>
                  <div style={{ fontFamily: 'Chivo Mono' }} className="flex items-center gap-6 text-[12px] font-bold text-[var(--primary)] uppercase tracking-widest">
                    <span>BY {blogPosts[0].author}</span>
                    <span>{blogPosts[0].time} READ</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-8">
              {blogPosts.slice(1).map((post, i) => (
                <div key={i} className="blog-card solid-card p-8 h-full group flex flex-col justify-center">
                  <div>
                    <span className="badge-event block w-fit mb-6">{post.category}</span>
                    <h4 className="font-display text-[24px] font-black text-[var(--text-ice)] mb-6 leading-tight group-hover:text-[var(--primary)] transition-colors">{post.title}</h4>
                    <span style={{ fontFamily: 'Chivo Mono' }} className="text-[12px] font-bold text-[var(--text-muted-c)] uppercase tracking-widest">{post.time} READ</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ CTA ══════════ */}
      <section className="py-24 md:py-32 px-6 md:px-14 lg:px-20 bg-[var(--bg-darkest)] border-t border-[var(--border-mid)]">
        <div className="cta-final relative overflow-hidden bg-[var(--primary)] py-32 px-10 text-center border-[8px] border-[var(--bg-card)]">
          <div className="absolute inset-0 z-0 opacity-10"
            style={{
              backgroundImage: 'radial-gradient(circle, var(--bg-darkest) 2px, transparent 2px)',
              backgroundSize: '24px 24px',
            }}
          />

          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="headline-display text-[clamp(44px,7vw,110px)] mb-12 uppercase text-[var(--bg-darkest)]">
              Shape the <br/> future with us.
            </h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a href="https://www.ieee.org/membership/join/index.html" target="_blank" rel="noopener noreferrer"
                className="bg-[var(--bg-darkest)] hover:bg-white text-[var(--text-ice)] hover:text-[var(--bg-darkest)] px-12 py-5 text-[16px] font-bold transition-all uppercase tracking-widest inline-flex items-center gap-3">
                Join IEEE Today <ArrowRight size={20} />
              </a>
              <Link to="/about"
                className="border-2 border-[var(--bg-darkest)] text-[var(--bg-darkest)] hover:bg-[var(--bg-darkest)] hover:text-[var(--text-ice)] px-12 py-5 text-[16px] font-bold transition-all uppercase tracking-widest inline-flex items-center gap-3">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
