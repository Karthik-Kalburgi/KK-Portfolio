import React from "react";
import { motion } from "framer-motion";

const Home = () => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="min-h-screen flex items-center justify-center bg-gray-100 text-center px-4"
  >
    <div>
      <h2 className="text-4xl md:text-6xl font-bold text-gray-800">
        Hi, I'm a Freelance Developer
      </h2>
      <p className="mt-4 text-lg text-gray-600">
        I build responsive and modern websites using React and Tailwind CSS
      </p>
    </div>
  </motion.section>
);

export default Home;
