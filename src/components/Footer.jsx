import { Link } from 'react-router-dom';

export default function Footer() {
   return (
      <footer className="bg-[var(--bg-card)] border-t border-[var(--border-primary)] pt-24 pb-10 px-6 md:px-14 lg:px-20 mt-auto z-10 relative">
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16">
            <div className="max-w-xl">
               <div className="flex items-center gap-4 mb-8">
                  <span style={{ fontFamily: 'Chivo Mono' }} className="text-[12px] font-bold uppercase tracking-widest text-[var(--primary)]">IEEE SRM University AP</span>
               </div>
               <h2 className="headline-display text-[clamp(32px,5vw,64px)] mb-10 leading-[1.1]">
                 Advance Tech.<br />
                 Benefit <span className="word-cyan italic">Humanity.</span>
               </h2>
               <p className="text-[16px] text-[var(--text-secondary-c)] font-medium leading-relaxed max-w-sm">
                  The world's largest technical professional organization dedicated to advancing technology for the benefit of humanity.
               </p>
            </div>

            <div className="grid grid-cols-2 gap-12 md:gap-24">
               <div className="flex flex-col gap-4">
                  <span className="section-label text-[12px] mb-4">Explore</span>
                  <Link to="/about" className="text-[15px] font-bold text-[var(--text-muted-c)] hover:text-[var(--text-ice)] transition-colors duration-300">Mission & Vision</Link>
                  <Link to="/executive-board" className="text-[15px] font-bold text-[var(--text-muted-c)] hover:text-[var(--text-ice)] transition-colors duration-300">Executive Board</Link>
                  <Link to="/events" className="text-[15px] font-bold text-[var(--text-muted-c)] hover:text-[var(--text-ice)] transition-colors duration-300">Activations</Link>
                  <Link to="/gallery" className="text-[15px] font-bold text-[var(--text-muted-c)] hover:text-[var(--text-ice)] transition-colors duration-300">Archives</Link>
               </div>
               <div className="flex flex-col gap-4">
                  <span className="section-label text-[12px] mb-4">Connect</span>
                  <Link to="/join" className="text-[15px] font-bold text-[var(--text-muted-c)] hover:text-[var(--text-ice)] transition-colors duration-300">Membership</Link>
                  <a href="https://www.ieee.org/" target="_blank" rel="noopener noreferrer" className="text-[15px] font-bold text-[var(--text-muted-c)] hover:text-[var(--text-ice)] transition-colors duration-300">IEEE Global</a>
                  <Link to="/blog" className="text-[15px] font-bold text-[var(--text-muted-c)] hover:text-[var(--text-ice)] transition-colors duration-300">IEEE Spectrum</Link>
               </div>
            </div>
         </div>

         <div className="max-w-7xl mx-auto mt-24 pt-10 border-t border-[var(--border-mid)] flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
               <span style={{ fontFamily: 'Chivo Mono' }} className="text-[11px] font-bold text-[var(--text-dim)] uppercase tracking-widest">&copy; {new Date().getFullYear()} IEEE SRM University AP. All rights reserved.</span>
            </div>
            <div className="flex gap-8">
               <Link to="/privacy" style={{ fontFamily: 'Chivo Mono' }} className="text-[11px] font-bold text-[var(--text-dim)] hover:text-[var(--primary)] uppercase tracking-widest transition-colors">Privacy</Link>
               <Link to="/terms" style={{ fontFamily: 'Chivo Mono' }} className="text-[11px] font-bold text-[var(--text-dim)] hover:text-[var(--primary)] uppercase tracking-widest transition-colors">Compliance</Link>
            </div>
         </div>
      </footer>
   );
}
