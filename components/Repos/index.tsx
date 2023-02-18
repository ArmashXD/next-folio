import React from "react";
import { motion } from "framer-motion";
import { ReposVariants } from "utils/animations";

interface Props {
  repos: [];
}

function Repos({ repos }: Props) {
  return (
    <div className="py-5">
      <div className="ml-10">
        <motion.h1
          variants={ReposVariants.heading}
          initial="hidden"
          animate="enter"
          exit="exit"
          transition={{ type: "linear", duration: 3 }}
          className="mb-4 xl:text-4xl md:text-2xl lg:text-xl font-extrabold tracking-tight leading-none"
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
        className="overflow-x-auto w-[96%] justify-center ml-auto mr-auto "
      >
        <table className="table w-full">
          <thead>
            <tr>
      
              <th>Repository</th>
              <th>Total Number of commits</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {repos?.map(
              (item: any, key: number) =>
                item.fork !== true && (
                  <tr key={item.id}>
                    <td className="uppercase">{item.name}</td>
                    <td>{item.description || "-"}</td>
                    <td>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        className="badge badge-success rounded font-bold uppercase cursor-pointer"
                        href={item.html_url}
                      >
                        Checkout Code
                      </a>
                    </td>
                  </tr>
                )
            )}
          </tbody>
        </table>
      </motion.div>
    </div>
  );
}

export default Repos;
