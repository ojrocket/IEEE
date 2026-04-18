import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

const TechFestHero = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('2026-10-15T09:00:00');
    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);
      
      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[88vh] flex items-center justify-center pt-28 pb-14 overflow-hidden bg-white border-b border-ieee-deep/10">

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-semibold text-ieee-deep mb-6 tracking-tight"
        >
          SRM AP <span className="text-ieee-bright italic">TechFest 2026</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-2xl md:text-3xl text-[#55627d] mb-12 font-light tracking-wide"
        >
          Innovate. Compete. Elevate.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16"
        >
          <div className="flex items-center gap-3 text-lg text-ieee-deep bg-white px-8 py-3 rounded-full border border-ieee-deep/12">
            <Calendar className="w-5 h-5 text-ieee-bright" />
            <span>Oct 15 - 16, 2026</span>
          </div>
          <div className="flex items-center gap-3 text-lg text-ieee-deep bg-white px-8 py-3 rounded-full border border-ieee-deep/12">
            <MapPin className="w-5 h-5 text-ieee-bright" />
            <span>SRM University AP</span>
          </div>
        </motion.div>

        {/* Live Timer */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex justify-center gap-6 md:gap-12 mb-16"
        >
          {[
            { label: 'Days', val: timeLeft.days },
            { label: 'Hours', val: timeLeft.hours },
            { label: 'Mins', val: timeLeft.minutes },
            { label: 'Secs', val: timeLeft.seconds }
          ].map((unit, i) => (
            <div key={unit.label} className="flex flex-col items-center">
              <span className="text-4xl md:text-6xl font-semibold text-ieee-deep tabular-nums">
                {unit.val.toString().padStart(2, '0')}
              </span>
              <span className="text-xs text-[#5f6b84] uppercase tracking-[0.2em] font-semibold mt-2">{unit.label}</span>
            </div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button className="px-12 py-4 bg-ieee-bright text-white rounded-full font-semibold text-sm uppercase tracking-[0.12em] hover:bg-ieee-cyan transition-all">
            Register Now
          </button>
          <button className="px-12 py-4 bg-transparent text-ieee-deep border border-ieee-deep/25 hover:border-ieee-bright rounded-full font-semibold text-sm uppercase tracking-[0.12em] transition-all">
            View Events
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default TechFestHero;
