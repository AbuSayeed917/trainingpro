"use client";

import { useState } from "react";
import { Calendar, Clock, Video, Phone, MapPin, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import { Container } from "@/components/ui";

// Booking types
const bookingTypes = [
  {
    id: "consultation",
    title: "Free Consultation",
    duration: "30 minutes",
    description: "Discuss your career goals and learn about the BrightPay training programme",
    icon: Video,
    color: "from-blue-500 to-indigo-500",
  },
  {
    id: "call",
    title: "Quick Call",
    duration: "15 minutes",
    description: "Quick questions about the programme, pricing, or schedule",
    icon: Phone,
    color: "from-indigo-500 to-purple-500",
  },
  {
    id: "campus",
    title: "Campus Visit",
    duration: "45 minutes",
    description: "Visit our training facility and meet the trainer in person",
    icon: MapPin,
    color: "from-purple-500 to-pink-500",
  },
];

// Generate available time slots
const generateTimeSlots = () => {
  const slots = [];
  const startHour = 9; // 9 AM
  const endHour = 17; // 5 PM

  for (let hour = startHour; hour < endHour; hour++) {
    for (const minute of [0, 30]) {
      const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
      slots.push(time);
    }
  }
  return slots;
};

// Generate next 14 days (excluding Sundays)
const generateAvailableDates = () => {
  const dates = [];
  const today = new Date();
  let daysAdded = 0;
  const currentDate = new Date(today);

  while (daysAdded < 14) {
    currentDate.setDate(currentDate.getDate() + 1);
    // Only add weekdays and Saturdays (exclude Sundays - day 0)
    if (currentDate.getDay() !== 0) {
      dates.push(new Date(currentDate));
      daysAdded++;
    }
  }
  return dates;
};

export function BookingCalendar() {
  const [selectedType, setSelectedType] = useState(bookingTypes[0]);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [currentWeekStart, setCurrentWeekStart] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    notes: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const availableDates = generateAvailableDates();
  const timeSlots = generateTimeSlots();
  const datesPerPage = 7;
  const currentWeekDates = availableDates.slice(currentWeekStart, currentWeekStart + datesPerPage);

  const handleNextWeek = () => {
    if (currentWeekStart + datesPerPage < availableDates.length) {
      setCurrentWeekStart(currentWeekStart + datesPerPage);
    }
  };

  const handlePrevWeek = () => {
    if (currentWeekStart - datesPerPage >= 0) {
      setCurrentWeekStart(currentWeekStart - datesPerPage);
    }
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-GB', {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
    }).format(date);
  };

  const formatFullDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-GB', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(date);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate booking submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      // Reset after 3 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
        setSelectedDate(null);
        setSelectedTime(null);
        setFormData({ name: "", email: "", phone: "", notes: "" });
      }, 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const TypeIcon = selectedType.icon;

  return (
    <section className="section-padding bg-gradient-to-br from-white via-blue-50/20 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-1/4 left-10 w-80 h-80 bg-indigo-200/20 rounded-full blur-3xl animate-float-delayed" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/80 backdrop-blur-sm border border-blue-200/50 mb-6">
              <Calendar className="h-4 w-4 text-blue-700" />
              <span className="text-sm font-semibold text-blue-900">Book Your Appointment</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-6">
              Schedule a Free Consultation
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Choose your preferred date and time to discuss your payroll training goals with our expert
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Step 1: Select Booking Type */}
            <div className="lg:col-span-3">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center font-bold shadow-lg">
                    1
                  </div>
                  Select Appointment Type
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {bookingTypes.map((type) => {
                    const Icon = type.icon;
                    return (
                      <button
                        key={type.id}
                        onClick={() => setSelectedType(type)}
                        className={`group relative p-6 rounded-2xl border-2 transition-all duration-300 text-left ${
                          selectedType.id === type.id
                            ? 'border-blue-500 bg-blue-50 shadow-lg'
                            : 'border-gray-200 bg-white hover:border-blue-300 hover:shadow-md'
                        }`}
                      >
                        <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${type.color} text-white mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="h-7 w-7" />
                        </div>
                        <h4 className="text-lg font-bold text-gray-900 mb-2">{type.title}</h4>
                        <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                          <Clock className="h-4 w-4" />
                          <span>{type.duration}</span>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">{type.description}</p>
                        {selectedType.id === type.id && (
                          <div className="absolute top-4 right-4">
                            <CheckCircle2 className="h-6 w-6 text-blue-600" />
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Step 2: Select Date */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center font-bold shadow-lg">
                  2
                </div>
                Choose Date & Time
              </h3>

              <div className="bg-white rounded-2xl shadow-elegant border border-gray-200 p-6 mb-6">
                {/* Week Navigation */}
                <div className="flex items-center justify-between mb-6">
                  <button
                    onClick={handlePrevWeek}
                    disabled={currentWeekStart === 0}
                    className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <h4 className="text-lg font-semibold text-gray-900">
                    {formatDate(currentWeekDates[0])} - {formatDate(currentWeekDates[currentWeekDates.length - 1])}
                  </h4>
                  <button
                    onClick={handleNextWeek}
                    disabled={currentWeekStart + datesPerPage >= availableDates.length}
                    className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>

                {/* Date Selection */}
                <div className="grid grid-cols-7 gap-2 mb-6">
                  {currentWeekDates.map((date, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setSelectedDate(date);
                        setSelectedTime(null);
                      }}
                      className={`p-3 rounded-xl text-center transition-all duration-300 ${
                        selectedDate?.toDateString() === date.toDateString()
                          ? 'bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg scale-105'
                          : 'bg-gray-50 hover:bg-gray-100 text-gray-900'
                      }`}
                    >
                      <div className="text-xs font-semibold mb-1">
                        {date.toLocaleDateString('en-GB', { weekday: 'short' })}
                      </div>
                      <div className="text-lg font-bold">
                        {date.getDate()}
                      </div>
                    </button>
                  ))}
                </div>

                {/* Time Slots */}
                {selectedDate && (
                  <div>
                    <h5 className="text-sm font-semibold text-gray-700 mb-3">
                      Available times for {formatFullDate(selectedDate)}
                    </h5>
                    <div className="grid grid-cols-4 gap-2 max-h-64 overflow-y-auto">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          className={`p-3 rounded-lg text-sm font-semibold transition-all duration-300 ${
                            selectedTime === time
                              ? 'bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg'
                              : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Step 3: Contact Details */}
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center font-bold shadow-lg">
                  3
                </div>
                Your Details
              </h3>

              {submitStatus === "success" ? (
                <div className="bg-white rounded-2xl shadow-elegant border border-gray-200 p-8">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 mb-4">
                      <CheckCircle2 className="h-8 w-8 text-emerald-600" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Booking Confirmed!</h4>
                    <p className="text-gray-600">
                      You&apos;ll receive a confirmation email with calendar invite and meeting details.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-elegant border border-gray-200 p-6 space-y-4">
                  {/* Selected Booking Summary */}
                  {selectedDate && selectedTime && (
                    <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl mb-4">
                      <div className="flex items-start gap-3">
                        <TypeIcon className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <div className="flex-1">
                          <div className="font-semibold text-gray-900 mb-1">{selectedType.title}</div>
                          <div className="text-sm text-gray-600">
                            {formatFullDate(selectedDate)}
                          </div>
                          <div className="text-sm font-semibold text-blue-600">
                            {selectedTime} ({selectedType.duration})
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                      Phone Number <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      placeholder="07XXX XXXXXX"
                    />
                  </div>

                  <div>
                    <label htmlFor="notes" className="block text-sm font-semibold text-gray-900 mb-2">
                      Notes (Optional)
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      value={formData.notes}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all resize-none"
                      placeholder="Any specific questions or topics you'd like to discuss..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={!selectedDate || !selectedTime || isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-bold text-lg shadow-elegant hover:shadow-hover-elegant hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-3 border-white border-t-transparent" />
                        Confirming Booking...
                      </>
                    ) : (
                      <>
                        <Calendar className="h-5 w-5" />
                        Confirm Booking
                      </>
                    )}
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    You&apos;ll receive a confirmation email with meeting details
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
