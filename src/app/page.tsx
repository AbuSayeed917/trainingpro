import {
  Hero,
  Features,
  FeaturedProgrammes,
  HowItWorks,
  TrustedBy,
  FAQ,
  CTA,
  Instructors,
  LearningRoadmap
} from "@/components/sections";
import { VideoSection } from "@/components/sections/VideoSection";
import { AnimatedStats } from "@/components/sections/AnimatedStats";
import { FacilitiesGallery } from "@/components/sections/FacilitiesGallery";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <FeaturedProgrammes />
      <AnimatedStats />
      <LearningRoadmap />
      <HowItWorks />
      <VideoSection />
      <Instructors />
      <FacilitiesGallery />
      <TrustedBy />
      <FAQ />
      <CTA />
    </>
  );
}
