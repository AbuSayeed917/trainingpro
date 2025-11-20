"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { X } from "lucide-react";

const facilities = [
  {
    id: 1,
    title: "Modern Training Rooms",
    description: "State-of-the-art classrooms equipped with latest technology",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80",
    category: "Classroom"
  },
  {
    id: 2,
    title: "Computer Labs",
    description: "Fully equipped with industry-standard accounting software",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&q=80",
    category: "Technology"
  },
  {
    id: 3,
    title: "Study Areas",
    description: "Comfortable spaces for individual and group study",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    category: "Study Space"
  },
  {
    id: 4,
    title: "Break Out Zones",
    description: "Relaxing areas for networking and refreshments",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
    category: "Social"
  },
  {
    id: 5,
    title: "Resource Library",
    description: "Extensive collection of professional development materials",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&q=80",
    category: "Resources"
  },
  {
    id: 6,
    title: "Virtual Learning Suite",
    description: "Access remote learning from anywhere in the world",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
    category: "Online"
  },
];

export function FacilitiesGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section className="section-padding bg-gradient-to-b from-white to-gray-50">
      <Container>
        <FadeInUp>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              World-Class Learning Facilities
            </h2>
            <p className="text-lg text-gray-600">
              Experience learning in professional environments designed to maximize your success
            </p>
          </div>
        </FadeInUp>

        {/* Gallery Grid */}
        <StaggerContainer>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {facilities.map((facility) => (
              <StaggerItem key={facility.id}>
                <div
                  className="group relative aspect-[4/3] overflow-hidden rounded-2xl cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500"
                  onClick={() => setSelectedImage(facility.id)}
                >
                  {/* Image */}
                  <Image
                    src={facility.image}
                    alt={facility.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <div className="text-xs font-semibold text-primary-400 uppercase tracking-wider mb-2">
                        {facility.category}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {facility.title}
                      </h3>
                      <p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                        {facility.description}
                      </p>
                    </div>
                  </div>

                  {/* Category Badge (Always Visible) */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-900">
                    {facility.category}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              onClick={() => setSelectedImage(null)}
              aria-label="Close modal"
            >
              <X className="h-6 w-6 text-white" />
            </button>

            {facilities
              .filter((f) => f.id === selectedImage)
              .map((facility) => (
                <div
                  key={facility.id}
                  className="relative max-w-6xl w-full aspect-video"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Image
                    src={facility.image}
                    alt={facility.title}
                    fill
                    className="object-contain"
                    sizes="100vw"
                    priority
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                    <div className="text-primary-400 text-sm font-semibold uppercase tracking-wider mb-2">
                      {facility.category}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {facility.title}
                    </h3>
                    <p className="text-gray-300">
                      {facility.description}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        )}

        {/* CTA Below Gallery */}
        <FadeInUp delay={0.3}>
          <div className="mt-16 text-center">
            <p className="text-lg text-gray-600 mb-6">
              Want to see our facilities in person?
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 h-13 px-8 text-lg font-medium bg-primary-600 text-white hover:bg-primary-700 rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              Book a Campus Tour
            </a>
          </div>
        </FadeInUp>
      </Container>
    </section>
  );
}
