import { ReactNode, useState } from 'react';

interface Card3DProps {
  children: ReactNode;
  className?: string;
  glowEffect?: boolean;
  disable3D?: boolean;
}

export const Card3D = ({ children, className = '', glowEffect = false, disable3D = false }: Card3DProps) => {
  const [transform, setTransform] = useState('');

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disable3D) return;
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`);
  };

  const handleMouseLeave = () => {
    if (disable3D) return;
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)');
  };

  return (
    <div
      className={`card-3d transition-all duration-300 ${glowEffect ? 'animate-glow' : ''} ${className}`}
      style={disable3D ? undefined : { transform }}
      onMouseMove={disable3D ? undefined : handleMouseMove}
      onMouseLeave={disable3D ? undefined : handleMouseLeave}
    >
      {children}
    </div>
  );
};
