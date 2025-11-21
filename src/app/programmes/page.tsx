"use client";

import Image from "next/image";
import Link from "next/link";
import { Container, Badge } from "@/components/ui";
import { Clock, ArrowRight, Award, BookOpen, CheckCircle2, TrendingUp, Users, Star, GraduationCap, Briefcase } from "lucide-react";
import { FadeIn, FadeInUp, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { ProgrammeTestimonials } from "@/components/sections/ProgrammeTestimonials";
import { ProgrammeGallery } from "@/components/sections/ProgrammeGallery";

// THE ONE BRIGHTPAY TRAINING PROGRAMME
const programme = {
  id: "1",
  title: "BrightPay Payroll Training",
  slug: "brightpay-payroll",
  description: "Master UK payroll with expert 1-to-1 training. Learn BrightPay software, gain practical experience, and launch your payroll career in just 6 weeks.",
  duration: "6 weeks",
  price: 999,
  image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80",
  features: [
    "One-to-one personal instruction",
    "Maximum 4 students per session",
    "15+ years expert trainer experience",
    "Weekend classes available",
    "Work on real payroll projects",
    "BrightPay software (free HMRC-recognized)",
    "9 comprehensive modules",
    "CV assistance & job support",
    "Interview preparation",
    "Flexible weekend schedule",
  ],
};

const curriculumModules = [
  {
    number: "01",
    title: "Software Setup",
    items: ["Install & configure BrightPay", "Set up company/employer settings"],
  },
  {
    number: "02",
    title: "Employee Management",
    items: ["Add/remove employees", "Manage personnel data & records"],
  },
  {
    number: "03",
    title: "Payroll Processing",
    items: ["Monthly, weekly & director payroll runs", "Generate professional payslips"],
  },
  {
    number: "04",
    title: "RTI Submissions",
    items: ["Real-Time Information to HMRC", "FPS & EPS returns"],
  },
  {
    number: "05",
    title: "Pension Auto-Enrolment",
    items: ["Set up pension schemes", "Manage contributions"],
  },
  {
    number: "06",
    title: "Statutory Payments",
    items: ["Maternity, paternity, sick pay", "Shared parental leave"],
  },
  {
    number: "07",
    title: "Tax Codes & Scottish Tax",
    items: ["Tax code changes & coding notices", "Regional taxation"],
  },
  {
    number: "08",
    title: "Deductions & AEO",
    items: ["Student loans", "Attachments of earnings orders"],
  },
  {
    number: "09",
    title: "Year-End Processing",
    items: ["P60s, P11D, P32/P30 reports", "Year-end procedures"],
  },
];

const benefits = [
  {
    icon: Award,
    title: "15+ Years Expert Trainer",
    description: "Learn from a global payroll specialist with 15+ years of real-world experience",
  },
  {
    icon: Briefcase,
    title: "Real-World Projects",
    description: "Work on actual payroll projects during training for hands-on practical experience",
  },
  {
    icon: BookOpen,
    title: "CV & Job Support",
    description: "Professional CV review, job application assistance, and interview preparation included",
  },
  {
    icon: Users,
    title: "Weekend Flexibility",
    description: "Weekend classes perfect for working professionals and students",
  },
];

export default function ProgrammesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Premium Hero Section - Matching Homepage Style */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1920&q=80"
            alt="Payroll training"
            fill
            className="object-cover opacity-[0.08]"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-900/90 to-slate-900/95" />
        </div>

        {/* Elegant Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-float-delayed" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-400/5 rounded-full blur-3xl animate-float-slow" />
        </div>

        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '100px 100px'
        }} />

        <Container className="relative z-10 py-20">
          <div className="max-w-6xl mx-auto text-center text-white">
            <FadeIn>
              {/* Premium Badge */}
              <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 shadow-elegant">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
                </span>
                <span className="text-sm font-medium tracking-wide">Enrolling Now • Weekend Classes Available</span>
              </div>
            </FadeIn>

            <FadeInUp delay={0.1}>
              {/* Heading */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
                Master UK Payroll
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 mt-2">
                  with BrightPay Training
                </span>
              </h1>
            </FadeInUp>

            <FadeInUp delay={0.2}>
              {/* Description */}
              <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-4xl mx-auto">
                Expert 1-to-1 payroll training from an experienced specialist with 15+ years global experience. Small class sizes (max 4 students), weekend flexibility, and complete career support to launch your payroll career.
              </p>
            </FadeInUp>

            <FadeInUp delay={0.3}>
              {/* Stats Grid - Professional Glass Design */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12 max-w-5xl mx-auto">
                <div className="group relative">
                  <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-blue-500/20 via-transparent to-indigo-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
                  <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 px-6 py-8 rounded-2xl shadow-elegant group-hover:shadow-hover-elegant transition-all duration-500">
                    <div className="text-5xl font-bold text-white mb-2">6</div>
                    <div className="text-base font-semibold text-white mb-1">Weeks</div>
                    <div className="text-sm text-blue-200">Complete Training</div>
                  </div>
                </div>
                <div className="group relative">
                  <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-blue-500/20 via-transparent to-indigo-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
                  <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 px-6 py-8 rounded-2xl shadow-elegant group-hover:shadow-hover-elegant transition-all duration-500">
                    <div className="text-5xl font-bold text-white mb-2">1:1</div>
                    <div className="text-base font-semibold text-white mb-1">Personal</div>
                    <div className="text-sm text-blue-200">Individual Attention</div>
                  </div>
                </div>
                <div className="group relative">
                  <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-blue-500/20 via-transparent to-indigo-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
                  <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 px-6 py-8 rounded-2xl shadow-elegant group-hover:shadow-hover-elegant transition-all duration-500">
                    <div className="text-5xl font-bold text-white mb-2">Max 4</div>
                    <div className="text-base font-semibold text-white mb-1">Students</div>
                    <div className="text-sm text-blue-200">Per Session</div>
                  </div>
                </div>
                <div className="group relative">
                  <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-blue-500/20 via-transparent to-indigo-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
                  <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 px-6 py-8 rounded-2xl shadow-elegant group-hover:shadow-hover-elegant transition-all duration-500">
                    <div className="text-5xl font-bold text-white mb-2">15+</div>
                    <div className="text-base font-semibold text-white mb-1">Years</div>
                    <div className="text-sm text-blue-200">Expert Trainer</div>
                  </div>
                </div>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.4}>
              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-3 px-10 py-4 bg-white text-slate-900 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-all shadow-elegant hover:shadow-hover-elegant"
                >
                  Book Free Consultation
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-blue-600 text-white border-2 border-blue-500/50 rounded-xl font-semibold text-lg hover:bg-blue-700 hover:border-blue-400/50 transition-all shadow-elegant"
                >
                  Ask Questions
                </Link>
              </div>
            </FadeInUp>
          </div>
        </Container>

        {/* Bottom Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-16 text-white" preserveAspectRatio="none" viewBox="0 0 1440 48" fill="none">
            <path d="M0 48h1440V0S1020 48 720 48 0 0 0 0v48z" fill="currentColor" />
          </svg>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <Container>
          <FadeInUp>
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
              Why Choose Our Training
            </h2>
            <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
              More than just software training - get expert instruction, real-world experience, and complete career support
            </p>
          </FadeInUp>

          <StaggerContainer>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <StaggerItem key={index}>
                    <div className="text-center group hover:scale-105 transition-transform">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 text-white mb-4 shadow-lg group-hover:shadow-xl transition-shadow">
                        <Icon className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2 text-lg">{benefit.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{benefit.description}</p>
                    </div>
                  </StaggerItem>
                );
              })}
            </div>
          </StaggerContainer>
        </Container>
      </section>

      {/* BrightPay Curriculum */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <Container>
          <FadeInUp>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Complete BrightPay Curriculum
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Master all aspects of UK payroll processing in 6 weeks with our comprehensive 9-module programme
              </p>
            </div>
          </FadeInUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {curriculumModules.map((module, index) => (
              <FadeInUp key={index} delay={0.1 * index}>
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all group border border-gray-200 hover:border-primary-300">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-primary-500 to-primary-600 text-white flex items-center justify-center font-bold text-lg shadow-md group-hover:scale-110 transition-transform">
                      {module.number}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 flex-1 group-hover:text-primary-600 transition-colors">
                      {module.title}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {module.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-600">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeInUp>
            ))}
          </div>
        </Container>
      </section>

      {/* Programme Card */}
      <section className="py-20 bg-white">
        <Container>
          <div className="max-w-5xl mx-auto">
            <FadeInUp>
              <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl overflow-hidden shadow-2xl">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Image Side */}
                  <div className="relative h-[400px] lg:h-auto">
                    <Image
                      src={programme.image}
                      alt={programme.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute top-4 right-4">
                      <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-full shadow-lg">
                        <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                        <span className="text-sm font-bold text-gray-900">Most Popular</span>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent" />
                  </div>

                  {/* Content Side */}
                  <div className="p-10 lg:p-12 text-white">
                    <Badge className="mb-4 bg-primary-600 text-white border-0">
                      Payroll Training
                    </Badge>
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                      {programme.title}
                    </h2>
                    <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                      {programme.description}
                    </p>

                    {/* Key Features */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-primary-400" />
                        <div>
                          <div className="text-sm text-gray-400">Duration</div>
                          <div className="font-semibold">{programme.duration}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Users className="w-5 h-5 text-primary-400" />
                        <div>
                          <div className="text-sm text-gray-400">Class Size</div>
                          <div className="font-semibold">Max 4 Students</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <GraduationCap className="w-5 h-5 text-primary-400" />
                        <div>
                          <div className="text-sm text-gray-400">Curriculum</div>
                          <div className="font-semibold">9 Modules</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Award className="w-5 h-5 text-primary-400" />
                        <div>
                          <div className="text-sm text-gray-400">Trainer</div>
                          <div className="font-semibold">15+ Years Exp</div>
                        </div>
                      </div>
                    </div>

                    {/* Price & CTA */}
                    <div className="pt-8 border-t border-gray-700">
                      <div className="flex items-end justify-between mb-6">
                        <div>
                          <div className="text-sm text-gray-400 mb-1">One-time payment</div>
                          <div className="text-5xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                            £{programme.price}
                          </div>
                        </div>
                      </div>
                      <Link
                        href="/contact"
                        className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-blue-600 text-white rounded-lg font-bold text-lg hover:from-primary-700 hover:to-blue-700 hover:scale-105 transition-all shadow-lg hover:shadow-xl"
                      >
                        Enroll Now
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInUp>
          </div>
        </Container>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-blue-50">
        <Container>
          <FadeInUp>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                What&apos;s Included in Your £999 Package
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Everything you need to become job-ready in UK payroll
              </p>
            </div>
          </FadeInUp>

          <div className="max-w-4xl mx-auto">
            <StaggerContainer>
              <div className="grid md:grid-cols-2 gap-6">
                {programme.features.map((feature, index) => (
                  <StaggerItem key={index}>
                    <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all group">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <CheckCircle2 className="w-5 h-5 text-white" />
                        </div>
                      </div>
                      <p className="text-gray-700 font-medium leading-relaxed">{feature}</p>
                    </div>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          </div>
        </Container>
      </section>

      {/* Recognition */}
      <section className="py-20 bg-gray-900 text-white">
        <Container>
          <FadeInUp>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Industry Standards & Recognition</h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Our training uses HMRC-recognized software and aligns with UK payroll industry standards
              </p>
            </div>
          </FadeInUp>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <FadeInUp delay={0.1}>
              <div className="text-center p-8 bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-700 hover:bg-gray-800 transition-all group">
                <div className="text-4xl font-bold text-primary-400 mb-2 group-hover:scale-110 transition-transform inline-block">HMRC</div>
                <div className="text-lg font-semibold mb-2">BrightPay Software</div>
                <div className="text-sm text-gray-400">HMRC Recognized & Approved</div>
              </div>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <div className="text-center p-8 bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-700 hover:bg-gray-800 transition-all group">
                <div className="text-4xl font-bold text-primary-400 mb-2 group-hover:scale-110 transition-transform inline-block">UK</div>
                <div className="text-lg font-semibold mb-2">Industry Standards</div>
                <div className="text-sm text-gray-400">Aligned with UK Payroll Requirements</div>
              </div>
            </FadeInUp>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-primary-600 via-blue-600 to-indigo-600 text-white relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <Container>
          <FadeInUp>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                Ready to Start Your Payroll Career?
              </h2>
              <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                Join our next cohort and learn from a 15+ year global payroll expert.
                Weekend classes starting soon - limited spots available!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary-600 rounded-lg font-bold text-lg hover:bg-blue-50 hover:scale-105 transition-all shadow-lg hover:shadow-xl"
                >
                  Book Your Training Now
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-700 to-blue-700 text-white border-2 border-white/30 rounded-lg font-bold text-lg hover:from-primary-800 hover:to-blue-800 hover:scale-105 transition-all shadow-lg"
                >
                  Ask a Question
                </Link>
              </div>
            </div>
          </FadeInUp>
        </Container>
      </section>

      {/* Gallery Section */}
      <ProgrammeGallery />

      {/* Testimonials Section */}
      <ProgrammeTestimonials />
    </div>
  );
}
