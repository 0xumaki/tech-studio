import { Star } from 'lucide-react';
import { useRef, useState } from 'react';

const testimonials = [
  {
    name: 'Sakura Chan',
    role: 'Village Entrepreneur',
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFrnf6iMhT5wrtTxTuVWLhRUFC7PM_zbKxJA&s',
    review: 'Thanks to your medical AI-powered tokenization platform, I became a useful person in my village. Now I can sell my services and help more people. Truly grateful!'
  },
  {
    name: 'Zoro Chan',
    role: 'Swordsman',
    avatar: 'https://img.wattpad.com/bc822a524034940050c1c4a2fe85a3bf65cefae8/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f3572414f467a7474346149324d773d3d2d3939303039323838372e313634643061613162353861653736303937303231363638323034362e6a7067',
    review: 'With your navigation AI app, I finally found my way! No more getting lost—thank you for guiding me to my dreams.'
  },
  {
    name: 'Saitama Chan',
    role: 'Hero for Fun',
    avatar: 'https://c4.wallpaperflare.com/wallpaper/855/194/517/anime-one-punch-man-saitama-one-punch-man-wallpaper-preview.jpg',
    review: 'You delivered my discount-finding and real-time alert AI bot in one blow! Shopping will never be the same.'
  },
  {
    name: 'Jin Woo',
    role: 'Shadow Monarch',
    avatar: 'https://zumaki.co.in/wp-content/uploads/2024/03/sung-jin-woo-purple.webp',
    review: 'Now I can optimize my manner and minion spawn thanks to your real-time strategy AI model integration. My system is unbeatable!'
  },
  {
    name: 'Mr Nice',
    role: 'Public Figure',
    avatar: 'https://butwhytho.net/wp-content/uploads/2025/04/To-Be-Hero-X-Episode-1-But-Why-Tho-3.jpg',
    review: 'With your blockchain-based real-time sentiment monitoring and PR automation, I can accumulate more public trust. Plus, I can now reward my fans with nice stablecoins for even greater trust!'
  },
];

export const TestimonialSection = () => {
  // Drag-to-scroll for smooth swipe
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const onDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    setStartX('touches' in e ? e.touches[0].pageX : e.pageX);
    setScrollLeft(scrollRef.current ? scrollRef.current.scrollLeft : 0);
  };
  const onDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging || !scrollRef.current) return;
    const x = 'touches' in e ? e.touches[0].pageX : e.pageX;
    const walk = (x - startX) * -1; // negative for natural direction
    scrollRef.current.scrollLeft = scrollLeft + walk;
  };
  const onDragEnd = () => {
    setIsDragging(false);
  };

  return (
    <section id="testimonials" className="py-32 relative bg-gradient-to-b from-white via-pink-50/40 to-yellow-50/60 overflow-hidden manga-panel">
      {/* Decorative Top Divider */}
      <div className="w-full flex justify-center mb-12">
        <div className="h-2 w-48 bg-gradient-to-r from-yellow-200 via-pink-300 to-purple-300 rounded-full blur-sm" />
      </div>
      {/* Halftone background */}
      <div className="absolute inset-0 manga-halftone z-0" />
      {/* Manga burst accent behind header */}
      <div className="absolute left-1/2 -translate-x-1/2 -top-10 w-64 h-32 manga-burst z-0" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header in manga speech bubble */}
        <div className="text-center mb-20 scroll-animate">
          <div className="inline-block manga-speech font-manga text-4xl md:text-5xl text-purple-700 font-extrabold mb-4 shadow-lg relative select-none">
            What Our Clients Say
            <span className="text-2xl block mt-4 text-gray-600 font-normal bg-white/60 rounded-full px-4 py-1 inline-block shadow-sm font-manga select-none">お客様の声</span>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mt-8 select-none">
            We're proud to have helped amazing clients achieve their goals. Here's what they say about working with us!
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-600 via-pink-600 to-purple-600 mx-auto rounded-full mt-8" />
        </div>
        {/* Testimonials Row with scroll snap and smooth drag-to-scroll */}
        <div
          ref={scrollRef}
          className={`flex gap-8 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-yellow-300 scrollbar-track-white snap-x snap-mandatory select-none ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
          style={{ WebkitOverflowScrolling: 'touch', scrollSnapType: 'x mandatory', userSelect: isDragging ? 'none' : undefined }}
          onMouseDown={onDragStart}
          onMouseMove={onDragMove}
          onMouseUp={onDragEnd}
          onMouseLeave={onDragEnd}
          onTouchStart={onDragStart}
          onTouchMove={onDragMove}
          onTouchEnd={onDragEnd}
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="min-w-[340px] max-w-sm manga-panel manga-pop relative bg-white/90 flex flex-col items-center p-8 shadow-xl snap-center transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-yellow-400 select-none"
              tabIndex={0}
            >
              {/* Halftone overlay */}
              <div className="absolute inset-0 manga-halftone z-0" />
              {/* Avatar with burst */}
              <div className="relative mb-4 z-10 select-none">
                <div className="absolute -top-2 -left-2 w-16 h-16 manga-burst z-0" />
                <img src={t.avatar} alt={t.name} className="w-16 h-16 rounded-full border-4 border-yellow-300 shadow-md bg-white object-cover relative z-10 select-none" draggable={false} />
              </div>
              {/* Stars with animation */}
              <div className="flex gap-1 mb-4 z-10 select-none">
                {[...Array(5)].map((_, s) => <Star key={s} className="w-5 h-5 text-yellow-400 fill-yellow-300 transition-transform duration-200 group-hover:scale-125 group-hover:-rotate-6" />)}
              </div>
              {/* Speech bubble review */}
              <div className="manga-speech text-lg text-gray-800 mb-6 relative z-10 bg-white/95 border-yellow-300 select-none">
                {t.review}
              </div>
              {/* Name and role */}
              <div className="flex flex-col items-center gap-1 mt-auto z-10 select-none">
                <div className="font-manga text-xl text-purple-700 font-bold select-none">{t.name}</div>
                <div className="text-xs bg-gradient-to-r from-yellow-100 to-pink-100 text-yellow-700 px-3 py-1 rounded-full font-semibold shadow-sm mt-1 select-none">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Decorative Bottom Divider */}
      <div className="w-full flex justify-center mt-16">
        <div className="h-2 w-48 bg-gradient-to-r from-purple-300 via-pink-300 to-yellow-200 rounded-full blur-sm" />
      </div>
    </section>
  );
} 