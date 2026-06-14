import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const FeaturedHighlights = ({ featuredItems }) => {
  if (!featuredItems || featuredItems.length < 3) return null;

  const mainItem = featuredItems[0];
  const sideItems = featuredItems.slice(1, 3);

  return (
    <section className="py-24 container mx-auto px-6 max-w-6xl">
      <div className="mb-14">
        <span className="section-label mb-4">Special Moments</span>
        <h2 className="headline-display text-[clamp(28px,4.5vw,48px)] uppercase">Featured Highlights</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Large Main Featured Card */}
        <motion.div
          whileHover={{ scale: 1.01, transition: { duration: 0.3 } }}
          className="lg:col-span-2 group relative h-[500px] rounded-[4px] overflow-hidden border border-[var(--border-mid)] bg-[var(--bg-card)] transition-shadow duration-500"
        >
          <img 
            src={mainItem.image_url} 
            alt={mainItem.title} 
            className="w-full h-full object-cover grayscale transition-transform duration-1000 group-hover:scale-105 group-hover:grayscale-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-darkest)] via-[var(--bg-darkest)]/50 to-transparent flex flex-col justify-end p-10 md:p-12">
            <span className="badge-event gold mb-4 w-fit">Featured</span>
            <h3 className="font-display text-[32px] font-black text-[var(--text-ice)] mb-4 tracking-tight uppercase">{mainItem.title}</h3>
            <p className="text-[14px] font-body text-[var(--text-secondary-c)] max-w-md mb-8 leading-relaxed line-clamp-2">
              {mainItem.description}
            </p>
            <a 
              href="#" 
              className="group flex items-center justify-center gap-2 bg-[var(--primary)] hover:bg-[var(--accent-gold)] text-[var(--bg-darkest)] px-8 py-4 text-[12px] font-bold uppercase tracking-widest transition-all w-fit"
            >
              Learn More <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>

        {/* Side Stacked Cards */}
        <div className="flex flex-col gap-6">
          {sideItems.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.01, transition: { duration: 0.3 } }}
              className="group relative h-[238px] rounded-[4px] overflow-hidden border border-[var(--border-mid)] bg-[var(--bg-card)] transition-shadow duration-500"
            >
              <img 
                src={item.image_url} 
                alt={item.title} 
                className="w-full h-full object-cover grayscale transition-transform duration-1000 group-hover:scale-105 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-darkest)] via-[var(--bg-darkest)]/50 to-transparent flex flex-col justify-end p-8">
                <h3 className="font-display text-[20px] font-black text-[var(--text-ice)] mb-4 tracking-tight uppercase leading-tight">{item.title}</h3>
                <a 
                  href="#" 
                  className="group flex items-center justify-center gap-2 border border-[var(--border-mid)] text-[var(--text-ice)] hover:border-[var(--primary)] hover:bg-[var(--primary)] hover:text-[var(--bg-darkest)] px-6 py-3 text-[10px] font-bold uppercase tracking-widest transition-all w-fit"
                >
                  Learn More <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedHighlights;
