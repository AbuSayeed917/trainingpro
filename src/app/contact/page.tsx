"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, CheckCircle2, HelpCircle } from "lucide-react";
import { useState } from "react";

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
  "Professional Payroll Management",
  "Bookkeeping Fundamentals",
  "Advanced Accounting & Tax",
  "HR & Employment Law",
  "QuickBooks & Cloud Accounting",
  "Management Accounting",
  "General Enquiry",
];

const benefits = [
  {
    title: "Free Programme Consultation",
    description: "Get personalized advice on which programme suits your career goals",
  },
  {
    title: "Enrollment Support",
    description: "We'll guide you through the enrollment process step by step",
  },
  {
    title: "Flexible Payment Options",
    description: "Discuss payment plans and funding options available",
  },
  {
    title: "Course Details",
    description: "Get detailed information about curriculum, schedule, and requirements",
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
      {/* Hero Section */}
      <section className="bg-gray-50 pt-24 pb-16">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              Start Your Training Journey Today
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Have questions about our programmes? Want to discuss your career goals? We&apos;re here
              to help you take the first step towards professional success.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 border-y border-gray-100">
        <Container>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div
                  key={index}
                  className="group text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 text-white mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{info.details}</p>
                  {info.href !== "#" ? (
                    <a
                      href={info.href}
                      className="text-primary-600 font-medium hover:text-primary-700 transition-colors text-sm"
                    >
                      {info.contact}
                    </a>
                  ) : (
                    <p className="text-gray-700 font-medium text-sm">{info.contact}</p>
                  )}
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-white">
        <Container>
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Form */}
            <div className="lg:col-span-3 bg-white rounded-2xl p-10 border border-gray-200">
              <div className="mb-10">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Fill out the form below and we&apos;ll get back to you as soon as possible.
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
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Additional Info */}
            <div className="lg:col-span-2 space-y-8">
              {/* Why Contact Us */}
              <div className="bg-white rounded-2xl p-8 border border-gray-200">
                <div className="flex items-center gap-3 mb-6">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500 to-primary-600 text-white">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Why Contact Us?</h3>
                </div>
                <ul className="space-y-5">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-gray-900 mb-1">{benefit.title}</p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image */}
              <div className="relative h-[280px] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80"
                  alt="Training consultation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>

              {/* Quick Response */}
              <div className="bg-gradient-to-br from-primary-600 to-primary-500 text-white rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4">Quick Response Guaranteed</h3>
                <p className="text-primary-50 mb-6 leading-relaxed">
                  We understand that starting your training journey is an important decision. Our
                  team is committed to responding to all enquiries within 24 hours.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary-200 flex-shrink-0" />
                    <span className="text-primary-50 text-sm">Email responses within 24 hours</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary-200 flex-shrink-0" />
                    <span className="text-primary-50 text-sm">Phone enquiries during office hours</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary-200 flex-shrink-0" />
                    <span className="text-primary-50 text-sm">Free consultation booking available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Quick Links */}
      <section className="py-24 bg-gray-50">
        <Container>
          <div className="max-w-3xl mx-auto text-center bg-white rounded-2xl p-12 border border-gray-200">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 text-white mb-6">
              <HelpCircle className="w-7 h-7" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Have Questions? Check Our FAQ
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Many common questions are answered in our frequently asked questions section. You
              might find the information you need right away.
            </p>
            <Link
              href="/#faq"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary-600 text-primary-600 rounded-lg hover:bg-primary-600 hover:text-white transition-all font-semibold"
            >
              View FAQ Section
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
