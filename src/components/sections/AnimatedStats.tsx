"use client";

import { Container } from "@/components/ui";
import { useCountUp } from "@/hooks/useCountUp";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";

const stats = [
  {
    end: 12,
    prefix: "",
    suffix: "",
    label: "Week Duration",
    description: "Intensive training",
  },
  {
    end: 100,
    prefix: "",
    suffix: "%",
    label: "Practical Focus",
    description: "Hands-on learning",
  },
  {
    end: 6,
    prefix: "",
    suffix: "+",
    label: "Programme Options",
    description: "Multiple career paths",
  },
  {
    end: 24,
    prefix: "",
    suffix: "/7",
    label: "Online Access",
    description: "Learning platform",
  },
];

function StatCard({ end, prefix = "", suffix = "", label, description }: typeof stats[0]) {
  const { count, ref } = useCountUp({ end, prefix, suffix, duration: 2500 });

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl sm:text-5xl font-bold text-primary-600 mb-2">
        {count}
      </div>
      <div className="text-lg font-semibold text-gray-900 mb-1">{label}</div>
      <div className="text-sm text-gray-600">{description}</div>
    </div>
  );
}

export function AnimatedStats() {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      <Container>
        <FadeInUp>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              Why Choose Our Programmes
            </h2>
            <p className="text-lg text-gray-600">
              Flexible, practical training designed to launch your career
            </p>
          </div>
        </FadeInUp>

        <StaggerContainer>
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <StaggerItem key={index}>
                <StatCard {...stat} />
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>

        {/* Accreditation Info */}
        <FadeInUp delay={0.4}>
          <div className="mt-16 pt-16 border-t border-gray-200">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 mb-1">AAT</div>
                <div className="text-sm text-gray-600">Aligned Training</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 mb-1">CIPP</div>
                <div className="text-sm text-gray-600">Content Aligned</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 mb-1">ICB</div>
                <div className="text-sm text-gray-600">Standards Based</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 mb-1">Expert</div>
                <div className="text-sm text-gray-600">Instructors</div>
              </div>
            </div>
          </div>
        </FadeInUp>
      </Container>
    </section>
  );
}
