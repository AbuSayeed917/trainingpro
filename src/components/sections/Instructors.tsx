"use client";

import Image from "next/image";
import { Container } from "@/components/ui";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { Award, BookOpen } from "lucide-react";

const instructor = {
  id: 1,
  name: "Expert Payroll Trainer",
  role: "BrightPay Payroll Specialist",
  credentials: "15+ Years Global Experience",
  image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80",
  bio: "Seasoned global payroll specialist with 15+ years of experience delivering expert BrightPay training. Specializes in one-to-one instruction, helping students master UK payroll processing, RTI submissions, HMRC compliance, and pension auto-enrolment through practical, real-world scenarios.",
  expertise: [
    "BrightPay Software Expert",
    "UK Payroll Processing",
    "RTI & HMRC Submissions",
    "Pension Auto-Enrolment",
    "Year-End Procedures",
    "Statutory Payments"
  ],
};

export function Instructors() {
  return (
    <section className="section-padding bg-white">
      <Container>
        <FadeInUp>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              Your Expert BrightPay Trainer
            </h2>
            <p className="text-lg text-gray-600">
              Learn directly from a seasoned global payroll specialist with 15+ years of experience.
              Get personalized one-to-one instruction tailored to your learning needs.
            </p>
          </div>
        </FadeInUp>

        <StaggerContainer>
          <div className="max-w-4xl mx-auto">
            <StaggerItem>
              <div className="grid md:grid-cols-2 gap-8 items-center bg-gradient-to-br from-gray-50 to-white rounded-3xl overflow-hidden shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-500">
                {/* Image */}
                <div className="relative aspect-[4/3] md:aspect-auto md:h-full overflow-hidden bg-gray-100">
                  <Image
                    src={instructor.image}
                    alt={instructor.name}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                  {/* Floating badge */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/95 backdrop-blur-xl rounded-xl p-4 shadow-lg">
                      <div className="flex items-center gap-3">
                        <Award className="h-8 w-8 text-primary-600" />
                        <div>
                          <div className="font-bold text-gray-900">15+ Years</div>
                          <div className="text-xs text-gray-600">Global Payroll Expert</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 md:p-10">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {instructor.name}
                    </h3>
                    <p className="text-lg text-primary-600 font-semibold mb-2">
                      {instructor.role}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Award className="h-4 w-4" />
                      <span>{instructor.credentials}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    {instructor.bio}
                  </p>

                  {/* Expertise Tags */}
                  <div className="flex flex-wrap gap-2">
                    {instructor.expertise.map((skill, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-1 bg-primary-50 text-primary-700 px-3 py-1.5 rounded-full text-xs font-medium border border-primary-100"
                      >
                        <BookOpen className="h-3 w-3" />
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </StaggerItem>
          </div>
        </StaggerContainer>

        {/* CTA */}
        <FadeInUp delay={0.3}>
          <div className="mt-16 text-center">
            <p className="text-lg text-gray-600 mb-6">
              Ready to start your BrightPay training journey?
            </p>
            <a
              href="/programmes"
              className="inline-flex items-center justify-center gap-2 h-13 px-8 text-lg font-medium border-2 border-primary-600 text-primary-600 hover:bg-primary-50 rounded-lg transition-all"
            >
              View Programme Details
            </a>
          </div>
        </FadeInUp>
      </Container>
    </section>
  );
}
