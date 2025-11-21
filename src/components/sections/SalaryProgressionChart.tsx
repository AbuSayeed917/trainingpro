"use client";

import { Container } from "@/components/ui";
import { TrendingUp, ArrowUpRight, Sparkles, Target } from "lucide-react";
import { useState } from "react";

const careerPath = [
  {
    year: "Start",
    role: "Entry-Level Administrator",
    salary: 22500,
    displaySalary: "£22.5k",
    description: "With BrightPay Training",
    color: "from-blue-500 to-cyan-500",
    barHeight: "25%",
  },
  {
    year: "Year 1-2",
    role: "Payroll Officer",
    salary: 28500,
    displaySalary: "£28.5k",
    description: "Real-world experience",
    color: "from-cyan-500 to-teal-500",
    barHeight: "40%",
  },
  {
    year: "Year 3-4",
    role: "Senior Administrator",
    salary: 37000,
    displaySalary: "£37k",
    description: "Complex payroll handling",
    color: "from-teal-500 to-emerald-500",
    barHeight: "60%",
  },
  {
    year: "Year 5+",
    role: "Payroll Manager",
    salary: 51000,
    displaySalary: "£51k",
    description: "Team leadership",
    color: "from-emerald-500 to-green-500",
    barHeight: "85%",
  },
  {
    year: "Year 8+",
    role: "Head of Payroll",
    salary: 68000,
    displaySalary: "£68k+",
    description: "Strategic oversight",
    color: "from-green-500 to-lime-500",
    barHeight: "100%",
  },
];

const comparisonData = {
  withTraining: {
    year1: 22500,
    year3: 37000,
    year5: 51000,
    totalEarnings: 185000,
  },
  withoutTraining: {
    year1: 18500,
    year3: 21000,
    year5: 24000,
    totalEarnings: 105000,
  },
};

export function SalaryProgressionChart() {
  const [hoveredBar, setHoveredBar] = useState<number | null>(null);
  const [showComparison, setShowComparison] = useState(false);

  const earningsGap = comparisonData.withTraining.totalEarnings - comparisonData.withoutTraining.totalEarnings;
  const roiMultiplier = Math.round(earningsGap / 999);

  return (
    <section className="section-padding bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-float-delayed" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '100px 100px'
      }} />

      <Container className="relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-md border border-cyan-400/30 mb-6">
              <TrendingUp className="h-4 w-4 text-cyan-400" />
              <span className="text-sm font-semibold text-cyan-100">Career Trajectory Visualization</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Your Earning Potential Over
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 mt-2">
                The Next 8 Years
              </span>
            </h2>
            <p className="text-xl text-blue-200 leading-relaxed max-w-3xl mx-auto">
              Data-driven projection based on actual UK payroll professional salaries
            </p>
          </div>

          {/* Interactive Bar Chart */}
          <div className="mb-20">
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-elegant">
              {/* Y-Axis Labels */}
              <div className="absolute left-4 top-12 bottom-12 flex flex-col justify-between text-xs text-blue-300 font-mono">
                <span>£70k</span>
                <span>£52.5k</span>
                <span>£35k</span>
                <span>£17.5k</span>
                <span>£0</span>
              </div>

              {/* Chart Area */}
              <div className="ml-12 mr-4">
                <div className="flex items-end justify-between gap-4 h-80 border-b-2 border-white/20 pb-4">
                  {careerPath.map((item, index) => (
                    <div
                      key={index}
                      className="flex-1 flex flex-col items-center gap-4 group cursor-pointer"
                      onMouseEnter={() => setHoveredBar(index)}
                      onMouseLeave={() => setHoveredBar(null)}
                    >
                      {/* Bar */}
                      <div className="relative w-full flex flex-col justify-end" style={{ height: '100%' }}>
                        {/* Hover Info Card */}
                        {hoveredBar === index && (
                          <div className="absolute -top-32 left-1/2 -translate-x-1/2 z-20 animate-in fade-in slide-in-from-bottom-4 duration-200">
                            <div className="relative bg-white rounded-2xl p-4 shadow-elegant min-w-[200px]">
                              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45" />
                              <div className="relative">
                                <div className="text-2xl font-bold text-gray-900 mb-1">{item.displaySalary}</div>
                                <div className="text-sm font-semibold text-gray-700 mb-1">{item.role}</div>
                                <div className="text-xs text-gray-600">{item.description}</div>
                                <div className="mt-2 pt-2 border-t border-gray-200">
                                  <div className="flex items-center gap-1 text-xs text-emerald-600 font-semibold">
                                    <ArrowUpRight className="h-3 w-3" />
                                    {index === 0 ? 'Starting point' : `+£${((item.salary - careerPath[0].salary) / 1000).toFixed(1)}k from start`}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Animated Bar */}
                        <div
                          className={`relative w-full rounded-t-xl bg-gradient-to-t ${item.color} transition-all duration-500 shadow-lg group-hover:shadow-2xl`}
                          style={{
                            height: hoveredBar === index ? `calc(${item.barHeight} + 8%)` : item.barHeight,
                          }}
                        >
                          {/* Shimmer Effect */}
                          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-xl" />

                          {/* Salary Label */}
                          <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-white font-bold text-sm whitespace-nowrap">
                            {item.displaySalary}
                          </div>
                        </div>
                      </div>

                      {/* X-Axis Labels */}
                      <div className="text-center pt-4">
                        <div className="text-xs font-bold text-white mb-1">{item.year}</div>
                        <div className="text-xs text-blue-300 hidden md:block">{item.role.split(' ')[0]}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Growth Indicator */}
                <div className="mt-8 flex items-center justify-center gap-3 p-4 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-xl border border-emerald-400/30">
                  <Sparkles className="h-5 w-5 text-emerald-400" />
                  <span className="text-white font-semibold">
                    <span className="text-emerald-400 text-xl font-bold">+£45.5k</span> salary growth potential in 8 years
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Comparison Toggle */}
          <div className="text-center mb-12">
            <button
              onClick={() => setShowComparison(!showComparison)}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl hover:bg-white/20 transition-all duration-300 shadow-elegant hover:shadow-hover-elegant"
            >
              <Target className="h-5 w-5 text-cyan-400 group-hover:rotate-90 transition-transform duration-500" />
              <span className="text-white font-semibold">
                {showComparison ? 'Hide' : 'Show'} ROI Comparison
              </span>
            </button>
          </div>

          {/* ROI Comparison - Animated Reveal */}
          {showComparison && (
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-500">
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {/* With Training */}
                <div className="relative group">
                  <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-emerald-500/30 via-cyan-500/30 to-blue-500/30 blur-xl group-hover:blur-2xl transition-all duration-500" />

                  <div className="relative bg-gradient-to-br from-emerald-900/50 to-cyan-900/50 backdrop-blur-xl border border-emerald-400/30 rounded-3xl p-8 shadow-elegant">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">With BrightPay Training</h3>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30">
                          <span className="text-xs font-semibold text-emerald-300">Recommended Path</span>
                        </div>
                      </div>
                      <div className="text-4xl">🚀</div>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                        <span className="text-blue-200">Year 1 Salary:</span>
                        <span className="text-white font-bold text-xl">£{(comparisonData.withTraining.year1 / 1000).toFixed(1)}k</span>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                        <span className="text-blue-200">Year 3 Salary:</span>
                        <span className="text-white font-bold text-xl">£{(comparisonData.withTraining.year3 / 1000).toFixed(0)}k</span>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                        <span className="text-blue-200">Year 5 Salary:</span>
                        <span className="text-white font-bold text-xl">£{(comparisonData.withTraining.year5 / 1000).toFixed(0)}k</span>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-white/20">
                      <div className="flex items-center justify-between">
                        <span className="text-emerald-300 font-semibold">5-Year Total Earnings:</span>
                        <span className="text-emerald-400 font-bold text-3xl">£{(comparisonData.withTraining.totalEarnings / 1000).toFixed(0)}k</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Without Training */}
                <div className="relative group opacity-75">
                  <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-gray-500/20 to-slate-500/20 blur-xl transition-all duration-500" />

                  <div className="relative bg-gradient-to-br from-gray-900/50 to-slate-900/50 backdrop-blur-xl border border-gray-600/30 rounded-3xl p-8 shadow-elegant">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">Without Training</h3>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 border border-orange-400/30">
                          <span className="text-xs font-semibold text-orange-300">Limited Growth</span>
                        </div>
                      </div>
                      <div className="text-4xl">🐌</div>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                        <span className="text-gray-300">Year 1 Salary:</span>
                        <span className="text-gray-200 font-bold text-xl">£{(comparisonData.withoutTraining.year1 / 1000).toFixed(1)}k</span>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                        <span className="text-gray-300">Year 3 Salary:</span>
                        <span className="text-gray-200 font-bold text-xl">£{(comparisonData.withoutTraining.year3 / 1000).toFixed(0)}k</span>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                        <span className="text-gray-300">Year 5 Salary:</span>
                        <span className="text-gray-200 font-bold text-xl">£{(comparisonData.withoutTraining.year5 / 1000).toFixed(0)}k</span>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-white/20">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300 font-semibold">5-Year Total Earnings:</span>
                        <span className="text-gray-200 font-bold text-3xl">£{(comparisonData.withoutTraining.totalEarnings / 1000).toFixed(0)}k</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ROI Summary */}
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/30 via-cyan-500/30 to-blue-500/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />

                <div className="relative bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-3xl p-12 shadow-elegant text-center">
                  <div className="mb-6">
                    <div className="text-white/80 text-lg font-semibold mb-2">Total Financial Advantage Over 5 Years</div>
                    <div className="text-white font-bold text-6xl mb-4">£{(earningsGap / 1000).toFixed(0)}k</div>
                    <div className="text-white/90 text-xl">
                      That&apos;s a <span className="font-bold text-yellow-300">{roiMultiplier}x return</span> on your £999 investment
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-8 pt-8 border-t border-white/20">
                    <div className="text-center">
                      <div className="text-white/80 text-sm mb-1">Investment</div>
                      <div className="text-white font-bold text-2xl">£999</div>
                    </div>
                    <div className="text-white text-4xl">→</div>
                    <div className="text-center">
                      <div className="text-white/80 text-sm mb-1">5-Year Gain</div>
                      <div className="text-yellow-300 font-bold text-2xl">£{(earningsGap / 1000).toFixed(0)}k</div>
                    </div>
                  </div>

                  <a
                    href="/programmes"
                    className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-white text-cyan-600 font-bold text-lg rounded-xl hover:bg-blue-50 transition-all shadow-elegant hover:shadow-hover-elegant hover:scale-105"
                  >
                    Start Your Journey
                    <ArrowUpRight className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
