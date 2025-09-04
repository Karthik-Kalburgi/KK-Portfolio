import React from "react";
import { motion } from "framer-motion";

const ThankYou = () => {
  return (
    <motion.div
      className="min-h-screen flex items-center justify-center bg-gray-50 px-4"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-center max-w-xl">
        <h1 className="text-4xl font-bold text-indigo-600 mb-4">Thank You!</h1>
        <p className="text-gray-700 text-lg">
          Your message has been sent. I will get back to you soon.
        </p>
      </div>
    </motion.div>
  );
};

export default ThankYou;
