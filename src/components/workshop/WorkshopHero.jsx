import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, ArrowRight, Download } from 'lucide-react';

const WorkshopHero = () => {
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
    <section className="relative min-h-[86vh] flex items-center pt-24 pb-12 overflow-hidden border-b border-ieee-deep/10 bg-white">
      
      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-12 gap-16 items-center">
        {/* Left Area */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-8 flex flex-col items-start"
        >
          <div className="inline-block px-5 py-2 rounded-full border border-ieee-bright/30 bg-white text-ieee-bright text-xs font-semibold tracking-[0.24em] uppercase mb-8">
            Official Workshop Series
          </div>

          <h1 className="text-5xl md:text-7xl font-semibold uppercase tracking-tight mb-6 leading-tight text-ieee-deep">
            Blockchain <br />
            <span className="text-ieee-bright italic">Mastery Workshop</span>
          </h1>

          <p className="text-lg md:text-xl text-[#55627d] mb-10 max-w-2xl font-medium leading-relaxed border-l-4 border-ieee-bright pl-6 py-2">
            Understanding underlying core protocols, smart contract deployment, and decentralized architecture for next-gen applications.
          </p>

          <div className="text-[10px] text-[#5d6a84] font-semibold tracking-[0.22em] uppercase mb-12 flex flex-wrap gap-8 items-center bg-white p-4 rounded-2xl border border-ieee-deep/10">
            <span className="flex items-center gap-3"><Calendar className="w-4 h-4 text-ieee-cyan" /> Oct 15-17, 2026</span>
            <span className="flex items-center gap-3"><Clock className="w-4 h-4 text-ieee-cyan" /> 9:00 AM - 5:00 PM</span>
            <span className="flex items-center gap-3"><MapPin className="w-4 h-4 text-ieee-cyan" /> Hybrid Mode</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 mb-12 w-full sm:w-auto">
            <button className="px-10 py-4 bg-ieee-bright hover:bg-ieee-cyan text-white font-semibold rounded-full transition-all flex items-center justify-center gap-3 group text-sm uppercase tracking-[0.12em]">
              Register Now <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
            <button className="px-10 py-4 bg-transparent border border-ieee-deep/25 text-ieee-deep font-semibold rounded-full transition-all hover:border-ieee-bright flex items-center justify-center gap-3 text-sm uppercase tracking-[0.12em]">
              <Download className="w-5 h-5" /> View Brochure
            </button>
          </div>

          {/* Live Countdown */}
          <div className="flex items-center gap-10 p-6 rounded-3xl bg-white border border-ieee-deep/10">
             <div className="text-[10px] text-[#5d6a84] font-semibold uppercase tracking-[0.3em] writing-vertical-rl transform rotate-180">Starts In</div>
             <div className="flex gap-8">
                {[
                  { label: 'Days', val: timeLeft.days },
                  { label: 'Hrs', val: timeLeft.hours },
                  { label: 'Min', val: timeLeft.minutes },
                  { label: 'Sec', val: timeLeft.seconds, color: 'text-ieee-cyan' }
                ].map((unit, i) => (
                  <div key={unit.label} className="flex flex-col items-center">
                    <div className={`text-3xl font-semibold tabular-nums ${unit.color || 'text-ieee-deep'}`}>{unit.val.toString().padStart(2, '0')}</div>
                    <div className="text-[8px] text-[#5d6a84] font-semibold uppercase tracking-widest mt-1">{unit.label}</div>
                  </div>
                ))}
             </div>
          </div>
        </motion.div>

        {/* Right Area (Visuals) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="hidden lg:col-span-4 lg:flex items-center justify-center relative"
        >
           <div className="w-full aspect-square rounded-full border border-ieee-deep/12 flex items-center justify-center">
             <div className="absolute w-3/4 aspect-square rounded-full border border-dashed border-ieee-bright/25" />
             <div className="relative z-10 p-10 bg-white rounded-full border border-ieee-deep/10">
               <div className="text-8xl text-ieee-bright font-semibold">Ξ</div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkshopHero;
