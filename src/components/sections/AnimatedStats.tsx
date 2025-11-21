"use client";

import { Container } from "@/components/ui";
import { useCountUp } from "@/hooks/useCountUp";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";

const stats = [
  {
    end: 6,
    prefix: "",
    suffix: "",
    label: "Weeks",
    description: "Fast-track training",
  },
  {
    end: 15,
    prefix: "",
    suffix: "+",
    label: "Years Experience",
    description: "Expert trainer",
  },
  {
    end: 9,
    prefix: "",
    suffix: "",
    label: "Modules",
    description: "Comprehensive curriculum",
  },
  {
    end: 4,
    prefix: "1:",
    suffix: "",
    label: "Training",
    description: "Personal instruction",
  },
];

function StatCard({ end, prefix = "", suffix = "", label, description }: typeof stats[0]) {
  const { count, ref } = useCountUp({ end, prefix, suffix, duration: 2500 });

  return (
    <div ref={ref} className="group text-center p-8 rounded-2xl bg-white border border-gray-100 shadow-elegant hover:shadow-hover-elegant transition-all duration-500 hover:-translate-y-2">
      {/* Ambient Glow on Hover */}
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-blue-500/10 via-transparent to-indigo-500/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />

      <div className="relative">
        <div className="text-5xl sm:text-6xl font-bold bg-gradient-to-br from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-500">
          {count}
        </div>
        <div className="text-xl font-bold text-gray-900 mb-2">{label}</div>
        <div className="text-sm text-gray-600 font-medium">{description}</div>
      </div>
    </div>
  );
}

export function AnimatedStats() {
  return (
    <section className="section-padding bg-gradient-to-br from-white via-blue-50/20 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/3 left-10 w-80 h-80 bg-indigo-200/20 rounded-full blur-3xl animate-float-delayed" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <Container className="relative z-10">
        <FadeInUp>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/80 backdrop-blur-sm border border-blue-200/50 mb-6">
              <span className="text-sm font-semibold text-blue-900">Programme Highlights</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-6">
              BrightPay Training At A Glance
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Fast-track your payroll career with expert one-to-one professional training
            </p>
          </div>
        </FadeInUp>

        <StaggerContainer>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <StaggerItem key={index}>
                <StatCard {...stat} />
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>

        {/* Accreditation Info - Professional Design */}
        <FadeInUp delay={0.4}>
          <div className="mt-20">
            <div className="relative">
              {/* Ambient Glow */}
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-blue-500/10 via-transparent to-indigo-500/10 blur-xl" />

              <div className="relative p-10 bg-white border border-gray-200 rounded-3xl shadow-elegant">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Accredited & Recognized</h3>
                  <p className="text-gray-600">Industry-standard training that employers trust</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center justify-items-center">
                  <div className="text-center group">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-100 mb-4 group-hover:scale-110 transition-transform duration-500">
                      <div className="text-2xl font-bold text-blue-600">BrightPay</div>
                    </div>
                    <div className="text-sm text-gray-600 font-medium">Official Software</div>
                  </div>
                  <div className="text-center group">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-100 mb-4 group-hover:scale-110 transition-transform duration-500">
                      <div className="text-3xl font-bold text-blue-600">HMRC</div>
                    </div>
                    <div className="text-sm text-gray-600 font-medium">Recognized Software</div>
                  </div>
                  <div className="text-center group">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-100 mb-4 group-hover:scale-110 transition-transform duration-500">
                      <div className="text-3xl font-bold text-blue-600">UK</div>
                    </div>
                    <div className="text-sm text-gray-600 font-medium">Payroll Standards</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeInUp>
      </Container>
    </section>
  );
}
