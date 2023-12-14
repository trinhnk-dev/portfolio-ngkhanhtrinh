import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Routes,
} from "react-router-dom";
import { Layout, Menu, theme } from "antd";
import Home from "./components/Home";
import Introduction from "./components/Introduction/index";
import Education from "./components/Education";
import Project from "./components/Project";
import Award from "./components/Award";
import Contact from "./components/Contact";
import { Content } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import "./components/styles/styles.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AttributionIcon from "@mui/icons-material/Attribution";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";

const App = () => {

  return (
    <Router>
      <Layout
        style={{
          minHeight: "100vh",
        }}
      >
        <Sider
          width={80}
          style={{
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: 0,
            top: 0,
            bottom: 0,
          }}
          theme="light"
        >
          <div className="demo-logo-vertical" />
          <Menu mode="inline" defaultSelectedKeys={["home"]}>
            <Menu.Item key="home" className="flex items-center">
              <Link to="/">
                <HomeOutlinedIcon className="mr-2" />
                {/* <span hidden={hidden}>Home</span> */}
              </Link>
            </Menu.Item>
            <Menu.Item key="introduction" className="flex items-center">
              <Link to="/introduction">
                <AttributionIcon className="mr-2 " />
                {/* <span hidden={hidden}>About me</span> */}
              </Link>
            </Menu.Item>
            <Menu.Item key="education">
              <Link to="/education" className="flex items-center">
                <SchoolOutlinedIcon className="mr-2" />
                {/* Education */}
              </Link>
            </Menu.Item>
            <Menu.Item key="projects">
              <Link to="/project" className="flex items-center">
                <ArticleOutlinedIcon className="mr-2" />
                {/* Projects */}
              </Link>
            </Menu.Item>
            <Menu.Item key="award">
              <Link to="/award" className="flex items-center">
                <WorkspacePremiumIcon className="mr-2" />
                {/* Awards */}
              </Link>
            </Menu.Item>
            <Menu.Item key="contact">
              <Link to="/contact" className="flex items-center">
                <PhoneEnabledIcon className="mr-2" />
                {/* Contact */}
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout ml-20">
          <Content
            style={{
              overflow: "initial",
            }}
          >
            <div className="h-screen">
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/introduction" element={<Introduction />} />
                <Route path="/education" element={<Education />} />
                <Route path="/project" element={<Project />} />
                <Route path="/award" element={<Award />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </div>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
