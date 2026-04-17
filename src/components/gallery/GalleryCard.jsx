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
      className="bg-white p-3 rounded-card shadow-[0_4px_20px_rgba(0,0,0,0.05)] cursor-pointer group hover:shadow-[0_20px_50px_rgba(0,194,255,0.2)] transition-all duration-500"
    >
      <div className="relative aspect-[4/3] rounded-[16px] overflow-hidden mb-6">
        <img 
          src={item.image_url} 
          alt={item.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-ieee-dark/0 group-hover:bg-ieee-dark/10 transition-colors duration-500" />
      </div>
      
      <div className="px-2 pb-2">
        <h4 className="text-lg font-black text-ieee-dark mb-2 tracking-tight line-clamp-1 group-hover:text-ieee-bright transition-colors">
          {item.title}
        </h4>
        <p className="text-[12px] text-slate-500 leading-relaxed line-clamp-2">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
};

export default GalleryCard;
