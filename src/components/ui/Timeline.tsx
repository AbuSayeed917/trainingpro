"use client";

import { ReactNode, useEffect, useRef, useState } from 'react';
import { LucideIcon } from 'lucide-react';

interface TimelineItem {
  icon: LucideIcon;
  title: string;
  description: string;
  badge?: string;
  color: string;
}

interface TimelineProps {
  items: TimelineItem[];
  className?: string;
}

export function Timeline({ items, className = '' }: TimelineProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = itemRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveIndex(index);
          }
        },
        { threshold: 0.5 }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  return (
    <div className={`relative ${className}`}>
      {/* Vertical Line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-purple-200 to-cyan-200" />

      {/* Timeline Items */}
      <div className="space-y-12">
        {items.map((item, index) => {
          const Icon = item.icon;
          const isActive = activeIndex === index;

          return (
            <div
              key={index}
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
              className="relative pl-24"
            >
              {/* Icon Container */}
              <div className="absolute left-0 flex items-center">
                <div className="relative">
                  {/* Pulsing Ring */}
                  {isActive && (
                    <div className={`absolute -inset-4 bg-gradient-to-br ${item.color} rounded-full opacity-20 blur-xl animate-pulse`} />
                  )}

                  {/* Icon Circle */}
                  <div
                    className={`relative w-16 h-16 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg transition-all duration-500 ${
                      isActive ? 'scale-110' : 'scale-100'
                    }`}
                  >
                    <Icon className="h-8 w-8 text-white" />
                  </div>

                  {/* Connecting Dot */}
                  <div className="absolute top-1/2 -right-10 w-8 h-0.5 bg-gradient-to-r from-white/50 to-transparent" />
                </div>
              </div>

              {/* Content Card */}
              <div
                className={`group relative transition-all duration-500 ${
                  isActive ? 'translate-x-2' : 'translate-x-0'
                }`}
              >
                {/* Ambient Glow */}
                <div className={`absolute -inset-px rounded-2xl bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500`} />

                <div className="relative bg-white rounded-2xl border border-gray-200 shadow-elegant group-hover:shadow-hover-elegant transition-all duration-500 p-8">
                  {/* Badge */}
                  {item.badge && (
                    <div className={`inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r ${item.color} text-white text-xs font-semibold mb-4 shadow-md`}>
                      {item.badge}
                    </div>
                  )}

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>

                  {/* Bottom Accent */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-2xl`} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
