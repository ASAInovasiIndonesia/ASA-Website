import Image from "next/image";
import React from "react";

const KeyCard = ({ title, desc }: { title: string; desc: string }) => {
  return (
    <div className="border-l border-orange pl-6 pr-4 sm:max-w-[280px] w-full">
      <div className="text-3xl font-semibold max-w-[80%]">{title}</div>
      <p className="font-grotesque text-lg font-medium mt-4 tracking-wide">
        {desc}
      </p>
    </div>
  );
};

const KeyWithPoint = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  return (
    <div className="pl-6 border-l border-black w-full max-w-[333px]">
      <h3 className="text-[28px] font-semibold">{title}</h3>
      <ul className="list-disc ml-6 text-xl mt-2 font-grotesque">{children}</ul>
    </div>
  );
};

const KeyValueSection = () => {
  return (
    <div className="max-w-7xl mx-auto py-24 px-6 xl:px-4 flex flex-col gap-24">
      <div>
        <div className="flex gap-4 items-center">
          <div className="max-w-[400px]">
            <div className="text-orange uppercase font-bold text-4xl leading-[50px]">
              We bring experience and expertise to ensure your success
            </div>
            <div className="font-grotesque text-2xl font-medium pl-4 border-l-2 mt-4">
              Our project approach consists of these three things:
            </div>
          </div>
          <Image
            src="/static/super_graphic2.png"
            className="hidden md:block"
            width={284}
            height={313.73}
            unoptimized
            alt="super graphic"
          />
        </div>

        <div className="flex justify-start md:justify-end gap-4 flex-wrap mt-10 md:mt-0">
          <KeyCard
            title="Human- Centered"
            desc="By continuously empathizing with our clients and customers, we understand client’s goals, customer needs, and become partners to achieve them."
          />
          <KeyCard
            title="Focus on Impact"
            desc="We take clients who have similar vision and commitment with us to achieve both business and social impact."
          />
          <KeyCard
            title="Team of Expert"
            desc="We handpicked the best people with many years of relevant experience to collaborate with clients and lead the team to achieve optimal results."
          />
        </div>
      </div>
      <div className="flex items-start lg:items-center flex-col lg:flex-row gap-12 lg:gap-6 -mx-6 lg:mx-0">
        <Image
          src="/static/stock_image1.png"
          className="aspect-[994/663] lg:aspect-[517/402] object-cover object-center w-full lg:w-[517px]"
          width={517}
          height={402}
          alt="stock image"
        />
        <div className="max-w-[436px] pl-6 lg:pl-0">
          <h3 className="uppercase text-4xl font-bold">Our Services</h3>
          <p className="font-grotesque text-2xl font-medium border-l border-black pl-6 mt-8">
            We drive values for customers as well as internal operations along
            the end-to-end customer journey by combining service design and
            communications.​
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-8">
        <KeyWithPoint title="Customer Experience Strategy and Design​">
          <li>Research & Assessment</li>
          <li>Design Thinking Workshops</li>
          <li>CX Strategy & Journey Optimization</li>
          <li>Advisory & Trainings</li>
        </KeyWithPoint>
        <KeyWithPoint title="Implementation​">
          <li>Design System</li>
          <li>Web & Mobile Design</li>
          <li>Physical Design</li>
          <li>Content Strategy & SEO</li>
        </KeyWithPoint>
        <KeyWithPoint title="Communications Services​">
          <li>Communication Strategy</li>
          <li>Digital Campaign & Activation</li>
          <li>Above the Line</li>
          <li>Below the Line</li>
        </KeyWithPoint>
      </div>
    </div>
  );
};

export default KeyValueSection;
