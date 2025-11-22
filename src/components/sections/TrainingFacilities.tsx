"use client";

import Image from "next/image";
import { Container } from "@/components/ui";
import { Monitor, Wifi, Coffee, Users, Clock, MapPin, Sparkles, Award } from "lucide-react";

const facilities = [
  {
    icon: Monitor,
    title: "Modern Computer Labs",
    description: "Latest BrightPay software and professional payroll systems",
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: Wifi,
    title: "High-Speed Internet",
    description: "Fast, reliable connectivity for online learning resources",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: Coffee,
    title: "Comfortable Spaces",
    description: "Refreshments and relaxation areas for breaks",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Users,
    title: "Small Class Sizes",
    description: "Maximum 4 students for personalized attention",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Weekend classes perfect for working professionals",
    color: "from-rose-500 to-orange-500",
  },
  {
    icon: MapPin,
    title: "Convenient Location",
    description: "Easy access by public transport with parking available",
    color: "from-orange-500 to-amber-500",
  },
];

const images = [
  {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
    alt: "Modern training facility",
    title: "State-of-the-Art Learning Environment",
  },
  {
    src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&q=80",
    alt: "One-to-one training session",
    title: "Personalized Instruction",
  },
  {
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80",
    alt: "Professional training space",
    title: "Collaborative Learning Spaces",
  },
];

export function TrainingFacilities() {
  return (
    <section className="section-padding bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-indigo-200/20 rounded-full blur-3xl animate-float-delayed" />
      </div>

      <Container className="relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/80 backdrop-blur-sm border border-blue-200/50 mb-6">
            <Sparkles className="h-4 w-4 text-blue-700" />
            <span className="text-sm font-semibold text-blue-900">World-Class Facilities</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Professional Training Environment
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Learn in a modern, fully-equipped facility designed specifically for payroll training excellence
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {images.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl shadow-elegant hover:shadow-hover-elegant transition-all duration-500">
              {/* Ambient Glow */}
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-blue-500/20 via-transparent to-indigo-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 z-0" />

              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Title */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white font-bold text-xl">{image.title}</h3>
                </div>

                {/* Badge */}
                <div className="absolute top-4 right-4">
                  <div className="px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm flex items-center gap-1.5 shadow-lg">
                    <Award className="h-4 w-4 text-blue-600" />
                    <span className="text-sm font-semibold text-gray-900">Premium</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Facilities Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => {
            const Icon = facility.icon;
            return (
              <div key={index} className="group relative">
                {/* Ambient Glow */}
                <div className={`absolute -inset-px rounded-2xl bg-gradient-to-br ${facility.color} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500`} />

                <div className="relative bg-white rounded-2xl p-8 border border-gray-200 shadow-elegant group-hover:shadow-hover-elegant transition-all duration-500 hover:-translate-y-2">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${facility.color} text-white mb-6 shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                    <Icon className="h-7 w-7" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors">
                    {facility.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {facility.description}
                  </p>

                  {/* Bottom Accent */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${facility.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-2xl`} />
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
