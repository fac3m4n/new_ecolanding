import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import hero from "../assets/images/hero.png";
import bg from "../public/images/mood-bg1.png";

const Home: NextPage = () => {
  return (
    <div className="w-full h-screen">
      <Head>
        <title>Ecoland</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
        src={bg}
        alt="background"
        className="absolute -z-10"
        fill
        objectFit="cover"
      />

      <Header />

      <main className="flex w-full h-screen flex-1 flex-col items-center px-6 justify-center lg:flex-row-reverse lg:justify-around">
        {/* Hero Image */}
        {/* <img
          src="/images/hero.png"
          alt="hero"
          className="animate-updown w-[300px] sm:w-[400px] md:w-[450px] lg:w-[500px]"
        /> */}

        <Image
          src={hero}
          alt="hero"
          width={300}
          className="animate-updown sm:w-[400px] md:w-[450px] lg:w-[500px]"
        />

        {/* Hero Text */}
        <div className="justify-center flex flex-col p-6">
          <h1 className="text-[40px] text-[#247c1e] leading-none font-sans font-bold lg:text-[70px]">
            Go Green <br />
            while Gaming
          </h1>
          <p className="text-[#247c1e] mt-4 text-lg leading-normal ">
            Reduce your impact on the environment by playing games!
          </p>

          <div className="flex justify-center space-x-4">
            <button
              className="mt-6 bg-[#247c1e] font-sans text-white py-6 text-lg rounded-lg 
            w-1/2 font-bold hover:bg-[#1b5c16]"
            >
              JOIN WAITLIST
            </button>
            <button
              className="mt-6 bg-transparent text-[#247c1e] py-6 text-lg rounded-lg 
            w-1/2 font-bold border-2 border-[#247c1e] hover:bg-[#d8e9a869] font-sans"
            >
              ECO-PAPER
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
