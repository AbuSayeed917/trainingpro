import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { Header, Footer } from "@/components/layout";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Training Pro - Professional Training in Payroll, Bookkeeping & More",
    template: "%s | Training Pro",
  },
  description:
    "World-class training programmes in payroll, bookkeeping, accounting, tax, and HR management. Gain practical skills and real work experience to advance your career.",
  keywords: [
    "payroll training",
    "bookkeeping course",
    "accounting training",
    "tax compliance",
    "HR management",
    "professional development",
    "work experience",
    "career training",
  ],
  authors: [{ name: "Training Pro" }],
  creator: "Training Pro",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://trainingpro.co.uk",
    title: "Training Pro - Professional Training Programmes",
    description:
      "World-class training programmes in payroll, bookkeeping, accounting, and more.",
    siteName: "Training Pro",
  },
  twitter: {
    card: "summary_large_image",
    title: "Training Pro - Professional Training Programmes",
    description:
      "World-class training programmes in payroll, bookkeeping, accounting, and more.",
    creator: "@trainingpro",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
      </head>
      <body className="antialiased overflow-x-hidden">
        <Header />
        <main className="min-h-screen overflow-x-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
