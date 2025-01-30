import React from "react";
import ImgSomoTask from "../../image/somo-project.png";
import ImgPetSitter from "../../image/pettsitter-project.png";
import ImgToadTrade from "../../image/toadtrade-project.png";
import { Link } from "react-router-dom";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Image } from "antd";

const Project = () => {
  return (
    <section className="container relative py-20" id="project">
      <h1 className="text-center text-3xl font-bold sm:text-6xl">PROJECTS</h1>
      <h3 className="mb-2 text-center text-xl font-medium sm:text-2xl">
        (Featured project)
      </h3>
      <div className="flex flex-col items-center border-b-2 px-5 py-12 lg:flex-row lg:justify-between">
        <div className="z-10 mb-5 w-11/12 rounded-md border-2 p-1 lg:mb-0 lg:w-3/5">
          <Image src={ImgSomoTask} alt="" />
        </div>
        <div className="w-9/12 text-center lg:w-1/3">
          <h3 className="text-xl font-bold">Somo Task Management System</h3>
          <p className="my-6 lg:my-4">
            Web application for Somo farm Cuu Long, helps managers manage
            assigned work through reports from supervisor.{" "}
          </p>
          <div className="mb-10 flex items-center justify-center">
            <img
              src="https://skillicons.dev/icons?i=react,redux,scss"
              alt=""
              className="w-1/3 sm:w-1/4 lg:w-1/2"
            />
          </div>
          <Link
            to="https://github.com/Capston-FPT-Somo-Farm-Task-Management/FE-Somo"
            target="_blank"
            className="flex items-center justify-center duration-200 hover:text-blue-500"
          >
            <span className="mr-1 font-semibold">Code</span>
            <span className="text-2xl">
              <FaGithub />
            </span>
          </Link>
        </div>
      </div>
      <div className="flex flex-col-reverse items-center border-b-2 px-5 py-12 lg:flex-row lg:justify-between">
        <div className="mt-5 w-9/12 text-center lg:mt-0 lg:w-1/3">
          <h3 className="text-xl font-bold">ToadTrade Platform</h3>
          <p className="my-6 lg:my-4 ">
            Web app helps students exchange, buy and sell school supplies,
            uniforms,... at a university scale. This startup project ranked in
            the top 5 out of 40 groups invited to the board for startup
            fundraising.
          </p>
          <div className="mb-10 flex justify-center">
            <img src="https://skillicons.dev/icons?i=react" alt="" />
          </div>
          <div className="flex justify-center">
            <Link
              to="https://github.com/trinhnk-dev/ToadTrade"
              target="_blank"
              className="flex items-center justify-center duration-200 hover:text-blue-500"
            >
              <span className="mr-1 font-semibold">Code</span>
              <span className="text-2xl">
                <FaGithub />
              </span>
            </Link>
            <Link
              to="https://toadtrade.vercel.app/home"
              target="_blank"
              className="ml-2 flex items-center justify-center duration-200 hover:text-blue-500"
            >
              <span className="mr-1 font-semibold">Live Demo</span>
              <span className="text-xl">
                <FaExternalLinkAlt />
              </span>
            </Link>
          </div>
        </div>
        <div className="w-11/12 p-1 lg:w-3/5">
          <Link
            to="https://toadtrade.vercel.app/home"
            target="_blank"
            className="duration-200 hover:opacity-75"
          >
            <img src={ImgToadTrade} alt="" className="rounded-md" />
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center px-5 py-12 lg:flex-row lg:justify-between">
        <div className="z-10 mb-5 w-11/12 p-1 lg:mb-0 lg:w-3/5">
          <Link
            to="https://pettsitter.vercel.app/"
            target="_blank"
            className="duration-200 hover:opacity-75"
          >
            <img src={ImgPetSitter} alt="" className="rounded-md" />
          </Link>
        </div>
        <div className="w-9/12 text-center lg:w-1/3">
          <h3 className="text-xl font-bold">Pet Sitter Website</h3>
          <p className="my-6 lg:my-4 ">
            A web application that helps people who have lost pets post their
            pet searches and people who find lost pets can also post here.
          </p>
          <div className="mb-10 flex items-center justify-center">
            <img
              src="https://skillicons.dev/icons?i=html,css,js"
              alt=""
              className="w-1/3 sm:w-1/4 lg:w-1/2"
            />
          </div>
          <div className="flex justify-center">
            <Link
              to="https://github.com/trinhnk-dev/Pet-Sitter-Website"
              target="_blank"
              className="flex items-center justify-center duration-200 hover:text-blue-500"
            >
              <span className="mr-1 font-semibold">Code</span>
              <span className="text-2xl">
                <FaGithub />
              </span>
            </Link>
            <Link
              to="https://pettsitter.vercel.app/"
              target="_blank"
              className="ml-2 flex items-center justify-center duration-200 hover:text-blue-500"
            >
              <span className="mr-1 font-semibold">Live Demo</span>
              <span className="text-xl">
                <FaExternalLinkAlt />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
