'use client';

import { useState, useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

export default function MouseFollower() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isMobile]);

  if (isMobile) {
    return null;
  }

  return (
    <div
      className="pointer-events-none fixed z-[9999] h-48 w-48 rounded-full bg-primary/20 blur-3xl"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)',
        transition: 'transform 0.1s ease-out',
      }}
    />
  );
}
