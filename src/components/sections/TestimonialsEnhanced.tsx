"use client";

import { Container } from "@/components/ui";
import { Star, Quote, ArrowLeft, ArrowRight, TrendingUp, Award } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Payroll Administrator",
    company: "Enterprise Solutions Ltd",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    rating: 5,
    quote: "The BrightPay training transformed my career. Within 3 months of completing the course, I secured a payroll position at a major firm earning £28,000. The one-to-one instruction was invaluable and the trainer's experience showed in every session.",
    outcome: "£28k starting salary",
    timeframe: "3 months to employment",
    gradient: "from-blue-600 to-indigo-600",
  },
  {
    name: "James Peterson",
    role: "Senior Payroll Officer",
    company: "TechCorp International",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    rating: 5,
    quote: "I was stuck in admin earning £22k for years. After this training, I moved into payroll and now earn £34,000. The practical projects and CV support made all the difference. Best investment I&apos;ve ever made in my career.",
    outcome: "£12k salary increase",
    timeframe: "6 weeks training",
    gradient: "from-purple-600 to-pink-600",
  },
  {
    name: "Emily Rodriguez",
    role: "Payroll Specialist",
    company: "Financial Services Group",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    rating: 5,
    quote: "Coming from a completely different field, I was nervous about changing careers. The trainer&apos;s patience and expertise gave me the confidence I needed. Now I&apos;m working in payroll earning £30,000 and loving every day.",
    outcome: "Career change success",
    timeframe: "2 months to new career",
    gradient: "from-emerald-600 to-cyan-600",
  },
  {
    name: "Michael Chen",
    role: "Payroll Manager",
    company: "Healthcare Trust",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    rating: 5,
    quote: "The comprehensive BrightPay training covered everything from basics to advanced topics. The real-world scenarios prepared me perfectly for the job market. I&apos;m now managing a team and earning £45,000.",
    outcome: "Management position",
    timeframe: "1 year progression",
    gradient: "from-orange-600 to-red-600",
  },
];

export function TestimonialsEnhanced() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section className="section-padding bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl animate-float-slow" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '100px 100px'
      }} />

      <Container className="relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 shadow-elegant">
              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
              <span className="text-sm font-semibold text-white">Student Success Stories</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              Real Results from
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 mt-2">
                Real Students
              </span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Discover how our BrightPay training has transformed careers and opened doors to exciting payroll opportunities
            </p>
          </div>

          {/* Main Testimonial Card - 3D Effect */}
          <div className="relative mb-16">
            {/* Ambient Glow */}
            <div className={`absolute -inset-8 bg-gradient-to-r ${activeTestimonial.gradient} rounded-3xl opacity-20 blur-3xl`} />

            <div className="relative bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl overflow-hidden shadow-elegant">
              <div className="grid lg:grid-cols-5 gap-0">
                {/* Left: Image & Quick Stats */}
                <div className="lg:col-span-2 relative">
                  {/* Profile Image */}
                  <div className="relative h-full min-h-[400px] lg:min-h-[500px]">
                    <Image
                      src={activeTestimonial.image}
                      alt={activeTestimonial.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/60 to-transparent" />

                    {/* Floating Stats Cards */}
                    <div className="absolute bottom-8 left-8 right-8 space-y-4">
                      {/* Outcome Card */}
                      <div className="relative group">
                        <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-emerald-500/30 to-cyan-500/30 blur-lg" />
                        <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 p-5 rounded-2xl">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="p-2 rounded-lg bg-emerald-500/20">
                              <TrendingUp className="h-5 w-5 text-emerald-400" />
                            </div>
                            <span className="text-sm font-medium text-emerald-300">Success Outcome</span>
                          </div>
                          <div className="text-2xl font-bold text-white">{activeTestimonial.outcome}</div>
                        </div>
                      </div>

                      {/* Timeframe Card */}
                      <div className="relative group">
                        <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-blue-500/30 to-purple-500/30 blur-lg" />
                        <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 p-5 rounded-2xl">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="p-2 rounded-lg bg-blue-500/20">
                              <Award className="h-5 w-5 text-blue-400" />
                            </div>
                            <span className="text-sm font-medium text-blue-300">Achievement Time</span>
                          </div>
                          <div className="text-2xl font-bold text-white">{activeTestimonial.timeframe}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Testimonial Content */}
                <div className="lg:col-span-3 p-12 lg:p-16 flex flex-col justify-center">
                  {/* Quote Icon */}
                  <div className="mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm">
                      <Quote className="h-8 w-8 text-blue-400" />
                    </div>
                  </div>

                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(activeTestimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-2xl lg:text-3xl font-medium text-white leading-relaxed mb-10">
                    {activeTestimonial.quote}
                  </blockquote>

                  {/* Author Info */}
                  <div className="border-t border-white/10 pt-8">
                    <div className="font-bold text-xl text-white mb-1">{activeTestimonial.name}</div>
                    <div className="text-blue-300 font-medium mb-1">{activeTestimonial.role}</div>
                    <div className="text-blue-400 text-sm">{activeTestimonial.company}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation & Thumbnails */}
          <div className="flex items-center justify-between gap-8">
            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="group flex items-center justify-center w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all shadow-elegant hover:shadow-hover-elegant"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="h-6 w-6 text-white group-hover:-translate-x-1 transition-transform" />
            </button>

            {/* Thumbnail Navigation */}
            <div className="flex-1 grid grid-cols-4 gap-4">
              {testimonials.map((testimonial, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setActiveIndex(index);
                    setIsAutoPlaying(false);
                  }}
                  className={`group relative overflow-hidden rounded-2xl transition-all duration-500 ${
                    index === activeIndex
                      ? 'ring-4 ring-white shadow-elegant scale-105'
                      : 'hover:scale-105 opacity-50 hover:opacity-100'
                  }`}
                >
                  {/* Ambient Glow */}
                  {index === activeIndex && (
                    <div className={`absolute -inset-2 bg-gradient-to-r ${testimonial.gradient} rounded-2xl opacity-30 blur-xl`} />
                  )}

                  <div className="relative aspect-square">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                      sizes="200px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3">
                      <div className="text-white font-bold text-sm truncate">{testimonial.name}</div>
                      <div className="text-blue-300 text-xs truncate">{testimonial.role}</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Navigation Button */}
            <button
              onClick={nextTestimonial}
              className="group flex items-center justify-center w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all shadow-elegant hover:shadow-hover-elegant"
              aria-label="Next testimonial"
            >
              <ArrowRight className="h-6 w-6 text-white group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center gap-2 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveIndex(index);
                  setIsAutoPlaying(false);
                }}
                className={`h-2 rounded-full transition-all duration-500 ${
                  index === activeIndex
                    ? 'w-12 bg-gradient-to-r from-blue-400 to-cyan-400'
                    : 'w-2 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
