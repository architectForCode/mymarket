import type { NextPage } from "next";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; /* eslint-disable import/first */
import Head from "next/head";
import styled from "styled-components";
import Nav from "../components/common/Nav/Nav";
import HomeSlider from "../components/HomeSlider";

const HomeBlock = styled.div`
  min-height: 100vh;
`;

const Home: NextPage = () => {
  return (
    <HomeBlock>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <HomeSlider></HomeSlider>
    </HomeBlock>
  );
};

export default Home;
