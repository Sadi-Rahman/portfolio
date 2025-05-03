import React from "react";

const About = () => {
  return (
    <section
      id="about"
      class="bg-gray-900 opacity-90 max-w-[99%] mx-auto m-1 rounded min-h-dvh flex items-center justify-center "
    >
      <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <h1 class="text-white font-poppins text-3xl ">ABOUT ME</h1>
        <p class="text-center text-wrap text-justify text-white max-w-2xl p-6 mx-auto">
          I am a passionate developer who loves building intuitive web
          applications. When I’m not immersed in building websites, I enjoy
          reading books. Be it fiction, non-fiction or even fantasy, I love them
          all. I belive that continuous learning is the key to personal growth
          and development. I am always eager to learn new technologies and
          improve my skills.
        </p>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8 p-8">
          <div className="h-auto min-w-0 w-64 rounded-lg bg-gray-800">
            <h1 class="text-xl px-2 md:text-xl pl-2 my-2 border-l-4 font-bold border-teal-400  dark:text-gray-100">
              Experience
            </h1>
            <ul class="max-w-xs flex flex-col">
              <li class="inline-flex items-center text-start gap-x-2 py-3 px-4 text-sm font-medium bg-gray-800 border border-gray-700 text-gray-100 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg">
                Teaching Assistant <br /> American International
                University-Bangladesh (AIUB)
              </li>
            </ul>
          </div>
          <div className="h-auto min-w-0 w-64 rounded-lg bg-gray-800">
            <h1 class="text-xl px-2 md:text-xl pl-2 my-2 border-l-4 font-bold border-teal-400  dark:text-gray-100">
              Skills
            </h1>
            <ul class="max-w-xs flex flex-col">
              <li class="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-gray-800 border border-gray-700 text-gray-100 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg">
                JavaScript, React JS
              </li>
              <li class="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-gray-800 border border-gray-700 text-gray-100 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg">
                Python, C++
              </li>
              <li class="inline-flex text-left items-center gap-x-2 py-3 px-4 text-sm font-medium bg-gray-800 border border-gray-700 text-gray-100 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg">
                Machine Learning Algorithms: CNN, KNN, YOLO, GAN
              </li>
            </ul>
          </div>
          <div className="h-auto min-w-0 w-64 rounded-lg bg-gray-800">
            <h1 class="text-xl px-2 md:text-xl pl-2 my-2 border-l-4 font-bold border-teal-400  dark:text-gray-100">
              Awards
            </h1>
            <ul class="max-w-xs flex flex-col">
              <li class="inline-flex text-left items-center gap-x-2 py-3 px-4 text-sm font-medium bg-gray-800 border border-gray-700 text-gray-100 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg">
                Top 10 Finalist <br /> Digital Bangladesh Mela 2023
              </li>
            </ul>
          </div>
          <div className="h-auto min-w-0 w-64 rounded-lg bg-gray-800">
            <h1 class="text-xl px-2 md:text-xl pl-2 my-2 border-l-4 font-bold border-teal-400  dark:text-gray-100">
              Publication
            </h1>
            <ul class="max-w-xs flex flex-col">
              <li class="inline-flex items-center  gap-x-2 py-3 px-4 text-sm font-medium bg-gray-800 border border-gray-700 text-gray-100 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg">
                <p class="text-left">
                  Walking Pattern Recognition Using Generative Adversarial
                  Network
                  <br />
                  <a
                    class="no-underline hover:underline"
                    href="http://dx.doi.org/10.5120/ijca2022922510"
                    target="_blank"
                  >
                    DOI: 10.5120/ijca2022922510
                  </a>
                </p>
              </li>
            </ul>
          </div>

          <div className="mt-8 flex justify-center">
            <div className="flex items-center">
              <i className="devicon-javascript-plain text-2xl text-white opacity-50"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
