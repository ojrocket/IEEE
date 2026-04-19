import { motion } from 'framer-motion';

const GalleryCard = ({ item, onClick, index }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: 1, 
        y: [0, -10, 0], // Floating effect
      }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ 
        y: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.2 // Stagger effect
        },
        opacity: { duration: 0.5 },
        layout: { duration: 0.3 }
      }}
      whileHover={{ 
         y: -15, 
         scale: 1.03,
         transition: { duration: 0.3 } 
      }}
      onClick={() => onClick(item)}
      className="glass-card p-3 cursor-pointer group transition-all duration-500"
    >
      <div className="relative aspect-[4/3] rounded-[16px] overflow-hidden mb-6">
        <img 
          src={item.image_url} 
          alt={item.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[#0a0f1d]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      
      <div className="px-2 pb-2">
        <h4 className="font-display text-[18px] font-medium text-blue-50 mb-2 tracking-tight line-clamp-1 group-hover:text-[#40B2D6] transition-colors">
          {item.title}
        </h4>
        <p className="text-[13px] font-body text-blue-200/50 leading-relaxed line-clamp-2">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
};

export default GalleryCard;
