import React from "react";
import { motion } from "framer-motion";
import {
  ComputerDesktopIcon,
  CodeBracketIcon,
  EyeIcon,
} from "@heroicons/react/24/outline";

const services = [
  {
    title: "Web Design",
    desc: "Visually appealing layouts.",
    icon: ComputerDesktopIcon,
  },
  {
    title: "Frontend Development",
    desc: "Responsive, performant code.",
    icon: CodeBracketIcon,
  },
  {
    title: "UI/UX Optimization",
    desc: "Better user experience and flow.",
    icon: EyeIcon,
  },
];

const Services = () => (
  <section id="services" className="py-16 bg-gray-50 px-4">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-semibold text-indigo-600 text-center mb-10">
        My Services
      </h2>
      <div className="grid gap-6 md:grid-cols-3">
        {services.map(({ title, desc, icon: Icon }, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05, y: -4 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg"
          >
            <Icon className="h-10 w-10 text-indigo-500 mb-4" />
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-gray-600 mt-2">{desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
