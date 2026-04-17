import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect } from 'react';

const LightboxModal = ({ isOpen, item, onClose, onPrev, onNext }) => {
  // Handle ESC key to close modal and prevent body scroll
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = '0';
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.bottom = '0';
      // Also prevent scroll on touch devices
      document.body.style.touchAction = 'none';
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
      // Restore body scroll when modal is closed
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.bottom = '';
      document.body.style.touchAction = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !item) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[200] flex items-center justify-center bg-black bg-opacity-90 px-8"
        onClick={onClose}
        onWheel={(e) => e.preventDefault()}
        onTouchMove={(e) => e.preventDefault()}
      >
        {/* Close Button */}
        <button 
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="absolute top-10 right-10 w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:border-ieee-cyan transition-all active:scale-90 z-[300]"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Navigation */}
        <button 
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className="absolute left-10 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-ieee-dark hover:border-ieee-dark transition-all z-[300]"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <div 
          className="w-full h-full flex items-center justify-center px-8"
          onClick={(e) => e.stopPropagation()}
        >
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="max-w-full max-h-full flex items-center justify-center"
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              overflow: 'hidden'
            }}
          >
            <img 
              src={item.image_url} 
              alt={item.title} 
              className="max-w-full max-h-full object-contain"
              style={{ 
                maxWidth: '90vw',
                maxHeight: '85vh',
                width: 'auto',
                height: 'auto',
                objectFit: 'contain',
                display: 'block'
              }}
              loading="eager"
            />
          </motion.div>
        </div>

        {/* Text Content - Positioned at bottom */}
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="absolute bottom-8 left-0 right-0 space-y-4 px-6 text-center"
        >
          <h3 className="text-2xl md:text-4xl font-black text-white tracking-tighter uppercase mb-2">
            {item.title}
          </h3>
          <p className="text-white/80 text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-light">
            {item.description}
          </p>
          <div className="flex justify-center items-center gap-6 pt-2">
            <span className="px-4 py-1 bg-ieee-cyan/20 text-ieee-cyan border border-ieee-cyan/30 rounded-full text-xs font-black uppercase tracking-[0.3em]">
              {item.category}
            </span>
            <span className="text-white/60 font-black text-xs tracking-widest">
              {item.created_at ? new Date(item.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long' }) : 'Gallery Item'}
            </span>
          </div>
        </motion.div>

        <button 
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className="absolute right-10 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-ieee-dark hover:border-ieee-dark transition-all z-[300]"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
};

export default LightboxModal;
