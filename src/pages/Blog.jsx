import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Bookmark, ChevronDown, ArrowLeft } from 'lucide-react';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('latest');
  const [showArticleDetail, setShowArticleDetail] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [visiblePosts, setVisiblePosts] = useState(4);
  const postsPerPage = 2;

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'ai-ml', name: 'AI & ML' },
    { id: 'power-systems', name: 'Power Systems' },
    { id: 'robotics', name: 'Robotics' },
    { id: 'research', name: 'Research' },
    { id: 'student-life', name: 'Student Life' }
  ];

  const blogPosts = [
    {
      id: 'quantum-computing',
      title: 'Quantum Computing: The Next Frontier in Engineering',
      excerpt: 'Exploring the revolutionary potential of quantum computing in solving complex engineering problems and transforming the technological landscape.',
      category: 'research',
      author: 'Alex Chen',
      date: 'Dec 15, 2024',
      readTime: '8 min read',
      image: 'https://picsum.photos/seed/featured/1600/900',
      featured: true,
      tags: ['#Quantum', '#IEEE', '#Research', '#Engineering']
    },
    {
      id: 'ai-ml-revolution',
      title: 'The AI Revolution: Transforming Industries',
      excerpt: 'How artificial intelligence and machine learning are reshaping traditional industries and creating new opportunities.',
      category: 'ai-ml',
      author: 'Sarah Johnson',
      date: 'Dec 12, 2024',
      readTime: '6 min read',
      image: 'https://picsum.photos/seed/ai-ml/800/600',
      tags: ['#AI', '#MachineLearning', '#Innovation', '#IEEE']
    },
    {
      id: 'power-systems-future',
      title: 'Smart Grid Technologies: Power Systems of Tomorrow',
      excerpt: 'Innovative approaches to power grid management and renewable energy integration for sustainable future.',
      category: 'power-systems',
      author: 'Michael Roberts',
      date: 'Dec 10, 2024',
      readTime: '10 min read',
      image: 'https://picsum.photos/seed/power/800/600',
      tags: ['#PowerSystems', '#SmartGrid', '#Renewable', '#Sustainability']
    },
    {
      id: 'robotics-automation',
      title: 'Robotics in Healthcare: Automation Revolution',
      excerpt: 'The impact of robotic systems on healthcare delivery and patient care in modern medical facilities.',
      category: 'robotics',
      author: 'Emily Davis',
      date: 'Dec 8, 2024',
      readTime: '7 min read',
      image: 'https://picsum.photos/seed/robotics/800/600',
      tags: ['#Robotics', '#Healthcare', '#Automation', '#IEEE']
    },
    {
      id: 'blockchain-innovation',
      title: 'Blockchain Technology: Beyond Cryptocurrency',
      excerpt: 'Exploring blockchain applications in supply chain management, healthcare records, and digital identity verification.',
      category: 'research',
      author: 'David Kim',
      date: 'Dec 5, 2024',
      readTime: '9 min read',
      image: 'https://picsum.photos/seed/blockchain/800/600',
      tags: ['#Blockchain', '#Innovation', '#Fintech', '#IEEE']
    },
    {
      id: 'iot-smart-cities',
      title: 'IoT and Smart Cities: Building Connected Communities',
      excerpt: 'How Internet of Things technology is transforming urban infrastructure and creating more efficient cities.',
      category: 'ai-ml',
      author: 'Lisa Wang',
      date: 'Dec 2, 2024',
      readTime: '11 min read',
      image: 'https://picsum.photos/seed/iot/800/600',
      tags: ['#IoT', '#SmartCities', '#UrbanTech', '#IEEE']
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find(post => post.featured);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen text-[var(--text-ice)] overflow-x-hidden bg-[var(--bg-darkest)] relative z-10">
      {/* Hero Section */}
      <motion.section 
        className="relative min-h-[70vh] flex items-center pt-24 pb-12 overflow-hidden border-b border-[var(--border-mid)] bg-[var(--bg-dark)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="max-w-5xl space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="space-y-4" variants={itemVariants}>
              <div className="section-label mb-8">Editorial</div>
              <h1 className="headline-display mb-12">
                Voices of <br />
                <span className="text-[var(--primary)] italic">Technology.</span>
              </h1>
            </motion.div>
            <motion.p 
              className="text-[18px] md:text-[22px] text-[var(--text-secondary-c)] max-w-2xl leading-snug font-bold border-l-4 border-[var(--primary)] pl-6"
              variants={itemVariants}
            >
              Exploring the frontiers of technology through technical perspectives from IEEE SRM AP's brightest minds.
            </motion.p>
            <motion.div 
              className="flex flex-wrap gap-6 pt-4"
              variants={itemVariants}
            >
              <button 
                onClick={() => document.getElementById('featured-section').scrollIntoView({ behavior: 'smooth' })}
                className="bg-[var(--primary)] text-[var(--bg-darkest)] hover:bg-[var(--accent-gold)] px-10 py-5 text-[14px] font-bold uppercase tracking-widest transition-all"
              >
                Browse Articles
              </button>
              <button className="border-2 border-[var(--border-mid)] text-[var(--text-ice)] hover:border-[var(--primary)] px-10 py-5 text-[14px] font-bold uppercase tracking-widest transition-all">
                Submit Article
              </button>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-60">
          <a href="#featured-section" className="text-[var(--text-muted-c)] hover:text-[var(--primary)] transition-colors">
            <ChevronDown className="w-8 h-8" />
          </a>
        </div>
      </motion.section>

      {/* Featured Article Section */}
      {featuredPost && (
        <motion.section 
          id="featured-section" 
          className="py-20 relative z-20 bg-[var(--bg-darkest)]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-6">
            <div className="relative group overflow-hidden min-h-[600px] flex items-end border border-[var(--border-mid)] bg-[var(--bg-card)]">
              <div className="absolute inset-0">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title} 
                  className="w-full h-full object-cover grayscale transition-transform duration-[2000ms] group-hover:scale-105 group-hover:grayscale-0" 
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-darkest)] via-[var(--bg-darkest)]/80 to-transparent"></div>
              
              <div className="relative p-10 md:p-20 max-w-4xl space-y-6">
                <span className="badge-event violet mb-4 block w-fit">
                  Featured Article
                </span>
                <h2 className="font-display font-black text-[clamp(40px,5vw,72px)] text-[var(--text-ice)] group-hover:text-[var(--primary)] transition-colors uppercase leading-[1.0] mb-6">
                  {featuredPost.title}
                </h2>
                <p className="text-[18px] text-[var(--text-secondary-c)] font-medium max-w-2xl leading-relaxed mb-8">
                  {featuredPost.excerpt}
                </p>
                <div className="flex flex-wrap items-center justify-between gap-8 pt-8 border-t border-[var(--border-mid)]">
                  <div className="flex items-center gap-4 text-left">
                    <div className="w-14 h-14 bg-[var(--bg-darkest)] border border-[var(--border-primary)] flex items-center justify-center font-black text-[var(--primary)] text-2xl">
                      {featuredPost.author.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-[var(--text-ice)] text-[16px]">{featuredPost.author}</h4>
                      <div style={{ fontFamily: 'Chivo Mono' }} className="flex items-center gap-3 text-[12px] font-bold text-[var(--text-muted-c)] uppercase tracking-widest mt-1">
                        <span>{featuredPost.date}</span>
                        <span className="w-1 h-1 rounded-full bg-[var(--primary)]"></span>
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                  </div>
                  <button 
                    onClick={() => {
                      setSelectedPost(featuredPost);
                      setShowArticleDetail(true);
                    }}
                    className="bg-[var(--primary)] text-[var(--bg-darkest)] px-8 py-4 text-[14px] font-bold uppercase tracking-widest hover:bg-[var(--accent-gold)] transition-all"
                  >
                    Read Full Article
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      )}

      {/* Category Navigation */}
      <nav className="sticky top-16 z-40 bg-[var(--bg-darkest)] border-y border-[var(--border-mid)]">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between py-2 overflow-x-auto">
            <div className="flex items-center gap-8">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  style={{ fontFamily: 'Chivo Mono' }}
                  className={`py-6 whitespace-nowrap text-[12px] font-bold tracking-widest uppercase transition-all hover:text-[var(--primary)] ${
                    selectedCategory === category.id ? 'text-[var(--primary)] border-b-2 border-[var(--primary)]' : 'text-[var(--text-muted-c)] border-b-2 border-transparent'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Feed */}
      <div className="container mx-auto px-6 pt-20 pb-32">
        {/* Smart Filter Bar */}
        <div className="bg-[var(--bg-card)] border border-[var(--border-mid)] p-6 mb-20">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="relative flex-1 group w-full">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-[var(--text-muted-c)] group-focus-within:text-[var(--primary)] transition-colors w-6 h-6" />
              <input 
                type="text" 
                placeholder="Search technical articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-16 pr-6 py-5 bg-[var(--bg-darkest)] border border-[var(--border-mid)] focus:border-[var(--primary)] outline-none transition-all placeholder:text-[var(--text-muted-c)] font-bold text-[16px] text-[var(--text-ice)]"
              />
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center bg-[var(--bg-darkest)] border border-[var(--border-mid)] overflow-hidden">
                <span style={{ fontFamily: 'Chivo Mono' }} className="pl-6 pr-2 text-[12px] font-bold text-[var(--text-muted-c)] uppercase tracking-widest">Sort:</span>
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-transparent px-4 py-5 text-[14px] font-bold text-[var(--text-ice)] outline-none cursor-pointer hover:text-[var(--primary)] transition-colors uppercase"
                >
                  <option value="latest" className="bg-[var(--bg-card)]">Latest</option>
                  <option value="popular" className="bg-[var(--bg-card)]">Popular</option>
                  <option value="trending" className="bg-[var(--bg-card)]">Trending</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Article Grid */}
        <motion.div 
          className="technical-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredPosts.filter(post => !post.featured).slice(0, visiblePosts).map((post, index) => (
            <motion.article
              key={post.id}
              className="group solid-card p-0 flex flex-col"
              variants={itemVariants}
            >
              <div className="relative aspect-[16/10] overflow-hidden border-b border-[var(--border-mid)]">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-105 group-hover:grayscale-0" 
                />
                <span className="absolute top-6 left-6 font-mono text-[11px] font-bold uppercase tracking-widest px-3 py-1 bg-[var(--bg-darkest)] border border-[var(--border-primary)] text-[var(--primary)]">
                  {categories.find(cat => cat.id === post.category)?.name}
                </span>
                <button className="absolute top-6 right-6 w-10 h-10 bg-[var(--bg-darkest)] border border-[var(--border-mid)] flex items-center justify-center text-[var(--text-muted-c)] hover:text-[var(--primary)] hover:border-[var(--primary)] transition-all">
                  <Bookmark className="w-5 h-5" />
                </button>
              </div>
              
              <div className="p-8 space-y-6 flex-1 flex flex-col justify-between">
                <div className="space-y-4">
                  <h3 className="font-display font-black text-[24px] text-[var(--text-ice)] group-hover:text-[var(--primary)] transition-colors uppercase leading-tight mb-4">
                    {post.title}
                  </h3>
                  <p className="text-[16px] font-medium text-[var(--text-secondary-c)] line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {post.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        style={{ fontFamily: 'Chivo Mono' }}
                        className="px-3 py-1 bg-[var(--bg-darkest)] border border-[var(--border-mid)] text-[var(--text-muted-c)] text-[11px] font-bold uppercase tracking-widest hover:border-[var(--primary)] hover:text-[var(--primary)] transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-6 border-t border-[var(--border-mid)]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[var(--bg-darkest)] border border-[var(--border-mid)] flex items-center justify-center font-black text-[var(--primary)] text-lg">
                      {post.author.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-[var(--text-ice)] text-[14px]">{post.author}</h4>
                      <div style={{ fontFamily: 'Chivo Mono' }} className="flex items-center gap-2 text-[11px] font-bold text-[var(--text-muted-c)] uppercase tracking-widest mt-1">
                        <span>{post.date}</span>
                        <span className="w-1 h-1 rounded-full bg-[var(--primary)]"></span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                  <button 
                    onClick={() => {
                      setSelectedPost(post);
                      setShowArticleDetail(true);
                    }}
                    className="text-[var(--primary)] hover:text-[var(--accent-gold)] uppercase tracking-widest font-bold text-[12px]"
                  >
                    Read More
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
        
        {/* Load More Button */}
        {visiblePosts < filteredPosts.filter(post => !post.featured).length && (
          <div className="flex justify-center mt-16">
            <button 
              onClick={() => setVisiblePosts(prev => prev + postsPerPage)}
              className="bg-[var(--primary)] text-[var(--bg-darkest)] hover:bg-[var(--accent-gold)] px-12 py-5 text-[14px] font-bold uppercase tracking-widest transition-all"
            >
              Load More Articles
            </button>
          </div>
        )}
      </div>
      
      {/* Article Detail Modal */}
      {showArticleDetail && selectedPost && (
        <>
          <style jsx global>{`
            body { overflow: hidden; }
          `}</style>
          
          <motion.div 
            className="fixed inset-0 bg-[var(--bg-darkest)]/90 backdrop-blur-md z-50 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowArticleDetail(false)}
          >
            <motion.div 
              className="bg-[var(--bg-card)] border border-[var(--border-mid)] w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative flex-shrink-0 h-64 md:h-80 border-b border-[var(--border-mid)]">
                <img 
                  src={selectedPost.image} 
                  alt={selectedPost.title} 
                  className="w-full h-full object-cover grayscale"
                />
                <button 
                  onClick={() => setShowArticleDetail(false)}
                  className="absolute top-6 right-6 w-12 h-12 bg-[var(--bg-darkest)] border border-[var(--border-primary)] flex items-center justify-center text-[var(--primary)] hover:bg-[var(--primary)] hover:text-[var(--bg-darkest)] transition-all"
                >
                  <ArrowLeft className="w-6 h-6" />
                </button>
              </div>
              
              <div 
                className="flex-1 overflow-y-auto p-10 md:p-16 space-y-10"
                onWheel={(e) => e.stopPropagation()}
              >
                <div className="space-y-6">
                  <span className="badge-event violet">
                    {categories.find(cat => cat.id === selectedPost.category)?.name}
                  </span>
                  <h1 className="font-display text-[clamp(32px,5vw,64px)] font-black leading-[1.0] text-[var(--text-ice)] uppercase">
                    {selectedPost.title}
                  </h1>
                  <div className="flex items-center gap-6 pt-4">
                    <div className="w-14 h-14 bg-[var(--bg-darkest)] border border-[var(--border-primary)] flex items-center justify-center font-black text-[var(--primary)] text-2xl">
                      {selectedPost.author.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-[var(--text-ice)] text-[16px]">{selectedPost.author}</h4>
                      <div style={{ fontFamily: 'Chivo Mono' }} className="flex items-center gap-3 text-[12px] font-bold text-[var(--text-muted-c)] uppercase tracking-widest mt-1">
                        <span>{selectedPost.date}</span>
                        <span className="w-1 h-1 rounded-full bg-[var(--primary)]"></span>
                        <span>{selectedPost.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {selectedPost.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      style={{ fontFamily: 'Chivo Mono' }}
                      className="px-4 py-2 bg-[var(--bg-darkest)] border border-[var(--border-mid)] text-[var(--text-muted-c)] text-[12px] font-bold uppercase tracking-widest"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="prose prose-invert prose-lg max-w-none text-[18px] text-[var(--text-secondary-c)] font-medium leading-relaxed">
                  <p>{selectedPost.excerpt}</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <h2 className="text-[28px] font-black text-[var(--text-ice)] mt-12 mb-6 uppercase">Key Takeaways</h2>
                  <ul className="list-square pl-6 space-y-3 marker:text-[var(--primary)]">
                    <li>Understanding the fundamental concepts and principles</li>
                    <li>Practical applications in real-world scenarios</li>
                    <li>Future implications and potential developments</li>
                  </ul>
                </div>
                
                <div className="flex flex-col sm:flex-row items-center justify-between pt-10 border-t border-[var(--border-mid)] gap-6">
                  <div className="flex gap-4 w-full sm:w-auto">
                    <button className="bg-[var(--primary)] text-[var(--bg-darkest)] hover:bg-[var(--accent-gold)] px-8 py-4 text-[14px] font-bold uppercase tracking-widest transition-all w-full sm:w-auto">
                      Share Article
                    </button>
                    <button className="border-2 border-[var(--border-mid)] text-[var(--text-ice)] hover:border-[var(--primary)] px-8 py-4 text-[14px] font-bold uppercase tracking-widest transition-all w-full sm:w-auto">
                      Save for Later
                    </button>
                  </div>
                  <button 
                    onClick={() => setShowArticleDetail(false)}
                    className="text-[var(--text-muted-c)] hover:text-[var(--primary)] font-bold uppercase tracking-widest text-[14px] transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </div>
  );
};

export default Blog;
