import React from "react";
import CardInsight from "./CardInsight";

const InsightSection = () => {
  return (
    <div className="py-24 bg-[url('/static/stock_image4.png')] bg-cover bg-top bg-no-repeat">
      <div className="max-w-7xl mx-auto">
        <div className="mx-auto w-fit">
          <h4 className="text-4xl font-light">Read Our Insights</h4>
          <p className="pl-6 font-grotesque text-2xl border-l border-black mt-8">
            Explore In-Depth Articles for Business Growth and <br /> Customer
            Experience Excellence
          </p>
        </div>
        <div className="mt-16 grid grid-cols-3 gap-6">
          <CardInsight
            image="/static/article1.png"
            title="Visual Element Design"
            desc="Ketika design dibuat dengan prinsip yang benar, sebuah design memiliki
            manfaat yang besar bagi keseharian pengguna."
            avatar="/static/avatar_irsan.png"
            name="Irsan Wijaya"
          />
          <CardInsight
            image="/static/article2.png"
            title="Simple Heuristic Evaluation"
            desc="Heuristic Evaluation adalah sebuah metode evaluasi UI pada sebuah produk digital yang mengacu pada guideline (Heuristic)."
            avatar="/static/avatar_kukuh.png"
            name="Kukuh Satria Putra"
          />
          <CardInsight
            image="/static/article3.png"
            title="Implementing Page Structure"
            desc="Struktur halaman adalah panduan tata letak penempatan komponen di sebuah halaman app (aplikasi) maupun website"
            avatar="/static/avatar_kinan.png"
            name="Kinanti"
          />
        </div>
      </div>
    </div>
  );
};

export default InsightSection;
