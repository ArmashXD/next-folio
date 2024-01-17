import React, { ReactElement, ReactNode, useEffect } from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import { NextPage } from "next";
import { themeChange } from "theme-change";
import "../styles/globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"


export type NextPageWithLayout<P = any, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  useEffect(() => {
    themeChange(false);
  }, []);

  return getLayout(
    <>
      <Head>
        <meta name="description" content="Portfolio" />
        <meta property="og:title" content="Portfolio" />
        <meta property="og:description" content="Portfolio of syed armash hussain" />
        <meta property="og:url" content="https" />
        <meta property="og:type" content="website" />
      </Head>
      <SpeedInsights />
      <Component {...pageProps} />
    </>
  );
}

export default App;
