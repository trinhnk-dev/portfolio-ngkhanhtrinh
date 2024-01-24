import React, { useState } from "react";
// import {
//   BrowserRouter as Router,
//   Route,
//   Link,
//   Switch,
//   Routes,
// } from "react-router-dom";
// import { Layout, Menu, theme } from "antd";
import Home from "./components/Home";
import Introduction from "./components/Introduction/index";
import Education from "./components/Education";
import Project from "./components/Project";
import Award from "./components/Award";
import Contact from "./components/Contact";
import { Router } from "react-router-dom";
// import { Content } from "antd/es/layout/layout";
// import Sider from "antd/es/layout/Sider";
import "./components/styles/styles.css";
import Header from "./components/Header";
// import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
// import AttributionIcon from "@mui/icons-material/Attribution";
// import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
// import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
// import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
// import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";

const App = () => {

  return (
    <>
    <Header/>
    <Home/>
    <Introduction/>
    <Education/>
    <Project/>
    <Contact/>
    </>
  );
};

export default App;
