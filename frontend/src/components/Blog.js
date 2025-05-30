import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Search, Tag } from 'lucide-react';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: "Advanced System-Level Testing Strategies for Modern Processors",
      excerpt: "Exploring cutting-edge methodologies in processor validation and the role of automated testing in achieving 95%+ yield rates.",
      category: "System Testing",
      readTime: "8 min read",
      date: "2024-01-15",
      image: "https://images.unsplash.com/photo-1501556424050-d4816356b73e",
      tags: ["Testing", "Processors", "Automation", "AMD"]
    },
    {
      id: 2,
      title: "The Future of AI Hardware: Lessons from MI300 Development",
      excerpt: "Insights into developing testing protocols for next-generation AI solutions and the challenges of validating cutting-edge hardware.",
      category: "AI Hardware",
      readTime: "12 min read",
      date: "2024-01-08",
      image: "https://images.unsplash.com/photo-1501556424050-d4816356b73e",
      tags: ["AI", "Hardware", "Innovation", "Testing"]
    },
    {
      id: 3,
      title: "Industrial Automation: From PLCs to Smart Manufacturing",
      excerpt: "A deep dive into modern industrial automation, exploring the integration of PLCs, HMI systems, and IoT technologies.",
      category: "Automation",
      readTime: "10 min read",
      date: "2024-01-01",
      image: "https://images.unsplash.com/photo-1501556424050-d4816356b73e",
      tags: ["PLC", "Automation", "IoT", "Manufacturing"]
    },
    {
      id: 4,
      title: "Building Reliable Embedded Systems: ESP32 Projects and Beyond",
      excerpt: "Practical insights into embedded system development, from hobby projects to production-ready solutions.",
      category: "Embedded Systems",
      readTime: "15 min read",
      date: "2023-12-20",
      image: "https://images.unsplash.com/photo-1501556424050-d4816356b73e",
      tags: ["ESP32", "Embedded", "IoT", "Arduino"]
    },
    {
      id: 5,
      title: "Cross-Functional Engineering: Bridging Hardware and Software",
      excerpt: "How modern engineers can excel by developing skills across traditional engineering boundaries.",
      category: "Career Advice",
      readTime: "6 min read",
      date: "2023-12-15",
      image: "https://images.unsplash.com/photo-1501556424050-d4816356b73e",
      tags: ["Career", "Skills", "Engineering", "Leadership"]
    },
    {
      id: 6,
      title: "Blockchain Technology for Engineers: Running an Ethereum Node",
      excerpt: "Understanding blockchain infrastructure from an engineering perspective and contributing to decentralized networks.",
      category: "Blockchain",
      readTime: "11 min read",
      date: "2023-12-10",
      image: "https://images.unsplash.com/photo-1501556424050-d4816356b73e",
      tags: ["Blockchain", "Ethereum", "Infrastructure", "Technology"]
    }
  ];

  const categories = ['all', 'System Testing', 'AI Hardware', 'Automation', 'Embedded Systems', 'Career Advice', 'Blockchain'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="blog" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1501556424050-d4816356b73e"
          alt="Modern Workspace"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-dark-900/95 to-dark-800/90"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
            Blog Posts
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Sharing insights on system-level testing, automation, embedded systems, 
            and the latest trends in engineering and technology.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto mb-8">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 glass rounded-xl border border-slate-600 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 text-slate-200 placeholder-slate-400"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'glass text-slate-400 hover:text-blue-400 hover:bg-blue-500/10'
                }`}
              >
                {category === 'all' ? 'All Posts' : category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Blog Posts Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-2xl overflow-hidden hover-lift group cursor-pointer"
            >
              {/* Post Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Post Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-200 mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Meta Information */}
                <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                    <span className="flex items-center">
                      <Clock size={14} className="mr-1" />
                      {post.readTime}
                    </span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="flex items-center px-2 py-1 bg-blue-500/10 border border-blue-500/20 rounded text-blue-300 text-xs"
                    >
                      <Tag size={10} className="mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Read More Button */}
                <button className="flex items-center text-blue-400 hover:text-blue-300 transition-colors font-medium">
                  <span>Read More</span>
                  <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* No Results Message */}
        {filteredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-slate-400 text-lg">
              No articles found matching your search criteria.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="mt-4 btn-secondary px-6 py-2 rounded-lg"
            >
              Clear Filters
            </button>
          </motion.div>
        )}

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Stay Updated
            </h3>
            <p className="text-slate-400 mb-6">
              Get notified when I publish new articles about engineering, technology, and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 glass rounded-lg border border-slate-600 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 text-slate-200 placeholder-slate-400"
              />
              <button className="btn-primary px-6 py-3 rounded-lg font-semibold whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
