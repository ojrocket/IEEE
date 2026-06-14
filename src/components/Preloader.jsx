import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
   const [progress, setProgress] = useState(0);
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      document.body.classList.add('is-loading');
      let count = 0;
      const interval = setInterval(() => {
         count += 2;
         if (count >= 100) {
            count = 100;
            setProgress(100);
            clearInterval(interval);
            setTimeout(() => {
               setIsLoading(false);
               document.body.classList.remove('is-loading');
            }, 600);
         } else {
            setProgress(count);
         }
      }, 20);

      return () => {
         clearInterval(interval);
         document.body.classList.remove('is-loading');
      };
   }, []);

   return (
      <AnimatePresence>
         {isLoading && (
            <motion.div
               initial={{ clipPath: 'inset(0% 0% 0% 0%)' }}
               exit={{
                  clipPath: 'inset(0% 0% 100% 0%)',
                  transition: {
                     duration: 0.8,
                     ease: [0.76, 0, 0.24, 1]
                  }
               }}
               className="fixed inset-0 z-[100] bg-[var(--bg-darkest)] flex flex-col justify-between p-8 md:p-16 overflow-hidden select-none"
            >
               {/* Radial glow pulse in background */}
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,166,35,0.03)_0%,transparent_60%)] animate-pulse pointer-events-none" />

               {/* Top Meta Details */}
               <div className="relative z-10 w-full flex justify-between items-center text-[10px] md:text-[11px] font-mono tracking-[0.2em] text-[var(--text-muted-c)] uppercase">
                  <span>IEEE SRM AP</span>
                  <span>EST. 2019</span>
               </div>

               {/* Center Wordmark Reveal */}
               <div className="relative z-10 flex flex-col items-center justify-center my-auto">
                  <div className="relative overflow-hidden py-4">
                     {/* Masked IEEE Text */}
                     <motion.h1
                        initial={{ clipPath: 'inset(0% 100% 0% 0%)' }}
                        animate={{ clipPath: `inset(0% ${100 - progress}% 0% 0%)` }}
                        transition={{ ease: "easeOut", duration: 0.1 }}
                        className="text-7xl md:text-9xl font-black tracking-[-0.05em] text-transparent bg-clip-text bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] select-none uppercase font-display"
                     >
                        IEEE
                     </motion.h1>
                     
                     {/* Underlying subtle text */}
                     <h1 className="absolute inset-0 text-7xl md:text-9xl font-black tracking-[-0.05em] text-[var(--border-subtle)] select-none uppercase font-display pointer-events-none -z-10 py-4">
                        IEEE
                     </h1>
                  </div>

                  <motion.p
                     initial={{ opacity: 0, y: 10 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: 0.2, duration: 0.6 }}
                     className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--text-secondary-c)] mt-4 text-center"
                  >
                     Advancing Technology for Humanity
                  </motion.p>
               </div>

               {/* Bottom Progress Tracker & Bar */}
               <div className="relative z-10 w-full flex flex-col gap-4">
                  <div className="flex justify-between items-end">
                     <span className="text-[10px] md:text-[11px] font-mono tracking-[0.2em] text-[var(--text-muted-c)] uppercase">
                        Loading System Assets...
                     </span>
                     <span className="font-mono text-2xl font-bold text-[var(--text-ice)] tabular-nums">
                        {progress}%
                     </span>
                  </div>

                  {/* Progress Line */}
                  <div className="w-full h-[2px] bg-[var(--border-subtle)] overflow-hidden">
                     <motion.div
                        className="h-full bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)]"
                        initial={{ width: '0%' }}
                        animate={{ width: `${progress}%` }}
                        transition={{ ease: "easeOut", duration: 0.1 }}
                     />
                  </div>
               </div>
            </motion.div>
         )}
      </AnimatePresence>
   );
}
