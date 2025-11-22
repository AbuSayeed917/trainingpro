"use client";

import { Container } from "@/components/ui";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { TrendingUp, Users, Award, Target, CheckCircle2, Star } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: 15000,
    suffix: "+",
    label: "Active Payroll Jobs",
    sublabel: "Across UK industries",
    color: "from-blue-500 to-cyan-500",
    description: "Growing demand for qualified professionals",
  },
  {
    icon: TrendingUp,
    value: 89,
    suffix: "%",
    label: "Employment Rate",
    sublabel: "Within 6 months",
    color: "from-emerald-500 to-green-500",
    description: "Our graduates find jobs quickly",
  },
  {
    icon: Award,
    value: 35000,
    prefix: "£",
    label: "Average Salary",
    sublabel: "UK payroll roles",
    color: "from-purple-500 to-pink-500",
    description: "Competitive earning potential",
  },
  {
    icon: Target,
    value: 100,
    suffix: "%",
    label: "Practical Training",
    sublabel: "Real-world projects",
    color: "from-orange-500 to-red-500",
    description: "Hands-on experience guaranteed",
  },
];

const achievements = [
  "15+ Years Training Excellence",
  "1:1 Personal Instruction",
  "Weekend Class Flexibility",
  "Complete Career Support",
];

export function PremiumStats() {
  return (
    <section className="section-padding bg-gradient-to-br from-white via-blue-50/30 to-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-cyan-200/20 to-pink-200/20 rounded-full blur-3xl animate-float-delayed" />
      </div>

      {/* Subtle Pattern */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(0 0 0) 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />

      <Container className="relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 mb-8 shadow-elegant">
              <Star className="h-4 w-4 text-blue-700 fill-blue-700" />
              <span className="text-sm font-semibold text-blue-900">Industry-Leading Results</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              Success By The Numbers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Real statistics that demonstrate the opportunity and our commitment to your success
            </p>
          </div>

          {/* Stats Grid - Premium Design */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="group relative"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Ambient Glow */}
                  <div className={`absolute -inset-3 bg-gradient-to-br ${stat.color} rounded-3xl opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-700`} />

                  <div className="relative h-full bg-white rounded-3xl border-2 border-gray-100 shadow-elegant group-hover:shadow-hover-elegant group-hover:border-gray-200 transition-all duration-500 overflow-hidden">
                    {/* Top Gradient Bar */}
                    <div className={`h-2 bg-gradient-to-r ${stat.color}`} />

                    <div className="p-8">
                      {/* Icon with Glow */}
                      <div className="mb-6">
                        <div className="relative inline-block">
                          <div className={`absolute -inset-3 bg-gradient-to-br ${stat.color} rounded-2xl opacity-20 blur-xl group-hover:blur-2xl transition-all duration-500`} />
                          <div className={`relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                            <Icon className="h-8 w-8" />
                          </div>
                        </div>
                      </div>

                      {/* Animated Counter */}
                      <div className="mb-4">
                        <div className={`text-5xl lg:text-6xl font-bold bg-gradient-to-br ${stat.color} bg-clip-text text-transparent mb-3`}>
                          <AnimatedCounter
                            end={stat.value}
                            prefix={stat.prefix}
                            suffix={stat.suffix}
                            duration={2500}
                            separator={stat.prefix === '£'}
                          />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">{stat.label}</h3>
                        <p className="text-sm text-gray-600 mb-3">{stat.sublabel}</p>
                        <p className="text-xs text-gray-500 leading-relaxed">{stat.description}</p>
                      </div>
                    </div>

                    {/* Bottom Accent - Reveals on Hover */}
                    <div className={`h-1 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Achievements Banner */}
          <div className="relative group">
            <div className="absolute -inset-px rounded-3xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 blur-2xl opacity-75" />

            <div className="relative bg-gradient-to-br from-white to-blue-50 border-2 border-gray-100 rounded-3xl p-8 lg:p-12 shadow-elegant">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center shadow-lg">
                      <CheckCircle2 className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-sm font-bold text-gray-900 leading-tight">{achievement}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
