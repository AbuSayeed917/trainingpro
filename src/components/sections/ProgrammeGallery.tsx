"use client";

import Image from "next/image";
import { Container } from "@/components/ui";
import { PlayCircle, Image as ImageIcon, Code, Users, Award } from "lucide-react";

const galleryItems = [
  {
    type: "video",
    thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
    title: "BrightPay Software Training Overview",
    description: "Learn how our comprehensive BrightPay training works",
    category: "Training"
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    title: "Interactive Learning Sessions",
    description: "One-to-one personalized instruction with expert trainer",
    category: "Learning"
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    title: "Professional Training Environment",
    description: "Modern facilities with latest BrightPay software",
    category: "Facilities"
  },
  {
    type: "video",
    thumbnail: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&q=80",
    title: "Real Payroll Scenarios",
    description: "Practice with actual business cases and examples",
    category: "Practice"
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
    title: "Collaborative Learning",
    description: "Small class sizes for maximum attention",
    category: "Experience"
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
    title: "Career Success",
    description: "Launch your payroll career with confidence",
    category: "Success"
  }
];

const categories = [
  { icon: Award, label: "Training", color: "from-blue-500 to-indigo-500" },
  { icon: Users, label: "Learning", color: "from-indigo-500 to-purple-500" },
  { icon: Code, label: "Practice", color: "from-purple-500 to-pink-500" },
  { icon: ImageIcon, label: "Experience", color: "from-pink-500 to-rose-500" }
];

export function ProgrammeGallery() {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" />

      <Container>
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200 mb-6">
              <ImageIcon className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-900">Programme Gallery</span>
            </div>

            <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Experience Our
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 mt-2">
                Training Environment
              </span>
            </h2>

            <p className="text-xl text-gray-600 leading-relaxed">
              Get a glimpse of our professional BrightPay training facilities and learning experience
            </p>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer hover:scale-105"
                >
                  <div className={`p-1.5 rounded-full bg-gradient-to-br ${category.color}`}>
                    <Icon className="h-3.5 w-3.5 text-white" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">{category.label}</span>
                </div>
              );
            })}
          </div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-gray-900"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                {/* Image/Video Thumbnail */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.type === "video" ? item.thumbnail : item.src}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                  {/* Video Play Icon */}
                  {item.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="p-4 rounded-full bg-white/20 backdrop-blur-md border border-white/30 group-hover:scale-110 transition-transform duration-300">
                        <PlayCircle className="h-12 w-12 text-white" />
                      </div>
                    </div>
                  )}

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="px-3 py-1 bg-white/20 backdrop-blur-md border border-white/30 rounded-full">
                      <span className="text-xs font-semibold text-white">{item.category}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <div className="inline-flex flex-col items-center gap-4 p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-200">
              <h3 className="text-2xl font-bold text-gray-900">
                Ready to Experience It Yourself?
              </h3>
              <p className="text-gray-600 max-w-2xl">
                Book a free consultation to visit our training facilities and meet your trainer
              </p>
              <a
                href="/book"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Book Campus Visit
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
