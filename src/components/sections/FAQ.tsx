"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, Award, Briefcase, Clock, TrendingUp, CreditCard, GraduationCap, Phone, Mail, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui";

const faqs = [
  {
    question: "What will I learn during the training?",
    answer: "During the 6-week BrightPay Payroll Training programme, you'll gain comprehensive knowledge of UK payroll processing including RTI submissions, HMRC compliance, pension auto-enrolment, statutory payments, and year-end procedures. You'll receive hands-on training with BrightPay software and work on real-world payroll scenarios.",
    icon: Award,
    image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=400&q=80",
  },
  {
    question: "How is the work experience arranged?",
    answer: "During your 6-week training, you'll work on real-world payroll projects as part of the curriculum. This hands-on experience means you'll graduate with practical skills that employers value. Additionally, we help connect students with work placement opportunities and provide support in finding suitable payroll positions after training.",
    icon: Briefcase,
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&q=80",
  },
  {
    question: "Can I study while working full-time?",
    answer: "Absolutely! Our BrightPay training is scheduled on weekends specifically to accommodate working professionals and students. With a maximum of 4 students per session and one-to-one personal instruction, you'll get the flexibility and attention you need to balance work, studies, and training.",
    icon: Clock,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=80",
  },
  {
    question: "Do you offer career support?",
    answer: "Yes! Career support is included in your £999 training package. We provide comprehensive CV assistance, help with job applications, and interview preparation guidance. Our goal is to help you successfully launch your payroll career after completing the training.",
    icon: TrendingUp,
    image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&q=80",
  },
  {
    question: "What is the cost and are there payment options?",
    answer: "The complete BrightPay Payroll Training programme is £999 as a one-time payment. This all-inclusive price covers 6 weeks of expert one-to-one training, BrightPay software (free to use), real-world projects, and complete career support including CV help and job assistance. Contact us to discuss your training schedule.",
    icon: CreditCard,
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&q=80",
  },
  {
    question: "What level of experience do I need to start?",
    answer: "No prior payroll experience is required! Our BrightPay training is suitable for all levels, from complete beginners to those looking to formalize their payroll knowledge. You'll be trained by a 15+ year global payroll specialist who will tailor the one-to-one instruction to your learning pace and background.",
    icon: GraduationCap,
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&q=80",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section-padding bg-gradient-to-br from-white via-slate-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-1/4 left-10 w-80 h-80 bg-indigo-200/20 rounded-full blur-3xl animate-float-delayed" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/80 backdrop-blur-sm border border-blue-200/50 mb-6">
              <span className="text-sm font-semibold text-blue-900">Got Questions?</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Everything you need to know about our BrightPay Payroll Training programme
            </p>
          </div>

          {/* FAQ List - Professional Design */}
          <div className="space-y-6">
            {faqs.map((faq, index) => {
              const Icon = faq.icon;
              return (
                <div
                  key={index}
                  className="relative group"
                >
                  {/* Ambient Glow on Hover */}
                  <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-blue-500/10 via-transparent to-indigo-500/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />

                  <div className="relative bg-white rounded-2xl shadow-elegant border border-gray-100 overflow-hidden transition-all duration-500 hover:shadow-hover-elegant">
                    <button
                      onClick={() => setOpenIndex(openIndex === index ? null : index)}
                      className="w-full px-8 py-6 text-left flex items-center justify-between gap-4 hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-transparent transition-colors"
                    >
                      <div className="flex items-center gap-5 flex-1">
                        {/* Icon - Professional Styling */}
                        <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center group-hover:from-blue-600 group-hover:to-indigo-600 transition-all duration-500 shadow-lg group-hover:scale-110">
                          <Icon className="h-7 w-7 text-blue-600 group-hover:text-white transition-colors duration-500" />
                        </div>
                        <span className="text-lg font-bold text-gray-900 group-hover:text-blue-900 transition-colors">
                          {faq.question}
                        </span>
                      </div>
                      <ChevronDown
                        className={`h-6 w-6 text-blue-600 flex-shrink-0 transition-transform duration-300 ${
                          openIndex === index ? "transform rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openIndex === index && (
                      <div className="px-8 pb-6 bg-gradient-to-br from-blue-50/30 to-transparent">
                        <div className="flex gap-6 pt-4">
                          {/* Image - Professional Rounded */}
                          <div className="hidden sm:block relative w-40 h-28 rounded-xl overflow-hidden flex-shrink-0 shadow-lg">
                            <Image
                              src={faq.image}
                              alt={faq.question}
                              fill
                              className="object-cover"
                              sizes="160px"
                            />
                          </div>
                          {/* Answer - Better Typography */}
                          <p className="text-gray-600 leading-relaxed flex-1 text-base">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Contact CTA - Professional Design */}
          <div className="mt-20">
            <div className="relative group">
              {/* Ambient Glow */}
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-blue-500/20 via-transparent to-indigo-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 border border-white/10 rounded-3xl shadow-elegant hover:shadow-hover-elegant transition-all duration-500">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-[0.02]" style={{
                  backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                  backgroundSize: '100px 100px'
                }} />

                {/* Background Image Overlay */}
                <div className="absolute inset-0 opacity-10">
                  <Image
                    src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&q=80"
                    alt="Professional training environment"
                    fill
                    className="object-cover"
                    sizes="100vw"
                  />
                </div>

                <div className="relative grid lg:grid-cols-2 gap-8 p-12">
                  {/* Left: Content */}
                  <div className="text-white">
                    <h3 className="text-4xl font-bold mb-4">
                      Still have questions?
                    </h3>
                    <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                      Our training team is here to help. Get in touch for personalized advice about the BrightPay programme.
                    </p>

                    {/* Contact Methods */}
                    <div className="space-y-4 mb-8">
                      <a href="tel:+442012345678" className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300 group/item">
                        <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 group-hover/item:scale-110 transition-transform">
                          <Phone className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <div className="text-sm text-blue-200">Call us directly</div>
                          <div className="text-white font-semibold">+44 (0) 20 1234 5678</div>
                        </div>
                      </a>

                      <a href="mailto:info@trainingpro.co.uk" className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300 group/item">
                        <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 group-hover/item:scale-110 transition-transform">
                          <Mail className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <div className="text-sm text-blue-200">Email us anytime</div>
                          <div className="text-white font-semibold">info@trainingpro.co.uk</div>
                        </div>
                      </a>

                      <a href="/contact" className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300 group/item">
                        <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 group-hover/item:scale-110 transition-transform">
                          <MessageCircle className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <div className="text-sm text-blue-200">Send us a message</div>
                          <div className="text-white font-semibold">Contact Form</div>
                        </div>
                      </a>
                    </div>
                  </div>

                  {/* Right: Image */}
                  <div className="relative hidden lg:block">
                    <div className="relative rounded-2xl overflow-hidden shadow-elegant">
                      <div className="relative aspect-[4/5]">
                        <Image
                          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80"
                          alt="Professional consultant ready to help"
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />

                        {/* Floating Badge */}
                        <div className="absolute bottom-6 left-6 right-6">
                          <div className="p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl">
                            <div className="text-white font-bold text-lg mb-1">Expert Support Team</div>
                            <div className="text-blue-200 text-sm">Available Monday - Saturday</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl opacity-20 blur-2xl" />
                    <div className="absolute -top-4 -left-4 w-32 h-32 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-3xl opacity-20 blur-2xl" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
