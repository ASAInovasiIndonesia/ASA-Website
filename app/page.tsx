import ApproachSection from "@/components/ApproachSection";
import CallToActionV2 from "@/components/CallToActionV2";
import Footer from "@/components/Footer";
import HeroV2 from "@/components/HeroV2";
// import InsightSection from "@/components/InsightSection";
import KeyValueSection from "@/components/KeyValueSection";
import OurClients from "@/components/OurClients";
import Testimonial from "@/components/Testimonial";
import React from "react";

const HomePage = () => {
  return (
    <>
      <HeroV2 />
      <KeyValueSection />
      <ApproachSection />
      <OurClients />
      <Testimonial />
      {/* <InsightSection /> */}
      <CallToActionV2 />
      <Footer />
    </>
  );
};

export default HomePage;
