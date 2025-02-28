const Hero = () => {
  return (
    <section class="bg-gray-900 max-w-[99%] mx-auto m-1">
      <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <h1 class="text-white font-poppins text-5xl ">
          MD ABU BAKAR SIDDIQUE SADI
        </h1>
        <p class="text-center text-wrap text-white max-w-2xl p-6 mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere esse
          illo ad omnis quos? Sequi quibusdam sunt voluptatum eaque, dolorum
          assumenda. Minus eaque debitis repudiandae sed nobis doloremque
          officia fuga! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
        <button
          type="button"
          className="flex items-center justify-center space-x-2 bg-blue-500 text-white py-2 px-4 rounded mt-4 mx-auto"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 9l-5 5-5-5M12 12.8V2.5" />
          </svg>
          <span>Download</span>
        </button>
      </div>
    </section>
  );
};
export default Hero;
