import React, { ReactElement } from "react";
import dynamic from "next/dynamic";
import { NextPageWithLayout } from "./_app";
import Main from "@components/Layouts/Main";
import { GITHUB_USERNAME } from "utils/userData";

const BottomButton = dynamic(() => import("@components/BottomButton"));
const Projects = dynamic(() => import("@components/Projects"));
const Repos = dynamic(() => import("@components/Repos"));
const PageTitle = dynamic(() => import("@components/PageTitle"));

interface Props {
  repos: [];
}

const Work: NextPageWithLayout = ({ repos }: any) => {
  console.log("repos: ", repos);
  
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
  const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`)
  const userData = await res.json()
  const reposRes = await fetch(userData.repos_url)
  const reposData = await reposRes.json()

  const repos = reposData.map((repo: { id: any; name: any; description: any; html_url: any; }) => ({
    id: repo.id,
    name: repo.name,
    description: repo.description,
    html_url: repo.html_url
  }))
  return {
    props: {
      repos,
    },
  };
}
