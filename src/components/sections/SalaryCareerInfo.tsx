"use client";

import { Container } from "@/components/ui";
import { TrendingUp, Briefcase, Award, DollarSign, Target, BookOpen, AlertCircle } from "lucide-react";
import Image from "next/image";

const salaryRanges = [
  {
    role: "Entry-Level Payroll Administrator",
    salary: "£20,000 - £25,000",
    description: "Starting position for new payroll professionals with basic training",
    icon: BookOpen,
  },
  {
    role: "Payroll Officer",
    salary: "£25,000 - £32,000",
    description: "1-2 years experience, handling routine payroll processing",
    icon: Briefcase,
  },
  {
    role: "Senior Payroll Administrator",
    salary: "£32,000 - £42,000",
    description: "3-5 years experience, managing complex payroll scenarios",
    icon: Award,
  },
  {
    role: "Payroll Manager",
    salary: "£42,000 - £60,000+",
    description: "Leading payroll teams, strategic oversight and compliance",
    icon: Target,
  },
];

const marketDemand = [
  {
    stat: "15,000+",
    label: "Payroll Jobs in UK",
    description: "Active payroll positions across various industries"
  },
  {
    stat: "89%",
    label: "Employment Rate",
    description: "Of qualified payroll professionals secure roles within 6 months"
  },
  {
    stat: "£35,000",
    label: "Average UK Salary",
    description: "Mean salary for payroll professionals nationwide"
  },
  {
    stat: "23%",
    label: "Expected Growth",
    description: "Projected increase in payroll jobs by 2028"
  },
];

export function SalaryCareerInfo() {
  return (
    <section className="section-padding bg-gradient-to-br from-white via-blue-50/30 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-indigo-200/20 rounded-full blur-3xl animate-float-delayed" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100/80 backdrop-blur-sm border border-emerald-200/50 mb-6">
              <TrendingUp className="h-4 w-4 text-emerald-700" />
              <span className="text-sm font-semibold text-emerald-900">Career & Salary Information</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-6 leading-tight">
              Build a Lucrative Career in
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-blue-600 to-emerald-600 mt-2">
                UK Payroll Management
              </span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Discover the earning potential and career progression opportunities in the thriving UK payroll industry
            </p>
          </div>

          {/* Market Demand Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {marketDemand.map((item, index) => (
              <div key={index} className="group relative">
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-emerald-500/20 via-transparent to-blue-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />

                <div className="relative text-center p-6 rounded-2xl bg-white border border-gray-200 shadow-elegant group-hover:shadow-hover-elegant transition-all duration-500 group-hover:-translate-y-2">
                  <div className="text-4xl font-bold bg-gradient-to-br from-emerald-600 to-blue-600 bg-clip-text text-transparent mb-2">
                    {item.stat}
                  </div>
                  <div className="text-sm font-bold text-gray-900 mb-1">{item.label}</div>
                  <div className="text-xs text-gray-600">{item.description}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Salary Progression */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-gray-900 mb-3 text-center">
              Career Progression & Salary Expectations
            </h3>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Clear career path with substantial earning potential as you gain experience and expertise
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {salaryRanges.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="group relative">
                    <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-emerald-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />

                    <div className="relative h-full p-6 bg-white rounded-2xl border border-gray-200 shadow-elegant group-hover:shadow-hover-elegant transition-all duration-500">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-bold text-gray-900 mb-1">{item.role}</h4>
                          <div className="flex items-center gap-2 mb-2">
                            <DollarSign className="h-4 w-4 text-emerald-600" />
                            <span className="text-2xl font-bold text-emerald-600">{item.salary}</span>
                          </div>
                          <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Real World Context */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-br from-emerald-500/20 via-transparent to-blue-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative grid lg:grid-cols-2 gap-8 items-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 rounded-3xl overflow-hidden shadow-elegant">
              {/* Image Side */}
              <div className="relative h-80 lg:h-full">
                <Image
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
                  alt="Payroll career growth"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 to-slate-900/60" />

                {/* Floating Stats Badge */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl">
                    <div className="text-white font-bold text-lg mb-1">96% of Students</div>
                    <div className="text-blue-200 text-sm">Report salary increase after completing payroll training</div>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="p-8 lg:p-12 text-white">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
                  <AlertCircle className="h-4 w-4 text-yellow-400" />
                  <span className="text-sm font-semibold">Industry Insight</span>
                </div>

                <h3 className="text-3xl font-bold mb-6">
                  Why Salary Growth Matters Now
                </h3>

                <div className="space-y-4 text-blue-100 leading-relaxed">
                  <p>
                    <strong className="text-white">Cost of Living Crisis:</strong> With UK inflation and rising living costs,
                    a stable payroll career offers financial security. Entry-level payroll roles start at £20,000-£25,000,
                    significantly above minimum wage, with clear progression to £40,000+ within 3-5 years.
                  </p>

                  <p>
                    <strong className="text-white">Recession-Proof Profession:</strong> Every UK business needs payroll processing -
                    it&apos;s a legal requirement. Even during economic downturns, qualified payroll professionals remain in high demand
                    because companies cannot function without paying employees correctly and on time.
                  </p>

                  <p>
                    <strong className="text-white">Remote Work Opportunities:</strong> 73% of payroll positions now offer remote or
                    hybrid working, providing better work-life balance while maintaining excellent earning potential.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
