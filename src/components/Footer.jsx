import { Link } from 'react-router-dom';

export default function Footer() {
   return (
      <footer className="bg-[#0D1117] border-t border-white/[0.04] pt-24 pb-10 px-6 md:px-14 lg:px-20 mt-auto z-10 relative">
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16">
            <div className="max-w-xl">
               <div className="flex items-center gap-4 mb-8">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#5a7fa8]">IEEE // SRM_AP_BRANCH</span>
               </div>
               <h2 className="headline-display text-[clamp(32px,5vw,64px)] mb-10 leading-[1.1]">
                 Advance Tech.<br />
                 Benefit <span className="word-cyan italic">Humanity.</span>
               </h2>
               <p className="text-[14px] text-[#A8C4DE] font-body leading-relaxed max-w-sm">
                  The world's largest technical professional organization dedicated to advancing technology for the benefit of humanity.
               </p>
            </div>

            <div className="grid grid-cols-2 gap-12 md:gap-24">
               <div className="flex flex-col gap-4">
                  <span className="paren-index text-[10px] mb-4 uppercase">EXPLORE_INDEX</span>
                  <Link to="/about" className="text-[14px] text-[#5a7fa8] hover:text-[#0ECAD4] transition-colors duration-300">Mission & Vision</Link>
                  <Link to="/executive-board" className="text-[14px] text-[#5a7fa8] hover:text-[#0ECAD4] transition-colors duration-300">Executive Board</Link>
                  <Link to="/events" className="text-[14px] text-[#5a7fa8] hover:text-[#0ECAD4] transition-colors duration-300">Activations</Link>
                  <Link to="/gallery" className="text-[14px] text-[#5a7fa8] hover:text-[#0ECAD4] transition-colors duration-300">Archives</Link>
               </div>
               <div className="flex flex-col gap-4">
                  <span className="paren-index text-[10px] mb-4 uppercase">NETWORK_LINK</span>
                  <Link to="/join" className="text-[14px] text-[#5a7fa8] hover:text-[#0ECAD4] transition-colors duration-300">Membership</Link>
                  <a href="https://www.ieee.org/" target="_blank" rel="noopener noreferrer" className="text-[14px] text-[#5a7fa8] hover:text-[#0ECAD4] transition-colors duration-300">IEEE Global</a>
                  <Link to="/blog" className="text-[14px] text-[#5a7fa8] hover:text-[#0ECAD4] transition-colors duration-300">IEEE Spectrum</Link>
               </div>
            </div>
         </div>

         <div className="max-w-7xl mx-auto mt-24 pt-10 border-t border-white/[0.04] flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
               <span className="font-mono text-[10px] text-[#2d4a6b] uppercase tracking-widest">&copy; {new Date().getFullYear()} IEEE_SRM_AP // CORE_RESERVED</span>
            </div>
            <div className="flex gap-8">
               <Link to="/privacy" className="font-mono text-[10px] text-[#2d4a6b] hover:text-[#A8C4DE] uppercase tracking-widest transition-colors">Privacy</Link>
               <Link to="/terms" className="font-mono text-[10px] text-[#2d4a6b] hover:text-[#A8C4DE] uppercase tracking-widest transition-colors">Compliance</Link>
            </div>
         </div>
      </footer>
   );
}
