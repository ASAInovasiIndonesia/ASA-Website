"use client";

import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const HeroSection = () => {
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
    <div className="w-full h-[100svh] relative">
      <video
        src="/static/hero_video.mp4"
        className="absolute z-0 top-0 -right-[15%] w-full h-full object-cover object-center"
        muted
        playsInline
        autoPlay
        loop
      />
      <div className="absolute z-1 linear-foreground1 ransform -scale-y-100 w-full h-full" />
      <div className="absolute z-2 linear-foreground2 w-full h-full" />
      <div className="absolute z-2 linear-foreground3 w-full h-full" />
      <Image
        src="/static/super_graphic1.png"
        className="absolute z-[2] left-0 bottom-0 md:h-[190px]"
        width={704}
        height={196}
        unoptimized
        alt="supergraphic1"
      />
      <div className="relative h-full w-full z-10 max-w-7xl mx-auto px-6 xl:px-4 py-6 sm:py-10 md:py-12 grid md:grid-cols-2 gap-4">
        <div className="h-full flex flex-col justify-center gap-8 md:gap-24 md:pb-36">
          <Image
            src="/main.png"
            width={100.15}
            height={80.77}
            alt="main image"
          />
          <h1 className="text-4xl sm:text-hero font-medium text-orange leading-[45px] sm:leading-[80px] md:leading-[90px] lg:leading-[100px]">
            <span className="text-white">From the</span>
            <br /> first hello <br /> <span className="text-white">
              to a
            </span>{" "}
            forever <br /> connection
          </h1>
        </div>
        <div className="flex flex-col md:justify-end md:pb-24 text-white">
          <p className="font-grotesque font-light text-2xl mb-4 tracking-wider">
            Do you want to
          </p>
          {listString.map(
            (item, i) =>
              position === i && (
                <h3
                  key={i}
                  className="text-xl sm:text-3xl font-light tracking-wide animate-in"
                  style={{ "--index": 1 } as React.CSSProperties}
                >
                  {listString[i]}
                </h3>
              )
          )}
          <Button
            as={Link}
            radius="none"
            className="px-8 w-min mt-8 font-semibold"
            href="mailto:desi@asa-cx.com"
          >
            FREE CONSULTATION
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
