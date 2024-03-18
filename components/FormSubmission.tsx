// @ts-nocheck
"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import Slider from "rc-slider";
import "rc-slider/assets/index.css";

import { Button, Input, Textarea, cn } from "@nextui-org/react";
import { ArrowBack, ArrowNext } from "./icons";
import { Controller, useForm } from "react-hook-form";

type FormValues = {
  Name: string;
  Email: string;
  Company?: string;
  Phone: string;
};

const marks = {
  0: "Not Sure",
  20: "100 Million",
  40: "250 Million",
  60: "500 Million",
  80: "1 Billion",
  100: "> 1 Billion",
};

const SlideSection = ({
  children,
  title,
  desc,
  onBack,
  onNext,
  showBack = true,
  nextText = "Next",
  nextDisabled = false,
  nextLoading = false,
}: {
  children: React.ReactNode;
  title: string;
  desc: string;
  onBack?: () => void;
  onNext: () => void;
  showBack?: boolean;
  nextText?: string;
  nextDisabled?: boolean;
  nextLoading?: boolean;
}) => {
  return (
    <div className="!bg-white py-[24px] sm:py-[48px] lg:py-[75px] px-8 lg:px-[100px] flex flex-col h-full">
      <div className="flex-1">
        <h2 className="text-black text-xl md:text-2xl font-semibold">
          {title}
        </h2>
        <p className="text-gray-500 font-medium text-lg md:text-xl mt-2 mb-6 md:mb-8">
          {desc}
        </p>
        {children}
      </div>
      <div className="flex justify-between items-center">
        {showBack ? (
          <Button
            radius="lg"
            variant="light"
            className="font-medium text-sm px-0 text-orange"
            startContent={<ArrowBack />}
            onClick={onBack}
          >
            Back
          </Button>
        ) : (
          <div>&nbsp;</div>
        )}
        <Button
          radius="lg"
          className="font-medium text-sm px-6 bg-black text-white"
          endContent={<ArrowNext />}
          onClick={onNext}
          isDisabled={nextDisabled}
          isLoading={nextLoading}
        >
          {nextText}
        </Button>
      </div>
    </div>
  );
};

const FormSubmission = () => {
  const {
    control,
    getValues,
    trigger,
    formState: { errors, isValid },
  } = useForm<FormValues>({ mode: "onChange" });

  const [my_swiper, set_my_swiper] = useState<SwiperCore | {}>({});
  const [index, setIndex] = useState(0);
  const [serviceOptions, setServiceOptions] = useState({
    "Increase Sales": false,
    "Optimizing Cost": false,
    "Change Behaviour": false,
    "Improving Customer Experiences": false,
  });
  const [budget, setBudget] = useState<any>(20);
  const [projectDetails, setProjectDetails] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleServiceSelect = (selectedKey: string, val: boolean) => {
    setServiceOptions({
      ...serviceOptions,
      [selectedKey]: !val,
    });
  };

  function hasAtLeastOneTrueValue(): boolean {
    return Object.values(serviceOptions).some((value) => value === true);
  }

  const onPhoneChange = (e: any, onChange: (e: any) => void) => {
    const re = /^[0-9\b]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      onChange(e);
    }
  };

  function formatIndonesiaPhoneNumber(phoneNumber: string): string {
    const strippedNumber = phoneNumber.startsWith("0")
      ? phoneNumber.slice(1)
      : phoneNumber;

    if (!strippedNumber.startsWith("62")) {
      return `62${strippedNumber}`;
    }

    return strippedNumber;
  }

  function getSelectedServiceNames(): string {
    const selectedOptions = Object.entries(serviceOptions).filter(
      ([key, value]) => value === true
    );

    return selectedOptions.map(([key]) => key).join(", ");
  }

  const submitForm = () => {
    trigger();
    if (!isValid) {
      return;
    }
    setIsLoading(true);
    const { Name, Email, Phone, Company } = getValues();

    const payload = {
      id: "INCREMENT",
      name: Name,
      phone: formatIndonesiaPhoneNumber(Phone),
      email: Email,
      company: Company || "",
      budget: marks[budget],
      services: getSelectedServiceNames(),
      "project details": projectDetails,
    };
    fetch("https://sheetdb.io/api/v1/yipz0xgwuicj1", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: [payload],
      }),
    })
      .then((response) => response.json())
      .then((data) => alert("Thank you!\nYour information has been received."))
      .finally(() => setIsLoading(false));
  };

  return (
    <>
      <div className="bg-[url('/static/stock_image5.png')] bg-cover bg-center bg-no-repeat">
        <div className="bg-black/80 text-white w-full h-full">
          <div className="max-w-[1024px] xl:max-w-[70%] ml-auto">
            <div className="max-w-4xl px-6 xl:px-0 py-24">
              <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6 lg:gap-0">
                <h3 className="text-[40px] font-extralight lg:text-left pr-6">
                  Let Us Know Your Goals
                </h3>
                <p className="border-l border-white pl-6 font-grotesque text-2xl leading-8">
                  From the first hello to a forever connection,{" "}
                  <br className="hidden lg:block" /> embark on your journey to
                  success with ASA CX.
                </p>
              </div>
            </div>
            <div className="h-[600px] md:h-[525px] overflow-hidden relative pl-6 xl:pl-0">
              <Swiper
                slidesPerView={1.3}
                spaceBetween={30}
                className="mySwiper"
                onActiveIndexChange={(e) => setIndex(e.activeIndex)}
                allowTouchMove={false}
                onInit={(ev) => {
                  set_my_swiper(ev);
                }}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 1.3,
                  },
                }}
              >
                <SwiperSlide>
                  <SlideSection
                    title="Tell us what you’re dreaming of, and let’s make it happen"
                    desc="What service are you seeking assistance with today?"
                    showBack={false}
                    nextDisabled={!hasAtLeastOneTrueValue()}
                    onNext={() => my_swiper.slideNext()}
                  >
                    <div className="flex gap-x-4 gap-y-4 md:gap-y-6 flex-wrap">
                      {Object.entries(serviceOptions).map(([key, value]) => (
                        <Button
                          key={key}
                          variant={value ? "solid" : "faded"}
                          className={cn("font-medium text-sm px-6 border", {
                            "bg-black text-white": value,
                          })}
                          radius="lg"
                          onClick={() => handleServiceSelect(key, value)}
                        >
                          {key}
                        </Button>
                      ))}
                    </div>
                  </SlideSection>
                </SwiperSlide>
                <SwiperSlide>
                  <SlideSection
                    title="What’s your budget for this transformative journey?"
                    desc="Help us understand, and we'll craft a plan that align with
                      your budget."
                    onNext={() => my_swiper.slideNext()}
                    onBack={() => my_swiper.slidePrev()}
                  >
                    <div className="-mx-1 sm:mx-0">
                      <Slider
                        marks={marks}
                        step={null}
                        defaultValue={20}
                        onChangeComplete={(v) => setBudget(v)}
                        dotStyle={{ color: "black" }}
                      />
                    </div>
                  </SlideSection>
                </SwiperSlide>
                <SwiperSlide>
                  <SlideSection
                    title="Is there any additional information you'd like to share?"
                    desc="Help us understand, and we'll craft a plan that align with
                    your budget."
                    onNext={() => my_swiper.slideNext()}
                    onBack={() => my_swiper.slidePrev()}
                  >
                    <div className="">
                      <Textarea
                        placeholder="Share your project details"
                        minRows={4}
                        maxRows={5}
                        classNames={{ innerWrapper: "text-black" }}
                        radius="sm"
                        variant="bordered"
                        value={projectDetails}
                        onValueChange={setProjectDetails}
                      />
                    </div>
                  </SlideSection>
                </SwiperSlide>
                <SwiperSlide>
                  <SlideSection
                    title="To ensure we provide the best support, may we have your
                    contact info?"
                    desc="Your journey towards success begins now!"
                    onNext={() => submitForm()}
                    onBack={() => my_swiper.slidePrev()}
                    nextLoading={isLoading}
                    nextText="Submit"
                  >
                    <form className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 -mt-3 sm:mt-0 overflow-y-auto">
                      <Controller
                        control={control}
                        name="Name"
                        rules={{
                          required: true,
                          pattern: /^(?!\s+$)./,
                        }}
                        render={({ field: { onChange, value } }) => (
                          <Input
                            label="Your Name"
                            placeholder="Type your name"
                            variant="bordered"
                            radius="sm"
                            classNames={{
                              innerWrapper: "text-black",
                              label: "text-xs sm:text-sm",
                              errorMessage: "text-[10px] sm:text-xs",
                              helperWrapper: "py-0 sm:py-1",
                            }}
                            labelPlacement="outside"
                            value={value}
                            onChange={onChange}
                            errorMessage={
                              errors.Name && "Please enter a valid name"
                            }
                            isInvalid={!!errors.Name}
                          />
                        )}
                      />
                      <Controller
                        control={control}
                        name="Company"
                        rules={{
                          required: true,
                          pattern: /^(?!\s+$)./,
                        }}
                        render={({ field: { onChange, value } }) => (
                          <Input
                            label="Company or Role"
                            placeholder="Type your company name"
                            variant="bordered"
                            radius="sm"
                            classNames={{
                              innerWrapper: "text-black",
                              label: "text-xs sm:text-sm",
                              errorMessage: "text-[10px] sm:text-xs",
                              helperWrapper: "py-0 sm:py-1",
                            }}
                            labelPlacement="outside"
                            value={value}
                            onChange={onChange}
                            errorMessage={
                              errors.Company &&
                              "Please enter a valid company / role"
                            }
                            isInvalid={!!errors.Company}
                          />
                        )}
                      />
                      <Controller
                        control={control}
                        name="Email"
                        rules={{
                          required: true,
                          pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        }}
                        render={({ field: { onChange, value } }) => (
                          <Input
                            label="Email"
                            placeholder="Type your email"
                            variant="bordered"
                            radius="sm"
                            pattern="^[0-9\b]+$"
                            classNames={{
                              innerWrapper: "text-black",
                              label: "text-xs sm:text-sm",
                              errorMessage: "text-[10px] sm:text-xs",
                              helperWrapper: "py-0 sm:py-1",
                            }}
                            labelPlacement="outside"
                            value={value}
                            onChange={onChange}
                            errorMessage={
                              errors.Email && "Please enter a valid email"
                            }
                            isInvalid={!!errors.Email}
                          />
                        )}
                      />
                      <Controller
                        control={control}
                        name="Phone"
                        rules={{
                          required: true,
                          pattern: /^(0|62)\d{8,11}$/,
                        }}
                        render={({ field: { onChange, value } }) => (
                          <Input
                            label="Phone Number"
                            placeholder="Type your phone number"
                            variant="bordered"
                            radius="sm"
                            type="tel"
                            classNames={{
                              innerWrapper: "text-black",
                              label: "text-xs sm:text-sm",
                              errorMessage: "text-[10px] sm:text-xs",
                              helperWrapper: "py-0 sm:py-1",
                            }}
                            labelPlacement="outside"
                            value={value}
                            onChange={(e) => onPhoneChange(e, onChange)}
                            errorMessage={
                              errors.Phone &&
                              "Please enter a valid phone number"
                            }
                            isInvalid={!!errors.Phone}
                          />
                        )}
                      />
                    </form>
                  </SlideSection>
                </SwiperSlide>
                <SwiperSlide />
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormSubmission;
