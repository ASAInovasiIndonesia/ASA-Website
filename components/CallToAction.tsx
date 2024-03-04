"use client";
import { Button } from "@nextui-org/react";
import React, { useState } from "react";

const CallToAction = () => {
  return (
    <div className="bg-[url('/static/stock_image5.png')] bg-cover bg-center bg-no-repeat">
      <div className="bg-black/70 text-white w-full h-full pt-16">
        <div className="max-w-7xl mx-auto">
          <div className="ml-auto sm:max-w-[70%] grid grid-cols-2 gap-4 mb-16">
            <h3 className="text-3xl font-light">
              Let Us Know About Your Project
            </h3>
            <p className="border-l border-white pl-6 font-grotesque text-xl">
              From the first hello to a forever connection, embark on your
              journey to success with ASA CX.{" "}
            </p>
          </div>
          <div className="ml-auto sm:max-w-[70%] overflow-x-hidden">
            <div className="bg-white w-full p-10">
              <h4 className="text-black">
                Tell us what you're dreaming of, and let's make it a reality.
              </h4>
              <p>What service are you seeking assistance with today?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
