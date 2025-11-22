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
  TrainingFacilities,
  ProfessionalStats,
  CTA
} from "@/components/sections";
import { AnimatedStats } from "@/components/sections/AnimatedStats";
import { FloatingCTA, ScrollProgress, SocialProof } from "@/components/ui";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Hero />
      <VideoShowcase />
      <ProfessionalStats />
      <SalaryProgressionChart />
      <ModernComparison />
      <SkillShowcase />
      <SalaryCareerInfo />
      <WhyTrainingNeeded />
      <Features />
      <TrainingFacilities />
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
      <SocialProof />
    </>
  );
}
