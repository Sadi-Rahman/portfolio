import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Bento from "./components/Bento";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust delay

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex gap-2 justify-center items-center h-screen">
        <div class="w-5 h-5 rounded-full animate-pulse bg-blue-600"></div>
        <div class="w-5 h-5 rounded-full animate-pulse bg-blue-600"></div>
        <div class="w-5 h-5 rounded-full animate-pulse bg-blue-600"></div>
      </div>
    );
  }

  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <Bento />
        <Projects />
        <Footer />
      </div>
    </>
  );
}

export default App;
