import { HeroSection } from "../Component/HeroSection";
import { Navbar } from "../Component/Navbar";
import { SecondSection } from "../Component/SecondSection";
import { SectionDivider } from "../Component/SectionDivider";
import { ThirdSection } from "../Component/ThirdSection";

export const LandingPage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <SectionDivider />
      <SecondSection />
      <SectionDivider />
      <ThirdSection />
      <SectionDivider />
    </>
  );
};
