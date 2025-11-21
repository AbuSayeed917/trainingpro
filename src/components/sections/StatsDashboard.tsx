"use client";

import { Container } from "@/components/ui";
import { TrendingUp, Users, Award, Target, Briefcase, DollarSign, Clock, CheckCircle2 } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const primaryStats = [
  {
    icon: Users,
    value: 15000,
    suffix: "+",
    label: "Active Payroll Jobs",
    sublabel: "Across UK industries",
    color: "from-blue-500 to-cyan-500",
    trend: "+12% YoY",
  },
  {
    icon: TrendingUp,
    value: 89,
    suffix: "%",
    label: "Employment Success",
    sublabel: "Within 6 months",
    color: "from-emerald-500 to-green-500",
    trend: "Industry avg: 67%",
  },
  {
    icon: DollarSign,
    value: 35000,
    prefix: "£",
    label: "Average UK Salary",
    sublabel: "Payroll professionals",
    color: "from-purple-500 to-pink-500",
    trend: "+8.5% from 2023",
  },
  {
    icon: Target,
    value: 23,
    suffix: "%",
    label: "Growth Projection",
    sublabel: "By 2028",
    color: "from-orange-500 to-amber-500",
    trend: "Source: ONS",
  },
];

const secondaryStats = [
  {
    icon: Clock,
    value: "6",
    label: "Weeks to Launch Your Career",
    description: "Complete training programme",
  },
  {
    icon: Award,
    value: "15+",
    label: "Years Trainer Experience",
    description: "Global payroll expertise",
  },
  {
    icon: Briefcase,
    value: "73%",
    label: "Remote Work Available",
    description: "Hybrid opportunities",
  },
  {
    icon: CheckCircle2,
    value: "96%",
    label: "Student Satisfaction",
    description: "Would recommend",
  },
];

function useCountUp(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [end, duration, isVisible]);

  return { count, ref };
}

function StatCard({ stat, index }: { stat: typeof primaryStats[0]; index: number }) {
  const { count, ref } = useCountUp(stat.value, 2500);
  const Icon = stat.icon;

  return (
    <div
      ref={ref}
      className="group relative"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Ambient Glow */}
      <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-500" />

      <div className="relative h-full bg-white rounded-3xl border border-gray-200 shadow-elegant group-hover:shadow-hover-elegant transition-all duration-500 overflow-hidden">
        {/* Top Gradient Bar */}
        <div className={`h-2 bg-gradient-to-r ${stat.color}`} />

        <div className="p-8">
          {/* Icon */}
          <div className="mb-6">
            <div className="relative inline-block">
              <div className={`absolute -inset-2 bg-gradient-to-br ${stat.color} rounded-2xl opacity-20 blur-lg`} />
              <div className={`relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                <Icon className="h-8 w-8" />
              </div>
            </div>
          </div>

          {/* Value */}
          <div className="mb-4">
            <div className={`text-5xl font-bold bg-gradient-to-br ${stat.color} bg-clip-text text-transparent mb-2`}>
              {stat.prefix}{count.toLocaleString()}{stat.suffix}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">{stat.label}</h3>
            <p className="text-sm text-gray-600">{stat.sublabel}</p>
          </div>

          {/* Trend Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 border border-emerald-200">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-semibold text-emerald-800">{stat.trend}</span>
          </div>
        </div>

        {/* Bottom Accent */}
        <div className={`h-1 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      </div>
    </div>
  );
}

export function StatsDashboard() {
  return (
    <section className="section-padding bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-cyan-200/30 to-pink-200/30 rounded-full blur-3xl animate-float-delayed" />
      </div>

      {/* Subtle Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(0 0 0) 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />

      <Container className="relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 mb-6">
              <TrendingUp className="h-4 w-4 text-blue-700" />
              <span className="text-sm font-semibold text-blue-900">Industry Insights</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-6 leading-tight">
              UK Payroll Market
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 mt-2">
                By The Numbers
              </span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Real-time data showing the massive opportunity in UK payroll careers
            </p>
          </div>

          {/* Primary Stats Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {primaryStats.map((stat, index) => (
              <StatCard key={index} stat={stat} index={index} />
            ))}
          </div>

          {/* Secondary Stats */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 rounded-3xl blur-2xl" />

            <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-6 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-3xl p-8 shadow-elegant">
              {secondaryStats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="group text-center p-6 rounded-2xl hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50 transition-all duration-300"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                    <div className="text-sm font-bold text-gray-900 mb-1">{stat.label}</div>
                    <div className="text-xs text-gray-600">{stat.description}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom Insight Card */}
          <div className="mt-16 relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-blue-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />

            <div className="relative bg-gradient-to-br from-white to-blue-50 border border-blue-200 rounded-3xl p-10 shadow-elegant">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-br from-emerald-500/30 to-cyan-500/30 rounded-full blur-2xl" />
                    <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center shadow-elegant">
                      <TrendingUp className="h-12 w-12 text-white" />
                    </div>
                  </div>
                </div>

                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Perfect Time to Enter the Industry
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    With 15,000+ active jobs, 89% employment rate, and £35k average salary, the UK payroll industry
                    is booming. Companies are desperately seeking qualified professionals, and BrightPay is the #1
                    software skill employers demand.
                  </p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold shadow-lg">
                    <Award className="h-4 w-4" />
                    <span>Industry-validated training that gets results</span>
                  </div>
                </div>

                <div className="flex-shrink-0">
                  <a
                    href="/programmes"
                    className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all shadow-elegant hover:shadow-hover-elegant hover:scale-105"
                  >
                    Start Training
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
