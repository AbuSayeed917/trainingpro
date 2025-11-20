export const SITE_CONFIG = {
  name: "Training Pro",
  description: "World-class training programmes in payroll, bookkeeping, accounting, and more.",
  url: "https://trainingpro.co.uk",
  email: "info@trainingpro.co.uk",
  phone: "+44 (0) 20 1234 5678",
  address: "123 Business Street, London, UK",
  social: {
    twitter: "@trainingpro",
    facebook: "trainingpro",
    linkedin: "company/trainingpro",
    instagram: "trainingpro",
  },
};

export const PROGRAMME_CATEGORIES = {
  payroll: "Payroll",
  bookkeeping: "Bookkeeping",
  accounting: "Accounting",
  tax: "Tax & Compliance",
  hr: "HR Management",
  finance: "Finance",
  "business-management": "Business Management",
  compliance: "Compliance",
} as const;

export const PROGRAMME_LEVELS = {
  beginner: "Beginner",
  intermediate: "Intermediate",
  advanced: "Advanced",
  professional: "Professional",
} as const;

export const NAVIGATION_ITEMS = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Programmes",
    href: "/programmes",
    children: [
      { name: "Payroll Training", href: "/programmes/payroll" },
      { name: "Bookkeeping", href: "/programmes/bookkeeping" },
      { name: "Accounting", href: "/programmes/accounting" },
      { name: "Tax & Compliance", href: "/programmes/tax" },
      { name: "HR Management", href: "/programmes/hr" },
      { name: "All Programmes", href: "/programmes" },
    ],
  },
  {
    name: "Work Experience",
    href: "/work-experience",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];
