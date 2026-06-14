import { motion } from 'framer-motion';
import { Outlet, Link, useLocation } from 'react-router-dom';

export default function AboutLayout() {
  const location = useLocation();
  
  const aboutLinks = [
    { name: 'Overview', path: '/about', index: '01' },
    { name: 'Governance', path: '/about/governance', index: '02' },
    { name: 'Leadership', path: '/about/leadership', index: '03' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="min-h-screen pt-40 px-6 md:px-14 lg:px-20 bg-[var(--bg-darkest)] text-[var(--text-ice)]"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20">
         {/* Mobile Navigation */}
         <div className="flex md:hidden gap-8 mb-16 overflow-x-auto pb-4 hide-scrollbar border-b border-[var(--border-subtle)]">
           {aboutLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link 
                  key={link.path}
                  to={link.path}
                  className={`text-[13px] font-mono uppercase tracking-widest whitespace-nowrap transition-all ${
                    isActive ? 'text-[var(--primary)]' : 'text-[var(--text-muted-c)]'
                  }`}
                >
                  {link.name}
                </Link>
              )
           })}
         </div>

         <aside className="w-1/4 hidden md:block">
            <div className="sticky top-40 flex flex-col gap-10">
              <span className="section-label block mb-4">About</span>
              <div className="flex flex-col gap-6">
                {aboutLinks.map((link) => {
                   const isActive = location.pathname === link.path;
                   return (
                     <Link 
                       key={link.path}
                       to={link.path}
                       className="group flex items-center gap-4"
                     >
                       <span className={`font-mono text-[10px] transition-colors ${isActive ? 'text-[var(--primary)]' : 'text-[var(--text-dim)]'}`}>
                         {link.index}
                       </span>
                       <span className={`headline-display text-4xl transition-all uppercase ${
                         isActive ? 'text-[var(--text-ice)] italic' : 'text-[var(--text-dim)] hover:text-[var(--text-secondary-c)]'
                       }`}>
                         {link.name}
                       </span>
                     </Link>
                   )
                })}
              </div>
            </div>
         </aside>

         {/* Content Area */}
         <main className="flex-1 pb-32">
            <Outlet />
         </main>
      </div>
    </motion.div>
  );
}
