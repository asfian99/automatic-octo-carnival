import { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import Head from "next/head";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="font-inter min-h-screen w-full bg-white text-gray-800">
        <Navbar />
        <div className="max-w-3xl mx-auto px-8 pb-8">
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
}

export default MyApp;
