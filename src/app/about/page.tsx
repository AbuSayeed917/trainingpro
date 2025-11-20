import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui";
import { Target, Users, Award, TrendingUp, CheckCircle2, ArrowRight, Lightbulb, Heart, Shield } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We maintain the highest standards in training delivery and student support.",
  },
  {
    icon: Users,
    title: "Student-Focused",
    description: "Your success is our priority. We adapt our approach to meet your individual needs.",
  },
  {
    icon: Award,
    title: "Quality Training",
    description: "Industry-aligned content delivered by qualified professionals with real experience.",
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    description: "We're committed to helping you achieve your professional goals and aspirations.",
  },
];

const stats = [
  { number: "6+", label: "Training Programmes" },
  { number: "100%", label: "Practical Focus" },
  { number: "12", label: "Week Programmes" },
  { number: "24/7", label: "Online Access" },
];

const whyChooseUs = [
  "Industry-recognized qualifications from AAT, ICB, and CIPP",
  "Practical, hands-on training with real-world applications",
  "Flexible learning options: online, evening, and weekend classes",
  "Expert instructors with professional experience",
  "Work placement support and career guidance",
  "Small class sizes for personalized attention",
];

const journey = [
  {
    icon: Lightbulb,
    title: "Our Vision",
    description: "To become the leading provider of professional training that bridges the gap between education and employment.",
  },
  {
    icon: Heart,
    title: "Our Passion",
    description: "We're passionate about empowering individuals with the skills and confidence to build rewarding careers.",
  },
  {
    icon: Shield,
    title: "Our Commitment",
    description: "Dedicated to delivering high-quality, practical training that meets industry standards and employer needs.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-50 pt-24 pb-16">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              Empowering Careers Through Professional Training
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              We&apos;re dedicated to providing accessible, high-quality professional training in
              finance, accounting, and business management that opens doors to rewarding careers.
            </p>
          </div>
        </Container>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-gray-100 py-16">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We believe that everyone deserves access to high-quality professional training
                that opens doors to rewarding careers. Our mission is to provide comprehensive,
                practical education in payroll, bookkeeping, accounting, and HR management.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We bridge the gap between education and employment by combining theoretical
                knowledge with hands-on experience, ensuring our students are job-ready from
                day one.
              </p>
              <div className="space-y-4">
                {whyChooseUs.slice(0, 3).map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Training classroom"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Meet Our Expert Team</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Industry professionals dedicated to your success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group">
              <div className="relative h-80 rounded-2xl overflow-hidden mb-4 shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80"
                  alt="Lead Instructor"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">David Richardson</h3>
              <p className="text-primary-600 font-medium mb-2">Lead Payroll Instructor</p>
              <p className="text-gray-600 text-sm">15+ years in payroll management with CIPP certification</p>
            </div>

            <div className="group">
              <div className="relative h-80 rounded-2xl overflow-hidden mb-4 shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80"
                  alt="Senior Instructor"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">Emma Williams</h3>
              <p className="text-primary-600 font-medium mb-2">Senior Bookkeeping Trainer</p>
              <p className="text-gray-600 text-sm">AAT qualified with 12 years teaching experience</p>
            </div>

            <div className="group">
              <div className="relative h-80 rounded-2xl overflow-hidden mb-4 shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&q=80"
                  alt="HR Specialist"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">Michael Chen</h3>
              <p className="text-primary-600 font-medium mb-2">HR & Employment Law Expert</p>
              <p className="text-gray-600 text-sm">CIPD certified with corporate HR background</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Vision, Passion, Commitment */}
      <section className="py-24 bg-gray-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">What Drives Us</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our vision, passion, and commitment guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {journey.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-xl p-8 border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 text-white mb-6">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              The principles that guide everything we do and shape our approach to training
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-xl p-8 border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 text-white mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{value.description}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-24 bg-gray-50">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden order-2 lg:order-1">
              <Image
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&q=80"
                alt="Students in training"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                What Sets Us Apart
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We&apos;re not just another training provider. Our approach combines academic rigor
                with practical application, ensuring you gain skills that employers actually need.
              </p>
              <div className="space-y-4">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800">
        <Container>
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Join our professional training programmes and take the first step towards a
              rewarding career in finance and accounting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/programmes"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
              >
                View Programmes
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all font-semibold"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
