import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      class="bg-gray-900 opacity-90 max-w-[99%] mx-auto m-1 rounded h-screen flex items-center justify-center "

      // Animates only the first time it's in view
    >
      <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <motion.h1
          class="text-white font-poppins text-5xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Hello I'm <br /> MD ABU BAKAR SIDDIQUE SADI
        </motion.h1>
        <p class="text-center text-wrap text-white max-w-2xl p-6 mx-auto">
          I'm a computer science enthusiast. Always curious, always learning.
        </p>

        {/* <div className="flex flex-col items-center gap-4">
          <a
            href="href=https://drive.google.com/file/d/1Ffj85TdI1GNzffBslGM0DpUtMgOfKKkE/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="border border-white px-5 py-2 text-white font-semibold text-lg rounded-md hover:bg-white hover:text-gray-900 transition-colors"
          >
            MY RÉSUMÉ
          </a>
        </div> */}

        <div className="flex flex-col items-center gap-4">
          <a
            href="#footer"
            className="border border-white px-5 py-2 text-white font-semibold text-lg rounded-md hover:bg-white hover:text-gray-900 transition-colors"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};
export default Hero;
