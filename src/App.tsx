import { useState, useEffect, useRef } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { About } from './components/About';
import { Blog } from './components/Blog';
import { FAQ } from './components/FAQ';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { VoiceControl } from './components/VoiceControl';
import { Toaster } from './components/ui/sonner';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({});

  const sections = [
    { id: 'home', component: Hero },
    { id: 'services', component: Services },
    { id: 'portfolio', component: Portfolio },
    { id: 'about', component: About },
    { id: 'blog', component: Blog },
    { id: 'faq', component: FAQ },
    { id: 'testimonials', component: Testimonials },
    { id: 'contact', component: Contact },
  ];

  const handleNavigate = (sectionId: string) => {
    const element = sectionsRef.current[sectionId];
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(sectionId);
    }
  };

  // Update active section based on scroll position
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: [0.5],
        rootMargin: '-100px 0px -100px 0px',
      }
    );

    Object.values(sectionsRef.current).forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      Object.values(sectionsRef.current).forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <Navigation activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Main Content */}
      <main className="lg:ml-64">
        {sections.map(({ id, component: Component }) => (
          <div
            key={id}
            id={id}
            ref={(el) => {
              sectionsRef.current[id] = el;
            }}
          >
            {id === 'home' ? (
              <Component onNavigate={handleNavigate} />
            ) : (
              <Component />
            )}
          </div>
        ))}

        {/* Footer */}
        <Footer onNavigate={handleNavigate} />
      </main>

      {/* Background Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00ff7f]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00ff7f]/3 rounded-full blur-3xl" />
      </div>

      {/* Voice Control and Toaster */}
      <VoiceControl onNavigate={handleNavigate} />
      <Toaster />
    </div>
  );
}