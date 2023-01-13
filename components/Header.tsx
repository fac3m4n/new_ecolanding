import React from "react";
import Image from "next/image";
import logo from "../public/images/logo.png";
import { SiDiscord, SiTwitter } from "react-icons/si";
import { FaTelegramPlane } from "react-icons/fa";
const Header = () => {
  return (
    <div className="w-full flex justify-between p-6 items-center absolute z-10">
      <Image src={logo} alt="logo" width={200} />
      <div className="flex space-x-5">
        <SiTwitter size={32} color="white" />
        <SiDiscord size={32} color="white" />
        <FaTelegramPlane size={32} color="white" />
      </div>
    </div>
  );
};

export default Header;
