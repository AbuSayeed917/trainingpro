"use client";

import Image from "next/image";
import { Container } from "@/components/ui";
import { FadeInUp, SlideInLeft, SlideInRight } from "@/components/ui/AnimatedSection";
import { Quote, TrendingUp, Briefcase, Award } from "lucide-react";

const successStories = [
  {
    id: 1,
    name: "Jessica Martinez",
    age: 28,
    before: {
      title: "Retail Assistant",
      salary: "£18,000",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80",
      situation: "Working part-time in retail with no clear career path. Limited qualifications and feeling stuck in minimum wage roles.",
    },
    after: {
      title: "Payroll Administrator",
      salary: "£28,500",
      company: "Deloitte",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",
      achievement: "Completed Professional Payroll Management programme. Now managing payroll for 200+ employees at a Big 4 firm.",
    },
    programme: "Professional Payroll Management",
    duration: "12 weeks",
    quote: "The course changed my life. I went from earning minimum wage to a professional career with real prospects. The work experience placement at Deloitte led to my permanent role.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
  },
  {
    id: 2,
    name: "Marcus Johnson",
    age: 35,
    before: {
      title: "Warehouse Supervisor",
      salary: "£22,000",
      image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&q=80",
      situation: "Career change after 10 years in logistics. No accounting background but wanted office-based professional career.",
    },
    after: {
      title: "Bookkeeper",
      salary: "£32,000",
      company: "RSM UK",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80",
      achievement: "AAT Level 3 qualified. Now providing bookkeeping services to 15+ SME clients. Working towards setting up own practice.",
    },
    programme: "Bookkeeping Fundamentals + Advanced",
    duration: "16 weeks",
    quote: "At 35, I thought it was too late to change careers. This programme proved me wrong. The instructors were patient and the practical training was invaluable.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
  {
    id: 3,
    name: "Priya Sharma",
    age: 24,
    before: {
      title: "Graduate (Unemployed)",
      salary: "£0",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80",
      situation: "Recent humanities graduate struggling to find work. Degree didn't provide practical skills employers wanted.",
    },
    after: {
      title: "Junior Accountant",
      salary: "£26,000",
      company: "Grant Thornton",
      image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=600&q=80",
      achievement: "Gained ACCA Level 1 certification. Secured role through our placement programme. On track for chartered accountant qualification.",
    },
    programme: "Advanced Accounting & Tax",
    duration: "16 weeks",
    quote: "My degree didn't open doors, but this programme did. The combination of professional qualifications and real work experience made all the difference.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
  },
];

export function SuccessStories() {
  return (
    <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <Container>
        <FadeInUp>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Award className="h-4 w-4" />
              Real Success Stories
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              Transforming Lives, Building Careers
            </h2>
            <p className="text-lg text-gray-600">
              Meet some of our graduates who turned their aspirations into reality through our training programmes
            </p>
          </div>
        </FadeInUp>

        {/* Success Stories */}
        <div className="space-y-24">
          {successStories.map((story, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={story.id} className="relative">
                {/* Timeline Connector */}
                {index < successStories.length - 1 && (
                  <div className="absolute left-1/2 bottom-0 w-0.5 h-24 -translate-x-1/2 translate-y-full bg-gradient-to-b from-primary-600 to-transparent hidden lg:block" />
                )}

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Before Section */}
                  <SlideInLeft delay={0.1}>
                    <div className={`${!isEven ? 'lg:order-2' : ''}`}>
                      <div className="relative rounded-2xl overflow-hidden shadow-lg mb-6 aspect-[16/10]">
                        <Image
                          src={story.before.image}
                          alt={`${story.name} before`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20" />
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                          <div className="text-xs uppercase tracking-wider font-bold text-red-300 mb-2">
                            Before
                          </div>
                          <div className="text-2xl font-bold mb-2">{story.before.title}</div>
                          <div className="text-lg font-semibold text-red-200">{story.before.salary}/year</div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 italic">
                        {story.before.situation}
                      </p>
                    </div>
                  </SlideInLeft>

                  {/* After Section */}
                  <SlideInRight delay={0.2}>
                    <div className={`${!isEven ? 'lg:order-1' : ''}`}>
                      <div className="relative rounded-2xl overflow-hidden shadow-lg mb-6 aspect-[16/10]">
                        <Image
                          src={story.after.image}
                          alt={`${story.name} after`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20" />
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                          <div className="text-xs uppercase tracking-wider font-bold text-green-300 mb-2">
                            After
                          </div>
                          <div className="text-2xl font-bold mb-2">{story.after.title}</div>
                          <div className="flex items-center gap-2 mb-2">
                            <Briefcase className="h-4 w-4 text-green-300" />
                            <span className="text-sm font-medium">{story.after.company}</span>
                          </div>
                          <div className="text-lg font-semibold text-green-200">
                            {story.after.salary}/year
                            <TrendingUp className="inline h-4 w-4 ml-2" />
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-900 font-medium mb-4">
                        {story.after.achievement}
                      </p>
                    </div>
                  </SlideInRight>
                </div>

                {/* Student Profile & Quote */}
                <FadeInUp delay={0.3}>
                  <div className="mt-8 bg-white rounded-2xl shadow-lg p-8 border-l-4 border-primary-600">
                    <div className="flex items-start gap-6">
                      <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0 ring-4 ring-primary-100">
                        <Image
                          src={story.image}
                          alt={story.name}
                          fill
                          className="object-cover"
                          sizes="80px"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-gray-900">{story.name}</h3>
                            <p className="text-sm text-gray-600">
                              Age {story.age} • {story.programme} • {story.duration}
                            </p>
                          </div>
                          <Quote className="h-8 w-8 text-primary-200" />
                        </div>
                        <blockquote className="text-gray-700 italic leading-relaxed">
                          &ldquo;{story.quote}&rdquo;
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </FadeInUp>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <FadeInUp delay={0.4}>
          <div className="mt-20 text-center bg-gradient-to-r from-primary-600 to-primary-400 rounded-2xl p-12 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Write Your Success Story?</h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Join hundreds of successful graduates who transformed their careers through our professional training programmes
            </p>
            <a
              href="/enroll"
              className="inline-flex items-center justify-center gap-2 h-13 px-8 text-lg font-semibold bg-white text-primary-600 hover:bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              Start Your Journey Today
            </a>
          </div>
        </FadeInUp>
      </Container>
    </section>
  );
}
