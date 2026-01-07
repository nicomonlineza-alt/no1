import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import logo from 'figma:asset/d7a0dc85dd6f3daeede9c24cae0cf49e68fef886.png';

interface HeroProps {
  onNavigate: (section: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 neo-flat px-6 py-3 rounded-full mb-8">
            <Sparkles className="text-[#00ff7f]" size={20} />
            <span className="text-sm">AI-Powered Digital Solutions</span>
          </div>

          <div className="flex items-center justify-center gap-6 mb-6">
            <motion.img
              src={logo}
              alt="Nicom Online Logo"
              className="h-20 w-auto"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            />
            <h1 className="neon-text">
              Nicom Online
            </h1>
          </div>
          
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-white mb-8"
          >
            Where Your Digital Journey Begins
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto"
          >
            Transform your business with cutting-edge AI automation, digital marketing excellence, 
            and 24/7 intelligent solutions that drive real results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-wrap gap-6 justify-center"
          >
            <button
              onClick={() => onNavigate('services')}
              className="glass-button px-8 py-4 rounded-lg flex items-center gap-3 group"
            >
              <span className="text-lg">Get Started</span>
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </button>

            <button
              onClick={() => onNavigate('contact')}
              className="glass-card px-8 py-4 rounded-lg hover:glass-button transition-all"
            >
              <span className="text-lg">Contact Us</span>
            </button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-[#00ff7f]/50 rounded-full p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1.5 h-1.5 bg-[#00ff7f] rounded-full mx-auto"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}