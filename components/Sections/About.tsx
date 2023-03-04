import React from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { PROFILE_INFO } from "../../config";
import Experiences from "@components/Experiences";
import { AboutPageVariants } from "utils/animations";
const Skills = dynamic(() => import("../Skills"));


function About() {
  return (
    <div className="bg-base-200 min-h-screen py-10 p-12 lg:visible ">
      <div>
        <motion.h1
          variants={AboutPageVariants.heading}
          initial="hidden"
          animate="enter"
          exit="exit"
          transition={{ type: "linear", duration: 1.5 }}
          className="xl:text-4xl md:text-2xl lg:text-2xl sm:text-xl font-bold text-left mt-4 "
        >
          <span className="underline underline-offset-3 decoration-8 decoration-primary dark:decoration-secondary">
            {PROFILE_INFO.about.title}
          </span>
        </motion.h1>
        <motion.p
          variants={AboutPageVariants.paragraph}
          initial="hidden"
          animate="enter"
          exit="exit"
          transition={{ type: "linear", duration: 1.3 }}
          className="py-6 xl:text-xl lg:text-lg md:text-md sm:text-sm mt-4"
        >
          {PROFILE_INFO.about.description}
        </motion.p>
        {/* skills */}
        <div className="grid grid-rows-2 grid-flow-col gap-4 mt-10">
          <div className="sm:col-span-1 md:col-span-1 lg:row-span-3 xl:row-span-3">
            <motion.div
              className=""
              variants={AboutPageVariants.paragraph}
              initial="hidden"
              exit="exit"
              transition={{ type: "linear", duration: 1 }}
            >
              <h1 className="xl:text-4xl md:text-2xl lg:text-2xl sm:text-xl font-bold text-left mt-4  underline underline-offset-3 decoration-8 decoration-primary dark:decoration-secondary">
                {PROFILE_INFO.about.work_experience_title}
              </h1>
            </motion.div>
            <Experiences />
          </div>
          <div className="sm:col-span-1 md:col-span-1 lg:row-span-3 xl:row-span-3 ">
            <motion.div
              className=""
              variants={AboutPageVariants.paragraph}
              initial="hidden"
              animate="enter"
              exit="exit"
              transition={{ type: "linear", duration: 1 }}
            >
              <h1 className="xl:text-4xl md:text-2xl lg:text-2xl sm:text-xl font-bold text-left mt-4 underline underline-offset-3 decoration-8 decoration-primary dark:decoration-secondary">
                {PROFILE_INFO.about.skills_title}
              </h1>
            </motion.div>
            <Skills />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
