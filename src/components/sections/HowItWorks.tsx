import Image from "next/image";
import { UserPlus, GraduationCap, Briefcase, Trophy } from "lucide-react";
import { Container } from "@/components/ui";

const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Book Consultation",
    description: "Schedule a free consultation to discuss your career goals. We'll explain the BrightPay training programme and answer all your questions.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&q=80",
  },
  {
    icon: GraduationCap,
    step: "02",
    title: "6-Week Training",
    description: "Master BrightPay with expert 1-to-1 instruction. Learn payroll processing, RTI, pensions, and statutory payments through real projects.",
    image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=600&q=80",
  },
  {
    icon: Trophy,
    step: "03",
    title: "Complete Training",
    description: "Finish the comprehensive 6-week programme and receive your free BrightPay software license for continued practice.",
    image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=600&q=80",
  },
  {
    icon: Briefcase,
    step: "04",
    title: "Land Your Job",
    description: "Leverage our CV support, job application assistance, and interview preparation to secure your first payroll role quickly.",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&q=80",
  },
];

export function HowItWorks() {
  return (
    <section className="section-padding bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-indigo-200/20 rounded-full blur-3xl animate-float-delayed" />
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
            <span className="text-sm font-semibold text-blue-900">Simple 4-Step Process</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            Your Path to Payroll Success
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            From consultation to career launch – a proven journey to becoming a qualified payroll professional
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line - Professional gradient */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-blue-400 to-indigo-600 rounded-full" style={{ width: '85%', marginLeft: '7.5%' }} />

          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative group">
                  {/* Background Image Card with Professional Overlay */}
                  <div className="absolute inset-0 -top-20 rounded-3xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="relative h-full w-full">
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-white/98 via-white/90 to-white/98" />
                    </div>
                  </div>

                  {/* Icon Circle - Professional Design */}
                  <div className="relative z-10 mb-8 flex justify-center">
                    <div className="relative">
                      {/* Ambient Glow */}
                      <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-blue-500/20 to-indigo-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <div className="relative flex items-center justify-center w-40 h-40 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 shadow-elegant group-hover:shadow-hover-elegant group-hover:scale-110 transition-all duration-500">
                        <div className="flex flex-col items-center">
                          <Icon className="h-12 w-12 text-white mb-2" />
                          <span className="text-white text-lg font-bold">{step.step}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content - Professional Typography */}
                  <div className="relative z-10 text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-900 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-base">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA - Professional Design */}
        <div className="mt-24">
          <div className="relative">
            {/* Ambient Glow */}
            <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-blue-500/20 via-transparent to-indigo-500/20 blur-xl" />

            <div className="relative p-12 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200/50 rounded-3xl shadow-elegant text-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Ready to Start Your Payroll Career?
              </h3>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Book a free consultation to discuss the BrightPay training programme and your career goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-10 py-4 text-lg font-semibold bg-blue-600 text-white hover:bg-blue-700 rounded-xl shadow-elegant hover:shadow-hover-elegant transition-all duration-300"
                >
                  Book Free Consultation
                </a>
                <a
                  href="/programmes"
                  className="inline-flex items-center justify-center gap-2 px-10 py-4 text-lg font-semibold border-2 border-blue-600 text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-300"
                >
                  View Full Curriculum
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
