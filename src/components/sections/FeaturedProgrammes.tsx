import Link from "next/link";
import Image from "next/image";
import { Clock, Users, ArrowRight } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Badge, Container } from "@/components/ui";
import type { Programme } from "@/types";

const featuredProgrammes: Programme[] = [
  {
    id: "1",
    title: "Professional Payroll Management",
    slug: "professional-payroll-management",
    description: "Master payroll processing, compliance, and management with industry-standard software.",
    category: "payroll",
    duration: "12 weeks",
    level: "intermediate",
    price: 1299,
    currency: "GBP",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
    features: ["PAYE & NI", "RTI Submissions", "Pension Auto-Enrolment", "Payroll Software Training"],
    isFeatured: true,
    isPopular: true,
  },
  {
    id: "2",
    title: "Bookkeeping Fundamentals",
    slug: "bookkeeping-fundamentals",
    description: "Learn essential bookkeeping skills from basic transactions to financial statements.",
    category: "bookkeeping",
    duration: "10 weeks",
    level: "beginner",
    price: 999,
    currency: "GBP",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
    features: ["Double-Entry", "VAT Returns", "Bank Reconciliation", "Sage & Xero Training"],
    isFeatured: true,
  },
  {
    id: "3",
    title: "Advanced Accounting & Tax",
    slug: "advanced-accounting-tax",
    description: "Advance your career with comprehensive accounting and tax compliance training.",
    category: "accounting",
    duration: "16 weeks",
    level: "advanced",
    price: 1799,
    currency: "GBP",
    image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=800&q=80",
    features: ["Financial Statements", "Tax Planning", "HMRC Compliance", "Year-End Procedures"],
    isFeatured: true,
  },
  {
    id: "4",
    title: "HR & Employment Law",
    slug: "hr-employment-law",
    description: "Understand employment legislation, contracts, and workplace compliance essentials.",
    category: "hr",
    duration: "8 weeks",
    level: "beginner",
    price: 899,
    currency: "GBP",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80",
    features: ["Employment Contracts", "Workplace Rights", "HR Documentation", "Conflict Resolution"],
    isFeatured: true,
  },
  {
    id: "5",
    title: "QuickBooks & Cloud Accounting",
    slug: "quickbooks-cloud-accounting",
    description: "Master cloud-based accounting software for modern business management.",
    category: "software",
    duration: "6 weeks",
    level: "beginner",
    price: 699,
    currency: "GBP",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    features: ["QuickBooks Online", "Invoicing", "Expense Tracking", "Financial Reports"],
    isFeatured: true,
    isPopular: true,
  },
  {
    id: "6",
    title: "Management Accounting",
    slug: "management-accounting",
    description: "Develop strategic financial planning and analysis skills for business decisions.",
    category: "accounting",
    duration: "14 weeks",
    level: "intermediate",
    price: 1599,
    currency: "GBP",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    features: ["Budgeting", "Cost Analysis", "Performance Metrics", "Strategic Planning"],
    isFeatured: true,
  },
];

export function FeaturedProgrammes() {
  return (
    <section className="section-padding bg-white">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
            Featured Training Programmes
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Choose from our industry-leading programmes designed to fast-track your career with
            practical skills and recognized certifications
          </p>
        </div>

        {/* Programme Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProgrammes.map((programme) => (
            <Card key={programme.id} hover className="flex flex-col overflow-hidden">
              {/* Real Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={programme.image}
                  alt={programme.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {programme.isPopular && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge variant="secondary">Most Popular</Badge>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              <CardHeader>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <Badge>{programme.category}</Badge>
                  <Badge variant="outline">{programme.level}</Badge>
                </div>
                <CardTitle className="text-xl">{programme.title}</CardTitle>
                <CardDescription>{programme.description}</CardDescription>
              </CardHeader>

              <CardContent className="flex-1">
                <ul className="space-y-2 mb-6">
                  {programme.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                      <div className="mt-0.5 h-4 w-4 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                        <div className="h-2 w-2 rounded-full bg-green-600" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-4 text-sm text-gray-600 border-t border-gray-200 pt-4">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{programme.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>Limited spots</span>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="flex items-center justify-between pt-4 border-t border-gray-200">
                <div>
                  <div className="text-2xl font-bold text-gray-900">
                    £{programme.price.toLocaleString()}
                  </div>
                  <div className="text-xs text-gray-500">One-time payment</div>
                </div>
                <Link
                  href={`/programmes/${programme.slug}`}
                  className="inline-flex items-center justify-center gap-2 h-9 px-4 text-sm font-medium bg-primary-600 text-white hover:bg-primary-700 rounded-lg shadow-md hover:shadow-lg transition-all"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* View All Link */}
        <div className="mt-12 text-center">
          <Link
            href="/programmes"
            className="inline-flex items-center justify-center gap-2 h-13 px-8 text-lg font-medium border-2 border-primary-600 text-primary-600 hover:bg-primary-50 rounded-lg transition-all"
          >
            View All Programmes
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
