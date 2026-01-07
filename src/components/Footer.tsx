import { Linkedin, Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import logo from 'figma:asset/d7a0dc85dd6f3daeede9c24cae0cf49e68fef886.png';

interface FooterProps {
  onNavigate: (section: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const quickLinks = [
    { label: 'Home', section: 'home' },
    { label: 'Services', section: 'services' },
    { label: 'Portfolio', section: 'portfolio' },
    { label: 'About', section: 'about' },
  ];

  const services = [
    'Web Design',
    'AI Agents',
    'Digital Marketing',
    'SEO Services',
  ];

  const resources = [
    { label: 'Blog', section: 'blog' },
    { label: 'FAQ', section: 'faq' },
    { label: 'Testimonials', section: 'testimonials' },
    { label: 'Contact', section: 'contact' },
  ];

  return (
    <footer className="glass-card mt-24 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Nicom Online Logo" className="h-8 w-auto" />
              <h3 className="neon-text text-2xl">Nicom Online</h3>
            </div>
            <p className="text-gray-400 mb-6">
              Where Your Digital Journey Begins. AI-powered solutions for modern businesses.
            </p>
            <div className="flex gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg glass-button flex items-center justify-center hover:pulse-glow transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="text-[#00ff7f]" size={18} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg glass-button flex items-center justify-center hover:pulse-glow transition-all"
                aria-label="Facebook"
              >
                <Facebook className="text-[#00ff7f]" size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg glass-button flex items-center justify-center hover:pulse-glow transition-all"
                aria-label="Instagram"
              >
                <Instagram className="text-[#00ff7f]" size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#00ff7f] mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.section}>
                  <button
                    onClick={() => onNavigate(link.section)}
                    className="text-gray-400 hover:text-[#00ff7f] transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[#00ff7f] mb-4">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <button
                    onClick={() => onNavigate('services')}
                    className="text-gray-400 hover:text-[#00ff7f] transition-colors"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-[#00ff7f] mb-4">Contact Us</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-2">
                <Phone size={18} className="text-[#00ff7f] mt-1 flex-shrink-0" />
                <a href="tel:+27626616896" className="hover:text-[#00ff7f] transition-colors">
                  +27 62 661 6896
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={18} className="text-[#00ff7f] mt-1 flex-shrink-0" />
                <a href="mailto:info@nicomonline.co.za" className="hover:text-[#00ff7f] transition-colors break-all">
                  info@nicomonline.co.za
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={18} className="text-[#00ff7f] mt-1 flex-shrink-0" />
                <span>10 Union Street, Gardens, Cape Town</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Nicom Online. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              {resources.map((resource) => (
                <button
                  key={resource.section}
                  onClick={() => onNavigate(resource.section)}
                  className="text-sm text-gray-500 hover:text-[#00ff7f] transition-colors"
                >
                  {resource.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}