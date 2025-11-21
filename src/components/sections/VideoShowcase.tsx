"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, CheckCircle2, Award, Users } from "lucide-react";
import { Container } from "@/components/ui";

export function VideoShowcase() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="section-padding bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-20 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 left-20 w-[400px] h-[400px] bg-indigo-500/20 rounded-full blur-3xl animate-float-delayed" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '100px 100px'
      }} />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left: Video Player */}
          <div className="relative group order-2 lg:order-1">
            {/* Ambient Glow */}
            <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/30 via-cyan-500/20 to-indigo-500/30 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative rounded-3xl overflow-hidden shadow-elegant hover:shadow-hover-elegant transition-all duration-500">
              {/* Video Thumbnail */}
              <div className="relative aspect-video bg-gradient-to-br from-slate-800 to-blue-900">
                <Image
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&q=80"
                  alt="BrightPay Training Overview"
                  fill
                  className="object-cover opacity-80"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />

                {/* Play Button */}
                {!isPlaying && (
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="absolute inset-0 flex items-center justify-center group/play"
                  >
                    <div className="relative">
                      {/* Pulsing rings */}
                      <div className="absolute inset-0 animate-ping">
                        <div className="w-32 h-32 rounded-full bg-white/20" />
                      </div>

                      {/* Play button */}
                      <div className="relative w-32 h-32 rounded-full bg-white flex items-center justify-center shadow-elegant group-hover/play:scale-110 transition-transform duration-300">
                        <Play className="h-12 w-12 text-blue-600 ml-1" fill="currentColor" />
                      </div>
                    </div>
                  </button>
                )}

                {/* Duration badge */}
                <div className="absolute top-6 left-6 px-4 py-2 bg-black/60 backdrop-blur-md border border-white/20 rounded-full text-white text-sm font-semibold">
                  ⏱️ 2:30 min
                </div>

                {/* Quality badge */}
                <div className="absolute top-6 right-6 px-4 py-2 bg-blue-600/80 backdrop-blur-md border border-blue-400/50 rounded-full text-white text-sm font-bold">
                  HD Quality
                </div>
              </div>

              {/* Video Stats Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-white mb-1">Max 4</div>
                    <div className="text-xs text-blue-200 font-medium">Students per Class</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white mb-1">6</div>
                    <div className="text-xs text-blue-200 font-medium">Weeks Duration</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white mb-1">1:1</div>
                    <div className="text-xs text-blue-200 font-medium">Training Style</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl opacity-20 blur-2xl" />
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-3xl opacity-20 blur-2xl" />
          </div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2 text-white">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
              <Award className="h-4 w-4 text-yellow-400" />
              <span className="text-sm font-semibold">Expert BrightPay Training</span>
            </div>

            <h2 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">
              See Our Training
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 mt-2">
                In Action
              </span>
            </h2>

            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Watch how our expert trainer guides students through real BrightPay payroll scenarios with personalized 1-to-1 instruction.
            </p>

            {/* Features List */}
            <ul className="space-y-4 mb-8">
              {[
                "Live walkthrough of BrightPay software",
                "Real payroll processing demonstrations",
                "Expert tips from 15+ years experience",
                "See our small class environment"
              ].map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-1 p-1 rounded-full bg-emerald-500/20 border border-emerald-400/50">
                    <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                  </div>
                  <span className="text-lg text-blue-50 font-medium">{feature}</span>
                </li>
              ))}
            </ul>

            {/* Stats */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20">
                  <Users className="h-6 w-6 text-cyan-400" />
                </div>
                <div>
                  <div className="text-2xl font-bold">Max 4</div>
                  <div className="text-sm text-blue-200">Students per class</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20">
                  <Award className="h-6 w-6 text-yellow-400" />
                </div>
                <div>
                  <div className="text-2xl font-bold">9 Modules</div>
                  <div className="text-sm text-blue-200">Comprehensive</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
