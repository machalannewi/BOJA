import AboutSection from "@/components/sections/AboutSection";
import BoardOfDirectorsSection from "@/components/sections/BoardOfDirectorsSection";
import CallToAction from "@/components/sections/CallToAction";
import CitiesSliderSection from "@/components/sections/CitiesSliderSection";
import FeaturedPropertiesSection from "@/components/sections/FeaturedPropertiesSection";
import HeroSection from "@/components/sections/HeroSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import Services from "@/components/sections/Services";
import TestimonialSlider from "@/components/sections/TestimonialSection";

export default function Home() {
  return (
    <div className="font-mulish">
      <HeroSection />
      <Services />
      <FeaturedPropertiesSection />
      <AboutSection />
      <CitiesSliderSection />
      <HowItWorksSection />
      <BoardOfDirectorsSection />
      <CallToAction />
      <TestimonialSlider />
    </div>
  );
}
