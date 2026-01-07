import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { ExternalLink, TrendingUp, Users, DollarSign } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const projects = [
  {
    title: 'Global eCommerce Platform',
    category: 'eCommerce & AI',
    description: 'Built a complete online store with AI-powered product recommendations and 24/7 chatbot support. Integrated payment gateways and inventory management.',
    image: 'https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBvbmxpbmUlMjBzaG9wcGluZ3xlbnwxfHx8fDE3NjQ1ODA5NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    metrics: [
      { icon: TrendingUp, label: 'Sales Increase', value: '250%' },
      { icon: Users, label: 'Monthly Visitors', value: '50K+' },
      { icon: DollarSign, label: 'Revenue Growth', value: '$2.5M' },
    ]
  },
  {
    title: 'AI Voice Support System',
    category: 'AI Automation',
    description: 'Deployed intelligent voice agents for a hospitality chain, handling bookings, inquiries, and customer service across multiple languages.',
    image: 'https://images.unsplash.com/photo-1618758992242-2d4bc63a1be7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMGFydGlmaWNpYWwlMjBpbnRlbGxpZ2VuY2V8ZW58MXx8fHwxNzY0NTYzNDc5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    metrics: [
      { icon: TrendingUp, label: 'Call Handling', value: '95%' },
      { icon: Users, label: 'Calls/Month', value: '25K' },
      { icon: DollarSign, label: 'Cost Savings', value: '60%' },
    ]
  },
  {
    title: 'Digital Marketing Campaign',
    category: 'Marketing & SEO',
    description: 'Comprehensive digital strategy including SEO, Google Ads, and social media marketing for a fintech startup, achieving top rankings.',
    image: 'https://images.unsplash.com/photo-1599658880436-c61792e70672?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwYW5hbHl0aWNzfGVufDF8fHx8MTc2NDUxMjczNXww&ixlib=rb-4.1.0&q=80&w=1080',
    metrics: [
      { icon: TrendingUp, label: 'Organic Traffic', value: '400%' },
      { icon: Users, label: 'Lead Generation', value: '15K' },
      { icon: DollarSign, label: 'ROI', value: '8x' },
    ]
  },
  {
    title: 'Workflow Automation Suite',
    category: 'Integration & Automation',
    description: 'Integrated 15+ business tools and automated repetitive workflows, saving hundreds of hours monthly for a growing agency.',
    image: 'https://images.unsplash.com/photo-1614651462377-4f3fe3e2c262?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwZGlnaXRhbCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY0NjEwMDc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    metrics: [
      { icon: TrendingUp, label: 'Time Saved', value: '500hrs' },
      { icon: Users, label: 'Processes Automated', value: '35' },
      { icon: DollarSign, label: 'Efficiency Gain', value: '75%' },
    ]
  },
  {
    title: 'Social Media Management',
    category: 'Social Media',
    description: 'Full social media strategy and content creation for a fashion brand, building a strong community and driving engagement.',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMG1hcmtldGluZ3xlbnwxfHx8fDE3NjQ1MTg3Njl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    metrics: [
      { icon: TrendingUp, label: 'Follower Growth', value: '300%' },
      { icon: Users, label: 'Engagement Rate', value: '12.5%' },
      { icon: DollarSign, label: 'Sales from Social', value: '$800K' },
    ]
  },
  {
    title: 'Enterprise Web Platform',
    category: 'Web Development',
    description: 'Custom enterprise portal with advanced features, user management, and real-time analytics for a multinational corporation.',
    image: 'https://images.unsplash.com/photo-1603985585179-3d71c35a537c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzY0NTY5NTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    metrics: [
      { icon: TrendingUp, label: 'User Adoption', value: '95%' },
      { icon: Users, label: 'Active Users', value: '100K+' },
      { icon: DollarSign, label: 'Productivity Gain', value: '40%' },
    ]
  },
];

export function Portfolio() {
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
          <h2 className="neon-text mb-4">Our Portfolio</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Real results from real projects. See how we've helped businesses transform their digital presence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="neo-card overflow-hidden hover:neo-elevated transition-all duration-300 group"
            >
              <div className="relative h-64 overflow-hidden neo-pressed">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                <div className="absolute top-4 right-4 neo-button px-4 py-2 rounded-lg">
                  <span className="text-xs text-[#00ff7f]">{project.category}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-[#00ff7f] mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-6">{project.description}</p>

                <div className="grid grid-cols-3 gap-4">
                  {project.metrics.map((metric, idx) => {
                    const Icon = metric.icon;
                    return (
                      <div key={idx} className="text-center">
                        <Icon className="text-[#00ff7f] mx-auto mb-2" size={20} />
                        <div className="neon-text text-xl mb-1">{metric.value}</div>
                        <div className="text-xs text-gray-500">{metric.label}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}