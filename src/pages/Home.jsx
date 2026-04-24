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
      <section className="min-h-[100dvh] flex flex-col justify-center overflow-hidden px-6 md:px-14 lg:px-20 relative bg-[#0D1117]">
        {/* Scroll-driven video background */}
        <ScrollVideo
          src="/videos/hero-scroll.mp4"
          className="absolute inset-0 z-0 w-full h-full"
          scrollStart={0}
        />
        {/* Dark overlay so text stays readable over the video */}
        <div className="absolute inset-0 z-[1] bg-[#0D1117]/70 pointer-events-none" />
        {/* CSS-only background — dot grid + radial glow */}
        <div className="absolute inset-0 z-[2] pointer-events-none opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(14,202,212,0.15) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        <div className="absolute inset-0 z-[2] pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 800px 500px at 70% 30%, rgba(60,114,176,0.12) 0%, transparent 70%), radial-gradient(ellipse 600px 400px at 20% 80%, rgba(14,202,212,0.08) 0%, transparent 70%)',
          }}
        />

        <div className="relative z-10 max-w-[1280px] mx-auto w-full">
          <div className="mb-4">
            <span className="paren-index">00 // GLOBAL_ACCESS</span>
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
            className="text-[14px] md:text-[15px] font-body text-[#A8C4DE] max-w-[400px] leading-relaxed mt-6 mb-10"
          >
            Advancing technology for the benefit of humanity at SRM University AP Amaravati.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="https://www.ieee.org/membership/join/index.html" target="_blank" rel="noopener noreferrer"
              className="bg-[#3C72B0] hover:bg-[#0ECAD4] text-[#E2EEF9] px-7 py-3 rounded-full text-[14px] font-body transition-all duration-250 hover:scale-[1.03] active:scale-[0.97] tracking-wide inline-flex items-center justify-center gap-2">
              Join IEEE <ArrowRight size={14} />
            </a>
            <Link to="/chapters"
              className="border border-[rgba(64,178,214,0.28)] text-[#A8C4DE] hover:border-[#40B2D6] hover:text-[#0ECAD4] px-7 py-3 rounded-full text-[14px] font-body transition-all duration-250 inline-flex items-center justify-center gap-2">
              Explore Chapters <ArrowUpRight size={14} />
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
          className="absolute bottom-10 right-10 hidden lg:flex flex-col items-center gap-4"
        >
          <span className="font-mono text-[11px] text-[#5a7fa8] uppercase tracking-[0.16em] [writing-mode:vertical-lr]">
            Scroll to Explore
          </span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-[#40B2D6] to-transparent" />
        </motion.div>
      </section>

      {/* ══════════ MARQUEE ══════════ */}
      <section className="marquee-section py-6 bg-[#0D1117] border-y border-white/[0.04] overflow-hidden -mt-px">
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className={`flex-shrink-0 px-6 text-[11px] font-mono uppercase tracking-[0.2em] whitespace-nowrap transition-colors duration-500 ${item === '✦' ? 'text-[#0ECAD4]' : 'text-[#2d4a6b] hover:text-[#A8C4DE]'}`}>
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* ══════════ BENTO STATS ══════════ */}
      <section ref={bentoRef} className="py-24 md:py-32 px-6 md:px-16 bg-[#0D1117] border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14 md:mb-20">
            <span className="paren-index mb-4">01 // IMPACT_METRICS</span>
            <h2 className="headline-display text-[clamp(44px,7vw,90px)] uppercase">By the Numbers.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-1 bg-white/[0.04] border border-white/[0.04]">
            {bentoStats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className={`bg-[#0D1117] ${stat.cls === 'bento-wide' ? 'md:col-span-6' : 'md:col-span-3'} p-8 h-64 flex flex-col justify-between group transition-all duration-500 hover:bg-white/[0.02]`}>
                  <div className="flex items-center justify-between">
                    <div className="p-2 bg-ieee-mist rounded-lg">
                      <Icon size={16} className="text-[#40B2D6]" />
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#5a7fa8]">{stat.label}</span>
                  </div>
                  <span className="font-display text-[clamp(48px,5vw,84px)] font-light text-[#E2EEF9] leading-none tabular-nums">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} inView={bentoInView} />
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════ ABOUT ══════════ */}
      <section className="py-24 md:py-32 px-6 md:px-14 lg:px-20 bg-[#0D1117] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-ieee-mist rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        
        <div className="relative z-10 max-w-5xl">
          <span className="paren-index mb-8">02 // CORE_MISSION</span>
          <blockquote className="headline-display text-[clamp(36px,6vw,90px)] leading-[1.0] tracking-tight mb-20">
            A vibrant community of <span className="word-cyan">passionate engineers</span> dedicated to advancing technology for humanity.
          </blockquote>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="stat-block">
              <h4 className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#5a7fa8] mb-4 block">Mission</h4>
              <p className="text-[15px] font-body text-[#A8C4DE] leading-relaxed">To foster technological innovation and excellence for the benefit of humanity at SRM University AP.</p>
            </div>
            <div className="stat-block">
              <h4 className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#5a7fa8] mb-4 block">Vision</h4>
              <p className="text-[15px] font-body text-[#A8C4DE] leading-relaxed">To be the leading technical community shaping future engineers for global challenges.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ CHAPTERS ══════════ */}
      <section className="py-24 md:py-32 px-6 md:px-14 lg:px-20 bg-[#0D1117] border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 pb-8 border-b border-white/[0.06]">
            <div>
              <span className="paren-index mb-4">03 // TECHNICAL_SOCIETIES</span>
              <h2 className="headline-display text-[clamp(44px,7vw,90px)] uppercase">Chapters.</h2>
            </div>
            <Link to="/chapters" className="mt-8 md:mt-0 flex items-center gap-2 text-[#5a7fa8] hover:text-[#40B2D6] font-mono text-[11px] uppercase tracking-[0.18em] transition-colors group">
              View All <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {chapters.map((ch, i) => (
              <div key={i} className="indexed-card glass-card p-8 h-full flex flex-col justify-between">
                <span className="card-num">{i + 1 < 10 ? `0${i + 1}` : i + 1}</span>
                <div className="mb-12">
                  <div className="w-10 h-[1.5px] bg-[#40B2D6] mb-6" style={{ backgroundColor: ch.accent }} />
                  <div className="flex flex-wrap gap-2 mb-4">
                    {ch.tags.map((t, ti) => (
                      <span key={ti} className="badge-event">{t}</span>
                    ))}
                  </div>
                  <h3 className="font-display text-[22px] font-medium text-[#E2EEF9] mb-3">{ch.name}</h3>
                  <p className="text-[14px] font-body text-[#A8C4DE] leading-relaxed">{ch.desc}</p>
                </div>
                <div className="flex items-center justify-between pt-6 border-t border-white/[0.04]">
                  <span className="font-mono text-[10px] text-[#5a7fa8] uppercase tracking-widest">{ch.members} Members</span>
                  <ArrowUpRight size={14} className="text-[#5a7fa8]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ EVENTS ══════════ */}
      <section className="py-24 md:py-32 px-6 md:px-14 lg:px-20 bg-[#0D1117] border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <span className="paren-index mb-4">04 // UPCOMING_ACTIVATIONS</span>
            <h2 className="headline-display text-[clamp(44px,7vw,90px)] uppercase">What's Next.</h2>
          </div>

          <div className="border-t border-white/[0.08]">
            {events.map((ev, i) => (
              <div key={i} className="flat-row group cursor-pointer hover:bg-white/[0.01] px-4 transition-colors">
                <div className="flat-row-key flex flex-col gap-1">
                  <span>{ev.date}</span>
                  <span className="text-[9px] opacity-40">{ev.location}</span>
                </div>
                <div className="flat-row-value">
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`badge-event ${ev.tag === 'Festival' ? 'violet' : ev.tag === 'Competition' ? 'gold' : ''}`}>
                      {ev.tag}
                    </span>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-display text-[20px] md:text-[24px] text-[#E2EEF9] mb-1 group-hover:text-ieee-electric transition-colors">{ev.title}</h3>
                      <p className="text-[14px] text-[#A8C4DE] max-w-xl">{ev.desc}</p>
                    </div>
                    <ArrowRight size={18} className="text-[#2d4a6b] group-hover:text-ieee-electric group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ BLOG ══════════ */}
      <section className="py-24 md:py-32 px-6 md:px-14 lg:px-20 bg-[#0D1117] border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <span className="paren-index mb-4">05 // LATEST_INSIGHTS</span>
            <h2 className="headline-display text-[clamp(44px,7vw,90px)] uppercase">From the Blog.</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8">
              <div className="indexed-card group relative h-[500px] overflow-hidden rounded-2xl">
                <div className="card-num">01</div>
                <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1600" 
                     className="w-full h-full object-cover card-image" alt="Featured Post" />
                <div className="card-overlay" />
                <div className="card-label">
                  <span className="badge-event gold mb-4 block w-fit">{blogPosts[0].category}</span>
                  <h3 className="headline-display text-4xl mb-4 italic">{blogPosts[0].title}</h3>
                  <div className="flex items-center gap-6 text-[12px] font-mono text-[#A8C4DE]">
                    <span>BY {blogPosts[0].author.toUpperCase()}</span>
                    <span>{blogPosts[0].time.toUpperCase()} READ</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-6">
              {blogPosts.slice(1).map((post, i) => (
                <div key={i} className="indexed-card glass-card p-8 h-full group">
                  <span className="card-num">0{i + 2}</span>
                  <div>
                    <span className="badge-event block w-fit mb-4">{post.category}</span>
                    <h4 className="font-display text-[20px] text-[#E2EEF9] mb-4 leading-tight group-hover:text-ieee-electric transition-colors">{post.title}</h4>
                    <span className="font-mono text-[10px] text-[#5a7fa8] uppercase tracking-widest">{post.time} READ</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ CTA ══════════ */}
      <section className="py-24 md:py-32 px-6 md:px-14 lg:px-20 bg-[#0D1117] border-t border-white/[0.04]">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-[#12233b] py-24 md:py-32 px-10 text-center">
          <div className="absolute inset-0 z-0 opacity-10"
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(14,202,212,0.3) 1px, transparent 1px)',
              backgroundSize: '32px 32px',
            }}
          />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-[#3C72B0]/10 to-transparent pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="headline-display text-[clamp(44px,7vw,110px)] mb-10 uppercase">
              Shape the <span className="italic">future</span> <span className="word-cyan">with us.</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="https://www.ieee.org/membership/join/index.html" target="_blank" rel="noopener noreferrer"
                className="bg-[#3C72B0] hover:bg-[#0ECAD4] text-[#E2EEF9] px-10 py-4 rounded-full text-[15px] font-body transition-all duration-250 hover:scale-[1.03] active:scale-[0.97] tracking-wide inline-flex items-center gap-3">
                Join IEEE Today <ArrowRight size={16} />
              </a>
              <Link to="/about"
                className="border border-white/10 text-[#A8C4DE] hover:border-[#40B2D6] hover:text-[#0ECAD4] px-10 py-4 rounded-full text-[15px] font-body transition-all duration-250 inline-flex items-center gap-3">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
