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
    <section className="relative min-h-[86vh] flex items-center pt-24 pb-12 overflow-hidden border-b border-white/5 bg-[#0a0f1d] font-body">
      
      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-12 gap-16 items-center">
        {/* Left Area */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-8 flex flex-col items-start"
        >
          <div className="inline-block px-5 py-2 rounded-full border border-white/10 bg-white/5 text-[#40B2D6] text-[10px] font-medium tracking-[0.24em] uppercase mb-8 backdrop-blur-xl">
            Official Workshop Series
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-light uppercase tracking-tight mb-6 leading-tight text-blue-50">
            Blockchain <br />
            <span className="text-[#40B2D6] italic">Mastery Workshop</span>
          </h1>

          <p className="text-lg md:text-xl text-blue-200/60 mb-10 max-w-2xl font-light leading-relaxed border-l-4 border-[#40B2D6] pl-6 py-2">
            Understanding underlying core protocols, smart contract deployment, and decentralized architecture for next-gen applications.
          </p>

          <div className="text-[10px] text-blue-200/40 font-medium tracking-[0.22em] uppercase mb-12 flex flex-wrap gap-8 items-center bg-white/5 p-4 rounded-2xl border border-white/10 backdrop-blur-xl">
            <span className="flex items-center gap-3"><Calendar className="w-4 h-4 text-[#40B2D6]" /> Oct 15-17, 2026</span>
            <span className="flex items-center gap-3"><Clock className="w-4 h-4 text-[#40B2D6]" /> 9:00 AM - 5:00 PM</span>
            <span className="flex items-center gap-3"><MapPin className="w-4 h-4 text-[#40B2D6]" /> Hybrid Mode</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 mb-12 w-full sm:w-auto">
            <button className="ieee-btn-primary px-10 py-4 uppercase tracking-widest text-xs flex items-center justify-center gap-3 group">
              Register Now <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
            <button className="ieee-btn-outline px-10 py-4 uppercase tracking-widest text-xs flex items-center justify-center gap-3">
              <Download className="w-5 h-5" /> View Brochure
            </button>
          </div>

          {/* Live Countdown */}
          <div className="flex items-center gap-10 p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl">
             <div className="text-[10px] text-blue-200/40 font-medium uppercase tracking-[0.3em] writing-vertical-rl transform rotate-180">Starts In</div>
             <div className="flex gap-8">
                {[
                  { label: 'Days', val: timeLeft.days },
                  { label: 'Hrs', val: timeLeft.hours },
                  { label: 'Min', val: timeLeft.minutes },
                  { label: 'Sec', val: timeLeft.seconds, color: 'text-[#40B2D6]' }
                ].map((unit, i) => (
                  <div key={unit.label} className="flex flex-col items-center">
                    <div className={`text-3xl font-display font-light tabular-nums ${unit.color || 'text-blue-50'}`}>{unit.val.toString().padStart(2, '0')}</div>
                    <div className="text-[8px] text-blue-200/40 font-medium uppercase tracking-widest mt-1">{unit.label}</div>
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
           <div className="w-full aspect-square rounded-full border border-white/5 flex items-center justify-center">
             <div className="absolute w-3/4 aspect-square rounded-full border border-dashed border-[#40B2D6]/25" />
             <div className="relative z-10 p-10 bg-white/5 rounded-full border border-white/10 backdrop-blur-2xl">
               <div className="text-8xl text-blue-50 font-medium">Ξ</div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkshopHero;
