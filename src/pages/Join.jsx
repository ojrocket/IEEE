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
      className="bg-[#0a0f1d]"
    >
      <section className="join-panel h-screen w-full flex items-center justify-center bg-[#0a0f1d] text-blue-50 relative z-[1]">
        <div className="text-center px-8">
          <h1 className="font-display text-[clamp(52px,8vw,120px)] font-light tracking-tight leading-none mb-8 text-blue-50">
            Ready to <br /><span className="italic text-[#40B2D6]">Upgrade?</span>
          </h1>
          <p className="text-[18px] md:text-[22px] font-body text-blue-200/60 max-w-2xl mx-auto mb-12">
            Join the global network of engineers at SRM University AP. Scroll to begin.
          </p>
        </div>
      </section>

      <section className="join-panel min-h-screen md:h-screen w-full flex items-center justify-center bg-[#0d152a] text-blue-50 relative z-[2] rounded-t-[3rem] mt-[-3rem] shadow-[0_-10px_40px_rgba(0,0,0,0.5)] py-16 md:py-0">
        <form className="max-w-xl w-full mx-auto px-8" onSubmit={(e) => e.preventDefault()}>
          <h2 className="font-display text-[32px] md:text-[42px] font-light text-blue-50 mb-12 text-center">Initialize Membership.</h2>
          <div className="space-y-6">
            <div>
              <label className="block text-[11px] font-body uppercase tracking-widest text-blue-200/40 mb-2">SRM Email Address</label>
              <input
                type="email"
                placeholder="name_surname@srmap.edu.in"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-5 focus:outline-none focus:border-[#40B2D6]/50 transition-colors text-blue-50 placeholder:text-blue-200/20 text-lg"
              />
            </div>
            <div>
              <label className="block text-[11px] font-body uppercase tracking-widest text-blue-200/40 mb-2">University Registration Number</label>
              <input
                type="text"
                placeholder="E.g. AP221100..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-5 focus:outline-none focus:border-[#40B2D6]/50 transition-colors text-blue-50 placeholder:text-blue-200/20 text-lg"
              />
            </div>
            <a
              href="https://www.ieee.org/"
              className="ieee-btn-primary w-full py-5 flex items-center justify-center mt-4"
            >
              Proceed to IEEE.org
            </a>
          </div>
        </form>
      </section>
    </motion.div>
  );
}
