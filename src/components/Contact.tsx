import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Linkedin, Facebook, Instagram } from 'lucide-react';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section ref={ref} className="min-h-screen py-24 px-4 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="neon-text mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to transform your digital presence? Let's discuss how we can help your business grow
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="neo-card p-8 md:p-12 rounded-2xl">
              <h3 className="text-[#00ff7f] mb-8">Send Us a Message</h3>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm text-gray-400 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full neo-input px-4 py-3 text-white"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full neo-input px-4 py-3 text-white"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-sm text-gray-400 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full neo-input px-4 py-3 text-white"
                    placeholder="+27 12 345 6789"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm text-gray-400 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full neo-input px-4 py-3 text-white"
                    placeholder="Your Company"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="service" className="block text-sm text-gray-400 mb-2">
                  Service Interested In
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full neo-input px-4 py-3 text-white"
                >
                  <option value="">Select a service</option>
                  <option value="web-design">Web Design & Development</option>
                  <option value="ecommerce">eCommerce Solutions</option>
                  <option value="social-media">Social Media Marketing</option>
                  <option value="google-ads">Google Ads Management</option>
                  <option value="seo">SEO Services</option>
                  <option value="content">Content Creation</option>
                  <option value="ai-sales">AI Sales Agents</option>
                  <option value="ai-support">AI Support Agents</option>
                  <option value="ai-voice">AI Voice Agents</option>
                  <option value="workflow">Workflow Integration</option>
                  <option value="email">Email Marketing</option>
                  <option value="sms">SMS Marketing</option>
                </select>
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="block text-sm text-gray-400 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full neo-input px-4 py-3 text-white resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="neo-button w-full md:w-auto px-8 py-4 text-[#00ff7f] flex items-center justify-center gap-3 hover:neon-glow"
              >
                <span>Send Message</span>
                <Send size={20} />
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Contact Details */}
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-[#00ff7f] mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg glass-button flex items-center justify-center flex-shrink-0">
                    <Phone className="text-[#00ff7f]" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Phone</p>
                    <a href="tel:+27626616896" className="text-white hover:text-[#00ff7f] transition-colors">
                      +27 62 661 6896
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg glass-button flex items-center justify-center flex-shrink-0">
                    <Mail className="text-[#00ff7f]" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Email</p>
                    <a href="mailto:info@nicomonline.co.za" className="text-white hover:text-[#00ff7f] transition-colors">
                      info@nicomonline.co.za
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg glass-button flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-[#00ff7f]" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Address</p>
                    <p className="text-white">
                      10 Union Street<br />
                      Gardens, Cape Town<br />
                      South Africa
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg glass-button flex items-center justify-center flex-shrink-0">
                    <Clock className="text-[#00ff7f]" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Business Hours</p>
                    <p className="text-white">
                      Monday - Friday<br />
                      8:00 AM - 6:00 PM SAST
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-card p-8 rounded-2xl">
              <h4 className="text-[#00ff7f] mb-6">Follow Us</h4>
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg glass-button flex items-center justify-center hover:pulse-glow transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="text-[#00ff7f]" size={20} />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg glass-button flex items-center justify-center hover:pulse-glow transition-all"
                  aria-label="Facebook"
                >
                  <Facebook className="text-[#00ff7f]" size={20} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg glass-button flex items-center justify-center hover:pulse-glow transition-all"
                  aria-label="Instagram"
                >
                  <Instagram className="text-[#00ff7f]" size={20} />
                </a>
              </div>
            </div>

            {/* Quick Response Note */}
            <div className="glass-card p-8 rounded-2xl">
              <h4 className="text-[#00ff7f] mb-4">Quick Response</h4>
              <p className="text-gray-400 text-sm">
                We typically respond to all inquiries within 24 hours during business days. 
                For urgent matters, please call us directly.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Map or Additional CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="glass-card p-12 rounded-2xl mt-12 text-center"
        >
          <h3 className="text-[#00ff7f] mb-4">Visit Our Office</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Located in the heart of Cape Town's Gardens, we're easily accessible and always happy 
            to meet in person. Schedule a visit to discuss your project over coffee.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://www.google.com/maps/search/10+Union+Street,+Gardens,+Cape+Town"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-button px-8 py-4 rounded-lg inline-flex items-center gap-2"
            >
              <MapPin size={18} />
              <span>View on Google Maps</span>
            </a>
            <button className="glass-card px-8 py-4 rounded-lg hover:glass-button transition-all">
              Schedule a Visit
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}