import React, { useState } from "react";
import BackgroundCircle from "../BackgroundCircle";

interface Props {
  title: string;
  description?: string;
}

function Home({ title, description }: Props) {
  // const [hover, setHover] = useState<boolean>(false);

  return (
    <>
      <BackgroundCircle />
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl font-bold">{title}</h1>
          <p className="py-6 xl:text-2xl lg:text-xl md:text-lg sm:text-md">{description}</p>
          {/* <motion.button
            onMouseOver={() => setHover(true)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.5 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="btn btn-primary rounded-xl uppercase"
          >
            <span>{hover ? onButtonHoverText : buttonText}</span>
          </motion.button> */}
        </div>
      </div>
    </>
  );
}

export default Home;
