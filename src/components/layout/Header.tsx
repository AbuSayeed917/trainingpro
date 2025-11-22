"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, GraduationCap } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "BrightPay Programme", href: "/programmes" },
  { name: "Work Experience", href: "/work-experience" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-500 ${
      scrolled
        ? "bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-elegant"
        : "bg-white/80 backdrop-blur-md border-b border-gray-100"
    }`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-3 group">
            <div className="relative w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-400 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-elegant transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
              <GraduationCap className="h-6 w-6 text-white group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent group-hover:from-primary-700 group-hover:to-primary-500 transition-all duration-300">
                Training Pro
              </span>
              <span className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold -mt-1 group-hover:text-primary-600 transition-colors duration-300">
                Professional Excellence
              </span>
            </div>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Toggle menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative text-sm font-semibold leading-6 transition-all duration-300 group ${
                  isActive
                    ? "text-primary-600"
                    : "text-gray-900 hover:text-primary-600"
                }`}
              >
                {item.name}
                {/* Active indicator */}
                <span className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-600 to-blue-600 transition-all duration-300 ${
                  isActive ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100"
                }`} />
              </Link>
            );
          })}
        </div>

        {/* CTA Buttons */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
          <Link
            href="/contact"
            className="group relative inline-flex items-center justify-center min-h-[44px] px-6 text-sm font-semibold text-gray-700 hover:text-primary-700 rounded-xl transition-all duration-300 overflow-hidden"
          >
            <span className="absolute inset-0 bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative">Book Consultation</span>
          </Link>
          <Link
            href="/programmes"
            className="group relative inline-flex items-center justify-center min-h-[44px] px-6 text-sm font-semibold bg-gradient-to-r from-primary-600 to-blue-600 text-white rounded-xl shadow-md hover:shadow-elegant transition-all duration-300 hover:scale-105 overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-primary-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative">View Programme</span>
          </Link>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden animate-fade-in-down">
          <div className="space-y-1 px-4 pb-3 pt-2 bg-gradient-to-b from-gray-50 to-white">
            {navigation.map((item, index) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center rounded-xl px-4 py-3 text-base font-semibold min-h-[48px] transition-all duration-300 ${
                    isActive
                      ? "bg-primary-50 text-primary-700 border border-primary-200"
                      : "text-gray-900 hover:bg-gray-100"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.name}
                </Link>
              );
            })}
            <div className="border-t border-gray-200 pt-4 space-y-3">
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center min-h-[48px] px-6 text-base font-semibold border-2 border-primary-600 text-primary-600 hover:bg-primary-50 rounded-xl transition-all duration-300 hover:scale-[1.02]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book Consultation
              </Link>
              <Link
                href="/programmes"
                className="w-full inline-flex items-center justify-center min-h-[48px] px-6 text-base font-semibold bg-gradient-to-r from-primary-600 to-blue-600 text-white hover:from-primary-700 hover:to-blue-700 rounded-xl shadow-md hover:shadow-elegant transition-all duration-300 hover:scale-[1.02]"
                onClick={() => setMobileMenuOpen(false)}
              >
                View Programme
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
