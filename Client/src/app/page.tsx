import AboutSection from "@/components/sections/AboutSection";
import BoardOfDirectorsSection from "@/components/sections/BoardOfDirectorsSection";
import CallToAction from "@/components/sections/CallToAction";
import CitiesSliderSection from "@/components/sections/CitiesSliderSection";
import FeaturedPropertiesSection from "@/components/sections/FeaturedPropertiesSection";
import HeroSection from "@/components/sections/HeroSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
// import Services from "@/components/sections/Services";
import TestimonialSlider from "@/components/sections/TestimonialSection";
import FloatingBoxes from "@/components/sections/FloatingBoxes"
import AccordionSection from "@/components/sections/AccordionSection";
import InvestmentOverviewSection from "@/components/sections/InvestmentOverviewSection"
import ServicesLandingSection from "@/components/sections/ServicesLandingSection"
import CustomerSupport from "@/components/sections/CustomerSupport";

export default function Home() {
  return (
    <div className="font-mulish">
      <HeroSection />
      <FloatingBoxes />
      <AccordionSection />
      <AboutSection />
      <InvestmentOverviewSection />
      <ServicesLandingSection />
      <FeaturedPropertiesSection />
      <CitiesSliderSection />
      <HowItWorksSection />
      <BoardOfDirectorsSection />
      <CallToAction />
      <TestimonialSlider />
      <CustomerSupport />
    </div>
  );
}
