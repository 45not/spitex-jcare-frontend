import { useEffect, useState } from "react";

// Gradient colors
const gradientColors = ['#FF9155', '#FF6A4D', '#F94C3D', '#E23B3B'];

interface BubbleProps {
  density?: 'low' | 'medium' | 'high';
  opacity?: 'low' | 'medium' | 'high';
  className?: string;
}

export function BackgroundBubbles({ 
  density = 'medium', 
  opacity = 'medium',
  className = ''
}: BubbleProps) {
  const [bubbles, setBubbles] = useState<{
    x: number;
    y: number;
    size: number;
    opacity: number;
    color: string;
    blur: number;
  }[]>([]);
  
  useEffect(() => {
    // Determine number of bubbles based on density
    const bubbleCount = density === 'low' ? 3 : (density === 'medium' ? 6 : 10);
    
    // Determine opacity range based on opacity setting
    let opacityMin = 0.03;
    let opacityMax = 0.08;
    
    if (opacity === 'medium') {
      opacityMin = 0.05;
      opacityMax = 0.12;
    } else if (opacity === 'high') {
      opacityMin = 0.08;
      opacityMax = 0.15;
    }
    
    // Generate bubbles
    const newBubbles = Array(bubbleCount).fill(0).map(() => ({
      x: Math.random() * 100, // position percentage across width
      y: Math.random() * 100, // position percentage across height
      size: 50 + Math.random() * 150, // size in pixels
      opacity: opacityMin + Math.random() * (opacityMax - opacityMin),
      color: gradientColors[Math.floor(Math.random() * gradientColors.length)],
      blur: 10 + Math.random() * 20, // blur radius in pixels
    }));
    
    setBubbles(newBubbles);
  }, [density, opacity]);
  
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {bubbles.map((bubble, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: `${bubble.x}%`,
            top: `${bubble.y}%`,
            backgroundColor: bubble.color,
            opacity: bubble.opacity,
            filter: `blur(${bubble.blur}px)`,
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}
    </div>
  );
}