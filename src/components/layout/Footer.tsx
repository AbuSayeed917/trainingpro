import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, Award, Clock, GraduationCap } from "lucide-react";

const footerLinks = {
  quickLinks: [
    { name: "Home", href: "/" },
    { name: "BrightPay Programme", href: "/programmes" },
    { name: "Work Experience", href: "/work-experience" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
  training: [
    { name: "Programme Overview", href: "/programmes" },
    { name: "Curriculum Details", href: "/programmes#curriculum" },
    { name: "Weekend Classes", href: "/programmes#schedule" },
    { name: "Pricing & Payment", href: "/programmes#pricing" },
    { name: "Book Consultation", href: "/book" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
};

const trustIndicators = [
  {
    icon: Award,
    label: "HMRC Recognized",
    description: "BrightPay Software",
  },
  {
    icon: GraduationCap,
    label: "Expert Trainer",
    description: "15+ Years Experience",
  },
  {
    icon: Clock,
    label: "Flexible Schedule",
    description: "Weekend Classes",
  },
];

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {/* Trust Indicators */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 pb-12 border-b border-gray-800">
          {trustIndicators.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex items-start gap-4 group">
                <div className="p-3 rounded-xl bg-gradient-to-br from-primary-600 to-primary-500 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold mb-1">{item.label}</div>
                  <div className="text-sm text-gray-400">{item.description}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block group">
              <span className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-primary-300 bg-clip-text text-transparent group-hover:from-primary-300 group-hover:to-primary-400 transition-all">
                Training Pro
              </span>
            </Link>
            <p className="mt-4 text-sm leading-6 max-w-sm text-gray-400">
              Expert BrightPay payroll training with personalized one-to-one instruction.
              Launch your payroll career with practical skills that employers demand.
            </p>

            {/* Contact Info */}
            <div className="mt-6 space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-400">123 Business Street, London, UK</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary-400 flex-shrink-0" />
                <span className="text-sm text-gray-400">+44 (0) 20 1234 5678</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary-400 flex-shrink-0" />
                <span className="text-sm text-gray-400">info@trainingpro.co.uk</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6 flex gap-4">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="p-2 rounded-lg bg-gray-800 text-gray-400 hover:bg-primary-600 hover:text-white transition-all duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="sr-only">{item.name}</span>
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-primary-400 transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-primary-400 group-hover:w-4 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Training Programme */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Training</h3>
            <ul className="space-y-3">
              {footerLinks.training.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-primary-400 transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-primary-400 group-hover:w-4 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Training Pro. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm hover:text-primary-400 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
