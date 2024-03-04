import Image from "next/image";
import React from "react";

const Testimonial = () => {
  return (
    <div className="bg-black text-white py-24 bg-[url('/static/stock_image3.png')] bg-contain bg-right bg-no-repeat">
      <div className="max-w-7xl mx-auto grid grid-cols-5 gap-x-10">
        <div className="col-span-2">
          <p className="italic font-light text-xl">
            Dengan adanya proyek yang diselesaikan oleh ASA, saat ini
            organisasi/ unit kerja saya memiliki strategi komunikasi sebagaimana
            yang direncanakan. Dalam pandangan saya, ini merupakan kemajuan yang
            signifikan mengingat strategi komunikasi manajemen risiko lebih
            terstruktur, mudah dieksekusi, tahapannya jelas, produknya dapat
            digunakan.
          </p>
          <div className="mt-8 pl-6 border-l border-white">
            <div className="text-lg font-semibold">Widyanto Eko Nugroho</div>
            <p className="text-lg font-grotesque">
              Kepala Bidang Pengelolaan Kinerja dan Risiko <br /> Komisi
              Pemberantasan Korupsi RI
            </p>
          </div>
        </div>
        <div className="col-span-3">
          <Image
            src="/static/stock_image2.png"
            width={711.11}
            height={400}
            className="w-full"
            alt="stock Image"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
