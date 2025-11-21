"use client";

import { useState } from "react";
import Link from "next/link";
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

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-3 group">
            <div className="relative w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-400 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
                Training Pro
              </span>
              <span className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold -mt-1">
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
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary-600 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
          <Link
            href="/book"
            className="inline-flex items-center justify-center h-9 px-4 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-all"
          >
            Book Consultation
          </Link>
          <Link
            href="/programmes"
            className="inline-flex items-center justify-center h-9 px-4 text-sm font-medium bg-primary-600 text-white hover:bg-primary-700 rounded-lg shadow-md hover:shadow-lg transition-all"
          >
            View Programme
          </Link>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="space-y-2 px-4 pb-3 pt-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="border-t border-gray-200 pt-4 space-y-2">
              <Link
                href="/book"
                className="w-full inline-flex items-center justify-center h-11 px-6 text-base font-medium border-2 border-primary-600 text-primary-600 hover:bg-primary-50 rounded-lg transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book Consultation
              </Link>
              <Link
                href="/programmes"
                className="w-full inline-flex items-center justify-center h-11 px-6 text-base font-medium bg-primary-600 text-white hover:bg-primary-700 rounded-lg shadow-md hover:shadow-lg transition-all"
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
