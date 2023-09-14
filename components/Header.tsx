import React from "react";
import Image from "next/image";
import logo from "../public/images/logo.png";
import twitter from "../public/images/twitter-240.png";
import discord from "../public/images/discord-240.png";
import telegram from "../public/images/telegram-240.png";
const Header = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="container flex p-6 mt-20 justify-between items-center absolute z-10">
        <Image src={logo} alt="logo" width={120} />
        <div className="flex space-x-5">
          <a href="https://twitter.com/EcoLandWorld" target={"_blank"}>
            <Image src={twitter} alt="twitter" width={32} />
          </a>
          <a href="https://discord.gg/ckffrhrywk" target={"_blank"}>
            <Image src={discord} alt="discord" width={32} />
          </a>
          <a href="https://t.me/ecoland_news" target={"_blank"}>
            <Image src={telegram} alt="telegram" width={32} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
