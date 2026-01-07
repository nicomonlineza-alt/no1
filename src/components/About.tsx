import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Target, Eye, Award, Heart } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import nicholasGauntPhoto from 'figma:asset/81556cd285cddfad8ff5ad26967f58af35f8d18e.png';

const team = [
  {
    name: 'Nicholas Gaunt',
    role: 'CEO & Founder',
    image: nicholasGauntPhoto,
    bio: '15+ years in digital transformation and AI innovation'
  },
  {
    name: 'Michael Chen',
    role: 'CTO',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
    bio: 'AI/ML expert with background in enterprise solutions'
  },
  {
    name: 'Emma Williams',
    role: 'Head of Marketing',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
    bio: 'Data-driven strategist specializing in digital growth'
  },
  {
    name: 'David Martinez',
    role: 'Lead Developer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    bio: 'Full-stack architect passionate about scalable solutions'
  },
  {
    name: 'Olivia Brown',
    role: 'AI Solutions Manager',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    bio: 'Specialist in conversational AI and automation'
  },
  {
    name: 'James Wilson',
    role: 'Client Success Lead',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    bio: 'Dedicated to ensuring exceptional client outcomes'
  },
];

const values = [
  {
    icon: Target,
    title: 'Innovation First',
    description: 'We stay ahead of technology trends to deliver cutting-edge solutions that give our clients a competitive edge.'
  },
  {
    icon: Eye,
    title: 'Transparency',
    description: 'Clear communication and honest advice guide every client relationship we build.'
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We pursue perfection in every project, combining technical expertise with creative problem-solving.'
  },
  {
    icon: Heart,
    title: 'Client-Centric',
    description: 'Your success is our success. We invest in understanding your business and goals deeply.'
  },
];

export function About() {
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
          <h2 className="neon-text mb-4">About Nicom Online</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Pioneering the future of digital business with AI-powered solutions
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="neo-card p-8"
          >
            <Target className="text-[#00ff7f] mb-4" size={40} />
            <h3 className="text-[#00ff7f] mb-4">Our Mission</h3>
            <p className="text-gray-300">
              To empower businesses worldwide with AI-powered digital solutions that work 24/7, 
              driving growth and efficiency without the traditional constraints of time zones or working hours.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="neo-card p-8"
          >
            <Eye className="text-[#00ff7f] mb-4" size={40} />
            <h3 className="text-[#00ff7f] mb-4">Our Vision</h3>
            <p className="text-gray-300">
              A world where every business, regardless of size, has access to intelligent automation 
              that levels the playing field and enables global reach with local precision.
            </p>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-20"
        >
          <h3 className="text-[#00ff7f] text-center mb-12">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="glass-card p-6 rounded-xl hover:neon-glow transition-all duration-300 text-center"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg glass-button mb-4">
                    <Icon className="text-[#00ff7f]" size={28} />
                  </div>
                  <h4 className="text-white mb-3">{value.title}</h4>
                  <p className="text-sm text-gray-400">{value.description}</p>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Team */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-[#00ff7f] text-center mb-12">Meet Our Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="glass-card rounded-2xl overflow-hidden group hover:neon-glow transition-all duration-300"
              >
                <div className="relative h-72 overflow-hidden">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80" />
                </div>
                <div className="p-6 -mt-20 relative z-10">
                  <h4 className="text-white mb-1">{member.name}</h4>
                  <p className="text-[#00ff7f] text-sm mb-3">{member.role}</p>
                  <p className="text-sm text-gray-400">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="glass-card p-12 rounded-2xl mt-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl neon-text mb-2">500+</div>
              <p className="text-gray-400">Projects Completed</p>
            </div>
            <div>
              <div className="text-4xl neon-text mb-2">200+</div>
              <p className="text-gray-400">Happy Clients</p>
            </div>
            <div>
              <div className="text-4xl neon-text mb-2">50+</div>
              <p className="text-gray-400">Team Members</p>
            </div>
            <div>
              <div className="text-4xl neon-text mb-2">24/7</div>
              <p className="text-gray-400">AI Support</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}