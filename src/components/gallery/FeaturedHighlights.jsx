import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const FeaturedHighlights = ({ featuredItems }) => {
  if (!featuredItems || featuredItems.length < 3) return null;

  const mainItem = featuredItems[0];
  const sideItems = featuredItems.slice(1, 3);

  return (
    <section className="py-24 container mx-auto px-6 max-w-6xl">
      <div className="mb-14">
        <span className="section-index mb-3">Special Moments</span>
        <h2 className="font-display text-[clamp(28px,4.5vw,48px)] font-light text-blue-50 tracking-tight">Featured Highlights</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Large Main Featured Card */}
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          className="lg:col-span-2 group relative h-[500px] rounded-[2rem] overflow-hidden glass-card transition-shadow duration-500"
        >
          <img 
            src={mainItem.image_url} 
            alt={mainItem.title} 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1d] via-[#0a0f1d]/40 to-transparent flex flex-col justify-end p-12">
            <span className="section-index text-[#40B2D6] px-0 mb-4">Featured</span>
            <h3 className="font-display text-[32px] font-medium text-blue-50 mb-4 tracking-tight">{mainItem.title}</h3>
            <p className="text-[14px] font-body text-blue-200/60 max-w-md mb-8 leading-relaxed line-clamp-2">
              {mainItem.description}
            </p>
            <motion.a 
              href="#" 
              whileHover={{ x: 10 }}
              className="group flex items-center justify-center gap-2 ieee-btn-primary w-fit px-8"
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
              className="group relative h-[238px] rounded-[1.5rem] overflow-hidden glass-card transition-shadow duration-500"
            >
              <img 
                src={item.image_url} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1d] via-[#0a0f1d]/40 to-transparent flex flex-col justify-end p-8">
                <h3 className="font-display text-[20px] font-medium text-blue-50 mb-4 tracking-tight">{item.title}</h3>
                <motion.a 
                  href="#" 
                  whileHover={{ gap: '12px' }}
                  className="group flex items-center justify-center gap-2 ieee-btn-outline w-fit px-4 py-2 !text-[10px]"
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
