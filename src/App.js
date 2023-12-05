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
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import Icon from "@mdi/react";
import {
  mdiInformationOutline,
  mdiSealVariant,
  mdiAccountBoxOutline,
} from "@mdi/js";

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Router>
      <Layout
        style={{
          minHeight: "100vh",
        }}
      >
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <div className="demo-logo-vertical" />
          <Menu theme="dark" mode="inline">
            <Menu.Item key="home">
              <Link to="/">
                <HomeOutlinedIcon />
              </Link>
            </Menu.Item>
            <Menu.Item key="introduction">
              <Link to="/introduction">
                <Icon path={mdiInformationOutline} size={1} />
              </Link>
            </Menu.Item>
            <Menu.Item key="education">
              <Link to="/education">
                <SchoolOutlinedIcon />
              </Link>
            </Menu.Item>
            <Menu.Item key="projects">
              <Link to="/project">
                <ArticleOutlinedIcon />
              </Link>
            </Menu.Item>
            <Menu.Item key="award">
              <Link to="/award">
                <Icon path={mdiSealVariant} size={1} />
              </Link>
            </Menu.Item>
            <Menu.Item key="contact">
              <Link to="/contact">
                <Icon path={mdiAccountBoxOutline} size={1} />
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout bg-white h-screen">
          <Content
            style={{
              overflow: "initial",
            }}
          >
            <div
              style={{
                padding: 24,
                minHeight: 360,
                background: colorBgContainer,
              }}
              className="h-screen"
            >
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
