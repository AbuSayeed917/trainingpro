"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, XCircle, CheckCircle, Sparkles } from "lucide-react";
import { Container } from "@/components/ui";

const transformations = [
  {
    before: "No payroll experience",
    after: "Confident payroll professional",
    beforeIcon: XCircle,
    afterIcon: CheckCircle,
  },
  {
    before: "Struggling to find entry role",
    after: "Multiple job offers",
    beforeIcon: XCircle,
    afterIcon: CheckCircle,
  },
  {
    before: "No practical payroll experience",
    after: "Trained with BrightPay software",
    beforeIcon: XCircle,
    afterIcon: CheckCircle,
  },
  {
    before: "Generic online courses",
    after: "1-to-1 expert training",
    beforeIcon: XCircle,
    afterIcon: CheckCircle,
  },
];

export function BeforeAfter() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section className="section-padding bg-gradient-to-br from-white via-blue-50/20 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl animate-float-delayed" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)',
        backgroundSize: '80px 80px'
      }} />

      <Container className="relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200/50 mb-6 shadow-lg">
            <Sparkles className="h-4 w-4 text-blue-600" />
            <span className="text-sm font-bold text-blue-900">Life-Changing Transformation</span>
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            Before BrightPay Training
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 mt-2">
              vs After BrightPay Training
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See how our students transform their careers in just 6 weeks with expert 1-to-1 training
          </p>
        </div>

        {/* Main Comparison */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* BEFORE Card */}
            <div className="relative group">
              {/* Dark overlay for "before" */}
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-red-500/20 via-orange-500/10 to-red-500/20 blur-xl" />

              <div className="relative h-full p-10 bg-gradient-to-br from-gray-100 to-gray-200 border-2 border-gray-300 rounded-3xl shadow-elegant">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 border border-red-300 rounded-full mb-6">
                  <XCircle className="h-5 w-5 text-red-600" />
                  <span className="text-sm font-bold text-red-900 uppercase tracking-wider">Before</span>
                </div>

                {/* Image */}
                <div className="relative h-64 rounded-2xl overflow-hidden mb-8 opacity-60">
                  <Image
                    src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=600&q=80"
                    alt="Before training"
                    fill
                    className="object-cover grayscale"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gray-900/40" />
                </div>

                <h3 className="text-3xl font-bold text-gray-900 mb-6">The Struggle</h3>

                {/* Issues List */}
                <ul className="space-y-4">
                  {transformations.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <XCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                      <span className="text-lg text-gray-700 font-medium leading-relaxed">{item.before}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* VS Divider */}
            <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full blur-xl opacity-50" />
                <div className="relative w-24 h-24 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center shadow-elegant">
                  <ArrowRight className="h-12 w-12 text-white" />
                </div>
              </div>
            </div>

            {/* AFTER Card */}
            <div className="relative group">
              {/* Bright overlay for "after" */}
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-emerald-500/30 via-blue-500/20 to-indigo-500/30 blur-xl" />

              <div className="relative h-full p-10 bg-gradient-to-br from-emerald-50 via-blue-50 to-indigo-50 border-2 border-emerald-300 rounded-3xl shadow-elegant">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 border border-emerald-300 rounded-full mb-6">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <span className="text-sm font-bold text-emerald-900 uppercase tracking-wider">After</span>
                </div>

                {/* Image */}
                <div className="relative h-64 rounded-2xl overflow-hidden mb-8">
                  <Image
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80"
                    alt="After training"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent" />
                </div>

                <h3 className="text-3xl font-bold text-gray-900 mb-6">The Success</h3>

                {/* Success List */}
                <ul className="space-y-4">
                  {transformations.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-1" />
                      <span className="text-lg text-gray-900 font-bold leading-relaxed">{item.after}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Banner */}
        <div className="relative max-w-5xl mx-auto">
          <div className="absolute -inset-px rounded-3xl bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-blue-500/20 blur-xl" />

          <div className="relative bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 shadow-elegant text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Transform Your Career with BrightPay Training
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              In just 6 weeks, go from zero experience to confident payroll professional
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/programmes"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-600 font-bold text-lg rounded-xl shadow-elegant hover:shadow-hover-elegant hover:scale-105 transition-all duration-300"
              >
                View Full Curriculum
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-700 text-white font-bold text-lg rounded-xl border-2 border-blue-400 hover:bg-blue-800 transition-all duration-300"
              >
                Book Free Consultation
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
