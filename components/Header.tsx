import React from "react";
import Image from "next/image";
import logo from "../public/images/logo.png";
import twitter from "../public/images/twitter-240.png";
import telegram from "../public/images/discord-240.png";
import disord from "../public/images/telegram-240.png";
const Header = () => {
  return (
    <div className="w-full flex justify-between p-6 items-center absolute z-10">
      <Image src={logo} alt="logo" width={120} />
      <div className="flex space-x-5">
        <Image src={twitter} alt="twitter" width={32} />
        <Image src={telegram} alt="twitter" width={32} />
        <Image src={disord} alt="twitter" width={32} />
      </div>
    </div>
  );
};

export default Header;
