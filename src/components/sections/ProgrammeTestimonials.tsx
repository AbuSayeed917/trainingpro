"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Container } from "@/components/ui";

const testimonials = [
  {
    id: 1,
    name: "Professional Training Experience",
    role: "BrightPay Training Graduate",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    content: "The hands-on BrightPay training was invaluable. The one-to-one instruction helped me master payroll processing quickly and confidently.",
    rating: 5,
    highlight: "Excellent hands-on training"
  },
  {
    id: 2,
    name: "Career Development Success",
    role: "Payroll Specialist",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    content: "The comprehensive curriculum covered everything from RTI submissions to pension schemes. The practical experience was essential for my career.",
    rating: 5,
    highlight: "Comprehensive curriculum"
  },
  {
    id: 3,
    name: "Practical Skills Focus",
    role: "Training Programme Participant",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    content: "Learning BrightPay software with real-world scenarios prepared me perfectly for working in payroll. The trainer's experience really shows.",
    rating: 5,
    highlight: "Real-world preparation"
  }
];

export function ProgrammeTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 left-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-float-delayed" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '100px 100px'
      }} />

      <Container className="relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
              <Quote className="h-4 w-4 text-cyan-400" />
              <span className="text-sm font-semibold text-white">Participant Experiences</span>
            </div>

            <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight">
              Training Programme
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 mt-2">
                Feedback
              </span>
            </h2>

            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Hear from participants about their experience with our BrightPay payroll training programme
            </p>
          </div>

          {/* Testimonial Slider */}
          <div className="relative">
            {/* Main Testimonial Card */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/20 via-transparent to-indigo-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-elegant hover:shadow-hover-elegant transition-all duration-500">
                <div className="grid md:grid-cols-[300px_1fr] gap-8 items-center">
                  {/* Left: Image & Info */}
                  <div className="text-center md:text-left">
                    <div className="relative inline-block mb-6">
                      <div className="absolute -inset-2 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full blur-lg opacity-50" />
                      <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white/20">
                        <Image
                          src={testimonials[activeIndex].image}
                          alt={testimonials[activeIndex].name}
                          fill
                          className="object-cover"
                          sizes="192px"
                        />
                      </div>
                    </div>

                    <h4 className="text-2xl font-bold text-white mb-2">
                      {testimonials[activeIndex].name}
                    </h4>
                    <p className="text-blue-200 mb-4">{testimonials[activeIndex].role}</p>

                    {/* Rating */}
                    <div className="flex justify-center md:justify-start gap-1 mb-4">
                      {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>

                    {/* Highlight Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 border border-emerald-400/50 rounded-full">
                      <span className="text-sm font-semibold text-emerald-300">
                        {testimonials[activeIndex].highlight}
                      </span>
                    </div>
                  </div>

                  {/* Right: Quote */}
                  <div className="relative">
                    <Quote className="h-12 w-12 text-blue-400/20 absolute -top-4 -left-4" />
                    <p className="text-2xl text-white leading-relaxed font-light italic">
                      &ldquo;{testimonials[activeIndex].content}&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === activeIndex
                        ? 'w-8 bg-blue-400'
                        : 'w-2 bg-white/30 hover:bg-white/50'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
