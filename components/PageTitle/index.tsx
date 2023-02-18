import Head from "next/head";
import React from "react";

function PageTitle({title}: {title: string}) {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
}

export default PageTitle;
