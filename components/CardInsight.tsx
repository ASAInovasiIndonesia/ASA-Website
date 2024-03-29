"use client";
import { Avatar, Card, CardBody } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

const CardInsight = ({
  image,
  title,
  desc,
  avatar,
  name,
  date,
}: {
  image: string;
  title: string;
  desc: string;
  avatar: string;
  name: string;
  date: string;
}) => {
  return (
    <Card radius="none" classNames={{ base: "rounded-none shadow-none" }}>
      <Image
        src={image}
        width={421}
        height={300}
        className="aspect-[421/300] w-full"
        unoptimized
        alt="article"
      />
      <CardBody className="bg-black text-white px-6 py-8">
        <h5 className="text-xl font-bold">{title}</h5>
        <p className="mt-4 font-light">{desc}</p>
        <div className="flex items-center gap-4 mt-6">
          <Avatar src={avatar} />
          <div>
            <div className="font-semibold">{name}</div>
            <div className="text-sm font-light tracking-wider">{date}</div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default CardInsight;
