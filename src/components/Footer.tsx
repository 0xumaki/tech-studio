import { ArrowUp } from 'lucide-react';

const socialLinks = [
  { name: 'Twitter', url: 'https://twitter.com/', icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.59-2.47.7a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04A4.28 4.28 0 0 0 16.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.1.99C7.69 9.13 4.07 7.3 1.64 4.6c-.37.64-.58 1.39-.58 2.19 0 1.51.77 2.84 1.95 3.62-.72-.02-1.4-.22-1.99-.55v.06c0 2.11 1.5 3.87 3.5 4.27-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.68 2.12 2.9 3.99 2.93A8.6 8.6 0 0 1 2 19.54c-.29 0-.57-.02-.85-.05A12.13 12.13 0 0 0 8.29 21.5c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.18 8.18 0 0 0 24 4.59a8.36 8.36 0 0 1-2.54.7z"/></svg> },
  { name: 'GitHub', url: 'https://github.com/', icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.66-.22.66-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85.004 1.71.12 2.51.35 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.33-.01 2.4-.01 2.73 0 .27.16.58.67.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z"/></svg> },
];

export const Footer = () => (
  <footer className="relative bg-gradient-to-r from-purple-700 via-pink-600 to-yellow-500 text-white pt-0 pb-12 mt-24 overflow-hidden border-t-4 border-gradient-to-r from-pink-300 via-purple-300 to-yellow-200">
    {/* Decorative Top Divider */}
    <div className="w-full flex justify-center">
      <div className="h-2 w-48 bg-gradient-to-r from-pink-300 via-purple-300 to-yellow-200 rounded-full blur-sm mt-0 mb-8" />
    </div>
    {/* Japanese Pattern Overlay */}
    <div className="absolute inset-0 japanese-pattern opacity-10 pointer-events-none" />
    {/* Sakura Petal Motif */}
    <div className="absolute left-8 bottom-8 opacity-50 animate-float z-0">
      <svg width="96" height="96" viewBox="0 0 32 32" fill="none"><path d="M16 2C18.5 8 24 10 30 10C28 16 22 18 16 30C10 18 4 16 2 10C8 10 13.5 8 16 2Z" fill="url(#petalGradientFooter)"/><defs><linearGradient id="petalGradientFooter" x1="16" y1="2" x2="16" y2="30" gradientUnits="userSpaceOnUse"><stop stopColor="#f9a8d4"/><stop offset="1" stopColor="#c084fc"/></linearGradient></defs></svg>
    </div>
    <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
      <div className="flex flex-col items-start gap-1">
        <span className="text-2xl font-playfair font-bold tracking-wide">桜Tech</span>
        <span className="text-base text-pink-100 bg-white/10 rounded-full px-3 py-1 font-medium shadow-sm inline-block mb-1">サクラテックスタジオ</span>
        <span className="text-sm opacity-80">&copy; {new Date().getFullYear()} Sakura Tech Studio</span>
      </div>
      <div className="flex items-center gap-6">
        {socialLinks.map(link => (
          <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300 group">
            <span className="inline-block bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-300 p-2 rounded-full group-hover:shadow-lg group-hover:from-yellow-300 group-hover:to-purple-400 transition-all duration-300">
              {link.icon}
            </span>
          </a>
        ))}
      </div>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-yellow-400 hover:to-pink-400 text-white rounded-full font-semibold shadow-xl transition-all duration-300 animate-glow focus:outline-none focus:ring-2 focus:ring-yellow-300"
        aria-label="Back to Top"
      >
        <ArrowUp className="w-6 h-6" />
        <span className="hidden sm:inline">Back to Top</span>
      </button>
    </div>
  </footer>
); 