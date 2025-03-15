import React from "react";
import { motion } from "framer-motion";
const Projects = () => {
  return (
    <section
      id="project"
      class="bg-gray-900 opacity-90 max-w-[99%] mx-auto m-1 rounded min-h-dvh flex flex-col items-center justify-center"
    >
      <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <h1 class="text-white font-poppins text-3xl ">PROJECTS</h1>
      </div>
      <div class="flex flex-wrap justify-center">
        <motion.div
          class="p-4 max-w-sm"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <div class="flex rounded-lg h-full dark:bg-gray-800  bg-teal-400 p-8 flex-col">
            <div class="flex items-center mb-3 ">
              <h2 class="text-white dark:text-white text-lg font-medium">
                Palette Pal
              </h2>
            </div>
            <div class="flex flex-col justify-between flex-grow">
              <p class="leading-relaxed text-base text-white dark:text-gray-300">
                A React-based web application that generates color palettes
                based on different themes.
              </p>
              <a
                href="https://github.com/Sadi-Rahman/palette_pal"
                target="_blank"
                class="mt-3 text-black dark:text-white hover:text-blue-600 inline-flex items-center"
              >
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          class="p-4 max-w-sm"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div class="flex rounded-lg h-full dark:bg-gray-800 bg-teal-400 p-8 flex-col">
            <div class="flex items-center mb-3">
              <h2 class="text-white dark:text-white text-lg font-medium">
                Weather Application
              </h2>
            </div>
            <div class="flex flex-col justify-between flex-grow">
              <p class="leading-relaxed text-base text-white dark:text-gray-300">
                A web-based weather application that allows users to quickly
                find out the current weather conditions worldwide.
              </p>
              <a
                href="https://github.com/Sadi-Rahman/weather.github.io"
                target="_blank"
                class="mt-3 text-black dark:text-white hover:text-blue-600 inline-flex items-center"
              >
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          class="p-4 max-w-sm"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div class="flex rounded-lg h-full dark:bg-gray-800 bg-teal-400 p-8 flex-col">
            <div class="flex items-center mb-3">
              <h2 class="text-white dark:text-white text-lg font-medium">
                Pomodoro Timer
              </h2>
            </div>
            <div class="flex flex-col justify-between flex-grow">
              <p class="leading-relaxed text-base text-white dark:text-gray-300">
                A modern Pomodoro timer built with React and Vite, designed to
                help you stay focused and productive.
              </p>
              <a
                href="https://github.com/Sadi-Rahman/pomodoro"
                target="_blank"
                class="mt-3 text-black dark:text-white hover:text-blue-600 inline-flex items-center"
              >
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
