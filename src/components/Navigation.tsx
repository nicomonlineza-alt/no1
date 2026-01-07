import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import logo from 'figma:asset/d7a0dc85dd6f3daeede9c24cae0cf49e68fef886.png';

interface NavigationProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export function Navigation({ activeSection, onNavigate }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'about', label: 'About' },
    { id: 'blog', label: 'Blog' },
    { id: 'faq', label: 'FAQ' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 right-6 z-50 lg:hidden glass-card p-3 rounded-lg hover:neon-glow transition-all"
        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Side Navigation */}
      <nav
        className={`fixed left-0 top-0 h-full transition-transform duration-300 z-40 lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="neo-elevated h-full w-64 p-8 flex flex-col">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-2">
              <img src={logo} alt="Nicom Online Logo" className="h-10 w-auto" />
              <h3 className="neon-text">Nicom Online</h3>
            </div>
            <p className="text-sm text-gray-400">Digital Journey Begins</p>
          </div>

          <ul className="space-y-4 flex-1">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => {
                    onNavigate(item.id);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                    activeSection === item.id
                      ? 'glass-button neon-glow'
                      : 'hover:glass-button hover:translate-x-2'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-auto pt-6 border-t border-gray-700">
            <p className="text-xs text-gray-500">
              © 2024 Nicom Online
            </p>
          </div>
        </div>
      </nav>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}