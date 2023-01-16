import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import hero from "../assets/images/hero.png";
import bg from "../public/images/mood-bg1.png";

const Home: NextPage = () => {
  const openInNewTab = (url: string | URL | undefined) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <div className="w-full h-screen">
      <Head>
        <title>Ecoland</title>
        <meta property="og:title" content="Ecoland" />

        <meta
          property="og:description"
          content="Ecoland is a universe with a unique Play and Earn economy. Players will be able to enjoy a variety of gameplay genres and also social, educational, and environmental activities. We combine virtual and real events to create an amazing user experience."
        />
        <meta property="og:url" content="https://ecoland.world/"></meta>
        <meta
          name="description"
          content="Ecoland is a universe with a unique Play and Earn economy. Players will be able to enjoy a variety of gameplay genres and also social, educational, and environmental activities. We combine virtual and real events to create an amazing user experience."
        />
        <meta name="twitter:site" content="@EcoLandWorld"></meta>
        <meta property="og:image" content="/images/ecoland-thumb.png" />

        <meta name="twitter:title" content="Ecoland" />
        <meta
          name="twitter:description"
          content="Ecoland is a universe with a unique Play and Earn economy. Players will be able to enjoy a variety of gameplay genres and also social, educational, and environmental activities. We combine virtual and real events to create an amazing user experience."
        />
        <meta
          name="twitter:image"
          content=" https://ecoland.world/images/thumbnail.png"
        />
        <meta name="twitter:card" content="summary_large_image"></meta>

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />

        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
      <Image
        src={bg}
        alt="background"
        className="absolute -z-10"
        fill
        style={{ objectFit: "cover" }}
      />

      <Header />

      <main className="flex w-full h-screen flex-1 flex-col items-center px-6 justify-center lg:flex-row-reverse lg:justify-around">
        {/* Hero Image */}

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
              onClick={() =>
                openInNewTab(
                  "https://docs.google.com/forms/d/e/1FAIpQLSdwMAC7f8aS6JyOC8vPQtI8SDaPgQhOBE-Iyhjj8H3bvhuQkQ/viewform"
                )
              }
            >
              JOIN WAITLIST
            </button>
            <button
              className="mt-6 bg-transparent text-[#247c1e] py-6 text-lg rounded-lg 
            w-1/2 font-bold border-2 border-[#247c1e] hover:bg-[#d8e9a869] font-sans"
              onClick={() =>
                openInNewTab(
                  "https://ecolandworld.gitbook.io/ecoland.world-whitepaper/"
                )
              }
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
