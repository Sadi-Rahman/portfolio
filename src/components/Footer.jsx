import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 max-w-[99%] mx-auto m-1 rounded">
      <div className="container mx-auto py-8 px-4 max-w-screen-xl">
        {/* Main content */}
        <div className="flex flex-col items-center space-y-12">
          {/* Links and Contact Section */}
          <div className="w-full flex flex-col md:flex-row justify-center gap-24">
            <div className="flex flex-col items-justify">
              <h4 className="text-xl font-semibold mb-4 text-white">
                Follow Me
              </h4>
              <ul className="text-gray-400 space-y-2 text-justify">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Github
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col items-justify ">
              <h4 className="text-xl font-semibold mb-4 text-white">
                Contact Me
              </h4>
              <div className="text-gray-400 space-y-2 text-justify">
                <p>sadiakash1309@gmail.com</p>
                <p>+8801705397490</p>
              </div>
            </div>
          </div>

          {/* Buttons Section */}
          <div className="w-full border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-center gap-6 mt-4">
              <button className="bg-red-600 hover:bg-red-700 px-8 py-3 text-white font-semibold text-lg rounded-md transition-colors">
                MESSAGE ME
              </button>
              <button className="border border-white px-8 py-3 text-white font-semibold text-lg rounded-md hover:bg-white hover:text-gray-900 transition-colors">
                GET MY CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
