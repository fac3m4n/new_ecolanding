import "../styles/globals.css";
import type { AppProps } from "next/app";
// import localFont from "@next/font/local";
import { Analytics } from "@vercel/analytics/react";

import { Poppins } from "@next/font/google";

// const ghibli = localFont({
//   src: [
//     {
//       path: "./Ghibli.otf",
//       weight: "400",
//       style: "normal",
//     },
//     {
//       path: "./Ghibli-Bold.otf",
//       weight: "700",
//       style: "normal",
//     },
//   ],
//   variable: "--font-ghibli",
//   display: "swap",
// });

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "700"],
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={`${poppins.className} font-sans`}>
      <Component {...pageProps} />
      <Analytics />
    </main>
  );
}

export default MyApp;
