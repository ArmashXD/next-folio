import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ProjectsVariants } from "utils/animations";

interface SkillArray {
  title: string;
}

interface Props {
  item: {
    title: string;
    description: string;
    link: string;
    img: string;
    skills: SkillArray[];
    transition: {
      type: string,
      duration: number,
    }
  };
}

function Project({ item }: Props) {
  return (
    <motion.div
      initial="hidden"
      variants={ProjectsVariants.items}
      transition={item.transition}
      animate="enter"
      exit="exit"
      className="card card-compact w-100 bg-base-100 shadow-xl hover:top-[-10px] transition top ease-in duration-400"
    >
      <a href={item.link} target="_blank" rel="noreferrer">
        <figure>
          <Image
            src={item.img}
            height={300}
            width={600}
            loading="eager"
            alt={item.title}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title xl:text-4xl lg:text-2xl md:text-lg sm:text-md font-bold underline underline-offset-3 decoration-8 decoration-primary dark:decoration-secondary">
            {item.title}
          </h2>
          <p className="xl:text-2xl lg:text-xl md:text-lg sm:text-md ">
            {item.description}
          </p>

          <div className="card-actions justify-start mt-5">
            {item.skills.map((skill) => (
              <span
                key={skill.title}
                className="indicator-item badge bg-red-500 font-bold uppercase rounded-xl text-[12px]"
              >
                {skill.title}
              </span>
            ))}
          </div>
        </div>
      </a>
    </motion.div>
  );
}

export default Project;
