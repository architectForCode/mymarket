import type { NextPage } from "next";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; /* eslint-disable import/first */
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import Nav from "../components/common/Nav/Nav";
import HomeSlider from "../components/HomeSlider";
import CommonSlider from "../components/CommonSlider";
import HomeSide from "../components/HomeSide";

const HomeBlock = styled.div`
  min-height: 100vh;
  section.homeSection {
    position: relative;
    height: 100vh;

    padding-top: 3rem;
    h1.sectionTitle {
      font-size: 1.7rem;
      font-weight: 600;
      text-align: center;
      margin-bottom: 2rem;
    }
  }
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
      <article>
        <section className="homeSection">
          <h1 className="sectionTitle">이 상품 어때요?</h1>
          <CommonSlider />
          <aside>
            <HomeSide />
          </aside>
        </section>
        <section className="homeSection">
          <h1 className="sectionTitle">이 상품 어때요?</h1>
          <CommonSlider />
        </section>{" "}
        <section className="homeSection">
          <h1 className="sectionTitle">이 상품 어때요?</h1>
          <CommonSlider />
        </section>
      </article>
    </HomeBlock>
  );
};

export default Home;
