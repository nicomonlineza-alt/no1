import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { 
  Globe, 
  ShoppingCart, 
  Share2, 
  Target, 
  Search, 
  FileText, 
  Bot, 
  Headphones,
  Mic,
  Workflow,
  Mail,
  MessageSquare
} from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Web Design & Development',
    description: 'Custom, responsive websites that captivate and convert. From stunning landing pages to complex web applications.',
    features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Modern UI/UX']
  },
  {
    icon: ShoppingCart,
    title: 'eCommerce Solutions',
    description: '24/7 global sales platforms with AI-powered product recommendations and automated inventory management.',
    features: ['Payment Integration', 'Shopping Cart', 'Product Management', 'Order Tracking']
  },
  {
    icon: Share2,
    title: 'Social Media Marketing',
    description: 'Strategic campaigns that build brand awareness and drive engagement across all major platforms.',
    features: ['Content Strategy', 'Community Management', 'Analytics', 'Influencer Outreach']
  },
  {
    icon: Target,
    title: 'Google Ads Management',
    description: 'Data-driven PPC campaigns optimized for maximum ROI and qualified lead generation.',
    features: ['Campaign Setup', 'A/B Testing', 'Budget Optimization', 'Performance Reports']
  },
  {
    icon: Search,
    title: 'SEO Services',
    description: 'Comprehensive search engine optimization to boost your visibility and organic traffic.',
    features: ['Keyword Research', 'On-Page SEO', 'Link Building', 'Technical SEO']
  },
  {
    icon: FileText,
    title: 'Content Creation',
    description: 'Compelling content that tells your story and resonates with your target audience.',
    features: ['Blog Writing', 'Copywriting', 'Video Scripts', 'Email Content']
  },
  {
    icon: Bot,
    title: 'AI Sales Agents',
    description: 'Intelligent 24/7 sales automation that qualifies leads and closes deals while you sleep.',
    features: ['Lead Qualification', 'Product Recommendations', 'Deal Closing', 'CRM Integration']
  },
  {
    icon: Headphones,
    title: 'AI Support Agents',
    description: 'Round-the-clock customer support with instant responses and human-like interactions.',
    features: ['Instant Responses', 'Multi-Language', 'Ticket Management', 'Knowledge Base']
  },
  {
    icon: Mic,
    title: 'AI Voice Agents',
    description: 'Natural voice interactions for phone support, bookings, and customer inquiries.',
    features: ['Natural Speech', 'Call Routing', 'Appointment Booking', 'Voice Analytics']
  },
  {
    icon: Workflow,
    title: 'Workflow Integration',
    description: 'Seamlessly connect your tools and automate repetitive tasks to boost productivity.',
    features: ['API Integration', 'Process Automation', 'Data Sync', 'Custom Workflows']
  },
  {
    icon: Mail,
    title: 'Email Marketing',
    description: 'Targeted email campaigns with AI-powered personalization and timing optimization.',
    features: ['Campaign Design', 'A/B Testing', 'Segmentation', 'Analytics Dashboard']
  },
  {
    icon: MessageSquare,
    title: 'SMS Marketing',
    description: 'Direct, high-conversion messaging campaigns that reach customers instantly.',
    features: ['Bulk SMS', 'Scheduling', 'Two-Way Messaging', 'Delivery Reports']
  },
];

export function Services() {
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
          <h2 className="neon-text mb-4">Our Services</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive digital solutions powered by cutting-edge AI technology to transform your business
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="neo-card p-8 hover:neo-elevated transition-all duration-300 group cursor-pointer"
              >
                <div className="neo-flat w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:neon-glow transition-all">
                  <Icon className="text-[#00ff7f]" size={32} />
                </div>

                <h3 className="text-[#00ff7f] mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>

                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#00ff7f]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="glass-card p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-[#00ff7f] mb-4">Why Choose AI Automation?</h3>
            <p className="text-gray-300 mb-6">
              Our AI-powered solutions work 24/7 to grow your business globally. While you focus on strategy, 
              our intelligent agents handle sales, support, and customer engagement across all time zones.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div>
                <div className="text-3xl neon-text mb-2">24/7</div>
                <p className="text-sm text-gray-400">Global Availability</p>
              </div>
              <div>
                <div className="text-3xl neon-text mb-2">10x</div>
                <p className="text-sm text-gray-400">Faster Response Times</p>
              </div>
              <div>
                <div className="text-3xl neon-text mb-2">100%</div>
                <p className="text-sm text-gray-400">Consistent Quality</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}