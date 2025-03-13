// import "./App.css";
// import ObserverProvider from "./ObserverProvider";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
// import About from "./components/About";
import Bento from "./components/Bento";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <Bento />
        {/* <About /> */}
        <Projects />
        <Footer />
      </div>
    </>
  );
}

export default App;
