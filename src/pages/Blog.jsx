import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Bookmark, ChevronDown, ArrowLeft, User, Clock, Calendar } from 'lucide-react';

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
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen text-blue-50 overflow-x-hidden bg-[#0a0f1d] relative z-10 font-body">
      {/* Hero Section */}
      <motion.section 
        className="relative min-h-[70vh] flex items-center pt-24 pb-12 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="max-w-4xl space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="space-y-4" variants={itemVariants}>
              <h2 className="paren-index uppercase">
                2025 // IEEE_SRM_AP // EDITORIAL_COLLECTION
              </h2>
              <h1 className="editorial-headline text-blue-50 mb-12">
                Voices of <br />
                <span className="text-[#40B2D6] italic">Technology.</span>
              </h1>
            </motion.div>
            <motion.p 
              className="text-[18px] md:text-[22px] text-blue-200/60 max-w-2xl leading-relaxed font-light"
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
                className="ieee-btn-primary px-10 py-5"
              >
                Browse Articles
              </button>
              <button className="ieee-btn-outline px-10 py-5">
                Submit Article
              </button>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
          <a href="#featured-section" className="text-blue-200 hover:text-[#40B2D6] transition-colors">
            <ChevronDown className="w-8 h-8" />
          </a>
        </div>
      </motion.section>

      {/* Featured Article Section */}
      {featuredPost && (
        <motion.section 
          id="featured-section" 
          className="py-20 relative z-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-6">
            <div className="relative group rounded-[3rem] overflow-hidden min-h-[600px] flex items-end border border-white/10 glass-card">
              <div className="absolute inset-0">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms]" 
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1d] via-[#0a0f1d]/80 to-transparent"></div>
              
              <div className="relative p-10 md:p-20 max-w-4xl space-y-6">
                <span className="paren-index text-[#40B2D6] px-0 mb-4 bg-transparent border-none">
                  RESEARCH_ACTIVATION_01
                </span>
                <h2 className="text-editorial text-[clamp(40px,5vw,72px)] text-blue-50 group-hover:text-[#40B2D6] transition-colors uppercase italic leading-none mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-body-loose text-lg max-w-2xl">
                  {featuredPost.excerpt}
                </p>
                <div className="flex flex-wrap items-center justify-between gap-8 pt-8 border-t border-white/10">
                  <div className="flex items-center gap-4 text-left">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center font-bold text-white text-xl border border-white/20">
                      {featuredPost.author.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-50 text-lg">{featuredPost.author}</h4>
                      <div className="flex items-center gap-3 text-[10px] text-blue-200/40 font-body uppercase tracking-widest">
                        <span>{featuredPost.date}</span>
                        <span className="w-1 h-1 rounded-full bg-[#40B2D6]/50"></span>
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                  </div>
                  <button 
                    onClick={() => {
                      setSelectedPost(featuredPost);
                      setShowArticleDetail(true);
                    }}
                    className="ieee-btn-primary px-10 py-5"
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
      <nav className="sticky top-16 z-40 bg-[#0a0f1d]/80 backdrop-blur-2xl border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between py-2 overflow-x-auto">
            <div className="flex items-center gap-8">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`py-6 whitespace-nowrap text-[11px] font-body font-medium tracking-[0.2em] uppercase transition-all hover:text-[#40B2D6] ${
                    selectedCategory === category.id ? 'text-[#40B2D6]' : 'text-blue-200/40'
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
      <div className="container mx-auto px-6 pt-20">
        {/* Smart Filter Bar */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-[2.5rem] mb-20">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="relative flex-1 group">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-blue-200/40 group-focus-within:text-[#40B2D6] transition-colors w-5 h-5" />
              <input 
                type="text" 
                placeholder="Search technical articles, research papers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-16 pr-6 py-5 bg-white/5 border border-white/10 rounded-2xl focus:ring-1 focus:ring-[#40B2D6]/50 outline-none transition-all placeholder:text-blue-200/20 font-body text-blue-50"
              />
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
                <span className="pl-6 pr-2 text-[10px] font-body text-blue-200/40 uppercase tracking-widest">Sort:</span>
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-transparent px-4 py-5 text-sm font-medium text-blue-50 outline-none cursor-pointer hover:text-[#40B2D6] transition-colors"
                >
                  <option value="latest" className="bg-[#0a0f1d]">Latest</option>
                  <option value="popular" className="bg-[#0a0f1d]">Popular</option>
                  <option value="trending" className="bg-[#0a0f1d]">Trending</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Article Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredPosts.filter(post => !post.featured).slice(0, visiblePosts).map((post, index) => (
            <motion.article
              key={post.id}
              className="group indexed-card bg-[#0e1e3a] overflow-hidden transition-all duration-500"
              variants={itemVariants}
              whileHover={{ y: -8 }}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e1e3a] via-transparent to-transparent opacity-80"></div>
                <span className="absolute top-6 left-6 paren-index px-3 py-1 bg-black/40 border border-white/10 backdrop-blur-xl text-[#40B2D6]">
                  {categories.find(cat => cat.id === post.category)?.name}
                </span>
                <button className="absolute top-6 right-6 w-10 h-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full flex items-center justify-center text-blue-200/60 hover:text-[#40B2D6] transition-all active:scale-90">
                  <Bookmark className="w-4 h-4" />
                </button>
              </div>
              
              <div className="p-8 space-y-6">
                <div className="space-y-4">
                  <h3 className="text-editorial text-2xl text-blue-50 group-hover:text-[#40B2D6] transition-colors uppercase italic mb-4">
                    {post.title}
                  </h3>
                  <p className="text-body-loose text-xs line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-3 py-1 bg-white/5 border border-white/10 text-blue-200/40 text-[10px] uppercase font-body tracking-[0.2em] rounded-full hover:border-[#40B2D6]/30 hover:text-[#40B2D6] transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-6 border-t border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center font-bold text-white text-sm">
                      {post.author.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-50 text-sm">{post.author}</h4>
                      <div className="flex items-center gap-2 text-[10px] text-blue-200/40 font-body uppercase tracking-widest">
                        <span>{post.date}</span>
                        <span className="w-1 h-1 rounded-full bg-[#40B2D6]/50"></span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                  <button 
                    onClick={() => {
                      setSelectedPost(post);
                      setShowArticleDetail(true);
                    }}
                    className="ieee-btn-outline px-4 py-2 !text-[10px]"
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
              className="ieee-btn-primary px-12 py-5"
            >
              Load More Articles
            </button>
          </div>
        )}
      </div>
      
      {/* Article Detail Modal */}
      {showArticleDetail && selectedPost && (
        <>
          {/* Prevent body scroll */}
          <style jsx global>{`
            body {
              overflow: hidden;
            }
          `}</style>
          
          <motion.div 
            className="fixed inset-0 bg-[#0a0f1d]/80 backdrop-blur-md z-50 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowArticleDetail(false)}
          >
            <motion.div 
              className="blog-modal-content bg-[#0a0f1d] border border-white/10 rounded-[3rem] max-w-4xl w-full max-h-[80vh] overflow-hidden shadow-2xl flex flex-col"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative flex-shrink-0">
                <img 
                  src={selectedPost.image} 
                  alt={selectedPost.title} 
                  className="w-full h-80 object-cover rounded-t-[3rem]"
                />
                <button 
                  onClick={() => setShowArticleDetail(false)}
                  className="absolute top-6 right-6 w-12 h-12 bg-white/5 border border-white/10 backdrop-blur-xl rounded-full flex items-center justify-center text-white hover:text-[#40B2D6] transition-all"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
              </div>
              
              <div 
                className="blog-modal-scrollable flex-1 overflow-y-auto p-10 space-y-8"
                onWheel={(e) => {
                  e.stopPropagation();
                }}
              >
                <div className="space-y-4">
                  <span className="section-index text-[#40B2D6]">
                    {categories.find(cat => cat.id === selectedPost.category)?.name}
                  </span>
                  <h1 className="font-display text-4xl md:text-6xl font-medium leading-tight text-blue-50">
                    {selectedPost.title}
                  </h1>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center font-bold text-white">
                      {selectedPost.author.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-50">{selectedPost.author}</h4>
                      <div className="flex items-center gap-3 text-[11px] text-blue-200/40 font-body uppercase tracking-widest">
                        <span>{selectedPost.date}</span>
                        <span className="w-1 h-1 rounded-full bg-[#40B2D6]/50"></span>
                        <span>{selectedPost.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {selectedPost.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-4 py-2 bg-white/5 border border-white/10 text-blue-200/60 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="prose prose-invert prose-lg max-w-none">
                  <p className="text-lg text-blue-200/60 leading-relaxed">
                    {selectedPost.excerpt}
                  </p>
                  <p className="text-lg text-blue-200/60 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <p className="text-lg text-blue-200/60 leading-relaxed">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                  <h2 className="text-2xl font-medium text-blue-50 mt-8 mb-4">Key Takeaways</h2>
                  <ul className="list-disc pl-6 space-y-2 text-blue-200/60">
                    <li>Understanding the fundamental concepts and principles</li>
                    <li>Practical applications in real-world scenarios</li>
                    <li>Future implications and potential developments</li>
                    <li>Industry best practices and recommendations</li>
                  </ul>
                  <p className="text-lg text-blue-200/60 leading-relaxed">
                    This comprehensive analysis provides valuable insights into the current state and future prospects of this rapidly evolving field. As technology continues to advance at an unprecedented pace, staying informed about these developments becomes increasingly crucial for professionals and enthusiasts alike.
                  </p>
                  <p className="text-lg text-blue-200/60 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <p className="text-lg text-blue-200/60 leading-relaxed">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                  <h2 className="text-2xl font-medium text-blue-50 mt-8 mb-4">Additional Content</h2>
                  <p className="text-lg text-blue-200/60 leading-relaxed">
                    This is additional content to test scrolling functionality. When you have long articles like this, the modal should allow smooth scrolling within the content area while keeping the header image and close button fixed at the top.
                  </p>
                  <p className="text-lg text-blue-200/60 leading-relaxed">
                    The scrolling should be smooth and the scrollbar should be styled to match the overall design aesthetic of the blog page.
                  </p>
                </div>
                
                <div className="flex items-center justify-between pt-8 border-t border-white/10 flex-shrink-0">
                  <div className="flex gap-4">
                    <button className="ieee-btn-primary px-6 py-3">
                      Share Article
                    </button>
                    <button className="ieee-btn-outline px-6 py-3">
                      Save for Later
                    </button>
                  </div>
                  <button 
                    onClick={() => setShowArticleDetail(false)}
                    className="ieee-btn-outline px-6 py-3 border-none bg-white/5"
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
