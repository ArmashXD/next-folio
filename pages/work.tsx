import React, { ReactElement } from "react";
import dynamic from "next/dynamic";
import { NextPageWithLayout } from "./_app";
import { fetchGithubProfile } from "@services/fetchGithubProfile";
import Main from "@components/Layouts/Main";

const BottomButton = dynamic(() => import("@components/BottomButton"));
const Projects = dynamic(() => import("@components/Projects"));
const Repos = dynamic(() => import("@components/Repos"));
const PageTitle = dynamic(() => import("@components/PageTitle"));

interface Props {
  repos: [];
}

const Work: NextPageWithLayout = ({ repos }: Props) => {
  return (
    <>
      <PageTitle title="Projects/Repos" />
      <Projects>
        <Repos repos={repos} />
      </Projects>
      <BottomButton title="Contact Me" goto="/contact" />
    </>
  );
};

Work.getLayout = function getLayout(page: ReactElement) {
  return <Main addHeroClass={false}>{page}</Main>;
};

export default Work;

export async function getServerSideProps() {
  const res = await fetchGithubProfile();
  const repos = await res.json();

  return {
    props: {
      repos,
    },
  };
}
