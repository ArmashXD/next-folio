import React, { ReactNode } from "react";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("../Header/index"));
const Footer = dynamic(() => import("../Footer/index"));

interface Props {
  children: ReactNode;
  addHeroClass?: boolean;
}

function Main({ children, addHeroClass = true }: Props) {
  return (
    <>
      <Header />
      <main
        className={
          addHeroClass
            ? "hero min-h-screen bg-base-200 overflow-x-hidden overflow-y-hidden"
            : ""
        }
      >
        {children}
      </main>
      <Footer />
    </>
  );
}

export default Main;
