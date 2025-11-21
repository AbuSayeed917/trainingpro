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
  CTA
} from "@/components/sections";
import { AnimatedStats } from "@/components/sections/AnimatedStats";

export default function Home() {
  return (
    <>
      <Hero />
      <VideoShowcase />
      <StatsDashboard />
      <SalaryProgressionChart />
      <ModernComparison />
      <SalaryCareerInfo />
      <WhyTrainingNeeded />
      <Features />
      <TrainerShowcase />
      <AnimatedStats />
      <FeaturedProgrammes />
      <WantToWeWill />
      <BeforeAfter />
      <LearningRoadmap />
      <HowItWorks />
      <FAQ />
      <CTA />
    </>
  );
}
