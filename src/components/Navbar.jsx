import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isEventsDropdownOpen, setIsEventsDropdownOpen] = useState(false);
  const [isSocietiesDropdownOpen, setIsSocietiesDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

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
    { name: 'Events', path: '/events', hasDropdown: true },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Membership', path: '/join' },
    { name: 'Blog', path: '/blog' },
  ];

  const eventsDropdownItems = [
    { name: 'Hackathon', path: '/hackathon' },
    { name: 'TechFest', path: '/techfest' },
    { name: 'Workshop', path: '/workshop' },
  ];

  const societiesDropdownItems = [
    { name: 'AI Society', path: '/societies/ai' },
    { name: 'Computer Society', path: '/societies/computer' },
    { name: 'Power & Energy', path: '/societies/power' },
    { name: 'Robotics Society', path: '/societies/robotics' },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsEventsDropdownOpen(false);
        setIsSocietiesDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getNavbarClasses = () => {
    const baseClasses = 'sticky top-0 left-0 right-0 z-[1000] flex items-center justify-between px-6 md:px-12 transition-all duration-500';
    const scrolledClasses = isScrolled || location.pathname !== '/' 
      ? 'bg-ieee-deep/90 backdrop-blur-md border-b border-[var(--border-subtle)] shadow-none py-5' 
      : 'bg-transparent backdrop-blur-none border-transparent py-6';
    return `${baseClasses} ${scrolledClasses}`;
  };

  return (
    <>
      <style jsx>{`
        .navbar-dropdown-menu {
          position: absolute !important;
          top: 110% !important;
          left: 0 !important;
          min-width: 200px !important;
          background: #0a0f1d !important;
          border: 1px solid rgba(64, 178, 214, 0.12) !important;
          border-radius: 12px !important;
          padding: 8px 0 !important;
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4) !important;
          display: flex !important;
          flex-direction: column !important;
          gap: 4px !important;
          z-index: 1000 !important;
          backdrop-filter: blur(12px) !important;
        }
        
        .navbar-dropdown-menu a {
          display: block !important;
          padding: 10px 18px !important;
          font-size: 14px !important;
          font-weight: 500 !important;
          color: #EAF3FB !important;
          text-transform: none !important;
          margin: 0 6px !important;
          border-radius: 6px !important;
          transition: all 0.2s ease !important;
          text-decoration: none !important;
        }
        
        .navbar-dropdown-menu a:hover {
          background: rgba(64, 178, 214, 0.08) !important;
          color: #40B2D6 !important;
          transform: translateX(4px) !important;
        }
        
        .navbar-dropdown-menu a.active {
          background: rgba(64, 178, 214, 0.12) !important;
          color: #40B2D6 !important;
        }
        
        .navbar-nav-text {
          color: #EAF3FB !important;
        }
        
        .navbar-nav-text:hover {
          color: #40B2D6 !important;
        }
        
        .navbar-nav-text.active {
          color: #40B2D6 !important;
        }
      `}</style>
      
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.76, 0, 0.24, 1] }}
        className={getNavbarClasses()}
      >
        <div className="flex items-center gap-6">
          <Link 
            to="/" 
            onClick={() => setIsMobileMenuOpen(false)} 
            className="flex items-center gap-3 group hover:opacity-90 transition-all duration-300"
          >
            <img
              src="/ieee-horizontal-logo.png"
              alt="IEEE SRM AP Logo"
              className="h-16 w-auto object-contain"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center justify-center flex-1">
          <div className="flex items-center gap-6 lg:gap-8 uppercase tracking-[0.05em]">
            {navLinks.map((link) => {
              const isEventsDropdown = link.path === '/events';
              const isSocietiesDropdown = link.path === '/societies/ai';
              const dropdownOpen = isEventsDropdown ? isEventsDropdownOpen : isSocietiesDropdown ? isSocietiesDropdownOpen : false;
              const dropdownItems = isEventsDropdown ? eventsDropdownItems : isSocietiesDropdown ? societiesDropdownItems : [];
              const setDropdownOpen = isEventsDropdown ? setIsEventsDropdownOpen : isSocietiesDropdown ? setIsSocietiesDropdownOpen : null;
              
              if (link.hasDropdown) {
                return (
                  <div key={link.path} className="relative" ref={dropdownRef}>
                    <Link
                      to={link.path}
                      className="relative group py-3 px-2 flex items-center gap-1 text-[13px] text-blue-100 font-body hover:text-[#40B2D6] transition-colors duration-200"
                      onMouseEnter={() => setDropdownOpen(true)}
                      onMouseLeave={() => setDropdownOpen(false)}
                    >
                      <span className={`relative z-10 ${
                        (isEventsDropdown && (location.pathname === link.path || location.pathname.startsWith('/hackathon') || location.pathname.startsWith('/techfest') || location.pathname.startsWith('/workshop'))) ||
                        (isSocietiesDropdown && (location.pathname.startsWith('/societies/')))
                          ? 'active' : ''
                      }`}>
                        {link.name}
                      </span>
                      {((isEventsDropdown && (location.pathname === link.path || location.pathname.startsWith('/hackathon') || location.pathname.startsWith('/techfest') || location.pathname.startsWith('/workshop'))) ||
                        (isSocietiesDropdown && location.pathname.startsWith('/societies/'))) && (
                        <motion.div
                          layoutId="nav-indicator"
                          transition={{ type: "spring", stiffness: 380, damping: 35 }}
                          className="absolute bottom-0 left-0 right-0 inline-block h-[2px] bg-[#40B2D6] rounded-full"
                        />
                      )}
                      <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
                    </Link>

                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.95, y: -6 }}
                          animate={{ opacity: 1, scale: 1, y: 0, transition: { duration: 0.18 } }}
                          exit={{ opacity: 0, scale: 0.95, y: -6, transition: { duration: 0.12 } }}
                          className="glass-card py-2 min-w-[160px] absolute top-full left-0 mt-1.5"
                          onMouseEnter={() => setDropdownOpen(true)}
                          onMouseLeave={() => setDropdownOpen(false)}
                        >
                          {dropdownItems.map((item) => (
                            <Link
                              key={item.path}
                              to={item.path}
                              onClick={() => setDropdownOpen(false)}
                              className="block px-4 py-2.5 text-[13px] text-blue-100 hover:text-[#40B2D6] hover:bg-[rgba(64,178,214,0.08)] transition-colors border-l-2 border-transparent hover:border-[#40B2D6]"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className="relative group py-3 px-2 text-[13px] text-blue-100 font-body hover:text-[#40B2D6] transition-colors duration-200"
                >
                  <span className={`relative z-10 ${location.pathname === link.path ? 'active' : ''}`}>
                    {link.name}
                  </span>
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="nav-indicator"
                      transition={{ type: "spring", stiffness: 380, damping: 35 }}
                      className="absolute bottom-0 left-0 right-0 inline-block h-[2px] bg-[#40B2D6] rounded-full"
                    />
                  )}
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#40B2D6] rounded-full transform scale-x-0 origin-right transition-transform group-hover:scale-x-100 group-hover:origin-left" />
                </Link>
              );
            })}
          </div>
        </div>

        
        <button
          className="lg:hidden relative z-[1001] p-3 text-blue-50 hover:text-ieee-cyan transition-all duration-300 hover:scale-105 active:scale-95"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[999] bg-[#0a0f1d]/97 backdrop-blur-sm text-white flex flex-col items-center justify-center pt-20"
          >
            <div className="flex flex-col gap-5 text-center">
              {navLinks.map((link, i) => {
                const isEventsDropdown = link.path === '/events';
                const isSocietiesDropdown = link.path === '/societies/ai';
                const dropdownItems = isEventsDropdown ? eventsDropdownItems : isSocietiesDropdown ? societiesDropdownItems : [];
                
                if (link.hasDropdown) {
                  return (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.05 + (i * 0.03), duration: 0.4 }}
                    >
                      <Link
                        to={link.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`text-blue-50 font-display text-[clamp(32px,7vw,56px)] font-light hover:text-[#40B2D6] transition-colors block py-3 px-4 ${
                          (isEventsDropdown && (location.pathname === link.path || location.pathname.startsWith('/hackathon') || location.pathname.startsWith('/techfest') || location.pathname.startsWith('/workshop'))) ||
                          (isSocietiesDropdown && location.pathname.startsWith('/societies/'))
                            ? 'text-[#40B2D6]' : ''
                        }`}
                      >
                        {link.name}
                      </Link>
                      <div className="mt-2 space-y-2">
                        {dropdownItems.map((item, itemIndex) => (
                          <motion.div
                            key={item.path}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 + (itemIndex * 0.05), duration: 0.3 }}
                          >
                            <Link
                              to={item.path}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className={`text-blue-50 font-display text-[clamp(24px,5vw,40px)] font-light hover:text-[#40B2D6] transition-colors block py-2 px-4 ${location.pathname === item.path ? 'text-[#40B2D6]' : ''
                                }`}
                            >
                              {item.name}
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  );
                }

                return (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 + (i * 0.03), duration: 0.4 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`text-blue-50 font-display text-[clamp(32px,7vw,56px)] font-light hover:text-[#40B2D6] transition-colors block py-3 px-4 ${location.pathname === link.path ? 'text-[#40B2D6]' : ''
                        }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}

                          </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
