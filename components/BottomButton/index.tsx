import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

function BottomButton({ title, goto }: { title: string; goto: string }) {
  return (
    <Link href={goto} className="fixed bottom-0 w-full">
      <motion.button
        whileHover={{ scale: 1.1 }}
        className="my-8 mr-2 float-right px-5 py-2 bg-primary text-white text-sm font-bold tracking-wide rounded-full focus:outline-none"
      >
        {title}
      </motion.button>
    </Link>
  );
}

export default BottomButton;
