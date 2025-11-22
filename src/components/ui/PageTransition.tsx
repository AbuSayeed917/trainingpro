"use client";

import { ReactNode, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

interface PageTransitionProps {
  children: ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 50);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <div
      className={`transition-opacity duration-500 ${
        isTransitioning ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {children}
    </div>
  );
}
