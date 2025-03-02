const Hero = () => {
  return (
    <section class="bg-gray-900 max-w-[99%] mx-auto m-1 rounded">
      <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <h1 class="text-white font-poppins text-5xl ">
          Hello I'm <br /> MD ABU BAKAR SIDDIQUE SADI
        </h1>
        <p class="text-center text-wrap text-white max-w-2xl p-6 mx-auto">
          I'm a computer science enthusiast. Always curious, always learning.
        </p>

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
