import { motion } from 'framer-motion';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Intro() {
  const container = useRef(null);

  useGSAP(() => {
    // Stacking/pinning effect
    const panels = gsap.utils.toArray('.panel');

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
      <section className="panel h-screen w-full flex items-center justify-center bg-[var(--bg-darkest)] relative z-[1]">
        <h2 className="headline-display text-5xl md:text-8xl text-center px-4 uppercase leading-none">
          A Legacy of <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)]">Excellence.</span>
        </h2>
      </section>

      <section className="panel h-screen w-full flex flex-col items-center justify-center bg-[var(--bg-dark)] border-t border-[var(--border-mid)] relative z-[2]">
        <div className="max-w-3xl text-center px-8">
          <h3 className="headline-display text-3xl md:text-5xl mb-8 uppercase text-[var(--primary)]">
            Beyond Textbooks.
          </h3>
          <p className="text-xl md:text-2xl font-bold text-[var(--text-secondary-c)] leading-relaxed">
            We bridge the gap between academic theory and real-world application. Cultivating a dynamic environment where ideas transform into solutions.
          </p>
        </div>
      </section>

      <section className="panel h-screen w-full flex items-center justify-center bg-[var(--bg-surface)] border-t border-[var(--border-mid)] relative z-[3]">
        <div className="max-w-4xl text-center px-8">
          <h3 className="headline-display text-4xl md:text-7xl uppercase text-[var(--text-ice)]">
            Join the Movement.
          </h3>
        </div>
      </section>
    </motion.div>
  );
}
