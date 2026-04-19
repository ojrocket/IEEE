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
    <section className="relative min-h-[82vh] flex items-center justify-center pt-28 pb-14 px-6 overflow-hidden bg-[#0a0f1d] border-b border-white/5 font-body">

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
            className="font-display text-5xl md:text-7xl font-light uppercase tracking-tight mb-8 leading-tight text-blue-50"
          >
            SRM AP<br />
            <span className="text-[#40B2D6] italic">Hackathon 2026</span>
          </motion.h1>

          <div className="flex gap-6 md:gap-10 my-12 glass-card p-8 border border-white/5">
            {[
              { label: 'Days', value: timeLeft.days },
              { label: 'Hours', value: timeLeft.hours },
              { label: 'Mins', value: timeLeft.minutes }
            ].map((unit, i) => (
              <div key={unit.label} className="flex flex-col items-center">
                <div className="text-4xl md:text-6xl font-light font-display text-blue-50">
                  {unit.value.toString().padStart(2, '0')}
                </div>
                <div className="text-[10px] text-blue-200/40 uppercase tracking-[0.3em] mt-3 font-medium">
                  {unit.label}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
            <button className="ieee-btn-primary px-10 py-4 uppercase tracking-widest text-xs">
              REGISTER NOW
            </button>
            <button className="ieee-btn-outline px-10 py-4 uppercase tracking-widest text-xs">
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
          <p className="text-2xl md:text-3xl text-blue-200/40 font-light leading-relaxed">
            A 36-hour cross-disciplinary arena pushing the boundaries of technology.<br />
            <span className="text-blue-50 font-medium block mt-4">Where code meets the future.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HackathonHero;
