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
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6 lg:gap-0">
            <h3 className="text-[40px] font-extralight lg:text-right pr-6">
              Let Us Know Your Goals
            </h3>
            <p className="border-l border-white pl-6 font-grotesque text-2xl leading-8">
              From the first hello to a forever connection,{" "}
              <br className="hidden lg:block" /> embark on your journey to
              success with ASA CX.
            </p>
            <Button
              as={Link}
              radius="none"
              className="px-8 w-min font-semibold lg:ml-auto mr-6 mt-4 lg:mt-0"
              href="mailto:desi@asa-cx.com"
            >
              Talk to Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToActionV2;
