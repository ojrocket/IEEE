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
    <div className="min-h-screen text-slate-800 overflow-x-hidden bg-[#f8faf7] relative z-10">
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
              <h2 className="text-cyan-600 font-bold uppercase tracking-[0.3em] text-xs flex items-center gap-3">
                <span className="w-12 h-[1px] bg-cyan-600"></span> IEEE Insights
              </h2>
              <h1 className="text-6xl md:text-9xl font-black leading-[0.85] tracking-tighter">
                Engineering.<br />
                Research.<br />
                <span className="text-cyan-600 bg-gradient-to-r from-cyan-600 to-blue-700 bg-clip-text text-transparent">Innovation.</span>
              </h1>
            </motion.div>
            <motion.p 
              className="text-xl md:text-2xl text-slate-600 max-w-2xl leading-relaxed font-medium"
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
                className="px-10 py-5 bg-cyan-600 hover:bg-cyan-700 text-white font-black rounded-2xl transition-all shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:scale-105 active:scale-95"
              >
                Browse Articles
              </button>
              <button className="px-10 py-5 bg-slate-200 hover:bg-slate-300 text-slate-800 font-black rounded-2xl border border-slate-300 transition-all hover:scale-105 active:scale-95">
                Submit Article
              </button>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
          <a href="#featured-section" className="text-slate-600 hover:text-cyan-600 transition-colors">
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
            <div className="relative group rounded-[3rem] overflow-hidden min-h-[600px] flex items-end border border-white/5 shadow-2xl">
              <div className="absolute inset-0">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms]" 
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#f8faf7] via-[#f8faf7]/90 to-transparent"></div>
              
              <div className="relative p-10 md:p-20 max-w-4xl space-y-6">
                <span className="px-5 py-2 bg-cyan-600/20 backdrop-blur-xl text-cyan-700 rounded-full text-[10px] font-black uppercase tracking-widest border border-cyan-600/30">
                  Featured Research
                </span>
                <h2 className="text-4xl md:text-7xl font-black leading-tight text-slate-800 group-hover:text-cyan-700 transition-colors drop-shadow-2xl">
                  {featuredPost.title}
                </h2>
                <p className="text-xl text-slate-600 line-clamp-2 max-w-2xl font-medium leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex flex-wrap items-center justify-between gap-8 pt-8 border-t border-slate-300">
                  <div className="flex items-center gap-4 text-left">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-600 to-blue-700 flex items-center justify-center font-black text-white text-xl shadow-lg border border-white/20">
                      {featuredPost.author.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-lg">{featuredPost.author}</h4>
                      <div className="flex items-center gap-3 text-[10px] text-slate-600 font-black uppercase tracking-widest">
                        <span>{featuredPost.date}</span>
                        <span className="w-1 h-1 rounded-full bg-cyan-600/50"></span>
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                  </div>
                  <button 
                    onClick={() => {
                      setSelectedPost(featuredPost);
                      setShowArticleDetail(true);
                    }}
                    className="px-10 py-5 bg-cyan-600 text-white font-black rounded-2xl hover:bg-cyan-700 transition-all hover:scale-105 shadow-xl"
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
      <nav className="sticky top-16 z-40 bg-white/80 backdrop-blur-2xl border-y border-slate-200 shadow-xl">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between py-2 overflow-x-auto">
            <div className="flex items-center gap-8">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`py-6 whitespace-nowrap text-sm font-black tracking-widest uppercase transition-all hover:text-cyan-700 ${
                    selectedCategory === category.id ? 'text-cyan-700' : 'text-slate-500'
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
        <div className="bg-white/90 backdrop-blur-xl border border-slate-200 p-6 rounded-[2.5rem] mb-20 shadow-2xl">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="relative flex-1 group">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-cyan-700 transition-colors w-5 h-5" />
              <input 
                type="text" 
                placeholder="Search technical articles, research papers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-16 pr-6 py-5 bg-slate-50 border border-slate-300 rounded-2xl focus:ring-2 focus:ring-cyan-600 outline-none transition-all placeholder:text-slate-500 font-bold text-slate-800"
              />
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center bg-slate-50 border border-slate-300 rounded-2xl overflow-hidden">
                <span className="pl-6 pr-2 text-xs font-black text-slate-600 uppercase tracking-widest">Sort:</span>
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-transparent px-4 py-5 text-sm font-black text-slate-800 outline-none cursor-pointer hover:text-cyan-700 transition-colors"
                >
                  <option value="latest">Latest</option>
                  <option value="popular">Popular</option>
                  <option value="trending">Trending</option>
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
              className="group relative bg-white border border-slate-200 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
              variants={itemVariants}
              whileHover={{ y: -8 }}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-60"></div>
                <span className="absolute top-6 left-6 px-4 py-1.5 bg-cyan-600/20 backdrop-blur-xl text-cyan-700 rounded-full text-[10px] font-black uppercase tracking-[0.2em] border border-cyan-600/30">
                  {categories.find(cat => cat.id === post.category)?.name}
                </span>
                <button className="absolute top-6 right-6 w-10 h-10 bg-white/90 backdrop-blur-xl rounded-full flex items-center justify-center text-slate-600 hover:text-cyan-700 transition-all active:scale-90 shadow-lg">
                  <Bookmark className="w-4 h-4" />
                </button>
              </div>
              
              <div className="p-8 space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-black leading-tight text-slate-800 group-hover:text-cyan-700 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full hover:bg-cyan-100 hover:text-cyan-700 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-6 border-t border-slate-200">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-600 to-blue-700 flex items-center justify-center font-black text-white text-sm shadow-lg">
                      {post.author.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm">{post.author}</h4>
                      <div className="flex items-center gap-2 text-[10px] text-slate-600 font-black uppercase tracking-widest">
                        <span>{post.date}</span>
                        <span className="w-1 h-1 rounded-full bg-cyan-600/50"></span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                  <button 
                    onClick={() => {
                      setSelectedPost(post);
                      setShowArticleDetail(true);
                    }}
                    className="text-cyan-700 hover:text-cyan-600 font-black text-sm uppercase tracking-widest transition-colors bg-cyan-50 px-4 py-2 rounded-xl hover:bg-cyan-100"
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
              className="px-12 py-5 bg-cyan-600 hover:bg-cyan-700 text-white font-black rounded-2xl transition-all hover:scale-105 shadow-xl"
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
            className="fixed inset-0 bg-black/50 backdrop-blur-md z-50 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowArticleDetail(false)}
          >
            <motion.div 
              className="blog-modal-content bg-white rounded-[3rem] max-w-4xl w-full max-h-[80vh] overflow-hidden shadow-2xl flex flex-col"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative flex-shrink-0">
                <img 
                  src={selectedPost.image} 
                  alt={selectedPost.title} 
                  className="w-full h-64 object-cover rounded-t-[3rem]"
                />
                <button 
                  onClick={() => setShowArticleDetail(false)}
                  className="absolute top-6 right-6 w-12 h-12 bg-white/90 backdrop-blur-xl rounded-full flex items-center justify-center text-slate-600 hover:text-cyan-700 transition-all shadow-lg"
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
                  <span className="px-4 py-2 bg-cyan-600/20 text-cyan-700 rounded-full text-xs font-black uppercase tracking-widest">
                    {categories.find(cat => cat.id === selectedPost.category)?.name}
                  </span>
                  <h1 className="text-4xl md:text-6xl font-black leading-tight text-slate-800">
                    {selectedPost.title}
                  </h1>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-600 to-blue-700 flex items-center justify-center font-black text-white">
                      {selectedPost.author.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800">{selectedPost.author}</h4>
                      <div className="flex items-center gap-3 text-xs text-slate-600 font-black uppercase tracking-widest">
                        <span>{selectedPost.date}</span>
                        <span className="w-1 h-1 rounded-full bg-cyan-600/50"></span>
                        <span>{selectedPost.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {selectedPost.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-4 py-2 bg-slate-100 text-slate-600 text-sm font-medium rounded-full hover:bg-cyan-100 hover:text-cyan-700 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-slate-600 leading-relaxed">
                    {selectedPost.excerpt}
                  </p>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                  <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">Key Takeaways</h2>
                  <ul className="list-disc pl-6 space-y-2 text-slate-600">
                    <li>Understanding the fundamental concepts and principles</li>
                    <li>Practical applications in real-world scenarios</li>
                    <li>Future implications and potential developments</li>
                    <li>Industry best practices and recommendations</li>
                  </ul>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    This comprehensive analysis provides valuable insights into the current state and future prospects of this rapidly evolving field. As technology continues to advance at an unprecedented pace, staying informed about these developments becomes increasingly crucial for professionals and enthusiasts alike.
                  </p>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                  <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">Additional Content</h2>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    This is additional content to test scrolling functionality. When you have long articles like this, the modal should allow smooth scrolling within the content area while keeping the header image and close button fixed at the top.
                  </p>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    The scrolling should be smooth and the scrollbar should be styled to match the overall design aesthetic of the blog page.
                  </p>
                </div>
                
                <div className="flex items-center justify-between pt-8 border-t border-slate-200 flex-shrink-0">
                  <div className="flex gap-4">
                    <button className="px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-black rounded-xl transition-all hover:scale-105">
                      Share Article
                    </button>
                    <button className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-black rounded-xl transition-all hover:scale-105">
                      Save for Later
                    </button>
                  </div>
                  <button 
                    onClick={() => setShowArticleDetail(false)}
                    className="px-6 py-3 bg-slate-200 hover:bg-slate-300 text-slate-800 font-black rounded-xl transition-all hover:scale-105"
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
