import "./App.css";
import "./index.css";
import { useState } from "react";
import Sidebar from "./Pages/Navbar/Sidebar";
import Navbar from "./Pages/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Skills from "./Pages/Skills/Skills";
import Service from "./Pages/Service/Service";
import Education from "./Pages/Education/Education";
import Project from "./Pages/Project/Project";
import Contact from "./Pages/Contact/Contact";
import Headroom from "react-headroom";
import BackToTopBtn from "./Components/BackToTopBtn";

function App() {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  return (
    <>
      <Navbar onClick={handleClick} click={click} />
      <Headroom>
        <Sidebar onClick={handleClick} click={click} />
      </Headroom>
      <Home />
      <About />
      <Skills />
      <Service />
      <Education />
      <Project />
      <BackToTopBtn />
      <Contact />
    </>
  );
}

export default App;
