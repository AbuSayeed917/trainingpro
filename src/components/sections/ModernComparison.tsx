"use client";

import { Container } from "@/components/ui";
import { Check, X, Zap, Target, Award, Users } from "lucide-react";
import { useState } from "react";

const scenarios = [
  {
    id: "newcomer",
    title: "Career Starter",
    description: "New to payroll industry",
    icon: Users,
  },
  {
    id: "professional",
    title: "Working Professional",
    description: "Already in accounts/HR",
    icon: Briefcase,
  },
];

const comparisonData = {
  newcomer: {
    without: {
      title: "Without BrightPay Training",
      features: [
        { text: "CV filtered out by ATS systems", status: "negative", impact: "high" },
        { text: "No interview opportunities", status: "negative", impact: "high" },
        { text: "Stuck in entry-level admin roles", status: "negative", impact: "medium" },
        { text: "£18-20k salary cap", status: "negative", impact: "high" },
        { text: "No career progression path", status: "negative", impact: "high" },
        { text: "Learning by trial and error", status: "negative", impact: "medium" },
        { text: "Risk of costly mistakes", status: "negative", impact: "high" },
      ],
      outcome: "Limited to minimum wage roles with no growth prospects",
      outcomeColor: "from-red-900 to-orange-900",
    },
    with: {
      title: "With BrightPay Training",
      features: [
        { text: "Professional qualification on CV", status: "positive", impact: "high" },
        { text: "Interview-ready with proven skills", status: "positive", impact: "high" },
        { text: "Start at £22-25k entry-level", status: "positive", impact: "high" },
        { text: "Clear path to £37k+ in 3 years", status: "positive", impact: "high" },
        { text: "Practical experience portfolio", status: "positive", impact: "medium" },
        { text: "Compliance and error prevention knowledge", status: "positive", impact: "high" },
        { text: "Industry connections and support", status: "positive", impact: "medium" },
      ],
      outcome: "Immediate employability with strong career trajectory",
      outcomeColor: "from-emerald-900 to-green-900",
    },
  },
  professional: {
    without: {
      title: "Current Situation",
      features: [
        { text: "Stuck at £24-28k for years", status: "negative", impact: "high" },
        { text: "No promotion opportunities", status: "negative", impact: "high" },
        { text: "Job at risk from automation", status: "negative", impact: "high" },
        { text: "Limited market value", status: "negative", impact: "medium" },
        { text: "Same responsibilities, same pay", status: "negative", impact: "high" },
        { text: "Career plateau reached", status: "negative", impact: "high" },
      ],
      outcome: "Stagnant career with declining real-terms income",
      outcomeColor: "from-red-900 to-orange-900",
    },
    with: {
      title: "After BrightPay Training",
      features: [
        { text: "Immediate £4-8k salary increase", status: "positive", impact: "high" },
        { text: "Internal promotion to payroll role", status: "positive", impact: "high" },
        { text: "Future-proof specialist skills", status: "positive", impact: "high" },
        { text: "3x more valuable to employer", status: "positive", impact: "high" },
        { text: "Path to £45-60k manager roles", status: "positive", impact: "high" },
        { text: "New career opportunities", status: "positive", impact: "medium" },
      ],
      outcome: "Career breakthrough with substantial salary growth",
      outcomeColor: "from-emerald-900 to-green-900",
    },
  },
};

import { Briefcase } from "lucide-react";

export function ModernComparison() {
  const [selectedScenario, setSelectedScenario] = useState<"newcomer" | "professional">("newcomer");
  const data = comparisonData[selectedScenario];

  return (
    <section className="section-padding bg-gradient-to-br from-white via-slate-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-float-delayed" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 mb-6">
              <Zap className="h-4 w-4 text-blue-700" />
              <span className="text-sm font-semibold text-blue-900">Interactive Comparison</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-6 leading-tight">
              See The Dramatic Difference
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 mt-2">
                Training Makes In Your Career
              </span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Choose your situation below to see personalized before & after scenarios
            </p>
          </div>

          {/* Scenario Selector */}
          <div className="flex justify-center gap-4 mb-12">
            {scenarios.map((scenario) => {
              const Icon = scenario.icon;
              return (
                <button
                  key={scenario.id}
                  onClick={() => setSelectedScenario(scenario.id as "newcomer" | "professional")}
                  className={`group relative flex items-center gap-4 px-8 py-5 rounded-2xl border-2 transition-all duration-300 ${
                    selectedScenario === scenario.id
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 border-blue-600 text-white shadow-elegant scale-105'
                      : 'bg-white border-gray-200 text-gray-700 hover:border-blue-300 hover:shadow-md'
                  }`}
                >
                  <div className={`p-3 rounded-xl transition-all duration-300 ${
                    selectedScenario === scenario.id
                      ? 'bg-white/20'
                      : 'bg-blue-100'
                  }`}>
                    <Icon className={`h-6 w-6 ${
                      selectedScenario === scenario.id ? 'text-white' : 'text-blue-600'
                    }`} />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-lg">{scenario.title}</div>
                    <div className={`text-sm ${
                      selectedScenario === scenario.id ? 'text-blue-100' : 'text-gray-500'
                    }`}>
                      {scenario.description}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Comparison Cards */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Without Training */}
            <div className="relative group">
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-red-500/20 to-orange-500/20 opacity-50 blur-xl" />

              <div className="relative bg-white border-2 border-red-200 rounded-3xl overflow-hidden shadow-elegant">
                {/* Header */}
                <div className={`bg-gradient-to-r ${data.without.outcomeColor} p-6 border-b-2 border-red-300`}>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-white/20">
                      <X className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{data.without.title}</h3>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/30 border border-red-300">
                    <span className="text-xs font-semibold text-red-100">Limited Opportunities</span>
                  </div>
                </div>

                {/* Features List */}
                <div className="p-8">
                  <div className="space-y-4 mb-8">
                    {data.without.features.map((feature, index) => (
                      <div
                        key={index}
                        className={`flex items-start gap-3 p-4 rounded-xl border-2 transition-all duration-300 ${
                          feature.impact === 'high'
                            ? 'border-red-200 bg-red-50'
                            : 'border-orange-200 bg-orange-50'
                        }`}
                      >
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500 flex items-center justify-center mt-0.5">
                          <X className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-gray-700 leading-relaxed font-medium">{feature.text}</span>
                      </div>
                    ))}
                  </div>

                  {/* Outcome */}
                  <div className="p-6 bg-gradient-to-br from-red-100 to-orange-100 rounded-2xl border-2 border-red-200">
                    <div className="text-sm font-semibold text-red-800 mb-2">Likely Outcome:</div>
                    <div className="text-red-900 font-bold text-lg leading-relaxed">{data.without.outcome}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* With Training */}
            <div className="relative group">
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-emerald-500/30 to-green-500/30 blur-2xl group-hover:blur-3xl transition-all duration-500" />

              <div className="relative bg-white border-2 border-emerald-300 rounded-3xl overflow-hidden shadow-elegant">
                {/* Header */}
                <div className={`bg-gradient-to-r ${data.with.outcomeColor} p-6 border-b-2 border-emerald-300`}>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-white/20">
                      <Check className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{data.with.title}</h3>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/30 border border-emerald-300">
                    <Zap className="h-3 w-3 text-emerald-100" />
                    <span className="text-xs font-semibold text-emerald-100">Career Breakthrough</span>
                  </div>
                </div>

                {/* Features List */}
                <div className="p-8">
                  <div className="space-y-4 mb-8">
                    {data.with.features.map((feature, index) => (
                      <div
                        key={index}
                        className={`flex items-start gap-3 p-4 rounded-xl border-2 transition-all duration-300 hover:scale-102 ${
                          feature.impact === 'high'
                            ? 'border-emerald-200 bg-emerald-50'
                            : 'border-green-200 bg-green-50'
                        }`}
                      >
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center mt-0.5">
                          <Check className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-gray-700 leading-relaxed font-medium">{feature.text}</span>
                      </div>
                    ))}
                  </div>

                  {/* Outcome */}
                  <div className="p-6 bg-gradient-to-br from-emerald-100 to-green-100 rounded-2xl border-2 border-emerald-300">
                    <div className="text-sm font-semibold text-emerald-800 mb-2">Expected Outcome:</div>
                    <div className="text-emerald-900 font-bold text-lg leading-relaxed">{data.with.outcome}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />

            <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-3xl p-12 text-center shadow-elegant">
              <div className="max-w-3xl mx-auto">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <Target className="h-8 w-8 text-white" />
                  <h3 className="text-3xl font-bold text-white">Make The Smart Choice</h3>
                </div>
                <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                  Don&apos;t let your career stagnate. Invest £999 now and unlock £80,000+ in additional earnings over 5 years
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/programmes"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-600 font-bold text-lg rounded-xl hover:bg-blue-50 transition-all shadow-elegant hover:shadow-hover-elegant hover:scale-105"
                  >
                    <Award className="h-5 w-5" />
                    View Training Programme
                  </a>
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-700 text-white border-2 border-white/30 font-bold text-lg rounded-xl hover:bg-blue-800 transition-all"
                  >
                    Book Free Consultation
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
