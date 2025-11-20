import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { Container, Card } from "@/components/ui";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Payroll Manager",
    company: "TechCorp UK",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    content: "The payroll training programme was exceptional. Within 3 months of completing the course, I secured a payroll manager position with a 35% salary increase. The practical experience was invaluable.",
    rating: 5,
  },
  {
    name: "James Chen",
    role: "Bookkeeper",
    company: "Anderson & Co",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    content: "Training Pro's bookkeeping course gave me the confidence and skills to start my own practice. The instructors were knowledgeable, and the work placement helped me build real-world experience.",
    rating: 5,
  },
  {
    name: "Amara Okafor",
    role: "Finance Officer",
    company: "NHS Trust",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80",
    content: "I completed the accounting programme while working full-time. The flexible learning options and supportive tutors made it possible. I'm now pursuing my ACCA qualification thanks to this foundation.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
            Success Stories
          </h2>
          <p className="text-lg text-gray-600">
            Hear from our graduates who have transformed their careers through our training programmes
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative overflow-hidden">
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="h-16 w-16 text-primary-600" />
              </div>

              <div className="p-8">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-600 leading-relaxed mb-6 relative z-10">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 p-8 bg-white rounded-2xl shadow-soft">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">4.9/5</div>
            <div className="text-sm text-gray-600">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">500+</div>
            <div className="text-sm text-gray-600">Graduates</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">95%</div>
            <div className="text-sm text-gray-600">Job Placement</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">£28k</div>
            <div className="text-sm text-gray-600">Avg. Starting Salary</div>
          </div>
        </div>
      </Container>
    </section>
  );
}
