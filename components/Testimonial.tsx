"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Testimonial = () => {
  const [position, setPosition] = useState(0);
  const listTestimony = [
    {
      name: "Widyanto Eko Nugroho",
      role: "Kepala Bidang Pengelolaan Kinerja dan Risiko Komisi Pemberantasan Korupsi RI",
      msg: "Dengan adanya proyek yang diselesaikan oleh ASA, saat ini organisasi/ unit kerja saya memiliki strategi komunikasi sebagaimana yang direncanakan. Dalam pandangan saya, ini merupakan kemajuan yang signifikan mengingat strategi komunikasi manajemen risiko lebih terstruktur, mudah dieksekusi, tahapannya jelas, produknya dapat digunakan.",
    },
    {
      name: "Zafrullah Sunyaruri & alfred",
      role: "ECOMMERCE MANAGER & SALES MANAGER",
      msg: "Membuat jouney manual / offline menjadi user dan customer journey online by platform dan  Rekomendasi yang kritis dari sisi sudut pandang customer.",
    },
    {
      name: "Galuh Perdana Putra",
      role: "System Analyst PT EIGERINDO Multiproduk Industri",
      msg: "Untuk gathering requirement terasa hal baru yang bisa dipelajari",
    },
    {
      name: "Ridhan Thirafi Abadi",
      role: "Product Manager PT EIGERINDO Multiproduk Industri",
      msg: "Sebenernya Problem atau challenge selalu ada. Masukan dari tim ASA terkait prioritas fitur untuk membantu customer lumayan membantu",
    },
    {
      name: "Adeteni",
      role: "Product Manager Officer PT EIGERINDO Multiproduk Industri",
      msg: "Responsibility dan Responsif yang baik",
    },
    {
      name: "Yerni Sitorus",
      role: "Design AnalystPT EIGERINDO Multiproduk Industri",
      msg: "ASA membantu banyak di design MPOS yang awalnya kami hanya ada POS Desktop. Selama bersama dengan ASA kita juga melakukan UT untuk collect data dari kasir dan tim ASA pun banyak memberikan insights ke EIGER terkait development MPOS yang berguna untuk EIGER.",
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPosition((prev) => {
        if (prev === 5) {
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
    <div className="bg-black text-white py-24 bg-[url('/static/stock_image3.png')] bg-contain bg-right bg-no-repeat relative">
      <div className="bg-gradient-to-r from-black via-black/70 to-black/0 z-1 absolute top-0 w-full h-full" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 xl:px-4 grid grid-cols-1 lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2 min-h-[400px] order-3 lg:order-1">
          {listTestimony.map(
            (item, idx) =>
              position === idx && (
                <div
                  key={idx}
                  className="animate-in"
                  style={{ "--index": 1 } as React.CSSProperties}
                >
                  <p className="italic font-light text-xl">
                    {listTestimony[idx].msg}
                  </p>
                  <div className="mt-8 pl-6 border-l border-white">
                    <div className="text-lg font-semibold">
                      {listTestimony[idx].name}
                    </div>
                    <p className="text-lg font-grotesque">
                      {listTestimony[idx].role}
                    </p>
                  </div>
                </div>
              )
          )}
        </div>
        <div className="lg:col-span-3 -mx-6 lg:mx-0 order-2">
          <Image
            src="/static/stock_image2.png"
            width={711.11}
            height={400}
            unoptimized
            className="w-full"
            alt="stock Image"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
