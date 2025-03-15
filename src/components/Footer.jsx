import React from "react";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <footer
      id="footer"
      className="bg-gray-900 opacity-90 max-w-[99%] mx-auto m-1 rounded"
    >
      <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <h1 class="text-white font-poppins text-3xl ">CONTACT ME</h1>
      </div>
      <div className="container mx-auto py-8 px-4 max-w-screen-xl">
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24">
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-xl font-semibold mb-4 text-white">Socials</h4>
            <ul className="text-gray-400 space-y-2">
              <li>
                <a
                  href="https://www.linkedin.com/in/md-abu-bakar-siddique-sadi-7660aa69/"
                  target="_blank"
                  className="hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Sadi-Rahman"
                  target="_blank"
                  className="hover:text-white transition-colors"
                >
                  Github
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-xl font-semibold mb-4 text-white">
              Contact Me
            </h4>
            <div className="text-gray-400 space-y-2 ">
              <p>sadiakash1309@gmail.com</p>
              <p>+8801705397490</p>
            </div>
          </div>

          <motion.div
            className="flex flex-col items-center gap-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <a
              className="border border-white px-8 py-3 text-white font-semibold text-lg rounded-md hover:bg-white hover:text-gray-900 transition-colors"
              href="https://drive.google.com/file/d/111FBZU1pupaPCivC86ZT2KbtMO6urIe3/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              GET MY RÉSUMÉ
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
