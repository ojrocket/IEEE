import { motion } from 'framer-motion';

const ScheduleItem = ({ item, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="relative pl-12 mb-8 last:mb-0 group"
    >
      <div className="absolute left-[7px] top-6 w-3 h-3 rounded-full bg-white border border-ieee-bright z-10 group-hover:bg-ieee-cyan transition-all" />
      
      <div className="glass-card p-6 rounded-2xl border border-white/5 group-hover:border-[#40B2D6]/30 transition-all">
        <div className="flex justify-between items-start mb-3">
          <h4 className="text-lg font-medium text-blue-50 tracking-tight">{item.title}</h4>
          <span className={`text-[10px] font-medium uppercase tracking-[0.2em] px-3 py-1 rounded-full bg-white/10 ${item.color} border border-white/10`}>
            {item.time}
          </span>
        </div>
        <p className="text-blue-200/60 text-sm leading-relaxed">{item.description}</p>
      </div>
    </motion.div>
  );
};

const TechFestSchedule = () => {
  const day1 = [
    { title: 'Inauguration Ceremony', time: '09:00 AM', color: 'text-blue-300', description: 'Official kickoff by the Vice Chancellor and distinguished guests.' },
    { title: 'Technical Workshops', time: '11:00 AM', color: 'text-purple-300', description: 'Parallel tracks covering AI, Cloud Computing, and Cybersecurity.' },
    { title: 'Coding Prelims', time: '02:00 PM', color: 'text-emerald-300', description: 'Algorithmic problem-solving rounds on competitive platforms.' },
    { title: 'Hackathon Starts', time: '06:00 PM', color: 'text-red-300', description: 'Problem statements released and 48-hour development begins.' },
  ];

  const day2 = [
    { title: 'Project Expo', time: '10:00 AM', color: 'text-cyan-300', description: 'Showcase of 40+ hardware and software prototypes in the main arena.' },
    { title: 'Finals (Robo Wars & Coding)', time: '02:00 PM', color: 'text-red-300', description: 'Intense final matches and coding challenges to decide the champions.' },
    { title: 'Prize Distribution', time: '05:00 PM', color: 'text-yellow-300', description: 'Awarding the victors with cash prizes and recognitions.' },
    { title: 'Closing Ceremony', time: '07:00 PM', color: 'text-blue-300', description: 'Vote of thanks, concluding remarks, and networking dinner.' },
  ];

  return (
    <section className="py-24 bg-[#0a0f1d] relative overflow-hidden font-body">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-20 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-index mx-auto"
          >
            Event Schedule
          </motion.h2>
          <div className="w-16 h-1 bg-[#40B2D6] mx-auto rounded-full" />
        </div>

        <div className="relative border-l-2 border-white/5 ml-4">
          {/* Day 1 */}
          <div className="mb-16 ml-8 relative pt-2">
            <div className="absolute -left-[45px] top-6 w-6 h-6 rounded-full bg-[#3C72B0] ring-8 ring-[#0a0f1d] shadow-[0_0_20px_rgba(60,114,176,0.5)]" />
            <h3 className="text-2xl font-medium text-[#40B2D6] mb-1 uppercase tracking-widest">Day 1: Genesis</h3>
            <p className="text-blue-200/20 text-[10px] font-medium uppercase tracking-[0.2em] mb-10">October 15, 2026</p>
            <div className="space-y-6">
              {day1.map((item, i) => (
                <ScheduleItem key={i} item={item} index={i} />
              ))}
            </div>
          </div>

          {/* Day 2 */}
          <div className="ml-8 relative pt-2">
            <div className="absolute -left-[45px] top-6 w-6 h-6 rounded-full bg-[#40B2D6] ring-8 ring-[#0a0f1d] shadow-[0_0_20px_rgba(64,178,214,0.5)]" />
            <h3 className="text-2xl font-medium text-[#40B2D6] mb-1 uppercase tracking-widest">Day 2: Zenith</h3>
            <p className="text-blue-200/20 text-[10px] font-medium uppercase tracking-[0.2em] mb-10">October 16, 2026</p>
            <div className="space-y-6">
              {day2.map((item, i) => (
                <ScheduleItem key={i} item={item} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechFestSchedule;
