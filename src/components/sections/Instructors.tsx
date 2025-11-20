"use client";

import Image from "next/image";
import { Container } from "@/components/ui";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { Award, BookOpen } from "lucide-react";

const instructors = [
  {
    id: 1,
    name: "Payroll Specialist",
    role: "Payroll & Tax Training",
    credentials: "CIPP Qualified",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
    bio: "Experienced payroll professional specializing in RTI, PAYE, and pension auto-enrolment. Brings practical workplace knowledge to training.",
    expertise: ["Payroll Systems", "Tax Compliance", "Pension Auto-Enrolment"],
    students: "N/A",
    rating: 0,
  },
  {
    id: 2,
    name: "Accounting Professional",
    role: "Accounting Instructor",
    credentials: "AAT Qualified",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    bio: "Qualified accountant with expertise in Sage, Xero, and QuickBooks. Passionate about teaching practical accounting skills.",
    expertise: ["Cloud Accounting", "Financial Reporting", "Software Training"],
    students: "N/A",
    rating: 0,
  },
  {
    id: 3,
    name: "Bookkeeping Expert",
    role: "Bookkeeping Specialist",
    credentials: "ICB Certified",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    bio: "Experienced in managing bookkeeping for small and medium businesses. Expert in VAT returns and Making Tax Digital.",
    expertise: ["Bookkeeping", "VAT & MTD", "Small Business Finance"],
    students: "N/A",
    rating: 0,
  },
  {
    id: 4,
    name: "Finance Professional",
    role: "Management Accounting",
    credentials: "CIMA Qualified",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    bio: "Strategic finance professional specializing in budgeting, forecasting, and performance management for businesses.",
    expertise: ["Management Accounting", "Strategic Planning", "KPI Analysis"],
    students: "N/A",
    rating: 0,
  },
  {
    id: 5,
    name: "HR Specialist",
    role: "HR & Employment Law",
    credentials: "CIPD Qualified",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
    bio: "HR professional with expertise in employment law and workplace compliance. Focused on practical, real-world applications.",
    expertise: ["Employment Law", "HR Compliance", "Workplace Policies"],
    students: "N/A",
    rating: 0,
  },
  {
    id: 6,
    name: "Tax Consultant",
    role: "Tax & Compliance",
    credentials: "ACA Qualified",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80",
    bio: "Tax professional with experience in tax planning and compliance. Brings industry best practices to course content.",
    expertise: ["Tax Planning", "Compliance", "Business Tax"],
    students: "N/A",
    rating: 0,
  },
];

export function Instructors() {
  return (
    <section className="section-padding bg-white">
      <Container>
        <FadeInUp>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              Expert-Led Training
            </h2>
            <p className="text-lg text-gray-600">
              Our courses are designed and taught by qualified professionals with real-world experience
              in accounting, payroll, bookkeeping, and business management.
            </p>
          </div>
        </FadeInUp>

        <StaggerContainer>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {instructors.map((instructor) => (
              <StaggerItem key={instructor.id}>
                <div className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-primary-200">
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                    <Image
                      src={instructor.image}
                      alt={instructor.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="mb-3">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {instructor.name}
                      </h3>
                      <p className="text-sm text-primary-600 font-semibold mb-1">
                        {instructor.role}
                      </p>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <Award className="h-3.5 w-3.5" />
                        <span>{instructor.credentials}</span>
                      </div>
                    </div>

                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                      {instructor.bio}
                    </p>

                    {/* Expertise Tags */}
                    <div className="flex flex-wrap gap-2">
                      {instructor.expertise.map((skill, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-1 bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-xs font-medium"
                        >
                          <BookOpen className="h-3 w-3" />
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-primary-600 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-start justify-end p-3">
                    <Award className="h-5 w-5 text-white" />
                  </div>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>

        {/* CTA */}
        <FadeInUp delay={0.3}>
          <div className="mt-16 text-center">
            <p className="text-lg text-gray-600 mb-6">
              Want to learn more about our teaching approach?
            </p>
            <a
              href="/about"
              className="inline-flex items-center justify-center gap-2 h-13 px-8 text-lg font-medium border-2 border-primary-600 text-primary-600 hover:bg-primary-50 rounded-lg transition-all"
            >
              Meet Our Team
            </a>
          </div>
        </FadeInUp>
      </Container>
    </section>
  );
}
