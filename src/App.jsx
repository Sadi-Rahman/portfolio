// import "./App.css";
// import ObserverProvider from "./ObserverProvider";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Footer />
      </div>
    </>
  );
}

export default App;
