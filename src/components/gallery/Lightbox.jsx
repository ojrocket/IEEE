import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Lightbox = ({ selectedItem, onClose, onPrev, onNext }) => {
  if (!selectedItem) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/98 backdrop-blur-3xl px-8"
      >
        <button 
          onClick={onClose}
          className="absolute top-12 right-12 w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:border-ieee-cyan/50 transition-all active:scale-90"
        >
          <X className="w-6 h-6" />
        </button>

        <button 
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className="absolute left-12 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-ieee-bright hover:border-ieee-bright transition-all"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <div className="max-w-7xl w-full text-center space-y-12">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="mx-auto shadow-[0_0_100px_rgba(0,194,255,0.2)] rounded-[40px] overflow-hidden bg-black/40"
          >
            <img 
              src={selectedItem.image} 
              alt={selectedItem.title} 
              className="w-full h-auto max-h-[70vh] object-contain"
            />
          </motion.div>
          
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase">{selectedItem.title}</h3>
            <div className="flex justify-center items-center gap-10">
              <span className="px-6 py-2 bg-ieee-cyan/10 text-ieee-cyan border border-ieee-cyan/30 rounded-full text-xs font-black uppercase tracking-[0.3em]">
                {selectedItem.category}
              </span>
              <span className="text-slate-400 font-black text-sm tracking-widest">
                CLASS OF {selectedItem.year}
              </span>
            </div>
          </motion.div>
        </div>

        <button 
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className="absolute right-12 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-ieee-bright hover:border-ieee-bright transition-all"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
};

export default Lightbox;
