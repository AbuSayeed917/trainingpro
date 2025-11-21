"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Award, Users, Clock } from "lucide-react";
import { Container } from "@/components/ui";
import { FadeIn, FadeInUp } from "@/components/ui/AnimatedSection";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Premium Background Pattern */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1920&q=80"
          alt="Professional payroll training"
          fill
          className="object-cover opacity-[0.08]"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-900/90 to-slate-900/95" />
      </div>

      {/* Elegant Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-400/5 rounded-full blur-3xl animate-float-slow" />
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
        backgroundSize: '100px 100px'
      }} />

      <Container className="relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Content */}
            <div className="text-white">
              <FadeIn>
                {/* Premium Badge */}
                <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 shadow-elegant">
                  <div className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
                  </div>
                  <span className="text-sm font-medium tracking-wide">Now Enrolling • Weekend Classes Available</span>
                </div>
              </FadeIn>

              <FadeInUp delay={0.1}>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
                  Master UK Payroll
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 mt-2">
                    with BrightPay
                  </span>
                </h1>
              </FadeInUp>

              <FadeInUp delay={0.2}>
                <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-xl">
                  Expert 1-to-1 training from an experienced payroll specialist. Launch your payroll career in just 6 weeks with practical skills employers demand.
                </p>
              </FadeInUp>

              <FadeInUp delay={0.3}>
                {/* Professional Feature Pills */}
                <div className="flex flex-wrap gap-3 mb-10">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                    <Award className="h-4 w-4 text-blue-400" />
                    <span className="text-sm font-medium">Professional Training</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                    <Users className="h-4 w-4 text-blue-400" />
                    <span className="text-sm font-medium">Max 4 Students</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                    <Clock className="h-4 w-4 text-blue-400" />
                    <span className="text-sm font-medium">6 Weeks</span>
                  </div>
                </div>
              </FadeInUp>

              <FadeInUp delay={0.4}>
                {/* Professional CTAs */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/programmes"
                    className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-slate-900 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-all shadow-elegant hover:shadow-hover-elegant"
                  >
                    View Full Curriculum
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="/contact"
                    className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 text-white border-2 border-blue-500/50 rounded-xl font-semibold text-lg hover:bg-blue-700 hover:border-blue-400/50 transition-all shadow-elegant"
                  >
                    Book Free Consultation
                  </Link>
                </div>
              </FadeInUp>

              <FadeInUp delay={0.5}>
                {/* Trust Indicators */}
                <div className="mt-12 pt-8 border-t border-white/10">
                  <p className="text-sm text-blue-200 mb-4 font-medium">Trusted by professionals at:</p>
                  <div className="flex flex-wrap gap-6 items-center opacity-60">
                    <span className="text-sm font-semibold">Deloitte</span>
                    <span className="text-sm font-semibold">KPMG</span>
                    <span className="text-sm font-semibold">PwC</span>
                    <span className="text-sm font-semibold">NHS</span>
                  </div>
                </div>
              </FadeInUp>
            </div>

            {/* Right Column - Stats Card */}
            <FadeInUp delay={0.3}>
              <div className="relative">
                {/* Glass Morphism Card */}
                <div className="relative rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 p-8 shadow-elegant">
                  {/* Ambient Glow */}
                  <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-blue-500/20 via-transparent to-indigo-500/20 blur-xl" />

                  <div className="relative">
                    {/* Header */}
                    <div className="mb-8">
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-400/30 mb-4">
                        <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                        <span className="text-sm font-semibold text-emerald-100">Limited Spots Available</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">Complete Package</h3>
                      <div className="flex items-baseline gap-2">
                        <span className="text-5xl font-bold text-white">£999</span>
                        <span className="text-lg text-blue-200">one-time</span>
                      </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-6 mb-8">
                      <div className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
                        <div className="text-3xl font-bold text-white mb-1">15+</div>
                        <div className="text-sm text-blue-200">Years Experience</div>
                      </div>
                      <div className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
                        <div className="text-3xl font-bold text-white mb-1">1:1</div>
                        <div className="text-sm text-blue-200">Training</div>
                      </div>
                      <div className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
                        <div className="text-3xl font-bold text-white mb-1">9</div>
                        <div className="text-sm text-blue-200">Modules</div>
                      </div>
                      <div className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
                        <div className="text-3xl font-bold text-white mb-1">100%</div>
                        <div className="text-sm text-blue-200">Practical</div>
                      </div>
                    </div>

                    {/* Features List */}
                    <div className="space-y-3">
                      {[
                        'Expert 1-to-1 instruction',
                        'Complete BrightPay mastery',
                        'Real payroll projects',
                        'CV & interview support',
                        'Weekend classes',
                        'Free BrightPay license'
                      ].map((feature, i) => (
                        <div key={i} className="flex items-center gap-3 text-blue-100">
                          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-400/30">
                            <CheckCircle2 className="h-3 w-3 text-blue-400" />
                          </div>
                          <span className="text-sm font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </Container>

      {/* Bottom Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-16 text-white" preserveAspectRatio="none" viewBox="0 0 1440 48" fill="none">
          <path d="M0 48h1440V0S1020 48 720 48 0 0 0 0v48z" fill="currentColor" />
        </svg>
      </div>
    </section>
  );
}
