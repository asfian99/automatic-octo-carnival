import { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";
import HeadProps from "../components/HeadProps";
import Navbar from "../components/Navbar";
import { ChakraProvider } from "@chakra-ui/react";

import "../styles/globals.css";

Router.events.on("routeChangeStart", (url) => {
  console.log(`Loading: ${url}`);
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <Head>
          <HeadProps />
        </Head>

        <div className="font-inter min-h-screen w-full bg-white text-gray-800">
          <Navbar />
          <div className="max-w-3xl mx-auto px-8 pb-8">
            <Component {...pageProps} />
          </div>
        </div>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
