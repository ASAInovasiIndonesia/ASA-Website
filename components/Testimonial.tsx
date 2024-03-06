"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Testimonial = () => {
  const [position, setPosition] = useState(0);
  const listTestimony = [
    {
      name: "Widyanto Eko Nugroho",
      role: (
        <>
          Kepala Bidang Pengelolaan Kinerja dan Risiko <br /> Komisi
          Pemberantasan Korupsi RI
        </>
      ),
      msg: "Dengan adanya proyek yang diselesaikan oleh ASA, saat ini organisasi/ unit kerja saya memiliki strategi komunikasi sebagaimana yang direncanakan. Dalam pandangan saya, ini merupakan kemajuan yang signifikan mengingat strategi komunikasi manajemen risiko lebih terstruktur, mudah dieksekusi, tahapannya jelas, produknya dapat digunakan.",
    },
    {
      name: "Yerni Sitorus",
      role: (
        <>
          Design Analyst <br /> EIGER
        </>
      ),
      msg: "ASA membantu banyak di design MPOS yang awalnya kami hanya ada POS Desktop. Selama bersama dengan ASA kita juga melakukan UT untuk collect data dari kasir dan tim ASA pun banyak memberikan insights ke EIGER terkait development MPOS yang berguna untuk EIGER.",
    },
    {
      name: "Dewi Miranda",
      role: (
        <>
          General Manager Marketing & Loyalty <br /> Super Indo
        </>
      ),
      msg: "Perbaikan pada revamp aplikasi loyalty bersama ASA mempermudah registrasi member, dan design integrasi dengan ecommerce menghasilkan 3.8 millions new apps downloads.",
    },
    {
      name: "Dewi Miranda",
      role: (
        <>
          General Manager Marketing & Loyalty <br /> Super Indo
        </>
      ),
      msg: "ASA membuka wawasan untuk melakukan tahapan/milestones dari project apps development. Seperti dengan: memberikan arahan yang tepat dan menentukan resource yang diperlukan, proses yang terstruktur dan transfer knowledge mengenai apps development, memberikan guide customer journey yang jelas, serta ui/ux design guide yang meningkatkan pengetahuan dan skill internal resources.",
    },
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
    }, 8000);

    // Clean up the interval when the component is unmounted
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <div className="bg-black text-white pb-12 lg:pb-24 pt-24 bg-[url('/static/stock_image3.png')] bg-contain bg-right bg-no-repeat relative">
      <div className="bg-gradient-to-r from-black via-black/70 to-black/0 z-1 absolute top-0 w-full h-full" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 xl:px-4 grid grid-cols-1 lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2 min-h-[425px] lg:min-h-auto order-3 lg:order-1">
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
