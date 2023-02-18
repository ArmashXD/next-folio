import React, { useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const BackgroundCircle = dynamic(() => import("../BackgroundCircle"), {
  ssr: false,
});

interface Props {
  title: string;
  description?: string;
  buttonText?: string;
  onButtonHoverText?: string;
}

function Hero({ title, description, buttonText, onButtonHoverText }: Props) {
  const [hover, setHover] = useState<boolean>(false);

  return (
    <div className="hero min-h-screen bg-base-200 snap-center">
      <BackgroundCircle />
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">{title}</h1>
          <p className="py-6">{description}</p>
          <motion.button
            onMouseOver={() => setHover(true)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.5 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="btn btn-primary rounded-xl uppercase"
          >
            <span>{hover ? onButtonHoverText : buttonText}</span>
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
