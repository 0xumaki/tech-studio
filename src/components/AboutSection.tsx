import { Card3D } from './Card3D';
import { Award, Users, Clock, Heart } from 'lucide-react';

export const AboutSection = () => {
  const principles = [
    {
      icon: <Award className="w-6 h-6 text-purple-600" />,
      title: "Excellence in every detail",
      subtitle: "細部への拘り",
      description: "Meticulous attention to craftsmanship"
    },
    {
      icon: <Heart className="w-6 h-6 text-yellow-600" />,
      title: "Innovation through tradition",
      subtitle: "伝統を通じた革新",
      description: "Bridging ancient wisdom with modern tech"
    },
    {
      icon: <Users className="w-6 h-6 text-green-600" />,
      title: "Technology with soul",
      subtitle: "心のこもった技術",
      description: "Creating meaningful digital experiences"
    }
  ];

  return (
    <section id="about" className="py-32 relative bg-gradient-to-b from-transparent via-purple-50/30 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20 scroll-animate">
          <div className="inline-block p-4 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 mb-6">
            <div className="text-4xl">桜</div>
          </div>
          <h2 className="text-6xl font-bold font-playfair mb-6 bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent">
            Our Philosophy
            <span className="text-2xl block mt-4 text-gray-600 font-normal">私たちの哲学</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div className="scroll-animate space-y-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-8 font-medium">
                Like the delicate beauty of cherry blossoms that represents the fleeting nature of life, 
                we believe in creating technology solutions that are both beautiful and meaningful.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-12">
                Our studio combines the precision of expert craftsmanship with the innovation of modern technology, 
                following the principles of exceptional quality and continuous improvement.
              </p>
            </div>
            
            {/* Core Principles */}
            <div className="space-y-6">
              {principles.map((principle, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-white/20 hover:bg-white/70 transition-all duration-300">
                  <div className="p-3 rounded-full bg-gradient-to-r from-purple-100 to-pink-100">
                    {principle.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-800 mb-1">{principle.title}</h4>
                    <p className="text-sm text-purple-600 mb-2 font-medium">{principle.subtitle}</p>
                    <p className="text-gray-600">{principle.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Visual Side */}
          <div className="scroll-animate">
            <Card3D glowEffect>
              <div className="glass rounded-3xl p-10 border-2 border-white/30 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-yellow-200/30 to-orange-200/30 rounded-full blur-2xl" />
                
                <div className="relative z-10">
                  {/* Main Visual Element */}
                  <div className="text-center mb-8">
                    <div className="text-8xl font-playfair text-transparent bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text mb-4 drop-shadow-sm">
                      桜
                    </div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-4">The Sakura Philosophy</h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      Just as sakura blooms briefly but leaves a lasting impression, 
                      our solutions create maximum impact through elegant simplicity.
                    </p>
                  </div>
                  
                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/30">
                    <div className="text-center">
                      <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent mb-2">100+</div>
                      <div className="text-sm text-gray-600 font-medium">Projects Delivered</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold bg-gradient-to-r from-yellow-600 to-yellow-700 bg-clip-text text-transparent mb-2">50+</div>
                      <div className="text-sm text-gray-600 font-medium">Happy Clients</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent mb-2">5+</div>
                      <div className="text-sm text-gray-600 font-medium">Years Experience</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card3D>
          </div>
        </div>
      </div>
    </section>
  );
};
