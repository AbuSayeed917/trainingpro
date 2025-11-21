"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  animation?: "fade-up" | "fade-down" | "fade-left" | "fade-right" | "scale" | "fade";
  delay?: number;
  threshold?: number;
}

export function ScrollReveal({
  children,
  className = "",
  animation = "fade-up",
  delay = 0,
  threshold = 0.1,
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold, triggerOnce: true });

  const animationClass = {
    "fade-up": "animate-fade-in-up",
    "fade-down": "animate-fade-in-down",
    "fade-left": "animate-slide-in-left",
    "fade-right": "animate-slide-in-right",
    "scale": "animate-scale-in",
    "fade": "animate-fade-in",
  }[animation];

  const delayStyle = delay > 0 ? { animationDelay: `${delay}ms` } : {};

  return (
    <div
      ref={ref}
      className={`${className} ${isVisible ? animationClass : "opacity-0"}`}
      style={delayStyle}
    >
      {children}
    </div>
  );
}
