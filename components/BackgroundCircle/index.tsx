import React from "react";
import { motion } from "framer-motion";

function BackgroundCircle() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        scale: [3, 2, 1],
        opacity: [0.3, 0.6, 0.8, 1.0],
        borderRadius: ["20%", "30%", "40%"],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center"
    >
      <div className="rounded-full border border-primary opacity-20 absolute md:h-[480px] md:w-[480px] lg:h-[480px] lg:w-[480px] sm:h-[350px] sm:w-[350px] animate-pulse" />
      <div className="absolute border border-error rounded-full md:h-[240px] md:w-[240px] lg:h-[240px] lg:w-[240px] sm:h-[150px] sm:w-[150px] animate-ping" />
    </motion.div>
  );
}

export default BackgroundCircle;
 