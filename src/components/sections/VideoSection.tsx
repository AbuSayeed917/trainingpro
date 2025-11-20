"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, X } from "lucide-react";
import { Container } from "@/components/ui";
import { FadeInUp } from "@/components/ui/AnimatedSection";

export function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="section-padding bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <Container className="relative z-10">
        <FadeInUp>
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              See How We Transform Careers
            </h2>
            <p className="text-lg text-gray-300">
              Watch our students share their success stories and see our training facilities
            </p>
          </div>
        </FadeInUp>

        <FadeInUp delay={0.2}>
          <div className="relative max-w-5xl mx-auto">
            {/* Video Container */}
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
              {!isPlaying ? (
                // Thumbnail with Play Button
                <div className="relative w-full h-full">
                  <Image
                    src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&q=80"
                    alt="Training classroom"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1200px) 100vw, 1200px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

                  <button
                    onClick={() => setIsPlaying(true)}
                    className="absolute inset-0 flex items-center justify-center group"
                    aria-label="Play video"
                  >
                    <div className="absolute inset-0 bg-white rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity w-32 h-32 m-auto" />
                    <div className="relative flex items-center justify-center w-24 h-24 bg-white rounded-full shadow-2xl transform transition-transform group-hover:scale-110">
                      <Play className="h-10 w-10 text-primary-600 ml-1" fill="currentColor" />
                    </div>

                    {/* Decorative pulsing ring */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-32 h-32 border-4 border-white/30 rounded-full animate-ping" />
                    </div>
                  </button>
                </div>
              ) : (
                // Video Player (replace with actual video)
                <div className="absolute inset-0 bg-black">
                  <button
                    onClick={() => setIsPlaying(false)}
                    className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors"
                    aria-label="Close video"
                  >
                    <X className="h-6 w-6 text-white" />
                  </button>

                  {/* Replace this with actual video embed */}
                  <div className="w-full h-full flex items-center justify-center text-white">
                    <div className="text-center">
                      <p className="text-lg mb-2">Video Player Placeholder</p>
                      <p className="text-sm text-gray-400">
                        Replace with: YouTube iframe, Vimeo, or HTML5 video
                      </p>
                    </div>
                  </div>

                  {/* Example YouTube Embed (uncomment and add your video ID) */}
                  {/* <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1"
                    title="Training Programme Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  /> */}
                </div>
              )}
            </div>

            {/* Stats Below Video */}
            <div className="grid grid-cols-3 gap-8 mt-12 text-center">
              <div>
                <div className="text-3xl font-bold text-primary-400 mb-2">2000+</div>
                <div className="text-sm text-gray-400">Hours of Training Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-400 mb-2">98%</div>
                <div className="text-sm text-gray-400">Student Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-400 mb-2">24/7</div>
                <div className="text-sm text-gray-400">Learning Support</div>
              </div>
            </div>
          </div>
        </FadeInUp>
      </Container>
    </section>
  );
}
