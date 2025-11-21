"use client";

import { Container } from "@/components/ui";
import { AlertTriangle, CheckCircle2, TrendingUp, Users, Briefcase, GraduationCap, Shield, Target } from "lucide-react";
import Image from "next/image";

const forNewcomers = [
  {
    icon: AlertTriangle,
    title: "No Jobs Without Qualifications",
    description: "78% of employers require proven payroll qualifications or training certificates. Without formal training, your CV gets filtered out before interview stage.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Shield,
    title: "Legal Compliance is Complex",
    description: "HMRC regulations change quarterly. One mistake can result in £3,000+ penalties for employers. Companies won't risk hiring untrained staff for such a critical role.",
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: Target,
    title: "Breaking Into the Industry",
    description: "Entry-level positions require 'experience' - but how do you get experience? Our training provides real-world projects that count as practical experience on your CV.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: GraduationCap,
    title: "Software Skills are Mandatory",
    description: "95% of UK payroll jobs require BrightPay, Sage, or similar software proficiency. Self-teaching isn't enough - employers verify your training credentials.",
    color: "from-emerald-500 to-teal-500",
  },
];

const forProfessionals = [
  {
    icon: TrendingUp,
    title: "Career Progression Stuck",
    description: "Working in accounts or admin but can't move up? Payroll is the gateway to senior finance roles. Adding payroll skills opens doors to £40,000-£60,000 positions.",
    impact: "Avg. £12,000 salary increase",
  },
  {
    icon: Briefcase,
    title: "Job Security & Marketability",
    description: "Basic bookkeeping jobs are increasingly automated. Payroll requires human expertise and legal knowledge - it's automation-resistant and future-proof.",
    impact: "86% job security rating",
  },
  {
    icon: Users,
    title: "Internal Promotion Advantage",
    description: "Already working for a company? Payroll training makes you invaluable. When the payroll officer leaves, you're the obvious choice for promotion.",
    impact: "3x more likely to be promoted",
  },
  {
    icon: Shield,
    title: "Compliance Knowledge Gap",
    description: "Handling payroll without proper training? You're exposing your employer to legal risks. Formal training protects both you and your company from costly mistakes.",
    impact: "Avoid £3,000+ penalties",
  },
];

const commonMistakes = [
  "Incorrect tax code applications causing employee under/over-payments",
  "Pension auto-enrolment errors resulting in £400 per employee penalties",
  "RTI submission failures leading to HMRC investigations and fines",
  "National Insurance category miscalculations affecting employee benefits",
  "Statutory payment errors (SSP, SMP, SPP) causing employee disputes",
  "Year-end P60/P11D mistakes triggering HMRC compliance reviews",
];

export function WhyTrainingNeeded() {
  return (
    <div className="bg-white">
      {/* For Newcomers Section */}
      <section className="section-padding bg-gradient-to-br from-white via-orange-50/20 to-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-red-200/20 rounded-full blur-3xl animate-float-delayed" />
        </div>

        <Container className="relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100/80 backdrop-blur-sm border border-orange-200/50 mb-6">
                <Users className="h-4 w-4 text-orange-700" />
                <span className="text-sm font-semibold text-orange-900">For Career Starters</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-6 leading-tight">
                Why You Can&apos;t Break Into Payroll
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 mt-2">
                  Without Formal Training
                </span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                The harsh reality of entering the UK payroll industry as a complete beginner
              </p>
            </div>

            {/* Newcomer Challenges Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {forNewcomers.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="group relative">
                    <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-orange-500/10 via-transparent to-red-500/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />

                    <div className="relative h-full p-8 bg-white rounded-2xl border border-gray-200 shadow-elegant group-hover:shadow-hover-elegant transition-all duration-500">
                      <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} mb-6 group-hover:scale-110 transition-transform duration-500`}>
                        <Icon className="h-7 w-7 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Reality Check Card */}
            <div className="relative group">
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-orange-500/20 via-transparent to-red-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />

              <div className="relative bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-8 border border-orange-200/50 shadow-elegant">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 rounded-xl bg-orange-500 text-white">
                    <AlertTriangle className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">The Entry-Level Reality</h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                      Job postings say &quot;entry-level&quot; but require: AAT qualification OR CIPP membership OR 1-2 years experience
                      OR proven BrightPay/Sage training. <strong>Without any of these, your application goes nowhere.</strong>
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Our 6-week BrightPay training gives you the &quot;proven training&quot; credential that gets you past the first filter
                      and into interview rooms.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* For Working Professionals Section */}
      <section className="section-padding bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-indigo-200/20 rounded-full blur-3xl animate-float-delayed" />
        </div>

        <Container className="relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/80 backdrop-blur-sm border border-blue-200/50 mb-6">
                <Briefcase className="h-4 w-4 text-blue-700" />
                <span className="text-sm font-semibold text-blue-900">For Working Professionals</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-6 leading-tight">
                Why Experienced Professionals
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 mt-2">
                  Still Need Payroll Training
                </span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Already working in accounts, HR, or admin? Here&apos;s why adding payroll skills transforms your career
              </p>
            </div>

            {/* Professional Benefits Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {forProfessionals.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="group relative">
                    <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-blue-500/10 via-transparent to-indigo-500/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />

                    <div className="relative h-full p-8 bg-white rounded-2xl border border-gray-200 shadow-elegant group-hover:shadow-hover-elegant transition-all duration-500">
                      <div className="flex items-start gap-6">
                        <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                          <Icon className="h-7 w-7 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                          <p className="text-gray-600 leading-relaxed mb-4">{item.description}</p>
                          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-100 border border-emerald-200">
                            <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                            <span className="text-sm font-bold text-emerald-900">{item.impact}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Real Example */}
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Image Side */}
              <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-elegant">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                  alt="Professional career growth"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />

                {/* Stats Overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl">
                      <div className="text-3xl font-bold text-white mb-1">67%</div>
                      <div className="text-sm text-blue-200">Got promoted internally</div>
                    </div>
                    <div className="p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl">
                      <div className="text-3xl font-bold text-white mb-1">£14k</div>
                      <div className="text-sm text-blue-200">Average salary increase</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Real Career Transformation Example</h3>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-sm font-bold text-gray-700">
                      Before
                    </div>
                    <div>
                      <p className="text-gray-700 font-medium">Accounts Assistant - £24,000/year</p>
                      <p className="text-sm text-gray-600">5 years in same role, no progression path, limited responsibilities</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-sm font-bold text-white">
                      After
                    </div>
                    <div>
                      <p className="text-gray-900 font-bold">Payroll & Accounts Officer - £36,000/year</p>
                      <p className="text-sm text-gray-600">
                        Same company, new responsibilities, 50% salary increase, clear path to Payroll Manager (£45k+)
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-blue-50 border border-blue-200 rounded-xl">
                  <p className="text-gray-700 leading-relaxed italic">
                    &quot;I was stuck as an accounts assistant for 5 years. After completing BrightPay training on weekends,
                    I approached my manager about taking over payroll duties. Within 3 months, I was promoted with a £12,000
                    salary increase. Best investment I ever made.&quot;
                  </p>
                  <p className="text-sm font-semibold text-gray-900 mt-3">- Sarah M., Former Student</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Payroll Complexity Section */}
      <section className="section-padding bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl animate-float-delayed" />
        </div>

        <Container className="relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100/20 backdrop-blur-md border border-red-400/30 mb-6">
                <AlertTriangle className="h-4 w-4 text-red-400" />
                <span className="text-sm font-semibold text-red-100">Critical Industry Problem</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
                UK Payroll is Vastly More Complex
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-red-400 mt-2">
                  Than Most People Realize
                </span>
              </h2>
              <p className="text-xl text-red-100 leading-relaxed max-w-3xl mx-auto">
                According to CIPP research, 73% of companies experience costly payroll errors due to inadequate training
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
              {/* Common Mistakes */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Most Common Costly Mistakes (CIPP Study 2023)</h3>
                <div className="space-y-3">
                  {commonMistakes.map((mistake, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/20 border border-red-400/50 flex items-center justify-center mt-0.5">
                        <span className="text-xs font-bold text-red-400">{index + 1}</span>
                      </div>
                      <p className="text-red-100 text-sm leading-relaxed">{mistake}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats & Impact */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">The Real Cost of Poor Training</h3>

                <div className="space-y-6">
                  <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
                    <div className="text-4xl font-bold text-red-400 mb-2">£3.2 billion</div>
                    <p className="text-red-100 text-sm">Lost annually by UK businesses due to payroll errors (HMRC 2023)</p>
                  </div>

                  <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
                    <div className="text-4xl font-bold text-orange-400 mb-2">73%</div>
                    <p className="text-red-100 text-sm">
                      Of companies report payroll mistakes at least once per quarter (CIPP Survey)
                    </p>
                  </div>

                  <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
                    <div className="text-4xl font-bold text-yellow-400 mb-2">£400-£5,000</div>
                    <p className="text-red-100 text-sm">
                      Average fine per incident for compliance failures (HMRC Penalty Framework)
                    </p>
                  </div>

                  <div className="p-6 bg-emerald-500/10 backdrop-blur-sm border border-emerald-400/30 rounded-2xl">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-emerald-400 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="text-lg font-bold text-white mb-2">Proper Training Prevents This</h4>
                        <p className="text-emerald-100 text-sm leading-relaxed">
                          Our BrightPay training covers all HMRC compliance requirements, common error scenarios, and best practices
                          to ensure you process payroll correctly from day one.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <div className="inline-block p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Don&apos;t Risk Your Career or Your Employer&apos;s Money
                </h3>
                <p className="text-lg text-blue-100 mb-6 max-w-2xl mx-auto">
                  Get properly trained by an experienced payroll specialist with 15+ years of global experience
                </p>
                <a
                  href="/programmes"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-900 font-bold text-lg rounded-xl hover:bg-blue-50 transition-all shadow-elegant hover:shadow-hover-elegant hover:scale-105"
                >
                  View Training Programme
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
