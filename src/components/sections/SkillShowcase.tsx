"use client";

import { Container } from "@/components/ui";
import { CheckCircle2, Code, FileText, Users, TrendingUp, Award, Shield } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const skills = [
  {
    category: "BrightPay Software Mastery",
    icon: Code,
    color: "from-blue-500 to-cyan-500",
    items: [
      { name: "Payroll Processing", level: 100 },
      { name: "RTI Submissions", level: 100 },
      { name: "Software Navigation", level: 100 },
      { name: "Data Management", level: 95 },
    ],
  },
  {
    category: "UK Payroll Compliance",
    icon: Shield,
    color: "from-purple-500 to-pink-500",
    items: [
      { name: "HMRC Regulations", level: 95 },
      { name: "Tax Code Application", level: 100 },
      { name: "NI Calculations", level: 95 },
      { name: "Legal Compliance", level: 90 },
    ],
  },
  {
    category: "Pension Administration",
    icon: FileText,
    color: "from-emerald-500 to-green-500",
    items: [
      { name: "Auto-Enrolment", level: 100 },
      { name: "Contribution Calculations", level: 95 },
      { name: "Opt-Out Processing", level: 90 },
      { name: "Pension Schemes", level: 85 },
    ],
  },
  {
    category: "Professional Skills",
    icon: Users,
    color: "from-orange-500 to-red-500",
    items: [
      { name: "Client Communication", level: 90 },
      { name: "Problem Solving", level: 95 },
      { name: "Time Management", level: 90 },
      { name: "Attention to Detail", level: 100 },
    ],
  },
];

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const [animatedLevel, setAnimatedLevel] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const timeout = setTimeout(() => {
      setAnimatedLevel(level);
    }, delay);

    return () => clearTimeout(timeout);
  }, [isVisible, level, delay]);

  return (
    <div ref={ref} className="group">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-semibold text-gray-700">{name}</span>
        <span className="text-sm font-bold text-blue-600">{level}%</span>
      </div>
      <div className="h-3 bg-gray-100 rounded-full overflow-hidden shadow-inner">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full shadow-lg transition-all duration-1000 ease-out relative overflow-hidden"
          style={{ width: `${animatedLevel}%` }}
        >
          {/* Animated shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
        </div>
      </div>
    </div>
  );
}

export function SkillShowcase() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section className="section-padding bg-gradient-to-br from-white via-slate-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-1/4 left-10 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl animate-float-delayed" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <Container className="relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/80 backdrop-blur-sm border border-blue-200/50 mb-6">
              <Award className="h-4 w-4 text-blue-700" />
              <span className="text-sm font-semibold text-blue-900">Comprehensive Training Coverage</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Master Every Skill You Need
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 mt-2">
                For Payroll Success
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our comprehensive curriculum ensures you&apos;re 100% ready for professional payroll roles
            </p>
          </div>

          {/* Category Tabs */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <button
                  key={index}
                  onClick={() => setActiveCategory(index)}
                  className={`group relative p-6 rounded-2xl transition-all duration-500 ${
                    activeCategory === index
                      ? 'bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-elegant scale-105'
                      : 'bg-white border border-gray-200 text-gray-700 hover:border-blue-300 hover:shadow-md'
                  }`}
                >
                  {/* Ambient Glow */}
                  {activeCategory === index && (
                    <div className={`absolute -inset-px rounded-2xl bg-gradient-to-br ${skill.color} opacity-30 blur-xl`} />
                  )}

                  <div className="relative">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 transition-all duration-500 ${
                      activeCategory === index
                        ? 'bg-white/20'
                        : 'bg-blue-100'
                    }`}>
                      <Icon className={`h-6 w-6 ${
                        activeCategory === index ? 'text-white' : 'text-blue-600'
                      }`} />
                    </div>
                    <div className="font-bold text-sm text-center">{skill.category}</div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Skills Display */}
          <div className="relative">
            {/* Ambient Glow */}
            <div className={`absolute -inset-4 bg-gradient-to-br ${skills[activeCategory].color} opacity-10 blur-2xl rounded-3xl`} />

            <div className="relative bg-white rounded-3xl border border-gray-200 shadow-elegant p-12">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Left: Skills List */}
                <div>
                  <div className="flex items-center gap-4 mb-8">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${skills[activeCategory].color} text-white shadow-lg`}>
                      {(() => {
                        const Icon = skills[activeCategory].icon;
                        return <Icon className="h-8 w-8" />;
                      })()}
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900">{skills[activeCategory].category}</h3>
                      <p className="text-gray-600">Essential competencies covered</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {skills[activeCategory].items.map((item, index) => (
                      <SkillBar
                        key={index}
                        name={item.name}
                        level={item.level}
                        delay={index * 150}
                      />
                    ))}
                  </div>
                </div>

                {/* Right: Features & Benefits */}
                <div className="flex flex-col justify-center">
                  <div className="space-y-6">
                    <div className="group relative">
                      <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-emerald-500/10 to-green-500/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
                      <div className="relative p-6 bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl border border-emerald-200 group-hover:shadow-lg transition-shadow duration-500">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center">
                            <CheckCircle2 className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900 mb-2">Hands-On Practice</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                              Work on real payroll scenarios to build practical skills that employers value
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="group relative">
                      <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
                      <div className="relative p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border border-blue-200 group-hover:shadow-lg transition-shadow duration-500">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-blue-500 flex items-center justify-center">
                            <TrendingUp className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900 mb-2">Progressive Learning</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                              Start from basics and advance to complex topics at your own pace
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="group relative">
                      <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
                      <div className="relative p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border border-purple-200 group-hover:shadow-lg transition-shadow duration-500">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-purple-500 flex items-center justify-center">
                            <Award className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900 mb-2">Expert Instruction</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                              Learn from 15+ years of global payroll experience in one-to-one sessions
                            </p>
                          </div>
                        </div>
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
