import React, { useCallback } from "react";
import { motion } from "framer-motion";
import { ReposVariants } from "utils/animations";

interface Props {
  repos: [];
}

function Repos({ repos }: Props) {
  const sortedRepos = useCallback(() => {
    const withDescription = repos.filter(
      (item: any) => item?.description !== null
    );
    const withOutDescription = repos.filter(
      (item: any) => item?.description === null
    );

    withDescription.sort((a: any, b: any) => {
      return a.description.localeCompare(b.description);
    });

    return withDescription.concat(withOutDescription);
  }, [repos]);

  return (
    <div className="py-5">
      <div className="ml-10">
        <motion.h1
          variants={ReposVariants.heading}
          initial="hidden"
          animate="enter"
          exit="exit"
          transition={{ type: "linear", duration: 3 }}
          className="mb-4 xl:text-4xl md:text-2xl lg:text-2xl sm:text-xl font-extrabold tracking-tight leading-none px-4"
        >
          <span></span>
          Github{" "}
          <span className="underline underline-offset-3 decoration-8 decoration-primary dark:decoration-secondary">
            Repos
          </span>
        </motion.h1>
      </div>
      <motion.div
        initial="hidden"
        variants={ReposVariants.items}
        animate="enter"
        exit="exit"
        transition={{ type: "linear", duration: 3 }}
        className="p-10 grid grid-cols-2 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5 mx-auto"
        style={{ overflow: "hidden" }}
      >
        {sortedRepos()?.map(
          (item: any, key: number) =>
            item.fork !== true && (
              <div
                key={key}
                className="max-w-sm sm:max-w-lg border border-gray-200 rounded-lg shadow-xl bg-base-100 hover:top-[-10px] transition top ease-in duration-400 flex flex-col "
                style={{ minHeight: "400px", overflow:'hidden' }}
              >
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight px-4">
                    {item?.name?.toUpperCase() || "-"}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 flex-grow px-4 py-2">
                  {item?.description || "-"}
                </p>
                <a
                  rel="noreferrer"
                  href={item.html_url || "#"}
                  target="_blank"
                  className="btn btn-primary"
                >
                  CHECKOUT CODE
                </a>
              </div>
            )
        )}
      </motion.div>
    </div>
  );
}

export default Repos;
