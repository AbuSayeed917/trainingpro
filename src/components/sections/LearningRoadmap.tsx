import Image from "next/image";
import { Container } from "@/components/ui";
import { Check, Target, Award, Rocket } from "lucide-react";

const roadmapSteps = [
  {
    week: "Week 1-2",
    phase: "Foundation",
    title: "BrightPay Basics",
    icon: Rocket,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80",
    milestones: [
      "One-to-one orientation with your expert trainer",
      "Introduction to BrightPay software and UK payroll fundamentals",
      "Setting up payroll basics and employee records",
      "Understanding PAYE, National Insurance, and tax codes",
    ],
  },
  {
    week: "Week 3-4",
    phase: "Core Skills",
    title: "Mastering Payroll Processing",
    icon: Target,
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80",
    milestones: [
      "RTI submissions and HMRC compliance procedures",
      "Processing statutory payments (SSP, SMP, SPP)",
      "Pension auto-enrolment and contributions",
      "Hands-on practice with real payroll scenarios",
    ],
  },
  {
    week: "Week 5-6",
    phase: "Advanced & Career",
    title: "Year-End & Job Ready",
    icon: Award,
    image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=600&q=80",
    milestones: [
      "Year-end procedures, P60s, and reporting",
      "Complete real-world payroll projects",
      "Professional CV preparation and optimization",
      "Job application support and interview preparation",
    ],
  },
];

export function LearningRoadmap() {
  return (
    <section className="section-padding bg-gray-50">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Your 6-Week BrightPay Training Roadmap
          </h2>
          <p className="text-lg text-gray-600">
            From beginner to job-ready payroll professional with personalized one-to-one instruction
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-12 mb-16">
          {roadmapSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                <div className="grid md:grid-cols-5">
                  {/* Image */}
                  <div className="md:col-span-2 relative aspect-[16/10] md:aspect-auto md:h-full min-h-[200px] bg-gray-100">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 40vw"
                    />
                    {/* Week Badge */}
                    <div className="absolute bottom-4 left-4">
                      <div className="bg-white px-4 py-2 rounded-md">
                        <div className="text-xs text-gray-600 font-semibold uppercase tracking-wider">
                          {step.week}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="md:col-span-3 p-8">
                    <div className="inline-block px-3 py-1 rounded-md text-xs font-semibold uppercase tracking-wider bg-primary-50 text-primary-700 mb-3">
                      {step.phase}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {step.title}
                    </h3>
                    <ul className="space-y-3">
                      {step.milestones.map((milestone, mIndex) => (
                        <li key={mIndex} className="flex items-start gap-3">
                          <div className="mt-0.5 w-5 h-5 rounded-full bg-primary-600 flex items-center justify-center flex-shrink-0">
                            <Check className="h-3 w-3 text-white" />
                          </div>
                          <span className="text-gray-700 leading-relaxed">
                            {milestone}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-lg text-gray-600 mb-6">
            Ready to start your BrightPay training journey?
          </p>
          <a
            href="/programmes"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold bg-primary-600 text-white hover:bg-primary-700 rounded-lg transition-colors"
          >
            View Programme Details
          </a>
        </div>
      </Container>
    </section>
  );
}
