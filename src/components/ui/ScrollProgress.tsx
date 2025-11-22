"use client";

import { useEffect, useState } from 'react';

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / documentHeight) * 100;
      setProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-gray-200/30 backdrop-blur-sm">
      <div
        className="h-full bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 transition-all duration-150 ease-out shadow-lg"
        style={{ width: `${progress}%` }}
      >
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-r from-transparent to-white/20" />
      </div>
    </div>
  );
}
