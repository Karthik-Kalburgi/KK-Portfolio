import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

function Projects() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl font-bold  text-neutral-400"
      >
        Projects
      </motion.h1>

      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-12 flex flex-wrap lg:justify-center items-start gap-8">
            {/* Image Section with Link */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={project.image}
                  width={250}
                  height={250}
                  className="rounded-lg shadow-md hover:opacity-80 transition duration-300"
                  alt={project.title}
                />
              </a>
            </motion.div>

            {/* Text Section */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              {/* Clickable Title */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl font-semibold text-neutral-400 hover:underline"
              >
                {project.title}
              </a>

              {/* Description */}
              <p className="mt-2 mb-4 text-neutral-200">{project.description}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="mr-2 mb-2 rounded bg-neutral-400 px-2 py-1 text-sm font-medium text-purple-900"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
