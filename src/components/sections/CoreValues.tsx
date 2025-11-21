"use client";

import { Target, Heart, Lightbulb, Award, Shield, Users } from "lucide-react";
import { Container } from "@/components/ui";

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "Committed to delivering the highest quality payroll training with industry-leading BrightPay software expertise",
    color: "from-blue-500 to-indigo-500",
    accent: "bg-blue-500"
  },
  {
    icon: Heart,
    title: "Student Success",
    description: "Your career goals are our priority. Personalized one-to-one training ensures you master every aspect of payroll",
    color: "from-indigo-500 to-purple-500",
    accent: "bg-indigo-500"
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Staying current with HMRC regulations and payroll technology to provide relevant, practical training",
    color: "from-purple-500 to-pink-500",
    accent: "bg-purple-500"
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "Honest, transparent training with no hidden costs. What we promise is what you get - £999 all-inclusive",
    color: "from-pink-500 to-rose-500",
    accent: "bg-pink-500"
  },
  {
    icon: Users,
    title: "Accessibility",
    description: "Weekend classes and flexible scheduling make professional payroll training accessible to everyone",
    color: "from-rose-500 to-orange-500",
    accent: "bg-rose-500"
  },
  {
    icon: Award,
    title: "Results",
    description: "Practical, hands-on approach focused on real-world payroll skills that employers value",
    color: "from-orange-500 to-amber-500",
    accent: "bg-orange-500"
  }
];

export function CoreValues() {
  return (
    <section className="section-padding bg-gradient-to-br from-white via-blue-50/20 to-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" />

      <Container>
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200 mb-6">
              <Award className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-900">Our Core Values</span>
            </div>

            <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              What Drives Our
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 mt-2">
                Training Excellence
              </span>
            </h2>

            <p className="text-xl text-gray-600 leading-relaxed">
              Our commitment to quality payroll education is built on these fundamental principles
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="group relative"
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  {/* Ambient Glow */}
                  <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-blue-500/10 via-transparent to-indigo-500/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />

                  <div className="relative h-full bg-white rounded-3xl p-8 border border-gray-200 shadow-elegant group-hover:shadow-hover-elegant transition-all duration-500 hover:-translate-y-2">
                    {/* Icon */}
                    <div className="relative mb-6">
                      <div className={`absolute -inset-2 bg-gradient-to-br ${value.color} rounded-2xl opacity-20 blur-lg`} />
                      <div className={`relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                        <Icon className="h-8 w-8" />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>

                    {/* Accent Line */}
                    <div className={`mt-6 h-1 w-0 ${value.accent} rounded-full group-hover:w-full transition-all duration-500`} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <div className="relative inline-block">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-2xl blur-xl" />
              <div className="relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-8 shadow-elegant">
                <h3 className="text-2xl font-bold mb-2">
                  Experience Training Built on These Values
                </h3>
                <p className="text-blue-100 mb-6">
                  Join our BrightPay payroll training programme and see the difference quality education makes
                </p>
                <a
                  href="/book"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Book Free Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
