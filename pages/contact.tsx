import React, { ReactElement } from "react";
import dynamic from "next/dynamic";
import { NextPageWithLayout } from "./_app";
import Main from "@components/Layouts/Main";
import PageTitle from "@components/PageTitle";

const ContactSection = dynamic(() => import("@components/Sections/Contact"));

const Contact: NextPageWithLayout = () => {
  return (
    <>
      <PageTitle title="Contact Me" />
      <ContactSection />
    </>
  );
};

export default Contact;

Contact.getLayout = function getLayout(page: ReactElement) {
  return <Main>{page}</Main>;
};
