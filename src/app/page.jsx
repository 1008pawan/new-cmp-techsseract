import ContactUs from "@/components/ContactUs";
import Gallery from "@/components/Gallery";
import HeroSection from "@/components/HeroSection";
import OurServices from "@/components/OurServices";
import OurWorks from "@/components/OurWorks";
import SecondHeroSection from "@/components/AboutUS";
import WhyChosseUs from "@/components/WhyChosseUs";
import React from "react";
import Navebar from "@/components/Navbar";

const page = () => {
  return (
    <div className="scroll-smooth">
      <Navebar /> 
      <HeroSection />
      <SecondHeroSection />
      <OurServices />
      <OurWorks />
      <WhyChosseUs />
      <Gallery />
      <ContactUs />
    </div>
  );
};

export default page;
