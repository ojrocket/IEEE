import { motion } from 'framer-motion';
import { Wifi, Globe, Key, Star } from 'lucide-react';

const BenefitCard = ({ benefit, index }) => {
  const Icon = benefit.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="p-10 rounded-[40px] glass-enhanced border border-ieee-deep/12 hover:border-ieee-cyan/35 transition-all duration-500 group"
    >
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 border transition-all duration-500 ${benefit.color} bg-white group-hover:scale-110`}>
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-semibold text-ieee-deep mb-4 tracking-tight group-hover:text-ieee-bright transition-colors">{benefit.title}</h3>
      <p className="text-[#55637c] text-sm leading-relaxed font-medium">
        {benefit.description}
      </p>
    </motion.div>
  );
};

const XploreBenefits = () => {
  const benefits = [
    { 
      title: 'Campus Network Access', 
      description: 'SRM University AP provides institutional access to IEEE Xplore. Any device connected to the campus Wi-Fi automatically gains permission to download full-text papers.',
      icon: Wifi,
      color: 'text-blue-400 border-blue-500/20'
    },
    { 
      title: 'Remote Access Configurations', 
      description: 'Working off-campus? You can seamlessly configure remote access via the university library portal or institutional VPN to maintain your research workflow anywhere.',
      icon: Globe,
      color: 'text-cyan-400 border-cyan-500/20'
    },
    { 
      title: 'Library Credentials', 
      description: 'Students can log in using their single sign-on (SSO) credentials through the library gateway. No separate registration is required for accessing institutional subscriptions.',
      icon: Key,
      color: 'text-purple-400 border-purple-500/20'
    },
    { 
      title: 'IEEE Membership Integration', 
      description: 'Active IEEE student members can link their accounts to access exclusive member-only benefits, track citations, and save preferred search settings seamlessly.',
      icon: Star,
      color: 'text-yellow-400 border-yellow-500/20'
    },
  ];

  return (
    <section className="py-24 bg-[#0f172a] border-y border-white/5">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-black text-white mb-4 uppercase tracking-tight"
          >
            Why IEEE Xplore Matters
          </motion.h2>
          <div className="w-16 h-1 bg-ieee-bright mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {benefits.map((b, i) => (
            <BenefitCard key={b.title} benefit={b} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default XploreBenefits;
