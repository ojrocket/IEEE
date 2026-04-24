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
      className="min-h-screen pt-40 px-6 md:px-14 lg:px-20 bg-[#0D1117] text-[#E2EEF9]"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20">
         {/* Mobile Navigation */}
         <div className="flex md:hidden gap-8 mb-16 overflow-x-auto pb-4 hide-scrollbar border-b border-white/[0.04]">
           {aboutLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link 
                  key={link.path}
                  to={link.path}
                  className={`text-[13px] font-mono uppercase tracking-widest whitespace-nowrap transition-all ${
                    isActive ? 'text-[#0ECAD4]' : 'text-[#5a7fa8]'
                  }`}
                >
                  {link.name}
                </Link>
              )
           })}
         </div>

         <aside className="w-1/4 hidden md:block">
            <div className="sticky top-40 flex flex-col gap-10">
              <span className="paren-index block mb-4 uppercase">ABT_DIRECTIVE_B4</span>
              <div className="flex flex-col gap-6">
                {aboutLinks.map((link) => {
                   const isActive = location.pathname === link.path;
                   return (
                     <Link 
                       key={link.path}
                       to={link.path}
                       className="group flex items-center gap-4"
                     >
                       <span className={`font-mono text-[10px] transition-colors ${isActive ? 'text-[#0ECAD4]' : 'text-[#2d4a6b]'}`}>
                         {link.index}
                       </span>
                       <span className={`headline-display text-4xl transition-all uppercase ${
                         isActive ? 'text-[#E2EEF9] italic' : 'text-[#2d4a6b] hover:text-[#5a7fa8]'
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
