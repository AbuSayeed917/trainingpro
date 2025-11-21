"use client";

import Image from "next/image";
import { Container } from "@/components/ui";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { Quote, TrendingUp, Briefcase, Award, Users, Target, CheckCircle } from "lucide-react";

const trainingFeatures = [
  {
    id: 1,
    icon: Users,
    title: "One-to-One Personalized Training",
    description: "Receive individual attention from a 15+ year global payroll specialist who tailors every session to your learning style and pace.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    gradient: "from-blue-500 to-blue-600",
  },
  {
    id: 2,
    icon: Target,
    title: "Practical Hands-On Experience",
    description: "Master BrightPay software through real-world payroll scenarios including RTI submissions, statutory payments, and pension auto-enrolment.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
    gradient: "from-purple-500 to-purple-600",
  },
  {
    id: 3,
    icon: Briefcase,
    title: "Job-Ready in 6 Weeks",
    description: "Complete your training with comprehensive CV preparation and job application support to launch your payroll career with confidence.",
    image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=800&q=80",
    gradient: "from-green-500 to-green-600",
  },
];

export function SuccessStories() {
  return (
    <section className="section-padding bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 opacity-5">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://cdn.coverr.co/videos/coverr-studying-together-5044/1080p.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #3B82F6 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Animated Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary-400/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

        {/* Floating Elements */}
        <div className="absolute top-1/3 left-[8%] w-18 h-18 bg-primary-400/5 rounded-lg rotate-45 animate-float"></div>
        <div className="absolute bottom-1/3 right-[15%] w-16 h-16 bg-blue-400/5 rounded-full animate-float-delayed"></div>
        <div className="absolute top-2/3 left-[20%] w-20 h-20 bg-indigo-400/5 rounded-lg -rotate-12 animate-float-slow"></div>
      </div>

      <Container className="relative z-10">
        <FadeInUp>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary-100 to-blue-100 border border-primary-200 rounded-full shadow-lg">
                <div className="relative">
                  <div className="w-2 h-2 bg-primary-600 rounded-full animate-pulse"></div>
                  <div className="absolute inset-0 w-2 h-2 bg-primary-600 rounded-full animate-ping"></div>
                </div>
                <span className="text-xs font-bold text-primary-900 tracking-widest uppercase">Training Excellence</span>
              </div>
            </div>

            <h2 className="text-4xl font-black tracking-tight text-gray-900 sm:text-5xl lg:text-6xl mb-6">
              <span className="block">Your Path to</span>
              <span className="block mt-1 bg-gradient-to-r from-primary-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">Payroll Success</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Discover the <span className="font-bold text-primary-700 bg-primary-50 px-2 py-1 rounded-md">key features</span> that make our BrightPay training programme so effective
            </p>
          </div>
        </FadeInUp>

        {/* Feature Cards */}
        <StaggerContainer>
          <div className="grid gap-8 lg:grid-cols-3 mb-20">
            {trainingFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <StaggerItem key={feature.id}>
                  <div className="group relative h-full">
                    {/* Card */}
                    <div className="relative h-full bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-primary-200 hover:transform hover:scale-105">
                      {/* Glow Effect */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                      {/* Image */}
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <Image
                          src={feature.image}
                          alt={feature.title}
                          fill
                          className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                          sizes="(max-width: 1024px) 100vw, 33vw"
                        />
                        {/* Multi-layer gradients */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                        <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-700 mix-blend-overlay`} />

                        {/* Animated shimmer effect */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shimmer"></div>
                        </div>

                        {/* Icon Badge */}
                        <div className="absolute top-4 right-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                          <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${feature.gradient} shadow-xl flex items-center justify-center ring-4 ring-white/50 group-hover:ring-white/80`}>
                            <Icon className="h-7 w-7 text-white" />
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-8 relative">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {feature.description}
                        </p>
                        <div className="mt-4 flex items-center gap-2">
                          <CheckCircle className={`h-5 w-5 bg-gradient-to-br ${feature.gradient} bg-clip-text text-transparent`} />
                          <span className="text-sm font-medium text-gray-700">Included in £999 package</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </div>
        </StaggerContainer>

        {/* CTA Section */}
        <FadeInUp delay={0.4}>
          <div className="bg-gradient-to-br from-primary-600 to-blue-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Ready to Start Your BrightPay Journey?</h3>
                <p className="text-blue-100 mb-6">
                  Join our 6-week training programme and launch your rewarding payroll career with comprehensive support and expert instruction.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/programmes"
                    className="inline-flex items-center justify-center gap-2 h-13 px-8 text-lg font-medium bg-white text-primary-600 hover:bg-gray-50 rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
                  >
                    View Programme Details
                  </a>
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 h-13 px-8 text-lg font-medium border-2 border-white text-white hover:bg-white/10 rounded-lg transition-all"
                  >
                    Get Started Today
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-3xl font-bold mb-2">6 Weeks</div>
                  <div className="text-sm text-blue-100">Complete Training</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-3xl font-bold mb-2">Max 4</div>
                  <div className="text-sm text-blue-100">Students/Session</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-3xl font-bold mb-2">15+ Years</div>
                  <div className="text-sm text-blue-100">Expert Trainer</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-3xl font-bold mb-2">£999</div>
                  <div className="text-sm text-blue-100">All Inclusive</div>
                </div>
              </div>
            </div>
          </div>
        </FadeInUp>
      </Container>
    </section>
  );
}
