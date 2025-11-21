"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui";
import { Target, Users, Award, TrendingUp, CheckCircle2, ArrowRight, Lightbulb, Heart, Shield, Sparkles, Play } from "lucide-react";
import { useState } from "react";
import { CoreValues } from "@/components/sections/CoreValues";
import { AboutVisuals } from "@/components/sections/AboutVisuals";

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We maintain the highest standards in training delivery and student support.",
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    icon: Users,
    title: "Student-Focused",
    description: "Your success is our priority. We adapt our approach to meet your individual needs.",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    icon: Award,
    title: "Quality Training",
    description: "Industry-aligned content delivered by qualified professionals with real experience.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    description: "We're committed to helping you achieve your professional goals and aspirations.",
    gradient: "from-pink-500 to-rose-500",
  },
];

const stats = [
  { number: "6", label: "Weeks Training", suffix: "" },
  { number: "1:1", label: "Personal Instruction", suffix: "" },
  { number: "15", label: "Years Experience", suffix: "+" },
  { number: "£999", label: "All Inclusive", suffix: "" },
];

const whyChooseUs = [
  "Expert trainer with 15+ years global payroll experience",
  "One-to-one personal instruction for focused learning",
  "Maximum 4 students per session for individual attention",
  "Weekend classes perfect for working professionals",
  "Real-world payroll projects for practical experience",
  "Complete career support: CV help, job applications, interview prep",
  "Comprehensive 9-module training programme",
  "Free BrightPay software (HMRC-recognized)",
];

const journey = [
  {
    icon: Lightbulb,
    title: "Our Vision",
    description: "To become the leading provider of professional payroll training that bridges the gap between education and employment, one student at a time.",
    color: "text-yellow-400",
    bg: "bg-yellow-500/20",
  },
  {
    icon: Heart,
    title: "Our Passion",
    description: "We're passionate about empowering individuals with the practical payroll skills and confidence to build rewarding careers in the UK payroll industry.",
    color: "text-pink-400",
    bg: "bg-pink-500/20",
  },
  {
    icon: Shield,
    title: "Our Commitment",
    description: "Dedicated to delivering high-quality, practical BrightPay training that meets industry standards and gives you the skills employers actually need.",
    color: "text-blue-400",
    bg: "bg-blue-500/20",
  },
];

export default function AboutPage() {
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
      {/* Premium Hero Section - Matching Homepage Style */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Premium Background Pattern */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80"
            alt="BrightPay Training Team"
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

        <Container className="relative z-10 py-20">
          <div className="max-w-5xl mx-auto text-center text-white">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 shadow-elegant">
              <Sparkles className="h-4 w-4 text-yellow-400" />
              <span className="text-sm font-medium tracking-wide">15+ Years of Payroll Training Excellence</span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
              Expert BrightPay
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 mt-2">
                Payroll Training
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-3xl mx-auto">
              We specialize in one-to-one BrightPay payroll training, helping you master UK payroll
              and launch your payroll career with expert guidance and complete career support.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/programmes"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-slate-900 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-all shadow-elegant hover:shadow-hover-elegant"
              >
                View Training Programme
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 text-white border-2 border-blue-500/50 rounded-xl font-semibold text-lg hover:bg-blue-700 hover:border-blue-400/50 transition-all shadow-elegant"
              >
                Book Free Consultation
              </Link>
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

      {/* Stats Section - Premium Glass Design */}
      <section className="section-padding bg-white relative -mt-1">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="relative group"
                  onMouseEnter={() => setHoveredStat(index)}
                  onMouseLeave={() => setHoveredStat(null)}
                >
                  {/* Ambient Glow */}
                  <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-blue-500/20 via-transparent to-indigo-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />

                  <div className="relative text-center p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50 border border-gray-200 shadow-elegant group-hover:shadow-hover-elegant transition-all duration-500 group-hover:-translate-y-2">
                    <div className="text-5xl font-bold bg-gradient-to-br from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-500">
                      {stat.number}{stat.suffix}
                    </div>
                    <div className="text-sm font-semibold text-gray-700">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Vision, Passion, Commitment - Dark Theme */}
      <section className="section-padding bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-float-delayed" />
        </div>

        <Container className="relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Our Story & Mission
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Transforming lives through expert payroll training, one student at a time
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {journey.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="group relative">
                  <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-blue-500/20 via-transparent to-indigo-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />

                  <div className="relative h-full p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-elegant group-hover:shadow-hover-elegant transition-all duration-500">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${item.bg} mb-6 group-hover:scale-110 transition-transform duration-500`}>
                      <Icon className={`h-8 w-8 ${item.color}`} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                    <p className="text-blue-100 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Why Choose Us - Light Theme with Images */}
      <section className="section-padding bg-gradient-to-br from-white via-blue-50/20 to-white relative overflow-hidden">
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-float" />

        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                Why Choose Our BrightPay Training?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Eight compelling reasons why students choose us for their payroll career launch
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {whyChooseUs.map((reason, index) => (
                <div key={index} className="group relative">
                  <div className="absolute -inset-px rounded-xl bg-gradient-to-br from-blue-500/10 via-transparent to-indigo-500/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />

                  <div className="relative flex items-start gap-4 p-6 bg-white border border-gray-200 rounded-xl shadow-elegant group-hover:shadow-hover-elegant transition-all duration-500">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center">
                        <CheckCircle2 className="h-5 w-5 text-white" />
                      </div>
                    </div>
                    <p className="text-lg text-gray-900 font-medium leading-relaxed">{reason}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Values Section - Premium Cards */}
      <section className="section-padding bg-gradient-to-br from-slate-50 via-white to-slate-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="group relative">
                  <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-blue-500/10 via-transparent to-indigo-500/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />

                  <div className="relative h-full p-8 bg-white border border-gray-200 rounded-2xl shadow-elegant group-hover:shadow-hover-elegant transition-all duration-500 hover:-translate-y-2">
                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${value.gradient} mb-6 group-hover:scale-110 transition-transform duration-500`}>
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* About Visuals Section */}
      <AboutVisuals />

      {/* Final CTA */}
      <section className="section-padding bg-gradient-to-br from-blue-600 to-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyan-300 rounded-full blur-3xl animate-float-delayed" />
        </div>

        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Ready to Start Your Payroll Career?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Launch your payroll career with our expert BrightPay training and personalized support
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/programmes"
                className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-white text-blue-600 font-bold text-lg rounded-xl shadow-elegant hover:shadow-hover-elegant hover:scale-105 transition-all duration-300"
              >
                View Full Curriculum
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-blue-700 text-white font-bold text-lg rounded-xl border-2 border-blue-400 hover:bg-blue-800 transition-all duration-300"
              >
                Book Free Consultation
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Core Values Section */}
      <CoreValues />
    </div>
  );
}
