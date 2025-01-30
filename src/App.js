import React from "react";
import Home from "./components/Home";
import Introduction from "./components/Introduction/index";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Education from "./components/Education";
import "./components/styles/styles.css";
import Header from "./components/Header";
import Experiences from "./components/Experience";

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Introduction />
      <Experiences />
      <Education />
      <Project />
      <Contact />
    </>
  );
};

export default App;
