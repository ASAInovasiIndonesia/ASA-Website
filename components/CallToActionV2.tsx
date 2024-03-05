import { Button } from "@nextui-org/react";
import React from "react";
import Link from "next/link";

const CallToActionV2 = () => {
  return (
    <div
      id="CTA"
      className="bg-[url('/static/stock_image5.png')] bg-cover bg-center bg-no-repeat"
    >
      <div className="bg-black/70 text-white w-full h-full">
        <div className="max-w-5xl mx-auto px-6 xl:px-4 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <h3 className="text-3xl font-light">
              Let Us Know <br /> About Your Needs
            </h3>
            <p className="md:border-l border-white md:pl-6 font-grotesque text-xl">
              From the first hello to a forever connection, embark on your
              journey to success with ASA CX Consulting. Schedule a consultation
              today and explore how our expertise can drive meaningful results
              for you.
            </p>
          </div>
          <Button
            as={Link}
            radius="none"
            className="px-12 w-min mt-8 md:mt-12 font-semibold"
            href="mailto:desi@asa-cx.com"
          >
            FREE CONSULTATION
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CallToActionV2;
