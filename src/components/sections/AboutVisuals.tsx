"use client";

import Image from "next/image";
import { Container } from "@/components/ui";
import { Building2, Users, Award, Target } from "lucide-react";

const visualHighlights = [
  {
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
    title: "Modern Training Facilities",
    description: "State-of-the-art learning environment equipped with latest BrightPay software",
    icon: Building2,
    stats: "Professional Setup"
  },
  {
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80",
    title: "Expert-Led Training",
    description: "One-to-one personalized instruction from 15+ years experienced payroll specialist",
    icon: Users,
    stats: "15+ Years Experience"
  },
  {
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80",
    title: "Hands-On Learning",
    description: "Practice with real payroll scenarios using actual BrightPay software",
    icon: Target,
    stats: "Real-World Training"
  },
  {
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80",
    title: "Career Success",
    description: "Comprehensive support from training through to job placement assistance",
    icon: Award,
    stats: "Career Support"
  }
];

export function AboutVisuals() {
  return (
    <section className="section-padding bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 left-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-float-delayed" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '100px 100px'
      }} />

      <Container className="relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight">
              Why Choose
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 mt-2">
                Our Training Programme
              </span>
            </h2>

            <p className="text-xl text-blue-100 leading-relaxed">
              Experience professional payroll training in a supportive, expert-led environment
            </p>
          </div>

          {/* Visual Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {visualHighlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <div
                  key={index}
                  className="group relative"
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  {/* Ambient Glow */}
                  <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-blue-500/20 via-transparent to-indigo-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />

                  <div className="relative h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-500">
                    {/* Image */}
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={highlight.image}
                        alt={highlight.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />

                      {/* Icon Badge */}
                      <div className="absolute top-6 right-6">
                        <div className="p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20">
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                      </div>

                      {/* Stats Badge */}
                      <div className="absolute bottom-6 left-6">
                        <div className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
                          <span className="text-sm font-semibold text-white">{highlight.stats}</span>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                        {highlight.title}
                      </h3>
                      <p className="text-blue-100 leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Feature Showcase */}
          <div className="mt-16 relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/20 via-transparent to-indigo-500/20 rounded-3xl blur-2xl" />

            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left: Large Featured Image */}
                <div className="relative">
                  <div className="relative rounded-2xl overflow-hidden shadow-elegant">
                    <div className="relative aspect-[4/3]">
                      <Image
                        src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80"
                        alt="Professional training session"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl opacity-20 blur-2xl" />
                  <div className="absolute -top-4 -left-4 w-32 h-32 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-3xl opacity-20 blur-2xl" />
                </div>

                {/* Right: Content */}
                <div className="text-white">
                  <h3 className="text-3xl font-bold mb-6">
                    Your Success is Our Priority
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-emerald-500/20 border border-emerald-400/50 flex-shrink-0">
                        <Building2 className="h-5 w-5 text-emerald-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Professional Environment</h4>
                        <p className="text-sm text-blue-200">Modern facilities with latest payroll software and tools</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-blue-500/20 border border-blue-400/50 flex-shrink-0">
                        <Users className="h-5 w-5 text-blue-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Experienced Trainer</h4>
                        <p className="text-sm text-blue-200">Learn from 15+ years payroll specialist with global experience</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-purple-500/20 border border-purple-400/50 flex-shrink-0">
                        <Target className="h-5 w-5 text-purple-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Practical Focus</h4>
                        <p className="text-sm text-blue-200">Real-world scenarios and hands-on BrightPay training</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-pink-500/20 border border-pink-400/50 flex-shrink-0">
                        <Award className="h-5 w-5 text-pink-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Career Support</h4>
                        <p className="text-sm text-blue-200">Job placement assistance and ongoing career guidance</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
