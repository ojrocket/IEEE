import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const HackathonHero = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 });

  useEffect(() => {
    const targetDate = new Date('2026-10-24T09:00:00');
    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      
      setTimeLeft({ days, hours, minutes });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[82vh] flex items-center justify-center pt-28 pb-14 px-6 overflow-hidden bg-white border-b border-ieee-deep/10">

      <div className="container mx-auto relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-semibold uppercase tracking-tight mb-8 leading-tight text-ieee-deep"
          >
            SRM AP<br />
            <span className="text-ieee-bright italic">Hackathon 2026</span>
          </motion.h1>

          <div className="flex gap-6 md:gap-10 my-12 bg-white p-8 rounded-3xl border border-ieee-deep/10">
            {[
              { label: 'Days', value: timeLeft.days },
              { label: 'Hours', value: timeLeft.hours },
              { label: 'Mins', value: timeLeft.minutes }
            ].map((unit, i) => (
              <div key={unit.label} className="flex flex-col items-center">
                <div className="text-4xl md:text-6xl font-semibold font-mono text-ieee-bright">
                  {unit.value.toString().padStart(2, '0')}
                </div>
                <div className="text-[10px] text-[#5f6c86] uppercase tracking-[0.3em] mt-3 font-semibold">
                  {unit.label}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
            <button className="px-10 py-4 bg-ieee-bright hover:bg-ieee-cyan text-white font-semibold rounded-full transition-all uppercase tracking-[0.1em] text-sm">
              REGISTER NOW
            </button>
            <button className="px-10 py-4 bg-transparent border border-ieee-deep/25 text-ieee-deep font-semibold rounded-full transition-all hover:border-ieee-bright uppercase tracking-[0.1em] text-sm">
              VIEW BROCHURE
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="lg:w-5/12 text-center lg:text-right"
        >
          <p className="text-2xl md:text-3xl text-[#53617c] font-light leading-relaxed">
            A 36-hour cross-disciplinary arena pushing the boundaries of technology.<br />
            <span className="text-ieee-bright font-semibold block mt-4">Where code meets the future.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HackathonHero;
