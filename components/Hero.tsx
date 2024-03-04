import { Button } from "@nextui-org/react";
import Image from "next/image";

const HeroSection = () => {
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
      <div className="relative h-full w-full z-10 max-w-7xl mx-auto px-4 py-10 md:py-12 lg:px-0 grid md:grid-cols-2 gap-4">
        <div className="h-full flex flex-col justify-center gap-24 pb-36">
          <Image
            src="/main.png"
            width={100.15}
            height={80.77}
            alt="main image"
          />
          <h1 className="text-hero font-medium text-orange">
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
          <h3 className="text-3xl font-light tracking-wide">
            Leverage your digital & physical channels to increase sales?
          </h3>
          <Button
            radius="none"
            className="px-16 w-min mt-12 font-semibold"
            size="lg"
          >
            FREE CONSULTATION
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
