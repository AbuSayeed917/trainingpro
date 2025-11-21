"use client";

import Image from "next/image";
import { Container } from "@/components/ui";
import { Award, Briefcase, Globe, GraduationCap, CheckCircle2, Star } from "lucide-react";

const expertise = [
  {
    icon: Briefcase,
    title: "15+ Years Experience",
    description: "Global payroll specialist with extensive experience across UK and international payroll systems",
  },
  {
    icon: Globe,
    title: "International Expertise",
    description: "Worked with multinational companies managing complex payroll operations across multiple jurisdictions",
  },
  {
    icon: GraduationCap,
    title: "Proven Track Record",
    description: "Successfully trained professionals who have gone on to secure payroll positions in leading UK companies",
  },
  {
    icon: Award,
    title: "Industry Knowledge",
    description: "Deep understanding of HMRC regulations, RTI, pensions, and UK payroll compliance requirements",
  },
];

const achievements = [
  "15+ years in global payroll management",
  "Expert in BrightPay software implementation",
  "Specializes in one-to-one personalized training",
  "Up-to-date with latest HMRC regulations",
];

export function TrainerShowcase() {
  return (
    <section className="section-padding bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 left-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl animate-float-slow" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '100px 100px'
      }} />

      <Container className="relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Trainer Image */}
            <div className="relative group order-2 lg:order-1">
              {/* Ambient Glow */}
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/30 via-cyan-500/20 to-indigo-500/30 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative rounded-3xl overflow-hidden shadow-elegant hover:shadow-hover-elegant transition-all duration-500">
                {/* Professional Trainer Image */}
                <div className="relative aspect-[4/5] bg-gradient-to-br from-slate-800 to-blue-900">
                  <Image
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80"
                    alt="Expert Payroll Trainer"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />

                  {/* Floating Badge */}
                  <div className="absolute top-6 right-6">
                    <div className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-sm font-semibold flex items-center gap-2">
                      <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                      Expert Trainer
                    </div>
                  </div>

                  {/* Stats Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl">
                        <div className="text-3xl font-bold text-white mb-1">15+</div>
                        <div className="text-sm text-blue-200">Years Experience</div>
                      </div>
                      <div className="text-center p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl">
                        <div className="text-3xl font-bold text-white mb-1">1:1</div>
                        <div className="text-sm text-blue-200">Personal Training</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl opacity-20 blur-2xl" />
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-3xl opacity-20 blur-2xl" />
            </div>

            {/* Right: Content */}
            <div className="order-1 lg:order-2 text-white">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
                <GraduationCap className="h-4 w-4 text-cyan-400" />
                <span className="text-sm font-semibold">Learn from the Best</span>
              </div>

              <h2 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">
                Expert Payroll
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 mt-2">
                  Training Specialist
                </span>
              </h2>

              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Learn directly from an experienced payroll professional with over 15 years of global experience.
                Get personalized one-to-one instruction tailored to your learning pace and career goals.
              </p>

              {/* Achievements List */}
              <div className="space-y-3 mb-8">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-1 p-1 rounded-full bg-emerald-500/20 border border-emerald-400/50">
                      <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                    </div>
                    <span className="text-lg text-blue-50 font-medium">{achievement}</span>
                  </div>
                ))}
              </div>

              {/* Expertise Cards */}
              <div className="grid sm:grid-cols-2 gap-4">
                {expertise.slice(0, 2).map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300">
                      <Icon className="h-6 w-6 text-cyan-400 mb-2" />
                      <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                      <p className="text-sm text-blue-200">{item.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Full Expertise Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
            {expertise.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="group relative">
                  <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-blue-500/20 via-transparent to-indigo-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />

                  <div className="relative h-full p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-500">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 text-white mb-4 group-hover:scale-110 transition-transform duration-500">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-blue-200 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
