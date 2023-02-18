import React, { ReactNode } from "react";
import { icons } from "./icons";
import SkillItem from "./Skill";

function Skills() {
  return (
    <div className="container-fluid mx-auto mt-16">
      <div className="grid gap-10 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-5 sm:grid-cols-3 xs:grid-cols-2">
        {icons.map((item, key) => (
          <SkillItem item={item} key={key + 1} />
        ))}
      </div>
    </div>
  );
}

export default Skills;
