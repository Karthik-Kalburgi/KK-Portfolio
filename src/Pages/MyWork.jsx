import React from "react";
import { motion } from "framer-motion";

const projects = [
  { id: 1, title: "Project One", image: "/images/project1.jpg" },
  { id: 2, title: "Project Two", image: "/images/project2.jpg" },
  { id: 3, title: "Project Three", image: "/images/project3.jpg" },
  { id: 4, title: "Project Four", image: "/images/project4.jpg" },
];

const MyWork = () => (
  <section className="py-16 bg-white px-4">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-semibold text-indigo-600 text-center mb-10">My Work</h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ scale: 1.03 }}
            className="overflow-hidden rounded-lg shadow"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{project.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default MyWork;
