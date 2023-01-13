import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import hero from "../assets/images/hero.png";

const Home: NextPage = () => {
  return (
    <div className="h-screen bg-[url('../public/images/mood-bgblur.png')] bg-cover">
      <Head>
        <title>Ecoland</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col">
        <Header />

        <div className="flex flex-row items-center w-5/12">
          <div className="py-[200px] px-[100px]">
            <h1 className="text-[48px] text-blue-600 font-sans">
              Save the Environment by Playing
            </h1>
            <p>
              We are launching soon. Keep updated by joining our waiting list!
            </p>

            <button className="mt-6 bg-green-400 p-4">Join Waitlist</button>
          </div>
          <Image
            src={hero}
            alt="hero"
            width={500}
            className="animate-updown absolute bottom-[150px] right-[250px]"
          />
        </div>
      </main>
    </div>
  );
};

export default Home;
