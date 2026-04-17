import { motion } from 'framer-motion';

const TimelineNode = ({ node, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="relative pl-12 mb-12 last:mb-0"
    >
      <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-ieee-cyan shadow-[0_0_10px_rgba(0,194,255,0.35)] z-10" />
      <div className="absolute left-2 top-6 w-[1.5px] h-[calc(100%+3rem)] bg-ieee-deep/20 last:hidden" />
      
      <h4 className={`text-lg font-semibold ${node.active ? 'text-ieee-bright' : 'text-ieee-deep'}`}>
        {node.title}
      </h4>
      <p className="text-[#5a6781] text-sm mt-1 font-medium italic">{node.date}</p>
      {node.description && (
        <p className="text-[#52607b] text-xs mt-3 leading-relaxed">{node.description}</p>
      )}
    </motion.div>
  );
};

const HackathonTimeline = () => {
  const nodes = [
    { title: 'Registration Opens', date: 'October 1, 2025', active: true },
    { title: 'Idea Submission', date: 'October 15, 2025', active: false },
    { title: 'Shortlist Announcement', date: 'October 20, 2025', active: false },
    { title: 'Hackathon Begins', date: 'October 24, 2025 - 9:00 AM', active: false, description: '36 hours of non-stop innovation begins at the Innovation Lab.' },
    { title: 'Final Pitch & Awards', date: 'October 26, 2025 - 4:00 PM', active: true },
  ];

  return (
    <div className="space-y-10">
      <h3 className="text-2xl font-semibold text-ieee-deep mb-10 border-b border-ieee-deep/10 pb-6 flex items-center">
        <span className="w-2 h-8 bg-ieee-cyan mr-4 rounded-full" />
        Timeline
      </h3>
      <div className="relative">
        {nodes.map((node, i) => (
          <TimelineNode key={node.title} node={node} index={i} />
        ))}
      </div>
    </div>
  );
};

export default HackathonTimeline;
