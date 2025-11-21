"use client";

import { useState } from "react";
import { CheckCircle2, ArrowRight, Sparkles, Briefcase, Award, GraduationCap, Clock, TrendingUp, Users } from "lucide-react";
import { Container } from "@/components/ui";

const desires = [
  {
    want: "Break into the payroll industry",
    weWill: "Provide expert one-to-one mentorship from a seasoned payroll specialist with 15+ years of global experience",
    icon: Briefcase,
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    want: "Master industry-standard software",
    weWill: "Deliver comprehensive BrightPay training with real-world payroll processing scenarios and hands-on projects",
    icon: Award,
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    want: "Complete professional training",
    weWill: "Complete our comprehensive 6-week programme and gain practical payroll skills recognized by UK employers",
    icon: GraduationCap,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    want: "Balance training with work commitments",
    weWill: "Offer flexible weekend classes designed specifically for working professionals and busy schedules",
    icon: Clock,
    gradient: "from-pink-500 to-rose-500",
  },
  {
    want: "Secure your first payroll position",
    weWill: "Provide comprehensive career support including CV optimization, job search assistance, and interview coaching",
    icon: TrendingUp,
    gradient: "from-rose-500 to-orange-500",
  },
  {
    want: "Receive personalized attention",
    weWill: "Maintain small class sizes (maximum 4 students) ensuring tailored instruction at your own learning pace",
    icon: Users,
    gradient: "from-orange-500 to-amber-500",
  },
];

export function WantToWeWill() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="section-padding bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl animate-float-slow" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '100px 100px'
      }} />

      <Container className="relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6 shadow-elegant">
            <Sparkles className="h-4 w-4 text-yellow-400" />
            <span className="text-sm font-semibold text-white">Your Ambition, Our Expertise</span>
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Your Career Goals.
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 mt-2">
              Our Professional Solutions.
            </span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Whatever your payroll career aspiration, we have the expertise, resources, and commitment to make it happen.
          </p>
        </div>

        {/* Interactive Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {desires.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Ambient Glow */}
                <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-blue-500/30 via-cyan-500/20 to-indigo-500/30 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />

                <div className="relative h-full p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-elegant group-hover:shadow-hover-elegant group-hover:bg-white/10 transition-all duration-500">
                  {/* Professional Icon with Gradient */}
                  <div className="mb-8">
                    <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${item.gradient} shadow-elegant group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                      <Icon className="h-10 w-10 text-white" />
                    </div>
                  </div>

                  {/* Your Goal */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="text-xs font-bold text-blue-300 uppercase tracking-widest">Your Goal</div>
                    </div>
                    <h3 className="text-2xl font-bold text-white leading-tight">
                      {item.want}
                    </h3>
                  </div>

                  {/* Arrow Animation */}
                  <div className="flex justify-center mb-6">
                    <div className={`transition-all duration-500 ${hoveredIndex === index ? 'translate-y-3 scale-110' : ''}`}>
                      <div className="p-3 rounded-full bg-cyan-500/20 border border-cyan-400/30">
                        <ArrowRight className="h-6 w-6 text-cyan-400 rotate-90" />
                      </div>
                    </div>
                  </div>

                  {/* Our Solution */}
                  <div className="relative">
                    <div className="flex items-center gap-2 mb-3">
                      <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                      <div className="text-xs font-bold text-emerald-300 uppercase tracking-widest">Our Solution</div>
                    </div>
                    <p className="text-base text-blue-50 leading-relaxed">
                      {item.weWill}
                    </p>
                  </div>

                  {/* Decorative corner accent */}
                  <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-white/20 rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <a
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 px-10 py-5 text-lg font-bold bg-white text-blue-900 rounded-2xl shadow-elegant hover:shadow-hover-elegant hover:scale-105 transition-all duration-300"
            >
              <span>Book Your Free Consultation</span>
              <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/programmes"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 text-lg font-bold bg-blue-600/80 backdrop-blur-md border-2 border-white/30 text-white rounded-2xl hover:bg-blue-700 transition-all duration-300"
            >
              Explore Full Curriculum
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
