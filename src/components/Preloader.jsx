import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
   const [isLoading, setIsLoading] = useState(true);
   const numberRef = useRef(null);

   useEffect(() => {
      // Elegant count-up
      gsap.to(numberRef.current, {
         innerHTML: 100,
         duration: 2.2,
         snap: { innerHTML: 1 },
         ease: "power1.inOut",
      });

      const timer = setTimeout(() => {
         setIsLoading(false);
      }, 2600);

      return () => clearTimeout(timer);
   }, []);

   return (
      <AnimatePresence>
         {isLoading && (
            <motion.div
               initial={{ opacity: 1 }}
               exit={{ opacity: 0, scale: 1.05 }}
               transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
               className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#0a0f1d] pointer-events-none"
            >
               <div className="relative w-full px-12 md:px-24 flex flex-col items-start">
                  
                  {/* Top Label */}
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-mono-label mb-2"
                  >
                    ( 00 ) BOOTING_IEEE_PORTAL
                  </motion.div>

                  {/* Massive Counter */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="font-display text-[clamp(80px,20vw,240px)] font-extralight text-blue-50 leading-none tracking-tighter flex items-baseline gap-4"
                  >
                    <span ref={numberRef}>0</span>
                    <span className="text-[0.4em] text-ieee-cyan">%</span>
                  </motion.div>

                  {/* Sub-label */}
                  <div className="flex w-full justify-between items-end mt-4">
                    <motion.span 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                      className="text-mono-label max-w-[200px]"
                    >
                      EST. 2019 — SRM UNIVERSITY AP AMARAVATI CAMPUS
                    </motion.span>
                    <motion.div 
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 2.2, ease: "easeInOut" }}
                      className="flex-1 h-px bg-white/10 mx-8 origin-left"
                    />
                    <motion.span 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="text-mono-label"
                    >
                      v4.2.0_STABLE
                    </motion.span>
                  </div>

               </div>
            </motion.div>
         )}
      </AnimatePresence>
   );
}
