import { motion } from 'framer-motion';
import { Trophy, Gift, Award } from 'lucide-react';

const PrizeCard = ({ prize, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className={`relative p-8 rounded-[28px] glass-card border transition-all duration-500 group flex flex-col items-center text-center ${
        prize.featured 
        ? 'border-yellow-500/40 shadow-[0_18px_40px_rgba(234,179,8,0.12)] scale-105 z-10' 
        : 'border-white/5 hover:border-[#40B2D6]/30'
      }`}
    >
      <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-6 border transition-all duration-500 ${
        prize.featured 
        ? 'bg-yellow-500/10 border-yellow-500/20 group-hover:bg-yellow-500/20' 
        : 'bg-white/5 border-white/10 group-hover:bg-[#40B2D6]/10 group-hover:border-[#40B2D6]/30'
      }`}>
        <prize.icon className={`w-10 h-10 ${prize.color} drop-shadow-lg group-hover:scale-110 transition-transform`} />
      </div>
      
      <span className={`text-[10px] font-black uppercase tracking-[0.3em] mb-2 ${prize.color}`}>
        {prize.rank}
      </span>
      <h3 className="text-4xl font-display font-medium text-blue-50 mb-3">
        {prize.amount}
      </h3>
      <p className="text-blue-200/40 text-[10px] font-medium uppercase tracking-widest">
        {prize.extras}
      </p>

      {prize.featured && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-500 text-ieee-deep px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl">
          Highest Reward
        </div>
      )}
    </motion.div>
  );
};

const PrizeSection = () => {
  const prizes = [
    { rank: '2nd Prize', amount: '₹30,000', extras: '+ Swag Kits & Certificates', icon: Award, color: 'text-slate-300', featured: false },
    { rank: '1st Prize', amount: '₹50,000', extras: '+ Internship Invites & Goodies', icon: Trophy, color: 'text-yellow-400', featured: true },
    { rank: '3rd Prize', amount: '₹15,000', extras: '+ Certificates & Vouchers', icon: Gift, color: 'text-orange-400', featured: false },
  ];

  return (
    <div className="space-y-16">
      <div className="text-center space-y-4">
        <h3 className="section-index mx-auto">Prizes & Rewards</h3>
        <p className="text-blue-200/40 text-[11px] font-medium uppercase tracking-[0.2em]">Competitions with massive stakes</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* Reordering for mobile to put 1st prize in middle? No, the order in array is 2, 1, 3 which handles the layout naturally if I use flex on container but I used grid */}
        <PrizeCard prize={prizes[0]} index={0} />
        <PrizeCard prize={prizes[1]} index={1} />
        <PrizeCard prize={prizes[2]} index={2} />
      </div>

      <div className="glass-card p-8 border-l-4 border-[#40B2D6] border border-white/5">
        <h4 className="text-blue-50 font-medium mb-6 text-lg uppercase tracking-widest">Judging Criteria</h4>
        <div className="space-y-6">
          {[
            { label: 'Innovation & Creativity', val: '30%', w: 'w-[30%]' },
            { label: 'Technical Complexity', val: '25%', w: 'w-[25%]' },
            { label: 'Real-World Impact', val: '25%', w: 'w-[25%]' },
            { label: 'Presentation & UI/UX', val: '20%', w: 'w-[20%]' },
          ].map((item) => (
            <div key={item.label}>
              <div className="flex justify-between text-[10px] font-medium text-blue-200/40 uppercase tracking-widest mb-2">
                <span>{item.label}</span>
                <span className="text-[#40B2D6]">{item.val}</span>
              </div>
              <div className="h-2 bg-white/5 rounded-full overflow-hidden border border-white/10">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: item.val }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-blue-600 to-[#40B2D6]" 
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrizeSection;
