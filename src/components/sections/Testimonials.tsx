import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { Container, Card } from "@/components/ui";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Payroll Administrator",
    company: "TechCorp UK",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    content: "The BrightPay training was exceptional. The 1-to-1 instruction meant I could learn at my own pace, and the trainer's 15+ years experience really showed. Within 2 months of completing the course, I secured my first payroll role!",
    rating: 5,
  },
  {
    name: "James Chen",
    role: "Payroll Officer",
    company: "Anderson & Co",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    content: "Weekend classes were perfect for me as I was working full-time. Learning BrightPay with real payroll projects gave me the confidence to apply for payroll positions. The CV support helped me land interviews quickly.",
    rating: 5,
  },
  {
    name: "Amara Okafor",
    role: "Junior Payroll Specialist",
    company: "NHS Trust",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80",
    content: "Small class size (only 3 of us) meant tons of personal attention. Working through actual payroll scenarios - RTI, pensions, statutory payments - made everything click. Best £999 I've ever spent on my career!",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="section-padding bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '80px 80px'
      }} />

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-float-delayed" />

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
            <span className="text-sm font-semibold text-white">Student Success Stories</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6">
            Transform Your Career Like They Did
          </h2>
          <p className="text-xl text-blue-100 leading-relaxed">
            Real stories from graduates who launched successful payroll careers with our BrightPay training
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group relative">
              {/* Ambient Glow */}
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-blue-500/20 via-transparent to-indigo-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />

              <Card className="relative overflow-hidden bg-white/10 backdrop-blur-xl border border-white/20 shadow-elegant hover:shadow-hover-elegant transition-all duration-500 h-full">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-10">
                  <Quote className="h-20 w-20 text-white" />
                </div>

                <div className="p-8 flex flex-col h-full">
                  {/* Rating */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400 drop-shadow-lg" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-blue-50 leading-relaxed mb-8 relative z-10 flex-1 text-base">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-6 border-t border-white/20">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-white/30">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                        sizes="56px"
                      />
                    </div>
                    <div>
                      <div className="font-bold text-white text-lg">{testimonial.name}</div>
                      <div className="text-sm text-blue-200 font-medium">
                        {testimonial.role}
                      </div>
                      <div className="text-xs text-blue-300">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Stats Bar - Professional Glass Design */}
        <div className="mt-20 relative">
          {/* Ambient Glow */}
          <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-blue-400/20 via-transparent to-indigo-400/20 blur-xl" />

          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8 p-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-elegant">
            <div className="text-center group">
              <div className="text-5xl font-bold text-white mb-3 group-hover:scale-110 transition-transform">4.9/5</div>
              <div className="text-sm text-blue-200 font-semibold">Student Rating</div>
            </div>
            <div className="text-center group">
              <div className="text-5xl font-bold text-white mb-3 group-hover:scale-110 transition-transform">6</div>
              <div className="text-sm text-blue-200 font-semibold">Week Programme</div>
            </div>
            <div className="text-center group">
              <div className="text-5xl font-bold text-white mb-3 group-hover:scale-110 transition-transform">1:1</div>
              <div className="text-sm text-blue-200 font-semibold">Personal Training</div>
            </div>
            <div className="text-center group">
              <div className="text-5xl font-bold text-white mb-3 group-hover:scale-110 transition-transform">£999</div>
              <div className="text-sm text-blue-200 font-semibold">All-Inclusive Price</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
