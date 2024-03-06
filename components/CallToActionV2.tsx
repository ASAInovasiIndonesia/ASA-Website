import { Button } from "@nextui-org/react";
import React from "react";
import Link from "next/link";

const CallToActionV2 = () => {
  return (
    <div
      id="CTA"
      className="bg-[url('/static/stock_image5.png')] bg-cover bg-center bg-no-repeat"
    >
      <div className="bg-black/80 text-white w-full h-full">
        <div className="max-w-5xl mx-auto px-6 xl:px-4 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <h3 className="text-3xl font-light">Let Us Know Your Goals</h3>
            <p className="md:border-l border-white md:pl-6 font-grotesque text-xl">
              From the first hello to a forever connection, embark on your
              journey to success with ASA CX.
            </p>
          </div>
          <Button
            as={Link}
            radius="none"
            className="px-8 w-min mt-8 md:mt-12 font-semibold"
            href="mailto:desi@asa-cx.com"
          >
            Talk to Us
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CallToActionV2;
