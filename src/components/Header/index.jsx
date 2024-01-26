import { Button, Drawer } from "antd";
import React, { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";

const Header = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <nav className="shadow-gray-100 fixed top-0 z-50 flex w-full items-center	justify-between bg-white px-10 py-6 shadow-md">
      <a href="#home">
        <h1 className="text-xl font-bold ">KhanhTrinh.dev</h1>
      </a>
      <Button onClick={showDrawer} className="flex items-center lg:hidden">
        <MenuOutlined />
      </Button>
      <Drawer onClose={onClose} open={open}>
        <div
          className="flex flex-col items-center justify-between"
          style={{ height: "50%" }}
        >
          <a
            href="#home"
            className="text-lg font-medium duration-200 hover:text-blue-500"
            onClick={() => setOpen(false)}
          >
            Home
          </a>
          <a
            href="#about"
            className="text-lg font-medium duration-200 hover:text-blue-500"
            onClick={() => setOpen(false)}
          >
            About
          </a>
          <a
            href="#education"
            className="text-lg font-medium duration-200 hover:text-blue-500"
            onClick={() => setOpen(false)}
          >
            Education
          </a>
          <a
            href="#project"
            className="text-lg font-medium duration-200 hover:text-blue-500"
            onClick={() => setOpen(false)}
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-lg font-medium duration-200 hover:text-blue-500 "
            onClick={() => setOpen(false)}
          >
            Contact
          </a>
        </div>
      </Drawer>

      <div className="hidden justify-around lg:flex lg:w-1/2  xl:w-1/3">
        <a
          href="#home"
          className="text-lg font-medium duration-200 hover:text-blue-500"
        >
          Home
        </a>
        <a
          href="#about"
          className="text-lg font-medium duration-200 hover:text-blue-500"
        >
          About
        </a>
        <a
          href="#education"
          className="text-lg font-medium duration-200 hover:text-blue-500"
        >
          Education
        </a>
        <a
          href="#project"
          className="text-lg font-medium duration-200 hover:text-blue-500"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="text-lg font-medium duration-200 hover:text-blue-500 "
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Header;
