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
  CTA
} from "@/components/sections";
import { AnimatedStats } from "@/components/sections/AnimatedStats";

export default function Home() {
  return (
    <>
      <Hero />
      <VideoShowcase />
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
