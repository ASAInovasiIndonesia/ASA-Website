"use client";
import { Button, Input, Textarea } from "@nextui-org/react";
import React, { useState } from "react";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { ArrowBack, ArrowNext } from "./icons";

const CallToAction = () => {
  const [slide, setSlide] = useState(0);
  const [projectDetail, setProjectDetail] = useState("");
  return (
    <div
      id="CTA"
      className="bg-[url('/static/stock_image5.png')] bg-cover bg-center bg-no-repeat"
    >
      <div className="bg-black/70 text-white w-full h-full pt-16">
        <div className="max-w-7xl mx-auto">
          <div className="ml-auto w-full px-6 lg:px-0 lg:max-w-[70%] grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
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
          <div className="ml-auto w-full px-6 lg:px-0 lg:max-w-[70%] overflow-x-hidden">
            <CarouselProvider
              naturalSlideWidth={732}
              naturalSlideHeight={520}
              totalSlides={4}
              visibleSlides={1}
              currentSlide={slide}
            >
              <Slider>
                <Slide index={0} className="bg-white text-black relative">
                  <div className="flex flex-col gap-y-6 h-full justify-center items-start text-left max-w-[90%] md:max-w-[50%] mx-auto">
                    <div className="text-2xl md:text-3xl font-semibold">
                      Tell us what you're dreaming of, and let's make it a
                      reality.
                    </div>
                    <div className="text-xl md:text-2xl text-gray-500">
                      What service are you seeking assistance with today?
                    </div>
                    <div className="flex gap-4 flex-wrap">
                      <Button>Design Experience</Button>
                      <Button>Design Service</Button>
                      <Button>Communications Strategy</Button>
                    </div>
                  </div>
                  <Button
                    className="absolute bottom-10 right-10 bg-orange text-white"
                    endContent={<ArrowNext />}
                    onClick={() => setSlide(1)}
                  >
                    Next
                  </Button>
                </Slide>
                <Slide index={1} className="bg-white text-black relative">
                  <div className="flex flex-col gap-y-6 h-full justify-center items-start text-left max-w-[90%] md:max-w-[50%] mx-auto">
                    <div className="text-2xl md:text-3xl font-semibold">
                      Does your business currently have a website, app, product,
                      or service?
                    </div>
                    <div className="text-xl md:text-2xl text-gray-500">
                      Share the details, and let's explore the possibilities
                      together!
                    </div>
                    <Textarea
                      placeholder="Share your project details"
                      className="w-full"
                      value={projectDetail}
                      onValueChange={setProjectDetail}
                    />
                    <Button
                      className="bg-orange text-white w-full"
                      onClick={() => setSlide(2)}
                    >
                      Continue
                    </Button>
                  </div>
                  <Button
                    className="absolute bottom-10 left-10 bg-orange text-white"
                    startContent={<ArrowBack />}
                    onClick={() => setSlide(0)}
                  >
                    Back
                  </Button>
                </Slide>
                <Slide index={2} className="bg-white text-black relative">
                  <div className="flex flex-col gap-y-6 h-full justify-center items-start text-left max-w-[90%] md:max-w-[50%] mx-auto">
                    <div className="text-2xl md:text-3xl font-semibold">
                      What's your budget for this transformative journey?
                    </div>
                    <div className="text-xl md:text-2xl text-gray-500">
                      Help us understand, and we'll craft a plan that aligns
                      with your goals
                    </div>
                    <Input
                      placeholder="Type your budget"
                      className="w-full"
                      value={projectDetail}
                      onValueChange={setProjectDetail}
                    />
                    <Button
                      className="bg-orange text-white w-full"
                      onClick={() => setSlide(3)}
                    >
                      Continue
                    </Button>
                  </div>
                  <Button
                    className="absolute bottom-10 left-10 bg-orange text-white"
                    startContent={<ArrowBack />}
                    onClick={() => setSlide(1)}
                  >
                    Back
                  </Button>
                </Slide>
                <Slide index={3} className="bg-white text-black relative">
                  <div className="flex flex-col gap-y-6 h-full justify-center items-start text-left max-w-[90%] md:max-w-[50%] mx-auto">
                    <div className="text-2xl md:text-3xl font-semibold">
                      To ensure we provide the best support, may we have your
                      name, email, and phone number?
                    </div>
                    <div className="text-xl md:text-2xl text-gray-500">
                      Your journey towards success begins with us!
                    </div>
                    <div className="grid grid-cols-2 gap-4 w-full">
                      <Input
                        placeholder="Type your email"
                        className="w-full"
                        value={projectDetail}
                        onValueChange={setProjectDetail}
                      />
                      <Input
                        placeholder="Type your phone number"
                        className="w-full"
                        value={projectDetail}
                        onValueChange={setProjectDetail}
                      />
                    </div>
                    <Button className="bg-orange text-white w-full">
                      Submit
                    </Button>
                  </div>
                  <Button
                    className="absolute bottom-10 left-10 bg-orange text-white"
                    startContent={<ArrowBack />}
                    onClick={() => setSlide(2)}
                  >
                    Back
                  </Button>
                </Slide>
              </Slider>
            </CarouselProvider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
