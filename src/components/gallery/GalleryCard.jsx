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
      className="indexed-card p-4 cursor-pointer group transition-all duration-500"
    >
      <div className="relative aspect-[4/3] overflow-hidden mb-6">
        <img 
          src={item.image_url} 
          alt={item.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
          loading="lazy"
        />
        <div className="absolute top-4 left-4 z-10">
          <span className="paren-index backdrop-blur-sm bg-black/20 px-2 py-1">IMG_{String(index + 1).padStart(3, '0')}</span>
        </div>
      </div>
      
      <div className="px-2 pb-2">
        <h4 className="text-editorial text-xl text-blue-50 mb-2 leading-none group-hover:text-[#40B2D6] transition-colors uppercase italic">
          {item.title}
        </h4>
        <p className="text-body-loose text-xs line-clamp-2">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
};

export default GalleryCard;
