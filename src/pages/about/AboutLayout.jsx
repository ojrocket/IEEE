import { motion } from 'framer-motion';
import { Outlet, Link, useLocation } from 'react-router-dom';

export default function AboutLayout() {
  const location = useLocation();
  
  const aboutLinks = [
    { name: 'Overview', path: '/about' },
    { name: 'Governance', path: '/about/governance' },
    { name: 'Leadership', path: '/about/leadership' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="min-h-screen pt-32 px-8 md:px-16 bg-[#0a0f1d] text-blue-50"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 static md:relative">
         {/* Mobile Navigation */}
         <div className="flex md:hidden gap-6 mb-12 overflow-x-auto pb-4 hide-scrollbar border-b border-ieee-deep/10">
           {aboutLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link 
                  key={link.path}
                  to={link.path}
                  className={`text-lg font-display whitespace-nowrap transition-all ${
                    isActive ? 'text-[#40B2D6] font-medium' : 'text-blue-200/60'
                  }`}
                >
                  {link.name}
                </Link>
              )
           })}
         </div>

         <aside className="w-1/4 hidden md:block">
            <div className="sticky top-40 flex flex-col gap-8">
              <span className="paren-index mb-4 uppercase">ABT_DIRECTIVE_B4</span>
              {aboutLinks.map((link) => {
                 const isActive = location.pathname === link.path;
                 return (
                   <Link 
                     key={link.path}
                     to={link.path}
                     className={`text-editorial text-4xl transition-all uppercase ${
                       isActive ? 'text-[#40B2D6] italic' : 'text-blue-200/40 hover:text-blue-50'
                     }`}
                   >
                     {link.name}
                   </Link>
                 )
              })}
            </div>
         </aside>

         {/* Content Area */}
         <main className="flex-1 pb-32">
            {/* Animated Router Outlet */}
            <Outlet />
         </main>
      </div>
    </motion.div>
  );
}
