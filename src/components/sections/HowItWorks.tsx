import Image from "next/image";
import { UserPlus, GraduationCap, Briefcase, Trophy } from "lucide-react";
import { Container } from "@/components/ui";

const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Enroll & Assess",
    description: "Choose your programme and complete a free skills assessment. We'll create a personalized learning path tailored to your experience level.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&q=80",
  },
  {
    icon: GraduationCap,
    step: "02",
    title: "Learn & Practice",
    description: "Engage with expert-led training, practical exercises, and real-world case studies. Access our learning platform 24/7 with unlimited support.",
    image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=600&q=80",
  },
  {
    icon: Briefcase,
    step: "03",
    title: "Work Experience",
    description: "Apply your skills in a real workplace. We match you with partner companies for 4-12 weeks of hands-on experience in your chosen field.",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&q=80",
  },
  {
    icon: Trophy,
    step: "04",
    title: "Certify & Succeed",
    description: "Earn your industry-recognized certification and access our job placement service. Join our alumni network for ongoing career support.",
    image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=600&q=80",
  },
];

export function HowItWorks() {
  return (
    <section className="section-padding bg-white">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
            Your Journey to Success
          </h2>
          <p className="text-lg text-gray-600">
            Our proven four-step process ensures you gain both theoretical knowledge and practical experience
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line - Hidden on mobile */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-200 via-primary-400 to-primary-600" style={{ width: '85%', marginLeft: '7.5%' }} />

          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative group">
                  {/* Background Image Card */}
                  <div className="absolute inset-0 -top-20 rounded-2xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="relative h-full w-full">
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/80 to-white/95" />
                    </div>
                  </div>

                  {/* Icon Circle */}
                  <div className="relative z-10 mb-6 flex justify-center">
                    <div className="flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-primary-600 to-primary-400 shadow-lg group-hover:shadow-2xl transition-shadow">
                      <div className="flex flex-col items-center">
                        <Icon className="h-10 w-10 text-white mb-2" />
                        <span className="text-white text-sm font-bold">{step.step}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 text-center">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Ready to start your journey? Book a free consultation call with our advisors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 h-13 px-8 text-lg font-medium bg-primary-600 text-white hover:bg-primary-700 rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              Book Free Consultation
            </a>
            <a
              href="/programmes"
              className="inline-flex items-center justify-center gap-2 h-13 px-8 text-lg font-medium border-2 border-primary-600 text-primary-600 hover:bg-primary-50 rounded-lg transition-all"
            >
              Browse Programmes
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
