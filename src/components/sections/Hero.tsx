"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui";
import { FadeIn, FadeInUp, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";

const highlights = [
  "Industry-certified programmes",
  "Real work experience",
  "Expert instructors",
  "Flexible learning",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-20 sm:py-28 lg:py-32">
      {/* Background Hero Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80"
          alt="Students learning"
          fill
          className="object-cover opacity-[0.07]"
          sizes="100vw"
          priority
        />
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 transform">
          <div className="h-[600px] w-[600px] rounded-full bg-gradient-to-br from-primary-200/40 to-secondary-200/40 blur-3xl" />
        </div>
        <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 transform">
          <div className="h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-primary-200/40 to-accent-200/40 blur-3xl" />
        </div>
      </div>

      <Container>
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <FadeIn>
            <div className="mb-8 inline-flex items-center rounded-full bg-primary-100 px-5 py-2.5 text-sm font-semibold text-primary-800 shadow-sm animate-fade-in">
              <span className="mr-2">🎓</span>
              Professional Training & Work Experience
            </div>
          </FadeIn>

          {/* Heading */}
          <FadeInUp delay={0.1}>
            <h1 className="mb-8 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl leading-tight">
              Launch Your Career in{" "}
              <span className="block sm:inline bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
                Payroll & Bookkeeping
              </span>
            </h1>
          </FadeInUp>

          {/* Description */}
          <FadeInUp delay={0.2}>
            <p className="mb-8 text-lg leading-8 text-gray-600 sm:text-xl max-w-3xl mx-auto">
              Transform your future with world-class training programmes. Gain practical skills,
              industry certifications, and real work experience to excel in payroll, bookkeeping,
              accounting, and business management.
            </p>
          </FadeInUp>

          {/* Highlights */}
          <StaggerContainer>
            <div className="mb-10 flex flex-wrap justify-center gap-4 text-sm sm:text-base">
              {highlights.map((highlight) => (
                <StaggerItem key={highlight}>
                  <div className="flex items-center gap-2 text-gray-700">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    <span>{highlight}</span>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>

          {/* CTAs */}
          <FadeInUp delay={0.3}>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/programmes"
                className="group inline-flex items-center justify-center gap-2 h-13 px-8 text-lg font-medium bg-gradient-to-r from-primary-600 to-primary-400 text-white hover:from-primary-700 hover:to-primary-500 shadow-md hover:shadow-lg rounded-lg transition-all transform hover:scale-105"
              >
                Explore Programmes
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/work-experience"
                className="inline-flex items-center justify-center gap-2 h-13 px-8 text-lg font-medium border-2 border-primary-600 text-primary-600 hover:bg-primary-50 rounded-lg transition-all transform hover:scale-105"
              >
                Work Experience
              </Link>
            </div>
          </FadeInUp>

          {/* Key Benefits */}
          <StaggerContainer>
            <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4">
              <StaggerItem>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 sm:text-4xl">12</div>
                  <div className="mt-1 text-sm text-gray-600">Week Programmes</div>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 sm:text-4xl">100%</div>
                  <div className="mt-1 text-sm text-gray-600">Practical Training</div>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 sm:text-4xl">Real</div>
                  <div className="mt-1 text-sm text-gray-600">Work Experience</div>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 sm:text-4xl">6+</div>
                  <div className="mt-1 text-sm text-gray-600">Career Programmes</div>
                </div>
              </StaggerItem>
            </div>
          </StaggerContainer>
        </div>
      </Container>
    </section>
  );
}
