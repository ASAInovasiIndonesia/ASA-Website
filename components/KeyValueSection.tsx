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
      <div className="text-xl mt-2 font-grotesque">{children}</div>
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
              WE BRING EXPERIENCE AND EXPERTISE TO DELIVER ONLY THE BEST
            </div>
            <div className="font-grotesque text-2xl font-medium pl-4 border-l-2 mt-4">
              We merge human touch and <br /> technology to integrate global{" "}
              <br /> experience into local insights, with <br /> the synergy of
              various expertise.
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

        <div className="flex justify-start md:justify-end gap-4 flex-wrap mt-10 xl:mt-0">
          <KeyCard
            title="Human-Centered"
            desc="We continuously empathize with clients and customers, proven results to help achieve your objectives."
          />
          <KeyCard
            title="Focus on Impact"
            desc="We work alongside people with similar vision and commitment  to achieve both business and social impact."
          />
          <KeyCard
            title="Team of Expert"
            desc="We handpicked the best people with many years of relevant experiences to collaborate with you, and lead the team to achieve optimum results."
          />
        </div>
      </div>
      <div className="flex items-start lg:items-center flex-col lg:flex-row gap-12 lg:gap-6 -mx-6 lg:mx-0">
        <Image
          src="/static/stock_image1.png"
          className="aspect-[994/663] lg:aspect-[517/402] object-cover object-center w-full lg:w-[517px]"
          width={517}
          height={402}
          unoptimized
          alt="stock image"
        />
        <div className="max-w-[436px] pl-6 lg:pl-0">
          <h3 className="uppercase font-bold text-4xl leading-[50px]">
            END-TO-END SERVICES ECOSYSTEM FOR MAXIMUM IMPACT
          </h3>
          <p className="font-grotesque text-2xl font-medium border-l border-black pl-6 pr-6 lg:pr-0 mt-8">
            We not only map out strategies, but also ensures effective
            implementation through top-notch services, leading to more impactful
            outcomes.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-8">
        <KeyWithPoint title="Customer Experience Strategy & Design​">
          We define strategies that can elevate and transform your customer
          experiences.
        </KeyWithPoint>
        <KeyWithPoint title="Impactful Implementation​">
          We turn strategies into actions, focusing on product offerings and
          services that can answer your customer needs and business objectives.
        </KeyWithPoint>
        <KeyWithPoint title="Effective Communications​">
          We turn insights into communications that influence customers
          behavior.
        </KeyWithPoint>
      </div>
    </div>
  );
};

export default KeyValueSection;
