import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const FeaturedHighlights = ({ featuredItems }) => {
  if (!featuredItems || featuredItems.length < 3) return null;

  const mainItem = featuredItems[0];
  const sideItems = featuredItems.slice(1, 3);

  return (
    <section className="py-24 container mx-auto px-6 max-w-6xl">
      <div className="mb-14">
        <span className="text-[10px] font-black text-ieee-accent uppercase tracking-[0.3em] mb-3 block">Special Moments</span>
        <h2 className="text-4xl font-black text-ieee-dark uppercase tracking-tight">Featured Highlights</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Large Main Featured Card */}
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          className="lg:col-span-2 group relative h-[500px] rounded-card overflow-hidden shadow-2xl hover:shadow-[0_20px_60px_rgba(0,194,255,0.3)] transition-shadow duration-500"
        >
          <img 
            src={mainItem.image_url} 
            alt={mainItem.title} 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          <div className="absolute inset-0 card-overlay-gradient flex flex-col justify-end p-12">
            <span className="card-tag mx-0">HIGHLIGHT 2024</span>
            <h3 className="text-3xl font-black text-white mb-4 tracking-tight">{mainItem.title}</h3>
            <p className="text-white/70 text-sm max-w-md mb-8 leading-relaxed line-clamp-2">
              {mainItem.description}
            </p>
            <motion.a 
              href="#" 
              whileHover={{ x: 10 }}
              className="flex items-center gap-2 text-white font-bold text-sm tracking-wide group/link"
            >
              Learn More <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-2" />
            </motion.a>
          </div>
        </motion.div>

        {/* Side Stacked Cards */}
        <div className="flex flex-col gap-6">
          {sideItems.map((item, i) => (
            <motion.div
              key={item.id}
              animate={{ y: [0, -10, 0] }}
              transition={{ 
                duration: 5, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: i * 0.5
              }}
              whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
              className="group relative h-[238px] rounded-card overflow-hidden shadow-xl hover:shadow-[0_15px_40px_rgba(0,194,255,0.2)] transition-shadow duration-500"
            >
              <img 
                src={item.image_url} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 card-overlay-gradient flex flex-col justify-end p-8">
                <h3 className="text-xl font-black text-white mb-4 tracking-tight">{item.title}</h3>
                <motion.a 
                  href="#" 
                  whileHover={{ gap: '12px' }}
                  className="text-white/80 font-bold text-[10px] uppercase tracking-widest hover:text-white transition-all flex items-center gap-2"
                >
                  Learn More <ArrowRight className="w-3 h-3" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedHighlights;
