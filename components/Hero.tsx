"use client";

import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [position, setPosition] = useState(0);
  const listString = [
    "Leverage your digital & physical channels to increase sales ?",
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
    <div className="w-full h-[100svh] relative overflow-hidden">
      <video
        src="/static/hero_video.mp4"
        className="absolute z-0 top-0 w-full h-full object-cover object-center"
        muted
        autoPlay
        loop
      />
      <div className="absolute z-1 linear-foreground w-full h-full" />
      <Image
        src="/static/super_graphic1.png"
        className="absolute z-[2] left-0 bottom-0"
        width={704}
        height={196}
        unoptimized
        alt="supergraphic1"
      />
      <div className="relative h-full w-full z-10 max-w-7xl mx-auto px-6 xl:px-4 py-10 md:py-12 grid md:grid-cols-2 gap-4">
        <div className="h-full flex flex-col justify-center gap-24 md:pb-36">
          <Image
            src="/main.png"
            width={100.15}
            height={80.77}
            alt="main image"
          />
          <h1 className="text-hero font-medium text-orange leading-[80px] md:leading-[110px]">
            <span className="text-white">From the</span>
            <br /> first hello <br /> <span className="text-white">
              to a
            </span>{" "}
            forever <br /> connection
          </h1>
        </div>
        <div className="flex flex-col justify-end pb-12 text-white">
          <p className="font-grotesque font-light text-2xl mb-4 tracking-wider">
            Do you want to
          </p>
          {listString.map(
            (item, i) =>
              position === i && (
                <h3
                  key={i}
                  className="text-3xl font-light tracking-wide animate-in"
                  style={{ "--index": 1 } as React.CSSProperties}
                >
                  {listString[i]}
                </h3>
              )
          )}
          <Button
            as={Link}
            radius="none"
            className="px-16 w-min mt-12 font-semibold"
            size="lg"
            href="#CTA"
          >
            FREE CONSULTATION
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
