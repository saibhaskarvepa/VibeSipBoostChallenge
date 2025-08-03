'use client';

import { useState, useEffect, useRef } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

interface Point {
  x: number;
  y: number;
}

export default function MouseFollower() {
  const [points, setPoints] = useState<Point[]>([]);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) {
      setPoints([]);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      // Clear the timeout if the mouse is moving
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }

      setPoints(prevPoints => [{ x: e.clientX, y: e.clientY }, ...prevPoints].slice(0, 20));

      // Set a timeout to clear the points when the mouse stops
      timeoutRef.current = setTimeout(() => {
        setPoints([]);
      }, 200); // 200ms delay before clearing the trail
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isMobile]);
  
  if (isMobile) {
    return null;
  }

  return (
    <>
      {points.map((point, index) => (
        <div
          key={index}
          className="pointer-events-none fixed z-[9999] rounded-full bg-primary/40"
          style={{
            left: `${point.x}px`,
            top: `${point.y}px`,
            width: `${24 - index}px`,
            height: `${24 - index}px`,
            opacity: 1 - index * 0.05,
            transform: `translate(-${12 - index / 2}px, -${12 - index / 2}px)`,
            filter: `blur(${index * 0.5}px)`,
            transition: 'transform 0.1s ease-out, opacity 0.1s ease-out',
          }}
        />
      ))}
    </>
  );
}
