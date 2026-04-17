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

  // Sample gallery data
  const sampleItems = [
    {
      id: 1,
      title: 'IEEE Annual Conference 2024',
      description: 'Keynote speakers presenting cutting-edge research in artificial intelligence and machine learning.',
      image_url: 'https://picsum.photos/seed/conference2024/800/600',
      category: 'events'
    },
    {
      id: 2,
      title: 'Workshop on Quantum Computing',
      description: 'Hands-on session exploring quantum algorithms and their practical applications.',
      image_url: 'https://picsum.photos/seed/quantum2024/800/600',
      category: 'workshops'
    },
    {
      id: 3,
      title: 'Student Robotics Competition',
      description: 'Teams competing in the annual IEEE robotics challenge with innovative autonomous systems.',
      image_url: 'https://picsum.photos/seed/robotics2024/800/600',
      category: 'competitions'
    },
    {
      id: 4,
      title: 'Technical Symposium',
      description: 'Industry experts discussing latest trends in renewable energy and sustainable technology.',
      image_url: 'https://picsum.photos/seed/symposium2024/800/600',
      category: 'events'
    },
    {
      id: 5,
      title: 'Hackathon Winners',
      description: 'Celebrating the innovative solutions developed during the 48-hour coding marathon.',
      image_url: 'https://picsum.photos/seed/hackathon2024/800/600',
      category: 'competitions'
    },
    {
      id: 6,
      title: 'AI/ML Research Showcase',
      description: 'Posters and demonstrations of groundbreaking machine learning research projects.',
      image_url: 'https://picsum.photos/seed/airesearch2024/800/600',
      category: 'research'
    },
    {
      id: 7,
      title: 'Networking Event',
      description: 'Students and professionals connecting at the IEEE career fair and networking session.',
      image_url: 'https://picsum.photos/seed/networking2024/800/600',
      category: 'events'
    },
    {
      id: 8,
      title: 'Power Systems Lab Tour',
      description: 'Exploring advanced power grid simulation facilities and smart grid technology.',
      image_url: 'https://picsum.photos/seed/powerlab2024/800/600',
      category: 'labs'
    },
    {
      id: 9,
      title: 'Women in Engineering Panel',
      description: 'Inspiring stories and career advice from women leaders in engineering and technology.',
      image_url: 'https://picsum.photos/seed/wie2024/800/600',
      category: 'events'
    },
    {
      id: 10,
      title: 'IoT Workshop',
      description: 'Building connected devices and exploring the Internet of Things ecosystem.',
      image_url: 'https://picsum.photos/seed/iot2024/800/600',
      category: 'workshops'
    },
    {
      id: 11,
      title: 'Research Poster Session',
      description: 'Graduate students presenting their research findings in various engineering disciplines.',
      image_url: 'https://picsum.photos/seed/poster2024/800/600',
      category: 'research'
    },
    {
      id: 12,
      title: 'Industry Collaboration Meet',
      description: 'Partners from leading tech companies discussing collaboration opportunities.',
      image_url: 'https://picsum.photos/seed/industry2024/800/600',
      category: 'events'
    }
  ];

  const sampleFeaturedItems = sampleItems.slice(0, 4);

  // Initialize with sample data
  useEffect(() => {
    setFeaturedItems(sampleFeaturedItems);
    setItems(sampleItems);
    setTotalCount(sampleItems.length);
    setHasMore(false);
  }, []);

  const loadMore = () => {
    // No more items to load for sample data
    setHasMore(false);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsLightboxOpen(true);
  };

  const handleNext = () => {
    const idx = items.findIndex(i => i.id === selectedItem.id);
    if (idx < items.length - 1) {
      setSelectedItem(items[idx + 1]);
    }
  };

  const handlePrev = () => {
    const idx = items.findIndex(i => i.id === selectedItem.id);
    if (idx > 0) {
      setSelectedItem(items[idx - 1]);
    }
  };

  const handleUploadSuccess = () => {
    // Refresh with sample data
    setFeaturedItems(sampleFeaturedItems);
    setItems(sampleItems);
  };

  // Filter items based on active filter
  const filteredItems = activeFilter === 'all' 
    ? items 
    : items.filter(item => item.category === activeFilter);

  // Update filtered items count
  useEffect(() => {
    setTotalCount(filteredItems.length);
  }, [activeFilter, filteredItems]);

  return (
    <main className="bg-bg-light font-poppins min-h-screen">
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

      {/* CTA Section (From Design) */}
      <section className="py-24 container mx-auto px-6 max-w-6xl">
        <motion.div 
          className="bg-ieee-deep p-14 rounded-card flex flex-col md:flex-row justify-between items-center gap-10 border border-ieee-bright/20"
        >
          <div className="text-ieee-beige">
            <h2 className="text-4xl font-semibold mb-4 tracking-tight uppercase">Have photos to share?</h2>
            <p className="text-ieee-beige/75 max-w-lg leading-relaxed font-light">
              Contributing to the IEEE archive is easy. Submit your high-quality captures from recent events to be featured in our official gallery.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-ieee-bright text-ieee-beige rounded-full font-semibold text-xs uppercase tracking-[0.12em] hover:bg-ieee-cyan transition-all"
            >
              Submit Photos
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-transparent border border-ieee-beige/35 text-ieee-beige rounded-full font-semibold text-xs uppercase tracking-[0.12em] hover:border-ieee-cyan hover:text-ieee-cyan transition-all"
            >
              Volunteer Photographer
            </motion.button>
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
