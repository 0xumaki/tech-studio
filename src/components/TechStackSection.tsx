import { Brain, Layers, Globe, Smartphone, AlertTriangle } from 'lucide-react';
import { useState } from 'react';

const fallbackIcon = (name: string) => (
  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-pink-200 to-yellow-200 text-purple-700 font-bold text-lg border border-pink-300">
    {name[0]}
  </div>
);

const techStacks = [
  {
    icon: <Brain className="w-8 h-8 text-purple-600" />,
    title: 'AI',
    subtitle: '人工知能',
    gradient: 'from-purple-500 via-pink-500 to-yellow-400',
    stack: [
      { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'PyTorch', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
      { name: 'TensorFlow', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
      { name: 'HuggingFace', logo: 'https://emojiisland.com/cdn/shop/products/Hugging_Face_Emoji_2028ce8b-c213-4d45-94aa-21e1a0842b4d_large.png?v=1571606036' },
      { name: 'FastAPI', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
      { name: 'LangChain', logo: 'https://camo.githubusercontent.com/983b2c188da8df94d530680540548bc1da9f58e9efa18cb481328893f14d50f3/68747470733a2f2f6173736574732d676c6f62616c2e776562736974652d66696c65732e636f6d2f3632303362366435373832333130303834376566643962312f3635663431353935643337663533663731376464316636395f6c616e67636861696e25323069636f6e2e706e67' },
      { name: 'OpenAI', logo: 'https://static.vecteezy.com/system/resources/previews/022/227/364/non_2x/openai-chatgpt-logo-icon-free-png.png' },
    ]
  },
  {
    icon: <Layers className="w-8 h-8 text-yellow-600" />,
    title: 'Blockchain',
    subtitle: 'ブロックチェーン',
    gradient: 'from-yellow-500 via-orange-400 to-pink-400',
    stack: [
      { name: 'Solidity', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg' },
      { name: 'Ethereum', logo: 'https://img.icons8.com/fluent/512/ethereum.png' },
      { name: 'Hardhat', logo: 'https://moralis.com/wp-content/uploads/web3wiki/24hardhat/6381641b6a60932fb3c3c2d9_crsLQ2lVok-0X37hZ_7RSl62vTm5GRP0Ws4xyPt4E5I.jpeg' },
      { name: 'Polygon', logo: 'https://altcoinsbox.com/wp-content/uploads/2023/03/matic-logo.png' },
      { name: 'Web3.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/web3js/web3js-original.svg' },
      { name: 'Ethers.js', logo: 'https://images.seeklogo.com/logo-png/42/1/ethers-logo-png_seeklogo-426721.png' },
      { name: 'IPFS', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Ipfs-logo-1024-ice-text.png' },
    ]
  },
  {
    icon: <Globe className="w-8 h-8 text-green-600" />,
    title: 'Blockchain Infrastructure',
    subtitle: 'チェーンインフラ',
    gradient: 'from-green-500 via-teal-400 to-blue-400',
    stack: [
      { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      { name: 'Kubernetes', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
      { name: 'AWS', logo: 'https://img.icons8.com/color/512/amazon-web-services.png' },
      { name: 'GCP', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
      { name: 'Nginx', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg' },
      { name: 'Linux', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
    ]
  },
  {
    icon: <Smartphone className="w-8 h-8 text-blue-600" />,
    title: 'Application Development',
    subtitle: 'アプリ開発',
    gradient: 'from-blue-500 via-purple-500 to-pink-400',
    stack: [
      { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
      { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
      { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'iOS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg' },
      { name: 'Android', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg' },
      { name: 'React Native', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    ]
  },
];

// Infinite scroll animation keyframes
const scrollAnim = {
  animation: 'scroll-x 30s linear infinite',
};

const TechIcon = ({ name, logo }: { name: string; logo: string | null }) => {
  const [error, setError] = useState(false);
  if (!logo || error) return fallbackIcon(name);
  return (
    <img
      src={logo}
      alt={name}
      className="w-10 h-10 object-contain"
      onError={() => setError(true)}
      loading="lazy"
    />
  );
};

export const TechStackSection = () => (
  <section id="tech-stack" className="py-24 relative bg-gradient-to-b from-pink-50 via-yellow-50/40 to-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16 scroll-animate">
        <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-yellow-100 px-6 py-3 rounded-full mb-8 shadow-md">
          <span className="text-purple-600 font-medium tracking-wide">Our Tech Stack</span>
        </div>
        <h2 className="text-5xl md:text-6xl font-extrabold font-playfair mb-8 bg-gradient-to-r from-purple-700 via-yellow-600 to-pink-600 bg-clip-text text-transparent drop-shadow-lg">
          Technology We Use
          <span className="text-2xl block mt-4 text-gray-600 font-normal bg-white/60 rounded-full px-4 py-1 inline-block shadow-sm">技術スタック</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          The tools and platforms that power our AI, blockchain, and application solutions.
        </p>
        <div className="w-32 h-1 bg-gradient-to-r from-purple-600 via-yellow-600 to-pink-600 mx-auto rounded-full mt-8" />
      </div>
      <div className="space-y-16">
        {techStacks.map((cat, idx) => (
          <div key={cat.title} className="relative rounded-3xl p-8 bg-gradient-to-br from-white/80 to-pink-50/60 shadow-xl border border-white/40 mb-4 overflow-hidden">
            <div className="flex items-center mb-6">
              <div className={`p-4 rounded-2xl bg-gradient-to-r ${cat.gradient} shadow-lg mr-4`}>{cat.icon}</div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 font-playfair mb-1">{cat.title}</h3>
                <p className="text-base text-gray-500 font-medium">{cat.subtitle}</p>
              </div>
            </div>
            {/* Infinite Scroll Row with gradient glassy track */}
            <div className="relative w-full overflow-x-hidden py-4">
              <div
                className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-100/60 via-yellow-100/40 to-pink-100/60 backdrop-blur-md shadow-lg z-0"
                style={{ pointerEvents: 'none' }}
              />
              <div
                className="flex items-center gap-10 min-w-max relative z-10 group/scroll-track"
                style={scrollAnim}
                tabIndex={0}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.animationPlayState = 'paused';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.animationPlayState = 'running';
                }}
                onFocus={e => {
                  (e.currentTarget as HTMLElement).style.animationPlayState = 'paused';
                }}
                onBlur={e => {
                  (e.currentTarget as HTMLElement).style.animationPlayState = 'running';
                }}
              >
                {cat.stack.concat(cat.stack).map((tech, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center justify-center min-w-[120px] group/icon"
                  >
                    <div
                      className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white/80 to-pink-100 shadow-md flex items-center justify-center mb-2 border border-pink-100 transition-all duration-300 group-hover/icon:scale-110 group-hover/icon:shadow-xl group-hover/icon:border-yellow-400 group-focus-within/icon:scale-110 group-focus-within/icon:shadow-xl group-focus-within/icon:border-yellow-400 hover:ring-2 hover:ring-yellow-400"
                      tabIndex={0}
                    >
                      <span className="sr-only">{tech.name}</span>
                      <div className="relative group/tooltip">
                        <TechIcon name={tech.name} logo={tech.logo} />
                        <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 px-3 py-1 rounded bg-black/80 text-white text-xs opacity-0 group-hover/tooltip:opacity-100 group-focus-within/tooltip:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-20">
                          {tech.name}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    {/* Infinite scroll keyframes */}
    <style>{`
      @keyframes scroll-x {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
    `}</style>
  </section>
); 