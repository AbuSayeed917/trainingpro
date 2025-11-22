"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, X } from 'lucide-react';

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 500px
      if (window.scrollY > 500 && !isDismissed) {
        setIsVisible(true);
      } else if (window.scrollY <= 500) {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  if (isDismissed) return null;

  return (
    <div
      className={`fixed bottom-8 right-8 z-50 transition-all duration-500 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
      }`}
    >
      <div className="relative group">
        {/* Ambient Glow */}
        <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-75 blur-xl group-hover:opacity-100 transition-opacity duration-500" />

        {/* Main Card */}
        <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-elegant p-6 max-w-sm">
          {/* Close Button */}
          <button
            onClick={() => setIsDismissed(true)}
            className="absolute top-3 right-3 p-1.5 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Dismiss"
          >
            <X className="h-4 w-4 text-white" />
          </button>

          <div className="pr-6">
            <div className="text-white font-bold text-lg mb-2">
              Ready to Start Your Career?
            </div>
            <p className="text-blue-100 text-sm mb-4">
              Join our 6-week BrightPay training and launch your payroll career
            </p>

            <Link
              href="/programmes"
              className="group/btn inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-xl font-bold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              View Programme
              <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Decorative Element */}
          <div className="absolute -top-2 -left-2 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-20 blur-2xl" />
        </div>
      </div>
    </div>
  );
}
