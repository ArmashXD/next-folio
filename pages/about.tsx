import React, { ReactElement } from "react";
import dynamic from "next/dynamic";
import { NextPageWithLayout } from "./_app";
import Main from "@components/Layouts/Main";
import BottomButton from "@components/BottomButton";
import PageTitle from "@components/PageTitle";

const AboutSection = dynamic(() => import("@components/Sections/About"));

const About: NextPageWithLayout = () => {
  return (
    <>
      <PageTitle title="About Me" />
      <AboutSection />
      <BottomButton title="Projects/Repos" goto="/work" />
    </>
  );
};

About.getLayout = function getLayout(page: ReactElement) {
  return <Main addHeroClass={false}>{page}</Main>;
};

export default About;
