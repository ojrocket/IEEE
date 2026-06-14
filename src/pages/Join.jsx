import { motion } from 'framer-motion';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Join() {
  const container = useRef(null);

  useGSAP(() => {
    const panels = gsap.utils.toArray('.join-panel');
    panels.forEach((panel) => {
      ScrollTrigger.create({
        trigger: panel,
        start: 'top top',
        pin: true,
        pinSpacing: false,
        end: () => `+=${window.innerHeight}`,
      });
    });
  }, { scope: container });

  return (
    <motion.div
      ref={container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-[var(--bg-darkest)] text-[var(--text-ice)]"
    >
      <section className="join-panel h-screen w-full flex items-center justify-center bg-[var(--bg-darkest)] relative z-[1]">
        <div className="text-center px-8">
          <span className="section-label mb-6 mx-auto w-fit">Membership</span>
          <h1 className="headline-display mb-10 text-[clamp(52px,8vw,120px)] uppercase">
            Ready to <br /><span className="text-[var(--primary)] italic font-light">Upgrade?</span>
          </h1>
          <p className="text-[18px] md:text-[22px] font-bold text-[var(--text-secondary-c)] max-w-2xl mx-auto mb-12">
            Join the global network of engineers at SRM University AP. Scroll to begin.
          </p>
        </div>
      </section>

      <section className="join-panel min-h-screen md:h-screen w-full flex items-center justify-center bg-[var(--bg-dark)] border-t border-[var(--border-mid)] relative z-[2] py-16 md:py-0">
        <form className="max-w-xl w-full mx-auto px-8" onSubmit={(e) => e.preventDefault()}>
          <h2 className="headline-display text-[32px] md:text-[42px] mb-12 text-center uppercase">Initialize Membership.</h2>
          <div className="space-y-6">
            <div>
              <label className="block text-[11px] font-mono uppercase tracking-widest text-[var(--text-muted-c)] mb-2">SRM Email Address</label>
              <input
                type="email"
                placeholder="name_surname@srmap.edu.in"
                className="w-full bg-[var(--bg-darkest)] border border-[var(--border-mid)] rounded-[4px] px-6 py-5 focus:outline-none focus:border-[var(--primary)] transition-colors text-[var(--text-ice)] placeholder:text-[var(--text-dim)] text-lg"
              />
            </div>
            <div>
              <label className="block text-[11px] font-mono uppercase tracking-widest text-[var(--text-muted-c)] mb-2">University Registration Number</label>
              <input
                type="text"
                placeholder="E.g. AP221100..."
                className="w-full bg-[var(--bg-darkest)] border border-[var(--border-mid)] rounded-[4px] px-6 py-5 focus:outline-none focus:border-[var(--primary)] transition-colors text-[var(--text-ice)] placeholder:text-[var(--text-dim)] text-lg"
              />
            </div>
            <a
              href="https://www.ieee.org/membership/join/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[var(--primary)] hover:bg-[var(--accent-gold)] text-[var(--bg-darkest)] py-5 flex items-center justify-center mt-6 text-[14px] font-bold uppercase tracking-widest transition-all w-full text-center"
            >
              Proceed to IEEE.org
            </a>
          </div>
        </form>
      </section>
    </motion.div>
  );
}
