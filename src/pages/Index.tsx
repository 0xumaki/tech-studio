import { useEffect, useState } from 'react';
import { ParticleSystem } from '@/components/ParticleSystem';
import { Hero } from '@/components/Hero';
import { ServicesSection } from '@/components/ServicesSection';
import { AboutSection } from '@/components/AboutSection';
import { TechStackSection } from '@/components/TechStackSection';
import { ProjectShowcase } from '@/components/ProjectShowcase';
import { TestimonialSection } from '@/components/TestimonialSection';
import { ContactSection } from '@/components/ContactSection';
import { Navigation } from '@/components/Navigation';
import { Card3D } from '@/components/Card3D';
import { Footer } from '@/components/Footer';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements = document.querySelectorAll('.scroll-animate');
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-yellow-50 relative overflow-x-hidden">
      {/* Manga sketch background pattern */}
      <div className="fixed inset-0 japanese-pattern z-0" />
      <ParticleSystem />
      <Navigation />
      
      {/* Parallax Background Elements */}
      <div 
        className="fixed inset-0 japanese-pattern opacity-10 pointer-events-none"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      />
      
      <div 
        className="fixed top-20 right-10 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-20 blur-xl"
        style={{
          transform: `translateY(${scrollY * 0.2}px) rotate(${scrollY * 0.1}deg)`,
        }}
      />
      
      <div 
        className="fixed bottom-20 left-10 w-24 h-24 bg-gradient-to-br from-yellow-400 to-purple-400 rounded-full opacity-20 blur-xl"
        style={{
          transform: `translateY(${scrollY * -0.15}px) rotate(${scrollY * -0.1}deg)`,
        }}
      />

      <main className="relative z-10">
        <Hero />
        <AboutSection />
        <ServicesSection />
        <TechStackSection />
        <ProjectShowcase />
        <TestimonialSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
