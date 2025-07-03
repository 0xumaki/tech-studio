import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Tech Stack', href: '#tech-stack' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 manga-panel ${scrolled ? 'shadow-xl' : ''}`}
      style={{ background: 'white', borderRadius: '0 0 2rem 2rem' }}>
      <div className="absolute inset-0 manga-halftone" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center relative">
            {/* Manga burst accent */}
            <div className="absolute -left-6 -top-4 w-20 h-20 manga-burst" />
            <div className="manga-speech font-manga text-2xl text-purple-700 font-bold drop-shadow-lg">
              桜<span className="text-yellow-500">Tech Studio</span>
            </div>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="font-manga text-gray-700 hover:text-purple-700 px-3 py-2 text-lg font-bold transition-colors duration-300 relative group manga-pop"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-700 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
          </div>
          {/* Mobile menu button */}
          {/* <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-purple-700 p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div> */}
        </div>
      </div>
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden manga-panel manga-halftone">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="font-manga text-gray-700 hover:text-purple-700 block px-3 py-2 text-lg font-bold transition-colors duration-300 manga-pop"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
