import type { NextPage } from "next";
import Head from "next/head";
import Header from "@/components/Header";
import { Fragment } from "react";
import Feature from "@/components/Feature";

const Home: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Next.js All Concepts</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Feature />
    </Fragment>
  );
};

export default Home;
