import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', path: '/about', desc: 'OUR_STORY' },
    { name: 'Board', path: '/executive-board', desc: 'LEADERSHIP' },
    { name: 'Sponsors', path: '/sponsors', desc: 'PARTNERS' },
    { name: 'Events', path: '/events', desc: 'ACTIVATIONS' },
    { name: 'Gallery', path: '/gallery', desc: 'ARCHIVES' },
    { name: 'Membership', path: '/join', desc: 'JOIN_US' },
    { name: 'Blog', path: '/blog', desc: 'INSIGHTS' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 inset-x-0 z-50 h-16 flex items-center justify-between px-6 md:px-12 transition-all duration-400 ${
          isScrolled || location.pathname !== '/'
            ? 'bg-[rgba(13,17,23,0.85)] backdrop-blur-lg border-b border-[rgba(64,178,214,0.10)] shadow-none'
            : 'bg-transparent border-transparent backdrop-blur-none'
        }`}
      >
        <Link 
          to="/" 
          onClick={() => setIsMobileMenuOpen(false)} 
          className="flex items-center gap-3 group"
        >
          <span className="font-display text-[14px] font-medium text-[#E2EEF9] tracking-wide uppercase">
            IEEE <span className="text-[#40B2D6]">SRM AP</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="dual-nav-link"
              >
                <span className={`nav-label-main text-[13px] font-body transition-colors ${
                  location.pathname === link.path ? 'text-[#E2EEF9]' : 'text-[#A8C4DE] hover:text-[#E2EEF9]'
                }`}>
                  {link.name}
                </span>
                <span className="nav-label-desc uppercase">
                  {link.desc}
                </span>
                
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-[#0ECAD4] rounded-full"
                    transition={{ type: "spring", stiffness: 400, damping: 38 }}
                  />
                )}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden relative z-[1001] text-[#E2EEF9] w-8 h-8 flex items-center justify-center p-0"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#0D1117]/95 backdrop-blur-md flex flex-col justify-between px-7 py-12"
          >
            <div className="flex flex-col mt-20">
              <motion.div 
                className="flex flex-col"
                variants={{
                  container: { transition: { staggerChildren: 0.065, delayChildren: 0.08 } }
                }}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                {navLinks.map((link) => (
                  <motion.div
                    key={link.path}
                    variants={{
                      initial: { y: 70, opacity: 0 },
                      animate: { y: 0, opacity: 1, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
                      exit: { y: -30, opacity: 0, transition: { duration: 0.3, ease: [0.55, 0, 1, 0.45] } }
                    }}
                    className="mb-8"
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="font-display font-light text-[clamp(42px,8vw,64px)] leading-tight text-[#E2EEF9] hover:text-[#40B2D6] transition-colors duration-200 block"
                    >
                      {link.name}
                    </Link>
                    <span className="block font-mono text-[11px] uppercase tracking-[0.12em] text-[#5a7fa8] mt-1">
                      {link.desc}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Mobile Bottom Bar */}
            <div className="flex flex-col gap-6 pt-6 border-t border-[rgba(64,178,214,0.10)]">
              <div className="flex gap-8">
                <a href="#" className="paren-wrap text-[12px] text-[#5a7fa8] hover:text-[#40B2D6] transition-colors uppercase tracking-widest font-mono">IG</a>
                <a href="#" className="paren-wrap text-[12px] text-[#5a7fa8] hover:text-[#40B2D6] transition-colors uppercase tracking-widest font-mono">TW</a>
                <a href="#" className="paren-wrap text-[12px] text-[#5a7fa8] hover:text-[#40B2D6] transition-colors uppercase tracking-widest font-mono">LI</a>
              </div>
              <span className="font-mono text-[11px] text-[#2d4a6b] uppercase tracking-[0.1em]">
                IEEE SRM UNIVERSITY AP © 2024
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
