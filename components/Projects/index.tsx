import React, { ReactNode } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { PROJECTS } from "@config";
import { ProjectsVariants } from "utils/animations";

const Project = dynamic(() => import('./Project'));

function Projects({ children }: { children: ReactNode }) {
return (
    <div className="bg-base-200 min-h-screen py-20">
      <div className="ml-10">
        <motion.h1
          variants={ProjectsVariants.heading}
          initial="hidden"
          animate="enter"
          exit="exit"
          transition={{ type: "linear", duration: 1.5 }}
          className="mb-4 xl:text-4xl md:text-2xl lg:text-2xl sm:text-xl font-extrabold tracking-tight leading-none "
        >
          <span className="underline underline-offset-3 decoration-8 decoration-primary dark:decoration-secondary">
            Projects{" "}
          </span>
          that I have{" "}
          <span className="underline underline-offset-3 decoration-8 decoration-primary dark:decoration-secondary">
            Worked On
          </span>
        </motion.h1>
      </div>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {PROJECTS.map((item) => (
          <Project item={item} key={item.title} />
        ))}
      </div>
      {children}
    </div>
  );
}

export default Projects;
