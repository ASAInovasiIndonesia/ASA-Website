"use client";

import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const HeroV2 = () => {
  const [position, setPosition] = useState(0);
  const listString = [
    "Leverage Your Digital & Physical Channels to Increase Sales ?",
    "Increase Your Customer Satisfaction While Reducing Cost?",
    "Differentiate from Competitors and Build Loyalty?",
    "Generate Demand and Change Behaviour?",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPosition((prev) => {
        if (prev === 3) {
          return 0;
        } else {
          return prev + 1;
        }
      });
    }, 4000);

    // Clean up the interval when the component is unmounted
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <div className="bg-black w-full h-full relative overflow-hidden">
        <Image
          src="/static/super_graphic5.png"
          className="hidden md:block object-contain object-right-bottom xl:object-right-top"
          fill
          unoptimized
          alt="super graphic"
        />
        <Image
          src="/static/super_graphic6.png"
          className="absolute w-full hidden sm:block md:hidden bottom-0 right-0"
          width={834}
          height={798}
          unoptimized
          alt="super graphic"
        />
        <Image
          src="/static/super_graphic6.png"
          className="absolute block w-full sm:hidden bottom-0 right-0"
          width={480}
          height={547}
          unoptimized
          alt="super graphic"
        />
        <Image
          src="/static/stock_image6.png"
          className="absolute w-[70%] sm:w-[50%] lg:w-auto z-[2] left-0 top-0"
          width={516}
          height={897}
          unoptimized
          alt="super graphic"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 xl:px-4 pt-12">
          <Image
            src="/main.png"
            width={100.15}
            height={80.77}
            alt="main image"
          />
          <h1 className="text-orange text-hero font-normal pt-32 xl:pt-0 xl:pl-80 pb-36 xl:pb-52">
            <span className="text-white">From the</span>
            <br /> first hello <br /> <span className="text-white">
              to a
            </span>{" "}
            forever <br /> connection
          </h1>
        </div>
      </div>
      <div className="bg-black text-white pt-6 pb-12 px-6 xl:px-4">
        <div className="max-w-7xl mx-auto">
          <p className="font-grotesque font-light text-xl sm:text-2xl mb-4 tracking-wider">
            Do you want to
          </p>
          <div className="flex gap-8 flex-col lg:flex-row lg:items-start">
            {listString.map(
              (item, i) =>
                position === i && (
                  <h3
                    key={i}
                    className="text-xl sm:text-4xl max-w-[643px] font-light tracking-wide animate-in"
                    style={{ "--index": 1 } as React.CSSProperties}
                  >
                    {listString[i]}
                  </h3>
                )
            )}
            <div className="flex gap-8 items-center">
              <div className="border-b border-white hidden lg:block w-36" />
              <Button
                as={Link}
                radius="none"
                className="px-8 w-min font-semibold bg-white"
                href="mailto:desi@asa-cx.com"
              >
                Talk to Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroV2;
