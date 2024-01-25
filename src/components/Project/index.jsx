import React from "react";
import ImgSomoTask from "../../image/somo-project.png";
import ImgPetSitter from "../../image/pettsitter-project.png";
import ImgToadTrade from "../../image/toadtrade-project.png";
import { Link } from "react-router-dom";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Project = () => {
  return (
    <section className="container py-12 relative" id="project">
      <h1 className="mb-2 text-center text-6xl font-bold">Projects</h1>
      <div className="flex items-center justify-between border-b-2 px-5 py-12">
        <div className="w-3/5 rounded-md border-2 p-1 z-10">
          <img src={ImgSomoTask} alt="" />
        </div>
        <div className="w-1/3 text-center">
          <h3 className="text-lg font-bold">
            Somo Farm Task Management Application
          </h3>
          <p className="my-4 ">
            Capstone project at FPT University, web application for Somo farm
            Cuu Long, helps managers manage assigned work through reports from
            supervisor{" "}
          </p>
          <div className="mb-5 flex items-center justify-center">
            <img
              src="https://skillicons.dev/icons?i=react,redux,scss"
              alt=""
              className="h-1/2 w-1/2"
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
      <div className="flex items-center justify-between border-b-2 px-5 py-12">
        <div className="w-1/3 text-center">
          <h3 className="text-lg font-bold">ToadTrade Platform</h3>
          <p className="my-4 ">
            Web app helps students exchange, buy and sell school supplies,
            uniforms,... at a university scale. This startup project ranked in
            the top 5 out of 40 groups invited to the board for startup
            fundraising
          </p>
          <div className="mb-5 flex justify-center">
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
              className="flex w-5/12 items-center justify-center duration-200 hover:text-blue-500"
            >
              <span className="mr-1 font-semibold">Live Demo</span>
              <span className="text-xl">
                <FaExternalLinkAlt />
              </span>
            </Link>
          </div>
        </div>
        <div className="w-3/5 p-1">
          <Link
            to="https://toadtrade.vercel.app/home"
            target="_blank"
            className="duration-200 hover:opacity-75"
          >
            <img src={ImgToadTrade} alt="" className="rounded-md" />
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-between px-5 py-12">
        <div className="w-3/5 p-1">
          <Link
            to="https://pettsitter.vercel.app/"
            target="_blank"
            className="duration-200 hover:opacity-75"
          >
            <img src={ImgPetSitter} alt="" className="rounded-md" />
          </Link>
        </div>
        <div className="w-1/3 text-center">
          <h3 className="text-lg font-bold">Pet Sitter Website</h3>
          <p className="my-4 ">
            A web application that helps people who have lost pets post their
            pet searches and people who find lost pets can also post here.
          </p>
          <div className="mb-5 flex items-center justify-center">
            <img
              src="https://skillicons.dev/icons?i=html,css,js"
              alt=""
              className="h-1/2 w-1/2"
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
              className="flex w-5/12 items-center justify-center duration-200 hover:text-blue-500"
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
