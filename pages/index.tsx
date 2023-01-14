import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import hero from "../assets/images/hero.png";

const Home: NextPage = () => {
  return (
    <div className="w-full h-screen bg-[#f2eeeb]">
      <Head>
        <title>Ecoland</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {/* <div className="bg-[url('/images/clouds.png')] absolute w-full h-screen bg-no-repeat bg-cover">
      </div> */}




      <main className="flex w-full h-screen flex-1 flex-col items-center justify-center px-6 md:flex-row-reverse md:space-x-reverse md:space-x-64">
        <div className="bg-[url('/images/solar.png')] absolute w-full h-screen -z-2 bg-no-repeat bg-cover transform -scale-x-100 md:transform-none">
        </div>
        {/* Hero Image */}
        <img src="/images/hero.png" alt="hero" className="animate-updown md:w-[400px] lg:w-[600px]" />



        {/* Hero Text */}
        <div className="p-6 justify-center mt-6 md:h-auto md:w-[900px] flex flex-col md:p-28 z-10 glassmorph">
          <h1 className="text-[44px] text-[#2f3556] md:text-[80px] leading-none font-sans font-bold">
            Go <span className="text-[#97b960]">Green</span> <br />
            while <span className="text-[#97b960]">Gaming</span>
          </h1>
          <p className="text-[#596599] mt-4 text-lg md:text-[30px] leading-normal ">Reduce your impact on the environment by playing games!</p>

          <div className="flex justify-start ">
            <button className="mt-6 bg-[#2ac6ea] text-[#2f4162] py-6 text-[20px] rounded-lg 
            w-1/2">JOIN WAITLIST</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
