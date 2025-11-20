import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, Mail } from "lucide-react";
import { Container } from "@/components/ui";

export function CTA() {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-600 via-primary-500 to-primary-700 text-white relative overflow-hidden">
      {/* Background Hero Image */}
      <div className="absolute inset-0 opacity-15">
        <Image
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600&q=80"
          alt="Team collaboration"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/90 via-primary-500/90 to-primary-700/90" />
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-6">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl text-primary-100 mb-10 leading-relaxed">
            Join hundreds of successful graduates who have launched rewarding careers in payroll,
            bookkeeping, and accounting. Start your journey today with a free consultation.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/enroll"
              className="inline-flex items-center justify-center gap-2 h-14 px-8 text-lg font-semibold bg-white text-primary-600 hover:bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              Enroll Now
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 h-14 px-8 text-lg font-semibold border-2 border-white text-white hover:bg-white hover:text-primary-600 rounded-lg transition-all"
            >
              Free Consultation
            </Link>
          </div>

          {/* Contact Options */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8 border-t border-primary-400">
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5" />
              <span className="text-primary-100">Call us: +44 (0) 20 1234 5678</span>
            </div>
            <div className="hidden sm:block h-6 w-px bg-primary-400" />
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5" />
              <span className="text-primary-100">Email: info@trainingpro.co.uk</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
