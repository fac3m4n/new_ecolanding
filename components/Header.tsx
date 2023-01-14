import React from "react";
import Image from "next/image";
import logo from "../public/images/logo.png";
import { SiDiscord, SiTwitter } from "react-icons/si";
import { FaTelegramPlane } from "react-icons/fa";
const Header = () => {
  return (
    <div className="w-full flex justify-between p-6 items-center absolute z-10">
      <img src="/images/logo.png" alt="logo" className="w-[120px] md:w-[200px]" />
      {/* <Image src={logo} alt="logo" width={120} /> */}
      <div className="flex space-x-5">
        <img src="/images/twitter-240.png" alt="twitter" className="w-[32px] md:w-[48px]" />
        <img src="/images/discord-240.png" alt="discord" className="w-[32px] md:w-[48px]" />
        <img src="/images/telegram-240.png" alt="telegram" className="w-[32px] md:w-[48px] " />
        {/* <SiTwitter size={24} color="white" className="md:text-lg" />
        <SiDiscord size={24} color="white" />
        <FaTelegramPlane size={24} color="white" /> */}
      </div>
    </div>
  );
};

export default Header;
