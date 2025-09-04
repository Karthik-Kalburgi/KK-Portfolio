import React from "react";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiJavascript } from "react-icons/si";
import { TbBrandMongodb } from "react-icons/tb";
import { FaHtml5 } from "react-icons/fa";
import { SiCsswizardry } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});
const Techonologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24 ">
      <h1 className="my-20 text-center text-4xl ">Techonologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4 ">
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-900 p-4 "
        >
          <FaReact className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-900 p-4 "
        >
          <RiNextjsFill className="text-7xl " />
        </motion.div>
        <motion.div
          variants={iconVariants(1.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-900 p-4 "
        >
          <SiJavascript className="text-7xl text-yellow-300" />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-900 p-4 "
        >
          <TbBrandMongodb className="text-7xl text-green-600" />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-900 p-4 "
        >
          <FaHtml5 className="text-7xl text-red-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(1.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-900 p-4 "
        >
          <SiCsswizardry className="text-7xl text-yellow-300" />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-900 p-4 "
        >
          <FaBootstrap className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-900 p-4 "
        >
          <FaPython className="text-7xl text-yellow-500" />
        </motion.div>
      </div>
    </div>
  );
};

export default Techonologies;
