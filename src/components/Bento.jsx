import React from "react";
import { motion } from "framer-motion";
const Bento = () => {
  return (
    <section
      id="about"
      className="bg-gray-900 opacity-90 max-w-[99%] mx-auto m-1 rounded min-h-screen flex items-center justify-center p-4"
    >
      <div className="py-8 px-4 mx-auto w-full max-w-screen-xl text-center lg:py-16">
        <h1 className="text-white font-poppins text-3xl mb-6">ABOUT ME</h1>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
          <div className="md:col-span-3 row-span-3">
            <motion.p
              className="text-white text-justify max-w-2xl p-6 mx-auto"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              I am a passionate developer who loves building intuitive web
              applications. When I’m not immersed in building websites, I enjoy
              reading books. Be it fiction, non-fiction or even fantasy, I love
              them all. I believe that continuous learning is the key to
              personal growth and development. I am always eager to learn new
              technologies and improve my skills.
            </motion.p>
          </div>
          <motion.div
            className="md:col-span-2 row-span-5"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <ol className="relative border-s border-gray-200 dark:border-gray-700">
              {["2024", "2023", "2017"].map((date, index) => (
                <li key={index} className="mb-10 ms-4">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <time className="mb-1 block text-left text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    {date}
                  </time>
                  <h3 className="text-lg text-left font-semibold text-gray-900 dark:text-white">
                    {index === 0 && "Master of Science in Computer Science"}
                    {index === 1 && "Bachelor of Science in Computer Science"}
                    {index === 2 && "Higher Secondary Certificate (HSC)"}
                  </h3>
                  <p className="text-base text-left font-normal text-gray-500 dark:text-gray-400">
                    {index === 0 &&
                      "American International University Bangladesh (AIUB)"}
                    {index === 1 &&
                      "American International University Bangladesh (AIUB)"}
                    {index === 2 && "Higher Secondary Certificate (HSC)"}
                  </p>
                </li>
              ))}
            </ol>
          </motion.div>
          {["Experience", "Awards", "Publication"].map((title, index) => (
            <div key={index} className="md:col-span-1 row-span-2">
              <h1 className="text-xl px-2 md:text-xl pl-2 my-2 border-l-4 font-bold border-teal-400 dark:text-gray-100">
                {title}
              </h1>
              <motion.ul
                className="max-w-xs flex flex-col mx-auto"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.6 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <li className="flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-gray-800 border border-gray-700 text-gray-100 mx-auto md:mx-0">
                  {index === 0 && "Teaching Assistant, AIUB"}
                  {index === 1 &&
                    "Top 10 Finalist, Digital Bangladesh Mela 2023"}
                  {index === 2 && (
                    <p className="text-left">
                      Walking Pattern Recognition Using GAN
                      <br />
                      <a
                        className="no-underline hover:underline"
                        href="https://www.researchgate.net/publication/366573631_Walking_Pattern_Recognition_using_Generative_Adversarial_Network"
                        target="_blank"
                      >
                        DOI: 10.5120/ijca2022922510
                      </a>
                    </p>
                  )}
                </li>
              </motion.ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bento;
