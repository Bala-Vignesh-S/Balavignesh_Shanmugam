import { useState } from 'react';
import { SectionTitle } from './ui/SectionTitle';
import { SectionBackground } from './ui/SectionBackground';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, Tag, TrendingUp, BookOpen, ExternalLink, Search } from 'lucide-react';

type Article = {
  id: number; title: string; excerpt: string; category: string; date: string;
  readTime: string; image: string; link: string; tags: string[];
  featured?: boolean; views?: string;
};

const articles: Article[] = [
  { id: 1, title: 'Building Scalable Web Applications with React & TypeScript', excerpt: 'Learn best practices for building modern, type-safe web applications that scale with your business needs.', category: 'Web Development', date: 'Jan 10, 2026', readTime: '8 min', image: '/assets/blog1.jpg', link: 'https://deepakmodi.hashnode.dev/', tags: ['React', 'TypeScript', 'Architecture'], featured: true, views: '2.5k' },
  { id: 2, title: 'Mastering Modern UI/UX Design Principles', excerpt: 'Discover the key principles that make interfaces intuitive, beautiful, and user-friendly in 2026.', category: 'Design', date: 'Jan 8, 2026', readTime: '6 min', image: '/assets/blog2.jpg', link: 'https://deepakmodi.hashnode.dev/', tags: ['UI/UX', 'Design', 'Trends'], featured: true, views: '1.8k' },
  { id: 3, title: 'Cloud Architecture: AWS vs Azure Comparison', excerpt: 'A comprehensive guide to choosing the right cloud platform for your next project.', category: 'Cloud', date: 'Jan 5, 2026', readTime: '10 min', image: '/assets/blog3.jpg', link: 'https://deepakmodi.hashnode.dev/', tags: ['Cloud', 'AWS', 'Azure'], views: '3.2k' },
  { id: 4, title: 'Performance Optimization Techniques for React Apps', excerpt: 'Boost your React application performance with these proven optimization strategies.', category: 'Web Development', date: 'Dec 28, 2025', readTime: '7 min', image: '/assets/blog4.jpg', link: 'https://deepakmodi.hashnode.dev/', tags: ['React', 'Performance', 'Optimization'], views: '2.1k' },
  { id: 5, title: 'Getting Started with AI & Machine Learning', excerpt: 'Your practical guide to understanding and implementing AI solutions in real-world projects.', category: 'AI/ML', date: 'Dec 20, 2025', readTime: '12 min', image: '/assets/blog5.jpg', link: 'https://deepakmodi.hashnode.dev/', tags: ['AI', 'Machine Learning', 'Python'], views: '4.1k' },
  { id: 6, title: 'Microservices Architecture: A Complete Guide', excerpt: 'Learn how to design, build, and deploy microservices-based applications effectively.', category: 'Architecture', date: 'Dec 15, 2025', readTime: '15 min', image: '/assets/blog6.jpg', link: 'https://deepakmodi.hashnode.dev/', tags: ['Microservices', 'Backend', 'DevOps'], views: '1.9k' },
];

const categories = ['All', 'Web Development', 'Design', 'Cloud', 'AI/ML', 'Architecture'];

export function Blogs() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const filteredArticles = articles.filter((article) => {
    const matchesCategory = activeCategory === 'All' || article.category === activeCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredArticles = articles.filter(a => a.featured);

  return (
    <SectionBackground>
      <section id="blogs">
        <div className="container mx-auto px-8">
          <SectionTitle subtitle="Insights, tutorials, and stories from the tech world ðŸ“">Blogs & Articles</SectionTitle>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[var(--text-muted)] w-5 h-5" />
              <input type="text" placeholder="Search articles, topics, tags..."
                value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/5 border border-white/10 text-gray-100 placeholder-[var(--text-muted)] focus:border-[var(--accent-cyan)]/50 focus:outline-none focus:ring-1 focus:ring-[var(--accent-cyan)]/30 transition-colors" />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <motion.button key={category} onClick={() => setActiveCategory(category)}
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                className={`px-6 py-2.5 rounded-full font-medium transition-all ${
                  activeCategory === category
                    ? 'gradient-btn shadow-lg shadow-[var(--accent-cyan)]/20'
                    : 'glass-card text-[var(--text-secondary)] hover:text-gray-100 hover:border-white/15'
                }`}>
                {category}
              </motion.button>
            ))}
          </div>

          {/* Featured Articles */}
          {activeCategory === 'All' && searchQuery === '' && (
            <div className="mb-16">
              <div className="flex items-center gap-2 mb-6">
                <TrendingUp className="w-6 h-6 text-[var(--accent-cyan)]" />
                <h3 className="text-2xl font-bold text-gray-100">Featured Articles</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                {featuredArticles.map((article, index) => (
                  <motion.div key={article.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                    <a href={article.link} target="_blank" rel="noopener noreferrer" className="group block relative h-full"
                      onMouseEnter={() => setHoveredCard(article.id)} onMouseLeave={() => setHoveredCard(null)}>
                      <div className="relative h-full glass-card overflow-hidden transition-all duration-500 group-hover:border-[var(--accent-cyan)]/20 group-hover:shadow-[0_0_30px_rgba(0,212,255,0.1)]">
                        <div className="relative h-72 overflow-hidden">
                          <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#000000]/40 to-transparent" />
                          <div className="absolute top-4 left-4">
                            <span className="px-4 py-1.5 rounded-full gradient-btn text-sm shadow-lg">Featured</span>
                          </div>
                          <div className="absolute bottom-4 left-4 right-4">
                            <h3 className="text-2xl font-bold text-white mb-2 line-clamp-2 group-hover:text-[var(--accent-cyan)] transition-colors">{article.title}</h3>
                            <p className="text-gray-300 text-sm line-clamp-2">{article.excerpt}</p>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--text-muted)] mb-4">
                            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{article.date}</span>
                            <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{article.readTime}</span>
                            <span className="flex items-center gap-1"><BookOpen className="w-4 h-4" />{article.views} views</span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {article.tags.map((tag) => (
                              <span key={tag} className="px-3 py-1 rounded-full bg-[var(--accent-cyan)]/10 text-[var(--accent-cyan)] text-xs font-medium">#{tag}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* All Articles Grid */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-6">
              <BookOpen className="w-6 h-6 text-[var(--text-secondary)]" />
              <h3 className="text-2xl font-bold text-gray-100">{activeCategory === 'All' ? 'All Articles' : activeCategory}</h3>
              <span className="ml-2 px-3 py-1 rounded-full glass-card text-[var(--text-secondary)] text-sm font-medium">{filteredArticles.length}</span>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div key={activeCategory + searchQuery} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}
              className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {filteredArticles.map((article, index) => (
                <motion.div key={article.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }} whileHover={{ y: -8 }}>
                  <a href={article.link} target="_blank" rel="noopener noreferrer" className="group block h-full"
                    onMouseEnter={() => setHoveredCard(article.id)} onMouseLeave={() => setHoveredCard(null)}>
                    <div className="relative h-full glass-card overflow-hidden hover:border-[var(--accent-cyan)]/20 hover:shadow-[0_0_20px_rgba(0,212,255,0.08)] transition-all duration-500">
                      <div className="relative h-52 overflow-hidden">
                        <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute top-3 left-3">
                          <span className="px-3 py-1 rounded-full glass-card text-[var(--text-secondary)] text-xs font-semibold">{article.category}</span>
                        </div>
                      </div>
                      <div className="p-5">
                        <h3 className="text-xl font-bold text-gray-100 mb-3 line-clamp-2 group-hover:text-[var(--accent-cyan)] transition-colors">{article.title}</h3>
                        <p className="text-[var(--text-secondary)] text-sm mb-4 line-clamp-3">{article.excerpt}</p>
                        <div className="flex items-center justify-between text-xs text-[var(--text-muted)] mb-4">
                          <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{article.date}</span>
                          <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{article.readTime}</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {article.tags.slice(0, 3).map((tag) => (
                            <span key={tag} className="px-2.5 py-1 rounded-full bg-white/5 text-[var(--text-secondary)] text-xs font-medium flex items-center gap-1">
                              <Tag className="w-3 h-3" />{tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <motion.div initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: hoveredCard === article.id ? 1 : 0, x: hoveredCard === article.id ? 0 : -10 }}
                        className="absolute bottom-5 right-5 p-2 rounded-full gradient-btn">
                        <ExternalLink className="w-4 h-4" />
                      </motion.div>
                    </div>
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredArticles.length === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-16">
              <BookOpen className="w-16 h-16 text-[var(--text-muted)] mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-100 mb-2">No articles found</h3>
              <p className="text-[var(--text-secondary)]">Try adjusting your search or filter to find what you're looking for.</p>
            </motion.div>
          )}

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-12 text-center">
            <a href="https://deepakmodi.hashnode.dev/" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold gradient-btn rounded-full group">
              Explore More Articles
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>
    </SectionBackground>
  );
}
