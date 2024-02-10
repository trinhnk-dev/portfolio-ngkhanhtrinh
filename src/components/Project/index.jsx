import React from "react";
import ImgSomoTask from "../../image/somo-project.png";
import ImgPetSitter from "../../image/pettsitter-project.png";
import ImgToadTrade from "../../image/toadtrade-project.png";
import { Link } from "react-router-dom";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Project = () => {
  return (
    <section className="container py-20 relative" id="project">
      <h1 className="text-center sm:text-6xl text-3xl font-bold">PROJECTS</h1>
      <h3 className="mb-2 text-center sm:text-2xl text-xl font-medium">(Featured project)</h3>
      <div className="flex lg:flex-row flex-col items-center lg:justify-between border-b-2 px-5 py-12">
        <div className="lg:w-3/5 w-11/12 rounded-md border-2 p-1 z-10 lg:mb-0 mb-5">
          <img src={ImgSomoTask} alt="" />
        </div>
        <div className="lg:w-1/3 w-9/12 text-center">
          <h3 className="text-xl font-bold">
            Somo Task Management System
          </h3>
          <p className="lg:my-4 my-6">
            Web application for Somo farm
            Cuu Long, helps managers manage assigned work through reports from
            supervisor.{" "}
          </p>
          <div className="mb-10 flex items-center justify-center">
            <img
              src="https://skillicons.dev/icons?i=react,redux,scss"
              alt=""
              className="lg:w-1/2 sm:w-1/4 w-1/3"
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
      <div className="flex lg:flex-row flex-col-reverse items-center lg:justify-between border-b-2 px-5 py-12">
        <div className="lg:w-1/3 w-9/12 text-center lg:mt-0 mt-5">
          <h3 className="text-xl font-bold">ToadTrade Platform</h3>
          <p className="lg:my-4 my-6 ">
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
              className="flex ml-2 items-center justify-center duration-200 hover:text-blue-500"
            >
              <span className="mr-1 font-semibold">Live Demo</span>
              <span className="text-xl">
                <FaExternalLinkAlt />
              </span>
            </Link>
          </div>
        </div>
        <div className="lg:w-3/5 w-11/12 p-1">
          <Link
            to="https://toadtrade.vercel.app/home"
            target="_blank"
            className="duration-200 hover:opacity-75"
          >
            <img src={ImgToadTrade} alt="" className="rounded-md" />
          </Link>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col items-center lg:justify-between px-5 py-12">
        <div className="lg:w-3/5 w-11/12 p-1 z-10 lg:mb-0 mb-5">
          <Link
            to="https://pettsitter.vercel.app/"
            target="_blank"
            className="duration-200 hover:opacity-75"
          >
            <img src={ImgPetSitter} alt="" className="rounded-md" />
          </Link>
        </div>
        <div className="lg:w-1/3 w-9/12 text-center">
          <h3 className="text-xl font-bold">Pet Sitter Website</h3>
          <p className="lg:my-4 my-6 ">
            A web application that helps people who have lost pets post their
            pet searches and people who find lost pets can also post here.
          </p>
          <div className="mb-10 flex items-center justify-center">
            <img
              src="https://skillicons.dev/icons?i=html,css,js"
              alt=""
              className="lg:w-1/2 sm:w-1/4 w-1/3"
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
              className="flex ml-2 items-center justify-center duration-200 hover:text-blue-500"
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
