"use client";

import Image from "next/image";
import { Container } from "@/components/ui";
import { Calendar, Clock, Users, CheckCircle2, MessageSquare, Award } from "lucide-react";

const consultationHighlights = [
  {
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1200&q=80",
    title: "Expert One-on-One Consultation",
    description: "Discuss your career goals with our experienced payroll specialist",
    icon: Users,
    badge: "Personal Attention"
  },
  {
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1200&q=80",
    title: "Flexible Scheduling Options",
    description: "Choose a time that works best for your schedule - weekday or weekend",
    icon: Calendar,
    badge: "Convenient Times"
  }
];

const processSteps = [
  {
    icon: Calendar,
    title: "Select Your Time",
    description: "Choose from available consultation slots that fit your schedule",
    gradient: "from-blue-500 to-indigo-500"
  },
  {
    icon: MessageSquare,
    title: "Discuss Your Goals",
    description: "Share your career aspirations and ask any questions about our programme",
    gradient: "from-indigo-500 to-purple-500"
  },
  {
    icon: Award,
    title: "Get Expert Advice",
    description: "Receive personalized guidance on your BrightPay training journey",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: CheckCircle2,
    title: "Make Your Decision",
    description: "No pressure - take your time to decide if our programme is right for you",
    gradient: "from-pink-500 to-rose-500"
  }
];

export function BookingVisuals() {
  return (
    <section className="section-padding bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl animate-float-delayed" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Your Career Journey
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 mt-2">
                Starts with a Conversation
              </span>
            </h2>

            <p className="text-xl text-gray-600 leading-relaxed">
              Book a free, no-obligation consultation to learn how our BrightPay training can transform your career
            </p>
          </div>

          {/* Consultation Highlights Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {consultationHighlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <div
                  key={index}
                  className="group relative"
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  {/* Ambient Glow */}
                  <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-blue-500/20 via-transparent to-indigo-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />

                  <div className="relative h-full bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-elegant group-hover:shadow-hover-elegant transition-all duration-500">
                    {/* Image */}
                    <div className="relative h-80 overflow-hidden">
                      <Image
                        src={highlight.image}
                        alt={highlight.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/60 to-gray-900/30" />

                      {/* Icon Badge */}
                      <div className="absolute top-6 right-6">
                        <div className="p-3 rounded-xl bg-white/20 backdrop-blur-md border border-white/40">
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                      </div>

                      {/* Badge */}
                      <div className="absolute top-6 left-6">
                        <div className="px-4 py-2 bg-white/20 backdrop-blur-md border border-white/40 rounded-full">
                          <span className="text-sm font-semibold text-white">{highlight.badge}</span>
                        </div>
                      </div>

                      {/* Content Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-8">
                        <h3 className="text-2xl font-bold text-white mb-3">
                          {highlight.title}
                        </h3>
                        <p className="text-white/90 leading-relaxed">
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Process Steps */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                How It Works
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Simple four-step process to get the guidance you need
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {processSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="group relative">
                    {/* Ambient Glow */}
                    <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-blue-500/20 via-transparent to-indigo-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />

                    <div className="relative bg-white rounded-2xl p-6 border border-gray-200 shadow-elegant group-hover:shadow-hover-elegant transition-all duration-500 group-hover:-translate-y-2 h-full">
                      {/* Step Number Badge */}
                      <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center font-bold text-sm shadow-md">
                        {index + 1}
                      </div>

                      <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${step.gradient} mb-4 group-hover:scale-110 transition-transform duration-500`}>
                        <Icon className="h-7 w-7 text-white" />
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2">{step.title}</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom Feature Showcase */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/20 via-transparent to-indigo-500/20 rounded-3xl blur-2xl" />

            <div className="relative bg-white rounded-3xl p-8 md:p-12 border border-gray-200 shadow-elegant">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left: Large Featured Image */}
                <div className="relative order-2 md:order-1">
                  <div className="relative rounded-2xl overflow-hidden shadow-elegant">
                    <div className="relative aspect-[4/3]">
                      <Image
                        src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80"
                        alt="Professional consultation meeting"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent" />
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl opacity-20 blur-2xl" />
                  <div className="absolute -top-4 -left-4 w-32 h-32 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-3xl opacity-20 blur-2xl" />
                </div>

                {/* Right: Content */}
                <div className="order-1 md:order-2">
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">
                    Why Book a Free Consultation?
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-emerald-100 border border-emerald-200 flex-shrink-0">
                        <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Understand the Programme</h4>
                        <p className="text-sm text-gray-600">Learn about our 9-module BrightPay curriculum and what makes it unique</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-blue-100 border border-blue-200 flex-shrink-0">
                        <CheckCircle2 className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Meet Your Trainer</h4>
                        <p className="text-sm text-gray-600">Speak directly with our 15+ years experienced payroll specialist</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-indigo-100 border border-indigo-200 flex-shrink-0">
                        <CheckCircle2 className="h-5 w-5 text-indigo-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Get Personalized Advice</h4>
                        <p className="text-sm text-gray-600">Receive guidance tailored to your career goals and background</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-purple-100 border border-purple-200 flex-shrink-0">
                        <CheckCircle2 className="h-5 w-5 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">No Pressure Decision</h4>
                        <p className="text-sm text-gray-600">Take your time to decide - we're here to help, not to pressure</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-pink-100 border border-pink-200 flex-shrink-0">
                        <Clock className="h-5 w-5 text-pink-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Flexible Scheduling</h4>
                        <p className="text-sm text-gray-600">Weekend and weekday slots available to fit your busy schedule</p>
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
