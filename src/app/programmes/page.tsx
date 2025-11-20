"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container, Badge } from "@/components/ui";
import { Clock, ArrowRight, Award, BookOpen, CheckCircle2, TrendingUp, Users, Star } from "lucide-react";

const allProgrammes = [
  {
    id: "1",
    title: "Professional Payroll Management",
    slug: "payroll",
    category: "Payroll",
    description: "Master payroll processing, compliance, and management with industry-standard software.",
    duration: "12 weeks",
    level: "Intermediate",
    price: 1299,
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
    features: ["PAYE & NI", "RTI Submissions", "Pension Auto-Enrolment", "Payroll Software Training"],
    isPopular: true,
  },
  {
    id: "2",
    title: "Bookkeeping Fundamentals",
    slug: "bookkeeping",
    category: "Bookkeeping",
    description: "Learn essential bookkeeping skills from basic transactions to financial statements.",
    duration: "10 weeks",
    level: "Beginner",
    price: 999,
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
    features: ["Double-Entry", "VAT Returns", "Bank Reconciliation", "Sage & Xero Training"],
    isPopular: false,
  },
  {
    id: "3",
    title: "Advanced Accounting & Tax",
    slug: "accounting",
    category: "Accounting",
    description: "Advance your career with comprehensive accounting and tax compliance training.",
    duration: "16 weeks",
    level: "Advanced",
    price: 1799,
    image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=800&q=80",
    features: ["Financial Statements", "Tax Planning", "HMRC Compliance", "Year-End Procedures"],
    isPopular: false,
  },
  {
    id: "4",
    title: "HR & Employment Law",
    slug: "hr",
    category: "HR",
    description: "Understand employment legislation, contracts, and workplace compliance essentials.",
    duration: "8 weeks",
    level: "Beginner",
    price: 899,
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80",
    features: ["Employment Contracts", "Workplace Rights", "HR Documentation", "Conflict Resolution"],
    isPopular: false,
  },
  {
    id: "5",
    title: "QuickBooks & Cloud Accounting",
    slug: "software",
    category: "Software",
    description: "Master cloud-based accounting software for modern business management.",
    duration: "6 weeks",
    level: "Beginner",
    price: 699,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    features: ["QuickBooks Online", "Invoicing", "Expense Tracking", "Financial Reports"],
    isPopular: true,
  },
  {
    id: "6",
    title: "Management Accounting",
    slug: "management",
    category: "Accounting",
    description: "Develop strategic financial planning and analysis skills for business decisions.",
    duration: "14 weeks",
    level: "Intermediate",
    price: 1599,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    features: ["Budgeting", "Cost Analysis", "Performance Metrics", "Strategic Planning"],
    isPopular: false,
  },
];

const categories = ["All", "Payroll", "Bookkeeping", "Accounting", "HR", "Software"];

const benefits = [
  {
    icon: Award,
    title: "Industry Recognition",
    description: "Earn qualifications aligned with AAT, ICB, and CIPP standards",
  },
  {
    icon: BookOpen,
    title: "Practical Training",
    description: "Gain hands-on experience with real-world software",
  },
  {
    icon: Users,
    title: "Expert Support",
    description: "Learn from qualified industry professionals",
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    description: "Access exclusive work placement opportunities",
  },
];

export default function ProgrammesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProgrammes = selectedCategory === "All"
    ? allProgrammes
    : allProgrammes.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gray-50 pt-24 pb-16">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              Transform Your Career with Industry-Leading Training
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
              Choose from our comprehensive range of professional training programmes designed to
              equip you with the skills and qualifications employers demand.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">6+</div>
                <div className="text-sm text-gray-600 mt-1">Programmes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">12</div>
                <div className="text-sm text-gray-600 mt-1">Weeks</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">100%</div>
                <div className="text-sm text-gray-600 mt-1">Practical</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Benefits */}
      <section className="py-16 border-y border-gray-100">
        <Container>
          <div className="grid md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 text-white mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Video/Image Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&q=80"
                alt="Professional training classroom"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <h3 className="text-3xl font-bold mb-2">Real-World Training Experience</h3>
                <p className="text-lg text-white/90">Learn from industry experts in professional environments</p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Our Programmes Stand Out</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our training programmes combine theoretical knowledge with hands-on practical experience,
                ensuring you&apos;re job-ready from day one.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Industry-Recognized Certifications</p>
                    <p className="text-gray-600 text-sm">AAT, ICB, and CIPP aligned qualifications</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Hands-On Software Training</p>
                    <p className="text-gray-600 text-sm">Master Sage, Xero, QuickBooks, and more</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Flexible Learning Options</p>
                    <p className="text-gray-600 text-sm">Evening, weekend, and online classes available</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Filter Tabs */}
      <section className="sticky top-16 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <Container>
          <div className="flex gap-2 overflow-x-auto py-4 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium whitespace-nowrap transition-all text-sm ${
                  category === selectedCategory
                    ? "bg-gray-900 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* Programmes Grid */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProgrammes.map((programme) => (
              <div
                key={programme.id}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={programme.image}
                    alt={programme.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {programme.isPopular && (
                    <div className="absolute top-4 right-4">
                      <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-full shadow-lg">
                        <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                        <span className="text-xs font-semibold text-gray-900">Popular</span>
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-white/90 text-gray-900 border-0 font-semibold">
                      {programme.category}
                    </Badge>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="outline" className="text-xs border-gray-200">
                      {programme.level}
                    </Badge>
                    <div className="flex items-center gap-1.5 text-sm text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span>{programme.duration}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {programme.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed line-clamp-2">
                    {programme.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {programme.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                    <div>
                      <div className="text-3xl font-bold text-gray-900">
                        £{programme.price.toLocaleString()}
                      </div>
                      <div className="text-xs text-gray-500 mt-0.5">One-time payment</div>
                    </div>
                    <Link
                      href={`/programmes/${programme.slug}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium text-sm"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-24 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 lg:p-16 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm mb-6">
                <Users className="w-8 h-8" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Not Sure Which Programme Is Right For You?
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Book a free consultation with our career advisors. We&apos;ll assess your skills and
                recommend the perfect training path for your career.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
              >
                Book Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
