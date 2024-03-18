import ApproachSection from "@/components/ApproachSection";
import CallToActionV2 from "@/components/CallToActionV2";
import Footer from "@/components/Footer";
import FormSubmission from "@/components/FormSubmission";
import HeroV2 from "@/components/HeroV2";
// import InsightSection from "@/components/InsightSection";
import KeyValueSection from "@/components/KeyValueSection";
import KeyValueSection2 from "@/components/KeyValueSection2";
import OurClients from "@/components/OurClients";
import Testimonial from "@/components/Testimonial";
import React from "react";

const HomePage = () => {
  return (
    <>
      <HeroV2 />
      <KeyValueSection />
      <Testimonial />
      <KeyValueSection2 />
      <ApproachSection />
      <OurClients />
      {/* <InsightSection /> */}
      {/* <CallToActionV2 /> */}
      <FormSubmission />
      <Footer />
    </>
  );
};

export default HomePage;
