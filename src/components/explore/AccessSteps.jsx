import { motion } from 'framer-motion';
import { Wifi, BookOpen, Download, ArrowRight } from 'lucide-react';

const StepCard = ({ step, index }) => {
  const Icon = step.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="relative p-10 rounded-[32px] glass-enhanced border border-ieee-deep/12 hover:border-ieee-cyan/35 transition-all duration-500 group text-center"
    >
      <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-ieee-deep border border-ieee-bright/25 flex items-center justify-center text-xs font-semibold text-ieee-beige group-hover:text-ieee-cyan group-hover:border-ieee-cyan/50 transition-colors">
        {index + 1}
      </div>
      
      <div className={`w-14 h-14 mx-auto rounded-2xl flex items-center justify-center mb-8 border transition-all duration-500 ${step.color} bg-ieee-light group-hover:scale-110`}>
        <Icon className="w-6 h-6" />
      </div>

      <h3 className="text-xl font-semibold text-ieee-deep mb-4 tracking-tight group-hover:text-ieee-bright transition-colors">{step.title}</h3>
      <p className="text-[#55637d] text-sm leading-relaxed font-medium">
        {step.description}
      </p>

      {index < 2 && (
        <div className="hidden lg:block absolute top-[45%] -right-10 w-12 text-slate-700 pointer-events-none">
           <ArrowRight className="w-8 h-8 animate-pulse" />
        </div>
      )}
    </motion.div>
  );
};

const AccessSteps = () => {
  const steps = [
    { 
      title: 'Connect to Network', 
      description: 'Ensure your device is connected to the SRM AP student Wi-Fi or campus intranet.',
      icon: Wifi,
      color: 'text-blue-400 border-blue-500/20'
    },
    { 
      title: 'Library Portal', 
      description: 'Visit the university library gate and authenticate using your net ID.',
      icon: BookOpen,
      color: 'text-cyan-400 border-cyan-500/20'
    },
    { 
      title: 'Search & Download', 
      description: 'Once authorized, navigate to ieeexplore.ieee.org and start downloading PDFs.',
      icon: Download,
      color: 'text-purple-400 border-purple-500/20'
    },
  ];

  return (
    <section className="py-24 bg-ieee-deep relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-black text-white mb-4 uppercase tracking-tight"
          >
            How to Access at SRM AP
          </motion.h2>
          <div className="w-16 h-1 bg-ieee-bright mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((s, i) => (
            <StepCard key={s.title} step={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccessSteps;
