import { Card3D } from './Card3D';
import { useState, useRef } from 'react';
import { Mail, MapPin, Send, User, MessageSquare, Briefcase, Clock } from 'lucide-react';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, service, message } = formData;
    // Construct mailto link
    const subject = encodeURIComponent(`New Project Inquiry: ${service}`);
    const body = encodeURIComponent(
      `Name: ${name}\nService: ${service}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:hatake.kakashi68@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Briefcase className="w-6 h-6 text-purple-600" />,
      label: "Project Consultation",
      value: "Free 30-min call",
      subtext: "Book a session to discuss your idea"
    }
  ];

  return (
    <section id="contact" className="py-32 relative bg-gradient-to-b from-purple-50/30 via-pink-50/30 to-yellow-50/30">
      {/* Background Elements */}
      <div className="absolute inset-0 japanese-pattern opacity-5" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Audio for send message */}
        <audio ref={audioRef} src="/send_message.mp3" preload="auto" />

        {/* Section Header */}
        <div className="text-center mb-20 scroll-animate">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-pink-100 px-6 py-3 rounded-full mb-8">
            <MessageSquare className="w-5 h-5 text-purple-600" />
            <span className="text-purple-600 font-medium">Let's Connect</span>
          </div>
          
          <h2 className="text-6xl font-bold font-playfair mb-8 bg-gradient-to-r from-purple-700 via-pink-600 to-yellow-600 bg-clip-text text-transparent">
            Start Your Project
            <span className="text-2xl block mt-4 text-gray-600 font-normal">お問い合わせ</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to bring your vision to life? Let's discuss how we can help you achieve your goals.
          </p>
          
          <div className="w-32 h-1 bg-gradient-to-r from-purple-600 via-pink-600 to-yellow-600 mx-auto rounded-full mt-8" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card3D className="scroll-animate h-full" glowEffect disable3D={true}>
              <div className="glass rounded-3xl p-10 border-2 border-white/30 h-full">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Send us a message</h3>
                  <p className="text-gray-600">We'll get back to you within 24 hours</p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                      <User className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name (お名前)"
                        className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/70 backdrop-blur-sm transition-all duration-300 text-gray-800 placeholder-gray-500"
                        required
                      />
                    </div>
                    <div className="relative">
                      <Mail className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email Address (メール)"
                        className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/70 backdrop-blur-sm transition-all duration-300 text-gray-800 placeholder-gray-500"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="relative">
                    <Briefcase className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/70 backdrop-blur-sm transition-all duration-300 text-gray-800 appearance-none cursor-pointer"
                      required
                    >
                      <option value="">Select a service (サービス選択)</option>
                      <option value="AI Services">AI Services</option>
                      <option value="Blockchain Development">Blockchain Development</option>
                      <option value="Blockchain Infrastructure">Blockchain Infrastructure</option>
                      <option value="Application Development">Application Development</option>
                      <option value="Custom Solution">Custom Solution</option>
                    </select>
                  </div>
                  
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      placeholder="What do you want us to build for you.... (私たちに何を作ってほしいですか)"
                      className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/70 backdrop-blur-sm transition-all duration-300 resize-none text-gray-800 placeholder-gray-500"
                      required
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-8 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </Card3D>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card3D key={index} className="scroll-animate">
                <div className="glass rounded-2xl p-8 border-2 border-white/30 text-center hover:border-white/50 transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full mb-4">
                    {info.icon}
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">{info.label}</h4>
                  <p className="text-lg text-gray-700 font-medium mb-1">{info.value}</p>
                  <p className="text-sm text-gray-500">{info.subtext}</p>
                </div>
              </Card3D>
            ))}
            
            {/* Additional Info Card */}
            <Card3D className="scroll-animate">
              <div className="glass rounded-2xl p-8 border-2 border-white/30 text-center">
                <div className="text-4xl mb-4">🌸</div>
                <h4 className="text-lg font-bold text-gray-800 mb-2">Response Time</h4>
                <p className="text-gray-600">We typically respond within 2-4 hours during business hours (EST)</p>
              </div>
            </Card3D>
          </div>
        </div>
      </div>
    </section>
  );
};
