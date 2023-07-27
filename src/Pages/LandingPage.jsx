import { FourthSection } from "../Component/FourthSection";
import { HeroSection } from "../Component/HeroSection";
import { Navbar } from "../Component/Navbar";
import { SecondSection } from "../Component/SecondSection";
import { SectionDivider } from "../Component/SectionDivider";
import { ThirdSection } from "../Component/ThirdSection";
import Footer from "../Component/Footer";

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
      <FourthSection />
      <Footer />
    </>
  );
};
