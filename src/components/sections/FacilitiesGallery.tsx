"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { X, Users, Laptop, Briefcase, Clock, Target, Award } from "lucide-react";

const trainingBenefits = [
  {
    id: 1,
    title: "Expert One-to-One Instruction",
    description: "Personalized training from a 15+ year global payroll specialist who tailors every session to your learning pace",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    icon: Users,
    gradient: "from-blue-500 to-blue-600",
    category: "Training"
  },
  {
    id: 2,
    title: "BrightPay Software Mastery",
    description: "Hands-on training with industry-standard UK payroll software used by businesses nationwide",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
    icon: Laptop,
    gradient: "from-purple-500 to-purple-600",
    category: "Software"
  },
  {
    id: 3,
    title: "Real-World Projects",
    description: "Work through actual payroll scenarios including RTI, statutory payments, and pension auto-enrolment",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    icon: Briefcase,
    gradient: "from-green-500 to-green-600",
    category: "Practice"
  },
  {
    id: 4,
    title: "Weekend Flexibility",
    description: "Train on weekends without disrupting your current work or personal commitments",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&q=80",
    icon: Clock,
    gradient: "from-orange-500 to-orange-600",
    category: "Schedule"
  },
  {
    id: 5,
    title: "Small Class Size",
    description: "Maximum 4 students per session ensures you get the attention and support you deserve",
    image: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=800&q=80",
    icon: Target,
    gradient: "from-pink-500 to-pink-600",
    category: "Support"
  },
  {
    id: 6,
    title: "Complete Career Support",
    description: "Professional CV preparation and job application assistance to launch your payroll career",
    image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=800&q=80",
    icon: Award,
    gradient: "from-indigo-500 to-indigo-600",
    category: "Career"
  },
];

export function FacilitiesGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section className="section-padding bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 opacity-5">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://cdn.coverr.co/videos/coverr-modern-office-space-9201/1080p.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #6366F1 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Animated Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

        {/* Floating Elements */}
        <div className="absolute top-1/3 right-[18%] w-14 h-14 bg-blue-400/5 rounded-lg rotate-12 animate-float"></div>
        <div className="absolute bottom-1/4 left-[10%] w-18 h-18 bg-purple-400/5 rounded-full animate-float-delayed"></div>
        <div className="absolute top-2/3 right-[12%] w-16 h-16 bg-indigo-400/5 rounded-lg -rotate-45 animate-float-slow"></div>
      </div>

      <Container className="relative z-10">
        <FadeInUp>
          <div className="text-center max-w-3xl mx-auto mb-16">
            {/* Premium Badge */}
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary-100 to-blue-100 border border-primary-200 rounded-full shadow-lg">
                <div className="relative">
                  <div className="w-2 h-2 bg-primary-600 rounded-full animate-pulse"></div>
                  <div className="absolute inset-0 w-2 h-2 bg-primary-600 rounded-full animate-ping"></div>
                </div>
                <span className="text-xs font-bold text-primary-900 tracking-widest uppercase">Training Benefits</span>
              </div>
            </div>

            <h2 className="text-4xl font-black tracking-tight text-gray-900 sm:text-5xl lg:text-6xl mb-6">
              <span className="block">What Makes Our</span>
              <span className="block mt-1 bg-gradient-to-r from-primary-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">BrightPay Training Different</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Comprehensive <span className="font-bold text-primary-700 bg-primary-50 px-2 py-1 rounded-md">one-to-one instruction</span> designed to transform you into a confident payroll professional
            </p>
          </div>
        </FadeInUp>

        {/* Gallery Grid */}
        <StaggerContainer>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {trainingBenefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <StaggerItem key={benefit.id}>
                  <div
                    className="group relative aspect-[4/3] overflow-hidden rounded-2xl cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-primary-200 hover:transform hover:scale-105"
                    onClick={() => setSelectedImage(benefit.id)}
                  >
                    {/* Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                    {/* Image */}
                    <Image
                      src={benefit.image}
                      alt={benefit.title}
                      fill
                      className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110 group-hover:saturate-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />

                    {/* Multi-layer Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-15 transition-opacity duration-500 mix-blend-overlay`} />

                    {/* Animated shimmer effect on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -skew-x-12 animate-shimmer"></div>
                    </div>

                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <div className="flex items-center gap-2 mb-2">
                          <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${benefit.gradient} flex items-center justify-center`}>
                            <Icon className="h-4 w-4 text-white" />
                          </div>
                          <div className="text-xs font-semibold text-primary-300 uppercase tracking-wider">
                            {benefit.category}
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2 drop-shadow-lg">
                          {benefit.title}
                        </h3>
                        <p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75 leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </div>

                    {/* Icon Badge (Always Visible) */}
                    <div className="absolute top-4 right-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${benefit.gradient} shadow-lg flex items-center justify-center backdrop-blur-sm ring-2 ring-white/50 group-hover:ring-white/80 group-hover:shadow-2xl`}>
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </div>
        </StaggerContainer>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-50"
              onClick={() => setSelectedImage(null)}
              aria-label="Close modal"
            >
              <X className="h-6 w-6 text-white" />
            </button>

            {trainingBenefits
              .filter((b) => b.id === selectedImage)
              .map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={benefit.id}
                    className="relative max-w-6xl w-full aspect-video"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Image
                      src={benefit.image}
                      alt={benefit.title}
                      fill
                      className="object-contain"
                      sizes="100vw"
                      priority
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-8">
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${benefit.gradient} flex items-center justify-center shadow-lg`}>
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="text-primary-300 text-sm font-semibold uppercase tracking-wider">
                          {benefit.category}
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-200 text-lg leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
          </div>
        )}

        {/* CTA Below Gallery */}
        <FadeInUp delay={0.3}>
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-br from-primary-600 to-blue-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-3">Ready to Start Your BrightPay Journey?</h3>
              <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
                Join our 6-week training programme and launch your rewarding payroll career with expert guidance
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
          </div>
        </FadeInUp>
      </Container>
    </section>
  );
}
