import Image from "next/image";
import Link from "next/link";
import { Container, Badge } from "@/components/ui";
import { Briefcase, Clock, MapPin, TrendingUp, CheckCircle2, ArrowRight, Users, Award, Building2, Target, Zap, Rocket } from "lucide-react";

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
    title: "Payroll Department",
    companies: "Finance & HR Teams",
    duration: "8-12 weeks",
    responsibilities: ["Processing payroll", "Managing RTI submissions", "Pension administration", "Compliance checks"],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80",
  },
  {
    title: "Bookkeeping Practice",
    companies: "Accounting Firms & SMEs",
    duration: "6-10 weeks",
    responsibilities: ["Daily bookkeeping", "VAT returns", "Bank reconciliation", "Client support"],
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80",
  },
  {
    title: "Accounting Department",
    companies: "Corporate Finance Teams",
    duration: "10-12 weeks",
    responsibilities: ["Financial reporting", "Month-end procedures", "Analysis support", "Audit preparation"],
    image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=600&q=80",
  },
];

const stats = [
  { number: "4-12", label: "Week Placements" },
  { number: "100%", label: "Practical Learning" },
  { number: "Real", label: "Business Experience" },
  { number: "Career", label: "Focused Support" },
];

export default function WorkExperiencePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-50 pt-24 pb-16">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              Launch Your Career with Professional Experience
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
              Gain valuable hands-on experience in real business environments. Apply your newly
              acquired skills, build your professional network, and transform your CV.
            </p>

            {/* Features */}
            <div className="flex flex-wrap justify-center gap-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full">
                <Clock className="w-4 h-4 text-secondary-600" />
                <span className="text-sm font-medium text-gray-700">4-12 Week Placements</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full">
                <MapPin className="w-4 h-4 text-secondary-600" />
                <span className="text-sm font-medium text-gray-700">UK-Wide Opportunities</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full">
                <Building2 className="w-4 h-4 text-secondary-600" />
                <span className="text-sm font-medium text-gray-700">Industry Partners</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-gray-100 py-16">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Why Work Experience Matters
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Practical experience is invaluable for launching your career. Here's how our work
              placements help you succeed in the competitive job market.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="group bg-white rounded-xl p-8 border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-secondary-500 to-secondary-600 text-white mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gray-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              How Our Placement Process Works
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our structured four-step process ensures you're matched with the right opportunity
              and fully supported throughout your placement journey.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {placementProcess.map((item, index) => (
              <div key={index} className="relative">
                {/* Connector Line */}
                {index < placementProcess.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gray-200" />
                )}

                <div className="relative z-10 bg-white rounded-xl p-6 border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-xl bg-gradient-to-br from-secondary-500 to-secondary-600 text-white font-bold text-2xl mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{item.description}</p>
                </div>
              </div>
            ))}
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

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800">
        <Container>
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Ready to Start Your Professional Journey?
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Enroll in one of our training programmes and get access to exclusive work placement
              opportunities that will kickstart your professional career.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/programmes"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
              >
                View Training Programmes
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all font-semibold"
              >
                Contact Us Today
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
