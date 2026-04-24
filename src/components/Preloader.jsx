import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
   const [isLoading, setIsLoading] = useState(true);
   const numberRef = useRef(null);

   useEffect(() => {
      document.body.classList.add('is-loading');
      let count = 0;
      const interval = setInterval(() => {
         count++;
         if (numberRef.current) numberRef.current.textContent = count;
         if (count >= 100) {
            clearInterval(interval);
            setTimeout(() => {
               setIsLoading(false);
               document.body.classList.remove('is-loading');
            }, 300);
         }
      }, 12);

      return () => {
         clearInterval(interval);
         document.body.classList.remove('is-loading');
      };
   }, []);

   return (
      <AnimatePresence>
         {isLoading && (
            <motion.div
               initial={{ opacity: 1 }}
               exit={{
                  opacity: 0,
                  transition: {
                     duration: 0.4,
                     ease: "easeInOut"
                  }
               }}
               className="fixed inset-0 z-[100] bg-[#0a0f1d] flex items-center justify-center"
            >
               {/* Optional Logo element - adding placeholder as requested */}
               <div className="w-7 h-7 opacity-30 mb-6 object-contain bg-ieee-cyan rounded-full animate-pulse" />

               <div className="relative w-full px-12 md:px-24 flex flex-col items-center">
                  
                  {/* Top Label */}
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#2d4a6b] mt-3"
                  >
                    Experience Loading
                  </motion.div>

                  {/* Massive Counter */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="font-sans text-[28px] font-light tracking-[0.3em] text-[#5a7fa8] tabular-nums flex items-baseline"
                  >
                    <span ref={numberRef}>0</span>
                    <span className="font-sans text-[16px] font-light text-[#5a7fa8] ml-1">%</span>
                  </motion.div>

                  {/* Progress Bar */}
                  <div className="hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 1.2, ease: "linear" }}
                      className="h-full bg-[#40B2D6]"
                    />
                  </div>

                  {/* Footer Label */}
                  <motion.span 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#2d4a6b] mt-3"
                  >
                    EST. 2019 — SRM UNIVERSITY AP
                  </motion.span>

               </div>
            </motion.div>
         )}
      </AnimatePresence>
   );
}
