import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui";
import { Briefcase, Clock, MapPin, TrendingUp, CheckCircle2, ArrowRight, Users, Award, Building2 } from "lucide-react";
import { CTA } from "@/components/sections/CTA";
import { WorkExperienceVisuals } from "@/components/sections/WorkExperienceVisuals";

const benefits = [
  {
    icon: Briefcase,
    title: "Real-World Experience",
    description: "Apply your skills in actual business environments with real clients and projects.",
  },
  {
    icon: Users,
    title: "Professional Networking",
    description: "Build connections with industry professionals and potential employers.",
  },
  {
    icon: TrendingUp,
    title: "Career Advancement",
    description: "Boost your CV and stand out to employers with practical experience.",
  },
  {
    icon: Award,
    title: "Skill Development",
    description: "Enhance your technical and soft skills in a professional setting.",
  },
];

const placementProcess = [
  {
    step: "1",
    title: "Complete Training",
    description: "Finish a significant portion of your chosen programme and pass assessments.",
  },
  {
    step: "2",
    title: "Skills Assessment",
    description: "We evaluate your strengths and career interests to find the right match.",
  },
  {
    step: "3",
    title: "Company Matching",
    description: "We connect you with suitable companies based on your skills and location.",
  },
  {
    step: "4",
    title: "Start Placement",
    description: "Begin your 4-12 week placement with ongoing support and mentoring.",
  },
];

const placementTypes = [
  {
    title: "Payroll Department - Large Company",
    companies: "Corporate HR & Finance Teams",
    duration: "8-12 weeks",
    responsibilities: ["Processing payroll using BrightPay", "Managing RTI submissions to HMRC", "Pension auto-enrolment administration", "Statutory payments processing"],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80",
  },
  {
    title: "Payroll Bureau",
    companies: "Specialist Payroll Service Providers",
    duration: "6-10 weeks",
    responsibilities: ["Multi-client payroll processing", "BrightPay software mastery", "Client communication", "Payroll compliance checks"],
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80",
  },
  {
    title: "Accounting Firm Payroll",
    companies: "Accountancy Practices",
    duration: "8-10 weeks",
    responsibilities: ["SME payroll services", "Year-end P60/P11D preparation", "PAYE & NI calculations", "Tax code management"],
    image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=600&q=80",
  },
];

const stats = [
  { number: "6-12", label: "Week Placements" },
  { number: "Real", label: "Payroll Projects" },
  { number: "BrightPay", label: "Software Used" },
  { number: "100%", label: "Practical Learning" },
];

export default function WorkExperiencePage() {
  return (
    <div className="min-h-screen">
      {/* Premium Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&q=80"
            alt="Professional workplace"
            fill
            className="object-cover opacity-[0.08]"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-900/90 to-slate-900/95" />
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-float-delayed" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl animate-float-slow" />
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '100px 100px'
        }} />

        <Container className="relative z-10 py-24">
          <div className="max-w-5xl mx-auto">
            {/* Premium Badge */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-elegant">
                <Briefcase className="h-4 w-4 text-blue-400" />
                <span className="text-sm font-semibold text-white">Real-World Work Experience</span>
              </div>
            </div>

            {/* Main Heading with Gradient */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-center mb-8 leading-tight tracking-tight">
              <span className="text-white">
                Launch Your Career with
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 mt-3">
                Professional Experience
              </span>
            </h1>

            {/* Enhanced Description */}
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-12 leading-relaxed text-center">
              Gain valuable hands-on experience in real payroll environments through our BrightPay programme.
              Apply your skills, build your network, and transform your CV with practical industry experience.
            </p>

            {/* Glass Morphism Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
              <div className="group relative">
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-blue-500/20 via-transparent to-indigo-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
                <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 px-6 py-8 rounded-2xl shadow-elegant group-hover:shadow-hover-elegant transition-all duration-500 text-center">
                  <Clock className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-1">6-12</div>
                  <div className="text-sm text-blue-200">Week Placements</div>
                </div>
              </div>
              <div className="group relative">
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-cyan-500/20 via-transparent to-blue-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
                <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 px-6 py-8 rounded-2xl shadow-elegant group-hover:shadow-hover-elegant transition-all duration-500 text-center">
                  <MapPin className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-1">UK</div>
                  <div className="text-sm text-blue-200">Wide Coverage</div>
                </div>
              </div>
              <div className="group relative">
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-indigo-500/20 via-transparent to-purple-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
                <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 px-6 py-8 rounded-2xl shadow-elegant group-hover:shadow-hover-elegant transition-all duration-500 text-center">
                  <Building2 className="w-8 h-8 text-indigo-400 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-1">100%</div>
                  <div className="text-sm text-blue-200">Practical Learning</div>
                </div>
              </div>
            </div>

            {/* Premium CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-blue-900 rounded-2xl font-bold text-lg shadow-elegant hover:shadow-hover-elegant hover:scale-105 transition-all duration-300"
              >
                <span>Apply for Placement</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/programmes"
                className="inline-flex items-center gap-3 px-10 py-5 bg-blue-600/80 backdrop-blur-md border-2 border-white/30 text-white rounded-2xl hover:bg-blue-700 transition-all duration-300 font-bold text-lg"
              >
                View BrightPay Programme
              </Link>
            </div>
          </div>
        </Container>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-auto" viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none">
            <path d="M0,64 C360,100 720,20 1440,64 L1440,120 L0,120 Z" fill="white" fillOpacity="1"/>
          </svg>
        </div>
      </section>

      {/* Work Experience Visuals Section */}
      <WorkExperienceVisuals />

      {/* Premium Benefits Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Why Work Experience Matters
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Practical experience is invaluable for launching your payroll career. Here&apos;s how our work
              placements help you succeed in the competitive job market.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              const gradients = [
                "from-blue-500 to-indigo-500",
                "from-indigo-500 to-purple-500",
                "from-purple-500 to-pink-500",
                "from-pink-500 to-rose-500"
              ];
              return (
                <div key={index} className="group relative">
                  {/* Ambient Glow */}
                  <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-blue-500/20 via-transparent to-indigo-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />

                  <div className="relative h-full bg-white rounded-3xl p-8 border border-gray-200 shadow-elegant group-hover:shadow-hover-elegant transition-all duration-500">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${gradients[index]} text-white mb-6 shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* What You'll Gain Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              What You&apos;ll Gain from Work Experience
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Practical skills and real-world experience that employers value
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl group">
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80"
                alt="Professional working in office"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <h3 className="text-2xl font-bold mb-2">Real Payroll Processing</h3>
                <p className="text-white/90 mb-1">Hands-On Experience</p>
                <p className="text-sm text-white/80">Work with actual payroll systems and process real employee payments under supervision</p>
              </div>
            </div>

            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl group">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
                alt="Professional in accounting role"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <h3 className="text-2xl font-bold mb-2">Professional Environment</h3>
                <p className="text-white/90 mb-1">Industry Standards</p>
                <p className="text-sm text-white/80">Experience workplace culture and professional standards in accounting and payroll departments</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Premium Process Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              How Our Placement Process Works
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Our structured four-step process ensures you&apos;re matched with the right payroll opportunity
              and fully supported throughout your placement journey.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {placementProcess.map((item, index) => {
              const gradients = [
                "from-blue-500 to-indigo-500",
                "from-indigo-500 to-purple-500",
                "from-purple-500 to-pink-500",
                "from-pink-500 to-rose-500"
              ];
              return (
                <div key={index} className="relative">
                  {/* Connector Line */}
                  {index < placementProcess.length - 1 && (
                    <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-1 bg-gradient-to-r from-blue-200 to-transparent" />
                  )}

                  <div className="group relative z-10">
                    <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-blue-500/20 via-transparent to-indigo-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />

                    <div className="relative bg-white rounded-3xl p-8 border border-gray-200 shadow-elegant group-hover:shadow-hover-elegant transition-all duration-500 h-full">
                      <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${gradients[index]} text-white font-bold text-3xl mb-6 shadow-md group-hover:scale-110 transition-all duration-500`}>
                        {item.step}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Video Feature Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Gain Industry Experience</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our work placement programme connects you with leading companies across the UK,
                giving you the opportunity to apply your skills in real business environments.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-secondary-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Professional Mentorship</p>
                    <p className="text-gray-600 text-sm">Work alongside experienced professionals who guide your development</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-secondary-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Build Your Network</p>
                    <p className="text-gray-600 text-sm">Connect with industry professionals and potential employers</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-secondary-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Strengthen Your CV</p>
                    <p className="text-gray-600 text-sm">Stand out with practical experience that employers value</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Video Placeholder */}
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl group cursor-pointer">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80"
                alt="Team meeting in office"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
                  <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-gray-900 border-b-8 border-b-transparent ml-1"></div>
                </div>
              </div>

              <div className="absolute bottom-8 left-8 right-8">
                <div className="inline-block px-3 py-1 bg-red-600 rounded text-xs font-semibold text-white mb-3">
                  WATCH SUCCESS STORIES
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">Hear from Our Alumni</h3>
                <p className="text-white/90 text-sm">See how work placements transformed their careers</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Image Gallery Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Experience Real Business Environments
            </h2>
            <p className="text-lg text-gray-600">
              Our placement partners offer diverse and professional work settings
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative h-64 rounded-xl overflow-hidden shadow-lg group">
              <Image
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80"
                alt="Modern office workspace"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="font-semibold">Modern Office Spaces</p>
              </div>
            </div>

            <div className="relative h-64 rounded-xl overflow-hidden shadow-lg group">
              <Image
                src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&q=80"
                alt="Collaborative workspace"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="font-semibold">Collaborative Teams</p>
              </div>
            </div>

            <div className="relative h-64 rounded-xl overflow-hidden shadow-lg group">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                alt="Professional meetings"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="font-semibold">Professional Meetings</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Placement Types */}
      <section className="py-24 bg-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Types of Work Placements
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We offer diverse placement opportunities across different business sectors,
              carefully matched to your training and career goals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {placementTypes.map((placement, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all"
              >
                <div className="relative h-56">
                  <Image
                    src={placement.image}
                    alt={placement.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-2">{placement.title}</h3>
                    <div className="flex items-center gap-2 text-white/90 text-sm">
                      <Building2 className="w-4 h-4" />
                      <span>{placement.companies}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-6 pb-6 border-b border-gray-100">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-secondary-50">
                      <Clock className="w-5 h-5 text-secondary-600" />
                    </div>
                    <span className="font-semibold text-gray-900">{placement.duration}</span>
                  </div>

                  <div>
                    <p className="font-semibold text-gray-900 text-sm mb-4">
                      Key Responsibilities
                    </p>
                    <ul className="space-y-3">
                      {placement.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600 leading-relaxed text-sm">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Premium CTA Section */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-float-delayed" />
        </div>

        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Ready to Start Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 mt-2">
                Professional Journey?
              </span>
            </h2>
            <p className="text-xl text-blue-100 mb-12 leading-relaxed max-w-2xl mx-auto">
              Enroll in our BrightPay training programme and get access to exclusive work placement
              opportunities that will kickstart your payroll career.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/programmes"
                className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-blue-900 rounded-2xl font-bold text-lg shadow-elegant hover:shadow-hover-elegant hover:scale-105 transition-all duration-300"
              >
                <span>View BrightPay Programme</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-10 py-5 bg-blue-600/80 backdrop-blur-md border-2 border-white/30 text-white rounded-2xl hover:bg-blue-700 transition-all duration-300 font-bold text-lg"
              >
                Contact Us Today
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <CTA />
    </div>
  );
}
