import {
  Hero,
  Features,
  FeaturedProgrammes,
  HowItWorks,
  FAQ,
  LearningRoadmap,
  WantToWeWill,
  BeforeAfter,
  VideoShowcase,
  TrainerShowcase,
  SalaryCareerInfo,
  WhyTrainingNeeded,
  SalaryProgressionChart,
  ModernComparison,
  StatsDashboard,
  TestimonialsEnhanced,
  SkillShowcase,
  PremiumStats,
  CTA
} from "@/components/sections";
import { AnimatedStats } from "@/components/sections/AnimatedStats";
import { FloatingCTA } from "@/components/ui";

export default function Home() {
  return (
    <>
      <Hero />
      <VideoShowcase />
      <PremiumStats />
      <SalaryProgressionChart />
      <ModernComparison />
      <SkillShowcase />
      <SalaryCareerInfo />
      <WhyTrainingNeeded />
      <Features />
      <TrainerShowcase />
      <TestimonialsEnhanced />
      <AnimatedStats />
      <FeaturedProgrammes />
      <WantToWeWill />
      <BeforeAfter />
      <LearningRoadmap />
      <HowItWorks />
      <FAQ />
      <CTA />
      <FloatingCTA />
    </>
  );
}
