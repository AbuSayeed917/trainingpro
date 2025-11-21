import Image from "next/image";
import { Award, BookOpen, Briefcase, Users, TrendingUp, Shield } from "lucide-react";
import { Container } from "@/components/ui";

const features = [
  {
    icon: Award,
    title: "Professional Training",
    description: "Complete our comprehensive BrightPay Payroll Training programme, designed to meet industry standards across the UK.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&q=80",
  },
  {
    icon: BookOpen,
    title: "One-to-One Instruction",
    description: "Learn directly from a certified payroll specialist with 15+ years global payroll experience in personalized 1-to-1 sessions.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&q=80",
  },
  {
    icon: Briefcase,
    title: "Real Payroll Projects",
    description: "Master BrightPay software through hands-on projects, processing real payroll scenarios employers need.",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&q=80",
  },
  {
    icon: Users,
    title: "Maximum 4 Students",
    description: "Small class sizes ensure individual attention and tailored instruction for your learning pace.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&q=80",
  },
  {
    icon: TrendingUp,
    title: "Complete Career Support",
    description: "Get CV assistance, job application help, and interview preparation to land your first payroll role.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80",
  },
  {
    icon: Shield,
    title: "Weekend Flexibility",
    description: "Perfect for working professionals and students with convenient weekend class scheduling options.",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&q=80",
  },
];

export function Features() {
  return (
    <section className="section-padding bg-gradient-to-br from-white via-slate-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-indigo-100/30 rounded-full blur-3xl animate-float-delayed" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/80 backdrop-blur-sm border border-blue-200/50 mb-6">
            <Shield className="h-4 w-4 text-blue-700" />
            <span className="text-sm font-semibold text-blue-900">Premium Training Benefits</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            Why Choose Our BrightPay Training
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Expert one-to-one instruction, practical hands-on experience, and complete career support
            designed to launch your payroll career in just 6 weeks.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-elegant hover:shadow-hover-elegant transition-all duration-500 hover:-translate-y-2 overflow-hidden border border-gray-100"
              >
                {/* Background Image with Professional Overlay */}
                <div className="absolute inset-0 opacity-[0.06] group-hover:opacity-[0.12] transition-opacity duration-500">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-indigo-50/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Ambient Glow on Hover */}
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-blue-500/10 via-transparent to-indigo-500/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />

                <div className="relative">
                  {/* Icon Container */}
                  <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100 text-blue-600 group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:text-white transition-all duration-500 shadow-lg group-hover:scale-110">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed text-base">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
