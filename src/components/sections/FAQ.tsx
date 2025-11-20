"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, Award, Briefcase, Clock, TrendingUp, CreditCard, GraduationCap } from "lucide-react";
import { Container } from "@/components/ui";

const faqs = [
  {
    question: "What qualifications will I receive upon completion?",
    answer: "Upon successful completion of your chosen programme, you will receive industry-recognized certifications from leading professional bodies such as AAT, ICB, or CIPP, depending on your course. These qualifications are highly valued by employers across the UK and internationally.",
    icon: Award,
    image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=400&q=80",
  },
  {
    question: "How is the work experience arranged?",
    answer: "We help connect students with potential work placement opportunities. Once you complete a significant portion of your training, we'll support you in finding suitable companies based on your skills, location, and career goals. Work placements typically last 4-12 weeks.",
    icon: Briefcase,
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&q=80",
  },
  {
    question: "Can I study while working full-time?",
    answer: "Absolutely! Our programmes are designed with flexibility in mind. You can choose from evening classes, weekend sessions, or our online learning platform that allows you to study at your own pace. Most students complete the programme in 10-16 weeks while working full-time.",
    icon: Clock,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=80",
  },
  {
    question: "Do you offer career support?",
    answer: "Yes! We provide career support including CV writing guidance, interview preparation, and advice on job searching. Our goal is to help you successfully transition into your chosen career path after completing your training.",
    icon: TrendingUp,
    image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&q=80",
  },
  {
    question: "Are there any financing options available?",
    answer: "Yes, we offer several payment options including installment plans, early bird discounts, and group discounts. We also accept government-funded training schemes and work with various finance providers. Contact our admissions team to discuss the best option for you.",
    icon: CreditCard,
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&q=80",
  },
  {
    question: "What level of experience do I need to start?",
    answer: "Our programmes cater to all levels, from complete beginners to experienced professionals looking to upskill. During your free consultation, we'll assess your current knowledge and recommend the most suitable programme. No prior experience in finance or accounting is required for beginner courses.",
    icon: GraduationCap,
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&q=80",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section-padding bg-gray-50">
      <Container>
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to know about our training programmes
            </p>
          </div>

          {/* FAQ List */}
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const Icon = faq.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-200 hover:shadow-md group"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-4 flex-1">
                      {/* Icon */}
                      <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-600 transition-colors">
                        <Icon className="h-6 w-6 text-primary-600 group-hover:text-white transition-colors" />
                      </div>
                      <span className="font-semibold text-gray-900">
                        {faq.question}
                      </span>
                    </div>
                    <ChevronDown
                      className={`h-5 w-5 text-primary-600 flex-shrink-0 transition-transform duration-200 ${
                        openIndex === index ? "transform rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openIndex === index && (
                    <div className="px-6 pb-5">
                      <div className="flex gap-6">
                        {/* Image */}
                        <div className="hidden sm:block relative w-32 h-24 rounded-lg overflow-hidden flex-shrink-0">
                          <Image
                            src={faq.image}
                            alt={faq.question}
                            fill
                            className="object-cover"
                            sizes="128px"
                          />
                        </div>
                        {/* Answer */}
                        <p className="text-gray-600 leading-relaxed flex-1 pt-2">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Contact CTA */}
          <div className="mt-12 text-center p-8 bg-primary-50 rounded-2xl">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Our admissions team is here to help. Get in touch for personalized advice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center h-11 px-6 text-base font-medium bg-primary-600 text-white hover:bg-primary-700 rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                Contact Us
              </a>
              <a
                href="tel:+442012345678"
                className="inline-flex items-center justify-center h-11 px-6 text-base font-medium border-2 border-primary-600 text-primary-600 hover:bg-primary-50 rounded-lg transition-all"
              >
                Call: +44 (0) 20 1234 5678
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
