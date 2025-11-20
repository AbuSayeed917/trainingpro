export interface Programme {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDescription?: string;
  category: ProgrammeCategory;
  duration: string;
  level: ProgrammeLevel;
  price: number;
  currency: string;
  image: string;
  features: string[];
  modules?: Module[];
  startDate?: Date;
  endDate?: Date;
  maxParticipants?: number;
  currentParticipants?: number;
  instructor?: Instructor;
  testimonials?: Testimonial[];
  isFeatured?: boolean;
  isPopular?: boolean;
}

export type ProgrammeCategory =
  | "payroll"
  | "bookkeeping"
  | "accounting"
  | "tax"
  | "hr"
  | "finance"
  | "business-management"
  | "compliance";

export type ProgrammeLevel = "beginner" | "intermediate" | "advanced" | "professional";

export interface Module {
  id: string;
  title: string;
  description: string;
  duration: string;
  order: number;
  lessons?: Lesson[];
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  duration: string;
  type: "video" | "reading" | "quiz" | "assignment";
  order: number;
}

export interface Instructor {
  id: string;
  name: string;
  title: string;
  bio: string;
  image: string;
  expertise: string[];
  linkedIn?: string;
  twitter?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  image?: string;
  content: string;
  rating: number;
  programmeId: string;
  date: Date;
}

export interface Enrollment {
  id: string;
  userId: string;
  programmeId: string;
  status: EnrollmentStatus;
  enrollmentDate: Date;
  completionDate?: Date;
  progress: number;
}

export type EnrollmentStatus = "enrolled" | "in-progress" | "completed" | "dropped";

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  enrollments?: Enrollment[];
  createdAt: Date;
}

export type UserRole = "student" | "instructor" | "admin";

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  programme?: string;
}

export interface EnrollmentFormData {
  name: string;
  email: string;
  phone: string;
  programmeId: string;
  startDate?: string;
  experience?: string;
  message?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: Instructor;
  category: string;
  tags: string[];
  image: string;
  publishedAt: Date;
  readTime: number;
}
