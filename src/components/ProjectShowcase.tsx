import { Card3D } from './Card3D';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    image: '/manymarkup.png',
    title: 'ManyMarkup Tokenization Platform',
    description: 'A next-gen tokenization platform that syndicate all suppliers from the Nation and Region into one platform and to aggregate the demand from importers and re-exporters around the globe. ',
    tags: ['Tokenization', 'React', 'Web3', 'SaaS'],
    link: '#'
  },
  {
    image: '/asn_swap.png',
    title: 'ASEAN Swap',
    description: 'A cross-chain multi-currency money market platform that allows ASEAN+ countries to borrow, lend, and swap currencies across different chains.',
    tags: ['CeDeFi', 'Blockchain', 'TypeScript', 'Swap'],
    link: '#'
  },
  {
    image: '/BroRUs.png',
    title: 'BroRUs',
    description: 'Cross-chain multi-stablecoin, multi-currency CeDeFai wallet powered by ElizaOS for auto-market making and deep liquidity accumulation.',
    tags: ['DeFi', 'CeDeFi', 'Smart Contracts', 'Blockchain', 'Web3'],
    link: '#'
  },
  {
    image: '/ai_wf.png',
    title: 'Product Photoshoot AI',
    description: 'Custom-built AI workflow for AI specializing in fashion and product photoshoots.',
    tags: ['AI', 'Workflow', 'SaaS'],
    link: '#'
  }
];

// Sakura Petal SVG for accent
const SakuraPetal = () => (
  <svg className="absolute animate-sakura -top-4 -right-4 w-8 h-8 opacity-20 pointer-events-none" viewBox="0 0 32 32" fill="none"><path d="M16 2C18.5 8 24 10 30 10C28 16 22 18 16 30C10 18 4 16 2 10C8 10 13.5 8 16 2Z" fill="url(#petalGradient)"/><defs><linearGradient id="petalGradient" x1="16" y1="2" x2="16" y2="30" gradientUnits="userSpaceOnUse"><stop stopColor="#f9a8d4"/><stop offset="1" stopColor="#c084fc"/></linearGradient></defs></svg>
);

export const ProjectShowcase = () => (
  <section id="projects" className="py-32 relative bg-gradient-to-b from-white via-yellow-50/40 to-pink-50/60 overflow-hidden">
    {/* Decorative Top Divider */}
    <div className="w-full flex justify-center mb-12">
      <div className="h-2 w-48 bg-gradient-to-r from-yellow-200 via-pink-300 to-purple-300 rounded-full blur-sm" />
    </div>
    {/* Floating Sakura Petals Background */}
    <div className="absolute inset-0 pointer-events-none z-0">
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute w-6 h-6 bg-gradient-to-br from-pink-200 to-pink-400 rounded-full animate-sakura opacity-30"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${i * 2}s`,
            animationDuration: `${10 + Math.random() * 6}s`,
          }}
        />
      ))}
    </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      {/* Section Header */}
      <div className="text-center mb-20 scroll-animate">
        <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-100 to-pink-100 px-6 py-3 rounded-full mb-8 shadow-md">
          <span className="text-yellow-600 font-medium tracking-wide">Our Work</span>
        </div>
        <h2 className="text-5xl md:text-6xl font-extrabold font-playfair mb-8 bg-gradient-to-r from-yellow-600 via-pink-600 to-purple-700 bg-clip-text text-transparent drop-shadow-lg">
          Project Showcase
          <span className="text-2xl block mt-4 text-gray-600 font-normal bg-white/60 rounded-full px-4 py-1 inline-block shadow-sm">実績紹介</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          A glimpse into some of the digital products and platforms we've crafted for our clients.
        </p>
        <div className="w-32 h-1 bg-gradient-to-r from-yellow-600 via-pink-600 to-purple-600 mx-auto rounded-full mt-8" />
      </div>
      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
        {projects.map((project, idx) => (
          <Card3D
            key={idx}
            className="scroll-animate h-full border-2 border-white/30 group hover:border-yellow-400 hover:shadow-2xl transition-all duration-500 relative rounded-3xl glass backdrop-blur-md shadow-xl"
            glowEffect
          >
            {/* Sakura Petal Accent */}
            <SakuraPetal />
            <a href={project.link} className="block h-full group focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded-3xl">
              <div className="relative rounded-3xl overflow-hidden mb-6 shadow-lg group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover rounded-2xl border-2 border-white/40 group-hover:scale-105 transition-transform duration-500"
                />
                {/* Gradient Overlay & View Project Button */}
                <div className="absolute inset-0 bg-gradient-to-t from-yellow-600/80 via-pink-400/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end items-center">
                  {/* <button className="mb-6 px-6 py-3 bg-gradient-to-r from-yellow-400 to-pink-500 text-white rounded-full font-semibold flex items-center gap-2 shadow-lg hover:scale-105 hover:from-pink-500 hover:to-yellow-400 transition-all duration-300 animate-glow translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 focus:opacity-100 focus:translate-y-0">
                    View Project <ArrowRight className="w-5 h-5" />
                  </button> */}
                </div>
                <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-pink-400 text-white text-xs px-3 py-1 rounded-full shadow font-semibold">
                  {project.tags[0]}
                </div>
              </div>
              <div className="px-2 pb-4">
                <h3 className="text-3xl font-extrabold text-gray-800 mb-2 font-playfair group-hover:text-yellow-600 transition-colors duration-300 drop-shadow-sm">
                  {project.title}
                </h3>
                <p className="text-gray-700 mb-4 text-lg leading-relaxed opacity-80 group-hover:opacity-100 group-hover:animate-slide-up transition-all duration-500">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-gradient-to-r from-yellow-100 to-pink-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-semibold shadow-sm flex items-center gap-1 border border-yellow-200/60"
                    >
                      {/* Optionally add tag icons here */}
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          </Card3D>
        ))}
      </div>
    </div>
    {/* Decorative Bottom Divider */}
    <div className="w-full flex justify-center mt-16">
      <div className="h-2 w-48 bg-gradient-to-r from-purple-300 via-pink-300 to-yellow-200 rounded-full blur-sm" />
    </div>
  </section>
); 