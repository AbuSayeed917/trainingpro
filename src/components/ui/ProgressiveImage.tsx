"use client";

import { useState } from 'react';
import Image from 'next/image';

interface ProgressiveImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  className?: string;
  sizes?: string;
  priority?: boolean;
}

export function ProgressiveImage({ src, alt, fill, className, sizes, priority }: ProgressiveImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative overflow-hidden">
      {isLoading && (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 animate-pulse" />
      )}
      <Image
        src={src}
        alt={alt}
        fill={fill}
        className={`transition-opacity duration-700 ${isLoading ? 'opacity-0' : 'opacity-100'} ${className}`}
        sizes={sizes}
        priority={priority}
        onLoadingComplete={() => setIsLoading(false)}
      />
    </div>
  );
}
