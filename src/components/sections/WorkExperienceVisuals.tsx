"use client";

import Image from "next/image";
import { Container } from "@/components/ui";
import { Briefcase, Users, TrendingUp, Building2, Award, Target } from "lucide-react";

const workplaceHighlights = [
  {
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&q=80",
    title: "Professional Payroll Departments",
    description: "Work alongside experienced payroll teams in established companies",
    icon: Building2,
    badge: "Corporate Environment",
    overlay: "from-blue-600/90 to-blue-900/90"
  },
  {
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&q=80",
    title: "Real-World BrightPay Experience",
    description: "Apply your training using actual BrightPay software in live payroll processing",
    icon: Target,
    badge: "Hands-On Practice",
    overlay: "from-indigo-600/90 to-indigo-900/90"
  },
  {
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&q=80",
    title: "Build Professional Networks",
    description: "Connect with industry professionals and expand your career opportunities",
    icon: Users,
    badge: "Networking",
    overlay: "from-purple-600/90 to-purple-900/90"
  },
  {
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=1200&q=80",
    title: "Career Development Support",
    description: "Receive mentorship and guidance throughout your placement journey",
    icon: TrendingUp,
    badge: "Mentorship",
    overlay: "from-pink-600/90 to-pink-900/90"
  }
];

const experienceStats = [
  {
    icon: Briefcase,
    stat: "100+",
    label: "Placement Partners",
    description: "UK-wide network",
    gradient: "from-blue-500 to-indigo-500"
  },
  {
    icon: Users,
    stat: "6-12",
    label: "Week Placements",
    description: "Flexible duration",
    gradient: "from-indigo-500 to-purple-500"
  },
  {
    icon: Award,
    stat: "Real",
    label: "Payroll Projects",
    description: "Practical experience",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: TrendingUp,
    stat: "Career",
    label: "Launch Support",
    description: "End-to-end guidance",
    gradient: "from-pink-500 to-rose-500"
  }
];

export function WorkExperienceVisuals() {
  return (
    <section className="section-padding bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl animate-float-delayed" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Your Professional
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 mt-2">
                Work Experience Journey
              </span>
            </h2>

            <p className="text-xl text-gray-600 leading-relaxed">
              Gain invaluable real-world experience through our carefully curated placement programme
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {experienceStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="group relative">
                  {/* Ambient Glow */}
                  <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-blue-500/20 via-transparent to-indigo-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />

                  <div className="relative bg-white rounded-2xl p-6 border border-gray-200 shadow-elegant group-hover:shadow-hover-elegant transition-all duration-500 group-hover:-translate-y-2 text-center">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${stat.gradient} mb-4 group-hover:scale-110 transition-transform duration-500`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-1">{stat.stat}</div>
                    <div className="font-semibold text-gray-900 mb-1">{stat.label}</div>
                    <div className="text-sm text-gray-600">{stat.description}</div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Workplace Highlights Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {workplaceHighlights.map((highlight, index) => {
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

                  <div className="relative h-full bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-elegant group-hover:shadow-hover-elegant transition-all duration-500">
                    {/* Image */}
                    <div className="relative h-80 overflow-hidden">
                      <Image
                        src={highlight.image}
                        alt={highlight.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${highlight.overlay}`} />

                      {/* Icon Badge */}
                      <div className="absolute top-6 right-6">
                        <div className="p-3 rounded-xl bg-white/20 backdrop-blur-md border border-white/40">
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                      </div>

                      {/* Badge */}
                      <div className="absolute top-6 left-6">
                        <div className="px-4 py-2 bg-white/20 backdrop-blur-md border border-white/40 rounded-full">
                          <span className="text-sm font-semibold text-white">{highlight.badge}</span>
                        </div>
                      </div>

                      {/* Content Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-8">
                        <h3 className="text-2xl font-bold text-white mb-3">
                          {highlight.title}
                        </h3>
                        <p className="text-white/90 leading-relaxed">
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Feature Showcase */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/20 via-transparent to-indigo-500/20 rounded-3xl blur-2xl" />

            <div className="relative bg-white rounded-3xl p-8 md:p-12 border border-gray-200 shadow-elegant">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left: Large Featured Image */}
                <div className="relative">
                  <div className="relative rounded-2xl overflow-hidden shadow-elegant">
                    <div className="relative aspect-[4/3]">
                      <Image
                        src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80"
                        alt="Professional team collaboration"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent" />
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl opacity-20 blur-2xl" />
                  <div className="absolute -top-4 -left-4 w-32 h-32 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-3xl opacity-20 blur-2xl" />
                </div>

                {/* Right: Content */}
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">
                    Launch Your Payroll Career with Confidence
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-blue-100 border border-blue-200 flex-shrink-0">
                        <Building2 className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Real Business Environments</h4>
                        <p className="text-sm text-gray-600">Work in professional payroll departments using BrightPay software</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-indigo-100 border border-indigo-200 flex-shrink-0">
                        <Users className="h-5 w-5 text-indigo-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Expert Supervision</h4>
                        <p className="text-sm text-gray-600">Learn from experienced payroll professionals throughout your placement</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-purple-100 border border-purple-200 flex-shrink-0">
                        <Target className="h-5 w-5 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Practical Skills Development</h4>
                        <p className="text-sm text-gray-600">Gain hands-on experience processing real payroll scenarios</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-pink-100 border border-pink-200 flex-shrink-0">
                        <TrendingUp className="h-5 w-5 text-pink-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Career Advancement</h4>
                        <p className="text-sm text-gray-600">Boost your CV and increase employability with practical experience</p>
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
