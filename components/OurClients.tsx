import Image from "next/image";
import React from "react";

const OurClients = () => {
  const listClients = [
    "/static/img_kemkes.png",
    "/static/img_eiger.png",
    "/static/img_kpk.png",
    "/static/img_superindo.png",
    "/static/img_btpn.png",
    "/static/img_kawanlama.png",
  ];
  return (
    <div className="max-w-5xl mx-auto py-24 px-6 xl:px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <h2 className="uppercase text-4xl font-semibold sm:border-r-2 border-r-0">
          Our Valued <br /> Clients
        </h2>
        <p className="text-2xl font-grotesque font-medium pl-6 sm:pl-0 border-l-2 sm:border-l-0">
          We partner with a diverse range of clients to elevate and transform
          their businesses through tailored solutions and satisfying customer
          experiences.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 mt-16 grayscale">
        {listClients.map((item, idx) => (
          <div key={idx} className="flex justify-center items-center border">
            <Image
              src={item}
              width={320}
              height={156}
              unoptimized
              alt="clients"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurClients;
