import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Jennifer Adams',
    role: 'CEO, TechStart Solutions',
    company: 'TechStart',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
    rating: 5,
    quote: 'Nicom Online transformed our digital presence completely. Their AI sales agents have increased our conversion rate by 300% while providing 24/7 coverage. The ROI has been phenomenal.',
    logo: 'TS'
  },
  {
    name: 'Marcus Thompson',
    role: 'Marketing Director, EcoLife',
    company: 'EcoLife',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop',
    rating: 5,
    quote: 'The team\'s expertise in SEO and Google Ads is unmatched. We went from page 5 to ranking #1 for our top keywords in just 4 months. Our organic traffic has quadrupled.',
    logo: 'EL'
  },
  {
    name: 'Sarah Mitchell',
    role: 'Founder, Boutique & Co',
    company: 'Boutique & Co',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
    rating: 5,
    quote: 'Our new eCommerce platform is a game-changer. The design is stunning and the AI recommendations engine has significantly increased our average order value. Best investment we\'ve made.',
    logo: 'BC'
  },
  {
    name: 'David Chen',
    role: 'Operations Manager, GlobalServe',
    company: 'GlobalServe',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
    rating: 5,
    quote: 'The workflow automation they implemented saved us over 500 hours per month. The AI voice agents handle our customer support flawlessly, freeing our team to focus on complex issues.',
    logo: 'GS'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Brand Manager, LuxuryLiving',
    company: 'LuxuryLiving',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop',
    rating: 5,
    quote: 'Their social media marketing strategy elevated our brand presence dramatically. Engagement is up 400% and we\'ve built an authentic community of 100K+ followers.',
    logo: 'LL'
  },
  {
    name: 'Robert Johnson',
    role: 'Director, HealthPlus Clinic',
    company: 'HealthPlus',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop',
    rating: 5,
    quote: 'The AI booking system integrated perfectly with our clinic management software. Patients love the 24/7 availability and we\'ve reduced no-shows by 60%. Exceptional service.',
    logo: 'HP'
  }
];

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section ref={ref} className="min-h-screen py-24 px-4 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="neon-text mb-4">Client Testimonials</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Hear what our clients say about working with us
          </p>
        </motion.div>

        {/* Main Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative max-w-5xl mx-auto mb-16"
        >
          <div className="neo-card p-8 md:p-12 rounded-2xl">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Testimonial Image */}
              <div className="flex-shrink-0">
                <div className="relative w-32 h-32 mx-auto md:mx-0">
                  <div className="neo-flat w-full h-full rounded-2xl overflow-hidden">
                    <img
                      src={currentTestimonial.image}
                      alt={currentTestimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -top-3 -left-3 neo-button w-12 h-12 rounded-full flex items-center justify-center">
                    <Quote className="text-[#00ff7f]" size={20} />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-20 h-20 rounded-full overflow-hidden ring-2 ring-[#00ff7f]/50">
                    <img
                      src={currentTestimonial.image}
                      alt={currentTestimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="text-white">{currentTestimonial.name}</h4>
                      <div className="w-12 h-12 rounded-lg glass-button flex items-center justify-center">
                        <span className="text-[#00ff7f] text-xs">
                          {currentTestimonial.logo}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm">{currentTestimonial.role}</p>
                    <p className="text-[#00ff7f] text-sm">{currentTestimonial.company}</p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="fill-[#00ff7f] text-[#00ff7f]" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-xl text-gray-300 leading-relaxed italic">
                  "{currentTestimonial.quote}"
                </p>
              </div>

              {/* Navigation Arrows */}
              <div className="flex gap-4 justify-center mt-12">
                <button
                  onClick={prevTestimonial}
                  className="glass-button p-3 rounded-full hover:pulse-glow transition-all"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="glass-button p-3 rounded-full hover:pulse-glow transition-all"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>

            {/* Dots Navigation */}
            <div className="flex gap-2 justify-center mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-[#00ff7f] w-8 pulse-glow'
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Testimonial Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-[#00ff7f] text-center mb-8">All Reviews</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="glass-card p-6 rounded-xl hover:neon-glow transition-all duration-300 cursor-pointer"
                onClick={() => goToTestimonial(index)}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-[#00ff7f]/30">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h5 className="text-white text-sm truncate">{testimonial.name}</h5>
                    <p className="text-xs text-gray-500 truncate">{testimonial.company}</p>
                  </div>
                  <div className="w-10 h-10 rounded-lg glass-button flex items-center justify-center flex-shrink-0">
                    <span className="text-[#00ff7f] text-xs">{testimonial.logo}</span>
                  </div>
                </div>

                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={14} className="fill-[#00ff7f] text-[#00ff7f]" />
                  ))}
                </div>

                <p className="text-sm text-gray-400 line-clamp-3">
                  "{testimonial.quote}"
                </p>
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
              <div className="text-4xl neon-text mb-2">98%</div>
              <p className="text-gray-400">Client Satisfaction</p>
            </div>
            <div>
              <div className="text-4xl neon-text mb-2">4.9/5</div>
              <p className="text-gray-400">Average Rating</p>
            </div>
            <div>
              <div className="text-4xl neon-text mb-2">200+</div>
              <p className="text-gray-400">Happy Clients</p>
            </div>
            <div>
              <div className="text-4xl neon-text mb-2">95%</div>
              <p className="text-gray-400">Repeat Business</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}