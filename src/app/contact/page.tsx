"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, CheckCircle2, HelpCircle, ArrowRight } from "lucide-react";
import { useState } from "react";
import { ContactVisuals } from "@/components/sections/ContactVisuals";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: "Call us during business hours",
    contact: "Coming Soon",
    href: "#",
  },
  {
    icon: Mail,
    title: "Email",
    details: "We'll respond within 24 hours",
    contact: "info@trainingpro.co.uk",
    href: "mailto:info@trainingpro.co.uk",
  },
  {
    icon: MapPin,
    title: "Location",
    details: "Training centre address",
    contact: "To Be Announced",
    href: "#",
  },
  {
    icon: Clock,
    title: "Office Hours",
    details: "Monday - Friday",
    contact: "9:00 AM - 5:00 PM",
    href: "#",
  },
];

const programmes = [
  "BrightPay Payroll Training - 6 Week Course",
  "Weekend Class Schedule Enquiry",
  "Course Curriculum Questions",
  "Pricing & Payment Options",
  "CV & Career Support Details",
  "General Enquiry",
];

const benefits = [
  {
    title: "Free Consultation Call",
    description: "Discuss your payroll career goals and how our training can help you achieve them",
  },
  {
    title: "Weekend Class Scheduling",
    description: "Find a weekend schedule that works with your current commitments",
  },
  {
    title: "Course Curriculum Details",
    description: "Learn about all 9 modules covering complete UK payroll processing",
  },
  {
    title: "Enrollment Support",
    description: "We'll guide you through enrollment and answer all your questions about the £999 package",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    programme: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", programme: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      {/* Premium Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1920&q=80"
            alt="Professional consultation"
            fill
            className="object-cover opacity-[0.08]"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-900/90 to-slate-900/95" />
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-float-delayed" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl animate-float-slow" />
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '100px 100px'
        }} />

        <Container className="relative z-10 py-24">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 shadow-elegant">
              <MessageSquare className="h-4 w-4 text-blue-400" />
              <span className="text-sm font-semibold text-white">We&apos;re Here to Help</span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight">
              Start Your Career Journey
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 mt-3">
                With Expert Guidance
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-12">
              Have questions about our BrightPay programme? Want to discuss your payroll career goals?
              Our expert team is ready to provide personalized guidance for your professional success.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="group relative">
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-blue-500/20 via-transparent to-indigo-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
                <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 px-4 py-6 rounded-2xl shadow-elegant group-hover:shadow-hover-elegant transition-all duration-500">
                  <div className="text-3xl sm:text-4xl font-bold text-white mb-1">24hrs</div>
                  <div className="text-sm text-blue-200">Response Time</div>
                </div>
              </div>
              <div className="group relative">
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-cyan-500/20 via-transparent to-blue-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
                <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 px-4 py-6 rounded-2xl shadow-elegant group-hover:shadow-hover-elegant transition-all duration-500">
                  <div className="text-3xl sm:text-4xl font-bold text-white mb-1">Free</div>
                  <div className="text-sm text-blue-200">Consultation</div>
                </div>
              </div>
              <div className="group relative">
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-indigo-500/20 via-transparent to-purple-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
                <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 px-4 py-6 rounded-2xl shadow-elegant group-hover:shadow-hover-elegant transition-all duration-500">
                  <div className="text-3xl sm:text-4xl font-bold text-white mb-1">Expert</div>
                  <div className="text-sm text-blue-200">Support Team</div>
                </div>
              </div>
            </div>
          </div>
        </Container>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-auto" viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none">
            <path d="M0,64 C360,100 720,20 1440,64 L1440,120 L0,120 Z" fill="white" fillOpacity="1"/>
          </svg>
        </div>
      </section>

      {/* Contact Visuals Section */}
      <ContactVisuals />

      {/* Premium Contact Info Cards */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <Container>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              const gradients = [
                "from-blue-500 to-indigo-500",
                "from-indigo-500 to-purple-500",
                "from-purple-500 to-pink-500",
                "from-pink-500 to-rose-500"
              ];
              return (
                <div
                  key={index}
                  className="group relative text-center"
                >
                  {/* Ambient Glow */}
                  <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-blue-500/20 via-transparent to-indigo-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />

                  <div className="relative bg-white border border-gray-200 px-6 py-10 rounded-3xl shadow-elegant group-hover:shadow-hover-elegant transition-all duration-500 h-full">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${gradients[index]} text-white mb-6 shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="font-bold text-xl text-gray-900 mb-2">{info.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{info.details}</p>
                    {info.href !== "#" ? (
                      <a
                        href={info.href}
                        className="text-blue-600 font-semibold hover:text-blue-700 transition-colors text-sm"
                      >
                        {info.contact}
                      </a>
                    ) : (
                      <p className="text-gray-700 font-semibold text-sm">{info.contact}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Premium Contact Form & Info */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <Container>
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Form */}
            <div className="lg:col-span-3 group relative">
              {/* Ambient Glow */}
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-blue-500/10 via-transparent to-indigo-500/10 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700" />

              <div className="relative bg-white rounded-3xl p-12 border border-gray-200 shadow-elegant">
                <div className="mb-10">
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Fill out the form below and we&apos;ll get back to you within 24 hours with personalized guidance.
                  </p>
                </div>

                {submitStatus === "success" && (
                  <div className="mb-8 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-green-900 font-semibold mb-1">Message Sent Successfully!</p>
                        <p className="text-green-700 text-sm">
                          Thank you for your message. We&apos;ll be in touch soon.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                      Full Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all text-gray-900"
                      placeholder="John Smith"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                      Email Address <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all text-gray-900"
                      placeholder="john.smith@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all text-gray-900"
                      placeholder="07XXX XXXXXX"
                    />
                  </div>

                  <div>
                    <label htmlFor="programme" className="block text-sm font-semibold text-gray-900 mb-2">
                      Programme of Interest <span className="text-red-600">*</span>
                    </label>
                    <select
                      id="programme"
                      name="programme"
                      value={formData.programme}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all bg-white text-gray-900"
                    >
                      <option value="">Select a programme...</option>
                      {programmes.map((prog, index) => (
                        <option key={index} value={prog}>
                          {prog}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                      Message <span className="text-red-600">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all resize-none text-gray-900"
                      placeholder="Tell us about your career goals and any questions you have..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group w-full inline-flex items-center justify-center gap-3 px-8 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 font-bold text-lg shadow-elegant hover:shadow-hover-elegant hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-6 w-6 border-3 border-white border-t-transparent" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Additional Info */}
            <div className="lg:col-span-2 space-y-8">
              {/* Why Contact Us */}
              <div className="group relative">
                <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-green-500/20 via-transparent to-emerald-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
                <div className="relative bg-white rounded-3xl p-8 border border-gray-200 shadow-elegant group-hover:shadow-hover-elegant transition-all duration-500">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-md">
                      <MessageSquare className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Why Contact Us?</h3>
                  </div>
                  <ul className="space-y-5">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-bold text-gray-900 mb-1">{benefit.title}</p>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {benefit.description}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Image */}
              <div className="group relative h-[280px] rounded-3xl overflow-hidden shadow-elegant group-hover:shadow-hover-elegant transition-all duration-500">
                <Image
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80"
                  alt="Training consultation"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-xl font-bold mb-1">Expert Consultation</h3>
                  <p className="text-white/90 text-sm">Personalized guidance for your success</p>
                </div>
              </div>

              {/* Quick Response */}
              <div className="group relative">
                <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-blue-600/30 to-indigo-600/30 blur-xl" />
                <div className="relative bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-3xl p-8 shadow-elegant group-hover:shadow-hover-elegant transition-all duration-500">
                  <h3 className="text-2xl font-bold mb-4">Quick Response Guaranteed</h3>
                  <p className="text-blue-50 mb-6 leading-relaxed">
                    We understand that starting your training journey is an important decision. Our
                    expert team is committed to responding to all enquiries within 24 hours.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 bg-white/10 backdrop-blur-sm rounded-xl">
                      <CheckCircle2 className="w-5 h-5 text-blue-200 flex-shrink-0" />
                      <span className="text-white text-sm font-medium">Email responses within 24 hours</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white/10 backdrop-blur-sm rounded-xl">
                      <CheckCircle2 className="w-5 h-5 text-blue-200 flex-shrink-0" />
                      <span className="text-white text-sm font-medium">Phone enquiries during office hours</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white/10 backdrop-blur-sm rounded-xl">
                      <CheckCircle2 className="w-5 h-5 text-blue-200 flex-shrink-0" />
                      <span className="text-white text-sm font-medium">Free consultation booking available</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Premium Location Section */}
      <section className="py-24 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Visit Our Training Centre</h2>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                Our state-of-the-art training facilities are equipped with the latest technology and industry-standard software
                to provide you with an exceptional learning experience.
              </p>
              <ul className="space-y-6">
                <li className="group relative">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                      <MapPin className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-xl text-gray-900 mb-2">Central Location</p>
                      <p className="text-gray-600 leading-relaxed">Easy access by public transport and parking available</p>
                    </div>
                  </div>
                </li>
                <li className="group relative">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                      <Clock className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-xl text-gray-900 mb-2">Flexible Weekend Classes</p>
                      <p className="text-gray-600 leading-relaxed">Weekend sessions designed to fit your work schedule</p>
                    </div>
                  </div>
                </li>
                <li className="group relative">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                      <Phone className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-xl text-gray-900 mb-2">Book a Facility Tour</p>
                      <p className="text-gray-600 leading-relaxed">Schedule a visit to see our modern training environment</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="group relative h-[400px] lg:h-[550px] rounded-3xl overflow-hidden shadow-elegant group-hover:shadow-hover-elegant transition-all duration-500">
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80"
                alt="Modern training facility"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 via-blue-900/20 to-transparent" />
              <div className="absolute bottom-10 left-10 right-10 text-white">
                <h3 className="text-3xl font-bold mb-3">State-of-the-Art Facilities</h3>
                <p className="text-white/95 text-lg">Equipped with BrightPay software and professional payroll systems</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Premium FAQ Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center group relative">
            {/* Ambient Glow */}
            <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-blue-500/20 via-transparent to-indigo-500/20 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700" />

            <div className="relative bg-white rounded-3xl p-12 border border-gray-200 shadow-elegant group-hover:shadow-hover-elegant transition-all duration-500">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white mb-8 shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                <HelpCircle className="w-10 h-10" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Have Questions? Check Our FAQ
              </h2>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                Many common questions about our BrightPay programme are answered in our comprehensive FAQ section.
                You might find the information you need right away.
              </p>
              <Link
                href="/#faq"
                className="group inline-flex items-center gap-3 px-10 py-5 border-2 border-blue-600 text-blue-600 rounded-2xl hover:bg-blue-600 hover:text-white transition-all duration-300 font-bold text-lg shadow-md hover:shadow-lg hover:scale-105"
              >
                View FAQ Section
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
