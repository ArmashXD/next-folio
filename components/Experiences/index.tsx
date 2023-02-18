import React from "react";
import dynamic from "next/dynamic";
import { WORK_EXPERIENCES } from "@config";

const Experience = dynamic(() => import("./Experience"));

function Experiences() {
  return (
    <ol className="relative border-l border-primary dark:border-secondary mt-16">
      {WORK_EXPERIENCES.map((experience, key) => (
        <Experience key={key} experience={experience} />
      ))}
    </ol>
  );
}

export default Experiences;
