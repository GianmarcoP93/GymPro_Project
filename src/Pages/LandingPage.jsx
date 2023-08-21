import Footer from "../components/shared/Footer";
import { FourthSection } from "../components/FourthSection";
import { HeroSection } from "../components/HeroSection";
import { Navbar } from "../components/shared/Navbar";
import { SecondSection } from "../components/SecondSection";
import { SectionDivider } from "../components/shared/SectionDivider";
import { ThirdSection } from "../components/ThirdSection";

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
