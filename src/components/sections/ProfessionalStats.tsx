"use client";

import Image from "next/image";
import { Container } from "@/components/ui";
import { AnimatedCounter } from "@/components/ui";
import { TrendingUp, Users, Award, Briefcase, GraduationCap, Target } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: 500,
    suffix: "+",
    label: "Students Trained",
    sublabel: "Since establishment",
    color: "from-blue-500 to-cyan-500",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80",
  },
  {
    icon: Award,
    value: 95,
    suffix: "%",
    label: "Success Rate",
    sublabel: "Students securing roles",
    color: "from-indigo-500 to-purple-500",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80",
  },
  {
    icon: Briefcase,
    value: 15000,
    prefix: "£",
    label: "Average Starting Salary",
    sublabel: "Entry-level payroll roles",
    color: "from-purple-500 to-pink-500",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80",
  },
  {
    icon: TrendingUp,
    value: 6,
    label: "Weeks to Career Ready",
    sublabel: "Intensive training program",
    color: "from-pink-500 to-rose-500",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
  },
];

export function ProfessionalStats() {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-20 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-1/4 left-20 w-80 h-80 bg-indigo-100/20 rounded-full blur-3xl animate-float-delayed" />
      </div>

      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }} />

      <Container className="relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/80 backdrop-blur-sm border border-blue-200/50 mb-6">
            <Target className="h-4 w-4 text-blue-700" />
            <span className="text-sm font-semibold text-blue-900">Proven Track Record</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Results That Speak for Themselves
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Industry-leading success rates and outcomes that transform lives
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="group relative">
                {/* Ambient Glow */}
                <div className={`absolute -inset-px rounded-3xl bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500`} />

                {/* Card */}
                <div className="relative bg-gradient-to-br from-white to-gray-50/50 rounded-3xl p-8 border border-gray-200 shadow-elegant group-hover:shadow-hover-elegant transition-all duration-500 overflow-hidden">
                  {/* Background Image */}
                  <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500">
                    <Image
                      src={stat.image}
                      alt={stat.label}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>

                  {/* Content */}
                  <div className="relative">
                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} text-white mb-6 shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                      <Icon className="h-6 w-6" />
                    </div>

                    {/* Value */}
                    <div className={`text-5xl font-bold bg-gradient-to-br ${stat.color} bg-clip-text text-transparent mb-3 group-hover:scale-105 transition-transform duration-500`}>
                      <AnimatedCounter
                        end={stat.value}
                        prefix={stat.prefix}
                        suffix={stat.suffix}
                        duration={2500}
                        separator={stat.prefix === '£'}
                      />
                    </div>

                    {/* Label */}
                    <div className="font-bold text-gray-900 text-lg mb-2 group-hover:text-blue-900 transition-colors">
                      {stat.label}
                    </div>

                    {/* Sublabel */}
                    <div className="text-sm text-gray-600">
                      {stat.sublabel}
                    </div>

                    {/* Bottom Accent */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-3xl`} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200">
            <GraduationCap className="h-5 w-5 text-blue-700" />
            <span className="text-gray-900 font-semibold">Join our success story and transform your career in just 6 weeks</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
