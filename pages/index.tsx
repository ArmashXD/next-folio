import React, { ReactElement } from "react";
import { NextPageWithLayout } from "./_app";
import dynamic from "next/dynamic";
import Main from "@components/Layouts/Main";
import { GREETING } from "@config";
import BottomButton from "@components/BottomButton";
import PageTitle from "@components/PageTitle";

const HomeSection = dynamic(() => import("@components/Sections/Home"));

const Home: NextPageWithLayout = () => {
  return (
    <>
      <PageTitle title="Armash Portfolio" />
      <HomeSection title={GREETING.title} description={GREETING.description} />
      <BottomButton title="About Me" goto="/about" />
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Main>{page}</Main>;
};

export default Home;
