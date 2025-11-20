"use client";

import Image from "next/image";
import { Container } from "@/components/ui";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { Check, Clock, Target, Zap, Award, Rocket } from "lucide-react";

const roadmapSteps = [
  {
    week: "Week 1-2",
    phase: "Foundation",
    title: "Getting Started",
    icon: Rocket,
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80",
    milestones: [
      "Programme orientation and learning platform setup",
      "Introduction to industry fundamentals",
      "Meet your instructor and cohort",
      "Set personal learning goals",
    ],
  },
  {
    week: "Week 3-6",
    phase: "Core Learning",
    title: "Building Skills",
    icon: Target,
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80",
    milestones: [
      "Master core concepts and methodologies",
      "Hands-on exercises with real-world scenarios",
      "Weekly assessments and feedback sessions",
      "Software training (Sage, Xero, QuickBooks)",
    ],
  },
  {
    week: "Week 7-10",
    phase: "Advanced Training",
    title: "Practical Application",
    icon: Zap,
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&q=80",
    milestones: [
      "Advanced techniques and best practices",
      "Complete capstone project",
      "Prepare for professional certification exam",
      "CV and interview skills workshop",
    ],
  },
  {
    week: "Week 11-12",
    phase: "Work Experience",
    title: "Real-World Practice",
    icon: Clock,
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",
    milestones: [
      "4-12 week placement at partner company",
      "Apply skills in professional environment",
      "Regular mentoring and supervision",
      "Build your professional network",
    ],
  },
  {
    week: "Graduation",
    phase: "Certification",
    title: "Launch Your Career",
    icon: Award,
    color: "from-primary-500 to-primary-600",
    bgColor: "bg-primary-50",
    borderColor: "border-primary-200",
    image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=600&q=80",
    milestones: [
      "Receive industry-recognized certification",
      "Access to job placement service",
      "Join our alumni network",
      "Ongoing career support and mentorship",
    ],
  },
];

export function LearningRoadmap() {
  return (
    <section className="section-padding bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #3B82F6 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }} />
      </div>

      <Container className="relative z-10">
        <FadeInUp>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              Your Learning Journey
            </h2>
            <p className="text-lg text-gray-600">
              A clear, structured path from beginner to certified professional in just 12 weeks
            </p>
          </div>
        </FadeInUp>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 via-orange-500 via-green-500 to-primary-500 hidden md:block" />

          <StaggerContainer>
            <div className="space-y-12">
              {roadmapSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <StaggerItem key={index}>
                    <div className="relative">
                      {/* Timeline Node */}
                      <div className="absolute left-8 transform -translate-x-1/2 hidden md:flex items-center justify-center">
                        <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} shadow-lg flex items-center justify-center ring-4 ring-white`}>
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                      </div>

                      {/* Content Card */}
                      <div className="md:ml-24 group">
                        <div className={`bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 ${step.borderColor}`}>
                          <div className="grid md:grid-cols-5">
                            {/* Image */}
                            <div className="md:col-span-2 relative aspect-[16/10] md:aspect-auto md:h-full min-h-[200px]">
                              <Image
                                src={step.image}
                                alt={step.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                sizes="(max-width: 768px) 100vw, 40vw"
                              />
                              <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent md:bg-gradient-to-r md:from-black/60 md:to-transparent" />

                              {/* Mobile Icon */}
                              <div className={`absolute top-4 left-4 w-12 h-12 rounded-full bg-gradient-to-br ${step.color} shadow-lg flex items-center justify-center md:hidden`}>
                                <Icon className="h-6 w-6 text-white" />
                              </div>

                              {/* Week Badge */}
                              <div className="absolute bottom-4 left-4">
                                <div className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg">
                                  <div className="text-xs text-gray-600 font-semibold uppercase tracking-wider">
                                    {step.week}
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Content */}
                            <div className="md:col-span-3 p-8">
                              <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${step.bgColor} bg-gradient-to-r ${step.color} bg-clip-text text-transparent mb-3`}>
                                {step.phase}
                              </div>
                              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                {step.title}
                              </h3>
                              <ul className="space-y-3">
                                {step.milestones.map((milestone, mIndex) => (
                                  <li key={mIndex} className="flex items-start gap-3">
                                    <div className={`mt-0.5 w-5 h-5 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center flex-shrink-0`}>
                                      <Check className="h-3 w-3 text-white" />
                                    </div>
                                    <span className="text-gray-700 leading-relaxed">
                                      {milestone}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </StaggerItem>
                );
              })}
            </div>
          </StaggerContainer>
        </div>

        {/* Stats Summary */}
        <FadeInUp delay={0.3}>
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-xl shadow-md border border-gray-100">
              <div className="text-4xl font-bold text-primary-600 mb-2">12</div>
              <div className="text-sm text-gray-600 uppercase tracking-wider">Weeks</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-md border border-gray-100">
              <div className="text-4xl font-bold text-primary-600 mb-2">5</div>
              <div className="text-sm text-gray-600 uppercase tracking-wider">Phases</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-md border border-gray-100">
              <div className="text-4xl font-bold text-primary-600 mb-2">100%</div>
              <div className="text-sm text-gray-600 uppercase tracking-wider">Practical</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-md border border-gray-100">
              <div className="text-4xl font-bold text-primary-600 mb-2">95%</div>
              <div className="text-sm text-gray-600 uppercase tracking-wider">Success Rate</div>
            </div>
          </div>
        </FadeInUp>

        {/* CTA */}
        <FadeInUp delay={0.4}>
          <div className="mt-16 text-center">
            <p className="text-lg text-gray-600 mb-6">
              Ready to start your transformation?
            </p>
            <a
              href="/programmes"
              className="inline-flex items-center justify-center gap-2 h-13 px-8 text-lg font-medium bg-gradient-to-r from-primary-600 to-primary-400 text-white hover:from-primary-700 hover:to-primary-500 rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              Choose Your Programme
            </a>
          </div>
        </FadeInUp>
      </Container>
    </section>
  );
}
