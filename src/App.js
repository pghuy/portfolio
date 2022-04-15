import React, { useEffect, useState, useRef } from "react";
import classes from "./App.module.css";
import NavBar from "./components/NavBar";
import Intro from "./components/Intro/Intro";
import About from "./components/About";
import Skills from "./components/Skills/Skills";
import Container from "./components/Project and Qualification/Container";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
const getStorageTheme = () => {
  let theme = "light-theme";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }
  return theme;
};
function App() {
  const [theme, setTheme] = useState(getStorageTheme());
  const toggleTheme = () => {
    if (theme === "dark-theme") {
      setTheme("light-theme");
    } else {
      setTheme("dark-theme");
    }
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const introRef = useRef();
  const aboutRef = useRef();
  const skillsRef = useRef();
  const projectRef = useRef();
  const qualificationRef = useRef();
  const contactRef = useRef();

  const handleScrollView = (signal) => {
    if (signal === "intro") {
      introRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (signal === "about") {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (signal === "skills") {
      const yOffset = -50;
      const y =
        skillsRef.current.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
      // skillsRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (signal === "project") {
      const yOffset = -30;
      const y =
        projectRef.current.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
      // projectRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    if (signal === "qualification") {
      qualificationRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (signal === "contact") {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    } else {
      return;
    }
    console.log("Click");
  };
  return (
    <div className={classes.App}>
      <NavBar onBackClick={handleScrollView} />
      <Intro ref={introRef} onClickFigure={toggleTheme} />
      <About ref={aboutRef} />
      <Skills ref={skillsRef} />
      <Container ref={{ projectRef, qualificationRef }} />
      <Contact ref={contactRef} />
      <Footer />
    </div>
  );
}

export default App;
