import Image from "next/image";
import React from "react";

const OurClients = () => {
  return (
    <div className="max-w-5xl mx-auto py-24 px-6 xl:px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <h2 className="uppercase text-4xl font-semibold">
          Our Valued <br /> Clients
        </h2>
        <p className="text-2xl font-grotesque font-medium px-6 border-l-2">
          We partner with a diverse range of clients to elevate and transform
          their businesses through tailored solutions and satisfying customer
          experiences.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 mt-16 grayscale">
        <div className="flex justify-center items-center border">
          <Image src="/static/btpn.png" width={120} height={80} alt="clients" />
        </div>
        <div className="flex justify-center items-center border">
          <Image src="/static/kpk.png" width={395} height={114} alt="clients" />
        </div>
        <div className="flex justify-center items-center border">
          <Image
            src="/static/eiger.png"
            width={124}
            height={124}
            alt="clients"
          />
        </div>
        <div className="flex justify-center items-center border">
          <Image
            src="/static/superindo.png"
            width={124}
            height={124}
            alt="clients"
          />
        </div>
        <div className="flex justify-center items-center border">
          <Image
            src="/static/kemkes.png"
            width={124}
            height={124}
            alt="clients"
          />
        </div>
        <div className="flex justify-center items-center border">
          <Image
            src="/static/kawanlamagroup.png"
            width={254}
            height={25}
            alt="clients"
          />
        </div>
      </div>
    </div>
  );
};

export default OurClients;
