import { Link } from 'react-router-dom';

export default function Footer() {
   return (
      <footer className="bg-[#0a0f1d] border-t border-[var(--border-subtle)] pt-20 pb-8 px-8 md:px-16 mt-auto z-10 relative">
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
            <div className="max-w-md">
               <div className="flex items-center gap-4 mb-6">
                  <span className="font-display text-[14px] font-medium text-blue-50 tracking-wide">IEEE SRM AP</span>
               </div>
               <p className="font-display text-[clamp(28px,4vw,48px)] font-light text-blue-50 mb-8 leading-tight">
                  Shape the future with us.
               </p>
               <p className="text-[13px] text-blue-200 font-body leading-relaxed max-w-xs">
                  Empowering the innovators of tomorrow. Join our community to access exclusive resources, workshops, and global networking opportunities.
               </p>
            </div>

            <div className="flex gap-8 md:gap-24 font-body">
               <div className="flex flex-col gap-2">
                  <span className="text-[11px] uppercase tracking-widest text-[#5a7fa8] mb-3 font-body">Explore</span>
                  <Link to="/about" className="text-[13px] text-blue-200 hover:text-[#40B2D6] transition-colors">About Us</Link>
                  <Link to="/executive-board" className="text-[13px] text-blue-200 hover:text-[#40B2D6] transition-colors">Executive Board</Link>
                  <Link to="/events" className="text-[13px] text-blue-200 hover:text-[#40B2D6] transition-colors">Events</Link>
               </div>
               <div className="flex flex-col gap-2">
                  <span className="text-[11px] uppercase tracking-widest text-[#5a7fa8] mb-3 font-body">Connect</span>
                  <Link to="/join" className="text-[13px] text-blue-200 hover:text-[#40B2D6] transition-colors">Join IEEE</Link>
                  <a href="https://www.ieee.org/" target="_blank" rel="noopener noreferrer" className="text-[13px] text-blue-200 hover:text-[#40B2D6] transition-colors">IEEE Global</a>
               </div>
            </div>
         </div>

         <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-[var(--border-subtle)] flex flex-col md:flex-row justify-between items-center gap-4 text-[12px] text-[#5a7fa8] font-body">
            <span>&copy; {new Date().getFullYear()} IEEE Student Branch. All rights reserved.</span>
            <div className="flex gap-6">
               <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
               <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
         </div>
      </footer>
   );
}
