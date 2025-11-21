import { BookingCalendar } from "@/components/booking/BookingCalendar";
import { CheckCircle2, Award, Users, Clock } from "lucide-react";
import { Container } from "@/components/ui";
import { BookingVisuals } from "@/components/sections/BookingVisuals";

const benefits = [
  {
    icon: CheckCircle2,
    title: "Personalized Guidance",
    description: "Get expert advice tailored to your career goals and background",
  },
  {
    icon: Award,
    title: "No Obligation",
    description: "Free consultation with no pressure or commitment required",
  },
  {
    icon: Users,
    title: "Meet Your Trainer",
    description: "Speak directly with our 15+ year payroll specialist",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Weekend and weekday slots available to fit your schedule",
  },
];

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-float-delayed" />
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '100px 100px'
        }} />

        <Container className="relative z-10 py-20">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
              Book Your Free
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 mt-2">
                Consultation Today
              </span>
            </h1>

            <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-3xl mx-auto">
              Schedule a free consultation to discuss your payroll career goals and learn how our BrightPay training can help you succeed
            </p>
          </div>
        </Container>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-16 text-white" preserveAspectRatio="none" viewBox="0 0 1440 48" fill="none">
            <path d="M0 48h1440V0S1020 48 720 48 0 0 0 0v48z" fill="currentColor" />
          </svg>
        </div>
      </section>

      {/* Booking Visuals Section */}
      <BookingVisuals />

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Book a Consultation?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Take the first step towards your payroll career with a no-obligation consultation
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="group relative">
                    <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-blue-500/10 via-transparent to-indigo-500/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />

                    <div className="relative h-full p-6 bg-white rounded-2xl border border-gray-200 shadow-elegant group-hover:shadow-hover-elegant transition-all duration-500">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100 text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-500">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* Booking Calendar */}
      <BookingCalendar />
    </div>
  );
}
