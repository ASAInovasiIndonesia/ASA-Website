import Image from "next/image";
import React from "react";

const ApproachSection = () => {
  return (
    <div className="bg-black text-white relative">
      <Image
        src="/static/super_graphic3.png"
        className="absolute top-0 right-0 hidden md:block"
        width={284}
        height={320}
        unoptimized
        alt="super graphic"
      />
      <Image
        src="/static/super_graphic4.png"
        className="absolute bottom-0 left-0"
        width={866}
        height={517}
        unoptimized
        alt="super graphic"
      />
      <div className="relative z-10 max-w-7xl px-6 xl:px-4 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 py-24">
        <div>
          <h2 className="uppercase text-4xl md:text-[60px] font-semibold leading-10 md:leading-[78px] tracking-wide">
            HUMAN-CENTERED APPROACH <br /> FOR BETTER COLLABORATION
          </h2>
          <p className="font-grotesque text-2xl mt-8">
            We innovate experiences through a systemic approach of Design
            Thinking to ensure a more integrated and sustainable change.
          </p>
        </div>
        <div className="ml-12 grid grid-cols-1 -mr-6 sm:mr-0 sm:grid-cols-2 grid-rows-2 border-white md:pt-48">
          <div className="pr-6 py-4 sm:p-6 sm:border-r border-b">
            <h5 className="font-semibold text-3xl">Discover</h5>
            <p className="mt-4 font-light">
              We immerse ourselves into customers experiences and challenges to
              understand their needs and define our goals.
            </p>
          </div>
          <div className="pr-6 py-4 sm:p-6 border-b">
            <h5 className="font-semibold text-3xl">Envision</h5>
            <p className="mt-4 font-light">
              We co-create with clients to turn insights into innovative ideas.
              Exploring new territories, each idea becomes a catalyst for
              impactful solutions.
            </p>
          </div>
          <div className="pr-6 py-4 sm:p-6 sm:border-r">
            <h5 className="font-semibold text-3xl">Implement & Iterate</h5>
            <p className="mt-4 font-light">
              We believe in constant improvement. We ensure that our solutions
              evolve based on the ever-changing customer needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApproachSection;
