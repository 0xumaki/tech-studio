import { useEffect, useState } from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';

export const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Background with Depth */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `
            radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(122, 0, 124, 0.4) 0%, transparent 50%),
            linear-gradient(135deg, rgba(255, 227, 232, 0.1) 0%, rgba(254, 215, 0, 0.1) 50%, rgba(179, 106, 178, 0.1) 100%)
          `,
          transform: `translateY(${scrollY * 0.1}px)`,
        }}
      />
      
      {/* Geometric Elements with Animation */}
      <div className="absolute top-20 left-10 w-32 h-32 border-4 border-purple-300/40 rounded-full animate-float opacity-60" />
      <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full animate-float opacity-70" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-40 left-20 w-20 h-20 bg-gradient-to-r from-pink-300 to-pink-400 rounded-full animate-float opacity-60" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 right-10 w-16 h-16 border-4 border-yellow-400/50 rotate-45 animate-float" style={{ animationDelay: '0.5s' }} />
      
      {/* Main Content with Enhanced Typography */}
      <div className="text-center z-10 max-w-5xl mx-auto px-4">
        <div className="animate-slide-up">
          {/* Japanese Character with Enhanced Styling */}
          <div className="mb-8 relative">
            <div className="text-8xl md:text-9xl font-playfair text-transparent bg-gradient-to-r from-purple-700 via-pink-500 to-yellow-500 bg-clip-text drop-shadow-lg">
              桜
            </div>
            <div className="absolute -top-2 -right-2 text-yellow-400">
              <Sparkles size={24} className="animate-pulse" />
            </div>
          </div>
          
          {/* Company Name with Refined Typography */}
          <h1 className="text-5xl md:text-7xl font-bold font-playfair mb-6 bg-gradient-to-r from-purple-700 via-pink-500 to-yellow-500 bg-clip-text text-transparent leading-tight">
            Tech Studio
          </h1>

          {/* Tagline with Better Spacing */}
          <p className="text-xl md:text-2xl text-gray-700 mb-4 max-w-3xl mx-auto leading-relaxed font-medium">
            We're developing
          </p>
          
          {/* Tagline with Better Spacing */}
          <p className="text-xl md:text-2xl text-gray-700 mb-4 max-w-3xl mx-auto leading-relaxed font-medium">
            Websites, iOS Apps, Android Apps, AIs, Blockchains, Smart Contracts, NFTs for you
          </p>
          
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto opacity-90">
            Our expertise turns your dreams into a money-making machine
          </p>
          
          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              onClick={() => scrollToSection('services')}
              className="group px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-glow relative overflow-hidden"
            >
              <span className="relative z-10">Explore Our Services</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="px-10 py-4 border-2 border-purple-600 text-purple-600 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300 backdrop-blur-sm bg-white/10"
            >
              Our Philosophy
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 inset-x-0 mx-auto flex flex-col items-center animate-bounce w-fit">
        <span className="text-sm text-purple-600 mb-2 font-medium">Scroll to Explore</span>
        <ArrowDown className="text-purple-600" size={32} />
      </div>

      {/* Enhanced Sakura Petals */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-4 h-4 bg-gradient-to-br from-pink-300 to-pink-400 rounded-full animate-sakura opacity-70 shadow-sm"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 1.5}s`,
              animationDuration: `${10 + Math.random() * 6}s`,
            }}
          />
        ))}
      </div>
    </section>
  );
};
