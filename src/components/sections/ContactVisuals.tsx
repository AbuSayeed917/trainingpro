"use client";

import Image from "next/image";
import { Container } from "@/components/ui";
import { MessageSquare, Phone, Mail, Calendar, CheckCircle2, Users } from "lucide-react";

const communicationChannels = [
  {
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1200&q=80",
    title: "Personalized Consultation",
    description: "One-on-one discussions about your career goals and training needs",
    icon: Users,
    badge: "Expert Guidance",
    overlay: "from-blue-600/90 to-blue-900/90"
  },
  {
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&q=80",
    title: "Professional Support Team",
    description: "Experienced advisors ready to answer all your questions about BrightPay training",
    icon: MessageSquare,
    badge: "Expert Support",
    overlay: "from-indigo-600/90 to-indigo-900/90"
  },
  {
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=80",
    title: "Flexible Communication",
    description: "Reach us via phone, email, or book a face-to-face meeting at your convenience",
    icon: Phone,
    badge: "Multiple Channels",
    overlay: "from-purple-600/90 to-purple-900/90"
  }
];

const responseFeatures = [
  {
    icon: Mail,
    title: "24-Hour Email Response",
    description: "Quick and detailed responses to all email enquiries",
    gradient: "from-blue-500 to-indigo-500"
  },
  {
    icon: Phone,
    title: "Direct Phone Support",
    description: "Speak with our team during office hours",
    gradient: "from-indigo-500 to-purple-500"
  },
  {
    icon: Calendar,
    title: "Free Consultation Booking",
    description: "Schedule a no-obligation discussion about your goals",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: CheckCircle2,
    title: "Ongoing Support",
    description: "Assistance from enquiry through to job placement",
    gradient: "from-pink-500 to-rose-500"
  }
];

export function ContactVisuals() {
  return (
    <section className="section-padding bg-gradient-to-br from-white via-blue-50/20 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl animate-float-delayed" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              We&apos;re Here to
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 mt-2">
                Support Your Journey
              </span>
            </h2>

            <p className="text-xl text-gray-600 leading-relaxed">
              Get personalized guidance from our expert team at every step of your payroll training journey
            </p>
          </div>

          {/* Response Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {responseFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="group relative">
                  {/* Ambient Glow */}
                  <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-blue-500/20 via-transparent to-indigo-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />

                  <div className="relative bg-white rounded-2xl p-6 border border-gray-200 shadow-elegant group-hover:shadow-hover-elegant transition-all duration-500 group-hover:-translate-y-2 text-center h-full">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} mb-4 group-hover:scale-110 transition-transform duration-500`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2 text-sm">{feature.title}</h3>
                    <p className="text-xs text-gray-600">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Communication Channels Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {communicationChannels.map((channel, index) => {
              const Icon = channel.icon;
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
                    <div className="relative h-72 overflow-hidden">
                      <Image
                        src={channel.image}
                        alt={channel.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${channel.overlay}`} />

                      {/* Icon Badge */}
                      <div className="absolute top-6 right-6">
                        <div className="p-3 rounded-xl bg-white/20 backdrop-blur-md border border-white/40">
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                      </div>

                      {/* Badge */}
                      <div className="absolute top-6 left-6">
                        <div className="px-4 py-2 bg-white/20 backdrop-blur-md border border-white/40 rounded-full">
                          <span className="text-sm font-semibold text-white">{channel.badge}</span>
                        </div>
                      </div>

                      {/* Content Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-xl font-bold text-white mb-2">
                          {channel.title}
                        </h3>
                        <p className="text-white/90 text-sm leading-relaxed">
                          {channel.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Feature Showcase */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/20 via-transparent to-indigo-500/20 rounded-3xl blur-2xl" />

            <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 rounded-3xl p-8 md:p-12 border border-white/10 shadow-elegant overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                backgroundSize: '50px 50px'
              }} />

              <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                {/* Left: Large Featured Image */}
                <div className="relative">
                  <div className="relative rounded-2xl overflow-hidden shadow-elegant">
                    <div className="relative aspect-[4/3]">
                      <Image
                        src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80"
                        alt="Professional team consultation"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-3xl opacity-20 blur-2xl" />
                  <div className="absolute -top-4 -left-4 w-32 h-32 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-3xl opacity-20 blur-2xl" />
                </div>

                {/* Right: Content */}
                <div className="text-white">
                  <h3 className="text-3xl font-bold mb-6">
                    Committed to Your Success
                  </h3>
                  <p className="text-blue-100 mb-8 leading-relaxed text-lg">
                    From your first enquiry to landing your dream payroll job, our dedicated team
                    is here to provide guidance, answer questions, and support your professional development.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-emerald-500/20 border border-emerald-400/50 flex-shrink-0">
                        <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Fast Response Times</h4>
                        <p className="text-sm text-blue-200">Email replies within 24 hours, phone support during office hours</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-blue-500/20 border border-blue-400/50 flex-shrink-0">
                        <CheckCircle2 className="h-5 w-5 text-blue-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Personalized Advice</h4>
                        <p className="text-sm text-blue-200">Tailored guidance based on your career goals and background</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-purple-500/20 border border-purple-400/50 flex-shrink-0">
                        <CheckCircle2 className="h-5 w-5 text-purple-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">No Pressure Consultations</h4>
                        <p className="text-sm text-blue-200">Free, no-obligation discussions about our BrightPay programme</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-pink-500/20 border border-pink-400/50 flex-shrink-0">
                        <CheckCircle2 className="h-5 w-5 text-pink-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Ongoing Support</h4>
                        <p className="text-sm text-blue-200">Assistance doesn&apos;t end with enrollment - we&apos;re here throughout your journey</p>
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
