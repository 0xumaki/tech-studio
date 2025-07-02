import { Card3D } from './Card3D';
import { Brain, Layers, Smartphone, Globe, ArrowRight, Zap } from 'lucide-react';

// Sakura Petal SVG for accent
const SakuraPetal = () => (
  <svg className="absolute animate-sakura -top-6 -right-6 w-10 h-10 opacity-30 pointer-events-none" viewBox="0 0 32 32" fill="none"><path d="M16 2C18.5 8 24 10 30 10C28 16 22 18 16 30C10 18 4 16 2 10C8 10 13.5 8 16 2Z" fill="url(#petalGradient)"/><defs><linearGradient id="petalGradient" x1="16" y1="2" x2="16" y2="30" gradientUnits="userSpaceOnUse"><stop stopColor="#f9a8d4"/><stop offset="1" stopColor="#c084fc"/></linearGradient></defs></svg>
);

export const ServicesSection = () => {
  const services = [
    {
      icon: <Brain className="w-8 h-8 text-white" />,
      title: "AI Services",
      subtitle: "人工知能サービス",
      description: "Advanced AI solutions from neural networks to intelligent automation systems.",
      details: [
        "Custom LLM development",
        "Custom MCP server development",
        "Full-Stack AI automation SaaS development",
        "Custom AI agent & agent swarm development"
      ],
      gradient: "from-purple-600 via-purple-700 to-pink-600",
      bgGradient: "from-purple-50 to-pink-50",
      iconBg: "from-purple-500 to-purple-600"
    },
    {
      icon: <Layers className="w-8 h-8 text-white" />,
      title: "Blockchain Development",
      subtitle: "ブロックチェーン開発",
      description: "Complete blockchain ecosystem development from smart contracts to DeFi protocols.",
      details: [
        "Smart contracts development",
        "Stablecoin & cryptocurrency development",
        "NFT platforms & marketplace solutions",
        "DeFi protocols & tokenomics design"
      ],
      gradient: "from-yellow-500 via-yellow-600 to-orange-500",
      bgGradient: "from-yellow-50 to-orange-50",
      iconBg: "from-yellow-500 to-yellow-600"
    },
    {
      icon: <Globe className="w-8 h-8 text-white" />,
      title: "Blockchain Infrastructure",
      subtitle: "チェーンインフラ",
      description: "Enterprise-grade blockchain infrastructure for scalable decentralized systems.",
      details: [
        "Private & permissioned networks",
        "Public blockchain architectures",
        "Hybrid blockchain solutions",
        "Consensus mechanism optimization"
      ],
      gradient: "from-green-500 via-green-600 to-teal-500",
      bgGradient: "from-green-50 to-teal-50",
      iconBg: "from-green-500 to-green-600"
    },
    {
      icon: <Smartphone className="w-8 h-8 text-white" />,
      title: "Application Development",
      subtitle: "アプリケーション開発",
      description: "Full-stack development across web and mobile platforms with modern frameworks.",
      details: [
        "React, Next.js & TypeScript web apps",
        "iOS app development",
        "Android apps development",
        "Cross-platform app development"
      ],
      gradient: "from-blue-500 via-blue-600 to-purple-500",
      bgGradient: "from-blue-50 to-purple-50",
      iconBg: "from-blue-500 to-blue-600"
    }
  ];

  return (
    <section id="services" className="py-32 relative bg-gradient-to-b from-white via-gray-50/50 to-white overflow-hidden">
      {/* Decorative Top Divider */}
      <div className="w-full flex justify-center mb-12">
        <div className="h-2 w-48 bg-gradient-to-r from-pink-300 via-purple-300 to-yellow-200 rounded-full blur-sm" />
      </div>
      {/* Background Elements */}
      <div className="absolute inset-0 japanese-pattern opacity-5 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20 scroll-animate">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-pink-100 px-6 py-3 rounded-full mb-8 shadow-md">
            <Zap className="w-5 h-5 text-purple-600 animate-float" />
            <span className="text-purple-600 font-medium tracking-wide">Our Expertise</span>
          </div>
          <h2 className="text-6xl font-extrabold font-playfair mb-8 bg-gradient-to-r from-purple-700 via-pink-600 to-yellow-600 bg-clip-text text-transparent drop-shadow-lg">
            Services We Provide
            <span className="text-2xl block mt-4 text-gray-600 font-normal bg-white/60 rounded-full px-4 py-1 inline-block shadow-sm">私たちのサービス</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Bridging the gap between traditional craftsmanship and cutting-edge technology
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-600 via-pink-600 to-yellow-600 mx-auto rounded-full mt-8" />
        </div>
        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <Card3D key={index} className="scroll-animate h-full" glowEffect>
              <div className={`relative h-full rounded-3xl p-10 border-2 border-white/40 bg-gradient-to-br ${service.bgGradient} backdrop-blur-md hover:border-white/70 shadow-2xl transition-all duration-500 group overflow-hidden`}> 
                {/* Sakura Petal Accent */}
                <SakuraPetal />
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl transform translate-x-8 -translate-y-8" />
                <div className="relative z-10">
                  {/* Service Header */}
                  <div className="flex items-start justify-between mb-8">
                    <div className="flex items-center space-x-4">
                      <div className={`p-5 rounded-2xl bg-gradient-to-r ${service.iconBg} shadow-xl group-hover:scale-110 group-hover:shadow-2xl transition-transform duration-300 animate-float`}> 
                        {service.icon}
                      </div>
                      <div>
                        <h3 className="text-3xl font-extrabold text-gray-800 mb-1 font-playfair tracking-tight drop-shadow-sm">{service.title}</h3>
                        <p className="text-base text-white bg-gradient-to-r from-purple-400 to-pink-400 px-3 py-1 rounded-full font-medium shadow-sm inline-block mt-1">{service.subtitle}</p>
                      </div>
                    </div>
                    <ArrowRight className="w-7 h-7 text-gray-400 group-hover:text-purple-600 group-hover:translate-x-2 transition-all duration-300 animate-float" />
                  </div>
                  {/* Service Description */}
                  <p className="text-gray-700 mb-8 text-lg leading-relaxed animate-slide-up">
                    {service.description}
                  </p>
                  {/* Service Details */}
                  <div className="space-y-4 mb-8">
                    {service.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-start space-x-3 animate-slide-up">
                        <div className="w-3 h-3 bg-gradient-to-br from-pink-400 via-purple-400 to-yellow-300 rounded-full mt-2 flex-shrink-0 shadow-md" />
                        <p className="text-gray-700 leading-relaxed flex-1"><span className="font-semibold text-purple-700">{detail.split(' ')[0]}</span> {detail.substring(detail.indexOf(' ') + 1)}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card3D>
          ))}
        </div>
      </div>
      {/* Decorative Bottom Divider */}
      <div className="w-full flex justify-center mt-16">
        <div className="h-2 w-48 bg-gradient-to-r from-yellow-200 via-pink-300 to-purple-300 rounded-full blur-sm" />
      </div>
    </section>
  );
};
