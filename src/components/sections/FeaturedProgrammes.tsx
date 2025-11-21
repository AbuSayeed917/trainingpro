import Link from "next/link";
import Image from "next/image";
import { Clock, Users, ArrowRight, Award } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Badge, Container } from "@/components/ui";
import type { Programme } from "@/types";

// THE ONE BRIGHTPAY TRAINING PROGRAMME
const featuredProgrammes: Programme[] = [
  {
    id: "1",
    title: "BrightPay Payroll Training",
    slug: "brightpay-payroll",
    description: "Master UK payroll with expert 1-to-1 training. Learn BrightPay software, gain practical experience, and launch your payroll career in just 6 weeks.",
    category: "payroll",
    duration: "6 weeks",
    level: "beginner",
    price: 999,
    currency: "GBP",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
    features: [
      "One-to-one personal instruction",
      "Maximum 4 students per session",
      "15+ years expert trainer",
      "Weekend classes available",
      "Real payroll projects",
      "9 comprehensive modules",
      "CV & job support included",
      "Free BrightPay software"
    ],
    isFeatured: true,
    isPopular: true,
  },
];

export function FeaturedProgrammes() {
  return (
    <section className="section-padding bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }} />

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-indigo-200/20 rounded-full blur-3xl animate-float-delayed" />

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/80 backdrop-blur-sm border border-blue-200/50 mb-6">
            <Award className="h-4 w-4 text-blue-700" />
            <span className="text-sm font-semibold text-blue-900">Professional Training Programme</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            Our BrightPay Training Programme
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Expert 1-to-1 payroll training with weekend flexibility, real-world projects, and complete career support
          </p>
        </div>

        {/* Programme Card - Centered Single Card */}
        <div className="max-w-4xl mx-auto">
          {featuredProgrammes.map((programme) => (
            <Card key={programme.id} className="flex flex-col overflow-hidden shadow-elegant hover:shadow-hover-elegant transition-all duration-500 border-0 bg-white">
              {/* Real Image */}
              <div className="relative h-80 w-full overflow-hidden">
                <Image
                  src={programme.image}
                  alt={programme.title}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 896px"
                />
                {programme.isPopular && (
                  <div className="absolute top-6 right-6 z-10">
                    <Badge variant="secondary" className="text-sm px-5 py-2.5 shadow-lg bg-emerald-500 text-white border-0 font-semibold">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                {/* Key Stats Overlay - More Professional */}
                <div className="absolute bottom-6 left-6 right-6 flex gap-4 text-white">
                  <div className="flex-1 bg-white/10 backdrop-blur-md border border-white/20 px-5 py-3 rounded-xl shadow-lg">
                    <div className="text-3xl font-bold mb-1">6</div>
                    <div className="text-sm font-medium opacity-90">Weeks</div>
                  </div>
                  <div className="flex-1 bg-white/10 backdrop-blur-md border border-white/20 px-5 py-3 rounded-xl shadow-lg">
                    <div className="text-3xl font-bold mb-1">1:1</div>
                    <div className="text-sm font-medium opacity-90">Training</div>
                  </div>
                  <div className="flex-1 bg-white/10 backdrop-blur-md border border-white/20 px-5 py-3 rounded-xl shadow-lg">
                    <div className="text-3xl font-bold mb-1">15+</div>
                    <div className="text-sm font-medium opacity-90">Yrs Exp</div>
                  </div>
                </div>
              </div>

              <CardHeader className="p-8 pb-6">
                <div className="flex items-start justify-between gap-3 mb-4">
                  <Badge className="text-sm px-4 py-1.5 bg-blue-600 border-0 text-white font-semibold">
                    {programme.category}
                  </Badge>
                  <Badge variant="outline" className="text-sm px-4 py-1.5 border-gray-300 text-gray-700 font-semibold">
                    {programme.level}
                  </Badge>
                </div>
                <CardTitle className="text-3xl font-bold text-gray-900 mb-3">{programme.title}</CardTitle>
                <CardDescription className="text-lg text-gray-600 leading-relaxed">{programme.description}</CardDescription>
              </CardHeader>

              <CardContent className="flex-1 px-8 pb-8">
                <ul className="grid grid-cols-2 gap-4 mb-8">
                  {programme.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-gray-700">
                      <div className="mt-0.5 h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 border border-emerald-200">
                        <div className="h-3 w-3 rounded-full bg-emerald-600" />
                      </div>
                      <span className="font-medium leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-8 text-sm text-gray-700 border-t border-gray-200/60 pt-6">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-blue-50">
                      <Clock className="h-5 w-5 text-blue-600" />
                    </div>
                    <span className="font-semibold">{programme.duration}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-blue-50">
                      <Users className="h-5 w-5 text-blue-600" />
                    </div>
                    <span className="font-semibold">Max 4 students</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-blue-50">
                      <Award className="h-5 w-5 text-blue-600" />
                    </div>
                    <span className="font-semibold">Professional Training</span>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-8 border-t border-gray-100 bg-gradient-to-br from-slate-50 to-blue-50/30">
                <div>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-5xl font-bold text-gray-900">£{programme.price.toLocaleString()}</span>
                    <span className="text-lg text-gray-500 font-medium">one-time</span>
                  </div>
                  <div className="text-sm text-gray-600 font-medium">All-inclusive • No hidden fees</div>
                </div>
                <div className="flex flex-col gap-3 w-full sm:w-auto">
                  <Link
                    href="/programmes"
                    className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold bg-blue-600 text-white hover:bg-blue-700 rounded-xl shadow-elegant hover:shadow-hover-elegant transition-all duration-300"
                  >
                    View Full Curriculum
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-8 py-3 text-base font-semibold border-2 border-blue-600 text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-300"
                  >
                    Book Free Consultation
                  </Link>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Additional Info - Professional Styling */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white border border-gray-200 shadow-elegant mb-6">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-bold text-gray-900 text-lg">Weekend Classes Available</span>
            </div>
            <span className="text-gray-500">•</span>
            <span className="text-gray-600 font-medium">Perfect for working professionals</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
