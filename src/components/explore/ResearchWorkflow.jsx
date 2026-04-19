import { motion } from 'framer-motion';
import { Search, Filter, Download, MessageSquare, ArrowRight } from 'lucide-react';

const WorkflowNode = ({ node, index }) => {
  const Icon = node.icon;
  return (
    <div className="flex flex-col md:flex-row items-center gap-4 group">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="workflow-node w-full md:w-1/4 text-center cursor-default"
      >
        <div className={`w-20 h-20 mx-auto rounded-3xl flex items-center justify-center border transition-all duration-500 ${node.color} bg-white/5 group-hover:bg-white/10 group-hover:scale-110 shadow-2xl backdrop-blur-xl border-white/10`}>
          <Icon className="w-8 h-8" />
        </div>
        <h4 className="font-display text-lg font-light text-blue-50 mt-6 mb-2 tracking-tight">{node.step}. {node.title}</h4>
        <p className="text-[10px] text-blue-200/40 font-medium uppercase tracking-widest leading-relaxed max-w-[160px] mx-auto">
          {node.description}
        </p>
      </motion.div>
      
      {index < 3 && (
        <div className="hidden md:block text-[#40B2D6] animate-pulse">
          <ArrowRight className="w-6 h-6" />
        </div>
      )}
    </div>
  );
};

const ResearchWorkflow = () => {
  const workflow = [
    { step: '1', title: 'Search', description: 'Use basic or advanced search with Boolean operators applied.', icon: Search, color: 'text-blue-400 border-blue-500/20' },
    { step: '2', title: 'Filter', description: 'Refine by publication year, author, affiliation, and document type.', icon: Filter, color: 'text-purple-400 border-purple-500/20' },
    { step: '3', title: 'Download', description: 'View abstract or fetch full-text PDF documents directly from the portal.', icon: Download, color: 'text-emerald-400 border-emerald-500/20' },
    { step: '4', title: 'Cite', description: 'Export citations in IEEE format directly to BibTeX, RIS, or EndNote.', icon: MessageSquare, color: 'text-amber-400 border-amber-500/20' },
  ];

  return (
    <section className="py-24 bg-[#0a0f1d] border-t border-white/5 font-body">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-20 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-index mx-auto"
          >
            Effective Research Workflow
          </motion.h2>
          <div className="w-16 h-1 bg-[#40B2D6] mx-auto rounded-full" />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 py-10">
           {workflow.map((node, i) => (
             <WorkflowNode key={i} node={node} index={i} />
           ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchWorkflow;
