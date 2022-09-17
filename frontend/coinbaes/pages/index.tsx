import type { NextPage } from "next";
import Head from "next/head";
import SplashBanner from "@components/landing/Splash";
import About from "@components/landing/About";
import Roadmap from "@components/landing/Roadmap";
import Team from "@components/landing/Team";
import FAQ from "@components/landing/FAQ";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Air Planes Club</title>
        <meta
          name="description"
          content="Come Fly With Us."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SplashBanner />
      <About />
      <Roadmap />
      <Team />
      <FAQ />
    </div>
  );
};

export default Home;
