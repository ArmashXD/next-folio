import React from "react";
import { motion } from "framer-motion";
import { expItemVarients } from "utils/animations";

interface Props {
  experience: {
    company_name: string;
    time_period: string;
    job_title: string;
    points: string[];
    description: string;
    has_link: boolean;
    is_current: boolean;
    is_description: boolean;
    transition: {};
  };
}

function Experience({ experience }: Props) {
  return (
    <motion.li
      initial="hidden"
      variants={expItemVarients}
      transition={experience.transition}
      animate="enter"
      exit="exit"
      className="mb-10 ml-4 "
    >
      <div
        className={`absolute w-3 h-3  rounded-full mt-1.5 -left-[0.390rem]   ${
          experience.is_current
            ? "animate-pulse opacity-100 bg-success border border-success"
            : "bg-primary border border-primary"
        }`}
      />
      <time className="mb-1 leading-none xl:text-xl lg:text-lg md:text-md sm:text-sm">
        {experience.time_period} {experience.is_current && "- Present"}
      </time>
      <h3 className="font-bold xl:text-xl lg:text-lg md:text-md sm:text-sm">
        {experience.job_title}
      </h3>
      <h3 className="xl:text-xl lg:text-lg md:text-md sm:text-sm">
        <span className="">{experience.company_name}</span> ·{" Full-Time "}
      </h3>

      {experience.is_description ? (
        <p className="mb-4 text-base font-normal xl:text-xl lg:text-lg md:text-md sm:text-sm">
          {experience.description}
        </p>
      ) : (
        <ul className="ml-5 list-disc mb-4 text-base font-normal xl:text-xl lg:text-lg md:text-md sm:text-sm">
          {experience.points.map((item, key) => (
            <li key={key}>{item}</li>
          ))}
        </ul>
      )}
      {experience.has_link && (
        <a href="#" className="btn">
          Learn more
          <svg
            className="w-3 h-3 ml-2"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
      )}
    </motion.li>
  );
}

export default Experience;
