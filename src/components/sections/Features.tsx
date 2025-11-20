import Image from "next/image";
import { Award, BookOpen, Briefcase, Users, TrendingUp, Shield } from "lucide-react";
import { Container } from "@/components/ui";

const features = [
  {
    icon: Award,
    title: "Industry Certifications",
    description: "Gain recognized qualifications from leading professional bodies including AAT, ICB, and CIPP.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&q=80",
  },
  {
    icon: BookOpen,
    title: "Expert-Led Training",
    description: "Learn from seasoned professionals with decades of real-world experience in payroll and finance.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&q=80",
  },
  {
    icon: Briefcase,
    title: "Work Placement Guaranteed",
    description: "Secure practical work experience with our network of 50+ partner companies across the UK.",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&q=80",
  },
  {
    icon: Users,
    title: "Small Class Sizes",
    description: "Benefit from personalized attention with maximum 12 students per class for optimal learning.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&q=80",
  },
  {
    icon: TrendingUp,
    title: "Career Progression",
    description: "95% of our graduates secure employment within 3 months or advance in their current roles.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80",
  },
  {
    icon: Shield,
    title: "Lifetime Support",
    description: "Access our alumni network, job board, and continued professional development resources forever.",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&q=80",
  },
];

export function Features() {
  return (
    <section className="section-padding bg-gray-50">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
            Why Choose Training Pro
          </h2>
          <p className="text-lg text-gray-600">
            We combine expert instruction, industry partnerships, and proven methodologies to
            deliver exceptional training outcomes that transform careers.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                {/* Background Image */}
                <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary-100 text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
