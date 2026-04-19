import { useEffect, useRef, useCallback } from 'react';
import GalleryCard from './GalleryCard';
import { AnimatePresence, motion } from 'framer-motion';

const GalleryGrid = ({ 
  items, 
  onItemClick, 
  isLoading, 
  hasMore, 
  loadMore, 
  totalCount 
}) => {
  const observer = useRef();
  
  const lastItemRef = useCallback(node => {
    if (isLoading) return;
    if (observer.current) observer.current.disconnect();
    
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        loadMore();
      }
    });
    
    if (node) observer.current.observe(node);
  }, [isLoading, hasMore, loadMore]);

  return (
    <section className="py-24 bg-[#0a0f1d]">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex justify-between items-end mb-12">
          <h2 className="font-display text-[clamp(28px,4.5vw,48px)] font-light text-blue-50 tracking-tight">All Memories</h2>
          <span className="text-[11px] font-body text-blue-200/40 uppercase tracking-widest hidden md:block">
            Showing {items.length} of {totalCount} items
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode='popLayout'>
            {items.map((item, index) => (
              <div 
                key={item.id} 
                ref={index === items.length - 1 ? lastItemRef : null}
              >
                <GalleryCard 
                  item={item} 
                  index={index} 
                  onClick={onItemClick} 
                />
              </div>
            ))}
          </AnimatePresence>
        </div>

        {isLoading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="glass-card p-3 animate-pulse">
                <div className="aspect-[4/3] bg-white/5 rounded-[16px] mb-6" />
                <div className="h-4 bg-white/10 rounded w-2/3 mb-4 mx-2" />
                <div className="h-3 bg-white/5 rounded w-full mb-2 mx-2" />
                <div className="h-3 bg-white/5 rounded w-1/2 mx-2" />
              </div>
            ))}
          </div>
        )}

        {!hasMore && items.length > 0 && (
          <div className="text-center mt-20">
            <p className="text-blue-200/20 font-body uppercase tracking-[0.2em] text-[10px]">End of Gallery</p>
          </div>
        )}
        
        {hasMore && !isLoading && (
          <div className="flex justify-center mt-16">
            <button 
              onClick={loadMore}
              className="ieee-btn-outline px-10 py-4 group flex items-center justify-center gap-2"
            >
              Load More Photos
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default GalleryGrid;
