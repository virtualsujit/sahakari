"use client";
import { motion } from "framer-motion";
import React from "react";

interface Props {
  title: string;
}
const SectioinTitle = ({title}:Props) => {
  const leftRightAnimation = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      className="flex items-center justify-center gap-2"
      variants={leftRightAnimation}
      initial="initial"
      whileInView="animate"
      transition={{ duration: 1 }}
      viewport={{ once: false }}
    >
      <span className="border-2 bg-[#32488A] p-1 rounded-full w-9 h-2 block" />
      <h2 className=" font-medium  text-xl sm:text-2xl">{title}</h2>
      <span className="border-2 bg-[#32488A] p-1 rounded-full w-9 h-2 block" />
    </motion.div>
  );
};

export default SectioinTitle;
