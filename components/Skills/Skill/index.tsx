import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { IconContext } from "react-icons";
import { useMediaQuery } from "react-responsive";
import { skillItemVarients } from "utils/animations";

interface Props {
  item: {
    title: string;
    icon: ReactNode;
    transition: Object;
    hoverClass: string;
  };
}

function SkillItem({ item }: Props) {
  const isMobile = useMediaQuery({ maxWidth: 768 });
 
  return (
    <motion.div
      initial="hidden"
      variants={skillItemVarients}
      transition={item.transition}
      animate="enter"
      exit="exit"
      className="indicator hover:top-[-10px] transition top ease-in duration-800 "
    >
      <span className="indicator-item badge badge-secondary rounded-xl w-fit sm:text-xs">
        {item.title}
      </span>
      <div
        className={`grid bg-base-300 place-items-center rounded-xl ${item.hoverClass} w-fit p-2`}
      >
        <IconContext.Provider
          value={{ className: "shared-class", size: isMobile ? "50" : "60" }}
        >
          {item.icon}
        </IconContext.Provider>
      </div>
    </motion.div>
  );
}

export default React.memo(SkillItem);
