import Image from "next/image";
import React from "react";
import { InstagramIcon, LinkedInIcon } from "./icons";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-black text-white py-14">
      <div className="max-w-7xl mx-auto flex justify-between items-end">
        <Image src="/main.png" width={61} height={49} alt="main image" />
        <div className="text-sm font-light">
          © 2023 ASA Inovasi Indonesia. All rights reserved.
        </div>
        <div className="text-sm flex gap-2 items-center">
          Follow Us:
          <Link href="https://www.instagram.com/letsgo.asa" target="blank">
            <InstagramIcon />
          </Link>
          <Link
            href="https://www.linkedin.com/company/asa-cx-consulting"
            target="blank"
          >
            <LinkedInIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
