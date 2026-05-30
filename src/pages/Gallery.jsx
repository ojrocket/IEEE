import { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import GalleryHero from '../components/gallery/GalleryHero';
import FilterBar from '../components/gallery/FilterBar';
import FeaturedHighlights from '../components/gallery/FeaturedHighlights';
import GalleryGrid from '../components/gallery/GalleryGrid';
import LightboxModal from '../components/gallery/LightboxModal';
import UploadPanel from '../components/gallery/UploadPanel';
import { motion } from 'framer-motion';
import { Plus, Users, Globe, ShieldCheck, FileText } from 'lucide-react';

const Gallery = () => {
  const [items, setItems] = useState([]);
  const [featuredItems, setFeaturedItems] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [totalCount, setTotalCount] = useState(0);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const location = useLocation();
  const isAdmin = new URLSearchParams(location.search).get('admin') === 'true';

  // Sample gallery data (same as original)
  const sampleItems = [
    { id: 1, title: 'IEEE Annual Conference 2024', description: 'Keynote speakers presenting cutting-edge research in AI/ML.', image_url: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=1200', category: 'events' },
    { id: 2, title: 'Workshop on Quantum Computing', description: 'Hands-on session exploring quantum algorithms.', image_url: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=1200', category: 'workshops' },
    { id: 3, title: 'Student Robotics Competition', description: 'Innovative autonomous systems in action.', image_url: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1200', category: 'competitions' },
    { id: 4, title: 'Technical Symposium', description: 'Latest trends in renewable energy.', image_url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200', category: 'events' },
  ];

  const sampleFeaturedItems = sampleItems.slice(0, 4);

  useEffect(() => {
    setFeaturedItems(sampleFeaturedItems);
    setItems(sampleItems);
    setTotalCount(sampleItems.length);
    setHasMore(false);
  }, []);

  const loadMore = () => setHasMore(false);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsLightboxOpen(true);
  };

  const handleNext = () => {
    const idx = items.findIndex(i => i.id === selectedItem.id);
    if (idx < items.length - 1) setSelectedItem(items[idx + 1]);
  };

  const handlePrev = () => {
    const idx = items.findIndex(i => i.id === selectedItem.id);
    if (idx > 0) setSelectedItem(items[idx - 1]);
  };

  const handleUploadSuccess = () => {
    setFeaturedItems(sampleFeaturedItems);
    setItems(sampleItems);
  };

  const filteredItems = activeFilter === 'all' 
    ? items 
    : items.filter(item => item.category === activeFilter);

  useEffect(() => setTotalCount(filteredItems.length), [activeFilter, filteredItems]);

  return (
    <main className="bg-[var(--bg-darkest)] font-body min-h-screen">
      <GalleryHero />
      <FilterBar activeFilter={activeFilter} setActiveFilter={setActiveFilter} />

      {isAdmin && (
        <UploadPanel onUploadSuccess={handleUploadSuccess} />
      )}

      <FeaturedHighlights featuredItems={featuredItems} />

      <GalleryGrid 
        items={filteredItems} 
        onItemClick={handleItemClick}
        isLoading={isLoading}
        hasMore={hasMore}
        loadMore={loadMore}
        totalCount={totalCount}
      />

      {/* CTA Section */}
      <section className="py-32 container mx-auto px-6 max-w-7xl">
        <motion.div 
          className="bg-[var(--bg-card)] p-12 md:p-20 flex flex-col md:flex-row justify-between items-center gap-12 relative overflow-hidden group border-[8px] border-[var(--border-mid)]"
        >
          <div className="absolute inset-0 z-[1] pointer-events-none opacity-20"
            style={{
              backgroundImage: 'radial-gradient(circle, var(--text-muted-c) 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />
          
          <div className="relative z-10 flex-1">
            <span className="section-label mb-6">Contribute</span>
            <h2 className="headline-display text-[clamp(44px,6vw,84px)] mb-8">
              Capture the <span className="text-[var(--primary)] italic">moment.</span>
            </h2>
            <p className="text-[18px] font-medium text-[var(--text-secondary-c)] max-w-lg leading-relaxed mb-6">
              Contributing to the IEEE archive is easy. Submit your captures from events, workshops, or competitions to be featured in our global gallery.
            </p>
          </div>

          <div className="flex flex-col gap-6 relative z-10 w-full md:w-auto">
             <button className="bg-[var(--primary)] text-[var(--bg-darkest)] hover:bg-[var(--accent-gold)] px-10 py-5 text-[14px] font-bold uppercase tracking-widest transition-all">
               Submit Photos
             </button>
             <button className="border-2 border-[var(--border-mid)] text-[var(--text-ice)] hover:border-[var(--primary)] px-10 py-5 text-[14px] font-bold uppercase tracking-widest transition-all">
               Volunteer Roles
             </button>
          </div>
        </motion.div>
      </section>

      <LightboxModal 
        isOpen={isLightboxOpen}
        item={selectedItem}
        onClose={() => setIsLightboxOpen(false)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </main>
  );
};

export default Gallery;
