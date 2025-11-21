"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, Mail } from "lucide-react";
import { Container, ScrollReveal } from "@/components/ui";

export function CTA() {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-600 via-primary-500 to-primary-700 text-white relative overflow-hidden">
      {/* Background Hero Image */}
      <div className="absolute inset-0 opacity-15">
        <Image
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600&q=80"
          alt="Team collaboration"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/90 via-primary-500/90 to-primary-700/90" />
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Premium Badge */}
          <ScrollReveal animation="fade-down">
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-2xl border border-white/40 rounded-full shadow-2xl">
                <div className="relative">
                  <div className="w-2.5 h-2.5 bg-white rounded-full animate-pulse"></div>
                  <div className="absolute inset-0 w-2.5 h-2.5 bg-white rounded-full animate-ping"></div>
                </div>
                <span className="text-sm font-bold text-white tracking-wider">LIMITED SPOTS AVAILABLE</span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="scale" delay={100}>
            <h2 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl mb-8 leading-tight">
              <span className="block text-white drop-shadow-2xl">Ready to Launch Your</span>
              <span className="block mt-2 bg-gradient-to-r from-blue-200 via-white to-blue-200 bg-clip-text text-transparent drop-shadow-2xl">Payroll Career?</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={200}>
            <p className="text-xl sm:text-2xl text-primary-50 mb-12 leading-relaxed font-light">
              Start your journey with expert-led <span className="font-bold text-white bg-white/20 px-3 py-1 rounded-lg">BrightPay training</span>. Get one-to-one instruction,
              real-world experience, and complete career support for just <span className="font-bold text-white bg-white/20 px-3 py-1 rounded-lg">£999 all-inclusive</span>.
            </p>
          </ScrollReveal>

          {/* CTA Buttons */}
          <ScrollReveal animation="fade-up" delay={300}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link
                href="/programmes"
                className="group relative inline-flex items-center justify-center gap-3 px-12 py-6 bg-white text-primary-600 rounded-2xl font-black text-lg shadow-2xl hover:shadow-white/30 transition-all duration-500 hover:scale-110 hover:-translate-y-1 overflow-hidden"
              >
                <span className="relative z-10 tracking-wide">View Training Programme</span>
                <ArrowRight className="h-6 w-6 relative z-10 group-hover:translate-x-2 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-white via-blue-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </Link>
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 px-12 py-6 bg-white/10 backdrop-blur-2xl border-2 border-white/50 text-white rounded-2xl font-bold text-lg hover:bg-white hover:text-primary-600 hover:border-white transition-all duration-500 hover:scale-105 hover:-translate-y-1 shadow-xl"
              >
                <span className="tracking-wide">Get Started Today</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </ScrollReveal>

          {/* Contact Options */}
          <ScrollReveal animation="fade-up" delay={400}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8 border-t border-primary-400">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5" />
                <span className="text-primary-100">Call us: +44 (0) 20 1234 5678</span>
              </div>
              <div className="hidden sm:block h-6 w-px bg-primary-400" />
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5" />
                <span className="text-primary-100">Email: info@trainingpro.co.uk</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
