import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const posts = [
  {
    title: '10 AI Trends Transforming Business in 2024',
    category: 'AI Trends',
    author: 'Sarah Johnson',
    date: 'Nov 28, 2024',
    readTime: '5 min read',
    excerpt: 'Discover the latest AI innovations reshaping how businesses operate, from generative AI to autonomous agents that work around the clock.',
    image: 'https://images.unsplash.com/photo-1675557009483-e6cf3867976b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMHRlY2hub2xvZ3klMjBkaWdpdGFsfGVufDF8fHx8MTc2NDUyNzQwM3ww&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    title: 'Maximize ROI with Smart Google Ads Strategies',
    category: 'Digital Marketing',
    author: 'Emma Williams',
    date: 'Nov 25, 2024',
    readTime: '7 min read',
    excerpt: 'Learn proven tactics to optimize your Google Ads campaigns, reduce costs, and drive qualified leads that convert into customers.',
    image: 'https://images.unsplash.com/photo-1599658880436-c61792e70672?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwYW5hbHl0aWNzfGVufDF8fHx8MTc2NDUxMjczNXww&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    title: 'SEO Best Practices for 2024: A Complete Guide',
    category: 'SEO',
    author: 'Michael Chen',
    date: 'Nov 22, 2024',
    readTime: '10 min read',
    excerpt: 'Master the latest SEO techniques to boost your rankings, from technical optimization to content strategies that search engines love.',
    image: 'https://images.unsplash.com/photo-1603985585179-3d71c35a537c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzY0NTY5NTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    title: 'How AI Voice Agents are Revolutionizing Customer Service',
    category: 'AI Innovation',
    author: 'Olivia Brown',
    date: 'Nov 20, 2024',
    readTime: '6 min read',
    excerpt: 'Explore how AI voice technology is enabling businesses to provide instant, natural customer support at scale across all time zones.',
    image: 'https://images.unsplash.com/photo-1618758992242-2d4bc63a1be7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMGFydGlmaWNpYWwlMjBpbnRlbGxpZ2VuY2V8ZW58MXx8fHwxNzY0NTYzNDc5fDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    title: 'Social Media Marketing: Building Authentic Engagement',
    category: 'Social Media',
    author: 'Emma Williams',
    date: 'Nov 18, 2024',
    readTime: '8 min read',
    excerpt: 'Create compelling social content that resonates with your audience and builds a loyal community around your brand.',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMG1hcmtldGluZ3xlbnwxfHx8fDE3NjQ1MTg3Njl8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    title: 'The Power of Workflow Automation for Growing Teams',
    category: 'Productivity',
    author: 'David Martinez',
    date: 'Nov 15, 2024',
    readTime: '5 min read',
    excerpt: 'Streamline your operations and free up valuable time by automating repetitive tasks and connecting your business tools.',
    image: 'https://images.unsplash.com/photo-1614651462377-4f3fe3e2c262?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwZGlnaXRhbCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY0NjEwMDc1fDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
];

export function Blog() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="min-h-screen py-24 px-4 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="neon-text mb-4">Blog & News</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Insights, tips, and industry updates to help you stay ahead in the digital world
          </p>
        </motion.div>

        {/* Featured Post */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card rounded-2xl overflow-hidden mb-12 group cursor-pointer hover:neon-glow transition-all duration-300"
        >
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative h-80 md:h-auto overflow-hidden">
              <ImageWithFallback
                src={posts[0].image}
                alt={posts[0].title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4">
                <span className="glass-button px-4 py-2 rounded-full text-sm">
                  Featured
                </span>
              </div>
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <span className="text-[#00ff7f] text-sm mb-3">{posts[0].category}</span>
              <h3 className="text-white mb-4">{posts[0].title}</h3>
              <p className="text-gray-300 mb-6">{posts[0].excerpt}</p>
              <div className="flex items-center gap-6 text-sm text-gray-400 mb-6">
                <div className="flex items-center gap-2">
                  <User size={16} />
                  <span>{posts[0].author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{posts[0].date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>{posts[0].readTime}</span>
                </div>
              </div>
              <button className="glass-button px-6 py-3 rounded-lg inline-flex items-center gap-2 self-start group/btn">
                <span>Read More</span>
                <ArrowRight size={18} className="group-hover/btn:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Recent Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(1).map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="neo-card overflow-hidden hover:neo-elevated transition-all duration-300 group cursor-pointer"
            >
              <div className="relative h-56 overflow-hidden neo-pressed">
                <ImageWithFallback
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                <div className="absolute top-4 left-4 neo-button px-4 py-2 rounded-lg">
                  <span className="text-xs text-[#00ff7f]">{post.category}</span>
                </div>
              </div>

              <div className="p-6">
                <h4 className="text-white mb-3 group-hover:text-[#00ff7f] transition-colors">
                  {post.title}
                </h4>
                <p className="text-sm text-gray-400 mb-4">{post.excerpt}</p>

                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <span className="flex items-center gap-1">
                    <User size={14} />
                    {post.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {post.date}
                  </span>
                </div>

                <button className="text-[#00ff7f] text-sm flex items-center gap-2 group/btn">
                  <span>Read Article</span>
                  <ArrowRight size={16} className="group-hover/btn:translate-x-2 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="glass-card p-12 rounded-2xl mt-16 text-center"
        >
          <h3 className="text-[#00ff7f] mb-4">Stay Updated</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest insights on AI, digital marketing, 
            and business growth strategies delivered to your inbox weekly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-lg glass-card border-none focus:neon-glow outline-none text-white placeholder-gray-500"
            />
            <button className="glass-button px-8 py-3 rounded-lg whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}