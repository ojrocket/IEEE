import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

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
    { name: 'About', path: '/about' },
    { name: 'Board', path: '/executive-board' },
    { name: 'Sponsors', path: '/sponsors' },
    { name: 'Events', path: '/events' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Membership', path: '/join' },
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 inset-x-0 z-50 h-16 flex items-center justify-between px-6 md:px-12 transition-all duration-300 ${
          isScrolled || location.pathname !== '/'
            ? 'bg-[var(--bg-darkest)]/85 backdrop-blur-md border-b border-[var(--border-mid)] shadow-none'
            : 'bg-transparent border-transparent'
        }`}
      >
        <Link 
          to="/" 
          onClick={() => setIsMobileMenuOpen(false)} 
          className="flex items-center gap-3 group"
        >
          <span style={{ fontFamily: 'Chivo Mono' }} className="text-[14px] font-bold text-[var(--text-ice)] tracking-wide uppercase">
            IEEE <span className="text-[var(--primary)]">SRM AP</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  style={{ fontFamily: 'Chivo Mono' }}
                  className={`relative py-2 text-[12px] font-bold tracking-widest uppercase transition-colors ${
                    isActive ? 'text-[var(--primary)]' : 'text-[var(--text-secondary-c)] hover:text-[var(--text-ice)]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[var(--primary)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden relative z-[1001] text-[var(--text-ice)] w-8 h-8 flex items-center justify-center p-0"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[var(--bg-darkest)] flex flex-col justify-between px-7 py-12"
          >
            <div className="flex flex-col mt-20">
              <motion.div 
                className="flex flex-col"
                variants={{
                  container: { transition: { staggerChildren: 0.05 } }
                }}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                {navLinks.map((link) => (
                  <motion.div
                    key={link.path}
                    variants={{
                      initial: { x: -20, opacity: 0 },
                      animate: { x: 0, opacity: 1, transition: { duration: 0.4, ease: 'easeOut' } },
                      exit: { x: -20, opacity: 0, transition: { duration: 0.2, ease: 'easeIn' } }
                    }}
                    className="mb-6 border-b border-[var(--border-mid)] pb-4"
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      style={{ fontFamily: 'Archivo' }}
                      className="font-black text-4xl uppercase text-[var(--text-ice)] hover:text-[var(--primary)] transition-colors block"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Mobile Bottom Bar */}
            <div className="flex flex-col gap-6 pt-6 border-t border-[var(--border-primary)]">
              <div className="flex gap-8">
                <a href="#" style={{ fontFamily: 'Chivo Mono' }} className="text-[12px] font-bold text-[var(--text-muted-c)] hover:text-[var(--primary)] transition-colors uppercase tracking-widest">IG</a>
                <a href="#" style={{ fontFamily: 'Chivo Mono' }} className="text-[12px] font-bold text-[var(--text-muted-c)] hover:text-[var(--primary)] transition-colors uppercase tracking-widest">TW</a>
                <a href="#" style={{ fontFamily: 'Chivo Mono' }} className="text-[12px] font-bold text-[var(--text-muted-c)] hover:text-[var(--primary)] transition-colors uppercase tracking-widest">LI</a>
              </div>
              <span style={{ fontFamily: 'Chivo Mono' }} className="text-[11px] font-bold text-[var(--text-dim)] uppercase tracking-widest">
                IEEE SRM UNIVERSITY AP © 2024
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
