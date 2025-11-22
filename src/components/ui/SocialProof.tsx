"use client";

import { useEffect, useState } from 'react';
import { CheckCircle2, X } from 'lucide-react';

const notifications = [
  { name: "Sarah M.", action: "enrolled in BrightPay Training", location: "London", time: "2 minutes ago" },
  { name: "James P.", action: "completed the programme", location: "Manchester", time: "5 minutes ago" },
  { name: "Emily R.", action: "started their payroll career", location: "Birmingham", time: "8 minutes ago" },
  { name: "Michael C.", action: "enrolled in BrightPay Training", location: "Leeds", time: "12 minutes ago" },
  { name: "David L.", action: "booked a consultation", location: "Bristol", time: "15 minutes ago" },
];

export function SocialProof() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    if (isDismissed) return;

    // Show first notification after 10 seconds
    const initialTimeout = setTimeout(() => {
      setIsVisible(true);
    }, 10000);

    return () => clearTimeout(initialTimeout);
  }, [isDismissed]);

  useEffect(() => {
    if (!isVisible || isDismissed) return;

    // Auto-hide after 5 seconds
    const hideTimeout = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    // Show next notification after 8 seconds
    const nextTimeout = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % notifications.length);
      setIsVisible(true);
    }, 8000);

    return () => {
      clearTimeout(hideTimeout);
      clearTimeout(nextTimeout);
    };
  }, [isVisible, currentIndex, isDismissed]);

  if (isDismissed) return null;

  const notification = notifications[currentIndex];

  return (
    <div
      className={`fixed bottom-24 left-8 z-40 transition-all duration-500 ${
        isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
      }`}
    >
      <div className="relative group">
        {/* Ambient Glow */}
        <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500/30 to-green-500/30 rounded-2xl opacity-75 blur-xl" />

        {/* Main Card */}
        <div className="relative bg-white rounded-2xl shadow-elegant p-5 max-w-sm border border-gray-100">
          {/* Close Button */}
          <button
            onClick={() => setIsDismissed(true)}
            className="absolute top-3 right-3 p-1 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Dismiss"
          >
            <X className="h-4 w-4 text-gray-400" />
          </button>

          <div className="flex items-start gap-4 pr-6">
            {/* Icon */}
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center shadow-lg">
              <CheckCircle2 className="h-6 w-6 text-white" />
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-gray-900 mb-1">
                {notification.name}
              </p>
              <p className="text-sm text-gray-600 mb-2">
                {notification.action}
              </p>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span>{notification.location}</span>
                <span>•</span>
                <span>{notification.time}</span>
              </div>
            </div>
          </div>

          {/* Decorative Bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-green-600 rounded-b-2xl" />
        </div>
      </div>
    </div>
  );
}
